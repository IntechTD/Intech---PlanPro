import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Search, BarChart3, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">
      <img
        src="/logo.png"
        alt="InTech Watermark"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-10 pointer-events-none select-none"
      />

      <header className="bg-black/70 border-b border-neutral-800 px-6 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-10" alt="Logo" />
          <div>
            <h1 className="text-xl font-bold">InTech PlanPro</h1>
            <p className="text-sm text-neutral-400">Sistema di Gestione Tecnici</p>
          </div>
        </div>
        <Button
          onClick={() => navigate("/login")}
          className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Accedi al Sistema
        </Button>
      </header>

      <main className="px-6 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Benvenuto in InTech PlanPro
          </h2>
          <p className="text-lg text-neutral-400 mt-4">
            Gestisci la ricerca dei tecnici, visualizza disponibilità e mandays senza più utilizzare Excel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-neutral-900 border border-neutral-700 hover:shadow-lg transition">
            <CardHeader className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-fit mx-auto">
                <Search className="text-white w-6 h-6" />
              </div>
              <CardTitle className="mt-4 text-white text-xl">Planning Tecnici</CardTitle>
              <CardDescription className="text-neutral-400 mt-1">
                Ricerca per zona, competenze, disponibilità.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => navigate("/planning")}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white"
              >
                Accedi al Planning
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border border-neutral-700 hover:shadow-lg transition">
            <CardHeader className="text-center">
              <div className="bg-indigo-600 p-4 rounded-full w-fit mx-auto">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
              <CardTitle className="mt-4 text-white text-xl">Mandays Globali</CardTitle>
              <CardDescription className="text-neutral-400 mt-1">
                Dashboard con analisi Power BI integrate.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button disabled variant="outline" className="w-full border border-indigo-500 text-indigo-400">
                Prossimamente
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
