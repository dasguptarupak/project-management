import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Story } from '../story.model';

@Component({
  selector: 'story',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  userstories: Observable<{stories: Story[]}>;
  displayedColumns = ['id', 'name', 'project', 'state', 'release', 'iteration', 'owner', 'estimation'];
  panelOpenState = false;

  constructor(private store: Store<{story: {stories: Story[]}}>) { }

  onRowClicked(row) {
    console.log(row);
  }

  ngOnInit() {
    this.userstories = this.store.select('story');
  }
}
