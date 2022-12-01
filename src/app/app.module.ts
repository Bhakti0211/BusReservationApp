import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbusComponent } from './Admin/Components/listbus/listbus.component';
import { FindbusComponent } from './Admin/Components/findbus/findbus.component';
import { AddbusComponent } from './Admin/Components/addbus/addbus.component';
import { EditbusComponent } from './Admin/Components/editbus/editbus.component';
import { RemovebusComponent } from './Admin/Components/removebus/removebus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import{MatInputModule} from '@angular/material/input';
import{MatCardModule} from '@angular/material/card';
import { AdminloginComponent } from './Admin/Components/adminlogin/adminlogin.component';
import { AboutusComponent } from './Home Page/aboutus/aboutus.component';
import { ContactComponent } from './Home Page/contact/contact.component';
import { NavadminComponent } from './Admin/Components/navadmin/navadmin.component';
import { SearchbusComponent } from './Home Page/searchbus/searchbus.component';
import { CustomerRegistrationComponent } from './Customer/Components/customer-registration/customer-registration.component';
import { LogincustomerComponent } from './Customer/Components/logincustomer/logincustomer.component';
import { SeatbookComponent } from './Customer/Components/seatbook/seatbook.component';
import { SidebarcustomerComponent } from './Customer/Components/sidebarcustomer/sidebarcustomer.component';
import { BookingsComponent } from './Customer/Components/bookings/bookings.component';
import { ProfileComponent } from './Customer/Components/profile/profile.component';
import { ChangepasswordComponent } from './Customer/Components/changepassword/changepassword.component';
import { WalletComponent } from './Customer/Components/wallet/wallet.component';
import { PassengerComponent } from './Customer/Components/passenger/passenger.component';
import { TransactionComponent } from './Customer/Components/transaction/transaction.component';
import { CarddetailsComponent } from './Customer/Components/carddetails/carddetails.component';
import { FeedbackComponent } from './Customer/Components/feedback/feedback.component';
import { SummaryComponent } from './Customer/Components/summary/summary.component';
import { PassbookedComponent } from './Customer/Components/passbooked/passbooked.component';
import { BookingcancelComponent } from './Customer/Components/bookingcancel/bookingcancel.component';
import { EditcustomerComponent } from './Customer/Components/editcustomer/editcustomer.component';
import { BadRequestComponent } from './bad-request/bad-request.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbusComponent,
    FindbusComponent,
    AddbusComponent,
    EditbusComponent,
    RemovebusComponent,
    AdminloginComponent,
    AboutusComponent,
    ContactComponent,
    NavadminComponent,
    SearchbusComponent,
    CustomerRegistrationComponent,
    LogincustomerComponent,
    SeatbookComponent,
    SidebarcustomerComponent,
    BookingsComponent,
    ProfileComponent,
    ChangepasswordComponent,
    WalletComponent,
    PassengerComponent,
    TransactionComponent,
    CarddetailsComponent,
    FeedbackComponent,
    SummaryComponent,
    PassbookedComponent,
    BookingcancelComponent,
    EditcustomerComponent,
    BadRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    NgxPrintModule,
    BrowserAnimationsModule,MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
