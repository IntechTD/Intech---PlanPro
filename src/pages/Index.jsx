import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, BarChart3, Calendar, Users, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#121212] text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 shadow-sm bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/eae02955-72f2-4b71-afca-8370c414dfd2.png"
              alt="Logo"
              className="h-10 w-10 object-contain rounded-md"
            />
            <div>
              <h1 className="text-xl font-bold text-white tracking-wide">
                InTech PlanPro
              </h1>
              <p className="text-xs text-neutral-400">
                Sistema di Gestione Tecnici
              </p>
            </div>
          </div>
          <Button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-lg"
          >
            <LogIn className="h-4 w-4" />
            Accedi al Sistema
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-4">
          Benvenuto in InTech PlanPro
        </h2>
        <p className="text-lg text-neutral-300">
          Dimentica i file Excel e le macro. Con InTech PlanPro gestisci
          tecnici, mandays e disponibilità in un’unica piattaforma moderna e
          visuale.
        </p>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 gap-8 px-6 max-w-5xl mx-auto pb-16">
        {[{
          title: "Planning Tecnici",
          desc: "Trova subito i tecnici giusti con ricerca per competenze, zona e disponibilità.",
          icon: <Search className="h-7 w-7 text-white" />,
          gradient: "from-green-400 to-emerald-500",
          onClick: () => navigate("/planning"),
          cta: "Accedi al Planning"
        }, {
          title: "Mandays Globali",
          desc: "Analizza e visualizza i mandays aggregati con Power BI integrato.",
          icon: <BarChart3 className="h-7 w-7 text-white" />,
          gradient: "from-blue-500 to-indigo-500",
          disabled: true,
          cta: "Prossimamente"
        }].map(({ title, desc, icon, gradient, onClick, cta, disabled }) => (
          <Card key={title} className="bg-white/5 backdrop-blur-md border border-white/10 shadow-md rounded-xl hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className={`w-14 h-14 mx-auto rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center`}>
                {icon}
              </div>
              <CardTitle className="text-xl mt-3">{title}</CardTitle>
              <CardDescription className="text-neutral-400">{desc}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={onClick}
                disabled={disabled}
                className={`w-full mt-4 py-2 px-4 text-sm font-semibold rounded-md transition-all ${
                  disabled
                    ? "border border-blue-500 text-blue-500 bg-transparent"
                    : `bg-gradient-to-r ${gradient} text-white hover:opacity-90`
                }`}
              >
                {cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Why Us */}
      <section className="bg-neutral-900 py-16 px-6">
        <h3 className="text-2xl font-bold text-center text-white mb-12">
          Perché scegliere InTech PlanPro?
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{
            title: "Niente più Excel",
            desc: "Interfaccia moderna, visuale e senza fogli da aggiornare.",
            icon: <Calendar className="w-6 h-6 text-white" />,
            bg: "from-pink-500 to-red-500"
          }, {
            title: "Accesso Web",
            desc: "Tutti i collaboratori possono accedere facilmente.",
            icon: <Users className="w-6 h-6 text-white" />,
            bg: "from-yellow-400 to-orange-500"
          }, {
            title: "Dati Real-Time",
            desc: "Collegamento diretto a OneDrive o Skill Matrix Excel.",
            icon: <BarChart3 className="w-6 h-6 text-white" />,
            bg: "from-teal-400 to-cyan-500"
          }].map(({ title, desc, icon, bg }) => (
            <div key={title} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:shadow-lg transition">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${bg} flex items-center justify-center mb-4`}>
                {icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
              <p className="text-sm text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-white/10 text-neutral-500 text-sm">
        © 2025 InTech PlanPro – Powered by Street-Tech Vision ⚡
      </footer>
    </div>
  );
};

export default Index;

