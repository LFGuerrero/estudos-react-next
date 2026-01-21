"use client"; // <--- TRANSFORMA EM ACTIVITY INTERATIVA (Client Side)

import { useState } from "react";
import Button from "@/components/Button"; // O '@' é um atalho para a pasta 'src'

export default function Home() {

  const [count, setCount] = useState(0);

  // Função que será chamada no clique
  const handlePress = () => {
    setCount(count + 1);
  };

  const handeReset = () => {
    setCount(0);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Primeira tela</h1>

      <p className="text-6xl text-blue-400 font-mono">
        {count}
      </p>

      <Button
        title="Clique em mim"
        onClick={handlePress}
      />
      <br></br>
      {count >= 5 && (<Button
        title="Reset counter"
        onClick={handeReset}
      />
      )}


    </main>
  );
}