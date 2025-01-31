import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent, title:"Home"},
  {path:"about", component:AboutComponent, title:"About"},
  {path:"gallery", component:GalleryComponent, title:"Gallery"},
  {path:"**", component:NotFoundComponent, title:"Page Not Found"},

];
