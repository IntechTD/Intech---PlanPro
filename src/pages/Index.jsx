import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f8f9fa', margin: 0, padding: '2rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', color: '#343a40' }}>Panoramica del Progetto</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <Image
            src="/992da991-9314-4714-b8ec-3932d018c350.png"
            alt="Screen 1"
            width={960}
            height={540}
            style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', width: '100%', height: 'auto' }}
          />
          <Image
            src="/cb480443-7ce5-4e61-8132-a61b840b9818.png"
            alt="Screen 2"
            width={960}
            height={540}
            style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </main>
  );
}
