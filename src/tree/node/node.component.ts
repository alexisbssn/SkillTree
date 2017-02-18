import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tree-node',
    templateUrl:'./node.component.html'
})
export class NodeComponent  {
    @Input()
    name: string;
}
