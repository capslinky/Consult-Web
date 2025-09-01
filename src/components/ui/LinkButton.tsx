"use client";

import Link from "next/link";
import React from "react";
import { trackEvent } from "@/lib/analytics";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  eventName?: string;
  eventParams?: Record<string, unknown>;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  eventName,
  eventParams,
  ...props
}: LinkButtonProps) {
  const base = "font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-[#f59e0b]",
    secondary: "bg-[#3b82f6] text-white hover:bg-[#2563eb] focus:ring-[#3b82f6]",
    outline: "border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white focus:ring-[#1e3a8a]",
    ghost: "text-[#1e3a8a] hover:bg-gray-100 focus:ring-[#1e3a8a]",
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const width = fullWidth ? "w-full" : "";
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${width} ${className}`.trim();

  return (
    <Link
      href={href}
      className={classes}
      onClick={(e) => {
        if (eventName) {
          trackEvent(eventName, { location: "link_button", href, ...eventParams });
        }
        props.onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
