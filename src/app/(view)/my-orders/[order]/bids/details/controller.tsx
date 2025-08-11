"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { decrypt } from "@/lib/formatter";
import { useMutation } from "@tanstack/react-query";
import { acceptRequestApi, cancelOrderApi } from "@/lib/api/core/core";
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import { AnyType } from "@/lib/config/error-type";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Controller({
  status,
  id,
  xxx,
}: {
  id: string;
  status: string;
  xxx: string;
}) {
  const [cookies] = useCookies(["ghost"]);
  const [mounted, setMounted] = React.useState(false);
  const navig = useRouter();
  const pathname = usePathname();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const { mutate } = useMutation({
    mutationKey: ["quote"],
    mutationFn: () => {
      if (!cookies.ghost) return Promise.resolve();
      return acceptRequestApi(id, cookies.ghost);
    },
  });
  const { mutate: cancelBid } = useMutation({
    mutationKey: ["quote"],
    mutationFn: () => {
      if (!cookies.ghost) return Promise.resolve();
      return cancelOrderApi(id, cookies.ghost);
    },
  });

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex justify-center items-center h-24 mx-auto"></div>
    );
  }

  if (!cookies.ghost) {
    return (
      <div className="flex justify-center items-center h-24 mx-auto"></div>
    );
  }

  return (
    <>
      {status === "Pending" ? (
        <Button
          className="bg-accent-foreground hover:bg-accent-foreground/80 rounded-full"
          size="lg"
          onClick={async () =>
            mutate(undefined, {
              onError(error) {
                toast.error(error.message ?? "Failed to accept Bid request");
              },
              onSuccess: (data: AnyType) => {
                if (!data.status) {
                  toast.error(data.message ?? "Failed to accept Bid request");
                } else {
                  toast.success(
                    data.message ?? "Successfully Accepted the bid"
                  );
                  const basePath = pathname.split("/details")[0];
                  navig.push(`${basePath}?accepted=true`);
                }
              },
            })
          }
        >
          Accept Request
        </Button>
      ) : status === "In Progress" ? (
        <Button
          className="bg-accent-foreground hover:bg-accent-foreground/80 rounded-full"
          size="lg"
          onClick={async () =>
            cancelBid(undefined, {
              onError(error) {
                toast.error(error.message ?? "Failed to Cancel Bid request");
              },
              onSuccess: (data: AnyType) => {
                if (!data.status) {
                  toast.error(data.message ?? "Failed to Cancel Bid request");
                } else {
                  toast.success(
                    data.message ?? "Successfully Cancelled the bid"
                  );
                  const basePath = pathname.split("/details")[0];
                  navig.push(`${basePath}?accepted=true`);
                }
              },
            })
          }
        >
          Cancel Request
        </Button>
      ) : (
        <Button
          className="bg-accent-foreground hover:bg-accent-foreground/80 rounded-full"
          size="lg"
          asChild
        >
          <Link href={``}>Pay ${decrypt(xxx)}</Link>
        </Button>
      )}
    </>
  );
}
