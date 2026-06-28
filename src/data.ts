import { SectionData, TimelineItem, RegionDetail, CulturalItem, SportsCampaign } from './types';

/**
 * @file data.ts
 * @description Banco de dados estático e imutável para o portal O Clarim Belga.
 * Dados estruturados com rigor acadêmico, histórico e esportivo de nível editorial.
 */

export const SECTIONS: readonly SectionData[] = [
  {
    id: 'historia-politica',
    title: 'História e Política',
    subtitle: 'Das origens feudais à complexa engrenagem do Estado federal',
    disciplines: ['História', 'Sociologia', 'Filosofia'],
    coverImage: '/src/assets/images/historia 2.jpg',
    summary: 'Um exame crítico da Revolução Belga de 1830, a exploração colonial do Congo sob o Rei Leopoldo II, as históricas divisões linguísticas e a consolidação do intricado modelo parlamentar federal belga contemporâneo.',
    readTime: '6 min de leitura'
  },
  {
    id: 'geografia-meio-ambiente',
    title: 'Geografia e Meio Ambiente',
    subtitle: 'Pôlderes costeiros, a densidade das Ardenas e os desafios da ecologia industrial',
    disciplines: ['Geografia', 'Biologia'],
    coverImage: '/src/assets/images/geografia belgica.jpg',
    summary: 'Explore a diversidade ecológica belga: das planícies arenosas e pôlderes recuperados do Mar do Norte (Flandres) às densas florestas de coníferas e colinas acidentadas das Ardenas (Valônia).',
    readTime: '8 min de leitura'
  },
  {
    id: 'cultura-sociedade',
    title: 'Cultura e Sociedade',
    subtitle: 'A pátria das histórias em quadrinhos, do chocolate refinado e do plurilinguismo',
    disciplines: ['Artes', 'Sociologia', 'Língua Portuguesa'],
    coverImage: '/src/assets/images/cultura smufs.jpg',
    summary: 'A convivência complexa e as riquezas de um país multilíngue. Berço do Surrealismo nas artes plásticas, da arquitetura Art Nouveau de Victor Horta e de algumas das tradições gastronômicas mais consagradas do mundo.',
    readTime: '7 min de leitura'
  },
  {
    id: 'economia-matematica',
    title: 'Economia e Matemática',
    subtitle: 'O coração logístico e industrial da Eurozona e indicadores de comércio',
    disciplines: ['Matemática', 'Geografia'],
    coverImage: '/src/assets/images/economia 2.jpg',
    summary: 'Análise do papel estratégico de Bruxelas como sede institucional global, a força exportadora dos setores químico, farmacêutico e de lapidação de diamantes (Antuérpia), e o simulador matemático da balança comercial.',
    readTime: '5 min de leitura'
  },
  {
    id: 'esporte-estilo-vida',
    title: 'Esporte e Estilo de Vida',
    subtitle: 'O asfalto e as pedras do ciclismo clássico, os Diabos Vermelhos e a saúde pública',
    disciplines: ['Educação Física', 'Biologia'],
    coverImage: '/src/assets/images/seleção.jpg',
    summary: 'A paixão nacional pelo ciclismo de estrada clássico sobre paralelepípedos, as campanhas históricas dos Red Devils no futebol e estudos biológicos sobre estilo de vida ativo e longevidade na Europa.',
    readTime: '5 min de leitura'
  }
] as const;

export const TIMELINE: readonly TimelineItem[] = [
  {
    year: '1830',
    title: 'A Revolução Belga e a Independência',
    period: 'A libertação contra o Reino Unido dos Países Baixos',
    description: 'Após séculos sob domínios estrangeiros (espanhol, austríaco, francês e holandês), a população das províncias do sul levantou-se contra as políticas centralizadoras do protestante Rei Guilherme I.',
    details: 'A apresentação da ópera patriótica "La Muette de Portici" no Teatro de la Monnaie, em Bruxelas, serviu como o estopim emocional das revoltas de rua. A união tática entre liberais e católicos propiciou a redação da pioneira Constituição de 1831, estabelecendo uma monarquia parlamentar constitucional altamente liberal que serviu de modelo para diversas nações europeias.',
    philosophicalInsight: 'A união inicial belga demonstrou que o desejo compartilhado de autonomia civil e religiosa pode sobrepor-se temporariamente a divisões linguísticas profundas quando estruturado sob um modelo constitucional representativo.',
    philosopher: 'Adolphe Quetelet (Pioneiro da estatística social e astrônomo belga)'
  },
  {
    year: '1885 - 1908',
    title: 'O Estado Livre do Congo e o Terror Colonial',
    period: 'A trágica exploração privada do Rei Leopoldo II',
    description: 'A exploração violenta da bacia do rio Congo para a extração em massa de borracha e marfim, sob a suserania e propriedade pessoal de Leopoldo II.',
    details: 'Diferente de outras colônias, o Congo foi gerido por Leopoldo II como uma empresa corporativa privada e pessoal. O regime violento de trabalho forçado, execuções e mutilações dizimou milhões de congoleses. A denúncia internacional do horror colonial forçou o Parlamento belga a anexar a região como "Congo Belga" em 1908. As feridas e cicatrizes humanitárias e econômicas dessa exploração ecoam intensamente no continente africano.',
    philosophicalInsight: 'A tragédia do Estado Livre expõe o limite desumanizador do imperialismo econômico desenfreado, onde o cálculo de lucro privado se desvincula totalmente de qualquer imperativo ético ou moral.',
    philosopher: 'Karl Marx (que escreveu partes do Manifesto Comunista em seu exílio no café La Maison du Cygne, na Grand Place de Bruxelas)'
  },
  {
    year: '1914 - 1945',
    title: 'A Bélgica nas Duas Grandes Guerras',
    period: 'Invasões alemãs, resistência armada e ocupação militar',
    description: 'Apesar de manter uma postura oficial de estrita neutralidade, o território belga foi violado pelas invasões alemãs em ambos os conflitos mundiais devido à sua posição geopolítica estratégica.',
    details: 'Na Primeira Guerra Mundial, a tenaz defesa das fortalezas de Liège atrasou significativamente o plano Schlieffen alemão. Na Segunda Guerra, o país sofreu uma ocupação implacável, marcada pelo aprisionamento e deportação de sua população judaica no Forte de Breendonk. A resistência belga atuou de forma decisiva na sabotagem de linhas férreas logísticas e na proteção de refugiados.',
    philosophicalInsight: 'A preservação da soberania democrática perante a agressão totalitária exige não apenas a mobilização física de defesa, mas a consolidação de uma infraestrutura moral e transnacional de direitos humanos.',
    philosopher: 'Chaim Perelman (Cofundador da Nova Retórica e filósofo do direito belga)'
  },
  {
    year: '1970 - Presente',
    title: 'A Transição para o Estado Federal e a Bruxelas Europeia',
    period: 'De um Estado Unitário para uma Federação Linguística Complexa',
    description: 'Uma série de sucessivas reformas estruturais descentralizou o poder nacional belga, organizando o país em três comunidades linguísticas e três regiões autônomas.',
    details: 'Para equilibrar as tensões e fricções políticas de representatividade entre Flandres (norte, neerlandófonos) e Valônia (sul, francófonos), a Bélgica desenvolveu um modelo federativo de competências exclusivas e compartilhadas de altíssima complexidade. Paralelamente, Bruxelas consolidou-se como o coração burocrático e político da Europa, abrigando as sedes da Comissão Europeia, do Conselho da União Europeia e a sede política da OTAN.',
    philosophicalInsight: 'O clássico "compromis à la belge" representa a aplicação prática da política deliberativa e de uma cultura pragmática de coalizão, onde longos processos de consenso evitam a cisão territorial.',
    philosopher: 'Luce Irigaray (Linguista e filósofa existencialista de destaque radicada na Bélgica)'
  }
] as const;

export const REGIONS: readonly RegionDetail[] = [
  {
    id: 'flandres',
    name: 'Flandres (Flanders)',
    clima: 'Temperado Marítimo (alta umidade do Mar do Norte, invernos moderados e verões frescos)',
    relevo: 'Planícies costeiras baixas, dunas arenosas e pôlderes férteis recuperados do mar',
    recursos: ['Porto de Antuérpia (Hub Logístico Global)', 'Produção Agrícola (Trigo, Beterraba Açucareira)', 'Indústria de Alta Tecnologia e Refino de Diamantes', 'Pesca Marítima'],
    problemas: ['Risco severo de erosão costeira decorrente da elevação do nível do mar', 'Contaminação de águas subterrâneas por nitratos da pecuária intensiva'],
    biomas: ['Florestas temperadas decíduas e ecossistemas estuarinos estritos'],
    faunaFlora: ['Carvalho Europeu (Quercus robur)', 'Papoula Vermelha', 'Garça-Real', 'Foca-Comum (Phoca vitulina)', 'Raposa-Vermelha'],
    description: 'A região setentrional da Bélgica, onde se fala o neerlandês (flamengo). Caracteriza-se por uma forte economia orientada à exportação, alta densidade populacional e centros históricos medievais altamente preservados como Bruges, Gante e Antuérpia.',
    coordinates: 'M 10 20 L 70 10 L 60 50 L 15 45 Z'
  },
  {
    id: 'valonia',
    name: 'Valônia (Wallonia)',
    clima: 'Temperado Continentalizado (invernos mais frios e com incidência de neve nas colinas, verões moderados)',
    relevo: 'Maciço herciniano antigo, acidentado e coberto pelas colinas densamente florestadas das Ardenas',
    recursos: ['Extensa Cobertura Florestal e Silvicultura', 'Reservas de Água Mineral de Alta Pureza (Spa)', 'Extração de Pedra Calcária e Rochas Ornamentais', 'Turismo Ecológico e de Aventura'],
    problemas: ['Histórico de contaminação por metais pesados em antigas bacias de mineração de carvão (Vale Industrial)', 'Vulnerabilidade florestal a pragas devido ao aquecimento climático'],
    biomas: ['Florestas mistas e boreais de coníferas das Ardenas'],
    faunaFlora: ['Pinheiro-Silvestre (Pinus sylvestris)', 'Urzes (Calluna vulgaris)', 'Cervo-Vermelho (Cervus elaphus)', 'Javali (Sus scrofa, símbolo tradicional das Ardenas)', 'Coruja-Buraqueira'],
    description: 'A região meridional da Bélgica, predominantemente de língua francesa (com uma pequena minoria germânica no leste). Possui paisagens bucólicas, florestas imensas, castelos históricos e cidades de rico passado industrial como Liège, Namur e Charleroi.',
    coordinates: 'M 15 45 L 60 50 L 90 75 L 35 90 Z'
  },
  {
    id: 'bruxelas',
    name: 'Bruxelas-Capital (Brussels)',
    clima: 'Urbano Temperado (microclima de ilha de calor urbana com frequência constante de precipitação ao longo do ano)',
    relevo: 'Colinas suaves cortadas pelo vale canalizado do rio Sena e canais fluviais artificiais',
    recursos: ['Centro Financeiro e de Serviços Corporativos', 'Turismo de Negócios e Eventos Governamentais', 'Sedes Diplomáticas, Consulados e Quartéis-Generais Internacionais (OTAN)'],
    problemas: ['Poluição crônica do ar por dióxido de nitrogênio proveniente do tráfego rodoviário denso', 'Pressão habitacional severa sobre áreas verdes periféricas'],
    biomas: ['Ecossistema urbano consolidado e remanescentes florestais periurbanos como a Floresta de Soignes'],
    faunaFlora: ['Faia-Europeia (Fagus sylvatica, na Floresta de Soignes)', 'Castanheiro-da-Índia', 'Esquilo-Vermelho (Sciurus vulgaris)', 'Morcego-Ferreiro', 'Periquito-de-Colar (Psittacula krameri, espécie exótica adaptada)'],
    description: 'Um enclave bilíngue oficial (francês e neerlandês) administrativamente autônomo, cravado na planície de Flandres. Funciona como residência da família real belga, capital nacional e o principal polo decisório administrativo da União Europeia.',
    coordinates: 'M 40 38 L 48 38 L 48 45 L 40 45 Z'
  }
];

export const CULTURAL_ITEMS: readonly CulturalItem[] = [
  {
    id: 'hq-surrealismo',
    title: 'A Pátria da Banda Desenhada e do Surrealismo',
    category: 'banda-desenhada',
    description: 'As máximas expressões visuais da genialidade e imaginação belgas: da "Linha Clara" de Tintim ao enigma surreal de René Magritte.',
    details: 'A Bélgica detém a maior densidade de desenhistas de histórias em quadrinhos (conhecidas localmente como Bande Dessinée ou BD) por quilômetro quadrado no planeta. Ícones globais como Hergé (As Aventuras de Tintim) e Peyo (Os Smurfs) estabeleceram a escola estilística da "Linha Clara", que influenciou gerações de artistas. Paralelamente, no campo pictórico, René Magritte questionou de forma brilhante a linguagem e a semiótica da arte com obras desafiadoras como "A Traição das Imagens" ("Ceci n\'est pas une pipe"), definindo o surrealismo com humor e intelecto de traço refinado.',
    accentColor: 'from-blue-600 to-amber-500',
    extra: {
      audioPlaceholder: 'Áudio Guia: O Legado Visual da Escola de Bruxelas e do Centro Belga de Banda Desenhada (Simulador)'
    }
  },
  {
    id: 'gastronomia',
    title: 'O Legado do Waffle de Liège e os Pralines Recheados',
    category: 'culinária',
    description: 'A excelência da doçaria belga: a ciência do açúcar pérola caramelizado e as patentes históricas de chocolate puro.',
    details: 'Diferente dos waffles comuns, o tradicional Waffle de Liège utiliza uma massa densa fermentada contendo pedaços de "Açúcar Pérola". Ao ser prensado nas chapas de ferro fundido, esse açúcar derrete externamente, formando uma crosta caramelizada crocante que preserva a maciez interna da massa. Na chocolateria, Jean Neuhaus revolucionou a gastronomia em Bruxelas ao inventar o "praline" em 1912 nas luxuosas Galeries Royales Saint-Hubert - um bombom com casca de chocolate fino e recheio cremoso. A legislação belga protege essa iguaria exigindo 100% de manteiga de cacau.',
    accentColor: 'from-amber-800 to-amber-950',
    extra: {
      ingredients: [
        '500g de Farinha de Trigo especial de panificação',
        '20g de Fermento Biológico seco',
        '200ml de Leite integral morno',
        '2 Ovos médios batidos',
        '250g de Manteiga de alta qualidade em ponto de pomada',
        '5g de Sal fino e fava de baunilha natural raspada',
        '200g de Açúcar Pérola Belga (açúcar pérola grosso específico para caramelização)'
      ],
      steps: [
        'Dissolva o fermento biológico seco no leite morno com uma colher de açúcar e deixe espumar por 10 minutos para ativação.',
        'Em um bowl grande, misture a farinha, o sal, os ovos e o leite fermentado ativo até formar uma massa pegajosa. Deixe descansar coberta por 30 minutos em local morno.',
        'Incorpore a manteiga macia em ponto de pomada aos poucos e a baunilha, sovando levemente até a massa absorver a gordura de forma pioneira e homogênea. Deixe descansar por mais 15 minutos.',
        'Adicione delicadamente o Açúcar Pérola na etapa final, misturando com as mãos para distribuir os grãos intactos sem quebrá-los ou dissolvê-los.',
        'Divida a massa em porções regulares de aproximadamente 100g e boleie com cuidado.',
        'Aqueça um ferro de waffle pesado (estilo ferro fundido). Asse cada bola por 3 a 4 minutos. O açúcar pérola nas bordas vai derreter e caramelizar na superfície externa, criando uma crosta crocante e dourada. Deixe esfriar levemente para o caramelo endurecer e sirva.'
      ]
    }
  },
  {
    id: 'linguagem-costumes',
    title: 'O Compromisso à Belga e a Identidade de Fronteira',
    category: 'costumes',
    description: 'A sofisticada engrenagem de negociação linguística e o humor do absurdo como unificador social.',
    details: 'A inexistência de uma única língua comum na Bélgica é resolvida com o reconhecimento de três idiomas oficiais: o Neerlandês (Flandres), o Francês (Valônia) e o Alemão (comunidade de Cantões do Leste). A convivência diária dessas culturas e o constante equilíbrio político geraram o famoso conceito de "Compromis à la belge": a capacidade pragmática de tecer consensos complexos onde todas as partes cedem para manter a unidade estatal ativa. Essa cultura de negociação é complementada pelo "zwanze", um estilo de humor irônico com o qual os belgas lidam com as próprias contradições.',
    accentColor: 'from-red-600 to-yellow-500',
    extra: {
      expressions: [
        { phrase: 'Non peut-être!', meaning: 'Expressão clássica de Bruxelas que significa "sim, com certeza!". Uma ironia linguística refinada que usa duas partículas negativas para formar uma afirmação enfática.' },
        { phrase: 'Savoir quoi', meaning: 'Expressão idiomática utilizada com o sentido de "saber com clareza o que deve ser feito" ou "estar bem informado" (uma tradução direta do padrão estrutural neerlandês aplicado ao francês falado na Bélgica).' },
        { phrase: 'Drève', meaning: 'Termo valão/belga para designar uma alameda, caminho arborizado ou avenida que conduz à entrada de uma propriedade nobre, parque ou castelo.' },
        { phrase: 'Compromis à la belge', meaning: 'O pragmatismo político de buscar acordos extremamente detalhados e criativos para impasses teoricamente insolúveis, mantendo a coesão do país.' }
      ]
    }
  }
] as const;

export const SPORTS_CAMPAIGNS: readonly SportsCampaign[] = [
  {
    year: '1920',
    tournament: 'Olympics',
    opponent: 'Checoslováquia',
    score: '2 - 0',
    stars: ['Robert Coppée', 'Jean De Bie', 'Émile Hanse'],
    manager: 'Raoul Daufresne de la Chevalerie',
    description: 'A conquista mais icônica do futebol nacional belga: a medalha de Ouro nos Jogos Olímpicos de Antuérpia. Em um clima de forte união nacional no pós-guerra, os Diabos Vermelhos venceram a final em um estádio lotado de torcedores apaixonados.',
    tactics: 'Sistema pirâmide clássico da época (2-3-5), focado em trocas de passes curtos no meio-campo e marcação física na defesa.',
    finalResult: 'Medalha de Ouro Olímpica'
  },
  {
    year: '1980',
    tournament: 'Euro',
    opponent: 'Alemanha Ocidental',
    score: '1 - 2',
    stars: ['Jan Ceulemans', 'Jean-Marie Pfaff', 'Eric Gerets'],
    manager: 'Guy Thys',
    description: 'A campanha lendária da Eurocopa de 1980 na Itália. O selecionado belga superou gigantes como a Inglaterra, Espanha e a dona da casa Itália na fase de grupos, conquistando uma das vagas na final europeia mais disputadas de todos os tempos.',
    tactics: 'Compactação tática rigorosa defensiva, marcação por zona por pressão e aplicação impecável da armadilha de impedimento coordenada pelo capitão Gerets.',
    finalResult: 'Vice-Campeã Europeia (Medalha de Prata)'
  },
  {
    year: '1986',
    tournament: 'World Cup',
    opponent: 'Argentina',
    score: '0 - 2',
    stars: ['Enzo Scifo', 'Jean-Marie Pfaff', 'Jan Ceulemans'],
    manager: 'Guy Thys',
    description: 'A campanha histórica da Copa do Mundo no México em 1986. A seleção superou uma oitavas de final histórica contra a União Soviética (4x3 na prorrogação) e eliminou a forte seleção espanhola nos pênaltis, caindo apenas perante o talento esmagador de Diego Maradona.',
    tactics: 'Transições ofensivas rápidas baseadas no sistema 4-4-2, com o talentoso meia Enzo Scifo atuando como cérebro de ligação criativa do time.',
    finalResult: '4º Lugar Mundial'
  },
  {
    year: '2018',
    tournament: 'World Cup',
    opponent: 'França / Inglaterra',
    score: '2 - 0 (Disputa do 3º Lugar)',
    stars: ['Eden Hazard', 'Kevin De Bruyne', 'Romelu Lukaku', 'Thibaut Courtois'],
    manager: 'Roberto Martínez',
    description: 'A consagração internacional da aclamada "Geração de Ouro" belga na Copa da Rússia de 2018. Eliminando o Brasil nas quartas de final com uma exibição de brilhantismo tático de De Bruyne e Hazard, os Red Devils alcançaram o melhor resultado do país na história das Copas.',
    tactics: 'Esquema dinâmico em 3-4-2-1 focado em transições ofensivas verticais extremamente rápidas e liberdade tática total para o trio Hazard, De Bruyne e Lukaku.',
    finalResult: 'Medalha de Bronze (3º Lugar Mundial)'
  },
  {
    year: '1965 - 1978',
    tournament: 'Olympics',
    opponent: 'Rivais da Estrada',
    score: '525 Vitórias Profissionais',
    stars: ['Eddy Merckx (O Canibal)', 'Roger De Vlaeminck', 'Rik Van Looy'],
    manager: 'Ciclismo de Estrada Belga',
    description: 'A Bélgica consolidou-se como a superpotência do ciclismo de estrada clássico. Eddy Merckx redefiniu os limites do esporte ao conquistar 5 vezes o Tour de France, 5 vezes o Giro d\'Italia, 1 Vuelta a España e 3 Campeonatos Mundiais de Ciclismo.',
    tactics: 'Ataques demolidores de longa distância de ritmo incansável ("Merckxismo"), asfixiando os concorrentes taticamente e esgotando sua resistência física.',
    finalResult: '525 Vitórias Profissionais (Recorde Mundial Absoluto)'
  }
] as const;

export const QUIZ_QUESTIONS = [
  {
    question: 'Qual o estopim teatral que deu início à Revolução de Independência da Bélgica em 1830?',
    options: [
      'A ópera "La Muette de Portici" em Bruxelas',
      'Uma peça dramática de Shakespeare em Gante',
      'Um concerto de piano de Frédéric Chopin em Antuérpia',
      'O hino revolucionário "La Brabançonne" cantado nas ruas de Liège'
    ],
    answer: 'A ópera "La Muette de Portici" em Bruxelas',
    explanation: 'Ao ouvirem as árias patrióticas contra o absolutismo na ópera de Daniel Auber, a plateia emocionada saiu às ruas juntando-se aos manifestantes, iniciando a sublevação popular.'
  },
  {
    question: 'Qual das regiões administrativas belgas abriga as colinas florestadas e montanhosas das Ardenas?',
    options: ['Flandres', 'Valônia', 'Bruxelas-Capital', 'Comunidade Germânica'],
    answer: 'Valônia',
    explanation: 'A Valônia, que compõe a porção meridional da Bélgica, abriga o antigo maciço geológico das Ardenas, caracterizado por densas florestas de coníferas e vales fluviais profundos.'
  },
  {
    question: 'Quem inventou o famoso "praline" (bombom de chocolate recheado) em Bruxelas no ano de 1912?',
    options: ['Jean Neuhaus', 'Hergé', 'Victor Horta', 'René Magritte'],
    answer: 'Jean Neuhaus',
    explanation: 'Jean Neuhaus, dono de uma confeitaria farmacêutica na Galerie de la Reine, inventou o praline ao rechear uma casca oca de chocolate fino com cremes de alta doçaria.'
  }
] as const;