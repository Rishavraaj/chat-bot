"use client";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { AuthLayout } from "../layouts/auth-layout";
import { SignInView } from "../views/sign-in-view";
import { Loader2 } from "lucide-react";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
      <AuthLoading>
        <AuthLayout>
          <div className="flex h-screen w-screen items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        </AuthLayout>
      </AuthLoading>
    </>
  );
};
