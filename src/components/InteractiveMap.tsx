import { useState } from 'react';
import { REGIONS } from '../data';
import { RegionDetail } from '../types';
import { Map, Sun, Shield, Leaf, AlertTriangle, Briefcase } from 'lucide-react';

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<RegionDetail>(REGIONS[0]!);
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  // Caminhos SVG esquemáticos precisos representando as três grandes divisões federais da Bélgica
  const regionPaths = [
    {
      id: 'flandres',
      name: 'Flandres',
      path: 'M 10,45 C 10,45 35,15 65,15 C 95,15 125,25 145,15 L 155,30 L 145,55 L 115,52 L 95,58 L 82,50 L 60,52 L 40,45 Z',
      color: 'fill-amber-500/10 hover:fill-amber-500/25 stroke-amber-600/50',
      activeColor: 'fill-amber-500/80 stroke-amber-600 text-white',
      textColor: 'top-[28%] left-[45%]'
    },
    {
      id: 'valonia',
      name: 'Valônia',
      path: 'M 10,45 L 40,45 L 60,52 L 82,50 L 95,58 L 115,52 L 145,55 L 150,65 L 135,88 L 115,95 L 85,92 L 55,80 L 30,75 Z',
      color: 'fill-rose-500/10 hover:fill-rose-500/25 stroke-rose-600/50',
      activeColor: 'fill-rose-500/80 stroke-rose-600 text-white',
      textColor: 'top-[72%] left-[62%]'
    },
    {
      id: 'bruxelas',
      name: 'Bruxelas',
      path: 'M 75,41 A 5,5 0 1,1 74.9,41 Z',
      color: 'fill-blue-500/20 hover:fill-blue-500/40 stroke-blue-500',
      activeColor: 'fill-blue-600 stroke-blue-500 text-white',
      textColor: 'top-[44%] left-[53%]'
    }
  ];

  return (
    <div id="interactive-map-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-card-bg p-6 rounded-none border border-rule my-8 shadow-editorial">
      {/* Coluna de Renderização do Mapa */}
      <div className="lg:col-span-5 flex flex-col items-center justify-center">
        <h4 className="font-serif text-lg font-bold text-ink mb-2 flex items-center gap-2">
          <Map className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
          Cartografia Interativa da Bélgica
        </h4>
        <p className="text-xs text-ink-muted mb-6 text-center max-w-sm font-light leading-relaxed">
          Clique no mapa vetorial ou utilize os seletores flutuantes para examinar dados territoriais.
        </p>

        {/* Palco de Renderização SVG */}
        <div className="relative w-full max-w-[340px] aspect-video bg-paper rounded-none border border-rule shadow-sm p-4 flex items-center justify-center">
          <svg
            viewBox="0 0 160 110"
            className="w-full h-full drop-shadow-sm select-none transition-all duration-300"
            aria-label="Mapa político regional da Bélgica"
          >
            {regionPaths.map((rp) => {
              const isActive = selectedRegion.id === rp.id;
              const isHovered = hoveredRegionId === rp.id;
              return (
                <path
                  key={rp.id}
                  id={`map-path-${rp.id}`}
                  d={rp.path}
                  tabIndex={0}
                  role="button"
                  aria-label={`Selecionar região de ${rp.name}`}
                  aria-pressed={isActive}
                  className={`cursor-pointer stroke-[1.5] outline-none transition-all duration-300 ${
                    isActive ? rp.activeColor : rp.color
                  } ${isHovered && !isActive ? 'opacity-85 scale-[1.01] transform-origin-center' : ''}`}
                  onClick={() => {
                    const found = REGIONS.find((r) => r.id === rp.id);
                    if (found) setSelectedRegion(found);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      const found = REGIONS.find((r) => r.id === rp.id);
                      if (found) setSelectedRegion(found);
                    }
                  }}
                  onMouseEnter={() => setHoveredRegionId(rp.id)}
                  onMouseLeave={() => setHoveredRegionId(null)}
                >
                  <title>{rp.name}</title>
                </path>
              );
            })}
          </svg>

          {/* Botões/Rótulos de Seleção Flutuantes */}
          {regionPaths.map((rp) => (
            <button
              key={rp.id}
              id={`map-btn-${rp.id}`}
              onClick={() => {
                const found = REGIONS.find((r) => r.id === rp.id);
                if (found) setSelectedRegion(found);
              }}
              className={`absolute ${rp.textColor} -translate-x-1/2 -translate-y-1/2 text-[9px] font-mono tracking-wider uppercase font-bold py-1 px-2.5 rounded-none shadow-md border transition-all duration-300 ${
                selectedRegion.id === rp.id
                  ? 'bg-[#F5C518] text-slate-950 border-[#dca10d] scale-110 font-black'
                  : 'bg-card-bg text-ink border-rule hover:bg-paper-cream'
              }`}
            >
              {rp.name}
            </button>
          ))}
        </div>
      </div>

      {/* Coluna de Exibição das Informações */}
      <div className="lg:col-span-7 flex flex-col justify-between bg-paper p-6 rounded-none border border-rule shadow-sm">
        <div>
          <div className="flex items-center justify-between border-b border-rule pb-3 mb-4">
            <h3 className="font-serif text-2xl font-black text-ink flex items-center gap-2">
              <span className="w-2.5 h-6 bg-belgian-red rounded-none" aria-hidden="true"></span>
              {selectedRegion.name}
            </h3>
            <span className="text-xs font-mono font-bold py-1 px-3 bg-accent-red-bg border border-belgian-red/25 text-belgian-red rounded-none uppercase tracking-widest">
              Bélgica Territorial
            </span>
          </div>

          <p className="text-sm text-ink-light mb-6 leading-relaxed font-light">
            {selectedRegion.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Clima */}
            <div className="flex items-start gap-3 bg-card-bg p-3 rounded-none border border-rule-light">
              <div className="p-1.5 bg-accent-gold-bg rounded-none text-belgian-gold shrink-0">
                <Sun className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block">Domínio Climático</span>
                <span className="text-xs text-ink-light font-medium">{selectedRegion.clima}</span>
              </div>
            </div>

            {/* Relevo */}
            <div className="flex items-start gap-3 bg-card-bg p-3 rounded-none border border-rule-light">
              <div className="p-1.5 bg-blue-500/10 rounded-none text-blue-500 shrink-0">
                <Shield className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block">Relevo & Topografia</span>
                <span className="text-xs text-ink-light font-medium">{selectedRegion.relevo}</span>
              </div>
            </div>

            {/* Recursos Econômicos */}
            <div className="flex items-start gap-3 bg-card-bg p-3 rounded-none border border-rule-light md:col-span-2">
              <div className="p-1.5 bg-accent-gold-bg rounded-none text-belgian-gold shrink-0">
                <Briefcase className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="w-full">
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block mb-1.5">Recursos Econômicos & Ativos Geopolíticos</span>
                <div className="flex flex-wrap gap-1">
                  {selectedRegion.recursos.map((r: string) => (
                    <span key={r} className="text-[10px] bg-accent-gold-bg text-belgian-gold px-2.5 py-0.5 rounded-none border border-belgian-gold/20 font-mono">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Biomas */}
            <div className="flex items-start gap-3 bg-card-bg p-3 rounded-none border border-rule-light md:col-span-2">
              <div className="p-1.5 bg-accent-green-bg rounded-none text-emerald-600 shrink-0">
                <Leaf className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block mb-1.5">Ecossistemas & Cobertura Vegetal</span>
                <div className="flex flex-wrap gap-1">
                  {selectedRegion.biomas.map((b: string) => (
                    <span key={b} className="text-[10px] bg-accent-green-bg text-emerald-600 px-2.5 py-0.5 rounded-none border border-emerald-500/20 font-mono">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Problemas Ambientais */}
            <div className="flex items-start gap-3 bg-card-bg p-3 rounded-none border border-rule-light md:col-span-2">
              <div className="p-1.5 bg-accent-red-bg rounded-none text-belgian-red shrink-0">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block mb-1.5">Vulnerabilidades Ecológicas Críticas</span>
                <div className="flex flex-wrap gap-1">
                  {selectedRegion.problemas.map((p: string) => (
                    <span key={p} className="text-[10px] bg-accent-red-bg text-belgian-red px-2.5 py-0.5 rounded-none border border-belgian-red/20 font-mono">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Fauna e Flora do Ecossistema */}
        <div className="mt-6 pt-4 border-t border-rule bg-paper-cream -mx-6 -mb-6 p-6 rounded-none shadow-inner">
          <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider block mb-2">Espécies Indicadoras Biológicas (Flora & Fauna)</span>
          <div className="flex flex-wrap gap-1.5">
            {selectedRegion.faunaFlora.map((ff: string) => (
              <span key={ff} className="text-[11px] bg-card-bg text-ink-light px-2.5 py-1 rounded-none border border-rule font-light font-sans">
                {ff}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
