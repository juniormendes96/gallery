import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { AlbumsComponent } from './pages/albums/albums.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumComponent } from './pages/albums/components/album/album.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ToastrModule } from 'ngx-toastr';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { MatPaginatorPtService } from './services/impl/mat-paginator-pt.service';
import { AlbumsService } from './services/albums.service';
import { JsonPlaceholderAlbumsService } from './services/impl/json-placeholder-albums.service';
import { PhotosService } from './services/photos.service';
import { JsonPlaceholderPhotosService } from './services/impl/json-placeholder-photos.service';
import { FakeAuthService } from './services/impl/fake-auth.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { Base64TokenService } from './services/impl/base64-token.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    AlbumsComponent,
    MainHeaderComponent,
    AlbumComponent,
    PhotosComponent,
    NotFoundComponent,
    SpinnerComponent,
    AuthLayoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatRippleModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorPtService },
    { provide: AlbumsService, useClass: JsonPlaceholderAlbumsService },
    { provide: PhotosService, useClass: JsonPlaceholderPhotosService },
    { provide: AuthService, useClass: FakeAuthService },
    { provide: TokenService, useClass: Base64TokenService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
