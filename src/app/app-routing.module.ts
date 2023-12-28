
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  
  {path:'', redirectTo:'listing', pathMatch:'full'},


  {path:'home', component:HomeComponent},
  
  {path:'listing', component:ListingComponent},
  
  {path:'**', component:ListingComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
