"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { useCurrentTheme } from "@/hooks/use-current-theme";

const Page = () => {
  const currentTheme = useCurrentTheme();

  return (
    <SignIn
      appearance={{
        theme: currentTheme === "dark" ? dark : undefined,
        elements: {
          cardBox: "border! shadow-none! rounded-lg!",
        },
      }}
    />
  );
};

export default Page;
