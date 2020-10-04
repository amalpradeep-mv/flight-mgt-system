import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { GetBookingComponent } from './get-booking/get-booking.component';
import { ListAirportComponent } from './list-airport/list-airport.component';
import { ListallAirportsComponent } from './listall-airports/listall-airports.component';
import { ListallFlightsComponent } from './listall-flights/listall-flights.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';

const routes: Routes = [
  {path:'add-airport', component:AddAirportComponent},
  {path:'list-airport', component:ListAirportComponent},
  {path:'listall-airports', component:ListallAirportsComponent},
  {path:'add-flight', component:AddFlightComponent },
  {path:'update-flight', component:UpdateFlightComponent},
  {path:'listall-flights', component:ListallFlightsComponent},
  { path:'add-booking', component:AddBookingComponent},
  { path:'getbooking', component:GetBookingComponent},
  { path: 'allbooking', component:AllBookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
