import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { ActorsComponent } from './actors/actors.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { Product } from './Core/Models/product';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ProductsComponent } from './products/products.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ToEuroConvertComponent } from './to-euro-convert/to-euro-convert.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'product', pathMatch:'full'},
  {path:'product', component:ProductsComponent},
  {path:'user', component:UsersComponent},
  {path:'editProduct/:id', component:EditProductComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'TemplateDrivenForm',component: TemplatedrivenComponent},
  {path:'convertiseur',component: ConvertisseurComponent},
  {path:'to-euro-convert',component: ToEuroConvertComponent},
  {path:'actor',component: ActorComponent},
  {path:'actors',component: ActorsComponent},
  {path:'**', component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
