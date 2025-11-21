import Product from "./Product";

// PhysicalProduct subclass
export default class PhysicalProduct extends Product {
  weight: number;

  constructor(name: string, price: number, weight: number, inStock: boolean = true) {
    super(name, price, inStock);
    this.weight = weight;
  }

  // Override: always apply 10% tax
  getPriceWithTax(): number {
    const finalPrice = this.price * 1.10;
    return +finalPrice.toFixed(2);
  }

  // Getter for formatted weight
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  // Override displayDetails to include weight
  displayDetails(): string {
    return `${super.displayDetails()} Weight: ${this.formattedWeight}`;
  }
}

