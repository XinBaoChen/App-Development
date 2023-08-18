import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import new component
import { ProductsComponent } from './products/products.components';
import { ProductComponent } from './product/product.component';

//import in the Ng Modules
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
