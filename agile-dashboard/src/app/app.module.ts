import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatTableModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatCardModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { BoardComponent } from './components/board/board.component';
import { StoryListComponent } from './components/plan/story-list/story-list.component';
import { DefectComponent } from './components/quality/defect/defect.component';
import { DefectListComponent } from './components/quality/defect-list/defect-list.component';
import { DefectItemComponent } from './components/quality/defect-list/defect-item/defect-item.component';
import { StoryComponent } from './components/plan/story/story.component';

import { DefectService } from './components/quality/defect.service';
import { DefectDataStorageService } from './components/quality/defect-data-storage.service';
import { defectReducer } from './components/quality/store/defect.reducers';
import { storyReducer } from './components/plan/store/story.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BoardComponent,
    StoryListComponent,
    DefectComponent,
    DefectListComponent,
    DefectItemComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({defect: defectReducer, story: storyReducer}),

    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatCardModule,
  ],
  providers: [
    DefectService,
    DefectDataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
