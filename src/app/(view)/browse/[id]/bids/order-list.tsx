"use client";
import React, { useState } from "react";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useQuery } from "@tanstack/react-query";
import { getBiddingListApi, getMyBidApi } from "@/lib/api/core/core";
import { useCookies } from "react-cookie";
import { useParams } from "next/navigation";
import { AnyType } from "@/lib/config/error-type";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditForm from "./edit-form";

export default function OrderList() {
  const { id }: { id: string } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [cookies] = useCookies(["ghost"]);
  const { data: myBidData, isPending: myBidPending }: AnyType = useQuery({
    queryKey: ["order", "myBid"],
    queryFn: () => getMyBidApi(id, cookies.ghost),
  });

  const { data, isPending }: AnyType = useQuery({
    queryKey: ["order", "bid"],
    queryFn: () => getBiddingListApi(id, cookies.ghost),
  });

  if (isPending) {
    return (
      <pre className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-amber-400 rounded-xl p-6 shadow-lg overflow-x-auto text-sm leading-relaxed border border-zinc-700">
        <code className="whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </code>
      </pre>
    );
  }
  if (!myBidPending) {
    console.log(myBidData);
  }

  return (
    <>
      <Card className="lg:w-2/3 mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-accent-foreground text-center lg:text-start">
            Bidding List
          </CardTitle>
          <CardDescription>
            Your Asking Bid Price:{" "}
            <span className="font-semibold text-green-600">
              ${myBidData?.data?.price_offered}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-muted">
              <TableRow className="uppercase!">
                <TableHead className="text-center">#</TableHead>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Date & Time</TableHead>
                <TableHead className="text-center">Asking Price</TableHead>
              </TableRow>
            </TableHeader>
            {/* <TableBody>
              {isFetching ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : quotes.length > 0 ? (
                quotes.map((quote: AnyType) => (
                  <TableRow key={quote.id}>
                    <TableCell className="font-medium text-center">
                      {quote.service_type}
                    </TableCell>
                    <TableCell className="font-semibold flex items-center gap-2 justify-center text-amber-500">
                      {quote.status}
                    </TableCell>
                    <TableCell className="text-center">
                      {quote.scheduled_date}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" asChild>
                        <Link href={`/my-orders/${quote.id}`}>
                          View Details <ArrowRight />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No orders found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody> */}
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end items-center gap-2">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant={"outline"} className="rounded-full">
                Edit Your Bid
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add your bid price</DialogTitle>
              </DialogHeader>
              <EditForm
                id={id}
                data={myBidData}
                closeDialog={() => setIsOpen(false)}
              />
            </DialogContent>
          </Dialog>
          <Button className="rounded-full">Make Final Save</Button>
        </CardFooter>
        <pre className="hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-amber-400 rounded-xl p-6 shadow-lg overflow-x-auto text-sm leading-relaxed border border-zinc-700">
          <code className="whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      </Card>
    </>
  );
}
