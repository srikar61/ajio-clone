import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  public imagesUrl;
 
  ngOnInit() {
    this.imagesUrl = ['https://assets.ajio.com/cms/AJIO/WEB/06032023-UHP-D-Sponsor%20Carousel%20-P5-Brands-40-70.jpg', 'https://assets.ajio.com/cms/AJIO/WEB/06032023-UHP-D-Top-P6-JJ-Flat60.jpg', 'https://assets.ajio.com/cms/AJIO/WEB/06032023-UHP-D-Cross-P1-USPA-Min50(1).jpg'];
  }
}
