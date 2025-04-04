"use client";

import {ThemeProvider} from "next-themes";
import {useState, useEffect} from "react";

const Providers = ({children}: {children: React.ReactNode}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
