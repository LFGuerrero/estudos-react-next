// src/components/Button.tsx

// Interface das Props (Seu Data Class de argumentos)
interface ButtonProps {
  title: string;
  onClick: () => void; // Lambda function, igual em Kotlin: () -> Unit
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
    >
      {title}
    </button>
  );
}