"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem, // Add this import for menu items
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon, Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfileApi } from "@/lib/api/auth/auth";
import { useCookies } from "react-cookie";
import { getChatListApi } from "@/lib/api/core/core";
import { serverImageBuilder } from "@/lib/formatter";
import { AnyType } from "@/lib/config/error-type";

export default function Page() {
  const [cookies] = useCookies(["ghost"]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [search, setSearch] = useState("");
  const { data: me, isPending: mePending }: AnyType = useQuery({
    queryKey: ["profile"],
    queryFn: () => {
      return getProfileApi(cookies.ghost);
    },
    enabled: !!cookies.ghost,
  });
  const { data: list, isPending: listPending }: AnyType = useQuery({
    queryKey: ["chat", selectedChat],
    queryFn: () => {
      return getChatListApi(cookies.ghost, search);
    },
    enabled: !!cookies.ghost,
  });
  if (!cookies.ghost) {
    return (
      <div className="flex justify-center items-center py-12 font-semibold text-muted-foreground">
        Please log in first
      </div>
    );
  }
  return (
    <main className="lg:h-[80dvh] my-6! px-2! lg:px-8!">
      <div className="w-full h-full grid lg:grid-cols-7 gap-6">
        <div className="h-full lg:col-span-2 border rounded-lg bg-accent-foreground/5">
          <div className="!p-4">
            <h3 className="text-2xl mb-3! font-semibold">Chats</h3>
            <Input
              placeholder="Search"
              className="bg-background rounded-full"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {!listPending &&
            list.data.map((x: AnyType) => (
              <div
                className="flex flex-row justify-start items-center gap-6 !px-6 !py-3 border-b hover:bg-foreground/10 transition-colors cursor-pointer"
                key={x.id}
                onClick={() => {
                  setSelectedChat(x.id);
                }}
              >
                <Avatar className="!size-12">
                  <AvatarImage src={serverImageBuilder(x.avatar)} />
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <div className="w-full">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-base font-bold">{x.full_name}</h4>
                    {/* <p className="text-xs text-muted-foreground">8:29 AM</p> */}
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <p className="text-sm text-primary font-bold">
                      {parseInt(x.unreadCount) > 2
                        ? "Sent a message"
                        : x.last_message ?? "Sent a message"}
                    </p>
                    {}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="h-dvh lg:h-full lg:col-span-5 border rounded-lg flex flex-col justify-between items-start bg-accent-foreground/5">
          {selectedChat ? (
            <>
              <div className="flex flex-row justify-start items-center gap-3 !px-4 !py-3 border-b w-full">
                <Avatar className="!size-12">
                  <AvatarImage src="https://avatar.iran.liara.run/public" />
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <div className="w-full">
                  <h4 className="text-base font-bold">Katie</h4>
                  <div
                    className="w-full text-sm text-green-500 font-bold flex flex-row items-center gap-2"
                    suppressHydrationWarning
                  >
                    <div className="size-3 rounded-full  bg-green-500" /> online
                  </div>
                </div>
                <div className="">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <EllipsisVerticalIcon className="size-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="end">
                      {/* You can add your menu items here */}
                      <DropdownMenuItem variant="destructive">
                        <Trash2Icon /> Delete Conversation
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className=""></div>
              <div className="flex flex-row justify-between w-full !p-6 gap-6">
                <Input className="bg-background" placeholder="Aa" />
                <Button>Send</Button>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center text-sm font-bold text-muted-foreground">
              Please select a chat first
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
