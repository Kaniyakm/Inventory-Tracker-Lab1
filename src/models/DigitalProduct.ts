import { Product } from "./Product";

// ======================================================
// DigitalProduct Subclass
// ------------------------------------------------------
// Represents downloadable digital items.
// Digital goods have no tax.
// ======================================================

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    public fileSize: number // size in MB
  ) {
    super(sku, name, price);
  }

  // ------------------------------------------------------
  // Getter: formatted file size (e.g. "500 MB")
  // ------------------------------------------------------
  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  // ------------------------------------------------------
  // Override tax calculation — digital items have no tax
  // ------------------------------------------------------
  getPriceWithTax(): number {
    return this.price;
  }

  // ------------------------------------------------------
  // Override: add file size to details
  // ------------------------------------------------------
  displayDetails(): string {
    return `${super.displayDetails()} | File Size: ${this.formattedFileSize}`;
  }
}


