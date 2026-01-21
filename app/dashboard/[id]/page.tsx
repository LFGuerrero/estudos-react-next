// O Next.js injeta automaticamente "params" nas props da página.
// É equivalente ao "arguments" do Bundle no Android.

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function UserDetailsPage({ params, searchParams }: Props) {

    const {id} = await params;
    const {name} = await searchParams;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <h1 className="text-4xl font-bold text-blue-600">Detalhes do Usuário</h1>
      
      <div className="mt-8 p-6 border rounded-xl shadow-lg">
        <p>ID: {id}</p>
        
        {/* Usando o dado que veio "de carona" na URL */}
        <p>Nome (via URL): <strong>{name}</strong></p>
      </div>
    </div>
  );
}