import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit  {
  id:any;
  data:any={};
constructor(private routs:ActivatedRoute,private service:ProductsService){
  this.id = this.routs.snapshot.paramMap.get('id');
  console.log(this.id);
}
ngOnInit(): void {
  this.getproductbyis();
}
getproductbyis(){
  this.service.getproducrbyid(this.id).subscribe((res:any) => { this.data=res})
}

}
