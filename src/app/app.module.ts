import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardItemComponent } from './card-item/card-item.component';
import { NavbarComponent } from './navbarhung/navbar.component';
import { NavbarcustComponent } from './navbarcust/navbarcust.component';
import { MinuListComponent } from './minu-list/minu-list.component';
import { AdditemFormComponent } from './additem-form/additem-form.component';
import { FormsModule } from '@angular/forms';
import { HomeDComponent } from './home-d/home-d.component';
import { HomeCardComponent } from './home-card/home-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CardItemComponent,
    NavbarcustComponent,
    MinuListComponent,
    AdditemFormComponent,
    HomeDComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
