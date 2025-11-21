// 1. Define the Product class
//    This class models a simple product with name, price, and stock status.
class Product {
  // 2. Properties: name, price, inStock
  name: string;
  price: number;
  inStock: boolean;

  // 3. Constructor initializes the properties
  //    'inStock' defaults to true if not provided
  constructor(name: string, price: number, inStock: boolean = true) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }

  // 4. Method: displayDetails
  //    Returns a formatted string describing the product
  displayDetails(): string {
    return `${this.name} costs $${this.price} and is ${this.inStock ? "in stock" : "out of stock"}.`;
  }
}

// 5. Example usage
const product1 = new Product("Laptop", 1200); // inStock defaults to true
console.log(product1.displayDetails());
// Output: Laptop costs $1200 and is in stock.

const product2 = new Product("Headphones", 150, false); // explicitly set inStock to false
console.log(product2.displayDetails());
// Output: Headphones costs $150 and is out of stock.
