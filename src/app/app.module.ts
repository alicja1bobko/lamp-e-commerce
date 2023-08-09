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
import { ItemDescHorizontalComponent } from './home/item-desc-horizontal/item-desc-horizontal.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { NavbarLightComponent } from './navbar-light/navbar-light.component';
import { HeaderComponent } from './shop/header/header.component';
import { ChangeDisplayComponent } from './shop/change-display/change-display.component';
import { FiltersComponent } from './shop/filters/filters.component';
import { ProductsComponent } from './shop/products/products.component';
import { PriceSliderComponent } from './shop/filters/price-slider/price-slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductTypeComponent } from './shop/filters/product-type/product-type.component';
import { FormsModule } from '@angular/forms';
import { BatteryComponent } from './shop/filters/battery/battery.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

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
    ItemDescHorizontalComponent,
    FooterComponent,
    ScrollToTopComponent,
    NavbarLightComponent,
    HeaderComponent,
    ChangeDisplayComponent,
    FiltersComponent,
    ProductsComponent,
    PriceSliderComponent,
    ProductTypeComponent,
    BatteryComponent,
    ItemDetailsComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
