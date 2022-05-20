import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthService } from './services/auth.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppproductsComponent } from './components/appproducts/appproducts.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { ViewproductComponent } from './components/viewproduct/viewproduct.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ProductComponent } from './components/product/product.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartPageComponent,
    LoginComponent,
    RegistrationComponent,
    LandingPageComponent,
    AppproductsComponent,
    ProductlistComponent,
    EditproductComponent,
    ViewproductComponent,
    AddproductComponent,
    ProductComponent,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
     ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
