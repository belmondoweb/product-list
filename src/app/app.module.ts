import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriesService } from './shared/services/categories.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './shared/services/products.service';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule, // Need this module for the routing
        AppRoutingModule // Import app routing module
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ProductListComponent,
        PageNotFoundComponent,
        ProductDetailsComponent
    ],
    providers: [ // Services עבור הגדרות
        CategoriesService,
        ProductsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
