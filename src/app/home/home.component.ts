import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [
    {
      imageUrl: 'https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-AjioMania-Aflingwiththewest-D-P1-Levisjack&jones-Starting399.jpg',
      
      price: 1439.99
    },
    {
      imageUrl: 'https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-AjioMania-Aflingwiththewest-D-P2-Veromodazink-Starting599.jpg',
      
      price: 2229.99
    },
    {
      imageUrl: 'https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-AjioMania-Aflingwiththewest-D-P3-Leviswrangler-Starting999.jpg',
      
      price: 3879.99
    },
    {
      imageUrl: 'https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-AjioMania-Aflingwiththewest-D-P4-Allensollyraymond-Starting899.jpg',
      
      price: 7459.99
    },
    {
      imageUrl: 'https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-Ajiomania-Summervoyagecompanion-D-P1-Pumareebook-Starting1099.jpg',
     
      price: 3239.99
    }
    // Add more products as needed
  ];

  isOverflow = false;

  hoverCard(isHovered: boolean): void {
    if (isHovered) {
      this.isOverflow = true;
    } else {
      this.isOverflow = false;
    }
  }

  scrollLeft(): void {
    const container = document.querySelector('.cards-wrapper');
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    const container = document.querySelector('.cards-wrapper');
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
}

interface Product {
  imageUrl: string;
  
  price: number;
}
