import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  name='';
  price=0;
  description='';

  constructor(private productService:ProductService){}

  add(f:any){
    this.productService.addProduct(f.value).subscribe( {
      next:()=>alert("Product Successfully added!")
    })
  }

}
