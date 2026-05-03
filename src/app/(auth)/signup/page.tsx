"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const image = formData.get("image") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signUp.email(
      {
        name,
        image,
        email,
        password,
      },
      {
        onSuccess: (ctx) => {
          router.push("/login");
        },
        onError: (ctx) => {
          const message = ctx.error.message || "Failed to create account";
          //clean up better auth field markers like [body.email] for users
          const cleanMessage = message.replace(/\[.*?\]\s*/g, "");
          setError(cleanMessage);
        },
      },
    );
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-rose-50/50 px-4 py-8">
      <Link
        href="/"
        className="group absolute top-8 left-8 flex items-center font-medium text-[#1a2b23] transition-all hover:gap-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:mr-0" /> Back to Home
      </Link>

      <Card className="w-full max-w-5xl overflow-hidden rounded-none border-none shadow-2xl md:rounded-sm">
        <CardContent className="grid min-h-[600px] p-0 md:grid-cols-2">
          <div className="relative order-2 hidden overflow-hidden md:block">
            <Image
              src="/assets/vertical-15.jpg"
              alt="Natural Beauty"
              fill
              className="object-cover transition-transform duration-10000 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#604235]/60 to-transparent"></div>
            <div className="absolute right-12 bottom-12 left-12 text-white">
              <h2 className="font-playfair mb-4 text-right text-3xl leading-tight font-bold">
                Your journey to <span className="italic">radiant</span> skin
                starts here.
              </h2>
              <p className="font-outfit ml-auto max-w-xs text-right text-sm text-white/80">
                Create an account to track orders and save your favorite glow
                products.
              </p>
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center bg-white p-8 md:p-12">
            <div className="mb-8 text-center md:text-left">
              <h1 className="font-playfair mb-3 text-4xl font-bold text-nowrap text-[#1d1d1b]">
                Join Monopoly-Mart
              </h1>
              <p className="font-outfit text-gray-500">
                Create your premium account in seconds.
              </p>
            </div>

            {error && (
              <div className="mb-6 rounded-sm border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <Label
                  htmlFor="name"
                  className="text-[10px] font-bold tracking-[0.2em] text-[#604235] uppercase"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="h-10 rounded-none border-0 border-b border-gray-200 bg-transparent px-0 transition-all duration-300 placeholder:text-gray-300 focus:border-rose-500 focus:ring-0"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="image"
                  className="text-[10px] font-bold tracking-[0.2em] text-[#604235] uppercase"
                >
                  Profile Image URL
                </Label>
                <Input
                  id="image"
                  name="image"
                  type="text"
                  placeholder="https://example.com/avatar.jpg"
                  className="h-10 rounded-none border-0 border-b border-gray-200 bg-transparent px-0 transition-all duration-300 placeholder:text-gray-300 focus:border-rose-500 focus:ring-0"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-[10px] font-bold tracking-[0.2em] text-[#604235] uppercase"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="username@gmail.com"
                  required
                  className="h-10 rounded-none border-0 border-b border-gray-200 bg-transparent px-0 transition-all duration-300 placeholder:text-gray-300 focus:border-rose-500 focus:ring-0"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="password"
                  className="text-[10px] font-bold tracking-[0.2em] text-[#604235] uppercase"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******"
                  required
                  minLength={11}
                  className="h-10 rounded-none border-0 border-b border-gray-200 bg-transparent px-0 transition-all duration-300 placeholder:text-gray-300 focus:border-rose-500 focus:ring-0"
                />
              </div>

              <div className="space-y-4 pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-14 w-full rounded-none bg-[#1a2b23] text-xs font-bold tracking-widest text-white transition-all duration-500 hover:bg-rose-600"
                >
                  {loading ? "Creating Account ..." : "Create Account"}
                </Button>

                <div className="relative flex items-center py-2">
                  <div className="grow border-t border-gray-100"></div>
                  <span className="mx-4 shrink text-[9px] font-medium tracking-widest text-gray-400 uppercase">
                    Or continue with
                  </span>
                  <div className="grow border-t border-gray-100"></div>
                </div>

                <Button
                  onClick={handleGoogleSignUp}
                  type="button"
                  variant="outline"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-none border-gray-200 text-[10px] font-bold tracking-widest text-gray-700 transition-all duration-300 hover:bg-gray-50"
                >
                  <FcGoogle className="h-5 w-5" />
                  GOOGLE
                </Button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-rose-500 italic hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
