import React, { useState, useEffect } from 'react';
import { SECTIONS } from './data';
import HomeView from './components/HomeView';
import ArticleView from './components/ArticleView';
import NetflixCatalog from './components/NetflixCatalog';
import {
  Search,
  Mail,
  Menu,
  X,
  Info,
  FileText,
  Lock,
  Trophy,
  Award
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Tema: light ou dark
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('clarim-theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('clarim-theme', theme);
  }, [theme]);

  // UX de Navegação: Rola a janela suavemente ao topo quando a página atual é alterada
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const activeSection = SECTIONS.find((s) => s.id === currentPage);

  const handleNavigateToCatalog = () => {
    setCurrentPage('portal');
    setSearchFeedback(null);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const term = searchQuery.toLowerCase().trim();

    // Algoritmo de roteamento semântico baseado nos eixos temáticos do Clarim Belga
    if (term.includes('hist') || term.includes('pol') || term.includes('revol') || term.includes('congo') || term.includes('indepen') || term.includes('leopoldo')) {
      setCurrentPage('historia-politica');
      setSearchFeedback(null);
    } else if (term.includes('geo') || term.includes('clima') || term.includes('map') || term.includes('bio') || term.includes('fland') || term.includes('wall') || term.includes('brux') || term.includes('arde')) {
      setCurrentPage('geografia-meio-ambiente');
      setSearchFeedback(null);
    } else if (term.includes('cult') || term.includes('hq') || term.includes('surre') || term.includes('magr') || term.includes('culin') || term.includes('waff') || term.includes('choc') || term.includes('cerve') || term.includes('idioma') || term.includes('ling')) {
      setCurrentPage('cultura-sociedade');
      setSearchFeedback(null);
    } else if (term.includes('econ') || term.includes('moed') || term.includes('euro') || term.includes('pib') || term.includes('gráfi') || term.includes('mat') || term.includes('export') || term.includes('balança')) {
      setCurrentPage('economia-matematica');
      setSearchFeedback(null);
    } else if (term.includes('esp') || term.includes('cicli') || term.includes('merckx') || term.includes('diab') || term.includes('fute') || term.includes('copa') || term.includes('olím') || term.includes('saúd') || term.includes('vida') || term.includes('longe')) {
      setCurrentPage('esporte-estilo-vida');
      setSearchFeedback(null);
    } else {
      setSearchFeedback(`Nenhum artigo encontrado para "${searchQuery}". Sugestões: "História", "Flandres", "Waffles", "PIB" ou "Ciclismo".`);
    }
    setSearchQuery('');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''} bg-paper text-ink font-sans antialiased selection:bg-belgian-red/15 selection:text-belgian-red transition-colors duration-300`}>

      {/* 1. BARRA TRICOLOR BELGA — Fina e imune à inversão de cores do modo escuro */}
      <div
        style={{ colorScheme: 'only light', forcedColorAdjust: 'none' }}
        className="bandeira-belgica h-[3px] w-full flex rounded-none overflow-hidden"
        aria-hidden="true"
      >
        <div style={{ backgroundColor: '#000000' }} className="w-1/3"></div>
        <div className="w-1/3 bg-[#F5C518]"></div>
        <div className="w-1/3 bg-belgian-red"></div>
      </div>

      {/* 2. BARRA SUPERIOR DE INFORMAÇÕES */}
      <div className="text-[11px] text-ink-muted py-2.5 px-4 border-b border-rule/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">

          {/* Ticker de Notícias com nova mensagem de boletim */}
          <div className="flex items-center gap-3 overflow-hidden w-full md:w-2/3">
            <span className="bg-belgian-red text-white text-[9px] font-black px-2.5 py-0.5 rounded-none tracking-wider uppercase shrink-0">
              Boletim
            </span>
            <div className="relative w-full overflow-hidden h-4 flex items-center">
              <div className="absolute whitespace-nowrap animate-marquee text-[11px] text-ink-muted font-medium" aria-hidden="true">
                ✦ Boletim Oficial do Reino da Bélgica: Cúpula Europeia debate sustentabilidade industrial em Bruxelas ✦ Porto de Antuérpia-Bruges registra crescimento recorde de 4.2% na movimentação de containers ✦ Comissão Científica e Cultural valida novos arquivos de historiografia e cartografia do Reino ✦
              </div>
            </div>
          </div>

          {/* Seletor Multilíngue */}
          <div className="flex items-center gap-4 text-[10px] font-semibold text-ink-muted uppercase tracking-wider shrink-0">
            <span className="text-belgian-red cursor-default font-bold" title="Idioma Ativo: Português Brasileiro">PT-BR</span>
            <span className="text-rule">|</span>
            <button className="hover:text-ink transition-colors" onClick={() => alert('NL-BE (Nederlands) em fase de revisão oficial pela comissão flamenga.')}>NL</button>
            <span className="text-rule">|</span>
            <button className="hover:text-ink transition-colors" onClick={() => alert('FR-BE (Français) em fase de revisão oficial pela comissão valona.')}>FR</button>
            <span className="text-rule">|</span>
            <button className="hover:text-ink transition-colors" onClick={() => alert('DE-BE (Deutsch) disponível nos arquivos oficiais de Liège.')}>DE</button>
          </div>

        </div>
      </div>

      {/* 3. CABEÇALHO EDITORIAL PREMIUM */}
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">

          {/* Logotipo (Cantos retos - rounded-none nas imagens e logos) */}
          <div
            onClick={() => { setCurrentPage('home'); setSearchFeedback(null); }}
            className="flex items-center gap-3 cursor-pointer group"
            role="button"
            aria-label="Ir para a capa do portal"
          >
            {/* Escudo Tricolor com proteção total contra inversão do modo escuro */}
            <div
              style={{ colorScheme: 'only light', forcedColorAdjust: 'none' }}
              className="bandeira-belgica relative w-10 h-12 rounded-none overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm"
            >
              <div style={{ backgroundColor: '#000000' }} className="absolute inset-y-0 left-0 w-1/3"></div>
              <div className="absolute inset-y-0 left-1/3 w-1/3 bg-[#F5C518]"></div>
              <div className="absolute inset-y-0 left-2/3 w-1/3 bg-belgian-red"></div>
              <span className="absolute inset-0 flex items-center justify-center font-serif text-sm font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">CB</span>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-[22px] font-black uppercase tracking-tight text-ink group-hover:text-belgian-red transition-colors duration-200 leading-none">
                O Clarim <span className="text-belgian-red">Belga</span>
              </span>
              <span className="text-[9px] font-medium text-ink-muted uppercase tracking-[0.15em] mt-1">
                Portal Oficial de Informações do Reino
              </span>
            </div>
          </div>

          {/* Navegação Principal */}
          <nav aria-label="Navegação Principal" className="hidden xl:flex items-center gap-0.5">
            <button
              onClick={() => { setCurrentPage('home'); setSearchFeedback(null); }}
              className={`px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 rounded-none ${currentPage === 'home'
                ? 'text-belgian-red bg-accent-red-bg font-bold'
                : 'text-ink-light hover:text-ink hover:bg-paper-cream'
                }`}
            >
              Capa
            </button>
            <button
              onClick={handleNavigateToCatalog}
              className={`px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 rounded-none ${currentPage === 'portal'
                ? 'text-belgian-gold bg-accent-gold-bg font-bold'
                : 'text-belgian-gold hover:bg-accent-gold-bg'
                }`}
            >
              Portal do Reino 🇧🇪
            </button>
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => { setCurrentPage(sec.id); setSearchFeedback(null); }}
                className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 rounded-none shrink-0 ${currentPage === sec.id
                  ? 'text-belgian-red bg-accent-red-bg font-bold'
                  : 'text-ink-light hover:text-ink hover:bg-paper-cream'
                  }`}
              >
                {sec.title}
              </button>
            ))}
          </nav>

          {/* Caixa de Busca e Botão de Tema */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleSearchSubmit} className="relative w-48 xl:w-56" role="search">
              <input
                type="text"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-paper-cream text-ink rounded-none text-xs font-sans outline-none focus:ring-1 focus:ring-belgian-gold transition-all placeholder:text-ink-faint border-none"
                aria-label="Digitar termo de busca"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink-faint" aria-hidden="true" />
            </form>

            <button
              onClick={() => alert('O Clarim Belga: Edição Integrada 2026. Portal oficial de informações geográficas, econômicas, históricas e de relevância do Reino da Bélgica.')}
              className="p-2 text-ink-muted hover:text-ink rounded-full transition-colors cursor-pointer"
              aria-label="Sobre o Portal de Informações"
            >
              <Info className="w-4.5 h-4.5" />
            </button>

            {/* Alternador de Tema (Modo Claro / Escuro) */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 text-ink-muted hover:text-ink rounded-full transition-colors cursor-pointer"
              aria-label={theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
              title={theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
            >
              {theme === 'light' ? (
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>
          </div>

          {/* Hambúrguer Menu Mobile */}
          <div className="xl:hidden flex items-center gap-2">
            {/* Alternador de Tema Mobile */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 text-ink-muted hover:text-ink rounded-full transition-colors cursor-pointer"
              aria-label={theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-light hover:text-ink hover:bg-paper-cream rounded-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Menu Suspenso Mobile */}
        {mobileMenuOpen && (
          <nav aria-label="Navegação em Telas Pequenas" className="xl:hidden bg-paper border-t border-rule/60 py-4 px-4 space-y-1 animate-fade-in shadow-md">
            <button
              onClick={() => { setCurrentPage('home'); setSearchFeedback(null); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-none ${currentPage === 'home' ? 'bg-accent-red-bg text-belgian-red font-bold' : 'text-ink-light hover:bg-paper-cream'
                }`}
            >
              Página Inicial
            </button>
            <button
              onClick={() => { handleNavigateToCatalog(); setMobileMenuOpen(false); }}
              className="w-full text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-none text-belgian-gold hover:bg-accent-gold-bg"
            >
              Portal do Reino 🇧🇪
            </button>
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => { setCurrentPage(sec.id); setSearchFeedback(null); setMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-none ${currentPage === sec.id ? 'bg-accent-red-bg text-belgian-red font-bold' : 'text-ink-light hover:bg-paper-cream'
                  }`}
              >
                {sec.title}
              </button>
            ))}

            {/* Input de Busca Mobile */}
            <form onSubmit={handleSearchSubmit} className="relative pt-2" role="search">
              <input
                type="text"
                placeholder="Pesquisar no portal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2.5 bg-paper-cream text-ink rounded-none text-xs outline-none placeholder:text-ink-faint border-none"
                aria-label="Buscar assunto"
              />
              <Search className="absolute left-2.5 bottom-3 w-3.5 h-3.5 text-ink-faint" aria-hidden="true" />
            </form>
          </nav>
        )}
      </header>

      {/* Caixa de Feedback de Busca */}
      {searchFeedback && (
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <div className="p-3.5 bg-accent-red-bg rounded-none text-xs text-belgian-red flex justify-between items-center animate-slide-down border border-belgian-red/20">
            <span>{searchFeedback}</span>
            <button
              onClick={() => setSearchFeedback(null)}
              className="font-bold text-sm leading-none hover:text-ink cursor-pointer ml-4"
              aria-label="Fechar alerta de busca"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* CONTEÚDO PRINCIPAL */}
      <main id="main-content" tabIndex={-1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 outline-none">
        {currentPage === 'home' ? (
          <HomeView onNavigate={(id) => { setCurrentPage(id); setSearchFeedback(null); }} />
        ) : currentPage === 'portal' ? (
          <NetflixCatalog onNavigateToFullSection={(id) => { setCurrentPage(id); setSearchFeedback(null); }} />
        ) : activeSection ? (
          <ArticleView
            section={activeSection}
            onBack={() => setCurrentPage('home')}
            onNavigateToSection={(id) => { setCurrentPage(id); setSearchFeedback(null); }}
          />
        ) : (
          <div className="text-center py-24 space-y-4">
            <h2 className="font-serif text-3xl font-black text-ink uppercase tracking-wider">Página Não Encontrada</h2>
            <p className="text-ink-muted text-sm">O link selecionado é inválido ou está em manutenção interna.</p>
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-belgian-red hover:bg-[#a50d24] text-white py-2.5 px-6 rounded-none text-xs uppercase font-semibold tracking-wider cursor-pointer transition-colors"
            >
              Voltar à Capa
            </button>
          </div>
        )}
      </main>

      {/* RODAPÉ EDITORIAL PREMIUM */}
      <footer className="bg-paper-warm text-ink-light pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-rule/50">
        <div className="max-w-7xl mx-auto">

          {/* Vitrine de Honra */}
          <div className="mb-14 pb-10 border-b border-rule">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-semibold text-belgian-red uppercase tracking-[0.2em] block mb-1">VITRINE DE HONRA</span>
                <h4 className="font-serif text-2xl font-black text-ink tracking-tight">Grandes Conquistas do Reino</h4>
              </div>
              <span className="text-[10px] font-medium text-ink-faint uppercase tracking-wider">Consolidação de dados de soberania nacional</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Trophy className="w-5 h-5" />, val: '×1', label: 'Ouro Olímpico (Futebol)', sub: 'Antuérpia 1920', color: '#B8860B' },
                { icon: <Award className="w-5 h-5" />, val: '×11', label: 'Prêmios Nobel Belgas', sub: 'Medicina, Física, Literatura, Paz', color: '#C8102E' },
                { icon: <Trophy className="w-5 h-5" />, val: '×525', label: 'Vitórias de Eddy Merckx', sub: 'Recorde Absoluto do Ciclismo', color: '#B8860B' },
                { icon: <Award className="w-5 h-5" />, val: '×15', label: 'Patrimônios Mundiais', sub: 'UNESCO protegidos no Reino', color: '#C8102E' },
              ].map((item, i) => (
                <div key={i} className="bg-card-bg rounded-none p-5 flex items-center gap-4 shadow-editorial hover:shadow-editorial-hover transition-all duration-300">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-none" style={{ backgroundColor: `${item.color}12`, color: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-lg font-serif font-black text-ink leading-none">{item.val}</div>
                    <div className="text-[10px] font-semibold text-ink-light uppercase tracking-wide mt-1">{item.label}</div>
                    <div className="text-[9px] text-ink-muted mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-rule">

            {/* Coluna 1: Identidade */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                {/* Bandeira tricolor do Rodapé (Imune à inversão de cores) */}
                <div
                  style={{ colorScheme: 'only light', forcedColorAdjust: 'none' }}
                  className="bandeira-belgica w-5 h-6 rounded-none flex overflow-hidden"
                  aria-hidden="true"
                >
                  <div style={{ backgroundColor: '#000000' }} className="w-1/3 h-full"></div>
                  <div className="w-1/3 h-full bg-[#F5C518]"></div>
                  <div className="w-1/3 h-full bg-belgian-red"></div>
                </div>
                <span className="font-serif text-lg font-black text-ink uppercase tracking-tight">
                  Clarim <span className="text-belgian-red">Belga</span>
                </span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                O Clarim Belga é um portal analítico de informações oficiais concebido para disponibilizar dados confiáveis sobre a geografia, economia, história e cultura do Reino da Bélgica.
              </p>
            </div>

            {/* Coluna 2: Disciplinas */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-ink uppercase tracking-wider block">
                Eixos Informativos
              </span>
              <ul className="text-xs space-y-2.5 text-ink-light">
                <li>História e Política</li>
                <li>Geografia e Meio Ambiente</li>
                <li>Cultura e Sociedade</li>
                <li>Economia e Dados</li>
                <li>Esporte e Estilo de Vida</li>
              </ul>
            </div>

            {/* Coluna 3: Links */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-ink uppercase tracking-wider block">
                Navegação
              </span>
              <ul className="text-xs space-y-2.5 text-ink-light">
                {SECTIONS.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => { setCurrentPage(sec.id); setSearchFeedback(null); }}
                      className="hover:text-belgian-red transition-colors text-left cursor-pointer"
                    >
                      {sec.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4: Contato */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-ink uppercase tracking-wider block">
                Contato
              </span>
              <div className="text-xs space-y-3 text-ink-light">
                <p className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-belgian-gold shrink-0" />
                  <span>Portal Oficial de Informações</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-belgian-red shrink-0" />
                  <span>contato@oclarimbelga.be</span>
                </p>
              </div>
            </div>
          </div>

          {/* Faixa Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ink-faint gap-4">
            <div>
              &copy; 2026 O Clarim Belga. Desenvolvido sob as diretivas de acessibilidade da União Europeia.
            </div>
            <div className="flex gap-6">
              <span className="hover:text-ink-light cursor-help transition-colors">Normas Técnicas</span>
              <span className="hover:text-ink-light cursor-help transition-colors">Diretrizes de Imprensa</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
