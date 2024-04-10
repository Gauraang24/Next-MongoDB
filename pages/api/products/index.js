import { connectDb } from "../../../utils/db";
import Product from "../../../models/product";

export default async function handler(req, res) {
  await connectDb();

  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
}
