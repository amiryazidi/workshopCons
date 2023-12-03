import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateappartementComponent } from './updateappartement/updateappartement.component';
@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    MonComposantComponent,
    FormResidenceComponent,
    ApartmentsComponent,
    NotFoundComponent,
    FormApartmentComponent,
    UpdateappartementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
