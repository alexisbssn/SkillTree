import { Component } from '@angular/core';
import { LeafComponent } from './leaf/leaf.component';

@Component({
  moduleId: module.id,
  selector: 'tree-root',
  templateUrl: './root.component.html'
})
export class RootComponent  {
  name = 'Angular';
}
