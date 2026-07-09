// src/components/ArticleView.tsx
import { useState, useEffect } from 'react';
import { SectionData } from '../types';
import {
  TIMELINE,
  CULTURAL_ITEMS,
  SPORTS_CAMPAIGNS,
  SECTIONS
} from '../data';
import InteractiveMap from './InteractiveMap';
import EconomicChart from './EconomicChart';
import { PDF_TEXTS } from '../pdfTexts';
import { FlowDiagram, getDiagramsForSection, getEmbeddedDiagram } from './FlowDiagram';
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
  Brain,
  Newspaper,
  RefreshCw
} from 'lucide-react';

interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

const QUIZZES: Record<string, QuizQuestion[]> = {
  'historia-politica': [
    {
      question: "Quem foi o primeiro Rei dos Belgas, coroado em 21 de julho de 1831?",
      options: [
        "Leopoldo II",
        "Leopoldo I",
        "Filipe de Saxe-Coburgo-Gota",
        "Alberto I"
      ],
      answerIndex: 1,
      explanation: "O príncipe Leopoldo de Saxe-Coburgo-Gota foi coroado como Leopoldo I, o primeiro Rei dos Belgas, após jurar respeito à Constituição em 21 de julho de 1831."
    },
    {
      question: "Qual rio dividia territorialmente a região da futura Bélgica pelo histórico Tratado de Verdun em 843 d.C.?",
      options: [
        "Rio Mosa",
        "Rio Sena",
        "Rio Reno",
        "Rio Escalda"
      ],
      answerIndex: 3,
      explanation: "A oeste del rio Escalda ficava a Frância Ocidental (francesa) e a leste a Frância Oriental/Lotharingia (germânica), fixando precocemente os rumos da divisão linguística atual."
    },
    {
      question: "Qual foi a principal justificativa utilizada por Leopoldo II para obter o controle pessoal do Congo na Conferência de Berlim?",
      options: [
        "Extração mineral de carvão e aço",
        "Desenvolver rotas de comércio marítimo",
        "Missão filantrópica e civilizadora para combater o tráfico de escravos",
        "Ocupação militar contra a expansão francesa"
      ],
      answerIndex: 2,
      explanation: "Leopoldo II usou de exímia habilidade diplomática na Conferência de Berlim vendendo sua empreitada como uma missão humanitária e filantrópica desinteressada."
    }
  ],
  'geografia-meio-ambiente': [
    {
      question: "Onde se localiza o Signal de Botrange, o ponto físico mais alto da Bélgica com 694 metros de altitude?",
      options: [
        "Depressão de De Moeren",
        "Planalto Central",
        "Maciço das Ardenas (Altos Fanhos)",
        "Polders Costeiros"
      ],
      answerIndex: 2,
      explanation: "O Signal de Botrange localiza-se na zona rochosa e acidentada do Maciço das Ardenas, especificamente na sub-região dos Altos Fanhos (Hautes Fagnes)."
    },
    {
      question: "Qual floresta belga periurbana de Bruxelas é Patrimônio Mundial da UNESCO por abrigar faias europeias centenárias?",
      options: [
        "Silva Carbonaria",
        "Floresta de Sonian (Forêt de Soignes)",
        "Floresta das Fagnes",
        "Floresta de Helle"
      ],
      answerIndex: 1,
      explanation: "A Floresta de Sonian (Forêt de Soignes) é um remanescente histórico preservado com faias de mais de 200 anos do período austríaco, tombado pela UNESCO."
    },
    {
      question: "A Bélgica ocupa a 18ª posição no ranking global de risco extremo para qual crise ecológica?",
      options: [
        "Poluição por fuligem de carvão mineral",
        "Estresse hídrico extremo por impermeabilização urbana",
        "Perda catastrófica de biomassa das Ardenas",
        "Inundações marinhas crônicas"
      ],
      answerIndex: 2,
      explanation: "O país sofre de estresse hídrico extremo por conta da pavimentação urbana excessiva, que impede a infiltração de chuva e recarga de aquíferos subterrâneos."
    }
  ],
  'cultura-sociedade': [
    {
      question: "Quem foi o criador de As Aventuras de Tintim (1929) e pai do influente estilo da Ligne Claire?",
      options: [
        "Peyo",
        "André Franquin",
        "Victor Horta",
        "Hergé"
      ],
      answerIndex: 3,
      explanation: "O cartunista Hergé criou o célebre personagem Tintim e popularizou o estilo gráfico de traços limpos e uniformes sem sombreamentos conhecido como Ligne Claire."
    },
    {
      question: "De onde surgiu o termo original 'Schtroumpf' (Smurf) criado por Peyo?",
      options: [
        "De um almoço informal onde ele esqueceu a palavra para 'saleiro'",
        "De uma lenda folclórica medieval da Valônia",
        "De uma gíria estudantil de Bruxelas",
        "De uma tradução humorística para 'seres pequenos'"
      ],
      answerIndex: 0,
      explanation: "Em 1957, Peyo esqueceu a palavra 'saleiro' e pediu o 'schtroumpf' a seu amigo André Franquin. A piada linguística evoluiu para o idioma dos Smurfs."
    },
    {
      question: "O processo tradicional de fritura dupla das batatas fritas (frites) belgas utiliza qual tipo de gordura?",
      options: [
        "Óleo de girassol purificado",
        "Azeite de oliva extravirgem",
        "Gordura de carne bovina pura (blanc de bœuf)",
        "Manteiga de cacau refinada"
      ],
      answerIndex: 2,
      explanation: "O segredo de crocância das tradicionais frites belgas consiste na fritura dupla em gordura bovina (blanc de bœuf) a 150 °C e depois a 180 °C."
    }
  ],
  'economia-matematica': [
    {
      question: "Qual foi a taxa matemática de câmbio definitiva fixada em 1998 entre o Euro e o Franco Belga?",
      options: [
        "1 Euro = 103,400 Francos Belgas",
        "1 Euro = 40,3399 Francos Belgas",
        "1 Euro = 50,0000 Francos Belgas",
        "1 Euro = 1,9500 Francos Belgas"
      ],
      answerIndex: 1,
      explanation: "O câmbio de transição foi fixado estritamente em 1 Euro = 40,3399 BEF para a unificação monetária europeia."
    },
    {
      question: "Qual é o principal hub logístico belga e o segundo maior porto do continente europeu?",
      options: [
        "Porto de Roterdã",
        "Porto de Gante",
        "Porto de Bruges",
        "Porto de Antuérpia"
      ],
      answerIndex: 3,
      explanation: "Situado em Flandres, o Porto de Antuérpia consolidou-se como o segundo maior porto comercial europeu a partir do rio Escalda e canais ferroviários."
    },
    {
      question: "Qual setor de atividades econômicas lidera a composição do PIB belga representando 77,2%?",
      options: [
        "Setor Primário (Agropecuária)",
        "Setor Secundário (Indústria metalúrgica)",
        "Setor Terciário (Serviços e comércio)",
        "Setor Quaternário (Tecnologia de informação)"
      ],
      answerIndex: 2,
      explanation: "Os serviços dominam amplamente a economia de mercado desenvolvida da Bélgica, correspondendo a 77,2% do PIB nacional e ocupando a maioria da força de trabalho."
    }
  ],
  'esporte-estilo-vida': [
    {
      question: "Qual lendário ciclista belga, apelidado de 'O Canibal', acumulou um recorde de 525 vitórias profissionais?",
      options: [
        "Jean-Marie Pfaff",
        "Eddy Merckx",
        "Enzo Scifo",
        "Thibaut Courtois"
      ],
      answerIndex: 1,
      explanation: "Eddy Merckx é considerado o maior ciclista de todos os tempos, com 5 vitórias no Tour de France e Giro d'Italia, além de bater o recorde mundial da hora em 1972."
    },
    {
      question: "A multicampeã Nafissatou Thiam detém o tricampeonato olímpico consecutivo (Rio, Tóquio, Paris) em qual modalidade?",
      options: [
        "Heptatlo",
        "Salto em Altura",
        "Arremesso de Peso",
        "Corrida de 800m"
      ],
      answerIndex: 0,
      explanation: "Thiam é uma das maiores lendas do atletismo belga e global, dominando o heptatlo nas Olimpíadas de 2016, 2020 e 2024."
    },
    {
      question: "Como funciona o sistema de seguridade social belga para o reembolso de consultas e exames médicos?",
      options: [
        "O reembolso é nulo, pois todo o sistema de saúde é privado e pago individualmente",
        "Trabalhadores pagam 100% dos exames, enquanto aposentados têm cobertura total",
        "O Estado financia integralmente apenas a terceira linha de cuidados geriátricos",
        "As mutualidades reembolsam em média 75% das despesas médicas pagas pelo cidadão"
      ],
      answerIndex: 3,
      explanation: "Por meio do sistema compulsório de segurança social, as mutualidades reembolsam em média 75% dos valores de exames e consultas dos cidadãos cadastrados."
    }
  ]
};

interface ArticleViewProps {
  section: SectionData;
  onBack: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export default function ArticleView({ section, onBack, onNavigateToSection }: ArticleViewProps) {
  const [isLargeVersion, setIsLargeVersion] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  useEffect(() => {
    setIsLargeVersion(false);
    setSelectedAnswers({});
  }, [section]);

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




  const handleToggleIngredient = (ing: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [ing]: !prev[ing]
    }));
  };

  // --- 3. ESPORTE & ESTILO DE VIDA STATES ---
  const [selectedCampaignIndex, setSelectedCampaignIndex] = useState<number>(3);
  const activeCampaign = SPORTS_CAMPAIGNS[selectedCampaignIndex]!;

  const renderParagraphsWithFigures = (categoryKey: string, sectionIdx: number, paragraphs: string[]) => {
    return (
      <div className="space-y-4">
        {paragraphs.map((p, pIdx) => {
          if (isLargeVersion) {
            const embeddedRows = getEmbeddedDiagram(p);
            if (embeddedRows) {
              const cleanTitle = p.split('\n')[0].replace(/[\[\]]/g, '');
              return (
                <div key={pIdx} className="w-full">
                  <FlowDiagram rows={embeddedRows} title={cleanTitle} />
                </div>
              );
            }
          }

          const isBullet = p.startsWith('- ') || p.trim().startsWith('* ');
          let textContent = p;
          if (p.startsWith('- ')) textContent = p.slice(2);
          else if (p.trim().startsWith('* ')) textContent = p.trim().slice(2);

          const paragraphElement = isBullet ? (
            <ul className="list-disc pl-5 space-y-2 text-ink-light text-[15px] leading-[1.8] text-justify">
              <li>{textContent}</li>
            </ul>
          ) : (
            <p className="text-[15px] leading-[1.8] text-ink-light font-sans text-justify">
              {categoryKey === 'historia-politica' && sectionIdx === 0 && pIdx === 0 && !isLargeVersion ? (
                <>
                  <span className="float-left text-5xl sm:text-6xl font-serif font-black text-belgian-red mr-3 leading-none pt-2">A</span>
                  {p.slice(1)}
                </>
              ) : p}
            </p>
          );

          return (
            <div key={pIdx} className="space-y-4">
              {categoryKey === 'historia-politica' && (
                <>
                  {/* Chapter I: Das Origens à Borgonha */}
                  {((isLargeVersion && sectionIdx === 1) || (!isLargeVersion && sectionIdx === 0)) && (
                    <>
                      {pIdx === 0 && (
                        <figure className="float-right ml-6 mb-4 max-w-[240px] md:max-w-[280px] text-center">
                          <img src="images/REmpire-Gallia_Belgica.png" alt="Gália Belga no Império Romano" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.1: Província da Gália Belga romana.</figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-left mr-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/330px-carolingian_empire_843-pt.svg.png" alt="Império Carolíngio 843" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.2: Partilha territorial do Tratado de Verdun (843).</figcaption>
                        </figure>
                      )}
                      {pIdx === 2 && (
                        <figure className="float-right ml-6 mb-4 max-w-[180px] md:max-w-[220px] text-center">
                          <img src="images/Taller_de_rogier_van_der_weyden-felipe_el_bueno-patrimonio_nacional.png" alt="Retrato de Filipe, o Bom" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.3: Filipe, o Bom, Duque de Borgonha.</figcaption>
                        </figure>
                      )}
                    </>
                  )}

                  {/* Chapter II: Coroas de Castela e Áustria */}
                  {((isLargeVersion && sectionIdx === 2) || (!isLargeVersion && sectionIdx === 1)) && (
                    <>
                      {pIdx === 0 && (
                        <figure className="float-left mr-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/250px-carte_pays-bas_espagnol.svg.png" alt="Mapa Países Baixos Espanhóis" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.4: Mapa político dos Países Baixos Espanhóis.</figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-right ml-6 mb-4 max-w-[180px] md:max-w-[220px] text-center">
                          <img src="images/Phillip2_coello_pantoja.jpg" alt="Filipe II por Coello" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.5: Retrato de Filipe II da Espanha.</figcaption>
                        </figure>
                      )}
                      {pIdx === 2 && (
                        <figure className="float-left mr-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/330px-austrian_netherlands_1789.svg.png" alt="Países Baixos Austríacos" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.6: Os Países Baixos Austríacos em 1789.</figcaption>
                        </figure>
                      )}
                    </>
                  )}

                  {/* Chapter III: Revolução de 1830 */}
                  {((isLargeVersion && sectionIdx === 3) || (!isLargeVersion && sectionIdx === 2)) && (
                    <>
                      {pIdx === 0 && (
                        <figure className="my-6 max-w-lg mx-auto text-center">
                          <img src="images/Battle_of_Waterloo_-_Robinson.jpg" alt="Batalha de Waterloo" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.7: A Batalha de Waterloo (1815), ocorrida em território belga.</figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-right ml-6 mb-4 max-w-[240px] md:max-w-[280px] text-center">
                          <img src="images/historia3.jpg" alt="Revolução de 1830" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.8: Episódio dos combates da Revolução de 1830 em Bruxelas.</figcaption>
                        </figure>
                      )}
                      {pIdx === 2 && (
                        <figure className="float-left mr-6 mb-4 max-w-[200px] text-center">
                          <img src="images/fotos20/250px-constitution_de_la_belgique_de_1831_page_1_crop.jpg" alt="Constituição de 1831" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.9: Primeira página da pioneira Constituição de 1831.</figcaption>
                        </figure>
                      )}
                      {pIdx === 3 && (
                        <figure className="float-right ml-6 mb-4 max-w-[180px] md:max-w-[220px] text-center">
                          <img src="images/fotos20/250px-leopold_portret_winterhalter.jpg" alt="Leopoldo I de Inverno" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.10: Retrato oficial do Rei Leopoldo I por Winterhalter.</figcaption>
                        </figure>
                      )}
                    </>
                  )}

                  {/* Chapter IV: Imperialismo e Congo */}
                  {((isLargeVersion && sectionIdx === 4) || (!isLargeVersion && sectionIdx === 3)) && (
                    <>
                      {pIdx === 0 && (
                        <div className="grid grid-cols-2 gap-4 my-6">
                          <figure className="text-center">
                            <img src="images/fotos20/250px-leopoldo2dabelgica.jpg" alt="Leopoldo II" className="mx-auto max-h-48 w-auto shadow-sm border border-rule/50" />
                            <figcaption className="text-[9px] text-ink-muted mt-1 italic">Fig. 1.11: Rei Leopoldo II em vestes de gala.</figcaption>
                          </figure>
                          <figure className="text-center">
                            <img src="images/Kongovrijstaat.jpg" alt="Mapa do Estado Livre do Congo" className="mx-auto max-h-48 w-auto shadow-sm border border-rule/50" />
                            <figcaption className="text-[9px] text-ink-muted mt-1 italic">Fig. 1.12: Delimitação territorial do Estado Livre do Congo.</figcaption>
                          </figure>
                        </div>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-right ml-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/330px-punch_congo_rubber_cartoon.jpg" alt="Caricatura de Leopoldo II" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.13: Sátira crítica da exploração de borracha pelo monarca (revista Punch).</figcaption>
                        </figure>
                      )}
                      {pIdx === 2 && (
                        <figure className="float-left mr-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/250px-mutilatedchildrenfromcongo.jpg" alt="Mutilações no Congo" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.14: Registros históricos de vítimas com membros amputados no Congo.</figcaption>
                        </figure>
                      )}
                    </>
                  )}

                  {/* Chapter V: Guerras Mundiais */}
                  {((isLargeVersion && sectionIdx === 5) || (!isLargeVersion && sectionIdx === 4)) && (
                    <>
                      {pIdx === 0 && (
                        <figure className="float-left mr-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/250px-bundesarchiv_bild_146-1976-134-27_belgien_brussel_parade_vor_dem_schloss.jpg" alt="Parada alemã em Bruxelas" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.15: Desfile militar das tropas imperiais alemãs em Bruxelas (1914).</figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-right ml-6 mb-4 max-w-[200px] text-center">
                          <img src="images/fotos20/250px-remember_belgium.jpg" alt="Cartaz Remember Belgium" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.16: Propaganda aliada "Remember Belgium" no pós-invasão.</figcaption>
                        </figure>
                      )}
                      {pIdx === 2 && (
                        <figure className="float-left mr-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/250px-deutsches_reich_-_belgien_1.jpg" alt="Cédula de ocupação militar" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 1.17: Cédula monetária emitida sob controle de ocupação militar alemão.</figcaption>
                        </figure>
                      )}
                    </>
                  )}
                </>
              )}

              {categoryKey === 'geografia-meio-ambiente' && (
                <>
                  {sectionIdx === 0 && pIdx === 0 && (
                    <figure className="float-right ml-6 mb-4 max-w-[240px] text-center">
                      <img src="images/fotos20/330px-belgium_location_map.svg.png" alt="Mapa de Localização" className="w-full h-auto shadow-sm border border-rule/50" />
                      <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 2.1: Localização geográfica do Reino na Europa Ocidental.</figcaption>
                    </figure>
                  )}
                  {sectionIdx === 1 && pIdx === 1 && (
                    <figure className="my-6 p-1.5 bg-paper-cream shadow-editorial rounded-none border border-rule">
                      <img src="images/fotos20/500px-chateau_forestier_des_trois_fontaines_dscf7057.jpg" alt="Castelo nas Ardenas" className="w-full h-56 object-cover rounded-none" />
                      <figcaption className="text-[11px] text-ink-muted mt-2 px-1 font-mono tracking-wide leading-relaxed">
                        Figura 2.2: Relevo e paisagem florestal acidentada nas Ardenas, Valônia. O ecossistema florestal abriga rios sinuosos e construções históricas integradas.
                      </figcaption>
                    </figure>
                  )}
                  {((isLargeVersion && sectionIdx === 4) || (!isLargeVersion && sectionIdx === 3)) && (
                    <>
                      {pIdx === 0 && (
                        <figure className="float-left mr-6 mb-4 max-w-[240px] text-center">
                          <img src="images/fotos20/500px-foret_de_soignes_2007-11-04-4.jpg" alt="Floresta de Soignes" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 2.3: Faias europeias centenárias na Floresta de Soignes, Bruxelas.</figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-right ml-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/250px-autumn_light_in_the_sonian_forest.jpg" alt="Luz de Outono na Floresta" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 2.4: Incidência de luz solar outonal na Floresta de Soignes.</figcaption>
                        </figure>
                      )}
                    </>
                  )}
                  {((isLargeVersion && sectionIdx === 5) || (!isLargeVersion && sectionIdx === 4)) && (
                    <>
                      {pIdx === 0 && (
                        <figure className="my-6 p-1.5 bg-paper-cream shadow-editorial rounded-none border border-rule">
                          <img src="images/fotos20/restoring_wetlands_in_flanders_to_fight_climate_change_.png" alt="Restauração de pântanos" className="w-full h-56 object-cover rounded-none" />
                          <figcaption className="text-[11px] text-ink-muted mt-2 px-1 font-mono tracking-wide leading-relaxed">
                            Figura 2.5: Projetos integrados de restauração ecológica e zonas úmidas em Flandres para mitigação do estresse hídrico.
                          </figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-left mr-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/hoogwater-juli-2021-valkenburg_1.jpg" alt="Inundações de 2021" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 2.6: Efeitos de transbordamento e inundações fluviais em meados de julho de 2021.</figcaption>
                        </figure>
                      )}
                    </>
                  )}
                </>
              )}

              {categoryKey === 'cultura-sociedade' && (
                <>
                  {sectionIdx === 0 && (
                    <>
                      {pIdx === 0 && (
                        <figure className="float-right ml-6 mb-4 max-w-[200px] text-center">
                          <img src="images/fotos20/250px-rene_magritte_in_1961.jpg" alt="René Magritte" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 3.1: René Magritte, mestre do Surrealismo belga.</figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-left mr-6 mb-4 max-w-[220px] text-center">
                          <img src="images/fotos20/250px-sir_peter_paul_rubens_-_portrait_of_the_artist_-_google_art_project.jpg" alt="Peter Paul Rubens" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 3.2: Autorretrato do mestre barroco Peter Paul Rubens.</figcaption>
                        </figure>
                      )}
                    </>
                  )}
                  {sectionIdx === 1 && (
                    <>
                      {pIdx === 0 && (
                        <figure className="float-right ml-6 mb-4 max-w-[200px] text-center">
                          <img src="images/fotos20/250px-bibi_fricotin_3.jpg" alt="Banda desenhada Bibi" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 3.3: Exemplo clássico da Nona Arte belga.</figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-left mr-6 mb-4 max-w-[200px] text-center">
                          <img src="images/fotos20/250px-pieds_nickeles_5.jpg" alt="Pieds Nickelés" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 3.4: Ilustração clássica de revistas francesas e belgas.</figcaption>
                        </figure>
                      )}
                    </>
                  )}
                  {sectionIdx === 2 && pIdx === 1 && (
                    <figure className="my-6 p-1.5 bg-paper-cream shadow-editorial rounded-none border border-rule">
                      <img src="images/fotos20/250px-frituur_fries_frikandel_mayo_curry_ketchup.jpg" alt="Batatas fritas belgas" className="w-full h-56 object-cover rounded-none" />
                      <figcaption className="text-[11px] text-ink-muted mt-2 px-1 font-mono tracking-wide leading-relaxed">
                        Figura 3.5: Gastronomia tradicional belga. O preparo e fritura dupla das frites constitui um patrimônio imaterial icônico.
                      </figcaption>
                    </figure>
                  )}
                  {sectionIdx === 3 && pIdx === 1 && (
                    <figure className="float-right ml-6 mb-4 max-w-[240px] text-center">
                      <img src="images/fotos20/250px-pralines_cut.jpg" alt="Pralines Belgas" className="w-full h-auto shadow-sm border border-rule/50" />
                      <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 3.6: Pralines artesanais de chocolate recheado.</figcaption>
                    </figure>
                  )}
                  {sectionIdx === 4 && (
                    <>
                      {pIdx === 0 && (
                        <figure className="float-left mr-6 mb-4 max-w-[180px] text-center">
                          <img src="images/fotos20/250px-le_chanteur_stromae.jpg" alt="Stromae" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 3.7: Stromae, cantor contemporâneo belga de hip-hop.</figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-right ml-6 mb-4 max-w-[180px] text-center">
                          <img src="images/fotos20/250px-jacques_brel_1962.jpg" alt="Jacques Brel" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 3.8: O compositor e intérprete clássico Jacques Brel em 1962.</figcaption>
                        </figure>
                      )}
                    </>
                  )}
                  {sectionIdx === 5 && pIdx === 1 && (
                    <figure className="float-left mr-6 mb-4 max-w-[200px] text-center">
                      <img src="images/fotos20/250px-geantsmeyboom2.jpg" alt="Gigantes Meyboom" className="w-full h-auto shadow-sm border border-rule/50" />
                      <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 3.9: Procissão dos Gigantes do festival folclórico Meyboom.</figcaption>
                    </figure>
                  )}
                </>
              )}

              {categoryKey === 'economia-matematica' && (
                <>
                  {sectionIdx === 1 && pIdx === 1 && (
                    <div className="my-6 p-4 bg-paper-cream border border-rule shadow-editorial rounded-none space-y-4">
                      <span className="text-[9px] font-semibold text-belgian-gold uppercase tracking-wider block">Jan Alfons Keustermans - Série Monetária de Euro</span>
                      <div className="grid grid-cols-4 gap-2">
                        <figure className="text-center">
                          <img src="images/fotos20/belgium_1euro_2011.jpg" alt="1 Euro 2011" className="mx-auto h-20 w-auto shadow-sm rounded-full" />
                          <span className="text-[8px] text-ink-muted block mt-1">1 € (2011)</span>
                        </figure>
                        <figure className="text-center">
                          <img src="images/fotos20/belgium_2euro_2008.jpg" alt="2 Euro 2008" className="mx-auto h-20 w-auto shadow-sm rounded-full" />
                          <span className="text-[8px] text-ink-muted block mt-1">2 € (2008)</span>
                        </figure>
                        <figure className="text-center">
                          <img src="images/fotos20/belgium_50cent_2014.jpg" alt="50 Cent 2014" className="mx-auto h-20 w-auto shadow-sm rounded-full" />
                          <span className="text-[8px] text-ink-muted block mt-1">50¢ (2014)</span>
                        </figure>
                        <figure className="text-center">
                          <img src="images/fotos20/belgium_20cent_2014.jpg" alt="20 Cent 2014" className="mx-auto h-20 w-auto shadow-sm rounded-full" />
                          <span className="text-[8px] text-ink-muted block mt-1">20¢ (2014)</span>
                        </figure>
                      </div>
                      <p className="text-[10px] text-ink-muted italic leading-relaxed text-center">
                        Representações da primeira e terceira séries de circulação monetária das moedas belgas.
                      </p>
                    </div>
                  )}
                  {sectionIdx === 2 && pIdx === 1 && (
                    <div className="grid grid-cols-2 gap-4 my-6">
                      <figure className="text-center">
                        <img src="images/fotos20/250px-antwerpen1897.png" alt="Antuérpia 1897" className="mx-auto max-h-48 w-auto shadow-sm border border-rule/50" />
                        <figcaption className="text-[9px] text-ink-muted mt-1.5 italic">Fig. 4.2: Gravura histórica do porto e rio Escalda em 1897.</figcaption>
                      </figure>
                      <figure className="text-center">
                        <img src="images/fotos20/250px-samsun_75.jpg" alt="Navio cargueiro Samsun" className="mx-auto max-h-48 w-auto shadow-sm border border-rule/50" />
                        <figcaption className="text-[9px] text-ink-muted mt-1.5 italic">Fig. 4.3: Logística de transporte marítimo no Porto de Antuérpia.</figcaption>
                      </figure>
                    </div>
                  )}
                  {sectionIdx === 5 && pIdx === 1 && (
                    <figure className="float-right ml-6 mb-4 max-w-[240px] text-center">
                      <img src="images/fotos20/500px-belgium_demography.svg.png" alt="Curva demográfica belga" className="w-full h-auto shadow-sm border border-rule/50" />
                      <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 4.4: Gráfico estatístico da pirâmide e curva demográfica belga.</figcaption>
                    </figure>
                  )}
                </>
              )}

              {categoryKey === 'esporte-estilo-vida' && (
                <>
                  {((isLargeVersion && sectionIdx === 0) || (!isLargeVersion && sectionIdx === 1)) && (
                    <>
                      {pIdx === 0 && (
                        <figure className="float-right ml-6 mb-4 max-w-[180px] text-center">
                          <img src="images/fotos20/250px-romelu_lukaku_12.06.2021_cropped.jpg" alt="Romelu Lukaku" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 5.1: Romelu Lukaku, recordista histórico de gols da seleção.</figcaption>
                        </figure>
                      )}
                      {pIdx === 1 && (
                        <figure className="float-left mr-6 mb-4 max-w-[180px] text-center">
                          <img src="images/fotos20/250px-thibaut_courtois_wc2022.jpg" alt="Thibaut Courtois" className="w-full h-auto shadow-sm border border-rule/50" />
                          <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 5.2: Goleiro Thibaut Courtois na Copa do Mundo de 2022.</figcaption>
                        </figure>
                      )}
                    </>
                  )}
                  {((isLargeVersion && sectionIdx === 1) || (!isLargeVersion && sectionIdx === 2)) && pIdx === 1 && (
                    <figure className="float-right ml-6 mb-4 max-w-[200px] text-center">
                      <img src="images/fotos20/250px-eddy_merckx_molteni_1973.jpg" alt="Eddy Merckx Molteni" className="w-full h-auto shadow-sm border border-rule/50" />
                      <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 5.3: Eddy Merckx vestindo a camisa Molteni em 1973.</figcaption>
                    </figure>
                  )}
                  {((isLargeVersion && sectionIdx === 2) || (!isLargeVersion && sectionIdx === 3)) && pIdx === 1 && (
                    <figure className="float-left mr-6 mb-4 max-w-[180px] text-center">
                      <img src="images/fotos20/250px-nafissatou_thiam_oregon_2022_2.jpg" alt="Nafissatou Thiam" className="w-full h-auto shadow-sm border border-rule/50" />
                      <figcaption className="text-[10px] text-ink-muted mt-1.5 italic leading-tight">Fig. 5.4: A tricampeã olímpica Nafissatou Thiam em 2022.</figcaption>
                    </figure>
                  )}
                </>
              )}

              {paragraphElement}
            </div>
          );
        })}
      </div>
    );
  };

  const renderMainColumn = (categoryKey: string) => {
    const categoryData = PDF_TEXTS[categoryKey];
    if (!categoryData) return null;
    const data = isLargeVersion ? categoryData.large : categoryData.small;

    return (
      <div className="space-y-8">
        {data.intro && (
          <p className="text-lg text-ink-light font-sans font-normal leading-relaxed italic border-b border-rule pb-4">
            {data.intro}
          </p>
        )}

        {data.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            {sec.title && (
              <h2 className="font-serif text-xl font-bold text-ink uppercase tracking-tight pb-2 border-b border-rule flex items-center gap-2">
                {sec.title}
              </h2>
            )}

            {isLargeVersion && (() => {
              const diagrams = getDiagramsForSection(categoryKey, idx);
              return diagrams.length > 0
                ? <div className="space-y-4">{diagrams.map((rows, di) => <FlowDiagram key={di} rows={rows} />)}</div>
                : null;
            })()}

            {renderParagraphsWithFigures(categoryKey, idx, sec.paragraphs)}
            <div className="clear-both"></div>
          </section>
        ))}
      </div>
    );
  };

  const renderQuiz = () => {
    const questions = QUIZZES[section.id];
    if (!questions) return null;

    const answeredCount = Object.keys(selectedAnswers).length;
    const isFinished = answeredCount === questions.length;
    
    const correctCount = questions.reduce((acc, q, qIdx) => {
      return acc + (selectedAnswers[qIdx] === q.answerIndex ? 1 : 0);
    }, 0);

    const handleAnswerSelect = (qIdx: number, optIdx: number) => {
      if (selectedAnswers[qIdx] !== undefined) return;
      setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
    };

    const handleResetQuiz = () => {
      setSelectedAnswers({});
    };

    return (
      <div className="border-t-2 border-ink pt-12 mt-16 space-y-6">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6 text-belgian-red" />
          <h3 className="font-serif text-2xl font-black uppercase tracking-tight text-ink">
            Quiz Editorial: Avalie os seus Conhecimentos
          </h3>
        </div>
        <p className="text-ink-muted text-xs uppercase tracking-wider font-mono">
          Responda às questões com base no conteúdo oficial do PDF
        </p>

        <div className="bg-card-bg border border-rule/70 p-6 sm:p-8 shadow-editorial space-y-8 rounded-none">
          {questions.map((q, qIdx) => {
            const selectedOpt = selectedAnswers[qIdx];
            const isAnswered = selectedOpt !== undefined;

            return (
              <div key={qIdx} className="space-y-4 border-b border-rule/30 pb-6 last:border-0 last:pb-0 animate-fade-in">
                <h4 className="font-serif text-[15px] font-bold text-ink uppercase tracking-tight leading-snug flex gap-2">
                  <span className="text-belgian-red font-mono font-black">{qIdx + 1}.</span>
                  {q.question}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    const isCorrectOption = optIdx === q.answerIndex;
                    
                    let btnClass = "border border-rule/50 bg-paper hover:bg-card-bg hover:border-rule text-ink-light";

                    if (isAnswered) {
                      if (isSelected) {
                        if (isCorrectOption) {
                          btnClass = "border-2 border-[#2d8a4e] bg-[#2d8a4e]/10 text-ink font-bold";
                        } else {
                          btnClass = "border-2 border-belgian-red bg-belgian-red/10 text-ink font-bold";
                        }
                      } else if (isCorrectOption) {
                        btnClass = "border border-[#2d8a4e] bg-[#2d8a4e]/5 text-ink font-semibold";
                      } else {
                        btnClass = "border border-rule/30 bg-paper/50 text-ink-muted/50 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isAnswered}
                        onClick={() => handleAnswerSelect(qIdx, optIdx)}
                        className={`w-full text-left p-3 text-[13px] transition-all rounded-none outline-none flex items-center justify-between gap-3 ${
                          !isAnswered ? "hover:scale-[1.01] cursor-pointer" : ""
                        } ${btnClass}`}
                      >
                        <span className="leading-snug">{opt}</span>
                        <div className="shrink-0 flex items-center justify-center">
                          {isAnswered && isSelected && isCorrectOption && (
                            <span className="text-[#2d8a4e] font-black text-sm">✓</span>
                          )}
                          {isAnswered && isSelected && !isCorrectOption && (
                            <span className="text-belgian-red font-black text-sm">✗</span>
                          )}
                          {isAnswered && !isSelected && isCorrectOption && (
                            <span className="text-[#2d8a4e] font-mono text-[9px] uppercase font-bold">Correta</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className="bg-paper p-3.5 border-l-2 border-belgian-gold text-ink-light text-xs leading-relaxed animate-fade-in font-sans">
                    <strong className="text-ink uppercase tracking-wide block mb-1 font-mono text-[9px] text-belgian-gold">
                      Explicação Histórica:
                    </strong>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}

          {isFinished && (
            <div className="bg-paper border-2 border-belgian-gold/40 p-6 text-center space-y-4 animate-scale-up rounded-none">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-belgian-gold/10 rounded-full border border-belgian-gold/30">
                <Trophy className="w-6 h-6 text-belgian-gold" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-black text-ink uppercase tracking-tight">
                  Pontuação Final: {correctCount} de {questions.length} Corretas
                </h4>
                <p className="text-xs text-ink-light leading-relaxed max-w-md mx-auto">
                  {correctCount === 3
                    ? "Perfeito! Você obteve excelente desempenho e domina o conhecimento oficial do portal. Parabéns! 🇧🇪"
                    : "Bom trabalho! Releia os capítulos ou ative a Versão Grande para gabaritar todas as questões. 📖"}
                </p>
              </div>
              <button
                onClick={handleResetQuiz}
                className="inline-flex items-center gap-2 bg-belgian-red hover:bg-[#a50d24] text-white py-2 px-5 rounded-none text-[10px] uppercase font-black tracking-widest cursor-pointer transition-colors shadow-sm outline-none"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Recomeçar Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderRecommendations = () => {
    const recommendations = SECTIONS.filter(s => s.id !== section.id);

    return (
      <div className="border-t-2 border-ink pt-12 mt-16 space-y-6">
        <div className="flex items-center gap-3">
          <Newspaper className="w-6 h-6 text-belgian-red" />
          <h3 className="font-serif text-2xl font-black uppercase tracking-tight text-ink">
            Leia Também: Outras Matérias Especiais
          </h3>
        </div>
        <p className="text-ink-muted text-xs uppercase tracking-wider font-mono">
          Navegue pelas demais seções de cobertura do Clarim Belga
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((rec) => (
            <button
              key={rec.id}
              onClick={() => onNavigateToSection && onNavigateToSection(rec.id)}
              className="group text-left border border-rule/50 bg-paper hover:bg-card-bg hover:border-rule transition-all p-4 flex flex-col justify-between h-full shadow-sm hover:shadow-md cursor-pointer rounded-none outline-none"
            >
              <div className="space-y-3">
                <div className="aspect-[4/3] w-full overflow-hidden border border-rule/20 relative">
                  <img
                    src={rec.coverImage}
                    alt={rec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 flex gap-1">
                    {rec.disciplines.slice(0, 1).map((d) => (
                      <span key={d} className="bg-belgian-red text-white text-[8px] font-black px-1.5 py-0.5 uppercase tracking-wide">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="font-serif text-sm font-bold text-ink uppercase tracking-tight leading-snug group-hover:text-belgian-red transition-colors">
                  {rec.title}
                </h4>
                <p className="text-[11px] text-ink-muted line-clamp-3 leading-relaxed">
                  {rec.summary}
                </p>
              </div>
              <div className="flex items-center justify-between text-[9px] text-belgian-gold font-bold font-mono uppercase mt-4 pt-3 border-t border-rule/30">
                <span>Ler Matéria</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-belgian-red" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

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

      {/* CONTROLE PREMIUM DE VERSÃO (PEQUENA VS. GRANDE) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-card-bg border border-rule/70 shadow-sm rounded-none">
        <div className="space-y-0.5">
          <span className="text-[10px] font-semibold text-belgian-red uppercase tracking-widest block">Dimensão do Conteúdo</span>
          <h4 className="font-serif text-sm font-bold text-ink uppercase tracking-tight">Tipo de Leitura</h4>
        </div>
        <div className="flex bg-paper p-1 border border-rule rounded-none self-start sm:self-center shadow-inner">
          <button
            onClick={() => setIsLargeVersion(false)}
            className={`px-4 py-2 text-[10px] font-mono font-black uppercase tracking-wider transition-all duration-200 rounded-none cursor-pointer ${
              !isLargeVersion
                ? 'bg-belgian-red text-white shadow-sm font-bold'
                : 'text-ink-light hover:text-ink'
            }`}
          >
            Versão Pequena
          </button>
          <button
            onClick={() => setIsLargeVersion(true)}
            className={`px-4 py-2 text-[10px] font-mono font-black uppercase tracking-wider transition-all duration-200 rounded-none cursor-pointer ${
              isLargeVersion
                ? 'bg-belgian-red text-white shadow-sm font-bold'
                : 'text-ink-light hover:text-ink'
            }`}
          >
            Versão Grande
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
                {renderMainColumn('historia-politica')}
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
                      src="images/Belgian_Federal_Parliament.jpg"
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
                {renderMainColumn('geografia-meio-ambiente')}
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
                {renderMainColumn('cultura-sociedade')}
              </div>

              {/* Sidebar de Cultura */}
              <div className="lg:col-span-5 bg-card-bg p-7 rounded-none shadow-editorial space-y-5">
                <span className="text-[10px] font-semibold text-belgian-red uppercase tracking-[0.2em] block">Patrimônio Cultural</span>
                <h3 className="font-serif text-lg font-black text-ink tracking-tight flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
                  Identidade Multicultural Belga
                </h3>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  A Bélgica é o berço de patrimônios culturais extraordinários: da invenção do saxofone por Adolphe Sax à poesia visceral de Jacques Brel, das cervejas trapistas tombadas pela UNESCO ao estilo Art Nouveau de Victor Horta. O país reúne três comunidades linguísticas que enriquecem um mosaico artístico e gastronômico único na Europa.
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
                {renderMainColumn('economia-matematica')}
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
                {renderMainColumn('esporte-estilo-vida')}
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

      {renderQuiz()}

      {renderRecommendations()}

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
