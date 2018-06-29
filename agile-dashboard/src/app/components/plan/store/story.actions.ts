import { Action } from "@ngrx/store";
import { Story } from "../story.model";

export const CREATE_STORY = 'CREATE_STORY'; 

export class CreateStory implements Action {
    readonly type = CREATE_STORY;
    constructor(public payload: Story) {}
}

export type StoryActions = CreateStory;