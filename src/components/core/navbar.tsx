"use client";
import {
  BellIcon,
  Clock2Icon,
  MailIcon,
  MapPin,
  User2Icon,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { PopoverArrow } from "@radix-ui/react-popover";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();
  const navig = useRouter();
  const shouldScroll = useRef(false); // ✅ useRef instead of state
  const [scrollTo, setScrollTo] = useState("hiw");
  function scroller(x: string) {
    if (x === "hiw") {
      window.scrollBy({
        top: window.innerHeight * 1,
        behavior: "smooth",
      });
    } else if (x === "fh") {
      window.scrollBy({
        top: window.innerHeight * 1.8,
        behavior: "smooth",
      });
    } else if (x === "fp") {
      window.scrollBy({
        top: window.innerHeight * 2.7,
        behavior: "smooth",
      });
    }
  }

  const handleScroll = (x: string) => {
    setScrollTo(x);
    if (path === "/") {
      scroller(x);
    } else {
      shouldScroll.current = true; // 👈 mark that we want to scroll after nav
      navig.push("/");
    }
  };

  useEffect(() => {
    if (shouldScroll.current && path === "/") {
      scroller(scrollTo);
      shouldScroll.current = false; // ✅ reset flag
    }
  }, [path]);

  return (
    <nav className="">
      <div className="!py-2 w-full bg-blue-100 flex flex-row justify-between items-center px-8!">
        <div className="flex gap-1 text-sm items-center">
          <MapPin className="size-5" fill="#33628F" stroke="#dbeafe" />
          8494 Signal Hill Road Manassas, Va
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Clock2Icon className="size-4 text-[#33628F]" />
          <span>Working Time:</span>{" "}
          <span className="text-[#33628F]">
            24 Hour Service - 7 Days a Week
          </span>
        </div>
        <div className="text-[#33628F] text-sm flex items-center gap-2">
          <MailIcon className="size-4" />
          info@poolvalet.com
        </div>
      </div>
      <div className="py-4! px-8! flex flex-row justify-between items-center">
        <div className="">
          <Image
            src="/cropped-icon.png"
            height={1024}
            width={1024}
            className="w-[100px]"
            alt="icon"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              handleScroll("hiw");
            }}
          >
            How It Works
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              handleScroll("fh");
            }}
          >
            For Homeowners
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              handleScroll("fp");
            }}
          >
            For Providers
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/get-service">Get Quotes</Link>
          </Button>
          <Button variant="ghost">My Orders</Button>
        </div>
        <div className="">
          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" variant="ghost" className="relative">
                <BellIcon />
                <div className="text-[10px] flex justify-center items-center top-0 right-0 absolute bg-destructive size-4 rounded-full text-background">
                  3
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="" align="end">
              <PopoverArrow className="bg-background!" />
              <h3 className="text-lg text-center font-semibold">
                Notification
              </h3>
            </PopoverContent>
          </Popover>
          <Button size="icon" variant="ghost" className="relative">
            <MailIcon />
            <div className="text-[10px] flex justify-center items-center top-0 right-0 absolute bg-destructive size-4 rounded-full text-background">
              12
            </div>
          </Button>
          <Button size="icon" variant="ghost">
            <User2Icon />
          </Button>
        </div>
      </div>
    </nav>
  );
}
