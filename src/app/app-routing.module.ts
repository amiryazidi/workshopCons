import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateappartementComponent } from './updateappartement/updateappartement.component';

const routes: Routes = [
  {path: '', redirectTo: 'residences', pathMatch: 'full'},
  {path: 'residences', component: ResidencesComponent},
  {path: 'form-residence', component: FormResidenceComponent},
  {path: 'showApparts/:id', component: ApartmentsComponent},
  {path:'addApart', component:FormApartmentComponent},
  {path:'update/:id', component:UpdateappartementComponent},
  {path:'**',component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
