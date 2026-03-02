import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Mi Comunidad
        </Link>

        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="text-slate-300 hover:text-white transition"
          >
            Login
          </Link>

          <Button size="sm">Registrarse</Button>
        </div>
      </div>
    </nav>
  );
}
