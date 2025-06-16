"use client";

import type React from "react";

// import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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
            Verify Your Email Address
          </h1>
          <p className="text-center mb-6! text-sm text-muted-foreground">
            Duis sagittis molestie tellus, at eleifend sapien pellque quis.
            Fusce lorem nunc, fringilla sit amet nunc.
          </p>
          <form onSubmit={handleSubmit} className="!space-y-6">
            <div className="!space-y-2">
              <div className="flex justify-between items-center">
                <Label
                  htmlFor="signin-password"
                  className="text-sm font-medium text-gray-700"
                >
                  Verification code
                </Label>
                <Button
                  className="text-sm text-accent-foreground hover:text-accent-foreground/80 font-medium"
                  variant="link"
                >
                  Resend code
                </Button>
              </div>
              <Input
                id="signin-email"
                type="email"
                className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent-foreground text-white font-medium !py-3 px-4 rounded-md transition-colors"
              asChild
            >
              <Link href="/reset">VERIFY CODE</Link>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
