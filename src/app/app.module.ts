import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { DesignersComponent } from './designers/designers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { HeroComponent } from './home/hero/hero.component';
import { BestsellersComponent } from './home/bestsellers/bestsellers.component';
import { SaleComponent } from './home/sale/sale.component';
import { BestDesignerComponent } from './home/best-designer/best-designer.component';
import { ItemDescComponent } from './home/item-desc/item-desc.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    DesignersComponent,
    ContactsComponent,
    NotFoundComponent,
    NavbarComponent,
    CartComponent,
    HeroComponent,
    BestsellersComponent,
    SaleComponent,
    BestDesignerComponent,
    ItemDescComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
