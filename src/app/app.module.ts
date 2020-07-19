import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { HttpClientModule } from '@angular/common/http';
import { TableDummyDataComponent } from './table-dummy-data/table-dummy-data.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { CircularMenuDesignComponent } from './circular-menu-design/circular-menu-design.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BasicWebsiteComponent } from './basic-website/basic-website.component';
import { GridComponent } from './grid/grid.component';

import { SeletonLoaderModule } from './seleton-loader/seleton-loader.module';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SinglepageScrollNavbarComponent } from './singlepage-scroll-navbar/singlepage-scroll-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyListComponent,
    FamilyDetailsComponent,
    TableDummyDataComponent,
    CircularMenuDesignComponent,
    BasicWebsiteComponent,
    GridComponent,
    ImageUploadComponent,
    SinglepageScrollNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    DragDropModule,
    SeletonLoaderModule,
    ImageCropperModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
