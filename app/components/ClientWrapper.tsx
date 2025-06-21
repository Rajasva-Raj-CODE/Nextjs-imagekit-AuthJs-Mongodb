"use client";

import Providers from "./Providers";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
