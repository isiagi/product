"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon } from "lucide-react";

export function ProductDetailComponent() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <img
              alt="Herbal Vitality Boost"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              height="400"
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  alt={`Product image ${i + 1}`}
                  className="w-full h-auto object-cover rounded-md shadow"
                  height="150"
                  src="https://images.unsplash.com/photo-1530914547840-346c183410de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                  style={{
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                  width="150"
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-green-800">
              Herbal Vitality Boost
            </h1>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                />
              ))}
              <span className="text-green-600">(128 reviews)</span>
            </div>
            <p className="text-2xl font-semibold text-green-700">$39.99</p>
            <p className="text-gray-600">
              Experience the power of nature with our Herbal Vitality Boost.
              This carefully crafted blend of organic herbs is designed to
              enhance your energy, support your immune system, and promote
              overall well-being.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label
                  htmlFor="quantity"
                  className="font-medium text-green-800"
                >
                  Quantity:
                </label>
                <select
                  id="quantity"
                  className="border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="benefits" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-green-100 rounded-lg">
            <TabsTrigger
              value="benefits"
              className="data-[state=active]:bg-white rounded-lg"
            >
              Benefits
            </TabsTrigger>
            <TabsTrigger
              value="ingredients"
              className="data-[state=active]:bg-white rounded-lg"
            >
              Ingredients
            </TabsTrigger>
            <TabsTrigger
              value="usage"
              className="data-[state=active]:bg-white rounded-lg"
            >
              Usage
            </TabsTrigger>
          </TabsList>
          <TabsContent value="benefits" className="mt-4 text-green-800">
            <ul className="list-disc pl-5 space-y-2">
              <li>Boosts energy levels naturally</li>
              <li>Supports immune system function</li>
              <li>Enhances mental clarity and focus</li>
              <li>Promotes overall well-being</li>
            </ul>
          </TabsContent>
          <TabsContent value="ingredients" className="mt-4 text-green-800">
            <ul className="list-disc pl-5 space-y-2">
              <li>Organic Ashwagandha Root</li>
              <li>Organic Rhodiola Rosea</li>
              <li>Organic Ginseng</li>
              <li>Organic Green Tea Extract</li>
              <li>Organic Turmeric</li>
            </ul>
          </TabsContent>
          <TabsContent value="usage" className="mt-4 text-green-800">
            <p>
              Take 2 capsules daily with water, preferably with a meal. For best
              results, use consistently for at least 4-6 weeks. Consult with a
              healthcare professional before use if you have any medical
              conditions or are taking medications.
            </p>
          </TabsContent>
        </Tabs>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <img
                  alt={`Related product ${i + 1}`}
                  className="w-full h-48 object-cover"
                  height="200"
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Herbal Product {i + 1}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Brief description of the product...
                  </p>
                  <p className="font-bold text-green-700">$29.99</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
