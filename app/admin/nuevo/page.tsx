import TiktokerForm from "@/components/TiktokerForm";

export default function NuevoTiktokerPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-6">Nuevo tiktoker</h1>
        <TiktokerForm modo="crear" />
      </div>
    </main>
  );
}
