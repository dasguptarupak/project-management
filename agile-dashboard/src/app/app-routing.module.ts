import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { UserstoriesComponent } from './components/userstories/userstories.component';
import { DefectComponent } from './components/quality/defect/defect.component';
import { DefectListComponent } from './components/quality/defect-list/defect-list.component';


const appRoutes: Routes = [
    { path: '', component: BoardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'userstories', component: UserstoriesComponent },
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