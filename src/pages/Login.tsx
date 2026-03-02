import AuthLayout from "@/components/layout/AuthLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <AuthLayout>
      <div className="flex items-center justify-center py-32 px-6">
        <Card className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold text-white">
              Bienvenida de nuevo
            </CardTitle>
            <CardDescription className="text-slate-400">
              Ingresa tus credenciales para continuar
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2 text-white">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="bg-slate-950 border-slate-800 focus:border-indigo-500"
              />
            </div>

            <div className="space-y-2 text-white">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-slate-950 border-slate-800 focus:border-indigo-500 "
              />
            </div>

            <Button className="w-full bg-indigo-600 hover:bg-indigo-500 transition">
              Iniciar sesión
            </Button>

            <p className="text-sm text-center text-slate-400">
              ¿No tienes cuenta?{" "}
              <span className="text-indigo-500 hover:underline cursor-pointer">
                Regístrate
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
