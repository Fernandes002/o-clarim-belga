import { SECTIONS } from '../data';
import {
  Newspaper,
  Calendar,
  BookOpen,
  ChevronRight,
  Award,
  Users,
  Star,
  Trophy,
  MapPin,
  Flame
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (sectionId: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Notáveis belgas históricos para exibição em cards de perfil analítico
  const BELGIAN_HEROES = [
    {
      name: "Eddy MERCKX",
      title: "O CANIBAL DO CICLISMO",
      category: "ESPORTES",
      statLabel1: "Vitórias Pro",
      statVal1: "525",
      statLabel2: "Tour de France",
      statVal2: "5",
      statLabel3: "Monumentos",
      statVal3: "19",
      summary: "Considerado unanimemente o maior ciclista de todos os tempos. Atacava de forma incansável, superando seus adversários taticamente.",
      image: "images/Ciclismogrupo 1.jpg" // <-- Ajustado aqui
    },
    {
      name: "René MAGRITTE",
      title: "MESTRE DO SURREALISMO",
      category: "ARTES PLÁSTICAS",
      statLabel1: "Obras Primas",
      statVal1: "300+",
      statLabel2: "Filosofia Visual",
      statVal2: "100%",
      statLabel3: "Mecenato",
      statVal3: "Global",
      summary: "Questionou a relação entre imagens e palavras através de quadros enigmáticos como 'Isto não é um cachimbo'.",
      image: "images/cultura 2.jpg" // <-- Ajustado aqui
    },
    {
      name: "Georges LEMAÎTRE",
      title: "PAI DA TEORIA DO BIG BANG",
      category: "CIÊNCIAS EXATAS",
      statLabel1: "Hipótese Atômica",
      statVal1: "Primordial",
      statLabel2: "Área de Atuação",
      statVal2: "Cosmologia",
      statLabel3: "Formação",
      statVal3: "PhD & Padre",
      summary: "Físico e sacerdote belga que deduziu matematicamente a expansão do universo e propôs a origem cósmica aceita hoje.",
      image: "images/ciencia fisicagrupo 1.jpg" // <-- Ajustado aqui
    },
    {
      name: "Jean NEUHAUS",
      title: "INVENTOR DO PRALINE",
      category: "GASTRONOMIA",
      statLabel1: "Manteiga de Cacau",
      statVal1: "100%",
      statLabel2: "Ano de Invenção",
      statVal2: "1912",
      statLabel3: "Tipo do Bombom",
      statVal3: "Recheado",
      summary: "Revolucionou a chocolateria de Bruxelas ao criar uma casquinha rígida de chocolate recheada com ganache.",
      image: "images/chocolate belgagrupo 1.jpg" // <-- Ajustado aqui
    }
  ] as const;

  return (
    <div className="space-y-20">

      {/* 1. CABEÇALHO DO PORTAL — tipografia elegante */}
      <div className="text-center pb-10 border-b border-rule">
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-belgian-red inline-block mb-5">
          Portal Oficial de Informações do Reino da Bélgica
        </span>
        <h1 className="font-serif text-6xl sm:text-7xl md:text-[5.5rem] font-black uppercase tracking-tighter text-ink leading-[0.9]">
          O Clarim Belga
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-ink-muted uppercase tracking-wider py-4 mt-6 border-y border-rule px-2 gap-3">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-belgian-red" aria-hidden="true" />
            <span className="font-semibold text-ink-light">Portal Oficial: O Reino da Bélgica</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-ink">
            <Calendar className="w-4 h-4 text-belgian-gold" aria-hidden="true" />
            <span>Edição Informativa • 2026</span>
          </div>
          <div className="text-[#2d8a4e] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d8a4e] animate-pulse" aria-hidden="true"></span>
            <span>Serviço Público Federal ativo</span>
          </div>
        </div>
      </div>

      {/* 2. MATÉRIA DE CAPA — imagem hero grande e impactante (rounded-none para cantos retos) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div
          onClick={() => onNavigate('historia-politica')}
          className="lg:col-span-8 group relative h-[420px] md:h-[520px] rounded-none overflow-hidden cursor-pointer shadow-editorial hover:shadow-editorial-hover transition-all duration-500"
          role="button"
          aria-label="Abrir artigo de capa: História e Política da Bélgica"
        >
          <img
            src="images/historia 1 grupo 1.jpg" // <-- Ajustado aqui
            alt="Fachada histórica da Grand Place de Bruxelas decorada"
            className="absolute inset-0 w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-[1.03]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true"></div>

          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 space-y-4">
            <span className="bg-belgian-red text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-none tracking-widest inline-block">
              Matéria de Capa
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-[1.05] tracking-tight max-w-4xl group-hover:text-[#F5C518] transition-colors duration-300">
              Bélgica: O Enigma do Compromisso e as Chaves do Progresso Europeu
            </h2>
            <p className="text-white/75 text-xs md:text-sm max-w-3xl line-clamp-3 leading-relaxed">
              Como um território de apenas 30 mil km² concilia três idiomas nacionais, resistiu a invasões devastadoras e ergueu-se como o coração político e econômico da União Europeia.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F5C518] uppercase tracking-wider pt-1">
              <span>Ler matéria completa</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* 3. PAINEL DE DADOS INSTITUCIONAIS */}
        <div className="lg:col-span-4 bg-card-bg p-7 rounded-none flex flex-col justify-between shadow-editorial">
          <div>
            <div className="pb-4 mb-5 border-b border-rule">
              <span className="text-[10px] font-semibold text-belgian-red uppercase tracking-[0.2em] block mb-1">Dados Institucionais</span>
              <h3 className="font-serif text-xl font-black text-ink tracking-tight flex items-center gap-2">
                <Award className="w-5 h-5 text-belgian-gold" aria-hidden="true" />
                Fatos de Soberania
              </h3>
              <p className="text-[10px] text-ink-muted mt-1">Indicadores e símbolos oficiais do Reino da Bélgica.</p>
            </div>

            <div className="space-y-4">
              {/* Fatos Rápidos */}
              <div className="space-y-3">
                {[
                  { label: 'Capital', value: 'Bruxelas' },
                  { label: 'Regiões', value: 'Flandres, Valônia, Bruxelas' },
                  { label: 'População', value: '11,7 Milhões (Est. 2026)' },
                  { label: 'Moeda', value: 'Euro (€)' },
                  { label: 'Idiomas Oficiais', value: 'Neerlandês, Francês, Alemão' },
                ].map((fact, i) => (
                  <div key={i} className="flex justify-between items-center text-xs pb-2.5 border-b border-rule-light">
                    <span className="text-ink-muted">{fact.label}</span>
                    <span className="text-ink font-semibold text-right">{fact.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-ink-muted">Sistema Político</span>
                  <span className="text-belgian-gold font-bold text-right text-[11px]">Monarquia Constitucional</span>
                </div>
              </div>

              {/* Chefe de Estado */}
              <div className="bg-paper p-4 rounded-none space-y-2">
                <span className="text-[9px] font-semibold text-ink-muted uppercase tracking-wider block">
                  Chefe de Estado
                </span>
                <div className="space-y-1 text-xs">
                  <p className="text-ink-light">
                    <span className="text-belgian-gold font-bold">Monarca:</span> Sua Majestade o Rei Filipe (Philippe)
                  </p>
                  <p className="text-ink-muted text-[10px] leading-snug">
                    O Rei atua como chefe de Estado, simbolizando a unidade nacional.
                  </p>
                </div>
              </div>

              {/* Lema */}
              <div className="bg-paper p-4 rounded-none space-y-2 text-xs">
                <span className="text-[9px] font-semibold text-belgian-red uppercase tracking-wider block">
                  Lema Nacional
                </span>
                <p className="text-ink-light leading-normal">
                  <span className="text-ink font-bold font-serif">"L'union fait la force"</span> <br />
                  <span className="text-ink-muted italic">"Eendracht makes macht"</span> <br />
                  <span className="text-ink-faint text-[10px] block mt-1">(A União Faz a Força — 1830)</span>
                </p>
                <div className="h-1.5 w-full flex rounded-none overflow-hidden mt-1.5">
                  <div className="w-1/3 bg-ink"></div>
                  <div className="w-1/3 bg-[#F5C518]"></div>
                  <div className="w-1/3 bg-belgian-red"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 4. MANCHETES — cards limpos e elegantes (rounded-none) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

        {[
          {
            onClick: () => onNavigate('historia-politica'),
            tag: 'Sociedade & Colonialismo',
            tagColor: 'text-belgian-red',
            title: 'O Estado Livre do Congo: A Exploração Brutal sob Controle Privado',
            desc: 'Investigue os desdobramentos sociológicos e históricos do extrativismo de borracha promovido por Leopoldo II.',
            cta: 'Ler Análise Crítica',
          },
          {
            onClick: () => onNavigate('economia-matematica'),
            tag: 'Dinâmica Macroeconômica',
            tagColor: 'text-belgian-gold',
            title: 'O Porto de Antuérpia e os Bilhões em Exportações Industriais',
            desc: 'Como o segundo maior complexo portuário marítimo da Europa impulsiona as transações do reino.',
            cta: 'Acessar Gráficos',
          },
          {
            onClick: () => onNavigate('cultura-sociedade'),
            tag: 'Ciências Químicas & Artes',
            tagColor: 'text-[#2d8a4e]',
            title: 'Caramelização e Cristalização: A Reação de Maillard no Waffle de Liège',
            desc: 'Entenda cientificamente como a fusão térmica das esferas de açúcar pérola cria a crosta crocante perfeita.',
            cta: 'Ver Receita e Processo',
          },
        ].map((item, i) => (
          <div
            key={i}
            onClick={item.onClick}
            className="group bg-card-bg rounded-none overflow-hidden cursor-pointer shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            role="button"
          >
            <div className="p-6 space-y-3">
              <span className={`text-[10px] font-semibold uppercase tracking-wider block ${item.tagColor}`}>
                ■ {item.tag}
              </span>
              <h3 className="font-serif text-lg font-black text-ink group-hover:text-belgian-red transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] text-ink-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className={`px-6 pb-5 pt-3 border-t border-rule-light flex items-center justify-between text-xs font-semibold uppercase tracking-wider ${item.tagColor}`}>
              <span>{item.cta}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </div>
        ))}

      </div>

      {/* 5. GALERIA DE NOTÁVEIS (rounded-none) */}
      <div className="space-y-8">
        <div className="border-b border-rule pb-4">
          <span className="text-[10px] font-semibold text-belgian-gold uppercase tracking-[0.2em] block mb-1">Galeria de Gênios</span>
          <h3 className="font-serif text-3xl font-black text-ink tracking-tight flex items-center gap-2.5">
            <Users className="w-7 h-7 text-belgian-red" aria-hidden="true" />
            Notáveis da Bélgica
          </h3>
          <p className="text-[13px] text-ink-muted mt-1">Protagonistas belgas que revolucionaram as artes, ciências, esporte e confeitaria.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BELGIAN_HEROES.map((hero) => (
            <div
              key={hero.name}
              className="bg-card-bg rounded-none overflow-hidden group shadow-editorial hover:shadow-editorial-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded-none uppercase tracking-wider bg-accent-red-bg text-belgian-red">
                    {hero.category}
                  </span>
                  <Star className="w-3.5 h-3.5 text-belgian-gold fill-belgian-gold opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </div>

                <div className="space-y-0.5">
                  <h4 className="font-sans text-xl font-black text-ink tracking-tight uppercase leading-none">
                    {hero.name}
                  </h4>
                  <p className="text-[10px] text-ink-muted tracking-wider font-semibold uppercase">{hero.title}</p>
                </div>

                {/* Exibindo as imagens dos heróis com cantos retos rounded-none e sem bordas */}
                <div className="w-full h-32 overflow-hidden bg-paper">
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="w-full h-full object-cover rounded-none transition-all duration-500"
                  />
                </div>

                <p className="text-[13px] text-ink-muted leading-relaxed line-clamp-3">
                  {hero.summary}
                </p>

                {/* Estatísticas */}
                <div className="bg-paper rounded-none p-3 space-y-2">
                  {[
                    { label: hero.statLabel1, val: hero.statVal1, highlight: false },
                    { label: hero.statLabel2, val: hero.statVal2, highlight: false },
                    { label: hero.statLabel3, val: hero.statVal3, highlight: true },
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px]">
                      <span className="text-ink-muted uppercase">{stat.label}</span>
                      <span className={`font-bold px-1.5 py-0.5 rounded-none ${stat.highlight ? 'text-belgian-gold bg-accent-gold-bg' : 'text-ink bg-paper-cream'}`}>
                        {stat.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  if (hero.category === 'ESPORTES') onNavigate('esporte-estilo-vida');
                  else if (hero.category === 'ARTES PLÁSTICAS') onNavigate('cultura-sociedade');
                  else if (hero.category === 'GASTRONOMIA') onNavigate('cultura-sociedade');
                  else onNavigate('economia-matematica');
                }}
                className="w-full border-t border-rule-light p-3.5 text-center text-[11px] font-semibold text-belgian-red hover:text-white hover:bg-belgian-red transition-all cursor-pointer uppercase outline-none focus:bg-belgian-red focus:text-white rounded-none"
                aria-label={`Ver biografia e obra de ${hero.name}`}
              >
                Ver Obra Completa
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 6. EIXOS DE INFORMAÇÃO OFICIAL (rounded-none) */}
      <div className="space-y-8">
        <div className="border-b border-rule pb-4">
          <span className="text-[10px] font-semibold text-belgian-gold uppercase tracking-[0.2em] block mb-1">Dados de Referência</span>
          <h3 className="font-serif text-3xl font-black text-ink tracking-tight flex items-center gap-2.5">
            <BookOpen className="w-7 h-7 text-belgian-gold" aria-hidden="true" />
            Eixos de Informação Oficial
          </h3>
          <p className="text-[13px] text-ink-muted mt-1">Selecione uma seção para explorar dados oficiais sobre o Reino.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SECTIONS.map((section) => (
            <div
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="group bg-card-bg rounded-none overflow-hidden shadow-editorial hover:shadow-editorial-hover hover:-translate-y-1 cursor-pointer transition-all duration-300 flex flex-col justify-between"
              role="button"
              aria-label={`Abrir seção: ${section.title}`}
            >
              <div>
                <div className="relative h-52 overflow-hidden rounded-none">
                  <img
                    src={section.coverImage}
                    alt={section.title}
                    className="w-full h-full object-cover rounded-none transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {section.disciplines.map((d) => (
                      <span key={d} className="bg-white/90 backdrop-blur-sm text-slate-900 text-[9px] uppercase tracking-wider font-bold py-0.5 px-2 rounded-none">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[9px] font-semibold text-belgian-red uppercase tracking-wider block">
                    {section.readTime}
                  </span>
                  <h4 className="font-serif text-xl font-black text-ink group-hover:text-belgian-red transition-colors duration-300">
                    {section.title}
                  </h4>
                  <p className="text-[13px] text-ink-muted line-clamp-3 leading-relaxed">
                    {section.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-rule-light flex items-center justify-between text-xs font-semibold text-belgian-red uppercase tracking-wider group-hover:text-ink transition-colors duration-300">
                <span>Acessar Artigos</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. SALÃO DE GLÓRIAS (rounded-none) */}
      <div className="bg-paper-warm p-8 md:p-10 rounded-none space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-semibold text-belgian-gold uppercase tracking-[0.25em] block">Vitrine de Excelência</span>
          <h3 className="font-serif text-2xl md:text-3xl font-black text-ink tracking-tight flex items-center justify-center gap-2.5">
            <Trophy className="w-7 h-7 text-belgian-gold" aria-hidden="true" />
            Salão de Glórias & Conquistas do Reino
          </h3>
          <p className="text-[13px] text-ink-muted max-w-xl mx-auto">Grandes triunfos esportivos, diplomáticos e científicos da Bélgica.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">

          {[
            { icon: <Trophy className="w-9 h-9 text-belgian-gold" />, val: '1920', label: 'Ouro Olímpico no Futebol', desc: 'Conquista memorável nas Olimpíadas de Antuérpia.' },
            { icon: <Award className="w-9 h-9 text-belgian-gold" />, val: '11', label: 'Prêmios Nobel', desc: 'Láureas em Paz, Medicina, Física, Química e Literatura.' },
            { icon: <MapPin className="w-9 h-9 text-belgian-gold" />, val: '03', label: 'Sedes da União Europeia', desc: 'Parlamento, Comissão e Conselho Europeu em Bruxelas.' },
            { icon: <Flame className="w-9 h-9 text-belgian-gold" />, val: '525', label: 'Vitórias do "Canibal"', desc: 'Recorde de vitórias de Eddy Merckx no ciclismo profissional.' },
          ].map((item, i) => (
            <div key={i} className="bg-card-bg p-6 rounded-none flex flex-col items-center text-center space-y-2.5 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:-translate-y-0.5">
              {item.icon}
              <span className="font-serif font-black text-2xl text-ink">{item.val}</span>
              <span className="text-[11px] font-semibold text-ink-light uppercase tracking-wider">{item.label}</span>
              <p className="text-[11px] text-ink-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}