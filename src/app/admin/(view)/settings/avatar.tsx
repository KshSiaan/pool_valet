import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EditIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { getProfileApi } from "@/lib/api/auth/auth";
import { Skeleton } from "@/components/ui/skeleton";
import { serverImageBuilder } from "@/lib/formatter";
import { AnyType } from "@/lib/config/error-type";
export default function AvatarControl() {
  const [cookies] = useCookies(["ghost"]);
  const { data, isPending }: AnyType = useQuery({
    queryKey: ["profile"],
    queryFn: () => {
      return getProfileApi(cookies.ghost);
    },
  });
  return (
    <>
      {isPending ? (
        <div className={`flex justify-center items-center h-24 mx-auto`}>
          <Skeleton className="size-[140px] rounded-full" />
        </div>
      ) : (
        <div className="size-[140px] relative">
          <Avatar className="size-[140px]">
            <AvatarImage src={serverImageBuilder(data.data.avatar)} />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <Button
            className="absolute bottom-0 right-0 z-30"
            variant="outline"
            size="icon"
          >
            <label
              htmlFor="imageUpload"
              className="cursor-pointer w-full h-full flex items-center justify-center"
            >
              <EditIcon />
            </label>
            <Input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </Button>
        </div>
      )}
    </>
  );
}
