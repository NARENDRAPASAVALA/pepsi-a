import { WinnerComponent } from './winner/winner.component';
import { SpinComponent } from './spin/spin.component';
import { CodeGenerateComponent } from './code-generate/code-generate.component';
import { CropImageComponent } from './crop-image/crop-image.component';
import { ImageComponent } from './image/image.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'about', component: AboutComponent
  },
  { path: 'image', component: ImageComponent},
  { path: 'crop_image', component: CropImageComponent},
  { path: 'code_generate', component: CodeGenerateComponent},
  { path: 'spin', component: SpinComponent},
  { path: 'winner', component:WinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
