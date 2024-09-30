"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function HerbalBentoHeroComponent() {
  const heroItems = [
    {
      title: "Nature's Finest Herbs",
      description: "Discover our premium selection of organic herbal remedies.",
      image:
        "https://images.unsplash.com/photo-1556742517-fde6c2abbe11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VsbHxlbnwwfHwwfHx8MA%3D%3D",
      cta: "Shop Now",
      link: "/shop",
    },
    {
      title: "Herbal Tea Collection",
      description: "Soothing blends for every moment.",
      image:
        "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhfGVufDB8fDB8fHww",
      cta: "Explore Teas",
      link: "/teas",
    },
    {
      title: "Natural Skincare",
      description: "Nourish your skin with herbs.",
      image:
        "https://images.unsplash.com/photo-1671492247311-df094daedc5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxza2luJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      cta: "View Skincare",
      link: "/skincare",
    },
  ];

  return (
    <section className="container mx-auto px-4 h-[80vh] flex flex-col justify-center py-10">
      <h1 className="sr-only">Welcome to Our Herbal E-commerce Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full max-h-[800px]">
        {heroItems.map((item, index) => (
          <Card
            key={index}
            className={`overflow-hidden flex flex-col ${
              index === 0 ? "sm:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <CardHeader className="p-0 flex-grow bg-red-500">
              <div className="relative h-full ">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 sm:p-6">
                  <CardTitle
                    className={`${
                      index === 0
                        ? "text-2xl sm:text-3xl lg:text-4xl"
                        : "text-xl sm:text-2xl"
                    } mb-2 text-white`}
                  >
                    {item.title}
                  </CardTitle>
                  <p
                    className={`text-white text-opacity-80 ${
                      index === 0 ? "mb-4" : "mb-2"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="p-4 sm:p-6">
              <Button asChild className="w-full">
                <a href={item.link}>{item.cta}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
