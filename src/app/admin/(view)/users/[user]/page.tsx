import { ChevronLeftIcon } from "lucide-react";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;
  console.log(user);

  return (
    <div className="space-y-6">
      <div className="py-6 px-6 bg-background shadow rounded-lg">
        <button className="text-xl font-bold flex gap-2 items-center cursor-pointer py-2 hover:scale-105 transition-transform">
          <ChevronLeftIcon /> Service Provider profile
        </button>
        <p className="text-sm font-semibold text-muted-foreground mt-2 ml-8">
          Provider details at a glance
        </p>
      </div>
      <div className="py-6 px-6 bg-background shadow rounded-lg"></div>
    </div>
  );
}
