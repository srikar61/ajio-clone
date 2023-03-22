import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
<<<<<<< HEAD
import { CheckoutComponent } from './checkout/checkout.component';
=======
>>>>>>> a940dffaab7f6a77e540341adec49df36c132213
import { ContactComponent } from './contact/contact.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DealsComponent } from './deals/deals.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { ProductsComponent } from './products/products.component';
=======
>>>>>>> a940dffaab7f6a77e540341adec49df36c132213
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'datepicker',
    component:DatepickerComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'deals',
    component:DealsComponent
  },
  {
    path:'',
    redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
<<<<<<< HEAD
    path:'products',
    component:ProductsComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
=======
>>>>>>> a940dffaab7f6a77e540341adec49df36c132213
    path:'**',
    redirectTo:'/home',pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
