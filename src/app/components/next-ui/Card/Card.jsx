import React from "react";
import {Card, CardHeader,CardFooter,Link, CardBody, Image} from "@nextui-org/react";
import Router from "next/navigation";

export default function Cards({item}) {
    console.log(item)
  return (
    <Card className="py-4 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{item.title}</p>
        <small className="text-default-500">{item.type}</small>
        <h4 className="font-bold text-large">{item.location}, {item.price}</h4>
      </CardHeader>
      <CardBody className="overflow-hidden py-2">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/building.jpeg"
          width={480}
        //   height={50}
        />
   
      </CardBody>
      <CardFooter className="justify-between items-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_20px)] shadow-small ml-3 z-10 my-1">
        <p className="text-tiny text-black/80">Call to Available soon.</p>
        <Link href="/buy/id">
          View 
        </Link>
      </CardFooter>
     
      
    </Card>
  );
}
