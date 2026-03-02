import type { ReactNode } from "react";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Contenido centrado */}
      <main className="flex-1 flex items-center justify-center px-6">
        {children}
      </main>

      {/* Solo footer */}
      <Footer />
    </div>
  );
}
