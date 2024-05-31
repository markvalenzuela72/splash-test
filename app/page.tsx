"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authenticate } from "@/lib/action";
import { redirect } from "next/navigation";

export default function RegisterUser() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  useEffect(() => {
    if (state && state.id) {
      const game_user_id = state.id;
      window.location.replace(`/${game_user_id}`);
    }
  }, [state]);
  return (
    <div className="min-h-5 grid w-full items-start gap-6">
      <Card x-chunk="dashboard-04-chunk-1" className="min-h-full">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Please enter your name</CardDescription>
        </CardHeader>
        <form action={dispatch}>
          <CardContent>
            <Input placeholder="Name" id="game_name" name="game_name" />
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button type="submit">Accept</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
