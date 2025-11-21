import Product from "../models/Product";

/**
 * Utility function to calculate tax
 * Accepts a Product and a tax rate
 */
export function calculateTax(product: Product, taxRate: number): number {
  const finalPrice = product.price * (1 + taxRate);
  return +finalPrice.toFixed(2);
}

