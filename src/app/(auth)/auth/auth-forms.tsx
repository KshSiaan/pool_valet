"use client";

import type React from "react";

import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { siApple } from "simple-icons";

export default function AuthForms() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic
    console.log("Sign in submitted");
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic
    console.log("Sign up submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center !p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("signin")}
            className={`flex-1 py-4! !px-6 text-center font-medium transition-colors ${
              activeTab === "signin"
                ? "text-gray-900 border-b-2 border-accent-foreground bg-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-4! !px-6 text-center font-medium transition-colors ${
              activeTab === "signup"
                ? "text-gray-900 border-b-2 border-accent-foreground bg-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="!p-8">
          {activeTab === "signin" ? (
            /* Sign In Form */
            <form onSubmit={handleSignIn} className="!space-y-6">
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

              <div className="!space-y-2">
                <div className="flex justify-between items-center">
                  <Label
                    htmlFor="signin-password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <Button
                    className="text-sm text-accent-foreground hover:text-accent-foreground/80 font-medium"
                    variant="link"
                    asChild
                  >
                    <Link href={"/forgot"}>Forget Password?</Link>
                  </Button>
                </div>
                <div className="relative">
                  <Input
                    id="signin-password"
                    type={showPassword ? "text" : "password"}
                    className="w-full !px-3 !py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent-foreground text-white font-medium !py-3 px-4 rounded-md transition-colors"
              >
                SIGN IN <ArrowRight />
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="!px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <div className="!space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3 !py-3 !px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Login with Google
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3 !py-3 !px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={siApple.path} />
                  </svg>
                  Login with Apple
                </Button>
              </div>
            </form>
          ) : (
            /* Sign Up Form */
            <form onSubmit={handleSignUp} className="!space-y-6">
              <div className="!space-y-2">
                <Label
                  htmlFor="signup-name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </Label>
                <Input
                  id="signup-name"
                  type="text"
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="!space-y-2">
                <Label
                  htmlFor="signup-email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="!space-y-2">
                <Label
                  htmlFor="signup-password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="8+ characters"
                    className="w-full !px-3 !py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="!space-y-2">
                <Label
                  htmlFor="signup-confirm-password"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="signup-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full !px-3 !py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-start !space-x-3">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) =>
                    setAgreedToTerms(checked as boolean)
                  }
                  className="mt-1"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  {/* Use a div or p inside the Label to control text flow */}
                  <p className="w-full">
                    Are you agree to Clicon{" "}
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Terms of Condition
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Privacy Policy
                    </span>
                    .
                  </p>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={!agreedToTerms}
                className="w-full bg-accent-foreground disabled:bg-gray-400 text-white font-medium !py-3 !px-4 rounded-md transition-colors"
              >
                SIGN UP <ArrowRight />
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="!px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <div className="!space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3 !py-3 !px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign up with Google
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3 !py-3 !px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                  Sign up with Apple
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
