"use client";
import React from 'react'
import { useRefreshTokenQuery } from "@/redux/features/api/apiSlice";
import { redirect, useRouter } from "next/navigation";
import useAuth from "./useAuth";

export default function Protected({ children ,notForUsers }:any){
  const router = useRouter();
  const isAuthenticated = useAuth()?.user;

  if(notForUsers){
    return isAuthenticated ? redirect("/") : children;
  }
  return !isAuthenticated ? redirect("/auth") : children;
}


