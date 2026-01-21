//"use client";

import Link from "next/link";
import BackButton from "@/components/BackButton";
import { getUsers } from "../lib/api";
import UserCard from "@/components/UserCard";

// 1. A função é ASYNC. No Android isso travaria a UI, aqui é o padrão.
export default async function Dashboard() {

    //2. O servidor "pausa" aqui até os dados chegarem.
    // Isso substitui o ViewModel launch { repository.getUsers() }
    const userResult = await getUsers();

    return (
    
        <main className="min-h-screen bg-gray-100 p-8">
            <BackButton />

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Equipe Vingadores
            </h1>

            {/* 3. A Lista Vertical (RecyclerView) */}
            {/* No React, não precisamos de Adapter. Usamos o .map() do array */}
            <div className="flex flex-col gap-4 max-w-md">

                {userResult.map((user) => (
                    // O "key" é obrigatório para performance (igual DiffUtil id)
                    // Ao clicar, o navegador vai para /dashboard/1, /dashboard/2, etc.
                    <Link key={user.id} href={`/dashboard/${user.id}?name=${user.firstName}`}>
                        <UserCard user={user} />
                    </Link>
                ))}

                {/* Estado vazio (Empty View) */}
                {userResult.length === 0 && (
                    <p className="text-gray-500">Nenhum usuário encontrado.</p>
                )}

            </div>
        </main>

    );
}