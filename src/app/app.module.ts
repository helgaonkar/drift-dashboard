import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';

// Angular-Material------>
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule }from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { DealsClosedGraphComponent } from './listing/deals-closed-graph/deals-closed-graph.component';
import { DashboardListingComponent } from './listing/dashboard-listing/dashboard-listing.component';
import { CurrentPlanComponent } from './listing/current-plan/current-plan.component';
import { ModernHomeComponent } from './listing/modern-home/modern-home.component';
import { PropertiesComponent } from './listing/properties/properties.component';
import { RecentActivitiesComponent } from './listing/recent-activities/recent-activities.component';
import { DealersComponent } from './listing/dealers/dealers.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ListingComponent } from './listing/listing.component';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,

    ListingComponent,
    DealsClosedGraphComponent,
    DashboardListingComponent,
    CurrentPlanComponent,
    ModernHomeComponent,
    PropertiesComponent,
    RecentActivitiesComponent,
    DealersComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  
  // Angular-Material------>  
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule

   
   
    
  
  
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
