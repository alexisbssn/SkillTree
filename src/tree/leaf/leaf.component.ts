import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tree-leaf',
  templateUrl:'./leaf.component.html'
})
export class LeafComponent  {
  @Input()
  name: string;
}
