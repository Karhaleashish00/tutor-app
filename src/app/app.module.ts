import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/01homepage/homepage.component';
import { CategoryComponent } from './components/02category/category.component';
import { NavigationComponent } from './components/01homepage/navigation/navigation.component';
import { HeaderComponent } from './components/01homepage/header/header.component';
import { TopCategoryComponent } from './components/01homepage/top-category/top-category.component';
import { TopCoursesComponent } from './components/01homepage/top-courses/top-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CategoryComponent,
    NavigationComponent,
    HeaderComponent,
    TopCategoryComponent,
    TopCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
