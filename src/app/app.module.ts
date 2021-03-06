import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketListComponent } from './body/tickets/ticket-list/ticket-list.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './body/user/user.component';
import { TicketComponent } from './body/tickets/ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CreateTicketFormComponent } from './footer/create-ticket-form/create-ticket-form.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TicketService } from './services/ticket.service';
import { DashbaordComponent } from './body/dashbaord/dashbaord.component';
import { SettingsComponent } from './body/settings/settings.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    HeaderComponent,
    UserComponent,
    TicketComponent,
    MenuComponent,
    FooterComponent,
    CreateTicketFormComponent,
    DashbaordComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TicketService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [CreateTicketFormComponent]
})
export class AppModule { }
