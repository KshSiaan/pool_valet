"use client";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { SubscriptionDetailsType } from "./page";
import { buyPlanApi, createPaymentIntentApi } from "@/lib/api/core/core";
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AnyType } from "@/lib/config/error-type";

export default function Subscriber({
  x,
  i,
}: {
  x: SubscriptionDetailsType;
  i: number;
}) {
  const navig = useRouter();
  const [cookies] = useCookies(["ghost"]);
  const { mutate } = useMutation({
    mutationKey: ["subscription"],
    mutationFn: (data: {
      payment_method_types: "card";
      amount: string | number;
    }) => {
      return createPaymentIntentApi(data, cookies.ghost);
    },
  });
  const { mutate: payer } = useMutation({
    mutationKey: ["subscription"],
    mutationFn: (data: {
      payment_intent_id?: string | undefined;
      subscription_id: string;
    }) => {
      return buyPlanApi(data, cookies.ghost);
    },
  });

  const freePlan = async () => {
    payer(
      { subscription_id: "1" },
      {
        onError: (err) => {
          toast.error(err?.message ?? "Failed to create Payment intent");
        },
        onSuccess: (data) => {
          console.log(data);
        },
      }
    );
  };
  const managePlan = (x: number) => {
    mutate(
      { payment_method_types: "card", amount: x },
      {
        onError: (err) => {
          toast.error(err?.message ?? "Failed to create Payment intent");
        },
        onSuccess: (data: AnyType) => {
          console.log(data);
          navig.push(`/subscription/payment?xxx=${data.payment_intent_id}`);
        },
      }
    );
  };

  return (
    <Button
      className="w-full rounded-full border-0!"
      variant={"outline"}
      onClick={() => {
        if (i === 0) {
          return freePlan();
        } else {
          return managePlan(i + 1);
        }
      }}
    >
      {x.button}
    </Button>
  );
}
