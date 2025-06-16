import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageIcon, ReceiptTextIcon, RocketIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="my-12!">
      <section className="mx-auto! w-2/3 space-y-4!">
        <h1 className="text-4xl font-semibold">Hello, Kevin</h1>
        <p className="w-2/3">
          From your account dashboard. you can easily check & view your{" "}
          <Link href={"/"} className="text-accent-foreground font-semibold">
            Recent Orders
          </Link>
          , manage your{" "}
          <Link href={"/"} className="text-accent-foreground font-semibold">
            Shipping and Billing Addresses
          </Link>{" "}
          and edit your{" "}
          <Link href={"/"} className="text-accent-foreground font-semibold">
            Password
          </Link>{" "}
          and{" "}
          <span className="text-accent-foreground font-semibold">
            Account Details
          </span>{" "}
          .
        </p>
        <div className="w-full grid grid-cols-3 gap-6">
          <Card>
            <CardHeader className="border-b">
              <CardTitle>ACCOUNT INFO</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6">
                <Avatar className="!size-18">
                  <AvatarImage src="https://avatar.iran.liara.run/public" />
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <div className="">
                  <h4 className="text-xl font-bold">Kelvin</h4>
                  <p>Dhaka - 1207, Bangladesh</p>
                </div>
              </div>
              <div className="mt-6! space-y-3!">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  kevin.gilbert@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Sec Email:</span>{" "}
                  kevin12345@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +1-202-555-0118
                </p>
              </div>
              <Button variant="outline" size="lg" className="mt-6!" asChild>
                <Link href="/profile/edit">Edit Account</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="border-b">
              <CardTitle>BILLING ADDRESS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6">
                <div className="">
                  <h4 className="text-xl font-bold">Kelvin</h4>
                  <p className="text-muted-foreground">
                    East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                    1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                  </p>
                </div>
              </div>
              <div className="mt-6! space-y-3!">
                <p>
                  <span className="font-semibold">Phone:</span> +1-202-555-0118
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  kevin.gilbert@gmail.com
                </p>
              </div>
              <Button variant="outline" size="lg" className="mt-6!">
                Edit Address
              </Button>
            </CardContent>
          </Card>
          <div className="w-full h-full grid grid-rows-3 gap-6">
            <Card className="bg-blue-200 border-none">
              <CardContent className="flex gap-3">
                <div className="p-4! rounded-lg bg-background">
                  <RocketIcon className="text-blue-500" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold">154</h3>
                  <p>Total Orders</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-amber-100 border-none">
              <CardContent className="flex gap-3">
                <div className="p-4! rounded-lg bg-background">
                  <ReceiptTextIcon className="text-amber-500" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold">05</h3>
                  <p>Pending Orders</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-green-100 border-none">
              <CardContent className="flex gap-3">
                <div className="p-4! rounded-lg bg-background">
                  <PackageIcon className="text-green-500" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold">154</h3>
                  <p>Completed Orders</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
