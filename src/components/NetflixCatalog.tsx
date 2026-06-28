import React, { useState, useEffect } from 'react';
import { CATALOG_DATA, SubTopic } from './catalogData';
import { 
  Search, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle, 
  Map, 
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NetflixCatalogProps {
  onNavigateToFullSection?: (sectionId: string) => void;
}

export default function NetflixCatalog({}: NetflixCatalogProps) {
  // --- NAVIGATION STATE (0: Visão Geral, 1: Enciclopédia, 2: Geomapa) ---
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedTopic, setSelectedTopic] = useState<SubTopic | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // --- GENERAL APP STATE ---
  const [isAmbientSoundOn, setIsAmbientSoundOn] = useState<boolean>(true);
  const [textScale, setTextScale] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // --- PERSISTENCE: MY FAVORITES ---
  const [myList, setMyList] = useState<string[]>(() => {
    const stored = localStorage.getItem('netflix_my_list');
    return stored ? JSON.parse(stored) : [];
  });

  // --- GEOMAP STATE ---
  const [selectedRegionId, setSelectedRegionId] = useState<string>('flanders');

  // --- AUTO-SAVE STORAGE SYNCERS ---
  useEffect(() => {
    localStorage.setItem('netflix_my_list', JSON.stringify(myList));
  }, [myList]);

  // --- SOUND EFFECTS SYNTHESIZER ---
  const playChimeSound = (success: boolean) => {
    if (!isAmbientSoundOn) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return;
      const ctx = new AudioCtxClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (success) {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } else {
        osc.frequency.setValueAtTime(220.00, ctx.currentTime); // A3
        osc.frequency.setValueAtTime(180.00, ctx.currentTime + 0.15); 
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch (e) {
      console.warn('Audio feedback blocked by browser settings.', e);
    }
  };

  // --- TOPIC MANIPULATORS ---
  const handleOpenTopic = (topic: SubTopic) => {
    setSelectedTopic(topic);
    setTimeout(() => {
      const readerHeader = document.getElementById('academic-reader-top');
      if (readerHeader) {
        readerHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const toggleFavorite = (topicId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setMyList(prev => 
      prev.includes(topicId) ? prev.filter(id => id !== topicId) : [...prev, topicId]
    );
  };

  // --- FILTERED CAPITULOS LIST ---
  const filteredCatalog = CATALOG_DATA.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          topic.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.teaser.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    if (selectedCategory === 'todos') return true;
    if (selectedCategory === 'salvos') return myList.includes(topic.id);
    return topic.category === selectedCategory;
  });

  // --- REGION DATA FOR GEOMAPA ---
  const REGION_DB: Record<string, {
    name: string;
    flag: string;
    climate: string;
    terrain: string;
    resources: string[];
    challenges: string[];
    ecosystem: string;
    fauna: string;
    chapters: string[];
  }> = {
    flanders: {
      name: "Região Flamenga (Flandres)",
      flag: "🦁 Amarela & Preta",
      climate: "Temperado Oceânico (Mar do Norte frio e ventoso)",
      terrain: "Planícies litorâneas planas e dunas arenosas recuperadas",
      resources: ["Solos fluviais ricos", "Infraestrutura portuária", "Areia de sílica"],
      challenges: ["Salinização dos solos", "Subida do nível do mar", "Pressão portuária"],
      ecosystem: "Estuários fluviais, praias marinhas e dunas costeiras",
      fauna: "Garça-real, gaivotas, focas no litoral, patos selvagens",
      chapters: ["dynasty-paves", "merckxismo", "polders-conquest", "diamond-cutting", "antwerp-port"]
    },
    wallonia: {
      name: "Região Valona (Valônia)",
      flag: "🐓 Vermelha & Amarela",
      climate: "Semicontinental (invernos frios e verões mais úmidos)",
      terrain: "Planaltos acidentados, vales rochosos xistosos e colinas",
      resources: ["Águas minerais termais", "Silvicultura de carvalhos", "Calcário e argila"],
      challenges: ["Desindustrialização histórica", "Fragmentação florestal das Ardenas"],
      ecosystem: "Florestas decíduas e mistas de clima temperado",
      fauna: "Cervos majestosos, javalis selvagens, raposas, gatos-selvagens",
      chapters: ["ardennes-secret", "industrial-ecology", "boar-return", "cycling-longevity"]
    },
    brussels: {
      name: "Região de Bruxelas-Capital",
      flag: "⚜️ Azul & Íris Amarela",
      climate: "Microclima urbano modificado (ilha de calor proeminente)",
      terrain: "Vale fluvial do rio Senne e colinas suaves urbanizadas",
      resources: ["Capital humano global", "Sede regulatória", "Turismo executivo"],
      challenges: ["Poluição atmosférica", "Impermeabilização do solo", "Calor extremo"],
      ecosystem: "Catedral urbana e floresta periurbana temperada",
      fauna: "Esquilos vermelhos, morcegos florestais, falcões peregrinos nos prédios",
      chapters: ["brussels-heat-island", "brussels-eurozone", "biotech-chemistry", "golden-generation"]
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col py-4 px-3 sm:px-6 animate-fade-in text-ink selection:bg-belgian-red/15 selection:text-belgian-red pb-24 md:pb-12">
      
      {/* Portal Header Area - Sharp rectangular style */}
      <div className="bg-card-bg rounded-none p-5 sm:p-6 border border-rule flex flex-col md:flex-row items-center justify-between gap-6 shadow-editorial mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-belgian-red/5 rounded-none blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-belgian-gold/5 rounded-none blur-2xl"></div>
        
        <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-none bg-gradient-to-br from-belgian-red to-belgian-gold flex items-center justify-center shadow-md text-white shrink-0">
            <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-black uppercase text-ink tracking-tight flex flex-wrap items-center gap-2">
              <span>Clarim Real</span>
              <span className="text-belgian-red font-mono text-[10px] font-bold bg-accent-red-bg px-2 py-0.5 rounded-none border border-belgian-red/20">PORTAL</span>
            </h2>
            <p className="text-[11px] sm:text-xs text-ink-muted font-mono tracking-wide mt-1">Módulo Interativo de Informações e Arquivos Oficiais do Reino da Bélgica</p>
          </div>
        </div>

        {/* Action Controls in Header */}
        <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto border-t md:border-t-0 border-rule pt-3 md:pt-0 relative z-10">
          <div className="flex items-center gap-1 text-[10px] font-mono text-ink-muted">
            <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse"></span>
            <span>Portal Conectado</span>
          </div>
          
          {/* Sound Action Switcher */}
          <button 
            onClick={() => {
              setIsAmbientSoundOn(!isAmbientSoundOn);
              playChimeSound(!isAmbientSoundOn);
            }}
            className={`p-2 rounded-none border flex items-center gap-1.5 transition-all text-xs font-mono font-bold cursor-pointer outline-none shadow-sm ${
              isAmbientSoundOn 
                ? 'bg-accent-gold-bg border-belgian-gold/30 text-belgian-gold' 
                : 'bg-paper border-rule text-ink-muted hover:text-ink'
            }`}
            title="Efeitos Sonoros do Portal"
          >
            {isAmbientSoundOn ? <Volume2 className="w-4 h-4 text-belgian-gold" /> : <VolumeX className="w-4 h-4 text-ink-faint" />}
            <span>{isAmbientSoundOn ? 'Sons On' : 'Mudo'}</span>
          </button>
        </div>
      </div>

      {/* TAB NAVIGATION */}
      {!selectedTopic && (
        <div className="fixed bottom-0 inset-x-0 md:relative md:bottom-auto bg-paper/95 md:bg-card-bg backdrop-blur-md md:backdrop-blur-none border-t md:border border-rule flex items-center justify-around z-50 md:rounded-none h-16 md:h-20 shadow-editorial px-1 sm:px-2 md:px-6 mb-6">
          {[
            { id: 0, label: 'Visão Geral', icon: Shield, desc: 'Dados e Fatos' },
            { id: 1, label: 'Enciclopédia', icon: BookOpen, desc: '15 Capítulos' },
            { id: 2, label: 'Geomapa', icon: Map, desc: 'Regiões e Biomas' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  playChimeSound(true);
                }}
                className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 flex-1 py-1 px-1 sm:px-2 md:py-3 text-ink-muted hover:text-ink cursor-pointer outline-none transition-all group rounded-none"
                style={{ color: isActive ? '#B8860B' : '' }}
              >
                <div className={`p-1.5 md:p-2 rounded-none transition-all ${
                  isActive 
                    ? 'bg-accent-gold-bg text-belgian-gold border border-belgian-gold/20' 
                    : 'bg-transparent text-ink-muted group-hover:text-ink'
                }`}>
                  <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 shrink-0" />
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className={`text-[8px] sm:text-[9px] md:text-xs font-mono font-black uppercase tracking-wider leading-none ${
                    isActive ? 'text-belgian-gold' : 'text-ink-muted group-hover:text-ink'
                  }`}>
                    {tab.label}
                  </span>
                  <span className="hidden md:inline text-[9px] text-ink-faint font-light mt-0.5">
                    {tab.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* CORE VIEWPORT */}
      <div className="flex-1 bg-transparent relative rounded-none min-h-[400px]">
        
        <AnimatePresence mode="wait">
          
          {/* IMMERSIVE READER VIEW */}
          {selectedTopic ? (
            <motion.div 
              key="academic-reader"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
                {/* Back Navigation Bar */}
                <div id="academic-reader-top" className="flex items-center justify-between bg-card-bg p-2.5 rounded-none border border-rule">
                  <button 
                    onClick={() => setSelectedTopic(null)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-ink-muted hover:text-ink cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Voltar</span>
                  </button>
                  <span className="text-[10px] font-mono text-ink-faint uppercase tracking-widest">
                    Lendo Capítulo
                  </span>
                  
                  {/* Text Size Accessibility Controller */}
                  <div className="flex items-center gap-1 bg-paper p-1 rounded-none border border-rule">
                    <button 
                      onClick={() => setTextScale('normal')} 
                      className={`px-1.5 py-0.5 rounded-none text-[10px] font-mono ${textScale === 'normal' ? 'bg-belgian-gold text-white font-black' : 'text-ink-muted'}`}
                      title="Texto Normal"
                    >
                      A
                    </button>
                    <button 
                      onClick={() => setTextScale('large')} 
                      className={`px-1.5 py-0.5 rounded-none text-[10px] font-mono ${textScale === 'large' ? 'bg-belgian-gold text-white font-black' : 'text-ink-muted'}`}
                      title="Texto Grande"
                    >
                      A+
                    </button>
                    <button 
                      onClick={() => setTextScale('xlarge')} 
                      className={`px-1.5 py-0.5 rounded-none text-[10px] font-mono ${textScale === 'xlarge' ? 'bg-belgian-gold text-white font-black' : 'text-ink-muted'}`}
                      title="Texto Extra Grande"
                    >
                      A++
                    </button>
                  </div>
                </div>

                {/* SubTopic Visual Banner - Sharp rounded-none */}
                <div className={`relative h-44 rounded-none overflow-hidden bg-gradient-to-b ${selectedTopic.gradient} p-4 flex flex-col justify-end border border-rule shadow-md`}>
                  <div className="absolute inset-0 bg-black/40 z-0"></div>
                  
                  <div className="relative z-10 flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono font-black uppercase bg-belgian-red/20 text-white border border-white/20 px-2 py-0.5 rounded-none">
                      {selectedTopic.category}
                    </span>
                    <button
                      onClick={() => toggleFavorite(selectedTopic.id)}
                      className="p-1.5 rounded-none bg-paper/85 border border-rule text-ink hover:text-belgian-red"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${myList.includes(selectedTopic.id) ? 'fill-belgian-gold text-belgian-gold' : ''}`} />
                    </button>
                  </div>

                  <h1 className="font-serif text-lg font-black text-white relative z-10 uppercase tracking-tight">
                    {selectedTopic.title}
                  </h1>
                  <p className="text-[10px] font-mono text-white/80 italic relative z-10">
                    {selectedTopic.subtitle}
                  </p>
                </div>

                {/* Paragraph Content Iterator */}
                <div className="space-y-4">
                  {selectedTopic.fullText.map((paragraph, index) => {
                    return (
                      <div
                        key={index}
                        className="p-4 sm:p-5 bg-card-bg rounded-none border border-rule leading-relaxed shadow-sm hover:border-belgian-gold/40 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-[10px] font-mono text-belgian-red font-extrabold mt-0.5">
                            § {index + 1}
                          </span>
                          <p className={`font-serif leading-relaxed tracking-normal text-ink-light ${
                            textScale === 'xlarge' ? 'text-lg' :
                            textScale === 'large' ? 'text-base' : 'text-xs'
                          }`}>
                            {paragraph}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quote Block */}
                <div className="bg-paper p-5 rounded-none border-l-4 border-belgian-gold italic space-y-2 shadow-sm">
                  <p className="text-xs sm:text-sm text-ink-light leading-relaxed font-serif">
                    "{selectedTopic.quotes}"
                  </p>
                  <p className="text-[10px] font-mono font-bold text-belgian-gold text-right uppercase tracking-wider">
                    — {selectedTopic.philosopher}
                  </p>
                </div>

                {/* Back Button */}
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="w-full py-3 bg-card-bg hover:bg-paper-cream text-ink font-mono font-bold text-xs uppercase rounded-none border border-rule transition-all cursor-pointer shadow-sm"
                >
                  Voltar para a Enciclopédia 🏛️
                </button>

              </motion.div>
            ) : (
              
              <div className="p-4 space-y-5">
                
                {/* ==================== TAB 0: PORTAL DE VISÃO GERAL ==================== */}
                {activeTab === 0 && (
                  <motion.div 
                    key="tab-overview"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    {/* Welcome Card - Sharp corners rounded-none */}
                    <div className="bg-paper-warm p-5 sm:p-6 rounded-none border border-rule space-y-3.5 shadow-sm relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-belgian-red/5 rounded-none blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-belgian-gold/5 rounded-none blur-2xl"></div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-card-bg border border-rule flex items-center justify-center text-lg shadow-sm rounded-none">
                          🇧🇪
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-extrabold text-belgian-red block uppercase tracking-widest">Portal Oficial do Reino</span>
                          <h3 className="font-serif text-sm font-black text-ink uppercase">Reino da Bélgica • Visão Geral</h3>
                        </div>
                      </div>

                      <p className="text-xs text-ink-light leading-relaxed font-light">
                        Este é o portal oficial de informação pública e arquivos históricos do Reino da Bélgica. Explore a documentação geográfica, cultural, governamental e de mercado que consubstancia a soberania belga e seu papel estratégico como coração administrativo da Europa.
                      </p>
                    </div>

                    {/* Key Indicators of the State Grid */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-extrabold text-ink-muted uppercase tracking-widest block border-b border-rule pb-1">
                        Indicadores de Referência
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="bg-card-bg p-3 rounded-none border border-rule space-y-1">
                          <span className="text-[8px] font-mono font-extrabold text-ink-muted uppercase tracking-wider block">Capital</span>
                          <div className="text-sm font-serif font-black text-ink">Bruxelas</div>
                          <span className="text-[8px] font-mono text-ink-faint block">Sede da UE e OTAN</span>
                        </div>

                        <div className="bg-card-bg p-3 rounded-none border border-rule space-y-1">
                          <span className="text-[8px] font-mono font-extrabold text-ink-muted uppercase tracking-wider block">Área Territorial</span>
                          <div className="text-sm font-serif font-black text-ink">30.689 km²</div>
                          <span className="text-[8px] font-mono text-ink-faint block">Coração da Europa</span>
                        </div>

                        <div className="bg-card-bg p-3 rounded-none border border-rule space-y-1">
                          <span className="text-[8px] font-mono font-extrabold text-ink-muted uppercase tracking-wider block">População</span>
                          <div className="text-sm font-serif font-black text-ink">11,7 Milhões</div>
                          <span className="text-[8px] font-mono text-ink-faint block">Est. Demográfica 2026</span>
                        </div>

                        <div className="bg-card-bg p-3 rounded-none border border-rule space-y-1">
                          <span className="text-[8px] font-mono font-extrabold text-ink-muted uppercase tracking-wider block">Sistema Político</span>
                          <div className="text-[11px] font-bold text-belgian-gold">Monarquia Constitucional</div>
                          <span className="text-[8px] font-mono text-ink-faint block">Democracia Federal</span>
                        </div>

                        <div className="bg-card-bg p-3 rounded-none border border-rule space-y-1">
                          <span className="text-[8px] font-mono font-extrabold text-ink-muted uppercase tracking-wider block">Chefe de Estado</span>
                          <div className="text-xs font-bold text-ink">Rei Filipe I</div>
                          <span className="text-[8px] font-mono text-ink-faint block">Dinastia Saxe-Coburgo</span>
                        </div>

                        <div className="bg-card-bg p-3 rounded-none border border-rule space-y-1">
                          <span className="text-[8px] font-mono font-extrabold text-ink-muted uppercase tracking-wider block">Unidade Monetária</span>
                          <div className="text-sm font-serif font-black text-emerald-600">Euro (€)</div>
                          <span className="text-[8px] font-mono text-ink-faint block">Zona do Euro</span>
                        </div>
                      </div>
                    </div>

                    {/* Territorial and Institutional Division */}
                    <div className="bg-card-bg p-4 rounded-none border border-rule space-y-3">
                      <div className="text-[10px] font-mono text-ink-muted font-bold uppercase tracking-wider border-b border-rule pb-1.5">
                        Estrutura Federativa & Comunidades
                      </div>
                      <div className="space-y-3 text-xs leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-none bg-accent-gold-bg flex items-center justify-center font-bold text-belgian-gold shrink-0 text-[10px]">1</div>
                          <div>
                            <span className="text-ink font-bold font-serif block text-[11px]">Região Flamenga (Flandres)</span>
                            <span className="text-ink-muted text-[10px] font-light block leading-snug">
                              Predominantemente de língua neerlandesa (flamengo). Destaca-se por sua altíssima densidade urbana e dinamismo portuário em Antuérpia.
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 pt-1.5 border-t border-rule-light">
                          <div className="w-5 h-5 rounded-none bg-accent-red-bg flex items-center justify-center font-bold text-belgian-red shrink-0 text-[10px]">2</div>
                          <div>
                            <span className="text-ink font-bold font-serif block text-[11px]">Região Valona (Valônia)</span>
                            <span className="text-ink-muted text-[10px] font-light block leading-snug">
                              Predominantemente de língua francesa. Conhecida pela cadeia montanhosa das Ardenas, ecoturismo e recursos hídricos abundantes.
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 pt-1.5 border-t border-rule-light">
                          <div className="w-5 h-5 rounded-none bg-blue-500/10 flex items-center justify-center font-bold text-blue-500 shrink-0 text-[10px]">3</div>
                          <div>
                            <span className="text-ink font-bold font-serif block text-[11px]">Região de Bruxelas-Capital</span>
                            <span className="text-ink-muted text-[10px] font-light block leading-snug">
                              Área bilíngue oficial (francês e neerlandês), é o centro geopolítico do país e abriga as principais agências da União Europeia.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Official Banner Quote */}
                    <div className="bg-paper-warm p-4 rounded-none border border-rule flex items-start gap-3 shadow-sm">
                      <div className="w-7 h-7 bg-card-bg flex items-center justify-center border border-rule shrink-0 text-sm rounded-none">
                        🏛️
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[8px] font-mono font-black text-belgian-gold uppercase tracking-widest block">Lema Nacional</span>
                        <p className="text-[11px] text-ink font-serif leading-normal italic">
                          "L'union fait la force • Eendracht maakt macht" (A União faz a Força)
                        </p>
                        <p className="text-[9px] text-ink-muted font-light font-mono">
                          Estabelecido formalmente em 1830 para unificar as províncias belgas no processo de independência.
                        </p>
                      </div>
                    </div>

                    {/* Navigation CTA */}
                    <button
                      onClick={() => setActiveTab(1)}
                      className="w-full py-3 bg-belgian-red hover:bg-[#a50d24] text-white font-mono font-bold text-xs uppercase rounded-none shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>Acessar Enciclopédia Belga</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {/* ==================== TAB 1: CURSOS ==================== */}
                {activeTab === 1 && (
                  <motion.div 
                    key="tab-courses"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* Search Field */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Pesquisar capítulo..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-paper text-ink rounded-none border border-rule text-xs font-mono outline-none focus:border-belgian-gold placeholder:text-ink-faint"
                      />
                      <Search className="absolute left-3 top-2.5 w-4 h-4 text-ink-faint" />
                    </div>

                    {/* Category Filter Badges */}
                    <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-rule">
                      {[
                        { id: 'todos', label: 'Todos 📚' },
                        { id: 'esportes', label: 'Esportes 🚴' },
                        { id: 'geografia', label: 'Geografia 🗺️' },
                        { id: 'economia', label: 'Economia 📈' },
                        { id: 'salvos', label: `Salvos ⭐ (${myList.length})` }
                      ].map((item) => {
                        const isActive = selectedCategory === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setSelectedCategory(item.id)}
                            className={`px-3 py-1.5 text-[9px] font-mono font-black uppercase tracking-wider rounded-none transition-all shrink-0 cursor-pointer border outline-none ${
                              isActive
                                ? 'bg-belgian-red text-white border-belgian-red shadow-sm'
                                : 'bg-card-bg text-ink-muted border-rule hover:bg-paper-cream'
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* SubTopic Item Cards */}
                    <div className="space-y-3">
                      {filteredCatalog.length === 0 ? (
                        <div className="bg-card-bg border border-rule rounded-none py-12 px-4 text-center space-y-2">
                          <AlertCircle className="w-8 h-8 text-ink-faint mx-auto" />
                          <p className="text-xs font-bold text-ink-muted uppercase">Nenhum capítulo disponível</p>
                          <p className="text-[10px] text-ink-faint font-light">Tente digitar outro termo ou limpe sua seleção de favoritos.</p>
                        </div>
                      ) : (
                        filteredCatalog.map((topic) => {
                          return (
                            <div
                              key={topic.id}
                              onClick={() => handleOpenTopic(topic)}
                              className="bg-card-bg rounded-none border border-rule p-3.5 hover:border-belgian-red/40 transition-all duration-200 cursor-pointer flex flex-col gap-2 group relative overflow-hidden active:scale-[0.99]"
                            >
                              <div className={`absolute top-0 bottom-0 left-0 w-1 ${
                                topic.category === 'esportes' ? 'bg-belgian-red' :
                                topic.category === 'geografia' ? 'bg-emerald-600' : 'bg-belgian-gold'
                              }`} />

                              <div className="flex items-start justify-between pl-1">
                                <div className="space-y-0.5">
                                  <span className="text-[7px] font-mono font-extrabold uppercase tracking-widest text-ink-muted">
                                    {topic.category} • {topic.readTime}
                                  </span>
                                  <h4 className="font-serif text-sm font-black text-ink group-hover:text-belgian-gold transition-colors leading-tight uppercase">
                                    {topic.title}
                                  </h4>
                                </div>

                                <button
                                  onClick={(e) => toggleFavorite(topic.id, e)}
                                  className="p-1 rounded-none bg-paper border border-rule text-ink-muted hover:text-belgian-red"
                                >
                                  <Bookmark className={`w-3 h-3 ${myList.includes(topic.id) ? 'fill-belgian-gold text-belgian-gold' : ''}`} />
                                </button>
                              </div>

                              <p className="text-[11px] text-ink-muted font-light leading-normal pl-1">
                                {topic.teaser}
                              </p>

                              <div className="border-t border-rule-light pt-2 flex items-center justify-between pl-1 text-[9px] font-mono text-ink-muted">
                                <span className="text-[10px] text-belgian-red uppercase font-black tracking-wider group-hover:text-belgian-gold transition-colors">
                                  Acessar Documento Oficial
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-ink-muted group-hover:text-belgian-gold transition-transform group-hover:translate-x-0.5" />
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </motion.div>
                )}

                {/* ==================== TAB 2: GEOMAPA ==================== */}
                {activeTab === 2 && (
                  <motion.div 
                    key="tab-geomap"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">EXPLORADOR GEOGRÁFICO DE REGIONS</span>
                      <h4 className="font-serif text-sm font-black text-ink uppercase mt-0.5">Ecossistemas e Divisões Territoriais</h4>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 border-b border-rule pb-2.5">
                      {[
                        { id: 'flanders', name: 'Flandres (Norte)' },
                        { id: 'wallonia', name: 'Valônia (Sul)' },
                        { id: 'brussels', name: 'Bruxelas (Capital)' }
                      ].map((reg) => {
                        const isSel = selectedRegionId === reg.id;
                        return (
                          <button
                            key={reg.id}
                            onClick={() => {
                              setSelectedRegionId(reg.id);
                              playChimeSound(true);
                            }}
                            className={`py-2 px-1 text-[8px] sm:text-[9px] font-mono font-black uppercase tracking-wider rounded-none border outline-none cursor-pointer text-center ${
                              isSel 
                                ? 'bg-[#2d8a4e]/10 border-[#2d8a4e] text-[#2d8a4e] font-extrabold shadow-sm' 
                                : 'bg-card-bg border-rule text-ink-muted'
                            }`}
                          >
                            {reg.name}
                          </button>
                        );
                      })}
                    </div>

                    {/* Region Profile Card */}
                    {(() => {
                      const regData = REGION_DB[selectedRegionId];
                      if (!regData) return null;
                      return (
                        <div className="bg-card-bg p-4 rounded-none border border-rule space-y-3 shadow-editorial">
                          <div className="flex items-center justify-between border-b border-rule pb-2">
                            <div>
                              <span className="text-[8px] font-mono text-ink-muted uppercase tracking-widest block">Região Ativa</span>
                              <h3 className="font-serif text-base font-black text-ink uppercase">{regData.name}</h3>
                            </div>
                            <span className="text-xs bg-paper px-2.5 py-1 rounded-none border border-rule font-bold">{regData.flag}</span>
                          </div>

                          <div className="space-y-2 text-[11px]">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-paper p-2 rounded-none border border-rule-light">
                                <span className="text-[8px] font-mono text-ink-muted uppercase block">Clima</span>
                                <span className="text-ink font-medium leading-tight block">{regData.climate}</span>
                              </div>
                              <div className="bg-paper p-2 rounded-none border border-rule-light">
                                <span className="text-[8px] font-mono text-ink-muted uppercase block">Relevo</span>
                                <span className="text-ink font-medium leading-tight block">{regData.terrain}</span>
                              </div>
                            </div>

                            <div className="bg-paper p-2 rounded-none border border-rule-light">
                              <span className="text-[8px] font-mono text-ink-muted uppercase block">Recursos Econômicos</span>
                              <div className="flex flex-wrap gap-1.5 mt-1">
                                {regData.resources.map((res, i) => (
                                  <span key={i} className="text-[8px] font-mono font-bold bg-[#14231b]/10 text-emerald-600 border border-emerald-500/20 px-2 py-0.5 rounded-none">
                                    ✔ {res}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="bg-paper p-2 rounded-none border border-rule-light">
                              <span className="text-[8px] font-mono text-ink-muted uppercase block">Bioma & Fauna</span>
                              <p className="text-ink leading-normal font-light">
                                <span className="text-belgian-gold font-bold">Ecossistema:</span> {regData.ecosystem} <br />
                                <span className="text-belgian-gold font-bold">Fauna:</span> {regData.fauna}
                              </p>
                            </div>

                            <div className="bg-paper p-2 rounded-none border border-belgian-red/20 bg-belgian-red/5">
                              <span className="text-[8px] font-mono text-belgian-red uppercase block font-bold">Desafios Ecológicos</span>
                              <ul className="list-disc list-inside text-ink-light mt-1 space-y-0.5 font-light">
                                {regData.challenges.map((ch, i) => (
                                  <li key={i}>{ch}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Related Studies */}
                          <div className="pt-2 border-t border-rule space-y-1.5">
                            <span className="text-[8px] font-mono text-ink-muted uppercase block">Estudos Científicos Associados</span>
                            <div className="space-y-1.5">
                              {CATALOG_DATA.filter(t => regData.chapters.includes(t.id)).map(topic => (
                                <div
                                  key={topic.id}
                                  onClick={() => handleOpenTopic(topic)}
                                  className="p-2 bg-paper hover:bg-paper-cream border border-rule rounded-none flex items-center justify-between cursor-pointer transition-all active:scale-[0.99]"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs">📖</span>
                                    <span className="text-[11px] font-bold text-ink font-mono leading-none">{topic.title}</span>
                                  </div>
                                  <ChevronRight className="w-3.5 h-3.5 text-ink-muted" />
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      );
                    })()}
                  </motion.div>
                )}

              </div>
            )}

          </AnimatePresence>

      </div>
    </div>
  );
}
