import React from 'react';

// -----------------------------------------------------------------------
// TYPES
// -----------------------------------------------------------------------

export interface DiagramNode {
  id: string;
  label: string;
  sublabel?: string;
  type?: 'main' | 'branch-left' | 'branch-right' | 'sub' | 'leaf';
}

export type DiagramRow =
  | { type: 'node'; nodes: DiagramNode[] }
  | { type: 'split'; nodes: DiagramNode[] }
  | { type: 'list'; items: string[] }
  | { type: 'bar-chart'; bars: { label: string; value: number; valueLabel: string; color?: string }[] }
  | { type: 'timeline'; events: { year: string; label: string }[] }
  | { type: 'two-column'; left: string[]; right: string[] };

// -----------------------------------------------------------------------
// DIAGRAMS ─ HISTÓRIA E POLÍTICA
// -----------------------------------------------------------------------

export const HISTORIA_DIAGRAMS: Record<string, DiagramRow[]> = {
  cap1: [
    { type: 'node', nodes: [{ id: 'r1', label: 'Império Romano', sublabel: 'Invasão de Júlio César, 57 a.C.' }] },
    { type: 'node', nodes: [{ id: 'r2', label: 'Gália Belgica' }] },
    {
      type: 'split',
      nodes: [
        { id: 'r3a', label: 'Norte Germânico', sublabel: 'Salian Franks · Séc. V' },
        { id: 'r3b', label: 'Sul Românico', sublabel: 'Gallo-Roman / Valões · Séc. V' },
      ],
    },
    { type: 'node', nodes: [{ id: 'r4', label: 'Império Carolíngio', sublabel: 'Tratado de Verdun, 843 d.C.' }] },
    { type: 'node', nodes: [{ id: 'r5', label: 'Divisão Oriental vs. Ocidental' }] },
    { type: 'node', nodes: [{ id: 'r6', label: 'Duques de Borgonha', sublabel: 'Séc. XV' }] },
  ],
  cap2: [
    { type: 'node', nodes: [{ id: 'a', label: 'Países Baixos Borgonheses', sublabel: 'Herança Habsburga, 1482' }] },
    { type: 'node', nodes: [{ id: 'b', label: 'Dezessete Províncias', sublabel: 'Divisão Dinástica, 1556' }] },
    { type: 'node', nodes: [{ id: 'c', label: 'Países Baixos Espanhóis', sublabel: 'Revolta Holandesa, 1568–1581' }] },
    {
      type: 'split',
      nodes: [
        { id: 'd1', label: 'Províncias Unidas', sublabel: 'Norte Protestante — independência' },
        { id: 'd2', label: 'Países Baixos Espanhóis', sublabel: 'Sul Católico — mantido' },
      ],
    },
    { type: 'node', nodes: [{ id: 'e', label: 'Países Baixos Austríacos', sublabel: 'Tratado de Utrecht, 1714' }] },
    { type: 'node', nodes: [{ id: 'f', label: 'Domínio Francês', sublabel: 'Anexação Francesa, 1795' }] },
  ],
  cap3: [
    { type: 'node', nodes: [{ id: 'g', label: 'Domínio Francês', sublabel: 'Queda de Napoleão, 1815' }] },
    { type: 'node', nodes: [{ id: 'h', label: 'Reino Unido dos Países Baixos', sublabel: 'União sob o rei Guilherme I' }] },
    { type: 'node', nodes: [{ id: 'i', label: 'Revolução Belga (1830)', sublabel: 'Atritos econômicos e religiosos' }] },
    { type: 'node', nodes: [{ id: 'j', label: 'Independência e Constituição de 1831' }] },
    { type: 'node', nodes: [{ id: 'k', label: 'Reino da Bélgica (1831)', sublabel: 'Leopoldo I jura a Constituição' }] },
  ],
  cap3b: [
    { type: 'node', nodes: [{ id: 'c1', label: 'Campanha dos Dez Dias (1831)', sublabel: 'Exército Holandês avança sobre Flandres' }] },
    { type: 'node', nodes: [{ id: 'c2', label: 'Intervenção Francesa', sublabel: 'Exército francês força retirada holandesa' }] },
    { type: 'node', nodes: [{ id: 'c3', label: 'Tratado de Londres (1839)', sublabel: 'Reconhecimento internacional da independência' }] },
  ],
  cap4: [
    { type: 'node', nodes: [{ id: 'l', label: 'Reinado de Leopoldo II', sublabel: '1865' }] },
    { type: 'node', nodes: [{ id: 'm', label: 'Conferência de Berlim', sublabel: '1884–85' }] },
    { type: 'node', nodes: [{ id: 'n', label: 'Estado Livre do Congo (1885)', sublabel: 'Propriedade pessoal de Leopoldo II' }] },
    {
      type: 'split',
      nodes: [
        { id: 'o1', label: 'Exploração de Borracha', sublabel: 'Seringais, marfim e lucros' },
        { id: 'o2', label: 'Violência e Atrocidades', sublabel: 'Mutilações, massacres, Força Pública' },
      ],
    },
    { type: 'node', nodes: [{ id: 'p', label: 'Denúncias Internacionais', sublabel: 'Relatório Casement, 1904' }] },
    { type: 'node', nodes: [{ id: 'q', label: 'Congo Belga (1908–1960)', sublabel: 'Anexado pelo Parlamento belga' }] },
  ],
  cap4b: [
    { type: 'node', nodes: [{ id: 'qa', label: 'Cotas de Borracha Não Alcançadas' }] },
    { type: 'node', nodes: [{ id: 'qb', label: 'Ações de Punição' }] },
    {
      type: 'split',
      nodes: [
        { id: 'qc', label: 'Tomada de Reféns', sublabel: 'Sequestro de mulheres e crianças · trabalho forçado' },
        { id: 'qd', label: 'Mutilações de Mãos', sublabel: 'Prova de uso de munição · coleta sistemática' },
      ],
    },
  ],
  cap5: [
    {
      type: 'split',
      nodes: [
        { id: 'wa', label: 'Primeira Guerra Mundial', sublabel: '1914 — Violação da Neutralidade' },
        { id: 'wb', label: 'Segunda Guerra Mundial', sublabel: '1940 — Invasão em 18 dias' },
      ],
    },
    {
      type: 'list',
      items: [
        '1914: Plano Schlieffen — Violação da neutralidade belga',
        '"O Estupro da Bélgica" — crimes contra civis',
        'Flamenpolitik — divisão linguística instrumentalizada',
        '1940: Capitulação de Leopoldo III (Questão Real)',
        'Resistência vs. Colaboracionismo',
        'Perseguição e deportação de 25.000 judeus belgas',
      ],
    },
  ],
  cap6: [
    { type: 'node', nodes: [{ id: 'fa', label: 'Estado Unitário Belga', sublabel: '1831' }] },
    { type: 'node', nodes: [{ id: 'fb', label: 'Reformas de Estado', sublabel: '1970–1993 — Conflitos identitários e linguísticos' }] },
    {
      type: 'split',
      nodes: [
        { id: 'fc1', label: 'Três Regiões', sublabel: 'Flandres · Valônia · Bruxelas-Capital' },
        { id: 'fc2', label: 'Três Comunidades', sublabel: 'Flamenga · Francesa · Germanófona' },
      ],
    },
  ],
  cap6b: [
    { type: 'node', nodes: [{ id: 'gov1', label: 'Estrutura Governamental' }] },
    {
      type: 'list',
      items: [
        'Chefe de Estado: Rei Filipe',
        'Chefe de Governo: Primeiro-Ministro',
        'Parlamento Bicameral: Câmara dos Representantes + Senado',
        'Conselho de Ministros: Paridade linguística obrigatória',
      ],
    },
  ],
};

// -----------------------------------------------------------------------
// DIAGRAMS ─ GEOGRAFIA & MEIO AMBIENTE
// -----------------------------------------------------------------------

export const GEO_DIAGRAMS: Record<string, DiagramRow[]> = {
  cap1: [
    {
      type: 'split',
      nodes: [
        { id: 'ga', label: 'Baixa Bélgica', sublabel: 'Polders e dunas — De Moeren −3 m' },
        { id: 'gb', label: 'Média Bélgica', sublabel: 'Planalto central fértil — 10 a 200 m' },
        { id: 'gc', label: 'Alta Bélgica', sublabel: 'Ardenas — Botrange 694 m' },
      ],
    },
  ],
  cap2: [
    { type: 'node', nodes: [{ id: 'cl1', label: 'Oceano Atlântico', sublabel: 'Corrente do Golfo — massa de ar úmida' }] },
    { type: 'node', nodes: [{ id: 'cl2', label: 'Clima Temperado Marítimo', sublabel: 'Köppen Cfb' }] },
    {
      type: 'split',
      nodes: [
        { id: 'cl3a', label: 'Precipitações', sublabel: 'Uccle: 800 mm · Botrange: 1.450 mm' },
        { id: 'cl3b', label: 'Temperaturas', sublabel: 'Inverno: 2–6 °C · Verão: 20–25 °C' },
      ],
    },
  ],
  cap3: [
    { type: 'node', nodes: [{ id: 'hy0', label: 'Mar do Norte', sublabel: 'Destino de toda drenagem belga' }] },
    {
      type: 'split',
      nodes: [
        { id: 'hy1', label: 'Rio Escalda', sublabel: 'Bacia noroeste — Antuérpia' },
        { id: 'hy2', label: 'Rio Mosa', sublabel: 'Bacia leste — Liège e Namur' },
      ],
    },
    { type: 'node', nodes: [{ id: 'hy3', label: 'Canais Artificiais', sublabel: 'Albert · Willebroek · Bruxelas-Charleroi' }] },
  ],
  cap4: [
    {
      type: 'split',
      nodes: [
        { id: 'rec1', label: 'Solos Férteis', sublabel: '26% do território · batata, beterraba, cereais' },
        { id: 'rec2', label: 'Carbonatos e Sílica', sublabel: 'Calcário, mármore negro · Evonik em Antuérpia' },
        { id: 'rec3', label: 'Metais: Zn e Pb', sublabel: 'Nyrstar · 270 mil t de zinco / trimestre' },
        { id: 'rec4', label: 'Carvão', sublabel: 'Encerrado em 2016 · descarbonização' },
      ],
    },
  ],
  cap5: [
    { type: 'node', nodes: [{ id: 'son1', label: 'Silva Carbonária / Arduenna Silva', sublabel: 'Origem histórica medieval' }] },
    { type: 'node', nodes: [{ id: 'son2', label: 'Floresta de Sonian', sublabel: 'UNESCO · 4.421 hectares · Bruxelas' }] },
    {
      type: 'split',
      nodes: [
        { id: 'son3', label: 'Fauna e Extinções', sublabel: 'Urso (1000 d.C.) · Lobo (1810) · Morcegos Natura 2000' },
        { id: 'son4', label: 'Ecoduto e Conectividade', sublabel: '60 m de largura · R0 · Rewilding (2018)' },
      ],
    },
  ],
  cap6: [
    {
      type: 'split',
      nodes: [
        { id: 'env1', label: 'Estresse Hídrico', sublabel: '18ª posição global · pavimentação · sem infiltração' },
        { id: 'env2', label: 'Poluição Química', sublabel: 'PFAS · nitratos agrícolas · efluentes industriais' },
        { id: 'env3', label: 'Eventos Climáticos', sublabel: 'Enchentes 2021 · LIFE Belini · Wetlands4Cities' },
      ],
    },
  ],
};

// -----------------------------------------------------------------------
// DIAGRAMS ─ CULTURA & SOCIEDADE
// -----------------------------------------------------------------------

export const CULTURA_DIAGRAMS: Record<string, DiagramRow[]> = {
  cap1: [
    {
      type: 'timeline',
      events: [
        { year: 'Séc. XV', label: 'Gótico Flamengo — Pintura a óleo · Van Eyck · Van der Weyden' },
        { year: 'Séc. XVII', label: 'Barroco Flamengo — Escola de Antuérpia · Rubens · Van Dyck' },
        { year: 'Séc. XX', label: 'Surrealismo Belga — René Magritte · Paul Delvaux' },
      ],
    },
  ],
  cap2: [
    { type: 'node', nodes: [{ id: 'bd1', label: 'Banda Desenhada Belga', sublabel: 'A Nona Arte' }] },
    {
      type: 'split',
      nodes: [
        { id: 'bd2', label: 'Ligne Claire', sublabel: 'Tintim — Hergé, 1929 · 200 M de cópias' },
        { id: 'bd3', label: 'Estilo Marcinelle', sublabel: 'Os Smurfs — Peyo, 1958 · sucesso global' },
      ],
    },
  ],
  cap2b: [
    { type: 'node', nodes: [{ id: 'sm1', label: 'Análise Sociológica dos Smurfs' }] },
    {
      type: 'split',
      nodes: [
        { id: 'sm2', label: 'Teoria Coletivista', sublabel: 'Sem moeda · cooperativa · liderança de vermelho' },
        { id: 'sm3', label: 'Crítica de Gênero', sublabel: 'Smurfette criada por Gargamel · reformulações contemporâneas' },
      ],
    },
  ],
  cap3: [
    { type: 'node', nodes: [{ id: 'cer1', label: 'Cultura da Cerveja na Bélgica', sublabel: 'Patrimônio UNESCO 2016 · 1.500 variedades' }] },
    {
      type: 'split',
      nodes: [
        { id: 'cer2', label: 'Cervejas Trapistas', sublabel: 'Chimay · Westvleteren · lucros para caridade' },
        { id: 'cer3', label: 'Fermentação Espontânea', sublabel: 'Lambics · Geuze · copos específicos por tipo' },
      ],
    },
  ],
  cap3b: [
    { type: 'node', nodes: [{ id: 'frt1', label: 'A Origem das Batatas Fritas', sublabel: 'Rio Mosa, Namur, 1680' }] },
    {
      type: 'split',
      nodes: [
        { id: 'frt2', label: 'Técnica Tradicional', sublabel: 'Fritura dupla em gordura bovina · 150 °C e 180 °C' },
        { id: 'frt3', label: 'Serviço de Rua', sublabel: 'Friterie · cones de papel · molhos complexos' },
      ],
    },
  ],
  cap4: [
    { type: 'node', nodes: [{ id: 'cho1', label: 'História do Chocolate na Bélgica', sublabel: 'Início em 1635 — ocupação espanhola' }] },
    { type: 'node', nodes: [{ id: 'cho2', label: 'Lei de Qualidade de 1884' }] },
    {
      type: 'split',
      nodes: [
        { id: 'cho3', label: 'Teor de Cacau', sublabel: 'Mín. 35% puro · Jean Neuhaus II inventa praliné (1912)' },
        { id: 'cho4', label: 'Técnica Artesanal', sublabel: 'Banimento de óleos vegetais · chocolatiers independentes' },
      ],
    },
  ],
  cap5: [
    {
      type: 'timeline',
      events: [
        { year: 'Séc. XV–XVI', label: 'Escola Franco-Flamenga — polifonia sacra europeia' },
        { year: '1846', label: 'Adolphe Sax — invenção do saxofone em Dinant' },
        { year: 'Séc. XX', label: 'Jacques Brel — Ne me quitte pas · influência em Bowie e Sinatra' },
        { year: 'Atual', label: 'Stromae — Eurodance + chanson · Alors on danse' },
      ],
    },
  ],
  cap6: [
    { type: 'node', nodes: [{ id: 'folk1', label: 'Patrimônio Folclórico Belga' }] },
    {
      type: 'split',
      nodes: [
        { id: 'folk2', label: 'Ommegang de Bruxelas', sublabel: 'Entrada de Carlos V · UNESCO 2019' },
        { id: 'folk3', label: 'Carnaval de Binche', sublabel: 'Gilles · chapéus de plumas · UNESCO 2003' },
        { id: 'folk4', label: 'Procissão do Santo Sangue', sublabel: 'Bruges · 2ª Cruzada · Séc. XIII' },
      ],
    },
  ],
  cap6b: [
    { type: 'node', nodes: [{ id: 'rel1', label: 'Dinâmica Religiosa na Bélgica' }] },
    {
      type: 'split',
      nodes: [
        { id: 'rel2', label: 'Catolicismo Romano', sublabel: '47–75% adeptos · prática em declínio (5% na missa)' },
        { id: 'rel3', label: 'Comunidade Islâmica', sublabel: '~6% da população · Bruxelas, Antuérpia' },
        { id: 'rel4', label: 'Financiamento Estatal', sublabel: 'Salários pagos pelo Estado · aulas eletivas nas escolas' },
      ],
    },
  ],
};

// -----------------------------------------------------------------------
// DIAGRAMS ─ ECONOMIA & MATEMÁTICA
// -----------------------------------------------------------------------

export const ECONOMIA_DIAGRAMS: Record<string, DiagramRow[]> = {
  cap1: [
    {
      type: 'bar-chart',
      bars: [
        { label: 'Setor Terciário (Serviços)', value: 77.2, valueLabel: '77,2%', color: '#c0392b' },
        { label: 'Setor Secundário (Indústria)', value: 22.1, valueLabel: '22,1%', color: '#d4a017' },
        { label: 'Setor Primário (Agropecuária)', value: 0.7, valueLabel: '0,7%', color: '#555' },
      ],
    },
  ],
  cap3: [
    {
      type: 'two-column',
      left: [
        '🇩🇪 Alemanha: 16,6%',
        '🇫🇷 França: 14,9%',
        '🇳🇱 Países Baixos: 12%',
        '🇬🇧 Reino Unido: 8,4%',
        '🌐 Outros: 48,1%',
      ],
      right: [
        '🇳🇱 Países Baixos: 17,3%',
        '🇩🇪 Alemanha: 13,8%',
        '🇫🇷 França: 9,5%',
        '🇺🇸 Estados Unidos: 7,1%',
        '🌐 Outros: 48,4%',
      ],
    },
  ],
  cap4: [
    {
      type: 'bar-chart',
      bars: [
        { label: 'Beterraba Açucareira', value: 100, valueLabel: '5,0 M t', color: '#c0392b' },
        { label: 'Batata', value: 80, valueLabel: '4,0 M t', color: '#c0392b' },
        { label: 'Trigo', value: 38, valueLabel: '1,9 M t', color: '#d4a017' },
        { label: 'Alface / Chicória', value: 11, valueLabel: '527 mil t', color: '#d4a017' },
        { label: 'Milho', value: 9, valueLabel: '429 mil t', color: '#555' },
        { label: 'Cevada', value: 8, valueLabel: '401 mil t', color: '#555' },
        { label: 'Pera', value: 7, valueLabel: '332 mil t', color: '#555' },
      ],
    },
  ],
  cap5: [
    {
      type: 'split',
      nodes: [
        { id: 'en1', label: 'Usinas Nucleares', sublabel: '7 reatores · 5,9 GW instalados' },
        { id: 'en2', label: 'Energia Solar', sublabel: '5,6 GW · 18º lugar mundial' },
        { id: 'en3', label: 'Energia Eólica', sublabel: '4,6 GW · 19º lugar mundial' },
      ],
    },
  ],
  cap6: [
    {
      type: 'timeline',
      events: [
        { year: '1997', label: 'Taxa de fertilidade: 1,60' },
        { year: '2002', label: 'Taxa de fertilidade: 1,65' },
        { year: '2007', label: 'Taxa de fertilidade: 1,82' },
        { year: '2009', label: 'Taxa de fertilidade: 1,84' },
        { year: '2011', label: 'Taxa de fertilidade: 1,95' },
      ],
    },
  ],
};

// -----------------------------------------------------------------------
// DIAGRAMS ─ ESPORTE, SAÚDE & ESTILO DE VIDA
// -----------------------------------------------------------------------

export const ESPORTE_DIAGRAMS: Record<string, DiagramRow[]> = {
  cap1: [
    {
      type: 'split',
      nodes: [
        { id: 'fut1', label: '4º Lugar — México 1986', sublabel: 'Jean-Marie Pfaff (Luva de Ouro) · Enzo Scifo' },
        { id: 'fut2', label: '3º Lugar — Rússia 2018', sublabel: 'Thibaut Courtois (Luva de Ouro) · Geração de Ouro' },
      ],
    },
  ],
  cap2: [
    { type: 'node', nodes: [{ id: 'eddy1', label: 'Eddy Merckx — O Canibal', sublabel: '525 vitórias profissionais · carreira 1961–1978' }] },
    {
      type: 'split',
      nodes: [
        { id: 'eddy2', label: '5× Tour de France', sublabel: '34 etapas ganhas · camisa amarela por 96 dias' },
        { id: 'eddy3', label: '5× Giro d\'Italia', sublabel: '25 etapas ganhas' },
        { id: 'eddy4', label: 'Recorde da Hora (1972)', sublabel: '49,431 km · Cidade do México' },
      ],
    },
  ],
  cap3: [
    { type: 'node', nodes: [{ id: 'nafi1', label: 'Nafissatou Thiam — Heptatlo', sublabel: '7.013 pontos em Götzis, 2017' }] },
    { type: 'node', nodes: [{ id: 'nafi2', label: 'Títulos e Conquistas' }] },
    {
      type: 'split',
      nodes: [
        { id: 'nafi3', label: 'Jogos Olímpicos', sublabel: 'Ouro Rio 2016 · Tóquio 2020 · Paris 2024 (Tricampeã)' },
        { id: 'nafi4', label: 'Campeonatos Mundiais', sublabel: 'Ouro em Londres 2017 · Eugene 2022 · Prata Doha 2019' },
      ],
    },
  ],
  cap4: [
    { type: 'node', nodes: [{ id: 'sau1', label: 'Sistema de Saúde Belga', sublabel: 'Modelo Universal e Compulsório' }] },
    { type: 'node', nodes: [{ id: 'sau2', label: 'Três Linhas de Cuidado' }] },
    {
      type: 'split',
      nodes: [
        { id: 'sau3', label: 'Primeira Linha', sublabel: 'Clínica Geral (GPs) · atendimento local' },
        { id: 'sau4', label: 'Segunda Linha', sublabel: '209 hospitais · 7 universitários · Emergências 112' },
        { id: 'sau5', label: 'Terceira Linha', sublabel: 'Reabilitação · casas de repouso · atendimento domiciliar' },
      ],
    },
  ],
  cap5: [
    { type: 'node', nodes: [{ id: 'fin1', label: 'Financiamento da Saúde' }] },
    {
      type: 'split',
      nodes: [
        { id: 'fin2', label: 'Previdência Obrigatória', sublabel: '13% do salário bruto · patronal 15–22%' },
        { id: 'fin3', label: 'Sistemas Complementares', sublabel: 'Seguros privados · Mutualidades · reembolso 75%' },
      ],
    },
  ],
};

// -----------------------------------------------------------------------
// RENDERER — ATOMS
// -----------------------------------------------------------------------

const NodeBox: React.FC<{ node: DiagramNode; wide?: boolean }> = ({ node }) => (
  <div className="relative flex flex-col items-center justify-center text-center px-4 py-3 border-2 border-belgian-red/60 bg-paper shadow-editorial w-full max-w-xs">
    <span className="text-[11px] font-bold font-serif text-ink uppercase tracking-tight leading-tight">
      {node.label}
    </span>
    {node.sublabel && (
      <span className="text-[10px] text-ink-muted font-mono mt-1 leading-tight italic">
        {node.sublabel}
      </span>
    )}
  </div>
);

const ArrowDown: React.FC = () => (
  <div className="flex flex-col items-center my-1 flex-shrink-0">
    <div className="w-px h-4 bg-belgian-red/50"></div>
    <svg width="10" height="7" viewBox="0 0 12 8" fill="none" className="text-belgian-red">
      <path d="M6 8L0 0h12L6 8z" fill="currentColor" opacity="0.7" />
    </svg>
  </div>
);

// -----------------------------------------------------------------------
// RENDERER — ROW TYPES
// -----------------------------------------------------------------------

const RenderSplit: React.FC<{ nodes: DiagramNode[]; isLast: boolean }> = ({ nodes, isLast }) => (
  <React.Fragment>
    <div className="flex items-stretch justify-center gap-3 flex-wrap w-full px-1">
      {nodes.map((node) => (
        <div key={node.id} className="flex flex-col items-center flex-1 min-w-[120px] max-w-[200px]">
          <NodeBox node={node} />
        </div>
      ))}
    </div>
    {!isLast && <ArrowDown />}
  </React.Fragment>
);

const RenderList: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="w-full max-w-sm border border-rule/40 bg-paper p-4">
    {items.map((item, i) => (
      <div key={i} className="flex items-start gap-2 py-1">
        <span className="text-belgian-red font-bold text-xs mt-0.5 flex-shrink-0">▸</span>
        <span className="text-[11px] text-ink-light font-sans leading-snug">{item}</span>
      </div>
    ))}
  </div>
);

const RenderBarChart: React.FC<{ bars: { label: string; value: number; valueLabel: string; color?: string }[] }> = ({ bars }) => (
  <div className="w-full space-y-2 px-2">
    {bars.map((bar, i) => (
      <div key={i} className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-ink-muted w-32 sm:w-44 text-right flex-shrink-0 leading-tight">{bar.label}</span>
        <div className="flex-1 bg-rule/20 h-5 relative overflow-hidden border border-rule/30">
          <div
            className="h-full transition-all"
            style={{ width: `${Math.max(bar.value, 1)}%`, backgroundColor: bar.color ?? '#c0392b', opacity: 0.85 }}
          />
        </div>
        <span className="text-[10px] font-bold font-mono w-14 flex-shrink-0" style={{ color: bar.color ?? '#c0392b' }}>
          {bar.valueLabel}
        </span>
      </div>
    ))}
  </div>
);

const RenderTimeline: React.FC<{ events: { year: string; label: string }[] }> = ({ events }) => (
  <div className="w-full relative pl-6 border-l-2 border-belgian-red/40 space-y-3">
    {events.map((ev, i) => (
      <div key={i} className="relative flex items-start gap-3">
        {/* dot */}
        <div className="absolute -left-[25px] w-4 h-4 border-2 border-belgian-red bg-paper flex items-center justify-center flex-shrink-0">
          <div className="w-1.5 h-1.5 bg-belgian-red rounded-full" />
        </div>
        <div>
          <span className="text-[10px] font-mono font-bold text-belgian-red tracking-wide block">{ev.year}</span>
          <span className="text-[11px] text-ink-light font-sans leading-snug">{ev.label}</span>
        </div>
      </div>
    ))}
  </div>
);

const RenderTwoColumn: React.FC<{ left: string[]; right: string[] }> = ({ left, right }) => (
  <div className="w-full grid grid-cols-2 gap-3">
    {/* Left */}
    <div className="border border-rule/40 bg-paper p-3">
      <div className="text-[9px] font-mono font-bold text-belgian-red uppercase tracking-widest mb-2 text-center">Exportações</div>
      {left.map((item, i) => (
        <div key={i} className="text-[10px] text-ink-light font-sans py-0.5 border-b border-rule/20 last:border-0">{item}</div>
      ))}
    </div>
    {/* Right */}
    <div className="border border-rule/40 bg-paper p-3">
      <div className="text-[9px] font-mono font-bold text-belgian-gold uppercase tracking-widest mb-2 text-center">Importações</div>
      {right.map((item, i) => (
        <div key={i} className="text-[10px] text-ink-light font-sans py-0.5 border-b border-rule/20 last:border-0">{item}</div>
      ))}
    </div>
  </div>
);

// -----------------------------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------------------------

export interface FlowDiagramProps {
  rows: DiagramRow[];
  title?: string;
}

export const FlowDiagram: React.FC<FlowDiagramProps> = ({ rows, title }) => {
  return (
    <div className="my-6 border border-rule/60 bg-card-bg p-5 shadow-editorial">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-rule/50">
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-belgian-red opacity-90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-belgian-gold opacity-90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-ink/20 border border-rule/30"></span>
        </div>
        <span className="text-[9px] font-mono font-bold text-ink-muted uppercase tracking-[0.2em]">
          {title ?? 'Esquema Diagrama'}
        </span>
      </div>

      {/* Rows */}
      <div className="flex flex-col items-center w-full gap-0">
        {rows.map((row, rowIdx) => {
          const isLast = rowIdx === rows.length - 1;

          if (row.type === 'node') {
            return (
              <React.Fragment key={rowIdx}>
                <NodeBox node={row.nodes[0]} />
                {!isLast && <ArrowDown />}
              </React.Fragment>
            );
          }

          if (row.type === 'split') {
            return (
              <React.Fragment key={rowIdx}>
                <RenderSplit nodes={row.nodes} isLast={isLast} />
              </React.Fragment>
            );
          }

          if (row.type === 'list') {
            return <RenderList key={rowIdx} items={row.items} />;
          }

          if (row.type === 'bar-chart') {
            return (
              <div key={rowIdx} className="w-full">
                <RenderBarChart bars={row.bars} />
              </div>
            );
          }

          if (row.type === 'timeline') {
            return (
              <div key={rowIdx} className="w-full pl-2">
                <RenderTimeline events={row.events} />
              </div>
            );
          }

          if (row.type === 'two-column') {
            return (
              <div key={rowIdx} className="w-full">
                <RenderTwoColumn left={row.left} right={row.right} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------
// HELPER: resolve diagram by category key and section index
// -----------------------------------------------------------------------

type DiagramMap = Record<string, Record<string, DiagramRow[]>>;

const CATEGORY_MAP: DiagramMap = {
  'historia-politica': HISTORIA_DIAGRAMS,
  'geografia-meio-ambiente': GEO_DIAGRAMS,
  'cultura-sociedade': CULTURA_DIAGRAMS,
  'economia-matematica': ECONOMIA_DIAGRAMS,
  'esporte-estilo-vida': ESPORTE_DIAGRAMS,
};

// Maps [categoryKey][sectionIdx] -> diagram key(s)
// Some sections have multiple diagrams (sub-diagrams embedded in paragraphs)
const SECTION_MAP: Record<string, string[][]> = {
  'historia-politica': [
    [],            // section 0: INTRODUÇÃO -> no diagram
    ['cap1'],      // section 1: CAPÍTULO I -> cap1
    ['cap2'],      // section 2: CAPÍTULO II -> cap2
    ['cap3'],      // section 3: CAPÍTULO III -> cap3
    ['cap4'],      // section 4: CAPÍTULO IV -> cap4
    ['cap5'],      // section 5: CAPÍTULO V -> cap5
    ['cap6'],      // section 6: CAPÍTULO VI -> cap6
  ],
  'geografia-meio-ambiente': [
    ['cap1'],
    ['cap2'],
    ['cap3'],
    ['cap4'],
    ['cap5'],
    ['cap6'],
  ],
  'cultura-sociedade': [
    ['cap1'],
    ['cap2'],
    ['cap3'],
    ['cap4'],
    ['cap5'],
    ['cap6'],
  ],
  'economia-matematica': [
    ['cap1'],
    [],
    ['cap3'],
    ['cap4'],
    ['cap5'],
    ['cap6'],
  ],
  'esporte-estilo-vida': [
    ['cap1'],
    ['cap2'],
    ['cap3'],
    ['cap4'],
    ['cap5'],
    [],
  ],
};

export function getDiagramsForSection(
  categoryKey: string,
  sectionIdx: number,
): DiagramRow[][] {
  const sectionKeys = SECTION_MAP[categoryKey]?.[sectionIdx] ?? [];
  const categoryDiagrams = CATEGORY_MAP[categoryKey] ?? {};
  return sectionKeys
    .map((key) => categoryDiagrams[key])
    .filter(Boolean) as DiagramRow[][];
}

// Backward-compat single
export function getDiagramForSection(
  categoryKey: string,
  sectionIdx: number,
): DiagramRow[] | null {
  const all = getDiagramsForSection(categoryKey, sectionIdx);
  return all.length > 0 ? all[0] : null;
}

export function getEmbeddedDiagram(paragraphText: string): DiagramRow[] | null {
  const text = paragraphText.trim();
  if (text.startsWith('[Campanha dos Dez Dias]')) return HISTORIA_DIAGRAMS['cap3b'];
  if (text.startsWith('[Cotas de Borracha')) return HISTORIA_DIAGRAMS['cap4b'];
  if (text.startsWith('[Análise Sociológica')) return CULTURA_DIAGRAMS['cap2b'];
  if (text.startsWith('[A Origem das Batatas')) return CULTURA_DIAGRAMS['cap3b'];
  if (text.startsWith('[Dinâmica Religiosa')) return CULTURA_DIAGRAMS['cap6b'];
  // Detect ASCII box-drawing diagrams (┌, └, ├, etc.)
  if (/^[┌┐└┘├┤│─┬┴╌╎▼▲►◄┼]/.test(text)) return HISTORIA_DIAGRAMS['cap6b'];
  return null;
}

