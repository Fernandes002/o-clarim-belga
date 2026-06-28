// src/components/ArticleView.tsx
import { useState, useEffect } from 'react';
import { SectionData } from '../types';
import {
  TIMELINE,
  CULTURAL_ITEMS,
  SPORTS_CAMPAIGNS
} from '../data';
import InteractiveMap from './InteractiveMap';
import EconomicChart from './EconomicChart';
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Compass,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Volume2,
  Award,
  Trophy,
  Lightbulb,
  ChefHat,
  Languages,
  CheckSquare,
  Square,
  Sparkles,
  Users,
  Dribbble,
  Brain
} from 'lucide-react';

interface ArticleViewProps {
  section: SectionData;
  onBack: () => void;
}

export default function ArticleView({ section, onBack }: ArticleViewProps) {
  // --- 1. HISTÓRIA & POLÍTICA STATES ---
  const [selectedTimelineYear, setSelectedTimelineYear] = useState<string>('1830');
  const activeTimelineItem = (TIMELINE.find(t => t.year === selectedTimelineYear) || TIMELINE[0])!;

  // Estados para as seções retráteis [Ocultar / Mostrar] da Ficha de Política
  const [hideMonarquia, setHideMonarquia] = useState<boolean>(false);
  const [hideExecutivo, setHideExecutivo] = useState<boolean>(false);
  const [hideLegislativo, setHideLegislativo] = useState<boolean>(false);
  const [hideJudiciario, setHideJudiciario] = useState<boolean>(false);

  // --- 2. CULTURA & SOCIEDADE STATES ---
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [activeRecipeStep, setActiveRecipeStep] = useState<number>(0);
  const [flippedExpressionIndex, setFlippedExpressionIndex] = useState<number | null>(null);

  // Audio Guide Simulator state
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [audioTime, setAudioTime] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAudioPlaying) {
      interval = setInterval(() => {
        setAudioTime((prevTime) => {
          if (prevTime >= 138) {
            setIsAudioPlaying(false);
            setAudioProgress(100);
            return 0;
          }
          const nextTime = prevTime + 1;
          setAudioProgress((nextTime / 138) * 100);
          return nextTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAudioPlaying]);

  const formatAudioTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const handleToggleIngredient = (ing: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [ing]: !prev[ing]
    }));
  };

  // --- 3. ESPORTE & ESTILO DE VIDA STATES ---
  const [selectedCampaignIndex, setSelectedCampaignIndex] = useState<number>(3);
  const activeCampaign = SPORTS_CAMPAIGNS[selectedCampaignIndex]!;

  return (
    <div className="space-y-12 animate-fade-in">

      {/* BREADCRUMB & BOTÃO VOLTAR */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-rule">
        <nav aria-label="Navegação secundária" className="flex items-center gap-2.5 text-xs text-ink-muted">
          <button
            onClick={onBack}
            className="hover:text-belgian-red transition-colors cursor-pointer font-medium"
          >
            Capa
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-ink-faint" aria-hidden="true" />
          <span className="text-ink-faint">Capítulos</span>
          <ChevronRight className="w-3.5 h-3.5 text-ink-faint" aria-hidden="true" />
          <span className="text-belgian-red font-semibold uppercase tracking-wider">{section.title}</span>
        </nav>

        <button
          onClick={onBack}
          className="flex items-center gap-2 bg-card-bg hover:bg-paper-cream text-ink-light hover:text-ink px-4 py-2 rounded-none text-xs font-semibold uppercase tracking-wider transition-all shadow-editorial group cursor-pointer"
          aria-label="Voltar para a capa do portal"
        >
          <ArrowLeft className="w-4 h-4 text-belgian-red transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          <span>Voltar à Capa</span>
        </button>
      </div>

      {/* 2. ÁREA HEADER JORNALÍSTICA (ESTILO BARÇA) */}
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-ink tracking-tight leading-tight uppercase">
            {section.title}
          </h1>
          <p className="text-lg text-ink-light font-sans font-normal leading-relaxed max-w-4xl italic">
            {section.subtitle}
          </p>
        </div>

        {/* Linha de Metadados */}
        <div className="flex justify-between items-center border-b border-rule pb-3.5 text-[11px] text-ink-muted font-sans uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="font-bold text-ink">oclarimbelga.be</span>
            <span className="text-rule">|</span>
            <span>Edição de Dados 2026</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-belgian-red">
            <span>HISTORIOGRAFIA DO REINO</span>
            <span className="w-2 h-2 bg-belgian-red block"></span>
          </div>
        </div>

        {/* Botão de Compartilhar Minimalista */}
        <div className="flex justify-center sm:justify-start pt-1">
          <button className="flex items-center gap-2 bg-[#3b5998] hover:bg-[#2d4373] text-white px-4 py-1.5 rounded-none text-xs font-bold transition-all shadow-sm cursor-pointer">
            <span>Compartilhar</span>
          </button>
        </div>
      </div>

      {/* CONTEÚDO POR TEMA */}
      <div className="space-y-16">

        {/* --- TEMA 1: HISTÓRIA & POLÍTICA --- */}
        {section.id === 'historia-politica' && (
          <div className="space-y-14 animate-fade-in">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* Coluna Principal de Leitura */}
              <div className="lg:col-span-8 space-y-6 text-ink-light text-[15px] leading-[1.8] font-sans">

                {/* 1. Das Origens à Dominação Espanhola */}
                <section className="space-y-4">
                  <h2 className="font-serif text-xl font-bold text-ink uppercase tracking-tight pb-2 border-b border-rule flex items-center gap-2">
                    <span className="text-belgian-red font-serif">I.</span> Das Origens Celtas à Dominação Espanhola
                  </h2>

                  {/* Foto 2: Gália Belga (Flutuando à direita) */}
                  <figure className="float-right ml-6 mb-4 max-w-[240px] md:max-w-[280px] text-center">
                    <img
                      src="/src/assets/images/REmpire-Gallia_Belgica.png"
                      alt="Gália Belga no Império Romano"
                      className="w-full h-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.1: Província da Gália Belga romana.
                    </figcaption>
                  </figure>

                  <p>
                    <span className="float-left text-5xl sm:text-6xl font-serif font-black text-belgian-red mr-3 leading-none pt-2">A</span>
                    história da <strong className="text-ink font-medium">Bélgica</strong> remonta de antes do moderno Estado soberano. No período clássico, os belgas formavam na Gália do Norte uma grande federação territorial de tribos. Júlio César liderou a submissão das forças locais entre 59 e 52 a.C., estendendo as fronteiras romanas e denominando a província setentrional de <strong className="text-ink font-semibold">Gália Belga</strong>.
                  </p>
                  <p>
                    No século V, os francos ocuparam o norte, enquanto o sul manteve a predominância romana, originando as comunidades latinas dos valões. Dividida pelo histórico **Tratado de Verdun (843)**, a região ao oeste do rio Escalda passou ao reino francês, enquanto o leste ligou-se à Germânia, fixando os rumos da divisão linguística atual.
                  </p>

                  {/* Foto 3: Filipe, o Bom (Flutuando à esquerda) */}
                  <figure className="float-left mr-6 mb-4 max-w-[180px] md:max-w-[220px] text-center">
                    <img
                      src="/src/assets/images/Taller_de_rogier_van_der_weyden-felipe_el_bueno-patrimonio_nacional.png"
                      alt="Retrato de Filipe, o Bom"
                      className="w-full h-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.2: Filipe, o Bom, Duque de Borgonha.
                    </figcaption>
                  </figure>

                  <p>
                    Sob o controle do Ducado de Borgonha no século XV, a Bélgica viveu um florescimento comercial marcante sob a tutela de **Filipe, o Bom**. O soberano impulsionou as artes plásticas primitivas e unificou o poder legal, protegendo o florescer econômico da tecelagem flamenga e de mercados proeminentes.
                  </p>
                </section>

                <div className="clear-both"></div>

                {/* 2. Domínio Espanhol e Conflitos Religiosos */}
                <section className="space-y-4">
                  <h2 className="font-serif text-xl font-bold text-ink uppercase tracking-tight pb-2 border-b border-rule flex items-center gap-2">
                    <span className="text-belgian-red font-serif">II.</span> O Período sob a Coroa de Castela
                  </h2>

                  {/* Foto 4: Filipe II (Flutuando à direita) */}
                  <figure className="float-right ml-6 mb-4 max-w-[180px] md:max-w-[220px] text-center">
                    <img
                      src="/src/assets/images/Phillip2_coello_pantoja.jpg"
                      alt="Filipe II por Coello"
                      className="w-full h-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.3: Retrato de Filipe II da Espanha.
                    </figcaption>
                  </figure>

                  <p>
                    Através de laços matrimoniais, o controle belga passou aos Habsburgos e, sob o governo de **Carlos V**, foi unificado formalmente ao Império Espanhol em 1549. O reinado subsequente de **Filipe II** tentou reprimir as liberdades locais e o protestantismo, resultando na cisão das Províncias Unidas (Holanda) em 1579, enquanto o sul católico e aristocrático permaneceu fiel a Madri.
                  </p>
                  <p>
                    Esse afastamento do norte calvinista isolou os portos do sul e gerou um declínio mercantil em Antuérpia, cujo protagonismo de tráfego náutico acabou sendo absorvido pelo centro comercial de Amsterdã nas décadas subsequentes.
                  </p>
                </section>

                <div className="clear-both"></div>

                {/* 3. Domínio Austríaco e Período Revolucionário */}
                <section className="space-y-4">
                  <h2 className="font-serif text-xl font-bold text-ink uppercase tracking-tight pb-2 border-b border-rule flex items-center gap-2">
                    <span className="text-belgian-red font-serif">III.</span> Domínio Austríaco e o Impacto Napoleônico
                  </h2>
                  <p>
                    Com o Tratado de Utrecht (1713), o território belga foi cedido à Áustria. A tentativa de José II de abolir a autonomia local motivou a Revolução Brabantina em 1789. Com a expansão militar da França Revolucionária, a Bélgica foi formalmente incorporada ao domínio francês em 1795, abolindo as estruturas de privilégios senhoriais.
                  </p>

                  {/* Foto 5: Batalha de Waterloo (Centralizada, não esticada) */}
                  <figure className="my-6 max-w-lg mx-auto text-center">
                    <img
                      src="/src/assets/images/Battle_of_Waterloo_-_Robinson.jpg"
                      alt="Batalha de Waterloo"
                      className="w-full h-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.4: Pintura histórica da Batalha de Waterloo (1815), ocorrida em solo belga.
                    </figcaption>
                  </figure>

                  {/* Foto 6: Mapa 1815-1830 (Flutuando à direita) */}
                  <figure className="float-right ml-6 mb-4 max-w-[200px] md:max-w-[240px] text-center">
                    <img
                      src="/src/assets/images/mapa_1815_1830.jpg"
                      alt="Mapa da Bélgica e Holanda"
                      className="w-full h-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.5: Divisão territorial do Reino Unido dos Países Baixos.
                    </figcaption>
                  </figure>

                  <p>
                    Após a derrocada napoleônica, o Congresso de Viena unificou artificialmente a Bélgica e a Holanda sob o Reino dos Países Baixos (1815-1830), gerando profundas resistências católicas contra a coroa protestante de Guilherme I. A união comercial forçada gerou profundas divergências sobre a imposição do idioma holandês como língua exclusiva do parlamento.
                  </p>
                </section>

                <div className="clear-both"></div>

                {/* 4. A Criação do Reino da Bélgica */}
                <section className="space-y-4">
                  <h2 className="font-serif text-xl font-bold text-ink uppercase tracking-tight pb-2 border-b border-rule flex items-center gap-2">
                    <span className="text-belgian-red font-serif">IV.</span> A Revolução de 1830 e a Emancipação do Reino
                  </h2>

                  {/* Foto 7: Episódio da revolução de 1830 (Flutuando à esquerda) */}
                  <figure className="float-left mr-6 mb-4 max-w-[240px] md:max-w-[280px] text-center">
                    <img
                      src="/src/assets/images/historia3.jpg"
                      alt="Revolução de 1830"
                      className="w-full h-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.6: Episódio da Revolução de 1830.
                    </figcaption>
                  </figure>

                  <p>
                    Em agosto de 1830, as insatisfações linguísticas e fiscais eclodiram em uma rebelião em Bruxelas. A revolução levou à declaração de independência e, com o aval britânico e francês na Conferência de Londres, a neutralidade perpétua belga foi firmada.
                  </p>
                  <p>
                    O país ergueu uma das constituições mais liberais da época e declarou **Leopoldo I de Saxe-Coburgo-Gota** como seu primeiro monarca em 1831, definindo as bases estruturais de uma monarquia parlamentar unificada.
                  </p>

                  {/* Foto 8: Leopoldo I (Flutuando à direita) */}
                  <figure className="float-right ml-6 mb-4 max-w-[180px] md:max-w-[220px] text-center">
                    <img
                      src="/src/assets/images/LeopoldIBelgium.jpg"
                      alt="Leopoldo I"
                      className="w-full h-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.7: Retrato do rei Leopoldo I.
                    </figcaption>
                  </figure>
                </section>

                <div className="clear-both"></div>

                {/* 5. A Expansão Colonial e Guerras Globais */}
                <section className="space-y-4">
                  <h2 className="font-serif text-xl font-bold text-ink uppercase tracking-tight pb-2 border-b border-rule flex items-center gap-2">
                    <span className="text-belgian-red font-serif">V.</span> Imperialismo Colonial e Conflitos do Século XX
                  </h2>
                  <p>
                    Durante o reinado de **Leopoldo II (1865-1909)**, a rápida aceleração industrial estimulou a busca por bases coloniais. O rei organizou a exploração e se apossou do Estado Livre do Congo como propriedade pessoal, um mandato maculado por terríveis brutalidades contra as tribos locais. Ante as pressões globais de direitos humanos, o Parlamento Belga assumiu o governo da região em 1908.
                  </p>

                  {/* Imagens Lado a Lado: Leopoldo II & Mapa do Congo (Sem esticar) */}
                  <div className="grid grid-cols-2 gap-4 my-6">
                    <figure className="text-center">
                      <img
                        src="/src/assets/images/Leopold_II_gravure.jpg"
                        alt="Leopoldo II"
                        className="mx-auto max-h-48 w-auto shadow-sm"
                      />
                      <figcaption className="text-[9px] text-ink-muted mt-1 italic">
                        Fig. 1.8: Leopoldo II da Bélgica.
                      </figcaption>
                    </figure>

                    <figure className="text-center">
                      <img
                        src="/src/assets/images/Kongovrijstaat.jpg"
                        alt="Mapa do Estado Livre do Congo"
                        className="mx-auto max-h-48 w-auto shadow-sm"
                      />
                      <figcaption className="text-[9px] text-ink-muted mt-1 italic">
                        Fig. 1.9: Estado Livre do Congo.
                      </figcaption>
                    </figure>
                  </div>

                  {/* Foto 11: Alberto I (Flutuando à esquerda) */}
                  <figure className="float-left mr-6 mb-4 max-w-[180px] md:max-w-[220px] text-center">
                    <img
                      src="/src/assets/images/Albert_I_of_Belgium.jpg"
                      alt="Alberto I"
                      className="w-full h-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.10: Retrato militar do rei Alberto I.
                    </figcaption>
                  </figure>

                  <p>
                    Em 1914, a Alemanha ignorou a neutralidade perpétua da Bélgica e invadiu o país. O rei **Alberto I** assumiu o comando do exército, operando uma resistência que precipitou a entrada dos britânicos na Primeira Guerra Mundial.
                  </p>
                  <p>
                    O pós-guerra abriu as portas para uma grande recuperação civil e industrial, incluindo a celebração das competições esportivas de Antuérpia.
                  </p>

                  {/* Foto 12: Pôster das Olimpíadas de 1920 (Flutuando à direita) */}
                  <figure className="float-right ml-6 mb-4 max-w-[180px] md:max-w-[220px] text-center">
                    <img
                      src="/src/assets/images/poster_olimpiadas_1920.jpg"
                      alt="Pôster das Olimpíadas de 1920"
                      className="w-full h-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.11: Pôster dos Jogos Olímpicos de 1920.
                    </figcaption>
                  </figure>

                  <p>
                    Na Segunda Guerra Mundial, o país foi invadido novamente em 1940. A capitulação rápida de Leopoldo III dividiu opiniões e resultou em sua abdicação no pós-guerra em benefício de **Balduíno I**, abrindo caminho para uma nova era de harmonia europeia e estabilidade legislativa.
                  </p>

                  <div className="clear-both"></div>

                  {/* Foto 13: Balduíno I (Centralizada) */}
                  <figure className="my-6 max-w-sm mx-auto text-center">
                    <img
                      src="/src/assets/images/Baudouin_1969.jpg"
                      alt="Balduíno I e sua esposa"
                      className="mx-auto max-h-72 w-auto shadow-sm"
                    />
                    <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">
                      Fig. 1.12: Rei Balduíno I e a rainha Fabíola.
                    </figcaption>
                  </figure>
                </section>

              </div>

              {/* Coluna Lateral de Apoio (Infobox de Política da Bélgica) */}
              <aside className="lg:col-span-4 space-y-6">

                {/* INFOBOX ESTILO WIKIPÉDIA - INTEGRADO AO MODO CLARO/ESCURO */}
                <div
                  style={estiloBandeira}
                  className="bg-card-bg border border-rule/70 p-5 rounded-none shadow-editorial space-y-5 text-xs text-ink-light"
                >

                  {/* Identificação Principal da Ficha */}
                  <div className="text-center space-y-3">
                    <span className="text-[10px] font-bold text-belgian-red uppercase tracking-[0.2em] block">
                      Ficha Governamental
                    </span>
                    <h3 className="font-serif text-base font-black text-ink uppercase tracking-tight leading-tight">
                      Estrutura Política da Bélgica
                    </h3>
                  </div>

                  {/* Imagem: Parlamento Federal (.jpg) */}
                  <div className="space-y-1">
                    <img
                      src="/src/assets/images/Belgian_Federal_Parliament.jpg"
                      alt="Parlamento Federal da Bélgica"
                      className="w-full h-28 object-cover rounded-none"
                    />
                    <span className="text-[9px] text-ink-muted block text-center font-mono">Palácio da Nação, Bruxelas</span>
                  </div>

                  {/* Informações Gerais */}
                  <table className="w-full text-left border-collapse border-b border-rule/30 pb-2">
                    <tbody>
                      <tr className="border-b border-rule/30">
                        <td className="py-2 font-bold text-ink-muted">Tipo de Estado</td>
                        <td className="py-2 text-ink">Monarquia Constitucional</td>
                      </tr>
                      <tr className="border-b border-rule/30">
                        <td className="py-2 font-bold text-ink-muted">Constituição</td>
                        <td className="py-2 text-ink">7 de fevereiro de 1831</td>
                      </tr>
                      <tr className="border-b border-rule/30">
                        <td className="py-2 font-bold text-ink-muted">Independência</td>
                        <td className="py-2 text-ink">4 de outubro de 1830</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Grupo Retrátil 1: MONARQUIA */}
                  <div className="border border-rule/50 p-2.5 bg-paper-warm/50">
                    <div className="flex justify-between items-center font-bold text-ink uppercase tracking-wider text-[9px] mb-2">
                      <span>Monarquia Belga</span>
                      <button
                        onClick={() => setHideMonarquia(!hideMonarquia)}
                        className="text-belgian-gold hover:text-belgian-red cursor-pointer transition-colors"
                      >
                        {hideMonarquia ? '[Mostrar]' : '[Ocultar]'}
                      </button>
                    </div>
                    {!hideMonarquia && (
                      <ul className="space-y-1.5 pl-2 border-l border-belgian-gold/40 animate-fade-in text-[11px] text-ink-light">
                        <li><strong>Chefe de Estado:</strong> Rei Filipe I</li>
                        <li><strong>Sucessão:</strong> Dinastia Saxe-Coburgo-Gota</li>
                        <li><strong>Herdeira Aparente:</strong> Princesa Elisabeth</li>
                      </ul>
                    )}
                  </div>

                  {/* Grupo Retrátil 2: EXECUTIVO */}
                  <div className="border border-rule/50 p-2.5 bg-paper-warm/50">
                    <div className="flex justify-between items-center font-bold text-ink uppercase tracking-wider text-[9px] mb-2">
                      <span>Poder Executivo</span>
                      <button
                        onClick={() => setHideExecutivo(!hideExecutivo)}
                        className="text-belgian-gold hover:text-belgian-red cursor-pointer transition-colors"
                      >
                        {hideExecutivo ? '[Mostrar]' : '[Ocultar]'}
                      </button>
                    </div>
                    {!hideExecutivo && (
                      <ul className="space-y-1.5 pl-2 border-l border-belgian-gold/40 animate-fade-in text-[11px] text-ink-light">
                        <li><strong>Primeiro-Ministro:</strong> Chefe de Governo</li>
                        <li><strong>Gabinete:</strong> Conselho de Ministros</li>
                        <li><strong>Estatuto:</strong> Representação Paritária de Idiomas</li>
                      </ul>
                    )}
                  </div>

                  {/* Grupo Retrátil 3: LEGISLATIVO */}
                  <div className="border border-rule/50 p-2.5 bg-paper-warm/50">
                    <div className="flex justify-between items-center font-bold text-ink uppercase tracking-wider text-[9px] mb-2">
                      <span>Poder Legislativo</span>
                      <button
                        onClick={() => setHideLegislativo(!hideLegislativo)}
                        className="text-belgian-gold hover:text-belgian-red cursor-pointer transition-colors"
                      >
                        {hideLegislativo ? '[Mostrar]' : '[Ocultar]'}
                      </button>
                    </div>
                    {!hideLegislativo && (
                      <ul className="space-y-1.5 pl-2 border-l border-belgian-gold/40 animate-fade-in text-[11px] text-ink-light">
                        <li><strong>Parlamento Federal:</strong> Bicameral</li>
                        <li><strong>Câmara Superior:</strong> Senado Belga</li>
                        <li><strong>Câmara Inferior:</strong> Câmara de Representantes</li>
                      </ul>
                    )}
                  </div>

                  {/* Grupo Retrátil 4: JUDICIÁRIO */}
                  <div className="border border-rule/50 p-2.5 bg-paper-warm/50">
                    <div className="flex justify-between items-center font-bold text-ink uppercase tracking-wider text-[9px] mb-2">
                      <span>Poder Judiciário</span>
                      <button
                        onClick={() => setHideJudiciario(!hideJudiciario)}
                        className="text-belgian-gold hover:text-belgian-red cursor-pointer transition-colors"
                      >
                        {hideJudiciario ? '[Mostrar]' : '[Ocultar]'}
                      </button>
                    </div>
                    {!hideJudiciario && (
                      <ul className="space-y-1.5 pl-2 border-l border-belgian-gold/40 animate-fade-in text-[11px] text-ink-light">
                        <li><strong>Instância Máxima:</strong> Corte de Cassação</li>
                        <li><strong>Controle de Lei:</strong> Tribunal Constitucional</li>
                        <li><strong>Garantia:</strong> Independência de Magistratura</li>
                      </ul>
                    )}
                  </div>

                </div>

                {/* Box de Dialética Filosófica */}
                <div className="bg-card-bg p-7 rounded-none shadow-editorial space-y-5">
                  <span className="text-[10px] font-semibold text-belgian-red uppercase tracking-[0.2em] block">Consociativismo</span>
                  <h3 className="font-serif text-lg font-black text-ink tracking-tight flex items-center gap-2">
                    <Brain className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
                    O Compromisso como Imperativo Ético
                  </h3>
                  <p className="text-[13px] text-ink-muted leading-relaxed">
                    A filosofia política belga apoia-se no pragmatismo consociativo. Diferente do modelo jacobino de soberania majoritária, a Bélgica estabelece salvaguardas constitucionais onde minorias linguísticas detêm poder de veto recíproco nas tomadas de decisões do parlamento federal.
                  </p>
                  <div className="bg-paper p-5 rounded-none relative">
                    <span className="absolute top-2 right-4 text-4xl font-serif text-rule select-none">"</span>
                    <p className="text-[13px] text-ink-light italic leading-relaxed font-serif pl-1">
                      "O verdadeiro compromisso não é uma capitulação covarde de convicções; é a arquitetura engenhosa de encontrar uma terceira via onde a integridade das partes é salvaguardada."
                    </p>
                    <span className="text-[9px] font-semibold text-belgian-gold block text-right mt-3 uppercase tracking-wider">
                      — Perspectiva do Consociativismo Moderno
                    </span>
                  </div>
                </div>

              </aside>

            </div>

            {/* Linha do Tempo */}
            <div className="space-y-7 pt-8 border-t border-rule">
              <div className="text-center md:text-left space-y-1">
                <span className="text-[10px] font-semibold text-belgian-gold uppercase tracking-[0.2em] block">Historiografia Crítica</span>
                <h3 className="font-serif text-2xl font-black text-ink tracking-tight">Linha do Tempo e Marcos Históricos</h3>
                <p className="text-[13px] text-ink-muted">Selecione os marcos cronológicos para abrir detalhes analíticos.</p>
              </div>

              <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
                {TIMELINE.map((t) => (
                  <button
                    key={t.year}
                    onClick={() => setSelectedTimelineYear(t.year)}
                    className={`px-4 py-2.5 rounded-none text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${selectedTimelineYear === t.year
                      ? 'bg-belgian-red text-white font-bold shadow-md scale-105'
                      : 'bg-card-bg text-ink-light shadow-editorial hover:shadow-editorial-hover hover:text-ink'
                      }`}
                    aria-label={`Visualizar marco histórico de ${t.year}`}
                    aria-pressed={selectedTimelineYear === t.year}
                  >
                    <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t.year}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-card-bg p-7 rounded-none shadow-editorial animate-fade-in">

                <div className="md:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-3xl font-serif font-black text-belgian-red border-b-2 border-belgian-red pb-0.5">
                      {activeTimelineItem.year}
                    </span>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-ink uppercase tracking-wide leading-tight">
                        {activeTimelineItem.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-belgian-gold uppercase tracking-wider block">
                        {activeTimelineItem.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-[14px] text-ink-light leading-relaxed">
                    {activeTimelineItem.description}
                  </p>

                  <div className="bg-paper p-5 rounded-none space-y-2">
                    <span className="text-[9px] font-semibold text-ink-muted uppercase tracking-wider block">Registros Jornalísticos & Documentos Acadêmicos</span>
                    <p className="text-[13px] text-ink-light leading-relaxed">
                      {activeTimelineItem.details}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-4 bg-paper p-5 rounded-none flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[9px] font-semibold text-belgian-gold uppercase tracking-wider block flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 animate-pulse" aria-hidden="true" />
                      Análise Sociológica
                    </span>
                    <p className="text-[13px] text-ink-light italic leading-relaxed font-serif">
                      "{activeTimelineItem.philosophicalInsight}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-rule text-right mt-4">
                    <span className="text-[9px] font-semibold text-ink-muted block uppercase">Autor do Exame Cognitivo</span>
                    <span className="text-[10px] font-semibold text-ink">{activeTimelineItem.philosopher}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* --- TEMA 2: GEOGRAFIA & MEIO AMBIENTE --- */}
        {section.id === 'geografia-meio-ambiente' && (
          <div className="space-y-14 animate-fade-in">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6 text-ink-light text-[15px] leading-[1.8]">
                <h2 className="font-serif text-2xl font-black text-ink uppercase tracking-tight pb-3 border-b border-rule flex items-center gap-2">
                  <span className="text-belgian-red font-serif">II.</span> O Mosaico Bioclimático e Territorial Belga
                </h2>

                <p>
                  Apesar de sua dimensão reduzida (cerca de 30.689 km²), a <strong className="text-ink font-medium">Bélgica</strong> possui três zonas geográficas e topográficas distintas que dividem de forma clara o perfil biológico e socioeconômico do país: o litoral baixo em Flandres, a planície central e o planalto florestal elevado na Valônia.
                </p>

                {/* FIGURA COM ESPAÇO PARA IMAGEM */}
                <figure className="my-6 p-1.5 bg-paper-cream shadow-editorial rounded-none border border-rule">
                  <img
                    src="/src/assets/images/geografia belgica.jpg"
                    alt="Natureza nas Ardenas belgas"
                    className="w-full h-56 object-cover rounded-none"
                  />
                  <figcaption className="text-[11px] text-ink-muted mt-2 px-1 font-mono tracking-wide leading-relaxed">
                    Figura 2.1: Bosques e topografia acidentada nas Ardenas, Valônia. Ecossistema florestal chave e de grande biodiversidade vegetal e animal na Europa Ocidental.
                  </figcaption>
                </figure>

                <p>
                  A zona setentrional de <strong className="text-belgian-red font-semibold">Flandres</strong> é marcada por planícies arenosas suaves e solos agrícolas férteis, parcialmente compostos por <strong className="text-ink font-medium">pôlderes</strong> — porções de terra recuperadas do Mar do Norte através de diques artificiais e canais de drenagem. A influência marítima amortece as temperaturas, trazendo verões frescos e alta umidade.
                </p>
                <p>
                  No extremo sul, a região da <strong className="text-ink font-semibold">Valônia</strong> abriga o antigo maciço geológico das <strong className="text-ink font-medium">Ardenas</strong>, coberto por colinas acidentadas, cavernas calcárias e densas florestas de carvalhos e pinhais silvestres. Nessa área, o clima assume características mais continentais, com invernos frios propensos a nevascas intensas, abrigando a maior diversidade de fauna do país, como javalis, esquilos vermelhos e cervos selvagens.
                </p>
              </div>

              <div className="lg:col-span-5 bg-card-bg p-7 rounded-none shadow-editorial space-y-5">
                <span className="text-[10px] font-semibold text-belgian-red uppercase tracking-[0.2em] block">Avaliação Ecológica</span>
                <h3 className="font-serif text-lg font-black text-ink tracking-tight flex items-center gap-2">
                  <Compass className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
                  Pressão Antrópica e Resiliência
                </h3>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  Sendo um dos países mais densamente industrializados da Europa ocidental, a Bélgica encara desafios ambientais decorrentes do tráfego urbano pesado (poluição por óxido de nitrogênio em Bruxelas) e da contaminação do lençol freático devido ao uso de fertilizantes químicos na pecuária flamenga. No entanto, projetos pioneiros de corredores ecológicos nas Ardenas ajudam a conservar espécies endêmicas da fauna europeia.
                </p>
              </div>
            </div>

            {/* Cartografia Interativa */}
            <div className="space-y-5 pt-8 border-t border-rule">
              <div className="text-center md:text-left">
                <span className="text-[10px] font-semibold text-belgian-gold uppercase tracking-[0.2em] block">Pesquisa Geoespacial</span>
                <h3 className="font-serif text-2xl font-black text-ink tracking-tight">Estudo Cartográfico e de Biomas</h3>
                <p className="text-[13px] text-ink-muted">Explore a divisão política e as especificidades físico-ambientais de cada região belga no visualizador.</p>
              </div>
              <InteractiveMap />
            </div>

          </div>
        )}

        {/* --- TEMA 3: CULTURA & SOCIEDADE --- */}
        {section.id === 'cultura-sociedade' && (
          <div className="space-y-14 animate-fade-in">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6 text-ink-light text-[15px] leading-[1.8]">
                <h2 className="font-serif text-2xl font-black text-ink uppercase tracking-tight pb-3 border-b border-rule flex items-center gap-2">
                  <span className="text-belgian-red font-serif">III.</span> O Esplendor das Artes Visual e da Gastronomia
                </h2>

                <p>
                  A <strong className="text-ink font-medium">Bélgica</strong> é uma ponte cultural entre o mundo germânico e o latim. Essa interseção gerou uma identidade singular baseada na tolerância mútua, no apreço pela ironia do absurdo e na busca obstinada pela excelência artística e culinária.
                </p>

                {/* FIGURA COM ESPAÇO PARA IMAGEM */}
                <figure className="my-6 p-1.5 bg-paper-cream shadow-editorial rounded-none border border-rule">
                  <img
                    src="/src/assets/images/chocolate belgagrupo 1.jpg"
                    alt="Chocolates belgas refinados"
                    className="w-full h-56 object-cover rounded-none"
                  />
                  <figcaption className="text-[11px] text-ink-muted mt-2 px-1 font-mono tracking-wide leading-relaxed">
                    Figura 3.1: Gastronomia tradicional belga. O rigor técnico no desenvolvimento do praline de cacau e waffles representa uma herança de prestígio global.
                  </figcaption>
                </figure>

                <p>
                  No âmbito estético, Bruxelas é mundialmente reconhecida como a <strong className="text-belgian-red font-semibold">capital das Histórias em Quadrinhos (Banda Desenhada)</strong>. Mestres como Hergé criaram a técnica da "Linha Clara" em Tintim, enquanto Peyo deitou raízes do folclore na icônica floresta azul dos Smurfs. Essa imaginação visual caminha junto ao surrealismo pictórico de <strong className="text-ink font-medium">René Magritte</strong>, pintor que desafiou a rigidez da semiótica racional clássica com suas composições lúdicas e filosóficas.
                </p>
                <p>
                  Na culinária, a sabedoria belga une a exatidão das reações físicas de caramelização (na receita secular dos waffles de Liège) à sofisticação técnica de patentes de cacau puro de Bruxelas. O chocolate belga conquistou fama internacional graças a leis rigorosas que proíbem o acréscimo de gorduras vegetais secundárias na manteiga de cacau e à icônica invenção do <strong className="text-ink font-medium">Praline por Jean Neuhaus em 1912</strong>.
                </p>
              </div>

              {/* Simulador de Áudio-Guia */}
              <div className="lg:col-span-5 bg-card-bg p-7 rounded-none shadow-editorial space-y-5">
                <div className="border-b border-rule pb-4">
                  <span className="text-[10px] font-semibold text-belgian-red uppercase tracking-[0.2em] block">Audioguia Oficial</span>
                  <h3 className="font-serif text-lg font-black text-ink tracking-tight flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
                    Áudio-Guia: Museu de Belas Artes
                  </h3>
                  <p className="text-[10px] text-ink-muted mt-0.5">Ouça a análise sobre a semiótica surrealista de René Magritte.</p>
                </div>

                <div className="bg-paper rounded-none p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                      className={`w-12 h-12 rounded-none flex items-center justify-center cursor-pointer transition-all duration-300 outline-none ${isAudioPlaying
                        ? 'bg-belgian-red text-white shadow-md'
                        : 'bg-belgian-gold hover:bg-[#a07a0a] text-white shadow-md'
                        }`}
                      aria-label={isAudioPlaying ? 'Pausar áudio-guia' : 'Tocar áudio-guia'}
                    >
                      {isAudioPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 pl-0.5" />}
                    </button>
                    <div>
                      <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Semiótica de René Magritte</h4>
                      <p className="text-[10px] text-ink-muted leading-none mt-1">Exposição: A Traição das Imagens (1929)</p>
                    </div>
                  </div>

                  {/* Onda Visual */}
                  <div className="flex justify-center items-center gap-1 h-8 bg-card-bg rounded-none px-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((bar) => {
                      if (isAudioPlaying) {
                        const randomHeights = ['h-2', 'h-4', 'h-6', 'h-3', 'h-5', 'h-7'];
                        return (
                          <div
                            key={bar}
                            className={`w-1 rounded-none bg-belgian-gold opacity-60 transition-all duration-300 ${randomHeights[(bar + audioTime) % randomHeights.length]!}`}
                            aria-hidden="true"
                          ></div>
                        );
                      }
                      return (
                        <div
                          key={bar}
                          className="w-1 rounded-none bg-belgian-gold opacity-60 transition-all duration-300 h-1.5"
                          aria-hidden="true"
                        ></div>
                      );
                    })}
                  </div>

                  {/* Barra de Progresso */}
                  <div className="space-y-1.5">
                    <div className="w-full bg-rule rounded-none h-1">
                      <div
                        className="bg-belgian-red h-1 rounded-none transition-all duration-300"
                        style={{ width: `${audioProgress}%` }}
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div className="flex justify-between text-[9px] font-semibold text-ink-muted">
                      <span>{formatAudioTime(audioTime)}</span>
                      <span>02:18</span>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-ink-muted italic leading-relaxed">
                  *Este simulador reproduz um trecho do roteiro analítico sobre como René Magritte usou o traço clássico para criar o estranhamento cognitivo nas artes plásticas.*
                </p>
              </div>
            </div>

            {/* CARDS DE CULTURA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-rule">

              {/* Receita de Waffle */}
              <div className="bg-card-bg rounded-none p-7 space-y-6 shadow-editorial">
                <div className="border-b border-rule pb-4 flex items-center justify-between">
                  <h3 className="font-serif text-xl font-black text-ink flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
                    Gastronomia: Waffle de Liège
                  </h3>
                  <span className="text-[9px] font-semibold bg-accent-gold-bg text-belgian-gold px-2 py-0.5 rounded-none uppercase">
                    Receita Tradicional
                  </span>
                </div>

                <p className="text-[13px] text-ink-muted leading-relaxed">
                  Estude e prepare o Waffle de Liège legítimo. Marque os ingredientes que você possui e navegue pelo processo.
                </p>

                {/* Ingredientes */}
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold text-ink-muted uppercase tracking-wider block mb-2">Ingredientes Requeridos</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CULTURAL_ITEMS[1]!.extra?.ingredients?.map((ing) => {
                      const isChecked = !!checkedIngredients[ing];
                      return (
                        <button
                          key={ing}
                          onClick={() => handleToggleIngredient(ing)}
                          className={`flex items-start text-left gap-2 p-2.5 rounded-none text-xs transition-all duration-200 cursor-pointer outline-none ${isChecked
                            ? 'bg-[#2d8a4e]/8 text-[#2d8a4e] font-semibold border-none'
                            : 'bg-paper text-ink-light hover:bg-paper-cream border-none'
                            }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isChecked
                              ? <CheckSquare className="w-3.5 h-3.5 text-[#2d8a4e]" />
                              : <Square className="w-3.5 h-3.5 text-ink-faint" />
                            }
                          </div>
                          <span>{ing}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Passos da Receita */}
                <div className="bg-paper rounded-none p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-semibold text-ink-muted uppercase tracking-wider block">
                      Etapa {activeRecipeStep + 1} de {CULTURAL_ITEMS[1]!.extra?.steps?.length}
                    </span>
                    <div className="flex gap-1.5">
                      <button
                        disabled={activeRecipeStep === 0}
                        onClick={() => setActiveRecipeStep(prev => Math.max(0, prev - 1))}
                        className="p-1 rounded-none bg-card-bg hover:bg-paper-cream text-ink-light disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer outline-none shadow-sm"
                        aria-label="Passo anterior"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        disabled={activeRecipeStep === (CULTURAL_ITEMS[1]!.extra?.steps?.length || 1) - 1}
                        onClick={() => setActiveRecipeStep(prev => Math.min((CULTURAL_ITEMS[1]!.extra?.steps?.length || 1) - 1, prev + 1))}
                        className="p-1 rounded-none bg-card-bg hover:bg-paper-cream text-ink-light disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer outline-none shadow-sm"
                        aria-label="Próximo passo"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-card-bg text-[13px] text-ink-light leading-relaxed min-h-[90px] flex items-center shadow-sm rounded-none border border-rule">
                    {CULTURAL_ITEMS[1]!.extra?.steps?.[activeRecipeStep]}
                  </div>

                  <div className="w-full bg-rule rounded-none h-1">
                    <div
                      className="bg-belgian-gold h-1 rounded-none transition-all duration-300"
                      style={{ width: `${((activeRecipeStep + 1) / (CULTURAL_ITEMS[1]!.extra?.steps?.length || 1)) * 100}%` }}
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>
              </div>

              {/* Expressões Linguísticas */}
              <div className="bg-card-bg rounded-none p-7 space-y-6 shadow-editorial">
                <div className="border-b border-rule pb-4 flex items-center justify-between">
                  <h3 className="font-serif text-xl font-black text-ink flex items-center gap-2">
                    <Languages className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
                    Expressões Linguísticas Belgas
                  </h3>
                  <span className="text-[9px] font-semibold bg-accent-gold-bg text-belgian-gold px-2 py-0.5 rounded-none uppercase">
                    Plurilinguismo
                  </span>
                </div>

                <p className="text-[13px] text-ink-muted leading-relaxed">
                  A mistura de francês e neerlandês gerou regionalismos fascinantes. <strong className="text-ink">Clique nos cards abaixo</strong> para decodificar cada expressão.
                </p>

                <div className="space-y-3">
                  {CULTURAL_ITEMS[2]!.extra?.expressions?.map((expr, idx) => {
                    const isFlipped = flippedExpressionIndex === idx;
                    return (
                      <button
                        key={expr.phrase}
                        onClick={() => setFlippedExpressionIndex(isFlipped ? null : idx)}
                        className={`w-full text-left p-4 rounded-none transition-all duration-300 flex flex-col gap-2 cursor-pointer outline-none ${isFlipped
                          ? 'bg-accent-gold-bg border-l-4 border-belgian-gold'
                          : 'bg-paper hover:bg-paper-cream'
                          }`}
                        aria-label={`Expressão: ${expr.phrase}. Clique para ver o significado.`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="font-serif text-base font-black uppercase tracking-wide text-ink">
                            {expr.phrase}
                          </span>
                          <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-none uppercase ${isFlipped ? 'bg-[#B8860B]/15 text-belgian-gold' : 'bg-rule text-ink-muted'}`}>
                            {isFlipped ? 'Esconder' : 'Decodificar'}
                          </span>
                        </div>

                        {isFlipped && (
                          <div className="text-[13px] text-ink-light leading-relaxed pt-2 border-t border-[#B8860B]/20 animate-fade-in">
                            <strong className="text-belgian-gold font-bold uppercase tracking-wider text-[9px] block mb-1">Significado:</strong>
                            {expr.meaning}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* --- TEMA 4: ECONOMIA & MATEMÁTICA --- */}
        {section.id === 'economia-matematica' && (
          <div className="space-y-14 animate-fade-in">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6 text-ink-light text-[15px] leading-[1.8]">
                <h2 className="font-serif text-2xl font-black text-ink uppercase tracking-tight pb-3 border-b border-rule flex items-center gap-2">
                  <span className="text-belgian-red font-serif">IV.</span> A Força Operacional das Exportações Belgas
                </h2>

                <p>
                  A <strong className="text-ink font-medium">Bélgica</strong> possui uma das economias mais abertas e orientadas à exportação do mundo, tirando proveito máximo de sua posição geopolítica central na Europa ocidental. Com infraestrutura logística impecável, o reino funciona como o grande portal físico de escoamento e abastecimento da Eurozona.
                </p>

                {/* FIGURA COM ESPAÇO PARA IMAGEM */}
                <figure className="my-6 p-1.5 bg-paper-cream shadow-editorial rounded-none border border-rule">
                  <img
                    src="/src/assets/images/economia 2.jpg"
                    alt="Centro de Bruxelas e Portos"
                    className="w-full h-56 object-cover rounded-none"
                  />
                  <figcaption className="text-[11px] text-ink-muted mt-2 px-1 font-mono tracking-wide leading-relaxed">
                    Figura 4.1: Vista operacional e sedes corporativas. O centro econômico do país atua em sinergia direta com as grandes rotas de escoamento marítimo de Antuérpia.
                  </figcaption>
                </figure>

                <p>
                  O <strong className="text-belgian-red font-semibold">Porto de Antuérpia-Bruges</strong>, segundo maior complexo portuário marítimo da Europa, é o grande motor logístico belga. Ele processa centenas de milhões de toneladas de carga anualmente, liderando mundialmente a lapidação de diamantes e o refino de produtos químicos e farmacêuticos.
                </p>
                <p>
                  O país exporta cerca de <strong className="text-ink font-medium">80% do seu PIB industrial</strong>. Isso exige um rigoroso cálculo de controle das importações de recursos fósseis brutos e matérias-primas energéticas secundárias, visando a preservar o superávit na balança comercial e a blindar a estabilidade econômica nacional.
                </p>
              </div>

              <div className="lg:col-span-5 bg-card-bg p-7 rounded-none shadow-editorial space-y-5">
                <span className="text-[10px] font-semibold text-belgian-red uppercase tracking-[0.2em] block">Sistema Financeiro Mundial</span>
                <h3 className="font-serif text-lg font-black text-ink tracking-tight flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
                  O Hub de Antuérpia e o Diamante
                </h3>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  Aproximadamente 84% de todos os diamantes brutos e 50% de todos os diamantes lapidados do planeta passam pelo distrito diamantífero de Antuérpia (Diamond Square Mile). Essa concentração une a modelagem matemática exata de lapidação óptica às transações de alto montante financeiro internacional.
                </p>
              </div>
            </div>

            {/* Gráficos Econômicos */}
            <div className="space-y-5 pt-8 border-t border-rule">
              <div className="text-center md:text-left">
                <span className="text-[10px] font-semibold text-belgian-gold uppercase tracking-[0.2em] block">Conjuntura Matemática</span>
                <h3 className="font-serif text-2xl font-black text-ink tracking-tight">PIB e Simulação de Balança Comercial</h3>
                <p className="text-[13px] text-ink-muted">Avalie os impactos de variações cambiais ajustando exportações e importações no painel interativo.</p>
              </div>
              <EconomicChart />
            </div>

          </div>
        )}

        {/* --- TEMA 5: ESPORTE & ESTILO DE VIDA --- */}
        {section.id === 'esporte-estilo-vida' && (
          <div className="space-y-14 animate-fade-in">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6 text-ink-light text-[15px] leading-[1.8]">
                <h2 className="font-serif text-2xl font-black text-ink uppercase tracking-tight pb-3 border-b border-rule flex items-center gap-2">
                  <span className="text-belgian-red font-serif">V.</span> A Paixão pelas Clássicas de Estrada e os Diabos Vermelhos
                </h2>

                <p>
                  Na <strong className="text-ink font-medium">Bélgica</strong>, o esporte não é apenas entretenimento; é um elemento constituinte da identidade e um catalisador de coesão social. A nação venera duas modalidades que despertam paixões intensas: o futebol e o ciclismo de estrada.
                </p>

                {/* FIGURA COM ESPAÇO PARA IMAGEM */}
                <figure className="my-6 p-1.5 bg-paper-cream shadow-editorial rounded-none border border-rule">
                  <img
                    src="/src/assets/images/Ciclismogrupo 1.jpg"
                    alt="Ciclista em paralelepípedos belgas"
                    className="w-full h-56 object-cover rounded-none"
                  />
                  <figcaption className="text-[11px] text-ink-muted mt-2 px-1 font-mono tracking-wide leading-relaxed">
                    Figura 5.1: Ciclista em treinamento de alta performance no circuito clássico flamengo de pavés (estradas de paralelepípedos tradicionais).
                  </figcaption>
                </figure>

                <p>
                  O ciclismo belga confunde-se com a própria história da modalidade. As "Clássicas da Primavera", como o Tour de Flandres e a Liège-Bastogne-Liège, reúnem milhões de pessoas nas estradas frias e subidas em paralelepípedos (os temidos <strong className="text-belgian-red font-semibold">pavés</strong>). O país deu à luz <strong className="text-ink font-medium">Eddy Merckx</strong>, conhecido como "O Canibal", considerado unanimemente o maior ciclista de todos os tempos.
                </p>
                <p>
                  No futebol, a seleção nacional, carinhosamente chamada de <strong className="text-ink font-semibold">Diabos Vermelhos (Red Devils)</strong>, é reverenciada mundialmente pelas suas táticas avançadas e revelação contínua de cérebros criativos. A Geração de Ouro de 2018 conquistou o terceiro lugar histórico na Rússia com exibições primorosas de contra-ataque veloz.
                </p>
              </div>

              <div className="lg:col-span-5 bg-card-bg p-7 rounded-none shadow-editorial space-y-5">
                <span className="text-[10px] font-semibold text-belgian-red uppercase tracking-[0.2em] block">Estilo de Vida Saudável</span>
                <h3 className="font-serif text-lg font-black text-ink tracking-tight flex items-center gap-2">
                  <Users className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
                  Ciclismo Clássico e Longevidade
                </h3>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  A imensa cultura do ciclismo de transporte diário e de lazer na Bélgica contribui de forma contínua para baixos índices de sedentarismo urbano. Estudos de biologia humana mostram que a prática regular de ciclismo atua diretamente na prevenção de disfunções cardiovasculares, estimulando a neuroplasticidade e aumentando a expectativa de vida média belga para 82 anos.
                </p>
              </div>
            </div>

            {/* Campanhas Esportivas */}
            <div className="space-y-7 pt-8 border-t border-rule">
              <div className="text-center md:text-left space-y-1">
                <span className="text-[10px] font-semibold text-belgian-gold uppercase tracking-[0.2em] block">Registros Esportivos</span>
                <h3 className="font-serif text-2xl font-black text-ink tracking-tight">Salão de Glórias dos Red Devils e Ciclismo</h3>
                <p className="text-[13px] text-ink-muted">Clique nos marcos esportivos para examinar táticas, escalações e conquistas.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                {/* Seletores */}
                <div className="lg:col-span-4 space-y-2.5 flex flex-col justify-start">
                  {SPORTS_CAMPAIGNS.map((camp, idx) => (
                    <button
                      key={`${camp.year}-${camp.tournament}`}
                      onClick={() => setSelectedCampaignIndex(idx)}
                      className={`w-full text-left p-4 rounded-none text-xs transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer outline-none ${selectedCampaignIndex === idx
                        ? 'bg-belgian-red text-white shadow-md font-bold scale-[1.02]'
                        : 'bg-card-bg text-ink-light shadow-editorial hover:shadow-editorial-hover'
                        }`}
                      aria-label={`Campanha de ${camp.year}`}
                    >
                      <div>
                        <span className="font-serif text-base block leading-none mb-1">{camp.year}</span>
                        <span className={`text-[9px] uppercase tracking-wider block ${selectedCampaignIndex === idx ? 'text-white/70' : 'text-ink-muted'}`}>
                          {camp.tournament === 'World Cup' ? 'Copa do Mundo' : camp.tournament === 'Euro' ? 'Eurocopa' : 'Olimpíadas'}
                        </span>
                      </div>
                      <Trophy className={`w-4 h-4 shrink-0 ${selectedCampaignIndex === idx ? 'text-white' : 'text-ink-faint'}`} aria-hidden="true" />
                    </button>
                  ))}
                </div>

                {/* Detalhes da Campanha */}
                <div className="lg:col-span-8 bg-card-bg rounded-none p-7 flex flex-col justify-between shadow-editorial relative overflow-hidden animate-fade-in">

                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="font-serif text-3xl font-black text-belgian-red leading-none">
                          {activeCampaign.year}
                        </span>
                        <div>
                          <span className="text-[10px] font-semibold text-belgian-gold uppercase tracking-wider block">
                            {activeCampaign.tournament === 'World Cup' ? 'Copa do Mundo FIFA' : activeCampaign.tournament === 'Euro' ? 'Eurocopa' : 'Ciclismo / Olimpíadas'}
                          </span>
                          <h4 className="font-sans text-sm font-bold text-ink uppercase tracking-wide">
                            Resultado Final: {activeCampaign.finalResult}
                          </h4>
                        </div>
                      </div>

                      <div className="bg-paper px-3.5 py-1.5 rounded-none text-xs font-bold text-belgian-gold flex items-center gap-1.5 shrink-0">
                        <Award className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{activeCampaign.opponent}</span>
                      </div>
                    </div>

                    <p className="text-[14px] text-ink-light leading-relaxed">
                      {activeCampaign.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                      <div className="bg-paper rounded-none p-4 space-y-2">
                        <span className="text-[9px] font-semibold text-ink-muted uppercase tracking-wider block flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-belgian-gold" aria-hidden="true" />
                          Destaques do Elenco
                        </span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {activeCampaign.stars.map((star) => (
                            <span key={star} className="text-[10px] bg-card-bg text-ink-light font-semibold px-2.5 py-0.5 rounded-none shadow-sm border border-rule">
                              {star}
                            </span>
                          ))}
                        </div>
                        <div className="pt-2 text-[10px] text-ink-muted">
                          <strong className="text-ink-light">Comandante:</strong> {activeCampaign.manager}
                        </div>
                      </div>

                      <div className="bg-paper rounded-none p-4 space-y-2 flex flex-col justify-between">
                        <div>
                          <span className="text-[9px] font-semibold text-belgian-red uppercase tracking-wider block flex items-center gap-1.5">
                            <Dribbble className="w-3.5 h-3.5" aria-hidden="true" />
                            Arquitetura Tática
                          </span>
                          <p className="text-[12px] text-ink-light leading-relaxed mt-1.5">
                            {activeCampaign.tactics}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        )}

      </div>

      {/* BOTÃO VOLTAR INFERIOR */}
      <div className="pt-10 border-t border-rule flex justify-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2.5 bg-belgian-red hover:bg-[#a50d24] text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-8 rounded-none shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          aria-label="Voltar para a capa principal"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Voltar à Capa Principal</span>
        </button>
      </div>

    </div>
  );
}

// Estilo de bandeira/isolamento de inversão do modo escuro
const estiloBandeira: React.CSSProperties = {
  colorScheme: 'only light',
  forcedColorAdjust: 'none',
};