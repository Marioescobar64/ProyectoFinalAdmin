import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import fondo from "../../../src/assets/img/fondo.png"; 

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-screen flex items-center justify-center">

      {/* Fondo y blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />

      {/* Contenido principal (igual que antes) */}
      <div className="w-full max-w-md text-white px-6 backdrop-blur-sm bg-black/40 p-6 rounded-lg relative">

        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-white flex items-center justify-center rounded-lg">
            <img
              src="/src/assets/img/logo.png"
              alt="Logo"
              className="w-24 h-20 object-contain"
            />
          </div>
        </div>

        <h1 className="text-center text-2xl tracking-widest mb-6">
          KinalPrax
        </h1>

        <LoginForm />

        <div className="flex justify-between text-sm mt-4 text-white/80">
          <label>
            <input type="checkbox" className="mr-1" />
            Remember me
          </label>

          <span className="cursor-pointer hover:underline">
            Forgot Password?
          </span>
        </div>

      </div>
    </div>
  );
};

export { AuthPage };