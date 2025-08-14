import { Suspense } from "react";
import { cookies } from "next/headers";
import { AnyType } from "@/lib/config/error-type";
import { getProfileApi } from "@/lib/api/auth/auth";
import { notFound, redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = (await cookies()).get("ghost")?.value;

  if (token) {
    const user: AnyType = await getProfileApi(token);
    console.log(user.role);

    if (user.data.role === "ADMIN") {
      redirect("/admin/dashboard");
    }

    if (["PROVIDER", "USER"].includes(user.data.role)) {
      notFound();
    }

    // Optional fallback
    notFound();
  }
  return (
    <>
      <Suspense fallback={"Please wait a second.."}>{children}</Suspense>
    </>
  );
}
