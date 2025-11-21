import { Product } from "./Product";

// ======================================================
// PhysicalProduct Subclass
// ------------------------------------------------------
// Represents physical items with a weight.
// Physical goods have a 10% tax.
// ======================================================

export class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    public weight: number  // additional property unique to physical products
  ) {
    super(sku, name, price); // call parent constructor
  }

  // ------------------------------------------------------
  // Getter: nicely formatted weight string (e.g. "2.5 kg")
  // ------------------------------------------------------
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  // ------------------------------------------------------
  // Override tax calculation for physical products
  // Applies 10% tax: price * 1.10
  // ------------------------------------------------------
  getPriceWithTax(): number {
    return this.price * 1.10;
  }

  // ------------------------------------------------------
  // Override: add weight to displayed details
  // ------------------------------------------------------
  displayDetails(): string {
    return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
  }
}


