import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { ShowListComponent } from './show-list/show-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateQuestionComponent,
    ShowListComponent,
    SvgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
