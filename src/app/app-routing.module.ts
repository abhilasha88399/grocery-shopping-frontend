import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule} from '@angular/forms';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { ProductComponent } from './components/product/product.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ViewproductComponent } from './components/viewproduct/viewproduct.component';
//import { Tags } from './components/tag/tags.component';


const routes: Routes = [
  {path : '',redirectTo :"landing-page",pathMatch :'full'},
  {path:'landing-page',component:LandingPageComponent},
  {path: 'login',component: LoginComponent},
  {path :'',component:HomeComponent },
  {path:'registration',component: RegistrationComponent},
  {path: 'home',component:HomeComponent},
  {path: 'home/login',component:LoginComponent},
  {path: 'cart-page',component:CartPageComponent},
 // {path: 'editproduct',component: EditproductComponent},
  //{path:'productlist',component:ProductlistComponent},
 // {path:'addproduct',component : AddproductComponent},
  {path:'editproduct/:id',component: EditproductComponent},

{path: 'products', component: ProductComponent, 
children: [
  {path: 'viewAll', component: ProductlistComponent},
  {path: 'add', component: AddproductComponent},
  {path: 'editproduct/:id', component: EditproductComponent},
  {path:'editproduct',component: EditproductComponent},
  {path: 'deleteproduct/:id', component: DeleteComponent},
  {path:'viewproduct/:id',component: ViewproductComponent}
]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
