import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import LoginForm from "./login-form";
import { cookies } from "next/headers";
import { AnyType } from "@/lib/config/error-type";
import { getProfileApi } from "@/lib/api/auth/auth";
import { notFound, redirect } from "next/navigation";

export default async function Page() {
  const token = (await cookies()).get("ghost")?.value;

  if (token) {
    const user: AnyType = await getProfileApi(token);

    if (user.role === "ADMIN") {
      redirect("/admin/dashboard");
    }

    if (["PROVIDER", "USER"].includes(user.role)) {
      notFound();
    }

    // Optional fallback
    notFound();
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-1/2 !mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Log in</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
