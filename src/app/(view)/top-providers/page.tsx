import Bread from "@/components/core/bread";
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
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowRight,
  MailIcon,
  MapPinIcon,
  StarHalfIcon,
  StarIcon,
} from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <>
      <Bread />
      <main className="px-8! py-12!">
        <Card className="w-2/3 mx-auto!">
          <CardHeader>
            <CardTitle className="text-2xl text-accent-foreground">
              Top Providers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="text-center">#</TableHead>
                  <TableHead className="text-center">Provider</TableHead>
                  <TableHead className="text-center">Address </TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 8 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-center">
                      #96459761
                    </TableCell>
                    <TableCell className="font-semibold flex items-center gap-2 justify-center">
                      <Avatar>
                        <AvatarImage
                          src={`https://avatar.iran.liara.run/public/${i + 1}`}
                        />
                        <AvatarFallback>UI</AvatarFallback>
                      </Avatar>
                      L. Messi
                    </TableCell>
                    <TableCell className="text-center">NY,USA</TableCell>
                    <TableCell className="text-center">
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
                              <AvatarImage
                                src={`https://avatar.iran.liara.run/public/${
                                  i + 1
                                }`}
                              />
                              <AvatarFallback>UI</AvatarFallback>
                            </Avatar>
                            <h3 className="text-center text-2xl">L. Messi</h3>
                            <p className="flex items-center gap-1 text-accent-foreground">
                              <MailIcon className="size-5" />
                              info@poolvalet.com{" "}
                            </p>
                            <p className="flex items-center gap-1 text-accent-foreground">
                              <MapPinIcon className="size-5" />
                              8494 Signal Hill Road Manassas, Va
                            </p>
                            <div className="border rounded-lg w-full py-3! px-2! divide-y space-y-3!">
                              <div className="grid grid-cols-2">
                                <p className="font-semibold">Service Rating </p>
                                <div className="flex items-center gap-1">
                                  <span className="mr-1!">4.5</span>{" "}
                                  <StarIcon fill="#FFD700" stroke="" />
                                  <StarIcon fill="#FFD700" stroke="" />
                                  <StarIcon fill="#FFD700" stroke="" />
                                  <StarIcon fill="#FFD700" stroke="" />
                                  <StarHalfIcon fill="#FFD700" stroke="" />
                                </div>
                              </div>
                              <div className="grid grid-cols-2">
                                <p className="font-semibold">
                                  Order Completed{" "}
                                </p>
                                <div className="">200</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <p className="font-semibold">
                                  Canceled Orders{" "}
                                </p>
                                <div className="flex items-center gap-1">
                                  <span className="mr-1!">123</span>
                                </div>
                              </div>
                            </div>
                            <h4 className="text-center">
                              What home owners say?
                            </h4>
                            <ScrollArea className="h-[200px] w-full border rounded-lg ">
                              <ScrollBar
                                orientation="vertical"
                                className="z-50"
                              />

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
                                        <h3 className="">L. Messi</h3>
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
                                      team was knowledgeable, neat & clean
                                      respectful of my space. Truly impressed
                                      and highly recommend!
                                    </CardDescription>
                                  </CardContent>
                                </Card>
                              ))}
                            </ScrollArea>
                          </DialogContent>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="!py-[500px]">
          <Input type="date" />
        </div>

        <div className="mt-24! mb-12!">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">6</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </>
  );
}
