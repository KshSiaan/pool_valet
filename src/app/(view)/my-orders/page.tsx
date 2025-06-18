import Bread from "@/components/core/bread";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <Bread />
      <main className="px-2! lg:px-8! py-12!">
        <Card className="lg:w-2/3 mx-auto!">
          <CardHeader>
            <CardTitle className="text-2xl text-accent-foreground text-center lg:text-start">
              My orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs className="mb-6!" defaultValue="account">
              <TabsList className="bg-inherit">
                <TabsTrigger value="account">All Orders</TabsTrigger>
                <TabsTrigger value="password">Pending</TabsTrigger>
                <TabsTrigger value="in_progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
            </Tabs>
            <Table>
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="text-center">Service Type</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Scheduled Date</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 8 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-center">
                      Pool Cleaning
                    </TableCell>
                    <TableCell className="font-semibold flex items-center gap-2 justify-center text-amber-500">
                      Pending
                    </TableCell>
                    <TableCell className="text-center">
                      Dec 30, 2025 07:52
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" asChild>
                        <Link href="/my-orders/order">
                          View Details <ArrowRight />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

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
