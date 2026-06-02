import { useState } from 'react';

function SiteEvento() {
  // Estados para o formulário de reserva
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [tipoEvento, setTipoEvento] = useState('Casamento');

  const lidarComReserva = (e) => {
    e.preventDefault();
    alert(`Obrigado, ${nome}! Verificaremos a disponibilidade para o seu ${tipoEvento} no dia ${data}.`);
    // Limpa os campos após o envio
    setNome('');
    setData('');
  };

  return (
    <div style={estilos.container}>
      {/* 1. CABEÇALHO / MENU */}
      <header style={estilos.header}>
        <h1 style={estilos.logo}>✨ Splendor Hall</h1>
        <nav>
          <a href="#sobre" style={estilos.link}>Sobre</a>
          <a href="#servicos" style={estilos.link}>Serviços</a>
          <a href="#contato" style={estilos.botaoMenu}>Reservar Data</a>
        </nav>
      </header>

      {/* 2. BANNER PRINCIPAL (HERO) */}
      <section style={estilos.hero}>
        <h2 style={estilos.heroTitulo}>O cenário perfeito para a sua história</h2>
        <p style={estilos.heroSubtitulo}>Casamentos, festas de 15 anos e eventos corporativos inesquecíveis.</p>
        <a href="#contato" style={estilos.botaoPrincipal}>Solicitar Orçamento</a>
      </section>

      {/* 3. SEÇÃO SOBRE */}
      <section id="sobre" style={estilos.secao}>
        <h3 style={estilos.tituloSecao}>O Espaço</h3>
        <p style={estilos.texto}>
          Localizado em uma área privilegiada, o <strong>Splendor Hall</strong> oferece uma infraestrutura completa e sofisticada. 
          Nosso salão climatizado comporta até 300 convidados assentados, possui isolamento acústico, gerador próprio 
          e uma linda área externa ideal para cerimônias ao ar livre ou sessões de fotos.
        </p>
      </section>

      {/* 4. SEÇÃO SERVIÇOS (CARDS) */}
      <section id="servicos" style={{ ...estilos.secao, backgroundColor: '#f4f6f9' }}>
        <h3 style={estilos.tituloSecao}>O que está incluso</h3>
        <div style={estilos.cardsContainer}>
          <div style={estilos.card}>
            <h4>🍽️ Gastronomia</h4>
            <p>Buffet completo com menus personalizados por chefs renomados.</p>
          </div>
          <div style={estilos.card}>
            <h4>🌺 Decoração</h4>
            <p>Projetos florais e cenografia adaptados ao estilo do seu evento.</p>
          </div>
          <div style={estilos.card}>
            <h4>🎵 Som e Luz</h4>
            <p>Equipamentos de última geração e pista de dança iluminada.</p>
          </div>
        </div>
      </section>

      {/* 5. FORMULÁRIO DE CONTATO/RESERVA */}
      <section id="contato" style={estilos.secao}>
        <h3 style={estilos.tituloSecao}>Reserve sua Data</h3>
        <p style={estilos.texto}>Preencha os dados abaixo para consultar nossa agenda.</p>
        
        <form onSubmit={lidarComReserva} style={estilos.formulario}>
          <input 
            type="text" 
            placeholder="Seu Nome Completo" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={estilos.input}
            required 
          />
          
          <input 
            type="date" 
            value={data}
            onChange={(e) => setData(e.target.value)}
            style={estilos.input}
            required 
          />

          <select 
            value={tipoEvento} 
            onChange={(e) => setTipoEvento(e.target.value)}
            style={estilos.input}
          >
            <option value="Casamento">Casamento</option>
            <option value="15 Anos">Festa de 15 Anos</option>
            <option value="Corporativo">Evento Corporativo</option>
            <option value="Aniversário">Aniversário/Outros</option>
          </select>

          <button type="submit" style={estilos.botaoForm}>Verificar Disponibilidade</button>
        </form>
      </section>

      {/* 6. RODAPÉ */}
      <footer style={estilos.footer}>
        <p>© 2026 Splendor Hall - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

// 🎨 DESIGN DO SITE (Estilos em JavaScript para facilitar)
const estilos = {
  container: {
    fontFamily: 'system-ui, sans-serif',
    color: '#333',
    scrollBehavior: 'smooth',
    backgroundColor: '#fff',
    margin: 0,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 8%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: '24px',
    color: '#1a2a3a',
    margin: 0,
  },
  link: {
    marginRight: '20px',
    textDecoration: 'none',
    color: '#555',
    fontWeight: '500',
  },
  botaoMenu: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#c5a880', // Tom dourado elegante
    padding: '8px 16px',
    borderRadius: '4px',
    fontWeight: '500',
  },
  hero: {
    backgroundColor: '#1a2a3a', // Azul escuro sofisticado
    color: '#fff',
    textAlign: 'center',
    padding: '100px 20px',
  },
  heroTitulo: {
    fontSize: '38px',
    marginBottom: '10px',
  },
  heroSubtitulo: {
    fontSize: '18px',
    color: '#ccc',
    marginBottom: '30px',
  },
  botaoPrincipal: {
    display: 'inline-block',
    backgroundColor: '#c5a880',
    color: '#fff',
    padding: '12px 28px',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  secao: {
    padding: '80px 15%',
    textAlign: 'center',
  },
  tituloSecao: {
    fontSize: '28px',
    color: '#1a2a3a',
    marginBottom: '20px',
  },
  texto: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto 30px auto',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginTop: '40px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    flex: 1,
  },
  formulario: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
    gap: '15px',
  },
  input: {
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  botaoForm: {
    padding: '12px',
    backgroundColor: '#1a2a3a',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#1a2a3a',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    fontSize: '14px',
  }
};

export default SiteEvento;