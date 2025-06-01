
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, Search, Calendar, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/eae02955-72f2-4b71-afca-8370c414dfd2.png" 
                alt="InTech Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">InTech PlanPro</h1>
                <p className="text-sm text-gray-600">Sistema di Gestione Tecnici</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/login')}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            >
              <LogIn className="w-4 h-4" />
              <span>Accedi al Sistema</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benvenuto in InTech PlanPro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gestisci la ricerca dei tecnici, visualizza disponibilità e mandays 
            senza più utilizzare Excel. Tutto in un'unica piattaforma moderna e accessibile.
          </p>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 InTech PlanPro. Sistema moderno per la gestione dei tecnici.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
