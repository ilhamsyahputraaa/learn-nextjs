import Image from "next/image";
import React from "react";

type ResponseType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: 
    {
      rating: number;
      comment: string;
      date: Date;
      reviewerName: string;
      reviewerEmail: string;
    }[]
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail:string
};

async function FetchAPI({searchParams}:{searchParams?:{query?:string}}) {
  const query = searchParams?.query || ""; 

  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`,
    {
      cache: "no-store",
    }
  );

  const result = await response.json();

  console.log(result.products);

  if (!response) {
    return;
  }

  return (
    <div className="flex flex-col gap-5 w-1/3">
   
      {result.products.map((item: ResponseType) => (
        <div
          key={item.id}
          className="p-5 flex flex-col gap-2 bg-gray-100/10 rounded-lg hover:bg-gray-100/20 duration-500 cursor-pointer hover:shadow-xl hover:shadow-amber-50/10"
        >
          <Image src={item.thumbnail} alt="tes" width={1000} height={1000} className="object-cover aspect-auto"/>
          <div className="text-lg font-bold">{item.title}</div>
          <div className="text-gray-500">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default FetchAPI;
