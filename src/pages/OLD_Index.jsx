
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BarChart3, Search, Calendar, LogIn } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/lovable-uploads/eae02955-72f2-4b71-afca-8370c414dfd2.png"
            alt="InTech Logo"
            style={{ height: '40px', marginRight: '1rem' }}
          />
          <div>
            <h1 style={{ fontSize: '1.5rem', margin: 0 }}>InTech PlanPro</h1>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Sistema di Gestione Tecnici</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/login')}
          style={{ background: 'linear-gradient(to right, #a855f7, #ec4899)', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px' }}
        >
          <LogIn size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
          Accedi al Sistema
        </button>
      </header>

      <main>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Benvenuto in InTech PlanPro</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
          Gestisci la ricerca dei tecnici, visualizza disponibilità e mandays senza più utilizzare Excel.
          Tutto in un'unica piattaforma moderna e accessibile.
        </p>
      </main>

      <footer style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#888' }}>
        © 2024 InTech PlanPro. Sistema moderno per la gestione dei tecnici.
      </footer>
    </div>
  );
};

export default Index;
