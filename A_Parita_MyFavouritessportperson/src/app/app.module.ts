import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FiltersPipe } from './filters.pipe';
import { HoverDirective } from './hover-affect.directive';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FiltersPipe,
    HoverDirective,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }