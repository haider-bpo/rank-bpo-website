"use client";

import ViewAllServices from "@/components/shared/ViewAllServices";
import React from "react";
import { usePathname } from "next/navigation";
import { GetInTouchForm } from "@/components/shared/get-in-touch-form";

function Layout({ children }) {
  const pathname = usePathname();

  return (
    <>
      {children}
      {pathname !== "/services" && <ViewAllServices />}
      <GetInTouchForm />
    </>
  );
}

export default Layout;
