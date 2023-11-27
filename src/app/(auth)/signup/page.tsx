"use client";

import { FormEvent, useState } from "react";
import { AuthForm } from "../AuthForm";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    setError('');

    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })
    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/verify')
    } 
  };
  return (
    <main>
      <h2 className="text-center">Signup</h2>

      <AuthForm handleSubmit={handleSubmit} />
      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  );
}
