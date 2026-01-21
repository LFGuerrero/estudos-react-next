"use client";

import Button from "@/components/Button"; // O '@' é um atalho para a pasta 'src'
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter();

    const handeNavBack = () => {
        router.back();
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-blue-900 text-white">
            <h1 className="text-4xl font-bold">Bem-vindo ao Dashboard</h1>
            <p>Esta é uma nova rota!</p>

             <Button
                    title="Time get back!"
                    onClick={handeNavBack}
                  />
        </div>


    );
}