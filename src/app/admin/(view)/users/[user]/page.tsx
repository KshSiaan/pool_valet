import React from "react";
import Goback from "./goback";

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
        <Goback />
        <p className="text-sm font-semibold text-muted-foreground mt-2 ml-8">
          Provider details at a glance
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-background shadow rounded-lg p-6"></div>
        <div className="bg-background shadow rounded-lg p-6"></div>
      </div>
    </div>
  );
}
