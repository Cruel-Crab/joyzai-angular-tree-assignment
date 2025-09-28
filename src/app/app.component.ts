import { Component } from '@angular/core';
import { tree as TREE_DATA } from './tree-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joyzAiFeTask';
  tree = TREE_DATA;
}
