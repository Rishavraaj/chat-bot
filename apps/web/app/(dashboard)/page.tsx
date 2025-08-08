"use client";
import { Button } from "@workspace/ui/components/button";
import { api } from "@workspace/backend/_generated/api";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getUsers);
  const addUser = useMutation(api.users.addUser);

  return (
    <>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <UserButton />
          <OrganizationSwitcher hidePersonal={true} />
          <h1 className="text-2xl font-bold">Hello World</h1>
          <Button size="sm" onClick={() => addUser()}>
            Add User
          </Button>
        </div>
      </div>
    </>
  );
}
