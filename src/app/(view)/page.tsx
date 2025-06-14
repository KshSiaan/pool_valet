import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Features from "./_home/features";
import MadeSimple from "./_home/made-simple";
import Testimonials from "./_home/testimonials";

export default function Home() {
  return (
    <main className="mb-8! px-8!">
      <section
        className="h-[calc(100dvh-148px)] rounded-xl bg-red-200 w-full bg-center bg-cover relative mb-20!"
        style={{ backgroundImage: "url('/image/header-bg.jpg')" }}
      >
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-br from-zinc-950/60 rounded-xl pt-[7%]! px-12! text-background space-y-8!">
          <h1 className="text-6xl">Pool Service Made Simple</h1>
          <p className="text-xl">
            Compare quotes from trusted pros for cleaning, repairs, or new pool
            builds.
          </p>
          <Button className="text-xl py-6! px-8! bg-[#003B73] hover:bg-[#002873e5]">
            Get Quotes
          </Button>
        </div>
      </section>
      <section className="mb-24!">
        <h2 className="text-center text-3xl mb-12!">How It Works</h2>
        <div className="w-full grid grid-cols-3 gap-6">
          {[
            {
              title: "Submit Request",
              desc: "Tell us what you need with our simple form",
            },
            {
              title: "Book + Pay Securely",
              desc: "Schedule and pay with confidence",
            },
            {
              title: "Get & Compare Quotes",
              desc: "Receive multiple quotes from verified pros",
            },
          ].map((x, i) => (
            <Card key={i}>
              <CardHeader>
                <Image
                  src="/image/header-bg.jpg"
                  height={600}
                  width={600}
                  className="w-full rounded-lg aspect-[5/4] object-cover object-center"
                  alt="thumbnail"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-3xl text-blue-900 font-medium pb-6!">
                  {x.title}
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  {x.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Features />
      <MadeSimple />
      <Testimonials />
    </main>
  );
}
