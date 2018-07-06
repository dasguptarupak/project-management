import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { StoryListComponent } from './components/plan/story-list/story-list.component';
import { DefectComponent } from './components/quality/defect/defect.component';
import { DefectListComponent } from './components/quality/defect-list/defect-list.component';
import { StoryComponent } from "./components/plan/story/story.component";


const appRoutes: Routes = [
    { path: '', component: BoardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'plan', component: StoryListComponent },
    { path: 'story', component: StoryComponent },
    { path: 'defect', component: DefectComponent },
    { path: 'defect-list', component: DefectListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}