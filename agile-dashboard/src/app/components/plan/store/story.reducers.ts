import { Story } from "../story.model";
import * as StoryActions from "./story.actions";

const initialState = {
    stories: [
        new Story(
            'US-122000',
            'Implement Login Page',
            'Team X',
            'New',
            'EDP 1808',
            'EDP 1808 SPRINT 1',
            'Rupak Dasgupta',
            '40h'
        ),
        new Story(
            'US-122001',
            'Implement Profile Page',
            'Team X',
            'New',
            'EDP 1808',
            'EDP 1808 SPRINT 1',
            'Rupak Dasgupta',
            '80h'
        )
    ]
};

export function storyReducer (state = initialState, action: StoryActions.StoryActions) {
    switch (action.type) {
        case StoryActions.CREATE_STORY : 
            return {
                ...state,
                stories: [...state.stories, action.payload]
            };
        default: 
            return state;
    }
}