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
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-8! px-2! lg:px-8!">
      <section
        className="h-[calc(100dvh-148px)] rounded-xl w-full bg-center bg-cover relative mb-20!"
        style={{ backgroundImage: "url('/image/header-bg.jpg')" }}
      >
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-br from-zinc-950/60 rounded-xl pt-4! lg:pt-[7%]! px-4! lg:px-12! text-background space-y-8!">
          <h1 className="text-4xl xl:text-6xl">Pool Service Made Simple</h1>
          <p className="text-xl">
            Compare quotes from trusted pros for cleaning, repairs, or new pool
            builds.
          </p>
          <Button
            className="w-full sm:w-auto lg:text-xl py-6! px-8! bg-[#003B73] hover:bg-[#002873e5]"
            asChild
          >
            <Link href="/get-service">Get Quotes</Link>
          </Button>
        </div>
      </section>
      <section className="mb-24!">
        <h2 className="text-center text-xl lg:text-3xl mb-12!">How It Works</h2>
        <div className="w-full grid lg:grid-cols-3 gap-6">
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
      <section>
        <h1 className="text-xl lg:text-3xl text-center font-semibold">
          Quotes Request Near you
        </h1>
        <div className="w-full mt-12! grid lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="flex flex-col lg:flex-row gap-4">
                <Image
                  src="/image/avatar.jpg"
                  height={600}
                  width={250}
                  className="h-48 w-34 rounded-lg object-cover"
                  alt="thumbnail"
                />
                <div className="flex-1">
                  <h3 className="text-xl">L. Messi</h3>
                  <p className="text-green-500 text-xl font-semibold mb-6! lg:mb-0!">
                    $865.75
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quisquam reiciendis dolorum, blanditiis unde quasi
                    assumenda doloribus corrupti eveniet vel reprehenderit?
                    Alias blanditiis sint ab quidem velit expedita ducimus eius!
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button size="lg" className="mt-12! mx-auto!" asChild>
            <Link href="/browse">See All</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
