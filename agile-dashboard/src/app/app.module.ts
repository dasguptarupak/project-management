import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatPaginatorModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { BoardComponent } from './components/board/board.component';
import { UserstoriesComponent } from './components/userstories/userstories.component';
import { DefectComponent } from './components/quality/defect/defect.component';
import { DefectListComponent } from './components/quality/defect-list/defect-list.component';

import { DefectService } from './components/quality/defect.service';
import { DefectItemComponent } from './components/quality/defect-list/defect-item/defect-item.component';
import { DefectDataStorageService } from './components/quality/defect-data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BoardComponent,
    UserstoriesComponent,
    DefectComponent,
    DefectListComponent,
    DefectItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatPaginatorModule
  ],
  providers: [
    DefectService,
    DefectDataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
