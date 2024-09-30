"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Wireless Earbuds",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1557176291-e54a116732fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNlbGx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Laptop Backpack",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Portable Charger",
    price: 29.99,
    image:
      "https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  },
];

export function AllProductsSectionComponent() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/detail/${product.id}`}>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">
                    {product.title}
                  </CardTitle>
                  <p className="text-xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Buy Now</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
