import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { TimeElapsedPipe } from './time-elapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    NewQuoteComponent,
    EditProfileComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    TimeElapsedPipe
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
