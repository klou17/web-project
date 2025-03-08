"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const AuthScreen = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/loginWallpaper.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-10 rounded-xl shadow-lg flex flex-col items-center w-full max-w-lg">
        <TabButtons isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        <div className="flex flex-row items-center gap-4 mt-6">
          <div className="flex-1 p-4">{isSignIn ? <Login /> : <SignUp />}</div>
          <div className="border-l border-gray-300 h-24"></div>
          <div className="flex-1 p-4 text-center font-bold text-blue-900">
            Elige a tu participante favorito y vota por él/ella
          </div>
        </div>
      </div>
    </div>
  );
};

const TabButtons = ({
  isSignIn,
  setIsSignIn,
}: {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
}) => {
  return (
    <div className="flex bg-blue-900 rounded-xl p-2 shadow-md">
      <button
        onClick={() => setIsSignIn(true)}
        className={`flex-1 py-2 rounded-lg text-lg font-bold transition-colors ${isSignIn ? "bg-white text-blue-900" : "text-white"}`}
      >
        Sign In
      </button>
      <button
        onClick={() => setIsSignIn(false)}
        className={`flex-1 py-2 rounded-lg text-lg font-bold transition-colors ${!isSignIn ? "bg-white text-blue-900" : "text-white"}`}
      >
        Sign Up
      </button>
    </div>
  );
};

const Login = () => {
  const router = useRouter();
  const handleLogin = () => {
    alert("Iniciar sesión");
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Correo electrónico"
        className="p-2 border rounded-md"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="p-2 border rounded-md"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white p-2 rounded-md"
      >
        Iniciar sesión
      </button>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nombre"
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Apellidos"
        className="p-2 border rounded-md"
      />
      <input
        type="email"
        placeholder="Correo Electrónico"
        className="p-2 border rounded-md"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="p-2 border rounded-md"
      />
      <input
        type="password"
        placeholder="Confirmar contraseña"
        className="p-2 border rounded-md"
      />
      <button
        onClick={() => alert("Sign Up Submitted")}
        className="bg-green-600 text-white p-2 rounded-md"
      >
        Crear cuenta
      </button>
    </div>
  );
};
