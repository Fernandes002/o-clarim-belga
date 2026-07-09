import { useState, useId } from 'react';
import { TrendingUp, ShieldAlert, Scale } from 'lucide-react';

export default function EconomicChart() {
  // Dados históricos consolidados do PIB da Bélgica em Bilhões de EUR (2018 - 2026)
  const gdpData = [
    { year: 2018, value: 472 },
    { year: 2019, value: 480 },
    { year: 2020, value: 456 }, // Queda temporária decorrente da pandemia de Covid-19
    { year: 2021, value: 502 },
    { year: 2022, value: 549 },
    { year: 2023, value: 582 },
    { year: 2024, value: 602 },
    { year: 2025, value: 620 },
    { year: 2026, value: 642 } // Projeção ativa para o ano corrente
  ] as const;

  // Geração de IDs Dinâmicos Seguros
  const idQuimicos = useId();
  const idMaquinas = useId();
  const idDiamantes = useId();
  const idChocolates = useId();
  const idMaterias = useId();
  const idBens = useId();
  const idEquip = useId();

  // Estados do Simulador: Exportações em bilhões de EUR
  const [quimicos, setQuimicos] = useState<number>(95);
  const [maquinas, setMaquinas] = useState<number>(65);
  const [diamantes, setDiamantes] = useState<number>(22);
  const [chocolate, setChocolate] = useState<number>(15);
  const outrosExport = 160;

  // Estados do Simulador: Importações em bilhões de EUR
  const [materiasPrimas, setMateriasPrimas] = useState<number>(75);
  const [bensConsumo, setBensConsumo] = useState<number>(140);
  const [equipTransporte, setEquipTransporte] = useState<number>(42);

  // Cálculos de Transação Comercial
  const totalExports = quimicos + maquinas + diamantes + chocolate + outrosExport;
  const totalImports = materiasPrimas + bensConsumo + equipTransporte;
  const tradeBalance = totalExports - totalImports;
  const isSurplus = tradeBalance >= 0;

  // Cálculo de Coordenadas de Ajuste Cartográfico do Gráfico SVG (PIB)
  const padding = 35;
  const svgWidth = 500;
  const svgHeight = 220;
  const chartWidth = svgWidth - padding * 2;
  const chartHeight = svgHeight - padding * 2;

  const minYear = 2018;
  const maxYear = 2026;
  const minVal = 400;
  const maxVal = 700;

  const getX = (year: number) => {
    return padding + ((year - minYear) / (maxYear - minYear)) * chartWidth;
  };

  const getY = (val: number) => {
    return svgHeight - padding - ((val - minVal) / (maxVal - minVal)) * chartHeight;
  };

  const pointsPath = gdpData.map((d) => `${getX(d.year)},${getY(d.value)}`).join(' L ');
  const areaPath = `${pointsPath} L ${getX(maxYear)},${getY(minVal)} L ${getX(minYear)},${getY(minVal)} Z`;

  return (
    <div id="economic-simulator" className="space-y-8 my-8 text-ink">
      
      {/* GRÁFICO VETORIAL DE EVOLUÇÃO DO PIB */}
      <div className="bg-card-bg p-6 rounded-none border border-rule shadow-editorial">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-rule pb-4 mb-4 gap-2">
          <div>
            <h4 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-belgian-gold" />
              Evolução do PIB da Bélgica (Bilhões de EUR)
            </h4>
            <p className="text-xs text-ink-muted">Dados consolidados do Banco Mundial e projeções de análise macroeconômica (2018-2026)</p>
          </div>
          <span className="text-xs font-mono font-medium py-1 px-3 bg-accent-red-bg border border-belgian-red/20 text-belgian-red rounded-none shrink-0 self-start md:self-center">
            Projeção Ativa 2026
          </span>
        </div>
 
        {/* Gráfico Vetorial SVG */}
        <div className="w-full overflow-hidden">
          <svg 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            className="w-full h-auto"
            role="img"
            aria-label="Gráfico de linha mostrando o crescimento contínuo do PIB da Bélgica."
          >
            <desc>
              Série Histórica do PIB Belga.
              2018: €472B, 2019: €480B, 2020: €456B, 2021: €502B, 2022: €549B, 2023: €582B, 2024: €602B, 2025: €620B, 2026: €642B.
            </desc>

            {/* Linhas Horizontais Auxiliares (Grid) */}
            {[400, 475, 550, 625, 700].map((v) => (
              <g key={v}>
                <line
                  x1={padding}
                  y1={getY(v)}
                  x2={svgWidth - padding}
                  y2={getY(v)}
                  className="stroke-chart-grid stroke-1 stroke-dasharray-[4,4]"
                />
                <text
                  x={padding - 5}
                  y={getY(v) + 3}
                  className="text-[9px] font-mono fill-chart-text text-right"
                  textAnchor="end"
                >
                  €{v}B
                </text>
              </g>
            ))}

            {/* Área Sombreada Abaixo da Curva */}
            <path
              d={`M ${areaPath}`}
              className="fill-belgian-red/5 transition-all duration-500"
            />

            {/* Linha Principal de Dados */}
            <path
              d={`M ${pointsPath}`}
              className="fill-none stroke-belgian-red stroke-2 transition-all duration-500"
            />

            {/* Pontos de Interseção */}
            {gdpData.map((d) => (
              <g key={d.year} className="group">
                <circle
                  cx={getX(d.year)}
                  cy={getY(d.value)}
                  r={d.year === 2026 ? 4.5 : 3}
                  className={`${
                    d.year === 2026 ? 'fill-[#F5C518] stroke-belgian-red stroke-2' : 'fill-belgian-red hover:fill-belgian-gold'
                  } transition-all duration-300 cursor-pointer outline-none`}
                  tabIndex={0}
                  aria-label={`Ano ${d.year}: ${d.value} bilhões de Euros`}
                />
                
                {/* Tooltip Dinâmica de Foco */}
                <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <rect
                    x={getX(d.year) - 30}
                    y={getY(d.value) - 26}
                    width="60"
                    height="18"
                    rx="0"
                    className="fill-paper stroke-rule stroke-1"
                  />
                  <text
                    x={getX(d.year)}
                    y={getY(d.value) - 14}
                    className="text-[9px] font-bold fill-ink"
                    textAnchor="middle"
                  >
                    €{d.value}B
                  </text>
                </g>
                <text
                  x={getX(d.year)}
                  y={svgHeight - 12}
                  className="text-[9px] font-mono fill-chart-text"
                  textAnchor="middle"
                >
                  {d.year}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* SIMULADOR MACROECONÔMICO */}
      <div className="bg-card-bg p-6 rounded-none border border-rule shadow-editorial">
        <div className="border-b border-rule pb-4 mb-6">
          <h4 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
            <Scale className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
            Simulador Macroeconômico: Balança Comercial Belga
          </h4>
          <p className="text-xs text-ink-muted font-light">
            Ajuste os fluxos das exportações e importações industriais (em bilhões de Euros) e analise dinamicamente o saldo das transações correntes do reino.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Coluna dos Sliders */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Bloco de Exportações */}
            <div className="bg-paper p-5 rounded-none border border-rule shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-4 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
                Exportações Industriais (Bélgica +)
              </span>

              <div className="space-y-4">
                {/* Químicos */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-ink-light mb-1">
                    <label htmlFor={idQuimicos}>Químicos & Farmacêuticos</label>
                    <span className="font-mono text-emerald-600 font-bold">€{quimicos} Bilhões</span>
                  </div>
                  <input
                    id={idQuimicos}
                    type="range"
                    min="30"
                    max="160"
                    value={quimicos}
                    onChange={(e) => setQuimicos(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer h-1 bg-paper-cream rounded-none appearance-none outline-none"
                    aria-label="Ajustar exportações de químicos e farmacêuticos"
                  />
                </div>

                {/* Máquinas */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-ink-light mb-1">
                    <label htmlFor={idMaquinas}>Maquinários & Manufaturas</label>
                    <span className="font-mono text-emerald-600 font-bold">€{maquinas} Bilhões</span>
                  </div>
                  <input
                    id={idMaquinas}
                    type="range"
                    min="20"
                    max="110"
                    value={maquinas}
                    onChange={(e) => setMaquinas(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer h-1 bg-paper-cream rounded-none appearance-none outline-none"
                    aria-label="Ajustar exportações de maquinários e manufaturas"
                  />
                </div>

                {/* Diamantes */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-ink-light mb-1">
                    <label htmlFor={idDiamantes}>Diamantes (Antuérpia)</label>
                    <span className="font-mono text-emerald-600 font-bold">€{diamantes} Bilhões</span>
                  </div>
                  <input
                    id={idDiamantes}
                    type="range"
                    min="5"
                    max="60"
                    value={diamantes}
                    onChange={(e) => setDiamantes(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer h-1 bg-paper-cream rounded-none appearance-none outline-none"
                    aria-label="Ajustar exportações de diamantes de Antuérpia"
                  />
                </div>

                {/* Chocolates */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-ink-light mb-1">
                    <label htmlFor={idChocolates}>Agroalimentar (Chocolates/Waffles)</label>
                    <span className="font-mono text-emerald-600 font-bold">€{chocolate} Bilhões</span>
                  </div>
                  <input
                    id={idChocolates}
                    type="range"
                    min="5"
                    max="40"
                    value={chocolate}
                    onChange={(e) => setChocolate(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer h-1 bg-paper-cream rounded-none appearance-none outline-none"
                    aria-label="Ajustar exportações de chocolate e doces"
                  />
                </div>
              </div>
            </div>

            {/* Bloco de Importações */}
            <div className="bg-paper p-5 rounded-none border border-rule shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-belgian-red mb-4 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
                Importações Globais (Despesa -)
              </span>

              <div className="space-y-4">
                {/* Matérias Primas */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-ink-light mb-1">
                    <label htmlFor={idMaterias}>Matérias-Primas & Energia</label>
                    <span className="font-mono text-belgian-red font-bold">€{materiasPrimas} Bilhões</span>
                  </div>
                  <input
                    id={idMaterias}
                    type="range"
                    min="20"
                    max="130"
                    value={materiasPrimas}
                    onChange={(e) => setMateriasPrimas(Number(e.target.value))}
                    className="w-full accent-belgian-red cursor-pointer h-1 bg-paper-cream rounded-none appearance-none outline-none"
                    aria-label="Ajustar importações de matérias-primas e energia"
                  />
                </div>

                {/* Bens de Consumo */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-ink-light mb-1">
                    <label htmlFor={idBens}>Bens de Consumo & Eletrônicos</label>
                    <span className="font-mono text-belgian-red font-bold">€{bensConsumo} Bilhões</span>
                  </div>
                  <input
                    id={idBens}
                    type="range"
                    min="60"
                    max="220"
                    value={bensConsumo}
                    onChange={(e) => setBensConsumo(Number(e.target.value))}
                    className="w-full accent-belgian-red cursor-pointer h-1 bg-paper-cream rounded-none appearance-none outline-none"
                    aria-label="Ajustar importações de bens de consumo"
                  />
                </div>

                {/* Equipamentos */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-ink-light mb-1">
                    <label htmlFor={idEquip}>Equipamentos de Transporte</label>
                    <span className="font-mono text-belgian-red font-bold">€{equipTransporte} Bilhões</span>
                  </div>
                  <input
                    id={idEquip}
                    type="range"
                    min="10"
                    max="90"
                    value={equipTransporte}
                    onChange={(e) => setEquipTransporte(Number(e.target.value))}
                    className="w-full accent-belgian-red cursor-pointer h-1 bg-paper-cream rounded-none appearance-none outline-none"
                    aria-label="Ajustar importações de equipamentos de transporte"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Painel Lateral de Resumo */}
          <div className="lg:col-span-4 bg-paper text-ink p-6 rounded-none border border-rule flex flex-col justify-between shadow-sm">
            <div className="space-y-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block border-b border-rule pb-2">
                Resultado de Cálculo
              </span>

              {/* Total de exportações */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-ink-muted">Total Exportado:</span>
                <span className="font-mono font-bold text-emerald-600">€{totalExports}B</span>
              </div>

              {/* Total de importações */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-ink-muted">Total Importado:</span>
                <span className="font-mono font-bold text-belgian-red">€{totalImports}B</span>
              </div>

              {/* Saldo líquido */}
              <div className="pt-4 border-t border-rule">
                <span className="text-xs text-ink-muted block mb-1">Balança Comercial (Saldo)</span>
                <div className="flex items-baseline gap-2">
                  <span className={`font-serif text-3xl font-black ${isSurplus ? 'text-belgian-gold' : 'text-belgian-red'}`}>
                    €{tradeBalance}B
                  </span>
                  <span className={`text-[9px] uppercase font-bold py-0.5 px-2 rounded-none ${
                    isSurplus ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' : 'bg-belgian-red/10 text-belgian-red border border-belgian-red/20'
                  }`}>
                    {isSurplus ? 'Superávit' : 'Déficit'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rule text-[11px] text-ink-muted italic leading-relaxed font-light">
              {isSurplus 
                ? "Balança comercial positiva! Como economia exportadora altamente integrada (Porto de Antuérpia), o superávit belga assegura reservas em Euros estáveis e sustenta o elevado padrão de vida nacional."
                : "Atenção: Um déficit de transações correntes persistente indica que o Reino está dependendo excessivamente da importação líquida de insumos e manufaturados primários."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
