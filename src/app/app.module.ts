import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { ErreurComponent } from './erreur/erreur.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ProductService } from './Core/Services/product.service';
import { ProductitemComponent } from './productitem/productitem.component';
import { ToEuroConvertComponent } from './to-euro-convert/to-euro-convert.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ActorComponent } from './actor/actor.component';
import { ActorsComponent } from './actors/actors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    UsersComponent,
    ErreurComponent,
    EditProductComponent,
    AddProductComponent,
    TemplatedrivenComponent,
    ProductitemComponent,
    ToEuroConvertComponent,
    ConvertisseurComponent,
    ActorComponent,
    ActorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
