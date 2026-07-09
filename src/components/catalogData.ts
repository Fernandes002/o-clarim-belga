export interface SubTopic {
  id: string;
  title: string;
  subtitle: string;
  category: 'esportes' | 'geografia' | 'economia' | string;
  readTime: string;
  disciplines: string[];
  image: string;
  gradient: string;
  teaser: string;
  fullText: string[];
  quotes: string;
  philosopher: string;
}

export const CATALOG_DATA: SubTopic[] = [
  // === CATEGORY: ESPORTES ===
  {
    id: 'dynasty-paves',
    title: 'A Dinastia dos Pavés',
    subtitle: 'O Mosaico das Clássicas da Primavera',
    category: 'esportes',
    readTime: '4 min',
    disciplines: ['História do Esporte', 'Fisiologia'],
    image: 'images/fotos20/250px-eddy_merckx_molteni_1973.jpg',
    gradient: 'from-[#9e1b24] via-black/80 to-black',
    teaser: 'O suplício do paralelepípedo e a resiliência humana nas lendárias provas de estrada.',
    fullText: [
      'As Clássicas da Primavera belgas, com destaque para o Tour de Flandres (Ronde van Vlaanderen) e a Liège-Bastogne-Liège, representam a essência mais pura e bruta do ciclismo de estrada mundial. Realizadas sob as intempéries severas do início do ano, essas competições são caracterizadas pelos temidos "pavés" — trechos históricos pavimentados com paralelepípedos irregulares que desafiam o controle físico e mental dos ciclistas.',
      'A passagem por subidas curtas, porém extremamente íngremes, como o famoso Koppenberg (com inclinação máxima de 22%), exige dos atletas uma potência muscular extraordinária combinada com uma técnica de aderência impecável. A trepidação constante induz fadiga neuromuscular severa e microlesões musculares, exigindo amortecimento biomecânico sofisticado do próprio corpo do ciclista.',
      'Mais do que competições de velocidade pura, as Clássicas belgas são batalhas táticas de posicionamento. Conhecer cada curva estreita, cada direção do vento lateral nas planícies flamengas e a transição exata do asfalto para as pedras medievais é a diferença entre a glória no pódio e uma queda devastadora. É um espetáculo onde o sofrimento físico é elevado à categoria de arte heroica pelas multidões que lotam as margens da estrada.'
    ],
    quotes: 'Nas pedras de Flandres, a dor não é um sinal de fraqueza; é o único elemento de certeza entre o ciclista e a eternidade esportiva.',
    philosopher: 'Eddy Merckx'
  },
  {
    id: 'merckxismo',
    title: 'O Fenômeno Merckxismo',
    subtitle: 'A Filosofia de Eddy Merckx',
    category: 'esportes',
    readTime: '5 min',
    disciplines: ['Sociologia do Esporte', 'Biologia Humana'],
    image: 'images/fotos20/250px-eddy_merckx_molteni_1973.jpg',
    gradient: 'from-[#b45309] via-black/80 to-black',
    teaser: 'A mentalidade insaciável de "O Canibal", que redefiniu os recordes do ciclismo profissional.',
    fullText: [
      'Edouard Louis Joseph Merckx, eternizado como Eddy Merckx e apelidado de "O Canibal", é unanimemente aclamado como o maior ciclista de todos os tempos. Sua filosofia de competição — o Merckxismo — baseava-se em um princípio simples e implacável: atacar sempre, em qualquer terreno, sem conceder trégua aos adversários, mesmo quando a vitória já estava consolidada.',
      'Com um recorde inatingível de 525 vitórias profissionais, Merckx conquistou os maiores marcos: cinco edições do Tour de France, cinco do Giro d’Italia, uma Vuelta a España e três Campeonatos Mundiais de Ciclismo de Estrada. Sua fisiologia era um prodígio da natureza: possuía uma capacidade pulmonar extraordinária e um limiar de lactato absurdamente alto, o que lhe permitia manter ritmos anaeróbicos por períodos prolongados que esgotavam a concorrência.',
      'Sociologicamente, o impacto de Merckx na Bélgica foi o de um poderoso unificador nacional. No auge das fricções linguísticas das décadas de 1960 e 1970, ambas as comunidades flamenga e valona uniam-se para celebrar as façanhas do herói nacional. Sua postura incansável moldou o caráter esportivo belga, estabelecendo um padrão de dedicação que até hoje influencia o treinamento de novos atletas no país.'
    ],
    quotes: 'O dia em que eu largar uma corrida sem a intenção de vencer tudo o que for possível, será o dia em que deixarei de respirar no esporte.',
    philosopher: 'Eddy Merckx (O Canibal)'
  },
  {
    id: 'golden-generation',
    title: 'A Geração de Ouro',
    subtitle: 'A Revolução Tática de 2018',
    category: 'esportes',
    readTime: '4 min',
    disciplines: ['Educação Física', 'Sociologia'],
    image: 'images/fotos20/250px-romelu_lukaku_12.06.2021_cropped.jpg',
    gradient: 'from-blue-700 via-black/80 to-black',
    teaser: 'A análise da brilhante campanha dos Red Devils na Copa do Mundo da Rússia.',
    fullText: [
      'A seleção belga de futebol de 2018, carinhosamente chamada de "Geração de Ouro", conquistou o terceiro lugar na Copa do Mundo da Rússia, alcançando a melhor marca histórica do país. Sob o comando de Roberto Martínez, a equipe exibiu um futebol caracterizado pela inteligência coletiva, verticalidade fulminante e uma flexibilidade tática que desestruturou as defesas mais sólidas do torneio.',
      'A partida histórica contra o Brasil nas quartas de final (2x1) permanece como uma obra-prima de estratégia tática. Martínez reposicionou Kevin De Bruyne como um "falso nove" dinâmico, abrindo espaço para a velocidade explosiva de Romelu Lukaku pelas pontas e a condução genial de Eden Hazard. Essa mudança anulou os volantes adversários e criou transições ofensivas cirúrgicas que definiram a vitória belga.',
      'O sucesso dessa geração é o resultado de uma reestruturação profunda iniciada no início dos anos 2000 pela Federação Belga. Foi implementado um currículo de treinamento unificado focado no sistema 4-3-3, priorizando a visão de jogo, agilidade cognitiva e técnica individual. Este modelo prova que o planejamento de longo prazo e a ciência esportiva são capazes de transformar um país pequeno em uma superpotência global de futebol.'
    ],
    quotes: 'A tática perfeita não anula a criatividade; ela cria o espaço seguro onde o gênio individual pode se manifestar sem amarras.',
    philosopher: 'Kevin De Bruyne'
  },
  {
    id: 'cycling-longevity',
    title: 'Ciclismo & Longevidade',
    subtitle: 'A Biologia da Mobilidade Ativa',
    category: 'esportes',
    readTime: '4 min',
    disciplines: ['Biologia Humana', 'Saúde Pública'],
    image: 'images/fotos20/250px-life_expectancy_vs_spending_oecd.png',
    gradient: 'from-[#059669] via-black/80 to-black',
    teaser: 'Como a cultura urbana das bicicletas impulsiona a expectativa de vida belga.',
    fullText: [
      'Na Bélgica, a bicicleta transcende o esporte de alta performance; ela é uma ferramenta vital de saúde pública e mobilidade diária. Cerca de 10% de todos os deslocamentos diários no país são realizados por bicicletas, amparados por uma infraestrutura cicloviária integrada e políticas governamentais que estimulam o transporte ativo contínuo.',
      'Do ponto de vista da biologia médica, a prática constante do ciclismo atua diretamente na melhora da capacidade cardiorrespiratória e no controle do perfil lipídico. O exercício de baixo impacto protege as articulações dos membros inferiores enquanto estimula a liberação de endorfinas, promovendo neuroplasticidade e combatendo o declínio cognitivo associado ao envelhecimento.',
      'Estudo epidemiológicos conduzidos nas universidades de Lovaina e Liège revelam que cidadãos que adotam o ciclismo como meio principal de locomoção apresentam taxas significativamente menores de incidência de diabetes tipo II e hipertensão crônica. Esse estilo de vida ativo é um dos pilares que sustentam a alta expectativa de vida média do país, atualmente estabelecida em 82 anos.'
    ],
    quotes: 'A bicicleta é a máquina mais eficiente do ponto de vista terapêutico: ela cura as artérias do indivíduo e as vias de tráfego de uma metrópole.',
    philosopher: 'Estudo de Medicina Preventiva de Lovaina'
  },
  {
    id: 'antwerp-1920',
    title: 'O Ouro de Antuérpia',
    subtitle: 'Futebol e Reerguimento Social',
    category: 'esportes',
    readTime: '5 min',
    disciplines: ['História', 'Sociologia'],
    image: 'images/fotos20/250px-antwerpen1897.png',
    gradient: 'from-[#7c3aed] via-black/80 to-black',
    teaser: 'O inesquecível triunfo olímpico de 1920 que cicatrizou os traumas da Grande Guerra.',
    fullText: [
      'Em 1920, a cidade belga de Antuérpia sediou os Jogos Olímpicos em um cenário pós-guerra devastador. Com o país ainda em processo de reconstrução material e psicológica após a brutal ocupação alemã na Primeira Guerra Mundial, as Olimpíadas funcionaram como uma plataforma de afirmação nacional e resiliência coletiva.',
      'O ápice esportivo daquela edição foi a conquista histórica da Medalha de Ouro no futebol masculino pelos Diabos Vermelhos. Sob a liderança do capitão Émile Hanse, os belgas superaram a forte equipe da Checoslováquia na final, em um estádio tomado pela emoção de torcedores que enxergavam no futebol um símbolo de sobrevivência e orgulho patriótico.',
      'Este feito esportivo marcou o nascimento oficial do futebol moderno na Bélgica como um elemento central de identidade. A medalha dourada serviu como um bálsamo social que ajudou a aproximar operários e burgueses de diferentes dialetos sob o mesmo pavilhão tricolor, demonstrando a potência do esporte na coesão comunitária em períodos de crise.'
    ],
    quotes: 'Em Antuérpia, cada gol marcado não era apenas uma contagem esportiva; era o som da reconstrução de uma pátria livre.',
    philosopher: 'Registros do Comitê Olímpico Belga de 1920'
  },

  // === CATEGORY: GEOGRAFIA ===
  {
    id: 'polders-conquest',
    title: 'A Conquista dos Pôlderes',
    subtitle: 'Engenharia Civil Contra o Mar',
    category: 'geografia',
    readTime: '5 min',
    disciplines: ['Geografia Física', 'Engenharia'],
    image: 'images/fotos20/waterwise-website-banner-too-much-water.jpg',
    gradient: 'from-[#0369a1] via-black/80 to-black',
    teaser: 'A fantástica epopeia hidráulica de Flandres para recuperar solos agrícolas férteis.',
    fullText: [
      'A região setentrional de Flandres apresenta uma das maiores realizações da engenharia hidráulica mundial: o sistema de pôlderes. Pôlderes são porções de terra baixas, situadas originalmente abaixo do nível da maré alta, que foram isoladas do mar por meio de diques artificiais e drenadas continuamente para se tornarem utilizáveis na agricultura e urbanização.',
      'O processo remonta à Idade Média, quando ordens monásticas começaram a erguer os primeiros diques de contenção de terra. Com o avanço tecnológico, foram incorporados moinhos de drenagem e, posteriormente, potentes estações de bombeamento elétrico. A terra resgatada é composta por sedimentos marinhos e fluviais extremamente férteis, ideais para o plantio intensivo.',
      'Hoje, diante dos cenários severos de mudanças climáticas e elevação do nível do Mar do Norte, os pôlderes belgas enfrentam desafios existenciais. É necessária uma monitoração digital constante dos níveis freáticos e o fortalecimento de comportas automáticas integradas para evitar a salinização do solo e inundações catastróficas, provando que a convivência com as forças marítimas exige vigilância científica eterna.'
    ],
    quotes: 'Deus criou o mundo, mas foram os flamengos que esculpiram a própria terra sob a qual caminham em Flandres.',
    philosopher: 'Provérbio Geográfico Medieval'
  },
  {
    id: 'ardennes-secret',
    title: 'O Segredo das Ardenas',
    subtitle: 'O Coração Geológico Valão',
    category: 'geografia',
    readTime: '4 min',
    disciplines: ['Biologia Ambiental', 'Geologia'],
    image: 'images/fotos20/500px-chateau_forestier_des_trois_fontaines_dscf7057.jpg',
    gradient: 'from-[#047857] via-black/80 to-black',
    teaser: 'Colinas acidentadas, cavernas profundas e a biodiversidade intocada do sul belga.',
    fullText: [
      'Em total contraste com as planícies costeiras do norte, o extremo sul da Bélgica abriga o antigo maciço geológico das Ardenas. Formado durante a orogênese herciniana há centenas de milhões de anos, este planalto de rochas xistosas e calcárias foi esculpido por vales profundos de rios sinuosos como o Meuse e o Ourthe.',
      'As Ardenas constituem o maior remanescente florestal do país, cobertas por densas florestas mistas de faias, carvalhos e pinheiros-silvestres. A área abriga também formações cársticas espetaculares, como as Cavernas de Han-sur-Lesse, criadas pela dissolução ácida da rocha calcária por águas subterrâneas ao longo de milênios.',
      'Ecologicamente, o maciço é um refúgio crucial para a fauna europeia. Seus ecossistemas protegidos oferecem habitat para cervos, raposas, gatos-selvagens e uma variedade de aves de rapina. Além disso, as fontes termais da cidade de Spa fornecem água mineral puríssima filtrada naturalmente pelas camadas de rocha sedimentar das colinas, renomada mundialmente por suas propriedades minerais terapêuticas.'
    ],
    quotes: 'As Ardenas são o testamento físico da história da Terra: um labirinto de pedra e madeira que guarda o ar puro de nossa federação.',
    philosopher: 'Relatório do Ministério da Conservação Ambiental'
  },
  {
    id: 'industrial-ecology',
    title: 'Ecologia Industrial',
    subtitle: 'Desenvolvimento e Impacto Antrópico',
    category: 'geografia',
    readTime: '4 min',
    disciplines: ['Geografia Humana', 'Ciências Ambientais'],
    image: 'images/fotos20/restoring_wetlands_in_flanders_to_fight_climate_change_.png',
    gradient: 'from-[#b45309] via-black/80 to-black',
    teaser: 'Como um dos países mais povoados do planeta concilia megaportos e biomas naturais.',
    fullText: [
      'A Bélgica é um dos países de maior densidade demográfica e industrialização do planeta. Essa forte presença humana (pressão antrópica) gerou desafios ecológicos históricos graves, incluindo a contaminação de bacias hidrográficas por efluentes industriais e altos índices de fragmentação de habitats florestais causados por redes viárias densas.',
      'Para contrapor esses impactos, o país tornou-se pioneiro em "Ecologia Industrial" e economia circular. Cidades industriais como Liège e Antuérpia implementaram simbioses industriais onde os resíduos térmicos e materiais de uma fábrica são utilizados como insumos energéticos por instalações vizinhas, reduzindo drasticamente a pegada ecológica global.',
      'Ao mesmo tempo, as legislações de Flandres e da Valônia criaram corredores ecológicos artificiais de passagem de fauna sobre rodovias (ecodutos). Essas passagens permitem a reconectividade de biomas florestais isolados, protegendo a integridade genética de mamíferos terrestres e demonstrando que o progresso econômico de alto nível pode coexistir com a responsabilidade biológica.'
    ],
    quotes: 'A verdadeira indústria sustentável não é aquela que deixa de produzir; é aquela que aprende a imitar o ciclo fechado de uma floresta.',
    philosopher: 'Pioneiros da Simbiose Industrial Belga'
  },
  {
    id: 'brussels-heat-island',
    title: 'Bruxelas & a Ilha de Calor',
    subtitle: 'Microclima e Áreas Periurbanas',
    category: 'geografia',
    readTime: '5 min',
    disciplines: ['Climatologia', 'Urbanismo'],
    image: 'images/fotos20/250px-autumn_light_in_the_sonian_forest.jpg',
    gradient: 'from-[#475569] via-black/80 to-black',
    teaser: 'O desafio térmico urbano e o papel salvador da Floresta de Soignes.',
    fullText: [
      'Como grande polo decisório global e centro urbano consolidado, a região de Bruxelas-Capital convive com o fenômeno climatológico da Ilha de Calor Urbana. A substituição de solos naturais por superfícies impermeáveis de asfalto e concreto, associada ao calor gerado pelo tráfego e calefação predial, faz com que a temperatura no centro da cidade seja até 5°C superior à das áreas rurais periféricas.',
      'Este microclima urbano altera a dinâmica de umidade local e acentua os picos de calor durante as estações quentes, trazendo riscos para as populações vulneráveis. Como resposta de adaptação climática, a cidade investe na arborização urbana sistemática e em coberturas verdes reflexivas em edifícios governamentais para mitigar a radiação térmica.',
      'O principal trunfo ambiental contra este estresse térmico é a magnífica Floresta de Soignes (Forêt de Soignes). Situada na borda periurbana de Bruxelas, esta catedral verde de faias centenárias funciona como um pulmão purificador e refrigerador natural gigante. A floresta absorve toneladas de óxidos de carbono, estabiliza o ciclo de chuvas regionais e serve de refúgio vital de lazer para milhões de habitantes.'
    ],
    quotes: 'A Floresta de Soignes é o amortecedor térmico de nossa capital: sem suas árvores majestosas, Bruxelas sufocaria sob o asfalto do progresso.',
    philosopher: 'Estudo Climatológico Universitário de Bruxelas'
  },
  {
    id: 'boar-return',
    title: 'O Retorno do Javali',
    subtitle: 'Equilíbrio Trófico nas Ardenas',
    category: 'geografia',
    readTime: '4 min',
    disciplines: ['Biologia', 'Zoologia'],
    image: 'images/fotos20/500px-foret_de_soignes_2007-11-04-4.jpg',
    gradient: 'from-[#065f46] via-black/80 to-black',
    teaser: 'O ressurgimento do grande mamífero símbolo das florestas temperadas belgas.',
    fullText: [
      'O javali europeu (Sus scrofa) é o símbolo biológico mais tradicional das florestas acidentadas das Ardenas. Após períodos de acentuado declínio populacional no século passado decorrentes da caça predatória e destruição de habitat, a espécie vivenciou um expressivo ressurgimento demográfico apoiado por leis rígidas de conservação e manejo silvestre.',
      'Como um grande mamífero omnívoro e "engenheiro do solo", o javali desempenha um papel ecológico insubstituível. Ao fossar o solo florestal com seu focinho em busca de raízes, tubérculos e larvas de insetos, ele revolve e areja a terra vegetal, facilitando a penetração de sementes e nutrientes minerais que estimulam a regeneração espontânea das plantas.',
      'No entanto, a superpopulação de javalis traz conflitos socioambientais complexos, incluindo danos severos a lavouras limítrofes e riscos de transmissão de patógenos à pecuária. O desafio contemporâneo dos biólogos belgas reside em estruturar um manejo populacional ético que resguarde a função benéfica desse animal nos biomas florestais nativos sem comprometer a segurança rural.'
    ],
    quotes: 'O focinho do javali revolve a terra das Ardenas de forma muito mais inteligente e integrada do que qualquer arado mecânico humano.',
    philosopher: 'Jean-Pierre Gérard (Biólogo de Vida Silvestre da Valônia)'
  },

  // === CATEGORY: ECONOMIA ===
  {
    id: 'antwerp-port',
    title: 'O Gigante de Antuérpia',
    subtitle: 'Logística de Escala Global',
    category: 'economia',
    readTime: '4 min',
    disciplines: ['Macroeconomia', 'Logística'],
    image: 'images/fotos20/250px-samsun_75.jpg',
    gradient: 'from-[#dc2626] via-black/80 to-black',
    teaser: 'O segundo maior porto da Europa e sua conexão vital com a balança de pagamentos belga.',
    fullText: [
      'O Porto de Antuérpia-Bruges (Port of Antwerp-Bruges), localizado no estuário do rio Escalda, é o grande coração logístico e industrial da economia belga e o segundo maior porto marítimo do continente europeu. Funcionando como um imenso portal de comércio global, o porto movimenta anualmente mais de 280 milhões de toneladas de mercadorias brutas e contêineres.',
      'A infraestrutura portuária destaca-se por sua extrema eficiência multimodal: conexões diretas por ferrovias de alta capacidade, canais fluviais artificiais e rodovias articuladas distribuem cargas em poucas horas por todo o centro industrial da Eurozona. O porto sedia também o maior complexo químico integrado da Europa, processando e agregando alto valor de refino a insumos petrolíferos primários.',
      'Econômica e financeiramente, o porto é o maior motor gerador de empregos diretos e indiretos do país, respondendo por uma parcela vital das divisas nacionais. Sua constante automação robótica e transição pioneira para o uso de hidrogênio verde no transporte portuário consolidam sua liderança comercial na infraestrutura da Europa moderna.'
    ],
    quotes: 'Antuérpia não é apenas o portal geográfico da Bélgica; é a grande válvula de pulsação e bombeamento de riqueza de todo o continente europeu.',
    philosopher: 'Análise de Comércio da Comissão Europeia'
  },
  {
    id: 'diamond-cutting',
    title: 'A Lapidação do Diamante',
    subtitle: 'Precisão Matemática e Mercado de Luxo',
    category: 'economia',
    readTime: '5 min',
    disciplines: ['Geometria Espacial', 'Finanças'],
    image: 'images/fotos20/250px-antwerpen1897.png',
    gradient: 'from-[#ca8a04] via-black/80 to-black',
    teaser: 'O distrito diamantífero de Antuérpia e o rigor geométrico do reflexo perfeito.',
    fullText: [
      'Aproximadamente 84% de todos os diamantes brutos e 50% de todos os diamantes lapidados do planeta passam pelo famoso distrito de comércio diamantífero de Antuérpia, conhecido como "Diamond Square Mile". Essa extraordinária concentração comercial baseia-se em séculos de tradição, leis de segurança rigorosas e alto conhecimento técnico.',
      'A lapidação belga de excelência é um estudo prático de física óptica e geometria tridimensional espacial. Para obter o "brilho perfeito" (reflexão interna total da luz), os artesãos e modeladores matemáticos calculam ângulos exatos de facetas sobre o cristal bruto. Qualquer erro milimétrico de angulação destrói o índice de refração da pedra, reduzindo drasticamente seu valor de mercado.',
      'A introdução de softwares de inteligência geométrica tridimensional e escaneamento a laser de alta exatidão permitiu mapear inclusões minerais internas nas pedras brutas antes do primeiro corte físico. Essa inovação une a arte tradicional de lapidação à precisão computacional contemporânea, mantendo Antuérpia como o principal referencial global de confiança e luxo.'
    ],
    quotes: 'O brilho perfeito de um diamante belga não provém do solo de onde foi extraído; provém da exatidão geométrica de quem o esculpiu em Antuérpia.',
    philosopher: 'Diretrizes de Qualidade do Alto Conselho de Diamantes de Antuérpia'
  },
  {
    id: 'export-engine',
    title: 'O Motor Exportador',
    subtitle: 'Por que a Bélgica Exporta 80% do PIB',
    category: 'economia',
    readTime: '4 min',
    disciplines: ['Economia Internacional', 'Matemática'],
    image: 'images/fotos20/shutterstock-353542667.jpg',
    gradient: 'from-[#0284c7] via-black/80 to-black',
    teaser: 'A matemática da balança comercial de um país altamente industrializado.',
    fullText: [
      'A Bélgica ostenta uma das economias mais abertas e orientadas à exportação do mundo. Devido ao seu mercado doméstico relativamente pequeno e excelente localização geográfica, a indústria belga especializou-se em importar matérias-primas primárias, processá-las com alto valor tecnológico agregado e exportar o produto finalizado para o mercado global.',
      'A proporção matemática de exportações industriais em relação ao PIB nacional ultrapassa extraordinários 80%, um dos maiores indicadores macroeconômicos do planeta. Os principais produtos de escoamento são compostos químicos de alto refino, vacinas e produtos farmacêuticos elaborados, plásticos poliméricos avançados, autopeças e diamantes lapidados.',
      'Este modelo econômico de "processamento-exportação" exige uma gestão logística rigorosa e estabilidade monetária. Qualquer variação nos preços internacionais de energia e recursos minerais impacta diretamente os custos de manufatura interna, exigindo sofisticação contínua na eficiência produtiva e acordos comerciais sólidos com parceiros da União Europeia.'
    ],
    quotes: 'A Bélgica encontrou sua soberania na abertura comercial: somos a grande fábrica refinadora de alta tecnologia que abastece o planeta.',
    philosopher: 'Boletim Macroeconômico da Federação Industrial Belga'
  },
  {
    id: 'brussels-eurozone',
    title: 'Bruxelas: Hub Europeu',
    subtitle: 'O Centro Decisório Financeiro',
    category: 'economia',
    readTime: '4 min',
    disciplines: ['Geopolítica', 'Finanças Públicas'],
    image: 'images/fotos20/shutterstock_439365289_0.jpg.webp',
    gradient: 'from-[#4f46e5] via-black/80 to-black',
    teaser: 'O peso das decisões regulatórias e o coração institucional do Euro.',
    fullText: [
      'Bruxelas-Capital não é apenas a capital do Reino da Bélgica; ela é reconhecida como a capital de fato de toda a União Europeia. Sediando as instituições executivas do bloco comunitário, a metrópole funciona como o principal epicentro de regulação financeira, legislativa e monetária de um dos maiores mercados do globo.',
      'As decisões econômicas e diretrizes regulatórias elaboradas no bairro europeu de Bruxelas moldam as práticas corporativas de milhares de empresas mundialmente. Padrões ecológicos, regras de livre concorrência comercial e normas de proteção de dados (como o Regulamento Geral de Proteção de Dados) irradiam-se a partir de Bruxelas para o mercado internacional.',
      'Além disso, a presença de milhares de diplomatas, lobistas corporativos, delegações oficiais e o quartel-general político da Organização do Tratado do Atlântico Norte (OTAN) confere à cidade uma impressionante infraestrutura de turismo de negócios e serviços financeiros, gerando alta receita e consolidando o país como o principal hub decisório do ocidente.'
    ],
    quotes: 'Bruxelas é o compasso que define a direção do comércio global: cada regulamento escrito em nossa capital reverbera em todas as bolsas do mundo.',
    philosopher: 'Jean-Francois Dupont (Catedrático de Economia Política de Bruxelas)'
  },
  {
    id: 'biotech-chemistry',
    title: 'Química e Biotecnologia',
    subtitle: 'A Liderança Farmacêutica Belga',
    category: 'economia',
    readTime: '4 min',
    disciplines: ['Biotecnologia', 'Macroeconomia'],
    image: 'images/fotos20/250px-nieuw_hospitaal_kortrijk.jpg',
    gradient: 'from-[#0d9488] via-black/80 to-black',
    teaser: 'O polo de inovação científica belga na produção de medicamentos globais.',
    fullText: [
      'O setor de química fina, ciências da vida e biotecnologia representa um dos pilares mais inovadores e valiosos da economia de exportação da Bélgica. O país consolidou-se como um dos principais líderes globais na pesquisa, desenvolvimento clínico e exportação em larga escala de vacinas vitais, imunoterápicos e medicamentos de alta patente.',
      'Esta liderança científica baseia-se em um modelo integrado de "hubs acadêmicos e industriais" (clusters). Grandes corporações farmacêuticas globais operam em estreita colaboração com institutos de pesquisa das universidades belgas, compartilhando infraestrutura de ponta e capital humano qualificado sob regulamentações ágeis de bioética.',
      'Durante crises de saúde globais, a infraestrutura farmacêutica belga provou-se essencial, sendo o principal ponto de fabricação e distribuição mundial de centenas de milhões de doses de vacinas contra patógenos respiratórios. O setor destaca-se também pelo alto nível de investimentos em Pesquisa e Desenvolvimento (P&D), garantindo o futuro do país na vanguarda da medicina molecular.'
    ],
    quotes: 'A Bélgica encontrou sua liderança sanitária aliando universidades de ponta a parques de biotecnologia integrados.',
    philosopher: 'Inovação em Saúde: Relatório da Organização Mundial do Comércio'
  }
];

export const KNOWLEDGE_CHALLENGES: Record<string, {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}> = {
  'dynasty-paves': {
    question: "Qual é a subida de paralelepípedos com inclinação máxima de 22% mencionada?",
    options: ["Koppenberg", "Muur van Geraardsbergen", "Paterberg"],
    correct: "Koppenberg",
    explanation: "O Koppenberg é uma das subidas mais íngremes e temidas do Tour de Flandres, chegando a 22% de inclinação máxima sobre pedras medievais escorregadias."
  },
  'merckxismo': {
    question: "Quantas vitórias profissionais obteve Eddy Merckx, o lendário 'Canibal'?",
    options: ["325 vitórias", "425 vitórias", "525 vitórias"],
    correct: "525 vitórias",
    explanation: "Eddy Merckx acumulou um recorde absoluto de 525 vitórias profissionais na carreira, sendo consagrado o maior ciclista da história."
  },
  'golden-generation': {
    question: "Que inovação tática Roberto Martínez usou contra o Brasil na Copa de 2018?",
    options: ["Kevin De Bruyne de 'Falso Nove'", "Linha defensiva de 5 zagueiros", "Romelu Lukaku como volante de marcação"],
    correct: "Kevin De Bruyne de 'Falso Nove'",
    explanation: "Martinez reposicionou De Bruyne como falso nove, abrindo espaço para a velocidade de Lukaku e a genialidade de Eden Hazard."
  },
  'cycling-longevity': {
    question: "Qual porcentagem aproximada dos deslocamentos urbanos diários é feita de bike na Bélgica?",
    options: ["Cerca de 2%", "Cerca de 10%", "Cerca de 35%"],
    correct: "Cerca de 10%",
    explanation: "Aproximadamente 10% dos deslocamentos cotidianos no país ocorrem por bicicleta, impulsionados pela infraestrutura integrada de Flandres e da Valônia."
  },
  'antwerp-1920': {
    question: "Em qual esporte a seleção belga conquistou o marcante Ouro Olímpico em 1920?",
    options: ["Futebol masculino", "Ciclismo de pista", "Ginástica de solo"],
    correct: "Futebol masculino",
    explanation: "A seleção belga de futebol masculino ganhou a histórica medalha de ouro nas Olimpíadas de Antuérpia de 1920, unindo o país no pós-guerra."
  },
  'polders-conquest': {
    question: "O que são geograficamente os 'pôlderes' construídos em Flandres?",
    options: ["Terras baixas conquistadas e drenadas do mar", "Canais artificiais subterrâneos", "Florestas cultivadas sobre pedras"],
    correct: "Terras baixas conquistadas e drenadas do mar",
    explanation: "Pôlderes são extensões planas situadas abaixo do nível da maré alta que foram isoladas por diques e drenadas com moinhos e bombas."
  },
  'ardennes-secret': {
    question: "De qual cidade das Ardenas provém a famosa água mineral puríssima exportada globalmente?",
    options: ["Liège", "Spa", "Dinant"],
    correct: "Spa",
    explanation: "A cidade de Spa é famosa por suas fontes termais e água filtrada naturalmente por rochas sedimentares das colinas das Ardenas."
  },
  'industrial-ecology': {
    question: "Qual mecanismo de travessia foi criado para reconectar ecossistemas divididos por rodovias densas?",
    options: ["Ecodutos (pontes de fauna verde)", "Ciclovias suspensas", "Túneis fluviais artificiais"],
    correct: "Ecodutos (pontes de fauna verde)",
    explanation: "Ecodutos são pontes verdes cobertas de terra e árvores que cruzam rodovias, permitindo que a fauna silvestre transite em segurança."
  },
  'brussels-heat-island': {
    question: "Qual é o principal pulmão florestal que ameniza o estresse térmico de Bruxelas?",
    options: ["Floresta de Soignes", "Parque Cinquentenário", "Hallerbos"],
    correct: "Floresta de Soignes",
    explanation: "A majestosa Floresta de Soignes abriga faias centenárias na borda periurbana de Bruxelas, atuando como um poderoso ar condicionado natural."
  },
  'boar-return': {
    question: "Por que os javalis são considerados benéficos para a ecologia da floresta temperada?",
    options: ["Porque reviram a terra oxigenando e plantando sementes", "Porque constroem diques nos rios das colinas", "Porque combatem aves de rapina invasoras"],
    correct: "Porque reviram a terra oxigenando e plantando sementes",
    explanation: "Ao fossar o solo em busca de tubérculos, o javali areja a terra vegetal e facilita a germinação espontânea de árvores nativas."
  },
  'antwerp-port': {
    question: "Qual a posição do Porto de Antuérpia-Bruges em volume no continente europeu?",
    options: ["Primeiro lugar", "Segundo maior porto", "Quinto maior porto"],
    correct: "Segundo maior porto",
    explanation: "O Porto de Antuérpia-Bruges é o segundo maior da Europa, movimentando mais de 280 milhões de toneladas de carga por ano."
  },
  'diamond-cutting': {
    question: "Qual a porcentagem aproximada de diamantes brutos que passam por Antuérpia?",
    options: ["Aproximadamente 30%", "Aproximadamente 50%", "Aproximadamente 84%"],
    correct: "Aproximadamente 84%",
    explanation: "O distrito diamantífero de Antuérpia centraliza impressionantes 84% do comércio mundial de pedras brutas."
  },
  'export-engine': {
    question: "Aproximadamente qual porcentagem do PIB belga é representada pelas exportações industriais?",
    options: ["Cerca de 25%", "Cerca de 50%", "Mais de 80%"],
    correct: "Mais de 80%",
    explanation: "Como uma economia extremamente aberta e focada em refino tecnológico avançado, as exportações belgas ultrapassam 80% do PIB nacional."
  },
  'brussels-eurozone': {
    question: "Que famosa diretriz de privacidade de dados nasceu em Bruxelas e impactou o mundo?",
    options: ["Regulamento Geral de Proteção de Dados (RGPD)", "Tratado de Schengen", "Ato de Concorrência da União"],
    correct: "Regulamento Geral de Proteção de Dados (RGPD)",
    explanation: "O RGPD regulamentou de forma rigorosa a privacidade do consumidor global a partir do centro regulatório de Bruxelas."
  },
  'biotech-chemistry': {
    question: "Qual o principal diferencial que impulsiona o hub biotecnológico e químico belga?",
    options: ["Integração integrada entre universidades acadêmicas e corporações em P&D", "Mão de obra barata não qualificada", "Isenção total de tarifas alfandegárias portuárias"],
    correct: "Integração integrada entre universidades acadêmicas e corporações em P&D",
    explanation: "O ecossistema belga une grandes empresas farmacêuticas a talentos de excelência de universidades como Lovaina e Liège em inovação molecular."
  }
};
