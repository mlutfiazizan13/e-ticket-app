// src/components/Logout.tsx
"use client"
import federatedLogout from "@/utils/federatedLogout";

export default function LogoutButton() {
  return <button className="px-4 font-semibold" onClick={() => federatedLogout()}>
    Signout
  </button>
}