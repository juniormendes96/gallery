import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MainComponent } from './shared/layouts/main/main.component';
import { AlbumsComponent } from './pages/albums/albums.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent, AlbumsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
