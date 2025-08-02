"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  ArrowRight,
  MailIcon,
  MapPinIcon,
  StarHalfIcon,
  StarIcon,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getQuotesApi } from "@/lib/api/core/core";
import { useCookies } from "react-cookie";
import { AnyType } from "@/lib/config/error-type";
import { Skeleton } from "@/components/ui/skeleton";

export default function QuoteList() {
  const [cookies] = useCookies(["ghost"]);
  const [page, setPage] = useState(0);

  const { data, isPending, isError }: AnyType = useQuery({
    queryKey: ["quotes", page],
    queryFn: () => getQuotesApi(cookies.ghost, page),
  });

  const quoteData = data?.quotes?.data || [];
  console.log(quoteData);

  return (
    <>
      <Card className="w-2/3 mx-auto!">
        <CardHeader>
          <CardTitle className="text-2xl text-accent-foreground">
            Quotes near me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead className="text-center">#</TableHead>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Category</TableHead>
                <TableHead className="text-center">Budget</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(isPending || isError
                ? Array.from({ length: 10 })
                : quoteData
              ).map((item: AnyType, i: number) => (
                <TableRow key={i}>
                  <TableCell className="text-center">
                    {isPending ? (
                      <Skeleton className="h-4 w-10 mx-auto" />
                    ) : (
                      `#${item.id}`
                    )}
                  </TableCell>
                  <TableCell className="flex items-center justify-center gap-2">
                    {isPending ? (
                      <>
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-4 w-24" />
                      </>
                    ) : (
                      <>
                        <Avatar>
                          <AvatarImage src={item.user.avatar} />
                          <AvatarFallback>UI</AvatarFallback>
                        </Avatar>
                        {item.user.full_name}
                      </>
                    )}
                  </TableCell>
                  <TableCell className="text-center capitalize">
                    {isPending ? (
                      <Skeleton className="h-4 w-20 mx-auto" />
                    ) : (
                      item.service_type
                    )}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {isPending ? (
                      <Skeleton className="h-4 w-16 mx-auto" />
                    ) : (
                      `$${item.expected_budget}`
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {isPending ? (
                      <Skeleton className="h-8 w-24 mx-auto" />
                    ) : (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost">
                            View Details <ArrowRight />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle></DialogTitle>
                          </DialogHeader>
                          <DialogContent className="flex flex-col justify-around items-center gap-2">
                            <Avatar className="size-24">
                              <AvatarImage src={item.user.avatar} />
                              <AvatarFallback>UI</AvatarFallback>
                            </Avatar>
                            <h3 className="text-center text-2xl">
                              {item.user.full_name}
                            </h3>
                            <p className="flex items-center gap-1 text-accent-foreground">
                              <MailIcon className="size-5" /> {item.user.email}
                            </p>
                            <p className="flex items-center gap-1 text-accent-foreground">
                              <MapPinIcon className="size-5" />
                              {item.address}
                            </p>
                            <div className="border rounded-lg w-full py-3! px-2! divide-y space-y-3!">
                              <div className="grid grid-cols-2">
                                <p className="font-semibold">Service Rating</p>
                                <div className="flex items-center gap-1">
                                  <span className="mr-1!">4.5</span>
                                  <StarIcon fill="#FFD700" stroke="" />
                                  <StarIcon fill="#FFD700" stroke="" />
                                  <StarIcon fill="#FFD700" stroke="" />
                                  <StarIcon fill="#FFD700" stroke="" />
                                  <StarHalfIcon fill="#FFD700" stroke="" />
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <p className="font-semibold">Order Completed</p>
                                <div>200</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <p className="font-semibold">Canceled Orders</p>
                                <div>123</div>
                              </div>
                            </div>
                            <h4 className="text-center">
                              What home owners say?
                            </h4>
                            <div className="h-[200px] w-full border rounded-lg overflow-y-scroll">
                              {Array.from({ length: 4 }).map((_, ll) => (
                                <Card
                                  className="border-0! shadow-none!"
                                  key={ll}
                                >
                                  <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Avatar className="size-7">
                                          <AvatarImage
                                            src={`https://avatar.iran.liara.run/public/${ll}`}
                                          />
                                          <AvatarFallback>UI</AvatarFallback>
                                        </Avatar>
                                        <h3>L. Messi</h3>
                                      </div>
                                      <p className="flex items-center text-sm">
                                        <StarIcon
                                          fill="#FFD700"
                                          stroke=""
                                          className="size-5 mr-1!"
                                        />
                                        3.8
                                      </p>
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <CardDescription>
                                      From the first call to the final result,
                                      everything was smooth and stress-free. The
                                      team was knowledgeable, neat & clean,
                                      respectful of my space. Truly impressed
                                      and highly recommend!
                                    </CardDescription>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </DialogContent>
                        </DialogContent>
                      </Dialog>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-24! mb-12! flex justify-center">
        <Pagination>
          <PaginationContent className="flex items-center gap-2">
            {data?.quotes?.links?.map((link: AnyType, idx: number) => {
              const isDisabled = link.url === null || isPending;
              const isActive = link.active;

              const pageNum = link.url
                ? parseInt(new URL(link.url).searchParams.get("page") || "1")
                : null;

              const displayLabel =
                link.label === "&laquo; Previous" ? (
                  <ArrowLeft />
                ) : link.label === "Next &raquo;" ? (
                  <ArrowRight />
                ) : (
                  link.label
                );

              return (
                <PaginationItem key={idx}>
                  <PaginationLink
                    onClick={(e) => {
                      e.preventDefault();
                      if (!isDisabled && pageNum) {
                        setPage(pageNum);
                      }
                    }}
                    isActive={isActive}
                    className={
                      isDisabled ? "pointer-events-none opacity-50" : ""
                    }
                  >
                    {displayLabel}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
