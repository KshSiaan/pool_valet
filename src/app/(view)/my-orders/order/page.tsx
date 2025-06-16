import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="my-12! px-8!">
      <div className="w-2/3 mx-auto!">
        <h1 className="text-3xl mb-6!">Order Details </h1>
        <div className="w-full py-3! px-2! text-lg flex justify-between items-center bg-secondary">
          <h3>Order Summary</h3>
          <p className="flex items-center gap-1 text-amber-500">
            <span className="size-1.5 bg-amber-500 rounded-full" />
            Pending
          </p>
        </div>
        <div className="">
          {dataset.map((x, i) => (
            <div
              className="w-full py-3! px-2! text-base flex justify-between items-center font-semibold"
              key={i}
            >
              <h3>{x.for}:</h3>
              <p className="">{x.is}</p>
            </div>
          ))}
        </div>
        <div className=" mt-12! space-y-6!">
          <h3 className="text-2xl">Attachments</h3>
          <Image
            src="/image/header-bg.jpg"
            width={1200}
            height={800}
            className="w-full aspect-video object-center object-cover rounded-xl"
            alt="image"
          />
          <Button className="w-full bg-[#003B73]" size="lg">
            <Link href="/bids">Check Bidding</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

const dataset = [
  { for: "Service", is: "Pool Cleaning" },
  { for: "Request Date", is: "May 26, 2025" },
  { for: "Service Time", is: "May 28, 2025 – 10:00 AM" },
  { for: "Location", is: "1234 Poolside Lane, Atlanta, GA" },
  { for: "Notes", is: "Full cleanup needed. Lots of leaves and dirt." },
];
