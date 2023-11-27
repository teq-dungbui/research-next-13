"use client";

import { FormEvent } from "react";
import { AuthForm } from "../AuthForm";

export default function Signup() {
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <main>
      <h2 className="text-center">Login</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
