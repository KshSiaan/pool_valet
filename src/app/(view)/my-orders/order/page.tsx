import React from "react";

export default function Page() {
  return (
    <main className="my-12! px-8!">
      <div className="w-2/3 mx-auto!">
        <h1>Order Details </h1>
        <div className="w-full py-3! px-2! text-lg flex justify-between items-center">
          <h3>Order Summary</h3>
          <p>
            <div className="size-2 bg-amber-500 rounded-full" />
            Pending
          </p>
        </div>
      </div>
    </main>
  );
}
