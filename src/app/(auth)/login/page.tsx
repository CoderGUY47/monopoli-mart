"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { authClient } from "@/lib/auth-client";

//user authentication via email and social providers
export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //state for storing user credentials
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //redirect to google oauth flow
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  //handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // convert "admin" alias to email
    const cleanValue =
      name === "email" && value === "admin" ? "admin@gmail.com" : value;
    setFormData((prev) => ({ ...prev, [name]: cleanValue }));
  };

  //handle login form submission logic
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // demo bypass for admin
    if (formData.email === "admin@gmail.com" && formData.password === "admin") {
      // simulate a persistent session for demo
      const mockAdmin = {
        name: "Admin User",
        email: "admin@gmail.com",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop",
      };
      localStorage.setItem("user_session", JSON.stringify(mockAdmin));

      router.push(callbackUrl);
      router.refresh();
      return;
    }

    await authClient.signIn.email(
      {
        email: formData.email,
        password: formData.password,
      },
      {
        onSuccess: () => {
          router.push(callbackUrl);
          router.refresh();
        },
        onError: (ctx) => {
          setError(ctx.error.message || "Invalid credentials.");
          setLoading(false);
        },
      },
    );
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-rose-50/50 px-4 py-8">
      <Card className="w-full max-w-5xl overflow-hidden rounded-none border-none shadow-2xl md:rounded-sm">
        <CardContent className="grid min-h-[600px] p-0 md:grid-cols-2">
          {/* login form */}
          <div className="flex flex-col justify-center bg-white p-8 md:p-12">
            <div className="mb-10 text-center md:text-left">
              <h1 className="font-playfair mb-3 text-4xl font-bold text-[#1d1d1b]">
                Welcome Back
              </h1>
              <p className="font-outfit text-gray-500">
                Sign in to your account to continue.
              </p>
            </div>

            {/* display auth errors if they occur */}
            {error && (
              <div className="mb-6 rounded-sm border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold tracking-wider text-[#604235] uppercase"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@gmail.com"
                  required
                  className="h-12 rounded-none border-gray-200 focus:border-[#604235] focus:ring-0"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-sm font-semibold tracking-wider text-[#604235] uppercase"
                  >
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="text-xs text-gray-400 transition-colors hover:text-[#604235]"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="admin"
                  required
                  className="h-12 rounded-none border-gray-200 focus:border-[#604235] focus:ring-0"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* submit button with loading state */}
              <button
                type="submit"
                className="h-14 w-full transform rounded-none bg-[#1a2b23] font-bold text-white transition-all duration-300 hover:bg-rose-600 active:scale-[0.98]"
                disabled={loading}
              >
                {loading ? "Please wait..." : "SIGN IN"}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-100"></span>
              </div>
              <div className="relative flex justify-center text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                <span className="bg-white px-4">OR</span>
              </div>
            </div>

            <Button
              onClick={handleGoogleSignIn}
              type="button"
              variant="outline"
              className="flex h-14 w-full items-center justify-center gap-3 rounded-none border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50"
            >
              <FcGoogle className="h-5 w-5" />
              GOOGLE
            </Button>

            <p className="mt-10 text-center text-sm text-gray-500">
              New to our store?{" "}
              <Link
                href="/signup"
                className="font-bold text-rose-600 italic hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>

          {/* right part */}
          <div className="relative hidden overflow-hidden md:block">
            <Image
              src="/assets/vertical-12.jpg"
              alt="Background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-10000 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#604235]/60 to-transparent"></div>
            <div className="absolute right-12 bottom-12 left-12 text-white">
              <h2 className="font-playfair mb-4 text-3xl leading-tight font-bold">
                Quality skincare for your daily life.
              </h2>
              <p className="font-outfit max-w-xs text-sm text-white/80">
                Explore our premium collections.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
