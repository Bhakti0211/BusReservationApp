import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './Home Page/aboutus/aboutus.component';
import { ContactComponent } from './Home Page/contact/contact.component';
import { AdminloginComponent } from './Admin/Components/adminlogin/adminlogin.component';
import { NavadminComponent } from './Admin/Components/navadmin/navadmin.component';
import { ListbusComponent } from './Admin/Components/listbus/listbus.component';
import { FindbusComponent } from './Admin/Components/findbus/findbus.component';
import { EditbusComponent } from './Admin/Components/editbus/editbus.component';
import { AddbusComponent } from './Admin/Components/addbus/addbus.component';
import { RemovebusComponent } from './Admin/Components/removebus/removebus.component';
import { SearchbusComponent } from './Home Page/searchbus/searchbus.component';
import { CustomerRegistrationComponent } from './Customer/Components/customer-registration/customer-registration.component';
import { LogincustomerComponent } from './Customer/Components/logincustomer/logincustomer.component';
import { SidebarcustomerComponent } from './Customer/Components/sidebarcustomer/sidebarcustomer.component';
import { SeatbookComponent } from './Customer/Components/seatbook/seatbook.component';
import { BookingsComponent } from './Customer/Components/bookings/bookings.component';
import { WalletComponent } from './Customer/Components/wallet/wallet.component';
import { ProfileComponent } from './Customer/Components/profile/profile.component';
import { ChangepasswordComponent } from './Customer/Components/changepassword/changepassword.component';
import { PassengerComponent } from './Customer/Components/passenger/passenger.component';
import { TransactionComponent } from './Customer/Components/transaction/transaction.component';
import { CarddetailsComponent } from './Customer/Components/carddetails/carddetails.component';
import { FeedbackComponent } from './Customer/Components/feedback/feedback.component';
import { SummaryComponent } from './Customer/Components/summary/summary.component';
import { PassbookedComponent } from './Customer/Components/passbooked/passbooked.component';
import { BookingcancelComponent } from './Customer/Components/bookingcancel/bookingcancel.component';
import { EditcustomerComponent } from './Customer/Components/editcustomer/editcustomer.component';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { CheckAdminSigninGuard } from './Admin/Services/check-admin-signin.guard';


//import { UserloginComponent } from './userlogin/userlogin.component';


const routes: Routes = [
  {
    path:'app',component:AppComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'Adminlogin',component:AdminloginComponent
  },
  {
    path:'nav',
    component:NavadminComponent,
    canActivate: [CheckAdminSigninGuard],
    children: [
      {path: '', component:ListbusComponent, canActivate: [CheckAdminSigninGuard]},
      {path: 'list', component:ListbusComponent, canActivate: [CheckAdminSigninGuard]},
      {path: 'find/:busNo', component:FindbusComponent, canActivate: [CheckAdminSigninGuard],},
      {path: 'edit/:busNo', component:EditbusComponent, canActivate: [CheckAdminSigninGuard],},
      {path: 'add', component:AddbusComponent, canActivate: [CheckAdminSigninGuard],},
      {path: 'remove/:busNo', component:RemovebusComponent, canActivate: [CheckAdminSigninGuard],}
    ]
  },
  {
    path: 'searchbus', component:SearchbusComponent
  },
  {
    path: 'cregister', component:CustomerRegistrationComponent
  },
  {
    path: 'clogin', component:LogincustomerComponent
  },
  {
    path:'bookings',component:BookingsComponent
  },
  {
    path:'wallet',component:WalletComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'changepass',component:ChangepasswordComponent
  },
  {
    path:'sbook/:busNo',component:SeatbookComponent
  },
  {
    path:'sidebarcust',component:SidebarcustomerComponent
  },
  {
    path: 'passdetails',component:PassengerComponent
  },
  {
    path: 'transaction/:cId',component:TransactionComponent
  },
  {
    path:'card',component:CarddetailsComponent
  },
  {
    path:'feedback' ,component:FeedbackComponent
  },
  {
    path:'summary' ,component:SummaryComponent
  },
  {
    path:'passbook/:tId' ,component:PassbookedComponent
  },
  {
    path:'bookingcancel/:tId' ,component:BookingcancelComponent
  },
  {
    path:'editcust/:customerId' ,component:EditcustomerComponent
  },
  {
    path: '' , redirectTo: 'searchbus', pathMatch: 'full'
  }, 
  {
    path: '**', component: BadRequestComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
