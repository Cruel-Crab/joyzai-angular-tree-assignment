import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent implements OnInit {
  @Input() data: Record<string, string[]> = {};
  @Input() root: string = '';

  constructor() {}

  ngOnInit(): void {}

  isRoot(): boolean {
    // if an element is not found in any of the child arrays, then it is a root
    for (const childArray of Object.values(this.data)) {
      if (childArray.includes(this.root)) return false;
    }
    return true;
  }
}
