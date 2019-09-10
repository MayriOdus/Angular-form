import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {Routes,RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { FormModelGroupComponent } from './components/form-model-group/form-model-group.component';
import { NormalComponent } from './components/normal/normal.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/form_normal', pathMatch: 'full' },  
  { path: 'form_normal', component: NormalComponent },
  { path: 'form_template_driven', component: TemplateDrivenComponent },
  { path: 'form_model_group', component: FormModelGroupComponent },
  { path: 'form_reactive', component: ReactiveComponent },
  { path: 'form_builder', component: FormBuilderComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    TemplateDrivenComponent,
    FormModelGroupComponent,
    NormalComponent,
    FormBuilderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
