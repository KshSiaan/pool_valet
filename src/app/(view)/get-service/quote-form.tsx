"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function QuoteForm() {
  const [selectedType, setSelectedType] = useState("");
  return (
    <>
      <Select onValueChange={setSelectedType} value={selectedType}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select service" />
        </SelectTrigger>
        <SelectContent>
          {serviceList.map((x, i) => (
            <SelectItem key={i} value={x.title.toLocaleLowerCase().trim()}>
              <div className="flex items-center gap-2">
                <Image
                  src={x.icon}
                  height={24} // Adjusted size for better inline display
                  width={24} // Adjusted size for better inline display
                  className="size-6" // Tailwind class for size, ensure it's applied correctly
                  alt={x.title}
                />
                <span>{x.title}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Label className="text-lg">Describe the issue:</Label>
      <Textarea
        className="min-h-[140px]"
        placeholder="My pool pump is leaking & not work correctly.."
      />
      <Label className="text-lg mt-12!">Property type :</Label>
      <RadioGroup defaultValue="option-one" className="gap-6">
        <div className="flex items-center !space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Single family home</Label>
        </div>
        <div className="flex items-center !space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Commercial Property</Label>
        </div>
        <div className="flex items-center !space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Apartment</Label>
        </div>
      </RadioGroup>

      <Label className="text-lg mt-12!">Service type :</Label>
      <RadioGroup defaultValue="option-one" className="gap-6">
        <div className="flex items-center !space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Single family home</Label>
        </div>
        <div className="flex items-center !space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Commercial Property</Label>
        </div>
        <div className="flex items-center !space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Apartment</Label>
        </div>
      </RadioGroup>

      <Label className="text-lg mt-12!">Pool Depth:</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Depth" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 8 }).map((_, i) => (
            <SelectItem value={String(i + 4)} key={i}>
              {i + 4}′
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Label className="text-lg">Date & Time: </Label>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Input type="date" placeholder="Select Date" />
        <Input type="time" placeholder="Select Date" />
      </div>
      <Label className="text-lg">Address: </Label>
      <Input type="text" placeholder="Enter your adress" />
      {selectedType === "pool construction" && (
        <>
          <Label className="text-lg">Expected Budget: </Label>
          <Input type="number" placeholder="Enter your budget" />
        </>
      )}

      <Label className="text-lg" htmlFor="img_up">
        Upload any photos of the issue.
      </Label>
      <label htmlFor="img_up">
        <Card className=" hover:bg-accent-foreground/5 transition-colors cursor-pointer">
          <CardContent className="aspect-[4/1] flex justify-center items-center">
            <ImageIcon className="text-accent-foreground size-16" />
          </CardContent>
        </Card>
      </label>
      <input type="file" id="img_up" className="hidden" />
      <Button
        className="mt-12! w-1/2 mx-auto! flex bg-[#003B73]"
        size="lg"
        asChild
      >
        <Link href="/get-service/success">Add</Link>
      </Button>
    </>
  );
}

const serviceList = [
  {
    icon: "/icon/brush.svg",
    title: "Pool Cleaning",
  },
  {
    icon: "/icon/equipment.svg",
    title: "Repairs & Equipment",
  },
  {
    icon: "/icon/swimming-pool.svg",
    title: "Pool Construction",
  },
  // {
  //   icon: "/icon/pump.svg",
  //   title: "Filter & Pump Issue",
  // },
  {
    icon: "/icon/farm-house.svg",
    title: "Pool Inspection",
  },
  {
    icon: "/icon/smartphone.svg",
    title: "Lighting & Automation",
  },
];
