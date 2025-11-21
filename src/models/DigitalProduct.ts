import Product from "./Product";

// DigitalProduct subclass
export default class DigitalProduct extends Product {
  fileSize: number;

  constructor(name: string, price: number, fileSize: number, inStock: boolean = true) {
    super(name, price, inStock);
    this.fileSize = fileSize;
  }

  // Override: no tax for digital products
  getPriceWithTax(): number {
    return this.price;
  }

  // Getter for formatted file size
  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  // Override displayDetails to include file size
  displayDetails(): string {
    return `${super.displayDetails()} File Size: ${this.formattedFileSize}`;
  }
}

