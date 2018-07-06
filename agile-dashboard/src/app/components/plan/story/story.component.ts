import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { Story } from '../story.model';
import * as StoryActions from '../store/story.actions';


@Component({
  selector: 'app-userstory',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  storyForm: FormGroup;

  constructor(private router: Router, private store: Store<{story: {stories: Story}}>) { }

  onCreateStory() {
    // console.log('Defect Created!', this.storyForm.value);
    // this.defectDataStorageService.createDefect(this.storyForm.value);
    this.store.dispatch(new StoryActions.CreateStory(this.storyForm.value));
    this.router.navigate(['/plan']);
  }

  private initForm() {
      let storyID = '';
      let storyName = '';
      let storyProject = '';
      let storyState = '';
      let storyRelease = '';
      let storyIteration = '';
      let storyOwner = '';
      let storyEstimation = '';

      this.storyForm = new FormGroup({
        'id': new FormControl(storyID, Validators.required),
        'name': new FormControl(storyName, Validators.required),
        'project': new FormControl(storyProject, Validators.required),
        'state': new FormControl(storyState, Validators.required),
        'release': new FormControl(storyRelease, Validators.required),
        'iteration': new FormControl(storyIteration, Validators.required),
        'owner': new FormControl(storyOwner, Validators.required),
        'estimation': new FormControl(storyEstimation, Validators.required),
      });
  }
  ngOnInit() {
    this.initForm();
  }

}
