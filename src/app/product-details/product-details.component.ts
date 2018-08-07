import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductsService } from '../shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product: Product;

    // route = המידע בנוגע לנתיב
    // router = פעולות על הנתיבים
    constructor(private productsService: ProductsService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => 
            this.product = this.productsService.getProduct(params.id)
        );
    }

    goBack(): void {
        this.router.navigate(["/products"]);
    }
}
