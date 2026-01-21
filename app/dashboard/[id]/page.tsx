// O Next.js injeta automaticamente "params" nas props da página.
// É equivalente ao "arguments" do Bundle no Android.

interface Props {
  params: Promise<{ id: string }>;
}

export default async function UserDetailsPage({ params }: Props) {

    const {id} = await params;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <h1 className="text-4xl font-bold text-blue-600">Detalhes do Usuário</h1>
      
      <div className="mt-8 p-6 border rounded-xl shadow-lg">
        <p className="text-xl">
          ID recebido da URL: <strong>{id}</strong>
        </p>
      </div>
      
      {/* Aqui você faria outra chamada de API buscando pelo ID: getUserById(params.id) */}
    </div>
  );
}