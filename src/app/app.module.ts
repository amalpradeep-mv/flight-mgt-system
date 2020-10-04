import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ListallFlightsComponent } from './listall-flights/listall-flights.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { FlightService } from './service/flightservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { ListAirportComponent } from './list-airport/list-airport.component';
import { ListallAirportsComponent } from './listall-airports/listall-airports.component';
import { AirportService } from './service/airportservice';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { GetBookingComponent } from './get-booking/get-booking.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { BookingService } from './service/bookingservice';


@NgModule({
  declarations: [
    AppComponent,
    AddFlightComponent,
    ListallFlightsComponent,
    UpdateFlightComponent,
    AddAirportComponent,
    ListAirportComponent,
    ListallAirportsComponent,
    AddBookingComponent,
    GetBookingComponent,
    AllBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FlightService,HttpClient,AirportService,BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
