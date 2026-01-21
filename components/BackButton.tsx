"use client"; // <--- Este pedacinho roda no navegador

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} // Equivalente ao onBackPressed do Android
      className="text-blue-500 hover:underline mb-4"
    >
      ← Voltar
    </button>
  );
}