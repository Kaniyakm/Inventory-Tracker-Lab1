// ======================================================
// Product Base Class (Abstract)
// ======================================================
// This is the shared parent class for PhysicalProduct
// and DigitalProduct. It must be exported so that other
// modules can import it.
// ======================================================

export abstract class Product {
  constructor(
    public sku: string,
    public name: string,
    public price: number
  ) {}

  // Display product details
  displayDetails(): string {
    return `Product: ${this.name} (SKU: ${this.sku}) — $${this.price.toFixed(2)}`;
  }

  // Abstract method that child classes MUST implement
  abstract getPriceWithTax(): number;
}

