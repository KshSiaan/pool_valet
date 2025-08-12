"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { AnyType } from "@/lib/config/error-type";
import { useMutation } from "@tanstack/react-query";
import { cancelBidApi, completeBidApi } from "@/lib/api/core/core";
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export default function Butts({ data }: { data: AnyType }) {
  const [cookies] = useCookies(["ghost"]);
  const navig = useRouter();
  const { mutate: cancel } = useMutation({
    mutationKey: ["bid"],
    mutationFn: () => {
      return cancelBidApi(data.id, cookies.ghost);
    },
  });
  const { mutate: markComplete } = useMutation({
    mutationKey: ["bid"],
    mutationFn: () => {
      return completeBidApi(data.id, cookies.ghost);
    },
  });
  return (
    <div className="my-12 grid grid-cols-2 gap-6">
      <Button variant={"outline"} className="rounded-full" asChild>
        <Link href={`/chat?to=${data?.user?.profile?.id ?? ""}`}>
          <MailIcon />
          Chat
        </Link>
      </Button>
      {data?.status === "Pending" ? (
        <Button
          className="rounded-full"
          onClick={async () => {
            cancel(undefined, {
              onError(err) {
                toast.error(err.message ?? "Failed to Cancel the bid");
              },
              onSuccess(data: AnyType) {
                if (!data.status) {
                  toast.error(data.message ?? "Failed to cancel the bid");
                } else {
                  toast.success(
                    data.message ?? "Successfully Cancelled the bid"
                  );
                  navig.push("/service");
                }
              },
            });
          }}
        >
          Cancel bid
        </Button>
      ) : data?.status === "In progress" ? (
        <Button
          className="rounded-full"
          onClick={async () => {
            markComplete(undefined, {
              onError(err) {
                toast.error(err.message ?? "Failed to Complete the bid");
              },
              onSuccess(data: AnyType) {
                if (!data.status) {
                  toast.error(data.message ?? "Failed to Complete the bid");
                } else {
                  toast.success(
                    data.message ?? "Successfully Complete the bid"
                  );
                  navig.push("/service");
                }
              },
            });
          }}
        >
          Mark as complete
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
}
