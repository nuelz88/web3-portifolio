import ProofGallery from "./ProofGallery";
import ProofHero from "./ProofHero";
import ProofStats from "./ProofStats";
/*import ProofGallery from "./ProofGallery";*/

export default function ProofsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      <ProofHero />

      <ProofStats />

      <ProofGallery />

    </main>
  );
}