"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EditIcon, Loader2Icon } from "lucide-react";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { editAccApi, getProfileApi } from "@/lib/api/auth/auth";
import { useCookies } from "react-cookie";
import EditProfileForm from "./edit-profile";
import ChangePasswordForm from "./change-pass";
import { Separator } from "@/components/ui/separator";
import { AnyType } from "@/lib/config/error-type";
import { z } from "zod";
import { toast } from "sonner";

export default function Page() {
  const [cookies] = useCookies(["ghost"]);
  const { data, isPending }: AnyType = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfileApi(cookies.ghost),
  });
  const { mutate } = useMutation({
    mutationKey: ["profile"],
    mutationFn: (data: z.infer<AnyType>) => editAccApi(data, cookies.ghost),
  });

  return (
    <main className="my-12! px-8!">
      <h2 className="text-2xl text-center font-semibold">Profile Picture</h2>
      <div className="flex flex-row justify-center items-center mt-6!">
        <Avatar className="size-[140px] relative overflow-visible">
          <AvatarImage src="https://avatar.iran.liara.run/public" />
          <AvatarFallback>AV</AvatarFallback>
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
              onChange={(e) => {
                const file = e.target.files?.[0];
                console.log(file);
                if (!file) {
                  toast.error("Please select a file first!");
                  return;
                }

                const formData = new FormData();
                formData.append("full_name", data.data.full_name);
                formData.append("email", data.data.email);
                formData.append("bio", data.data.bio);
                formData.append("avatar", file);
                formData.append("_method", "PATCH");
                try {
                  mutate(formData, {
                    onError: (data) => {
                      toast.error(data.message ?? "Failed to update Avatar");
                    },
                    onSuccess: (data: AnyType) => {
                      toast.success(
                        data.message ?? "Successfully update Avatar"
                      );
                    },
                  });
                } catch (error) {
                  console.error(error);
                  toast.error("Something went wrong");
                }
              }}
            />
          </Button>
        </Avatar>
      </div>
      <Card className="w-2/3 mx-auto! mt-12! bg-primary/5">
        <CardHeader>
          <CardTitle className="text-3xl">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          {isPending ? (
            <div className="flex items-center justify-center">
              <Loader2Icon />
            </div>
          ) : (
            <>
              <EditProfileForm
                defaultValues={{
                  full_name: data?.data?.full_name,
                  email: data?.data?.email,
                  bio: data?.data?.bio ?? "",
                }}
              />
              <Separator className="mt-6" />
              <ChangePasswordForm />
            </>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
