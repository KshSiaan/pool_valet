"use client";

import type React from "react";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function AuthForms() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in submitted");
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center !p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="!p-8">
          <h1 className="text-2xl font-semibold mb-6! text-center">
            Forget Password
          </h1>
          <p className="text-center mb-6! text-sm text-muted-foreground">
            Enter the email address or mobile phone number <br /> associated
            with your Poolvalet account.
          </p>
          <form onSubmit={handleSubmit} className="!space-y-6">
            <div className="!space-y-2">
              <Label
                htmlFor="signin-email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </Label>
              <Input
                id="signin-email"
                type="email"
                className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <Button
              // type="submit"
              asChild
              className="w-full bg-accent-foreground text-white font-medium !py-3 px-4 rounded-md transition-colors"
            >
              <Link href="/otp">
                SEND CODE <ArrowRight />
              </Link>
            </Button>

            <div className="!space-y-3">
              <p className="text-sm text-muted-foreground">
                Already have account?{" "}
                <Link
                  href="/auth"
                  className="text-accent-foreground hover:underline"
                >
                  Sign in
                </Link>
              </p>

              <Separator />
              <p className="text-sm text-muted-foreground">
                You may contact{" "}
                <Link
                  href="/help"
                  className="text-accent-foreground hover:underline"
                >
                  Customer Service
                </Link>{" "}
                for help restoring access to your account.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
