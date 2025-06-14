import React from "react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function MadeSimple() {
  return (
    <section className=" text-center mt-12! space-y-3!">
      <h4 className="text-accent-foreground font-semibold">
        Your Pool is our priority
      </h4>
      <h2 className="text-3xl">Pool Service Made Simple</h2>
      <h4 className="text-accent-foreground font-semibold">
        Professional pool care solutions for every type of property
      </h4>
      <div className="grid grid-cols-2 gap-6 w-full mt-12!">
        <div className="flex flex-col justify-between h-full gap-6">
          {list.map((x, i) => (
            <div
              key={i}
              className="flex flex-row justify-between items-start border rounded-r-lg flex-1 p-3! rounded-lg bg-gradient-to-r from-[#33628F] to-[#8AA5BF] gap-6"
            >
              <div className="">
                <div className="rounded-full size-12 border bg-background flex justify-center items-center">
                  <Image
                    src={x.icon}
                    height={64}
                    width={64}
                    className="size-6"
                    alt="ico"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-start text-2xl text-background">
                  {x.title}
                </h4>
                <p className="text-start font-extralight text-background">
                  {x.desc}
                </p>
              </div>
              <div className="flex justify-end items-end h-full">
                <Button variant="ghost" className="text-background">
                  Learn more <ArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Suspense fallback={<Skeleton className="w-full aspect-square" />}>
          <video
            width="600"
            height="600"
            preload="auto"
            className="w-full rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/vid/Website_Service.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Suspense>
      </div>
    </section>
  );
}

const list = [
  {
    icon: "/icon/brush.svg",
    title: "Pool Cleaning",
    desc: "Keep your pool sparkling clean and healthy year-round with expert care, regular cleaning, and water treatment services.",
  },
  {
    icon: "/icon/equipment.svg",
    title: "Repairs & Equipment",
    desc: "Fix leaks, broken pumps, filters, and more—get fast, reliable repairs to keep your pool running smoothly.",
  },
  {
    icon: "/icon/swimming-pool.svg",
    title: "Pool Construction",
    desc: "Build your dream pool from the ground up or upgrade your existing one with professional design and construction services.",
  },
  {
    icon: "/icon/pump.svg",
    title: "Filter & Pump Issue",
    desc: "Ensure clean, circulating water—get quick repairs or replacements for faulty pool pumps and filters.",
  },
  {
    icon: "/icon/farm-house.svg",
    title: "Pool Inspection",
    desc: "Get a detailed assessment of your pool's condition—ideal for safety checks, home sales, or seasonal readiness.",
  },
  {
    icon: "/icon/smartphone.svg",
    title: "Lighting & Automation",
    desc: "Upgrade your pool with smart lighting and automation for effortless control and stunning ambiance.",
  },
];
