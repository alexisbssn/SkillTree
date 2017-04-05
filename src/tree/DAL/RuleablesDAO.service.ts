import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ruleable } from '../model/ruleable';
import { Group } from '../model/group';
import { Skill } from '../model/skill';
import { Rule } from '../model/rules/rule';
import { PointsInRule } from '../model/rules/PointsInRule';
import { MaxPointsRule } from '../model/rules/MaxPointsRule';
import { MaxPointsPerRule } from '../model/rules/MaxPointsPerRule';
import { MaxChildrenRule } from '../model/rules/MaxChildrenRule';
import { MaxChildrenPerRule } from '../model/rules/MaxChildrenPerRule';
import { CostRule } from '../model/rules/CostRule';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class RuleablesDAOService {

    private _references: ReplaySubject<IdRuleableTuple>; //see bottom for tuple class

  constructor(private http: Http) {
  }

  public GetData(source: string){
      this._references = new ReplaySubject();
      let typedObjects: Subject<Ruleable> = new Subject();

      let untypedObjects: Array<Ruleable>;
      this.http.get(source).subscribe(result => {
          untypedObjects = result.json()

          for(let obj of untypedObjects){
              typedObjects.next(this.InstanciateRuleable(obj));
          }
      });

      return typedObjects;
  }

  private InstanciateRuleable(untyped: Ruleable) : Ruleable{
      let instance: Ruleable | any;

      switch(untyped.Type){
          case "Skill":
            instance = new Skill();
            instance.Description = this.CheckUndef((<Skill>untyped).Description, "");
            break;
          case "Group":
            instance = new Group();
            instance.Items = new Array<Ruleable>();
            let items = this.CheckUndef((<Group>untyped).Items, new Array<Ruleable>())
            for(let item of items){
                instance.Items.push(this.InstanciateRuleable(item));
            }
            break;
        default:
            return undefined;
      }
      let rules = this.CheckUndef(untyped.Rules, new Array<Rule>());
      instance.Rules = new Array<Rule>();
      for(let rule of rules){
          instance.Rules.push(this.InstanciateRule(rule));
      }

      instance.Name = this.CheckUndef(untyped.Name, "");

      if((<any>untyped).id !== undefined)
      {
          this.AddReference(instance, (<any>untyped).id);
      }

      return instance;
  }

  private InstanciateRule(untyped: Rule): Rule{
      let instance: Rule | any;

      switch(untyped.Type){
          case "PointsIn":
            instance = new PointsInRule();
            instance.Operator = this.CheckUndef((<PointsInRule>untyped).Operator, ">");
            instance.Value = this.CheckUndef((<PointsInRule>untyped).Value, 0);
            this._references.subscribe(ref =>{
                if(ref.id == (<any>untyped).Subject.$ref){
                    instance.Subject = ref.ruleable;
                }
            });
            break;
          case "MaxPoints":
            instance = new MaxPointsRule();
            instance.Value = this.CheckUndef((<MaxPointsRule>untyped).Value, 1);
            break;
          case "MaxPointsPer":
            instance = new MaxPointsPerRule();
            instance.Value = this.CheckUndef((<MaxPointsPerRule>untyped).Value, 1);
            this._references.subscribe(ref =>{
                if(ref.id == (<any>untyped).Subject.$ref){
                    instance.Subject = ref.ruleable;
                }
            });
            break;
          case "MaxChildren":
            instance = new MaxChildrenRule();
            instance.Value = this.CheckUndef((<MaxChildrenRule>untyped).Value, 1);
            break;
          case "MaxChildrenPer":
            instance = new MaxChildrenPerRule();
            instance.Value = this.CheckUndef((<MaxChildrenPerRule>untyped).Value, 1);
            this._references.subscribe(ref =>{
                if(ref.id == (<any>untyped).Subject.$ref){
                    instance.Subject = ref.ruleable;
                }
            });
            break;
          case "Cost":
            instance = new CostRule();
            instance.Value = this.CheckUndef((<CostRule>untyped).Value, 1);
            instance.CostType = this.CheckUndef((<CostRule>untyped).CostType, 1);
            break;
          default:
            return undefined;
      }

      let rules = this.CheckUndef(untyped.Rules, new Array<Rule>());
      instance.Rules = new Array<Rule>();
      for(let rule of rules){
          instance.Rules.push(this.InstanciateRule(rule));
      }

      instance.Name = this.CheckUndef(untyped.Name, "");
      instance.ErrorMessage = this.CheckUndef(untyped.Name, "");

      return instance;
  }

  private CheckUndef(value: any, deflt: any): any{
      if(value === undefined || value === null){
          return deflt;
      }
      else{
          return value;
      }
  }

  private AddReference(item: Ruleable, id: string){
      this._references.next(new IdRuleableTuple(id, item));
  }
}

class IdRuleableTuple{
    constructor(public id: string, public ruleable: Ruleable){}
}
