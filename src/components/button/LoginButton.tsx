// src/components/Login.tsx
"use client"
import { signIn } from "next-auth/react";
export default function LoginButton() {
  return <button className="px-4 font-semibold" onClick={() => signIn("keycloak")}>
    Sign in
  </button>
}
