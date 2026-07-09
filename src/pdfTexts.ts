export interface ParagraphGroup {
  title?: string;
  paragraphs: string[];
  diagram?: string;
}

export interface PDFCategory {
  title: string;
  subtitle: string;
  intro?: string;
  sections: ParagraphGroup[];
}

export interface PDFTexts {
  small: PDFCategory;
  large: PDFCategory;
}

export const PDF_TEXTS: Record<string, PDFTexts> = {
  'historia-politica': {
    small: {
      title: 'História e Política da Bélgica',
      subtitle: 'Das origens feudais à complexa engrenagem do Estado federal',
      intro: 'Com base nos textos que você enviou da Wikipédia, estruturei um conteúdo completo, aprofundado e dividido em seções adequadas para o design do seu site ("O Clarim Belga"). Este texto integra os aspectos exigidos pelo seu grupo: História (cronologia e fatos), Sociologia (relações de poder, divisão linguística, impactos do colonialismo) e Filosofia (ética, direitos humanos e teoria do Estado).',
      sections: [
        {
          title: 'I. DAS ORIGENS CELTAS À DOMINAÇÃO ESPANHOLA',
          paragraphs: [
            'A história da Bélgica remonta a antes do moderno Estado soberano. No período clássico, os belgas formavam na Gália do Norte uma grande federação territorial de tribos. Júlio César liderou a submissão das forças locais entre 59 e 52 a.C., estendendo as fronteiras romanas e denominando a província setentrional de Gália Belgica. César registrou em seus escritos (Commentarii de Bello Gallico) que os belgas eram os mais bravos de toda a Gália devido à sua distância da civilização romana e proximidade com as tribos germânicas.',
            'No século V, com o recuo do Império Romano, os francos ocuparam o norte, enquanto o sul manteve a predominância românica, originando as bases das comunidades latinas dos valões e germânicas dos flamengos. Dividida pelo histórico Tratado de Verdun (843), a região ao oeste do rio Escalda passou ao reino francês (Frância Ocidental), enquanto o leste ligou-se à Germânia (Frância Oriental/Lotharingia), fixando precocemente os rumos da divisão linguística atual.',
            'Sob o controle do Ducado de Borgonha no século XV, a Bélgica viveu um florescimento comercial marcante sob a tutela de Filipe, o Bom. O soberano impulsionou as artes plásticas primitivas e unificou o poder legal, protegendo o florescer econômico da tecelagem flamenga e de mercados proeminentes.'
          ]
        },
        {
          title: 'II. O PERÍODO SOB AS COROAS DE CASTELA E DA ÁSTRIA',
          paragraphs: [
            'Com a abdicação do imperador Carlos V em 1556, os territórios dos Países Baixos foram legados a seu filho, Filipe II, integrando a coroa da Espanha Habsburga. Essa coletividade de estados ficou conhecida como Países Baixos Espanhóis, tendo Bruxelas como sua capital administrativa.',
            'A imposição de medidas severas de contrarreforma católica por Filipe II desencadeou a Guerra dos Oitenta Anos (1568). Enquanto o norte calvinista declarou independência para formar as Províncias Unidas, as províncias do sul permaneceram sob o controle espanhol devido à forte presença da fé católica romana. Sob a administração dos arquiduques Alberto VII e Isabel Clara Eugênia, a região experimentou estabilidade econômica e uma era de ouro cultural ilustrada pela arte barroca de Peter Paul Rubens.',
            'Pelo Tratado de Utrecht (1713), que encerrou a Guerra de Sucessão Espanhola, o controle da região foi transferido para a monarquia Habsburga da Áustria, instituindo os Países Baixos Austríacos. Esse período durou até o final do século XVIII, marcado pelas reformas administrativas do imperador José II, que desencadearam a Revolução de Brabante (1789). Posteriormente, as guerras da Revolução Francesa culminaram na anexação do território pela República Francesa em 1795.'
          ]
        },
        {
          title: 'III. A REVOLUÇÃO DE 1830 E A FORMAÇÃO DO ESTADO BELGA',
          paragraphs: [
            'Após a queda de Napoleão Bonaparte em 1815, o Congresso de Viena determinou a fusão das províncias belgas com o norte para criar o Reino Unido dos Países Baixos, sob o governo do rei protestante Guilherme I. Contudo, as barreiras culturais, religiosas e econômicas acumuladas ao longo de séculos criaram atritos profundos. A população do sul, majoritariamente católica e de língua francesa, considerava o governo do norte autoritário e centralizador.',
            'Em 25 de agosto de 1830, a representação da ópera patriótica A Muda de Portici em Bruxelas acendeu o estopim da Revolução Belga. Os protestos populares transformaram-se rapidamente em um levante armado. As tropas holandesas bateram em retirada devido à forte resistência urbana e à deserção de recrutas belgas.',
            'Em novembro de 1830, um Congresso Nacional foi eleito para redigir a Constituição da Bélgica, promulgada em 7 de fevereiro de 1831. Sob a perspectiva da Filosofia Política, o documento foi um marco do liberalismo do século XIX:',
            '- Instituiu uma Monarquia Constitucional Popular (onde o rei jura respeito à Constituição).',
            '- Garantiu a separação de poderes (Executivo, Legislativo e Judiciário).',
            '- Assegurou liberdades civis fundamentais, como as liberdades de expressão, imprensa, culto e associação.',
            'Para ocupar o trono, o Congresso coroou o príncipe Leopoldo de Saxe-Coburgo-Gota como Leopoldo I, o primeiro Rei dos Belgas, em 21 de julho de 1831.'
          ]
        },
        {
          title: 'IV. O IMPERIALISMO BELGA E A EXPLORAÇÃO DO CONGO',
          paragraphs: [
            'A ascendensão de Leopoldo II em 1865 alterou drasticamente a atuação internacional do país. Impulsionado pela ambição econômica pessoal e pela crença de que as colônias eram a chave para a soberania nacional, Leopoldo II utilizou de forte articulação diplomática na Conferência de Berlim (1884–1885) para obter o controle pessoal de um vasto território na bacia do rio Congo.',
            'O território foi denominado Estado Livre do Congo, uma união pessoal governada pelo próprio monarca como sua propriedade privada, sem qualquer fiscalização do parlamento belga. Com o avanço da industrialização ocidental e a explosão da demanda mundial por borracha e marfim na década de 1890, o rei implementou um regime de exploração implacável do trabalho forçado.',
            'Perspectiva Sociológica e Ética (Filosofia): A exploração do Congo constitui um dos episódios mais severos do neoimperialismo europeu:',
            '- Práticas de Violência Coercitiva: A imposição de cotas de produção de borracha era assegurada pela Force Publique (uma milícia armada). O não cumprimento das metas resultava em execuções sumárias, sequestro de mulheres, incineração de aldeias e a mutilação sistemática de mãos e pés de homens, mulheres e crianças.',
            '- Impacto Demográfico: Estimativas de mortes causadas direta ou indiretamente (por fome, fadiga extrema e epidemias como a doença do sono) variam de 1 milhão a 15 milhões de congoleses.',
            '- A Crítica e o Fim do Estado Livre: Relatórios de denúncia, como o célebre Casement Report (1904) elaborado pelo cônsul britânico Roger Casement, e campanhas lideradas pelo jornalista E.D. Morel expuseram a brutalidade à comunidade internacional. Diante das pressões externas e internas, o parlamento belga forçou Leopoldo II a ceder o controle do território ao Estado em 15 de novembro de 1908, transformando-o na colônia oficial do Congo Belga, que se manteve até a independência do país em 1960.'
          ]
        },
        {
          title: 'V. CONFLITOS MODERNOS E A OCUPAÇÃO NAS GUERRAS MUNDIAIS',
          paragraphs: [
            'A neutralidade garantida pelo Tratado de Londres foi violada em ambas as guerras globais do século XX devido à posição geoestratégica do território belga na Europa.',
            '- Primeira Guerra Mundial (1914–1918): O Exército Imperial Alemão invadiu o país em 1914 como parte do Plano Schlieffen para atacar a França. A recusa do rei Alberto I em ceder passagem e a heróica resistência militar atrasaram o cronograma alemão na Batalha de Liège. A resposta alemã contra as sabotagens resultou em crimes contra a população civil e destruição de patrimônio histórico (episódio conhecido internacionalmente como o "Estupro da Bélgica"). A frente de batalha estabilizou-se no rio Yser, onde as tropas belgas resistiram por quatro anos.',
            '- Segunda Guerra Mundial (1940–1945): A Alemanha nazista invadiu a Bélgica em 10 de maio de 1940. Após 18 dias de combate, o rei Leopoldo III assinou a rendição incondicional sem consultar o parlamento, gerando uma crise política profunda. Sob a ocupação nazista, formou-se um forte movimento de resistência armada e passiva, embora também tenham ocorrido divisões internas com setores colaboracionistas que atuaram na captura e deportação de quase 25 mil judeus belgas aos campos de extermínio. O país foi libertado pelas forças aliadas no outono de 1944.'
          ]
        },
        {
          title: 'VI. O SISTEMA POLÍTICO ATUAL: MONARQUIA, FEDERALISMO E PLURALISMO',
          paragraphs: [
            'Após as sucessivas crises linguísticas e políticas iniciadas a partir da década de 1960, a Bélgica abandonou o modelo de Estado unitário e reconfigurou-se como um Estado Federal por meio de reformas constitucionais profundas.',
            'A Divisão Federativa: A estrutura atual estabelece a coexistência de três comunidades linguísticas e três regiões socioeconômicas, todas no mesmo nível de hierarquia legal:',
            '- Comunidades (baseadas na língua e cultura): Comunidade Flamenga (fala neerlandês), Comunidade Francesa (fala francês) e Comunidade Germanófona (fala alemão).',
            '- Regiões (baseadas no território e economia): Região de Flandres (norte), Região da Valônia (sul) e Região de Bruxelas-Capital (área bilíngue encravada no norte).',
            'Análise Sociológica das Tensões Linguísticas: A persistência do conflito identitário entre a maioria flamenga (frequentemente associada a partidos de centro-direita e demandas por maior autonomia regional ou separatismo) e a minoria francófona valona (historicamente de esquerda e defensora da união nacional) gera crises recorrentes. Um exemplo prático ocorreu na crise política de 2010-2011, quando o país permaneceu um recorde de 541 dias sem um governo central estabelecido, funcionando apenas por meio de ministérios de gestão.',
            'Funcionamento Político e Teoria do Estado (Filosofia): A Bélgica opera sob uma Monarquia Constitucional Parlamentar. O chefe de Estado é o monarca (atualmente, o Rei Filipe), cujas funções são essencialmente simbólicas e de representação nacional. O chefe de governo é o Primeiro-Ministro, que lidera o poder executivo e responde politicamente perante a Câmara dos Representantes.',
            'Para salvaguardar os direitos das minorias linguísticas e assegurar a pacificação social, a governabilidade belga apoia-se em mecanismos de consenso, como a exigência de paridade de ministros de língua francesa e neerlandesa no Conselho de Ministros. O sistema representa uma busca filosófica constante por conciliar o pluralismo democrático de uma sociedade profundamente dividida com a preservação do Estado de Direito.'
          ]
        }
      ]
    },
    large: {
      title: 'Tratado Histórico, Sociológico e Político da Bélgica',
      subtitle: 'Das origens tribais e divisões feudais à complexa engenharia do Estado federal contemporâneo',
      intro: 'Este é um tratado histórico-político completo e exaustivo sobre a Bélgica. O texto foi expandido em detalhes minuciosos, incorporando praticamente todos os eventos, nomes, datas, tratados e dinâmicas sociais presentes nos documentos que você enviou da Wikipédia. Ele está estruturado academicamente, integrando profundamente as dimensões da História, da Sociologia e da Filosofia, pronto para ser utilizado na expansão do seu projeto.',
      sections: [
        {
          title: 'INTRODUÇÃO',
          paragraphs: [
            'A história da Bélgica é um testemunho de como a geografia, as disputas dinásticas e as clivagens culturais moldam a arquitetura de uma nação. Situada no coração da Europa Ocidental, a região que hoje compreende o Reino da Bélgica funcionou historicamente como uma encruzilhada de impérios e um campo de batalha para as grandes potências europeias. Sob a ótica histórica, o país emerge de sucessivas dominações estrangeiras até conquistar sua soberania em 1830. Sob a perspectiva sociológica, a sociedade belga caracteriza-se por uma profunda clivagem identitária e linguística entre o norte germânico e o sul românico. Filosoficamente, o Estado belga representa uma das experiências mais refinadas de constitucionalismo liberal e de democracia consociativa, buscando equilibrar a pluralidade social por meio do consenso político.'
          ]
        },
        {
          title: 'CAPÍTULO I: DA GÁLIA ROMANA À FRAGMENTAÇÃO FEUDAL (57 a.C. – 1482 d.C.)',
          diagram: `[Império Romano]
│ (Invasão de Júlio César, 57 a.C.)
▼
[Gália Belgica]
│
┌───────────────────────┴───────────────────────┐
▼ (Século V)                                    ▼ (Século V)
[Norte Germânico]                               [Sul Românico]
(Salian Franks)                                 (Gallo-Roman / Valões)
│                                               │
└───────────────────────┬───────────────────────┘
▼
[Império Carolíngio]
│ (Tratado de Verdun, 843 d.C.)
▼
[Divisão Oriental vs. Ocidental]
│
▼
[Duques de Borgonha] (Séc. XV)`,
          paragraphs: [
            '1.1 A Gália Belgica e a Conquista Romana: Antes de se tornar um Estado soberano moderno, o território belga era habitado por uma confederação de tribos celtas e germânicas conhecidas coletivamente como os Belgas. Em 57 a.C., Júlio César liderou as legiões romanas na conquista do norte da Gália. Em seus relatos (Commentarii de Bello Gallico), César dividiu a Gália em três partes e destacou os belgas como os mais bravos ("Horum omnium fortissimi sunt Belgae"), atribuindo essa bravura ao isolamento cultural em relação à província romana e à constante proximidade de combates com os povos germânicos além do Reno.',
            'As tribos belgas, como os Suessones (liderados pelo rei Galba), os Nervii, os Bellovaci e os Ambiani, uniram-se em uma coalizão militar de quase 300.000 guerreiros para resistir às guarnições de inverno romanas. Evitando o combate direto devido à superioridade tática de Roma, os belgas usaram táticas de guerrilha e emboscadas. César derrotou as tribos de forma fragmentada, estabelecendo a província oficial da Gália Belgica em 22 a.C., sob o imperador Augusto. A província estendia-se originalmente do rio Sena ao rio Reno, tendo Reims (e posteriormente Tréveris) como capital.',
            '- Perspectiva Sociológica: A Gália Belgica não possuía uma identidade nacional pré-existente; a coesão identitária regional foi uma construção administrativa do próprio Império Romano. Os conquistadores estabeleceram civitates baseadas nas fronteiras tribais, forçando a elite local a adotar nomes romanizados e a participar de festivais imperiais em Lugdunum (Lyon), iniciando um processo de aculturação.',
            '1.2 O Declínio Romano e a Gênese da Divisão Linguística: No século III d.C., as reformas do imperador Domiciano (por volta de 90 d.C.) dividiram a província para separar as zonas militarizadas do Reno das populações civis, criando a Germânia Inferior e a Germânia Superior. Com a crise do terceiro século e as invasões dos francos salianos, o controle romano enfraqueceu. Os francos estabeleceram-se na região da Toxandria (nas proximidades de Kempen).',
            'A invasão de 406 d.C., protagonizada por uma aliança de vândalos, alanos e suevos que cruzaram o Reno, destruiu as estruturas remanescentes do poder romano no norte. Os francos germânicos ocuparam a porção setentrional da planície belga, enquanto a população galo-romana preservou a língua e a cultura românica no sul florestal (as Ardenas). Essa ocupação fixou a fronteira linguística que divide a Bélgica até os dias atuais: o norte de língua germânica (neerlandesa) e o sul de língua românica (francesa).',
            '1.3 O Tratado de Verdun e o Período Borgonhês: No século IX, o território belga integrava o Império Carolíngio. Com a morte de Luís, o Piedoso (filho de Carlos Magno), o Tratado de Verdun (843) dividiu o império entre seus três filhos sobreviventes. O território da atual Bélgica foi fragmentado: a porção a oeste do rio Escalda foi atribuída à Frância Ocidental de Carlos, o Calvo, enquanto a porção a leste passou para a Frância Central (Lotaríngia) de Lotário I.',
            'Durante a Baixa Idade Média, o sul dos Países Baixos fragmentou-se em feudos semi-independentes, incluindo o Condado de Flandres, o Ducado de Brabante, o Condado de Namur e o Condado de Hainaut. No século XV, a Casa de Valois-Borgonha unificou administrativamente esses feudos. Sob o governo do duque Filipe, o Bom, implementou-se a figura do Estatuder (governador provincial) e convocou-se a primeira assembleia dos Estados Gerais em 1464, estabelecendo as bases de uma identidade regional unificada e um próspero centro econômico voltado ao comércio e à tecelagem flamenga.'
          ]
        },
        {
          title: 'CAPÍTULO II: SOB AS COROAS DE ESPANHA E ÁSTRIA (1482 – 1795)',
          diagram: `[Países Baixos Borgonheses]
│ (Herança Habsburga, 1482)
▼
[Dezessete Províncias]
│ (Divisão Dinástica, 1556)
▼
[Países Baixos Espanhóis]
│ (Revolta Holandesa, 1568-1581)
┌────────────────────┴────────────────────┐
▼ (Norte Protestante)                     ▼ (Sul Católico)
[Províncias Unidas]                       [Países Baixos Espanhóis]
                                          │ (Tratado de Utrecht, 1714)
                                          ▼
                                          [Países Baixos Austríacos]
                                          │ (Anexação Francesa, 1795)
                                          ▼
                                          [Domínio Francês]`,
          paragraphs: [
            '2.1 A Herança Habsburga e as Dezessete Províncias: Com a morte de Maria de Borgonha em 1482, as terras hereditárias borgonhesas passaram para a tutela da Casa de Áustria (Habsburgo), sob o arquiduque Maximiliano I. Seu neto, o imperador Carlos V, nascido em Gante e criado na corte de Bruxelas, consolidou esses territórios. Através da Pragmática Sanção de 1549, Carlos V declarou as Dezessete Províncias como um domínio unificado e indivisível dos Habsburgos.',
            'Em 1556, com a abdicação de Carlos V, o império foi dividido. O ramo austríaco herdou o Sacro Império Romano-Germânico, enquanto o ramo espanhol, sob seu filho Filipe II, assumiu o controle dos Países Baixos, instaurando os Países Baixos Espanhóis.',
            '2.2 A Guerra dos Oitenta Anos e a Cisão do Norte: A severa centralização administrativa de Filipe II e suas políticas rígidas de Contrarreforma católica acenderam a revolta nos Países Baixos, de maioria calvinista. O descontentamento desencadeou a Guerra dos Oitenta Anos (1568–1648).',
            'Em 1579, as províncias do norte formaram a União de Utrecht e declararam independência em 1581 (Ato de Abjuração), fundando a República das Sete Províncias Unidas. O exército espanhol, contudo, conseguiu retomar o controle sobre o sul católico (concluído com o Cerco de Antuérpia em 1585).',
            '- Perspectiva Sociológica: A separação das províncias do norte e do sul cimentou uma divisão cultural e religiosa profunda. Enquanto o norte prosperava de forma independente sob uma identidade calvinista e mercantil, o sul permaneceu católico, barroco e submetido às dinâmicas da corte espanhola em Bruxelas, governada de forma semi-autônoma pelos arquiduques Alberto VII e Isabel Clara Eugênia a partir de 1598.',
            '2.3 Dos Países Baixos Austríacos à Ocupação Francesa: O declínio do poder imperial espanhol expôs a região a invasões francesas sistemáticas sob Luís XIV, resultando na perda de Artois, Cambrai e partes de Hainaut. Com o encerramento da Guerra de Sucessão Espanhola, os tratados de Utrecht (1713) e Rastatt (1714) transferiram a soberania do sul dos Países Baixos para a dinastia Habsburga da Áustria, instituindo os Países Baixos Austríacos.',
            'Sob a imperatriz Maria Teresa e, posteriormente, seu filho José II, o territory foi alvo de reformas de modernização inspiradas no despotismo esclarecido. José II tentou reorganizar o judiciário, centralizar a administração e limitar o poder de influência da Igreja Católica.',
            'Essa interferência gerou forte resistência das elites tradicionais e do clero, culminando na Revolução de Brabante (1789) e na efêmera proclamação dos Estados Belgas Unidos em 1790. A instabilidade interna facilitou a invasão das tropas revolucionárias francesas, que anexaram formalmente o território à República Francesa em 1795, abolindo as províncias feudais tradicionais e introduzindo as leis e a centralização do modelo francês.'
          ]
        },
        {
          title: 'CAPÍTULO III: A REVOLUÇÃO DE 1830 E A CRIAÇÃO DO ESTADO LIBERAL',
          diagram: `[Domínio Francês]
│ (Queda de Napoleão, 1815)
▼
[Reino Unido dos Países Baixos]
(União sob o rei Guilherme I)
│ (Atritos econômicos e religiosos)
▼
[Revolução Belga (1830)]
│ (Independência e Constituição de 1831)
▼
[Reino da Bélgica (1831)]
(Leopoldo I jura a Constituição)`,
          paragraphs: [
            '3.1 O Reino Unido dos Países Baixos (1815–1830): Com a derrota definitiva de Napoleão na Batalha de Waterloo (ocorrida em solo belga) em 1815, o Congresso de Viena decidiu fundir os Países Baixos do Sul com o norte para criar o Reino Unido dos Países Baixos, concebido como um Estado-tampão para conter futuras expansões francesas. A coroa foi entregue ao rei protestante Guilherme I, da Casa de Orange-Nassau.',
            'A união forçada de dois povos que haviam seguido caminhos históricos distintos por quase 250 anos revelou-se insustentável. As clivagens manifestavam-se em múltiplas frentes:',
            '- Religião: A maioria católica do sul desconfiava das intenções do monarca calvinista e opunha-se à sua interferência nos seminários e na educação religiosa.',
            '- Economia: O norte baseava sua economia no comércio marítimo de livre mercado, enquanto o sul, em fase de industrialização acelerada (metalurgia e carvão), exigia tarifas protecionistas para salvaguardar suas manufaturas.',
            '- Representação Política: Apesar de a população belga ser numericamente superior, a representação nos Estados Gerais era distribuída de forma paritária com o norte, gerando sub-representação crônica dos belgas no funcionalismo público e no oficialato militar.',
            '- Língua: Em 1823, Guilherme I impôs o neerlandês como única língua oficial para administração e justiça no norte e sul, gerando forte oposição da elite belga francófona.',
            '3.2 A Revolução de Agosto de 1830: Em 25 de agosto de 1830, os distúrbios iniciaram-se em Bruxelas logo após a encenação da ópera patriótica A Muda de Portici (que retratava uma revolta popular napolitana contra o domínio espanhol) no Teatro de la Monnaie. A excitação da plateia transbordou para as ruas, resultando no saque de residências de funcionários do governo, ocupação de fábricas e destruição de maquinários industriais por operários desempregados.',
            'Inicialmente, a elite belga buscou uma separação administrativa mantendo a lealdade à coroa de Orange. No entanto, a recusa de Guilherme I em ceder às exigências e o envio de tropas comandadas por seu filho, o príncipe Frederico, radicalizaram o movimento. Entre 23 e 27 de setembro de 1830, violentos combates ocorreram no Parque de Bruxelas (as "Jornadas de Setembro"). Diante da deserção em massa de soldados belgas e da resistência tenaz dos insurgentes, as forças holandesas retiraram-se. Em 4 de outubro de 1830, um Governo Provisório declarou a independência da Bélgica.',
            `[Campanha dos Dez Dias] (1831)
Exército Holandês avança sobre Flandres
│
▼
[Intervenção Francesa]
Exército francês força retirada holandesa
│
▼
[Tratado de Londres] (1839)
Reconhecimento internacional da independência`,
            'Em agosto de 1831, Guilherme I tentou retomar o território através da Campanha dos Dez Dias. O recém-formado exército belga sofreu severas derrotas, e a independência só foi salva pela intervenção militar francesa de urgência conduzida pelo marechal Étienne Gérard. O impasse diplomático resolveu-se apenas com a assinatura do Tratado de Londres de 1839, no qual as grandes potências europeias (incluindo os Países Baixos) reconheceram a independência e a neutralidade perpétua da Bélgica.',
            '3.3 A Constituição de 1831: Modelo do Liberalismo Clássico: Enquanto os combates cessavam, o Congresso Nacional reuniu-se para redigir a Constituição de 7 de fevereiro de 1831. O documento foi classificado pelos teóricos do direito como a síntese mais perfeita do liberalismo constitucional do século XIX, servindo de inspiração para as cartas magnas de diversas nações europeias, como a Dinamarca em 1849.',
            '- Perspectiva Filosófica (Teoria do Estado): A constituição baseou-se nos princípios da soberania nacional (Artigo 33: "Todos os poderes emanam da Nação"), na estrita separação de poderes (Locke e Montesquieu) e no estabelecimento de uma monarquia parlamentar representativa. O rei não detinha poder de decisão autônomo; suas ações políticas necessitavam da assinatura de um ministro responsável perante o Parlamento (Artigo 106), estabelecendo a inviolabilidade do monarca e a responsabilidade ministerial.',
            '- Garantia de Liberdades Civis: Garantiu a liberdade de culto (Artigo 19), a liberdade de imprensa com a proibição expressa da censura prévia (Artigo 25), a liberdade de associação (Artigo 27) e a neutralidade da educação pública (Artigo 24). Embora tenha exigido a separação entre Igreja e Estado, o documento garantiu que o clero fosse remunerado pelo erário público sem sofrer interferência estatal na nomeação de seus bispos.',
            'Para ocupar o trono de uma monarquia que nascia sob a premissa de um contrato social, o Congresso convidou o príncipe Leopoldo de Saxe-Coburgo-Gota, que assumiu o trono como Leopoldo I em 21 de julho de 1831.'
          ]
        },
        {
          title: 'CAPÍTULO IV: O IMPERIALISMO DE LEOPOLDO II E O CONGO (1865 – 1908)',
          diagram: `[Reinado de Leopoldo II] (1865)
│
▼
[Conferência de Berlim] (1884-85)
│
▼
[Estado Livre do Congo] (1885)
(Propriedade pessoal de Leopoldo II)
│
┌───────────────────┴───────────────────┐
▼                                       ▼
[Exploração de Borracha]                [Violência e Atrocidades]
- Seringais e marfim                    - Mutilações, massacres
- Lucros para monumentos belgas         - Força Pública (milícia)
│                                       │
└───────────────────┬───────────────────┘
▼
[Denúncias Internacionais]
(Relatório Casement, 1904)
│
▼
[Congo Belga] (1908-1960)
(Anexado pelo Parlamento belga)`,
          paragraphs: [
            '4.1 A Ambição Colonial e a Conferência de Berlim: Com a morte de Leopoldo I em 1865, seu filho Leopoldo II assumiu a coroa belga. Leopoldo II herdou uma monarquia parlamentar onde o poder del rei era severamente limitado pelo parlamento. Inconformado com as fronteiras estreitas da Bélgica na Europa, dedicou-se de forma obstinada à aquisição de territórios ultramarinos. Após tentativas frustradas de adquirir províncias na Argentina, Bornéu, Filipinas e Moçambique, o monarca voltou sua atenção para o coração inexplorado da África Central.',
            'Em 1876, Leopoldo II patrocinou a Conferência Geográfica de Bruxelas, reunindo exploradores e cientistas sob o pretexto de coordenar esforços humanitários para combater o tráfico árabe de escravos e mapear o interior da bacia do rio Congo. Ao final, propôs a criação da Associação Internacional Africana, apresentando-se como um filantropo desinteressado. Em paralelo, contratou o célebre explorador Henry Morton Stanley para estabelecer postos comerciais ao longo do rio Congo e firmar tratados de cessão de soberania com os chefes de tribos locais.',
            'Na Conferência de Berlim (1884–1885), convocada por Bismarck para organizar a partilha da África, Leopoldo II usou de exímia habilidade diplomática: jogou a Grã-Bretanha contra a expansão francesa, ofereceu livre comércio à Alemanha e prometeu prioridade de aquisição à França caso sua empreitada financeira falhasse.',
            'O resultado foi a criação do Estado Livre do Congo, um território de 2,3 milhões de quilômetros quadrados que foi reconhecido não como uma colônia do Estado belga, mas como uma união pessoal de propriedade exclusiva de Leopoldo II. O monarca tornou-se o único dono absoluto de um território setenta vezes maior do que a própria Bélgica.',
            '4.2 O "Regime da Borracha" e as Atrocidades: Inicialmente focado no comércio de marfim, Leopoldo II contraiu dívidas para estruturar ferrovias e postos comerciais através dos montes de Cristal para contornar as cataratas que impediam a navegação no estuário do rio. A salvação financeira de seu império privado ocorreu na década de 1890 com o desenvolvimento do pneu inflável por John Boyd Dunlop e a subsequente explosão da demanda global por borracha natural para aplicações industriais (isolamento de cabos elétricos, mangueiras, correias e fiação).',
            'Leopoldo II dividiu o Congo em duas zonas econômicas: a Zona de Livre Comércio e o vasto Domaine de la Couronne (Domínio da Coroa), cujos lucros revertiam diretamente para suas contas particulares. Para impor a extração compulsória de borracha, o governo privado de Leopoldo II valeu-se da Force Publique, uma milícia armada composta por mercenários europeus e soldados nativos (frequentemente recrutados de tribos com tradições guerreiras ou canibais).',
            `[Cotas de Borracha Não Alcançadas]
│
▼
[Ações de Punição]
│
┌──────────────────────┴──────────────────────┐
▼                                             ▼
[Tomada de Reféns]                            [Mutilações de Mãos]
- Sequestro de mulheres e crianças            - Prova de uso de munição
- Trabalho forçado até a morte                - Coleta sistemática de mãos`,
            'As atrocidades cometidas por esse regime tornaram-se um dos escândalos internacionais mais infames da história moderna:',
            '- Mutilações Sistemáticas: Como as munições eram caras, os oficiais brancos exigiam que os soldados negros da Force Publique apresentassem uma mão direita cortada para cada cartucho gasto, provando que a munição não fora desperdiçada em caça ou guardada para revoltas. Esse sistema levou a um comércio macabro de cestos cheios de mãos humanas amputadas, coletadas de indivíduos vivos para justificar o uso de cartuchos.',
            '- Sequestros e Abusos: As mulheres, crianças e chefes tribais eram aprisionados em campos de reféns para forçar os homens das aldeias a adentrar as florestas tropicais para coletar as cotas exigidas de seiva das trepadeiras de borracha (Landolphia owariensis). Muitos reféns morriam de fome ou maus-tratos antes de os homens retornarem.',
            '- Chacinas em Massa: Aldeias inteiras que protestavam contra o trabalho forçado ou que falhavam em entregar o suprimento de comida exigido para os postos militares eram sumariamente incendiadas e seus habitantes executados.',
            '- Perspectiva Sociológica (Demografia e Trauma): As estimativas do total de mortos variam amplamente devido à ausência de censos sistemáticos anteriores a 1924. Historiadores como Adam Hochschild (King Leopold\'s Ghost) e Isidore Ndaywel è Nziem apontam para uma perda demográfica de aproximadamente 10 milhões de pessoas (cerca de metade da população do território na época), decorrente de assassinatos diretos, desnutrição severa provocada pelo abandono da agricultura tradicional e grandes epidemias de varíola e doença do sono (tripanossomíase). Pesquisas econômicas contemporâneas (como as de Lowes e Montero) demonstram que as áreas submetidas à exploração mais intensa da borracha apresentam menor índice de desenvolvimento econômico e maior desconfiança em relação às lideranças locais até hoje, revelando o impacto traumático geracional do colonialismo coercitivo.',
            '- Perspectiva Filosófica (Ética e Direitos Humanos): O império de Leopoldo II assentou-se sobre a justificativa filosófica da "missão civilizadora" europeia (o fardo do homem branco), usada para encobrir a busca desenfreada de lucro individual. Pensadores e ativistas de direitos humanos deitaram por terra essa retórica. O escritor Mark Twain escreveu a sátira mordaz King Leopold\'s Soliloquy (1905), enquanto Arthur Conan Doyle denunciou as crueldades no livro O Crime do Congo (1908). A publicação do Relatório Casement em 1904 forçou o parlamento belga a intervir, culminando na anexação oficial do território como a colônia estatal do Congo Belga em 15 de novembro de 1908, dias antes da morte do monarca. Os imensos lucros obtidos por Leopoldo II financiaram as monumentais obras públicas em Bruxelas, Ostende e Antuérpia, rendendo-lhe o epíteto interno de "Rei Construtor".'
          ]
        },
        {
          title: 'CAPÍTULO V: A BÉLGICA NAS DUAS GUERRAS MUNDIAIS (1914 – 1945)',
          diagram: `[Primeira Guerra Mundial] (1914)
- Violação da Neutralidade (Schlieffen)
- "O Estupro da Bélgica"
- Ocupação alemã (Moritz von Bissing)
- Flamenpolitik (Divisão flamengos/valões)
│
▼
[Segunda Guerra Mundial] (1940)
- Invasão Alemã e Ocupação (18 dias)
- Capitulação de Leopoldo III (Crise Real)
- Resistência vs. Colaboracionismo
- Perseguição e deportação de judeus`,
          paragraphs: [
            '5.1 A Primeira Guerra Mundial e a Ocupação (1914–1918): No início de agosto de 1914, cumprindo as diretrizes estratégicas do Plano Schlieffen para destruir rapidamente a França, o Exército Imperial Alemão violou a neutralidade garantida da Bélgica e invadiu o país. O governo belga rejeitou o ultimato alemão de livre passagem. O rei Alberto I assumiu o comando das forças armadas no front do rio Yser, enquanto o governo civil retirou-se para Sainte-Adresse, na França.',
            'A resistência militar belga, principalmente na rede de fortificações de Liège, atrasou o avanço alemão em quase duas semanas, dando tempo para a mobilização das forças anglo-francesas. Em represália à destruição de ferrovias e ao temor de franco-atiradores civis, o exército ocupante aplicou punições coletivas violentas (episódio conhecido como "O Estupro da Bélgica"), executando mais de 6.000 civis em Dinant, Louvain (onde incendiaram a histórica biblioteca universitária) e outras localidades.',
            '- A Administração Civil sob Ocupação: Quase 95% do território belga permaneceu ocupado e governado por uma autoridade militar representada por Moritz von Bissing. Mais de 200.000 refugiados belgas fugiram para o Reino Unido, onde foram assistidos pela Comissão de Socorro na Bélgica (CRB), organizada de forma independente por Herbert Hoover para evitar a fome generalizada. Os alemães deportaram cerca de 120.000 trabalhadores belgas para trabalhos forçados nas indústrias alemãs.',
            '- A Flamenpolitik (Sociologia Identitária): Sob a influência do pan-germanismo, as autoridades alemãs buscaram cooptar o Movimento Flamengo contra a hegemonia francófona no país. Através da Flamenpolitik (Política Flamenga), Bissing fundou a primeira universidade exclusivamente de língua neerlandesa em Gante e promoveu reformas administrativas dividindo o país em duas zonas separadas. Essa política cindiu o Movimento Flamengo entre "ativistas" (colaboradores) e "passivistas" (resistentes), aguçando as tensões étnicas internas que emergiriam com força no pós-guerra.',
            '5.2 A Segunda Guerra Mundial e a Ocupação Nazi (1940–1945): Embora a Bélgica tenha tentado retornar à política de estrita neutralidade no período entre-guerras, a Alemanha nazista invadiu novamente o país em 10 de maio de 1940. Após dezoito dias de campanha militar, diante do colapso das forças aliadas em Sedan, o rei Leopoldo III ordenou a rendição incondicional de suas tropas e decidiu permanecer no território como prisioneiro de guerra, recusando-se a seguir o governo de Hubert Pierlot para o exílio em Londres.',
            'Essa decisão gerou uma cisão profunda na sociedade belga (conhecida no pós-guerra como a "Questão Real"): de um lado, os monarquistas e conservadores defendiam a atitude de Leopoldo III; de outro, os liberais, socialistas e comunistas acusavam o rei de traição e cumplicidade com o regime nazi.',
            '- Resistência, Colaboração e Perseguição: A sociedade belga polarizou-se durante a ocupação. Organizações políticas de extrema-direita de caráter fascista e nazista — como o Vlaams Nationaal Verbond (VNV) em Flandres e o movimento Rexista de Léon Degrelle na Valônia — colaboraram ativamente com o ocupante alemão, permitindo o recrutamento de voluntários belgas para divisões da Waffen-SS que lutaram no Front Oriental. O governo de ocupação militar contou com a cooperação de setores civis e policiais na perseguição aos judeus do país, resultando na deportação de cerca de 25.000 judeus belgas, a maioria exterminada no campo de Auschwitz. Em paralelo, a resistência organizada realizou ações de sabotagem de ferrovias, inteligência militar e proteção de crianças judias escondidas. O território foi libertado no outono de 1944.'
          ]
        },
        {
          title: 'CAPÍTULO VI: O SISTEMA POLÍTICO FEDERAL E A SOCIEDADE CLIVADA',
          diagram: `[Estado Unitário Belga] (1831)
│ (Atritos identitários e linguísticos)
▼
[Reformas de Estado] (1970-1993)
│
┌───────────────────────┴───────────────────────┐
▼                                               ▼
[Três Regiões]                                  [Três Comunidades]
(Base Econômica/Territorial)                    (Base Linguística/Cultural)
- Flandres                                      - Comunidade Flamenga
- Valônia                                       - Comunidade Francesa
- Bruxelas-Capital                              - Comunidade Germanófona`,
          paragraphs: [
            '6.1 A Federalização da Bélgica: A partir da década de 1970, diante das pressões recorrentes do Movimento Flamengo e do desejo de descentralização econômica e cultural, o State belga iniciou um longo processo de reformas constitucionais, abandonando o modelo de Estado unitário herdado de 1831 para adotar uma estrutura federal complexa. A constituição coordenada de 1994 selou essa transformação (Artigo 1: "A Bélgica é um Estado Federal composto por Comunidades e Regiões").',
            'Esta estrutura federal assenta-se sobre duas subdivisões paralelas que se sobrepõem geograficamente:',
            'As Comunidades (Competência em Cultura, Educação e Serviços Sociais):',
            '1. Comunidade Flamenga: Representa a população de língua neerlandesa (focada no norte e em Bruxelas).',
            '2. Comunidade Francesa: Representa a população de língua francesa (focada no sul e em Bruxelas).',
            '3. Comunidade Germanófona: Representa a minoria de fala alemã situada nas fronteiras com a Alemanha.',
            'As Regiões (Competência em Economia, Transporte, Moradia e Meio Ambiente):',
            '1. Região de Flandres: Norte do país, predominantemente agrícola e de alta tecnologia.',
            '2. Região da Valônia: Sul do país, historicamente industrial (carvão e aço), hoje em fase de reestruturação econômica.',
            '3. Região de Bruxelas-Capital: Área bilíngue encravada geograficamente na Flandres, que abriga as instituições do governo central e da União Europeia.',
            '- Paridade Institucional: A complexidade belga reflete-se na ausência de subordinação entre as Regiões, as Comunidades e o Estado Federal. Cada entidade possui seu próprio Parlamento de deputados eleitos e seu próprio Governo Executivo de ministros, expedindo decretos que detêm força de lei idêntica às leis nacionais no limite de suas competências territoriais e pessoais.',
            `┌──────────────────────────────────────┐
│ [Estrutura Governamental]            │
├──────────────────────────────────────┤
│ - Chefe de Estado: Rei Filipe        │
│ - Chefe de Governo: Primeiro-Ministro│
│ - Parlamento Bicameral:              │
│   * Câmara dos Representantes        │
│   * Senado                           │
│ - Conselho de Ministros:             │
│   * Paridade linguística obrigatória │
└──────────────────────────────────────┘`,
            '6.2 Análise Sociológica da Divisão Identitária: A coexistência de duas grandes identidades nacionais no mesmo território político gera atritos estruturais que se refletem na organização dos partidos políticos, que se dividiram inteiramente ao longo de fronteiras linguísticas desde a década de 1970. Não existem partidos de âmbito nacional; o eleitor em Flandres escolhe entre partidos flamengos, e o eleitor na Valônia entre partidos francófonos.',
            '- A Disparidade Econômica: Durante o século XIX e início do século XX, a Valônia foi o motor econômico da Bélgica graças às suas minas de carvão e siderurgias, enquanto Flandres permanecia uma região rural e empobrecida de trabalhadores falantes de neerlandês dominada pela elite francófona. Na segunda metade do século XX, essa dinâmica inverteu-se inteiramente. O declínio das indústrias pesadas gerou desemprego estrutural na Valônia, enquanto Flandres industrializou-se rapidamente através do desenvolvimento de portos (como Antuérpia) e do setor de serviços. Essa disparidade gera atritos sociopolíticos sobre os sistemas de transferência de verbas do orçamento federal para financiar a previdência e o auxílio-desemprego no sul do país.',
            '- A Questão de Bruxelas: Bruxelas representa o ponto de fricção mais complexo do federalismo. Historicamente de língua neerlandesa, a capital passou por um processo acelerado de "Afrancesamento" (introdução do francês na administração e educação) ao longo do século XIX. Hoje, mais de 90% de seus moradores falam o francês como língua principal ou de uso prático, embora a cidade esteja situada no meio do território de Flandres.',
            '6.3 Perspectiva Filosófica: O Consociacionalismo e o Consenso: Para governar um país fragmentado, a Bélgica utiliza o modelo teórico-político do Consociacionalismo (ou democracia consociativa), formulado pelo cientista político Arend Lijphart. O consociacionalismo baseia-se na ideia de que, em sociedades divididas por clivagens profundas, a estabilidade democrática só pode ser alcançada por meio de coalizões amplas, representação proporcional de todas as partes, direito de veto mútuo para minorias e tomada de decisão fundamentada em consensos.',
            'A própria Constituição da Bélgica impõe salvaguardas rigorosas para evitar a tirania da maioria:',
            '- Paridade Ministerial (Artigo 99): O Conselho de Ministros federal deve conter obrigatoriamente tantos membros de língua neerlandesa quanto membros de língua francesa, com a única exceção eventual do cargo de Primeiro-Ministro.',
            '- Leis com Maioria Qualificada: Alterações importantes nas competências regionais ou na legislação linguística exigem aprovação de maiorias parlamentares especiais dentro de cada grupo linguístico na Câmara dos Representantes e no Senado.',
            '- Mecanismos de Resolução de Conflitos: A existência da corte constitucional (Tribunal Constitucional) e de mecanismos de resolução de conflitos de interesses operam para evitar paralisias legislativas crônicas.',
            'Embora o modelo de consociacionismo belga consiga evitar conflitos físicos e garantir a paz social, ele impõe um custo operacional elevado. A necessidade constante de consensos complexos e o distanciamento mútuo das duas comunidades principais levam a negociações de formação de governos que duram meses e criam um Estado burocrático e fragmentado, desafiando de forma contínua a própria existência de um sentimento de patriotismo belga unificado.'
          ]
        }
      ]
    }
  },
  'geografia-meio-ambiente': {
    small: {
      title: 'Geografia e Meio Ambiente da Bélgica',
      subtitle: 'Das planícies costeiras à biodiversidade dos ecossistemas florestais',
      intro: 'Com base nos textos da Wikipédia que você enviou sobre a geografia e o meio ambiente da Bélgica, estruturei o conteúdo principal exatamente no mesmo formato, tamanho e divisão de seções do texto anterior de História e Política.',
      sections: [
        {
          title: 'I. A DIVISÃO DO RELEVO E AS TRÊS REGIÕES FÍSICAS',
          paragraphs: [
            'A Bélgica apresenta uma geografia física compacta, distribuída por uma área de 30.528 quilômetros quadrados. O relevo do território eleva-se de forma gradual na direção noroeste-sudeste, dividindo o país em três regiões físicas principais:',
            '- Planície Costeira (Baixa Bélgica): Situada ao noroeste, consiste em dunas de areia e dunas móveis (com destaque para a duna de Hoge Blekker). A região abriga os polders, terrenos planos situados quase ao nível do mar que foram drenados por canais e são protegidos por diques artificiais. O ponto mais baixo do país localiza-se na depressão de De Moeren, a 3 metros abaixo do nível do mar.',
            '- Planalto Central (Média Bélgica): Uma área pouco acidentada caracterizada por vales férteis irrigados por diversos rios. O solo, rico em argila e limo, favorece intensamente o desenvolvimento agrícola.',
            '- Maciço das Ardenas (Alta Bélgica): Localizado ao sudeste, é um planalto rochoso e acidentado, composto por formações xistosas e solos pouco adequados para o cultivo. É a zona mais florestada e selvagem do país, onde se localiza o Signal de Botrange, o ponto culminante da Bélgica e do Benelux, situado a 694 metros de altitude no planalto dos Altos Fanhos (Hautes Fagnes).'
          ]
        },
        {
          title: 'II. O CLIMA TEMPERADO MARÍTIMO E A DINÂMICA PLUVIOMÉTRICA',
          paragraphs: [
            'A Bélgica possui um clima temperado marítimo, influenciado diretamente pela proximidade do Oceano Atlântico. Essa condição climática garante transições suaves entre as quatro estações do ano, com características térmicas e de umidade bem definidas:',
            '- Temperaturas Moderadas: Os invernos são suaves, com temperaturas médias diurnas que variam entre 2 °C e 6 °C. Os verões são frescos e suaves, com médias entre 20 °C e 25 °C. Ondas de calor extremo são raras devido ao efeito regulador das brisas marítimas.',
            '- Precipitação Regular: As chuvas são frequentes e distribuídas de forma regular ao longo de todo o ano, com médias de 200 dias chuvosos por ano. A umidade varia de acordo com a altitude: enquanto o centro do país (Uccle) registra médias de 800 mm anuais, o topo das Ardenas (Botrange) recebe cerca de 1.450 mm ao ano.',
            '- Neve e Ventos: Nas elevações orientais das Ardenas, os ventos são mais fortes e o inverno dura em média três meses sob temperaturas abaixo de zero. A precipitação nessa área ocorre frequentemente na forma de neve, chegando a ultrapassar 35 dias de queda anual de neve (com recorde histórico de 115 cm medidos em 1953).'
          ]
        },
        {
          title: 'III. RECURSOS NATURAIS E A BASE DA ECONOMIA PRIMÁRIA',
          paragraphs: [
            'Embora a economia belga seja amplamente voltada para os setores de serviços e de manufatura avançada, o país conta com uma base sólida de recursos naturais que estruturam a sua produção primária:',
            '- Solo Fértil: Cerca de 26% do território nacional é dedicado à agricultura de alta tecnologia, focada no cultivo de batatas, cevada, beterraba açucareira e cereais, garantindo autossuficiência e excedente para exportação.',
            '- Silício e Carbonatos: A Bélgica possui ricas reservas de carbonatos (calcário, dolomita e o mármore negro) e de areia de sílica de alta pureza. O silício extraído no país atende indústrias de construção, adesivos, fabricação de vidro e materiais odontológicos, tendo a gigante química Evonik como polo produtor em Antuérpia.',
            '- Zinco, Chumbo e Ferro: O país possui depósitos metálicos de zinco e chumbo explorados historicamente desde o século XIV (abrigando a Nyrstar, uma das maiores refinadoras globais de zinco).',
            '- O Fim do Carvão: As Ardenas e o sudeste abrigaram uma próspera indústria de mineração de carvão nos séculos XIX e XX. Em 2016, a Bélgica interrompeu completamente a produção de carvão mineral, tornando-se uma das primeiras nações europeias a abandonar o combustível para reduzir o aquecimento global.'
          ]
        },
        {
          title: 'IV. BIODIVERSIDADE E A FLORESTA DE SONIAN',
          paragraphs: [
            'A cobertura vegetal original da Bélgica é composta principalmente por floresta estacional decidual (faias, carvalhos, bétulas e olmos). No sul montanhoso, dominam as coníferas. O ecossistema florestal mais emblemático é a Floresta de Sonian (Forêt de Soignes):',
            '- Patrimônio Mundial da UNESCO: Com 4.421 hectares situados nos arredores de Bruxelas, a Floresta de Sonian abriga faias europeias (Fagus sylvatica) centenárias que datam do período austríaco. É o único componente belga inscrito como Patrimônio da UNESCO na rede de "Florestas Primárias de Faia da Europa".',
            '- Fragmentação e Extinções: O desmatamento histórico (como a remoção de 22 mil carvalhos ordenada por Napoleão para construir frotas de guerra) e a pavimentação de rodovias modernas como o Anel Viário de Bruxelas (R0) causaram a perda de habitat. Diversos grandes mamíferos foram extintos localmente, incluindo o urso-pardo, o lobo, o cervo-vermelho e o texugo. O javali, considerado extinto em 1957, voltou a povoar a floresta em 2007.',
            '- Conservação e Conectividade: Classificada como área de proteção sob a rede europeia Natura 2000, a floresta protege espécies de morcegos ameaçados, o pica-pau-preto e o tritão-de-crista. Para combater o isolamento ecológico, foi aberto em 2018 um Ecoduto de 60 metros de largura sobre a rodovia R0, restabelecendo a passagem segura da fauna nativa.'
          ]
        },
        {
          title: 'V. O IMPACTO HUMANO E A CRISE DO ESTRESSE HÍDRICO',
          paragraphs: [
            'Apesar do índice elevado de chuvas e da presença de rios caudalosos como o Mosa e o Escalda, a Bélgica enfrenta problemas sérios de disponibilidade e uso de água potável:',
            '- Estresse Hídrico Extremo: A Bélgica ocupa a 18ª posição mundial no ranking de escassez e estresse de água, sendo a única nação do norte da Europa nessa faixa de risco extremo.',
            '- Pavimentação e Perda de Água: O estresse hídrico é agravado pela pavimentação urbana generalizada. Como o solo das cidades está impermeabilizado por construções e asfalto, a água da chuva não é absorvida para recarregar os lençóis freáticos. Em vez disso, ela escoa diretamente para os esgotos e canais artificiais, correndo rapidamente em direção ao mar.',
            '- Projetos de Resiliência: O governo implementou o programa Pacto Azul (Blue Deal), investindo 155 milhões de euros em soluções circulares de reuso de água e facilitando métodos de infiltração natural de água da chuva para reverter a escassez hídrica nas cidades.'
          ]
        },
        {
          title: 'VI. POLUIÇÃO QUÍMICA E PREVENÇÃO DE DESASTRES',
          paragraphs: [
            'A densa atividade industrial, agrícola e habitacional gera impactos químicos severos sobre o meio ambiente belga:',
            '- Contaminação por Nitratos e PFAS: A agricultura intensiva na Flandres eleva a presença de nitratos nas águas subterrâneas. Recentemente, a detecção de PFAS (químicos eternos) nos mananciais potáveis do norte e da Valônia intensificou as exigências por tratamentos avançados e metas rigorosas de filtragem industrial.',
            '- Vulnerabilidade a Enchentes: As catastróficas inundações de julho de 2021 nas Ardenas expuseram as debilidades de contenção e a urgência de defesas naturais contra desastres intensificados pelas mudanças climáticas.',
            '- Iniciativas Ecológicas: Projetos financiados pela União Europeia atuam para recuperar a qualidade ambiental. O projeto Wetlands4Cities foca na restauração de pântanos e zonas úmidas urbanas; o projeto LIFE Belini atua na bacia do rio Escalda para reduzir a poluição e mitigar cheias; e o EMfloodResilience utiliza modelagem de bacias hidrográficas para prever cheias e salvar vidas nas regiões ribeirinhas.'
          ]
        }
      ]
    },
    large: {
      title: 'Tratado Geográfico, Climatológico e Biológico da Bélgica',
      subtitle: 'Análise morfológica do território, dinâmica dos ecossistemas e desafios de sustentabilidade no coração da Europa Ocidental',
      intro: 'Aqui está o Tratado Geográfico e Ecológico da Bélgica em sua versão extremamente detalhada, aprofundada e completa. O documento foi expandido para cobrir minuciosamente cada dado, nome, localidade, estatística e contexto biológico presentes nos textos que você enviou. A caracterização física e biológica do Reino da Bélgica constitui um campo de estudo de alta complexidade. Apesar de sua extensão territorial reduzida (cerca de 30.528 km²), o país funciona como uma transição morfológica e climática entre a grande Planície Norte-Europeia e o Maciço Herciniano Central. Sob a perspectiva da Geografia, o território belga apresenta uma notável diversidade de relevos, solos e redes hidrográficas que historicamente viabilizaram uma das maiores densidades demográficas e industriais do planeta. Sob a ótica da Biologia, os ecossistemas belgas — severamente impactados por séculos de ocupação humana — abrigam remanescentes florestais de valor ecológico global inestimável. Este tratado destina-se a analisar de forma integrada o relevo, o clima, a hidrografia, os recursos naturais e a dinâmica biológica da Bélgica, concluindo com uma análise detalhada sobre suas crises e iniciativas de sustentabilidade ecológica.',
      sections: [
        {
          title: 'CAPÍTULO I: RELEVO, GEOMORFOLOGIA E AS REGIÕES FÍSICAS',
          diagram: `NO (Mar do Norte)                                              SE (Ardenas)
[ Nível do Mar ] ───► [ Baixa Bélgica ] ───► [ Média Bélgica ] ───► [ Alta Bélgica ]
(De Moeren, -3m)     (Polders e dunas)    (Planalto Central)    (Botrange, 694m)`,
          paragraphs: [
            'O relevo da Bélgica é estruturado em três grandes regiões físicas que se elevam gradualmente a partir do litoral do Mar do Norte, a noroeste, em direção ao maciço das Ardenas, no sudeste:',
            '1.1 A Baixa Bélgica (Planície Costeira e Polders): A porção noroeste do território belga é caracterizada por uma planície costeira sedimentar de baixa altitude. Essa região divide-se em duas formações geomorfológicas principais:',
            '- As Dunas Costeiras: Cordões arenosos formados pela ação dos ventos marítimos do Mar do Norte. O ponto culminante dessa faixa é a duna de Hoge Blekker, situada no município de Koksijde.',
            '- Os Polders: Extensas áreas de planícies aluviais que originalmente sofriam inundações periódicas das marés. Por meio de canais de drenagem e diques artificiais construídos desde a Idade Média, o homem conquistou essas terras ao mar, transformando-as em campos agrícolas altamente produtivos.',
            '- Depressão de De Moeren: Situada nesta faixa costeira, constitui o ponto físico mais baixo da Bélgica, situando-se a 3 metros abaixo do nível médio do mar.',
            '1.2 A Média Bélgica (Planalto Central): Localizada entre a planície costeira e o vale dos rios Mosa e Sambre, a Média Bélgica consiste em um planalto que se eleva suavemente entre 10 e 200 metros de altitude.',
            '- Geologia do Solo: Caracteriza-se por depósitos profundos de solos férteis de limo (loess) e argila depositados durante as glaciações do Quaternário. Esses solos apresentam alta capacidade de retenção de água e nutrientes, tornando o Planalto Central o cinturão agrícola mais produtivo do país.',
            '- Topografia: A topografia é suavemente ondulada, cortada por vales fluviais férteis. Em direção ao leste, o relevo torna-se ligeiramente mais acidentado, exibindo formações calcárias que abrigam grutas, cavernas e pequenas gargantas escavadas pela erosão hídrica ao longo de milhares de anos.',
            '1.3 A Alta Bélgica (Maciço das Ardenas): Situada ao sul e sudeste do vale Sambre-Mosa, a Alta Bélgica é dominada pelo maciço montanhoso das Ardenas.',
            '- Geologia e Estrutura: As Ardenas integram um antigo maciço xistoso e rochoso, desgastado pela erosão, que se conecta geologicamente à região de Eifel na Alemanha. Caracteriza-se por um terreno altamente acidentado, composto por rochas metamórficas duras, solos ácidos e pouca profundidade, o que inviabiliza a agricultura intensiva.',
            '- Altos Fanhos (Hautes Fagnes): Na província de Liège, o relevo atinge suas maiores elevações em um planalto coberto por turfeiras e pântanos de altitude. É nessa sub-região que se localiza o Signal de Botrange, o ponto culminante da Bélgica e de toda a região do Benelux, com 694 metros de altitude.',
            '- Baraque Michel: Situado nas proximidades de Botrange, o pico de Baraque Michel funcionou como o ponto mais alto do país até 1919, data em que a Bélgica anexou os Cantões Orientais (Eupen-Malmedy) após a assinatura do Tratado de Versalhes.'
          ]
        },
        {
          title: 'CAPÍTULO II: CLIMATOLOGIA E DINÂMICA PLUVIOMÉTRICA',
          diagram: `[Oceano Atlântico]
│ (Corrente do Golfo)
▼
[Clima Temperado Marítimo]
│
┌───────────────────────┴───────────────────────┐
▼ (Precipitações)                               ▼ (Temperaturas)
[Uccle: 800 mm / 170 dias]                      [Inverno: 2 °C a 6 °C]
[Botrange: 1.450 mm / 200+ dias]                [Verão: 20 °C a 25 °C]`,
          paragraphs: [
            'O clima da Bélgica é classificado como temperado marítimo (Cfb, de acordo com a classificação climática de Köppen-Geiger), sofrendo forte influência das massas de ar úmidas oriundas do Oceano Atlântico e da ação moderadora da Corrente do Golfo.',
            '2.1 Padrões de Temperatura e as Estações do Ano: O país experimenta quatro estações térmicas bem delimitadas, caracterizadas por transições suaves e ausência de temperaturas extremas na maior parte do território:',
            '- Primavera (março a maio): Período de elevação gradual das temperaturas, com máximas que sobem de 10 °C para 20 °C à medida que a estação avança, embora geadas tardias ainda possam ocorrer de forma esporádica.',
            '- Verão (junho a agosto): É a estação mais quente do ano, com máximas médias que oscilam de forma amena entre 20 °C e 25 °C. Noites frescas (entre 10 °C e 15 °C) são comuns. Temperaturas superiores a 30 °C ocorrem raramente devido à barreira térmica imposta pela umidade oceânica.',
            '- Outono (setembro a novembro): Queda gradual das temperaturas, que diminuem de 20 °C para menos de 10 °C. O período é marcado por aumento da nebulosidade e redução da luminosidade diária.',
            '- Inverno (dezembro a fevereiro): Estação fria e moderada, com temperaturas diurnas variando de 2 °C a 6 °C. Massas de ar continentais frias vindas do leste podem ocasionalmente derrubar as temperaturas abaixo de zero.',
            '2.2 Dinâmica Pluviométrica e Variações de Altitude: A umidade é uma constante em todo o território belga. As frentes de baixa pressão do Atlântico trazem precipitações frequentes e regulares ao longo de todas as estações. No entanto, a distribuição e a intensidade das chuvas variam consideravelmente conforme a altitude e a distância em relação ao litoral:',
            '- Pluviosidade Geral: Na maior parte das planícies e planaltos centrais (como em Uccle), a média de chuva gira em torno de 800 mm ao ano, distribuídos por pouco mais de 170 dias de precipitação. As chuvas leves e constantes (chuviscos) dominam as estações frias.',
            '- O Microclima de Botrange: No cume do Signal de Botrange e nas encostas das Ardenas, a altitude força a ascensão das massas de ar úmidas, gerando um efeito orográfico que eleva a média anual de chuvas para 1.450 mm, distribuídos por mais de 200 dias de precipitação ao ano.',
            '- Rigores do Inverno nas Altitudes: Nos Altos Fanhos, o inverno é significativamente mais severo do que no restante do país, registrando mais de 130 dias de geada por ano. A temperatura mínima absoluta registrada na Bélgica ocorreu no vale do Lomme, em Rochefort, atingindo −30,1 °C devido a um fenômeno de inversão térmica, superando os −25,6 °C registrados na estação meteorológica de Botrange. A neve é persistente nas Ardenas durante as estações frias, registrando em média mais de 35 dias de queda de neve ao ano. A espessura máxima de neve registrada na Bélgica foi de 115 cm, medida no topo de Botrange em 9 de fevereiro de 1953.'
          ]
        },
        {
          title: 'CAPÍTULO III: HIDROGRAFIA E VIAS NAVEGÁVEIS',
          diagram: `[ Mar do Norte ]
▲
┌─────────────────────────┴─────────────────────────┐
│                                                   │
[ Rio Escalda ]                                     [ Rio Mosa ]
- Bacia do noroeste (Antuérpia)                     - Bacia do leste (Liège)
- Terreno de planície                               - Vales rochosos das Ardenas
│                                                   │
└─────────────────────────┬─────────────────────────┘
▼
[ Canais Artificiais ]
(Albert, Willebroek, Bruxelas-Charleroi)`,
          paragraphs: [
            'A hidrografia belga é de suma importância para o escoamento hídrico, a ecologia e a infraestrutura logística da Europa Ocidental. Todo o território do país drena para o Mar do Norte, estando estruturado em duas grandes bacias hidrográficas principais:',
            '3.1 A Bacia do Rio Escalda (Scheldt): O rio Escalda nasce no norte da França e cruza a Bélgica ocidental de sul a norte antes de desaguar no estuário do Mar do Norte nos Países Baixos.',
            '- Dinâmica Geográfica: Por fluir através das planícies de baixa altitude, o rio apresenta um curso lento e sinuoso. Ele conecta as principais cidades históricas e comerciais do país, incluindo Tournai, Gante e Antuérpia.',
            '- Importância Econômica: O estuário do Escalda em Antuérpia viabilizou a criação de um dos maiores e mais movimentados portos marítimos do mundo, centralizando o comércio e as indústrias petroquímicas e de manufatura da região de Flandres.',
            '3.2 A Bacia do Rio Mosa (Meuse): O rio Mosa também nasce na França e atravessa a porção oriental da Bélgica antes de seguir para os Países Baixos.',
            '- Dinâmica Geográfica: Nas Ardenas, o rio corre através de vales profundos e ravinas rochosas, apresentando um curso mais rápido e acidentado. Banha importantes centros urbanos e industriais da Valônia, como Namur (onde recebe as águas do rio Sambre) e Liège.',
            '- Afluentes e Divisor de Águas: As encostas do cume de Botrange funcionam como um importante divisor de águas na bacia do Mosa, dando origem a diversos rios e córregos menores das Ardenas, tais como o Helle, o Roer, o Schwarzbach (que fluem para o leste/norte) e o Bayehon e Trôs Marets (que correm para o sul/oeste).',
            '3.3 A Rede de Canais Artificiais: Para compensar as limitações de navegabilidade de alguns trechos fluviais e conectar as bacias do Escalda e do Mosa, a Bélgica construiu uma rede monumental de canais artificiais que funcionam como rodovias hídricas:',
            '- Canal Albert: Inaugurado no período entre-guerras, conecta o rio Mosa em Liège diretamente ao porto de Antuérpia no Escalda, transpondo desníveis topográficos por meio de eclusas industriais avançadas.',
            '- Canal de Bruxelas-Charleroi: Une a região industrial metalúrgica do sul à capital de Bruxelas.',
            '- Canal do Centro: Famoso por seus elevadores hidráulicos históricos de navios (reconhecidos como Patrimônio da UNESCO), que vencem grandes desníveis de relevo de forma eficiente.',
            '- Canal Gent-Terneuzen e Canal de Willebroek: Vias de águas profundas essenciais para o transporte de matérias-primas e produtos manusaturados das indústrias do norte.'
          ]
        },
        {
          title: 'CAPÍTULO IV: RECURSOS NATURAIS E EXPLORAÇÃO ECONÔMICA',
          diagram: `[Recursos Naturais da Bélgica]
│
┌──────────────────┬──────────────┼──────────────┬──────────────────┐
▼                  ▼              ▼              ▼                  ▼
[Solos Férteis]  [Carbonatos]  [Sílica]   [Metais: Zn e Pb]  [Carvão]
- Planalto cent.  - Calcário    - Areia    - Nyrstar          - Séc. XIX e XX
- 26% lavouras    - Mármore n.  - Evonik   - Minas fechadas   - Fechado em 2016`,
          paragraphs: [
            'A dotação de recursos naturais no território belga apresenta disparidades regionais marcantes, tendo desempenhado um papel crucial na estruturação socioeconômica do país desde a Revolução Industrial:',
            '4.1 Solos Férteis e o Setor Agrícola: Cerca de 26% do território belga é classificado como terra arável de alta fertilidade, concentrada no Planalto Central. Beneficiada por chuvas regulares e pelo uso intensivo de fertilizantes e maquinários modernos, a agricultura belga atinge níveis elevados de produtividade. Os principais produtos cultivados são cereais (trigo e cevada), batatas, beterraba açucareira (matéria-prima para a indústria de açúcar) e forragens para a pecuária de leite e corte. O setor agrícola, embora represente apenas 2% da força de trabalho nacional, é crucial para a segurança alimentar do país e abastece as indústrias alimentícias belgas e europeias.',
            '4.2 Carbonatos e Sílica: A estrutura geológica da Bélgica abriga ricos recursos minerais não metálicos:',
            '- Carbonatos: Depósitos maciços de calcário, dolomita e siderita são explorados no norte e nas bordas das Ardenas. O calcário belga é matéria-prima essencial para a fabricação de cimento, cal, purificação na metalurgia do ferro e produção de vidro. O país é famoso por seu mármore negro de alta qualidade, exportado globalmente.',
            '- Sílica: A areia de sílica de alta pureza é abundante em solo belga, sendo explorada desde o século XIX. O país sedia operações da multinacional Evonik, que estruturou grandes plantas industriais em Antuérpia para processar a sílica em adesivos, isolantes térmicos, borrachas industriais e produtos odontológicos exportados para mais de 160 países.',
            '4.3 Minerais Metálicos (Zinco, Chumbo e Ferro): A geologia belga é historicamente rica em depósitos de minerais não ferrosos, com destaque para as jazidas de zinco e chumbo exploradas desde o século XIV.',
            '- A Indústria do Zinco: A Bélgica foi o berço da multinacional Nyrstar, uma das maiores produtoras de zinco refinado do mundo. No terceiro trimestre de 2018, as refinadoras belgas produziram 270.000 toneladas métricas de zinco e 55.000 toneladas de chumbo. No entanto, as minas belgas de extração bruta foram fechadas em meados do século XX devido a dificuldades técnicas de drenagem subterrânea e esgotamento das jazidas, forçando o país a importar o minério bruto para refino doméstico.',
            '- Indústria de Ferro e Aço: As jazidas de ferro do sul viabilizaram a próspera metalurgia belga. Atualmente, o país importa minério de ferro e exporta aço de alta resistência (cerca de 5 milhões de toneladas exportadas anualmente), ocupando posições de destaque na cadeia automobilística e de construção civil europeia.',
            '4.4 O Carvão e a Transição Energética: Durante os séculos XIX e XX, a mineração de carvão mineral nas bacias do sul (como as bacias de Liège e Charleroi) impulsionou a metalurgia e a geração termoelétrica que sustentaram o império belga. Contudo, devido aos elevados custos de extração em minas profundas e aos impactos ambientais das emissões de dióxido de carbono, a Bélgica promoveu um fechamento gradual e planejado de suas minas de carvão. Em 2016, o país encerrou em definitivo todas as suas operações de mineração de carvão, unindo-se a um grupo restrito de países europeus que aboliram o combustível em prol de metas de descarbonização e combate ao aquecimento global.'
          ]
        },
        {
          title: 'CAPÍTULO V: BIOLOGIA, ECOLOGIA E A FLORESTA DE SONIAN',
          diagram: `[Silva Carbonaria / Arduenna Silva]
│ (Origem histórica medieval)
▼
[Floresta de Sonian] (UNESCO)
│
┌───────────────────┴───────────────────┐
▼                                       ▼
[Fauna e Extinções]                     [Ecoduto e Conectividade]
- Urso (1000 d.C.)                      - Rodovia R0 dividia o espaço
- Lobo (1810 d.C.)                      - Ecoduto de 60m (2018)
- Morcegos Natura 2000                  - Rewilding Europe`,
          paragraphs: [
            'A vegetação original da Bélgica é composta por florestas estacionais deciduais de clima temperado, com destaque para a faia (Fagus sylvatica) e o carvalho-alvar (Quercus robur). Contudo, a intensa ocupação agrícola e a urbanização reduziram a cobertura florestal natural do país para cerca de 22% do território, concentrada na região sul das Ardenas.',
            '5.1 A Floresta de Sonian (Zoniënwoud / Forêt de Soignes): Com 4.421 hectares de extensão, a Floresta de Sonian situa-se na transição periurbana da periferia sudeste de Bruxelas. Ela estende-se pelos municípios flamengos de Sint-Genesius-Rode, Hoeilaart, Overijse e Tervuren; pelos municípios bruxelenses de Uccle, Watermael-Boitsfort, Auderghem e Woluwe-Saint-Pierre; e pelas cidades valonas de La Hulpe e Waterloo. A sua gestão é descentralizada e dividida entre as três regiões belgas: Flandres (56%), Bruxelas (38%) e Valônia (6%).',
            '- História e Origem: A floresta é um remanescente da antiga Silva Carbonária (ou Floresta de Carvão) e da antiga floresta das Ardenas descrita pelos romanos (Arduenna Silva). Na Idade Média, funcionou como terreno exclusivo de caça para os Duques de Brabante e a corte imperial dos Habsburgos (representada nas tapeçarias renascentistas Caçadas de Maximiliano no Museu do Louvre).',
            '- O Impacto do Desmatamento: No início do século XIX, a floresta contava com mais de 100 quilômetros quadrados. Sofreu reduções severas causadas pela exploração madeireira, incluindo o corte de 22.000 carvalhos centenários ordenado por Napoleão Bonaparte para construir a flotilha de invasão contra a Inglaterra em Boulogne. A exploração comercial prosseguiu sob o rei Guilherme I dos Países Baixos, reduzindo a floresta para os atuais 44,2 quilômetros quadrados. Em 1815, os direitos sobre uma parte considerável da floresta em Waterloo foram concedidos ao Duque de Wellington em reconhecimento à sua vitória militar.',
            '- Patrimônio Mundial da UNESCO: Em 2017, partes intocadas da Floresta de Sonian foram inscritas pela UNESCO na rede transnacional de "Florestas Primárias de Faia dos Cárpatos e de Outras Regiões da Europa", devido à preservação de ecossistemas florestais primitivos e à presença de espécimes de faias europeias com mais de 200 anos de idade datando do período austríaco.',
            '5.2 Fauna, Extinções e a Fragmentação Habitacional: A ação humana intensa e a fragmentação do ecossistema causaram extinções em massa de espécies nativas na Floresta de Sonian. Originalmente habitada por 46 espécies de mamíferos, a floresta testemunhou o desaparecimento completo do urso-pardo (extinto por volta de 1000 d.C.), do lobo (extinto por volta de 1810), do leirão-avelã (extinto por volta de 1842), do cervo-vermelho, do texugo, da lebre e do besouro-veado (Lucanus cervus). O javali, considerado extinto na floresta desde 1957, voltou a registrar espécimes livres em 2007 (provavelmente fruto de animais que fugiram do cativeiro ou foram deliberadamente soltos).',
            '- Área Protegida Natura 2000: A riqueza de morcegos na floresta motivou a classificação da área como zona protegida sob a rede europeia Natura 2000. Entre as espécies ameaçadas sob proteção da Diretiva de Habitats da União Europeia estão o morcego-orelhudo-grande (Myotis myotis), o morcego de Geoffroy (Myotis emarginatus), o morcego-barbastela (Barbastella barbastellus), o morcego-das-lagoas (Myotis dasycneme) e o morcego-de-bechstein (Myotis bechsteinii), além do pica-pau-preto (Dryocopus martius) e do tritão-de-crista (Triturus cristatus).',
            '- Iniciativas de Rewilding e Conectividade Ecológica: Em 2016, a Floresta de Sonian integrou-se à iniciativa Rewilding Europe. Para combater a fragmentação habitacional causada pelas rodovias pavimentadas — com destaque para o Anel Viário de Bruxelas (R0) que corta profundamente a floresta —, foi construído um Ecoduto de 60 metros de largura coberto de solo e vegetação nativa sobre a rodovia. Aberta em junho de 2018, a estrutura restabeleceu a conectividade biológica, permitindo que raposas, javalis, anfíbios e roedores cruzem de forma segura as diferentes porções da floresta.'
          ]
        },
        {
          title: 'CAPÍTULO VI: IMPACTO HUMANO, ESTRESSE HÍDRICO E POLUIÇÃO QUÍMICA',
          diagram: `[Desafios Ambientais da Bélgica]
│
┌─────────────────────────┼─────────────────────────┐
▼                         ▼                         ▼
[Estresse Hídrico]      [Poluição Química]        [Eventos Climáticos]
- 18ª posição global    - PFAS na água potável    - Enchentes de 2021 (Ardenas)
- Pavimentação urbana   - Nitratos agrícolas      - Necessidade de defesas
- Escoamento s/ infilt. - Efluentes industriais   - LIFE Belini e Wetlands4Cities`,
          paragraphs: [
            'Como uma das nações mais populosas, urbanizadas e industrializadas da Europa, a Bélgica enfrenta desafios ecológicos agudos que ameaçam seus recursos hídricos e florestais:',
            '6.1 A Crise do Estresse Hídrico Extremo: A Bélgica ocupa o 18º lugar entre os 25 países do mundo que sofrem de estresse hídrico extremo anualmente, sendo a única nação do norte da Europa a enfrentar essa situação. O país utiliza a maior parte de seus recursos hídricos renováveis todos os anos, elevando severamente sua vulnerabilidade à seca em períodos de estiagem.',
            '- O Mecanismo da Escassez: Essa crise hídrica não decorre de baixa pluviosidade, mas sim do padrão de urbanização e pavimentação das cidades. O excesso de asfalto, concreto e impermeabilização do solo nas regiões metropolitanas de Bruxelas, Flandres e Antuérpia impede a infiltração natural das águas das chuvas para a recarga dos aquíferos subterrâneos. Em vez disso, a maior parte da água pluvial é canalizada e escoada diretamente para os bueiros e rios, fluindo de forma estéril para o mar.',
            '6.2 Poluição Química por Nitratos e PFAS: A qualidade das águas belgas é pressionada por efluentes urbanos, industriais e agrícolas:',
            '- Poluição por Nitratos: Na Flandres, o uso intensivo de fertilizantes nitrogenados na agricultura eleva de forma preocupante os níveis de nitratos nos rios e águas subterrâneas, comprometendo a saúde ecológica das bacias.',
            '- PFAS ("Químicos Eternos"): Recentemente, a detecção de compostos perfluoroalquilados (PFAS) na água potável da Flandres e da Valônia gerou grande preocupação pública. Esses poluentes químicos de origem industrial persistem indefinidamente no meio ambiente e acumulam-se no corpo humano, forçando os governos regionais a implementar metas ambientais rigorosas e planos de monitoramento hídrico imediatos.',
            '6.3 Mudanças Climáticas e a Tragédia das Enchentes de 2021: Em julho de 2021, chuvas com volumes recordes associadas à saturação do solo e a defesas hidráulicas precárias desencadearam enchentes catastróficas e fatais na região das Ardenas. O desastre colocou a adaptação às mudanças climáticas e a preparação para desastres hídricos no topo da agenda política do país.',
            '6.4 Iniciativas de Resiliência Ecológica: Para combater a escassez, a poluição e os desastres hídricos, a Bélgica implementa programas de transição ecológica cofinanciados pela União Europeia:',
            '- Pacto Azul (Blue Deal): Uma iniciativa do governo flamengo dotada de 155 milhões de euros para investir em projetos de gestão circular da água, melhoria de infiltração da água da chuva no solo e combate à seca.',
            '- Wetlands4Cities: Projeto voltado para a restauração ecológica de pântanos e zonas úmidas na periferia das cidades da Flandres, visando criar amortecedores naturais contra enchentes e promover a resiliência urbana por meio de soluções baseadas na natureza.',
            '- LIFE Belini: Projeto que reúne parceiros para melhorar a qualidade ecológica das águas, promover a biodiversidade e mitigar as inundações na bacia internacional do rio Escalda.',
            '- EMfloodResilience: Programa voltado para investigar cientificamente como os rios e córregos das Ardenas reagem a chuvas intensas, visando aprimorar os modelos de previsão de cheias e evitar futuras catástrofes humanitárias e ecológicas na região.'
          ]
        }
      ]
    }
  },
  'cultura-sociedade': {
    small: {
      title: 'Cultura e Sociedade da Bélgica',
      subtitle: 'A sinergia entre o patrimônio clássico, as artes populares e o pluralismo social',
      intro: 'Com base nos textos da Wikipédia que você enviou sobre a cultura, artes, culinária, tradições e personalidades da Bélgica, estruturei o Texto Resumido (Tamanho Normal) para o seu site, integrando as disciplinas de Artes, Sociologia e Língua Portuguesa.',
      sections: [
        {
          title: 'I. A TRADIÇÃO PICTÓRICA: DA PINTURA FLAMENGA AO SURREALISMO',
          paragraphs: [
            'A tradição artística belga na pintura é uma das mais ricas da Europa, caracterizada pela transição entre o rigor do naturalismo clássico e a ousadia das vanguardas modernas. No século XV, Flandres tornou-se o berço dos chamados Pintores Flamengos Primitivos (como Jan van Eyck e Rogier van der Weyden), pioneiros na popularização da técnica de pintura a óleo. Sob a perspectiva sociológica, essa arte nasceu ligada ao surgimento de uma mentalidade burguesa e mercantil, valorizando a observação meticulosa da luz e dos detalhes do cotidiano. Posteriormente, no século XVII, o Barroco flamengo floresceu com a Escola de Antuérpia, liderada pelo dinamismo de Peter Paul Rubens e Anthony van Dyck.',
            'No século XX, a Bélgica consolidou-se como um polo de inovação estética através do Surrealismo, tendo em René Magritte o seu maior expoente. Magritte destacou-se pela justaposição ilusionista de objetos comuns em atmosferas irreais, desafiando a percepção visual do observador. Suas obras de realismo mágico — como A Traição das Imagens ("Ceci n\'est pas une pipe") e Tentando o Impossível (1928) — funcionam como metáforas visuais. Sob a ótica filosófica e artística, sua obra deita por terra a ideia de que a arte deve ser uma mera cópia da realidade, propondo a criação de uma nova dimensão lúdica e conceitual.'
          ]
        },
        {
          title: 'II. A NONA ARTE: A RELEVÂNCIA DA BANDA DESENHADA',
          paragraphs: [
            'A banda desenhada (conhecida localmente como bande dessinée ou "Nona Arte") é um pilar da identidade visual e cultural da Bélgica. O país é o berço de estilos de traço influentes, como a Ligne Claire (linha clara), e de franquias que conquistaram alcance global a partir de meados do século XX. O personagem Tintim, criado por Hergé em 1929, é o maior símbolo dessa produção literária e artística.',
            'Outro marco fundamental foi a criação de Les Schtroumpfs (conhecidos no Brasil como Os Smurfs e em Portugal como Os Estrumpfes) pelo cartunista belga Pierre Culliford, o Peyo, em 1958.',
            '- A Origem Linguística: A palavra original "Schtroumpf" nasceu de um almoço informal em 1957 entre Peyo e seu amigo André Franquin, quando Peyo esqueceu a palavra para "saleiro" e pediu: "Passa-me o... schtroumpf". A brincadeira linguística evoluiu para o idioma característico dessas criaturas azuis, que substituem substantivos e verbos pelo termo "smurf".',
            '- Sociologia e Folclore: Os Smurfs vestem o barrete frígio (símbolo histórico de liberdade) e vivem em uma comunidade cooperativa e igualitária livre de transações monetárias, o que gerou, nos anos 1980, paródias e análises sociológicas curiosas que associavam a vila a uma analogia do comunismo.'
          ]
        },
        {
          title: 'III. A CULTURA DA CERVEJA E A GASTRONOMIA NACIONAL',
          paragraphs: [
            'A culinária belga reflete uma síntese de influências francesas, holandesas e alemãs, unindo a fartura da culinária germânica à qualidade técnica francesa. O prato nacional mais famoso é o moules-frites (mexilhões cozidos servidos com batatas fritas).',
            '- As Batatas Fritas (Frites): Registradas desde 1680 na região do rio Mosa, as batatas são submetidas a um processo tradicional de fritura dupla em gordura animal (gordura bovina). O termo inglês "French Fries" (fritas francesas) surgiu de forma equivocada na Primeira Guerra Mundial, quando soldados americanos consumiram o prato servido por soldados belgas que falavam francês. As batatas são tradicionalmente servidas em cones de papel (cornet de frites) acompanhadas por uma vasta gama de molhos complexos à base de maionese, como o molho Andalouse, Samurai e Mammoet.',
            '- A Cultura Cervejeira: Em 2016, a UNESCO integrou a cultura da cerveja na Bélgica na lista de Patrimônio Cultural Imaterial da Humanidade. O país produz quase 1.500 tipos de cervejas de alta complexidade (como as marcas Stella Artois, Duvel, Leffe e Hoegaarden). Destacam-se as cervejas trapistas (como a Chimay), produzidas sob a supervisão de monges cujos lucros são destinados a caridades, e as cervejas de fermentação espontânea (Lambics). Cada variedade de cerveja belga exige o serviço em um copo de formato exclusivo projetado para realçar seus aromas.'
          ]
        },
        {
          title: 'IV. O CHOCOLATE BELGA E O PATRIMÔNIO DA CONFEITARIA',
          paragraphs: [
            'Reconhecido internacionalmente pelo seu alto padrão de excelência, o chocolate é parte indissociável da economia e da identidade cultural do país. Essa associação remonta a 1635, época em que a Bélgica encontrava-se sob ocupação espanhola, logo após o cacau ter sido trazido da América Central para a Europa.',
            'No início do século XX, o país passou a importar cacau em larga escala de sua colônia africana, o Congo Belga. A produção é rigidamente protegida por uma lei de 1884, que estabelece o uso de no mínimo 35% de cacau puro e proíbe a adição de gorduras vegetais artificiais de baixa qualidade (como óleo de palma) para manter o ponto de fusão ideal. Uma das grandes contribuições belgas à confeitaria mundial foi a invenção do praliné por Jean Neuhaus II em 1912, que consiste em uma delicada casca de chocolate recheada com cremes macios e fondant.'
          ]
        },
        {
          title: 'V. A EXPRESSÃO MUSICAL: DO CLASSICISMO AO HIP-HOP DE STROMAE',
          paragraphs: [
            'A música belga é historicamente marcada pela inovação técnica e pela fusão de correntes artísticas. No século XIX, o inventor belga Adolphe Sax revolucionou a música global ao criar o saxofone. No campo da música popular e da chanson francófona, o cantor e compositor Jacques Brel alcançou prestígio mundial por sua interpretação teatral e poética de canções como Ne me quitte pas, influenciando artistas como David Bowie e Frank Sinatra. Em termos comerciais, Salvatore Adamo tornou-se um dos artistas mais vendidos do mundo na década de 1960.',
            'Na atualidade, a Bélgica destaca-se no cenário da música eletrônica e do hip-hop alternativo, tendo em Stromae (pseudônimo de Paul Van Haver, anagrama de Maestro no dialeto verlan) sua figura mais emblemática. Filho de mãe belga e de pai ruandês (vítima do genocídio de 1994), Stromae combina de forma única batidas da Eurodance dos anos 1990 com a melancolia lírica da chanson clássica de Jacques Brel. Suas composições — como Papaoutai e Alors on danse — abordam temas sociológicos profundos, como a ausência paterna, a alienação urbana e as desigualdades sociais, obtendo aclamação crítica e comercial internacional.'
          ]
        },
        {
          title: 'VI. FOLCLORE, COSTUMES E A DINÂMICA RELIGIOSA',
          paragraphs: [
            'O folclore belga reflete o rico legado cultural e religioso do país, manifestando-se em procissões e desfiles medievais que atraem milhares de pessoas:',
            '- Ommegang de Bruxelas: Desfile folclórico que comemora a entrada triunfal do imperador Carlos V em 1549, com gigantes processionais e trajes medievais. É reconhecido pela UNESCO desde 2019.',
            '- O Meyboom: Tradição de Bruxelas que remonta a 1308 para plantar a "árvore da alegria" no dia 9 de agosto.',
            '- Carnaval de Binche: Um dos mais antigos e famosos carnavais da Europa, tombado pela UNESCO em 2003. Caracteriza-se pelos desfiles dos Gilles na terça-feira de Carnaval, homens que vestem trajes nas cores nacionais (vermelho, preto e amarelo), máscaras de cera e grandes chapéus de plumas de avestruz, desfilando ao som de tambores e atirando laranjas à multidão para atrair boa sorte.',
            'Sob a perspectiva sociológica e religiosa, a Bélgica é um Estado laico com total separação entre Igreja e Estado. O Catolicismo Romano é a denominação religiosa tradicional e predominante do país (englobando entre 47% e 75% da população, embora com baixa frequência ativa aos domingos). A segunda maior religião é o Islamismo, que abrange cerca de 6% da população, com minorias protestantes, ortodoxas e judias. A constituição garante que o Estado financie os salários dos sacerdotes de denominações oficialmente reconhecidas, assegurando o pluralismo confessional e a liberdade de culto na sociedade contemporânea.'
          ]
        }
      ]
    },
    large: {
      title: 'Tratado de Cultura, Artes e Sociedade da Bélgica',
      subtitle: 'Estudo analítico sobre a evolução das artes visuais, literatura popular, patrimônio gastronômico, expressões musicais e a dinâmica sociorreligiosa do território belga',
      intro: 'Aqui está o Tratado de Cultura e Sociedade da Bélgica em sua versão completa, gigante e extremamente aprofundada, processando minuciosamente todas as informações, dados históricos, estatísticas, biografias e contextos sociológicos dos arquivos fornecidos. A cultura da Bélgica é um mosaico dinâmico e complexo, estruturado a partir da convivência histórica de suas três principais comunidades linguísticas — a flamenga (neerlandófona), a valona (francófona) e a germanófona —, além de expressivas comunidades de imigrantes, com destaque para a herança da República Democrática do Congo. Sob a perspectiva da Sociologia, o país funciona como um laboratório de pluralismo e identidades sobrepostas que se manifestam tanto no folclore público quanto nas artes. Sob a ótica das Artes, as contribuições belgas ao longo dos séculos são desproporcionais ao tamanho geográfico do país, estendendo-se das inovações da pintura a óleo no gótico tardio à revolução do surrealismo, da fundação da banda desenhada moderna à vanguarda da música eletrônica e do hip-hop contemporâneo. O presente tratado destina-se a analisar de forma profunda as múltiplas facetas que constituem o tecido cultural e social belga.',
      sections: [
        {
          title: 'CAPÍTULO I: ARTES VISUAIS: DO GÓTICO FLAMENGO AO SURREALISMO',
          diagram: `[ Gótico Flamengo ] (Séc. XV) ──► [ Barroco Flamengo ] (Séc. XVII) ──► [ Surrealismo Belga ] (Séc. XX)
- Uso pioneiro da pintura a óleo       - Escola de Antuérpia             - René Magritte
- Jan van Eyck (Arnolfini)            - Peter Paul Rubens / Van Dyck    - Auto-metalinguagem e paradoxos`,
          paragraphs: [
            'A história das artes visuais na Bélgica — referida historicamente como arte neerlandesa até o final do século XVI e como flamenga até o século XVIII — assenta-se sobre uma tradição de meticulosa observação da realidade, valorização da luz e experimentação de novas técnicas.',
            '1.1 Os Primitivos Flamengos e o Gótico Tardio: No século XV, as ricas cidades comerciais de Flandres (como Bruges, Gante e Antuérpia) testemunharam o surgimento da escola dos Primitivos Flamengos. Artistas como Jan van Eyck (famoso por O Casal Arnolfini), Hans Memling, Hugo van der Goes e Rogier van der Weyden revolucionaram a pintura ocidental ao desenvolverem e popularizarem o uso da pintura a óleo.',
            '- Perspectiva Sociológica: Diferentemente do Renascimento italiano, focado na geometria teórica e na perspectiva linear matemática, a pintura flamenga desenvolveu-se sob o patrocínio de uma burguesia mercantil e bancária florescente. Essa nova mentalidade burguesa exigia uma arte menos transcendental e mais focada na superfície material, com uma análise meticulosa da natureza, texturas, tecidos e objetos cotidianos, os quais frequentemente carregavam significados simbolísticos e morais ocultos. O elemento unificador desse escola era a luz, que envolvia todos os pormenores da representação.',
            '1.2 O Renascimento, a Dinastia Brueghel e o Barroco: No século XVI, a influência italiana penetrou nos Países Baixos, gerando movimentos como o Maneirismo de Antuérpia e o Romanismo. No entanto, o auge desse período deu-se com Pieter Bruegel, o Velho (e, posteriormente, seus filhos Pieter Brueghel, o Jovem, e Jan Brueghel, o Velho), cujas pinturas de gênero imortalizaram cenas camponesas, feiras tradicionais (kermis) e paisagens de inverno de forma crua, satírica e naturalista.',
            'No século XVII, após a divisão política dos Países Baixos, o sul católico (Bélgica) permaneceu sob a dominação espanhola, funcionando como polo de florescimento do Barroco flamengo. A Escola de Antuérpia foi inteiramente dominada pela figura de Peter Paul Rubens, que operou a partir de seu estúdio (hoje o museu Rubenshuis), pintando para monarcas e para a Igreja Católica contra-reformista, seguido de perto por seu talentoso pupilo Anthony van Dyck, renomado pintor de cortes europeias.',
            '1.3 O Surrealismo de René Magritte: No período entre-guerras, a Bélgica tornou-se um dos principais centros do Surrealismo europeu. O pintor René Magritte (1898–1967) destacou-se ao lado de Paul Delvaux como o grande mestre do surrealismo realista ou realismo mágico.',
            '- Perspectiva Filosófica (A Traição das Imagens): Magritte desafiou as premissas acadêmicas clássicas da representação mimética (cópia fiel do real). Em sua famosa obra La trahison des images (que estampa a frase "Ceci n\'est pas une pipe"), ele propõe um paradoxo visual: a pintura de um cachimbo não é um cachimbo real, mas sim a sua mera representação representativa. Em obras como Tentando o Impossível (1928), Magritte pinta a si mesmo criando o corpo tridimensional de uma mulher no espaço bidimensional de uma tela, utilizando a metalinguagem para ilustrar como a mente humana projeta realidades nos sonhos que parecem mais reais do que a própria vigília. Sua arte desafia a lógica acadêmica clássica por meio da justaposição de objetos banais (o chapéu-coco, o torso feminino, a maçã verde, o castelo sobre a rocha) em contextos impossíveis na vida real.',
            '1.4 Escultura e Arquitetura: Da Indústria ao Art Nouveau:',
            '- Escultura: No final do século XIX, Constantin Meunier (1831–1905) conquistou aclamação europeia ao retratar, em bronze e argila, figuras de trabalhadores industriais e mineiros de carvão. Suas esculturas coincidiram com a ascensão sociopolítica do movimento trabalhista na Europa, conferindo dignidade monumental ao operariado.',
            '- Art Nouveau: No campo da arquitetura, a Bélgica esteve na vanguarda global. Projetistas como Victor Horta, Paul Hankar, Henry van de Velde e o designer de mobiliário Gustave Serrurier-Bovy criaram o estilo Art Nouveau (cunhado em Paris, mas nascido em Bruxelas). As residências projetadas por Horta em Bruxelas, preservadas e tombadas como Patrimônio Mundial da UNESCO, caracterizam-se pelo uso inovador de ferro forjado e vidro em formas orgânicas inspiradas na natureza (curva em chicote), rompendo com o ecletismo neoclássico tradicional.'
          ]
        },
        {
          title: 'CAPÍTULO II: A NONA ARTE E O UNIVERSO DE PEYO (OS SMURFS)',
          diagram: `[Banda Desenhada Belga (BD)]
│ (Nona Arte)
┌───────────────────┴───────────────────┐
▼ (Linha Clara)                         ▼ (Estilo Marcinelle)
[ Tintim ] (Hergé, 1929)                [ Os Smurfs ] (Peyo, 1958)
- Realismo documental                   - Fantasia e comédia
- Alcance de 200M de cópias             - Sucesso global e social`,
          paragraphs: [
            'A banda desenhada (BD) é considerada o "Nona Arte" na Bélgica, integrando de forma indissociável a identidade cultural e a história do país.',
            '2.1 Hergé e a Escola de Bruxelas: O cartunista Hergé inaugurou a era de ouro dos quadrinhos belgas ao lançar As Aventuras de Tintim em 1929 no jornal Le Petit Vingtième. Hergé desenvolveu o estilo artístico da Ligne Claire (linha clara), caracterizado por traços pretos de espessura uniforme, ausência de hachuras e sombreamentos, e cenários de realismo documental meticuloso. Traduzido para mais de 50 idiomas e com mais de 200 milhões de cópias vendidas, Tintim estabeleceu os quadrinhos belgas como uma das principais influências artísticas do país no mundo.',
            '2.2 Peyo e a Criação de "Les Schtroumpfs" (Os Smurfs): Em 23 de outubro de 1958, no Jornal Spirou, o cartunista belga Pierre Culliford, conhecido como Peyo (1928–1992), introduziu pequenos personagens azuis como coadjuvantes na história La Flûte à six trous de sua série principal Johan et Pirlouit (conhecida no Brasil como Os Smurfs e a Flauta Mágica). O sucesso imediato com os leitores fez com que as criaturas ganhassem sua própria série em 1959.',
            '- A Gênese Linguística (Schtroumpf): Durante um almoço em 1957 com seu amigo André Franquin (criador do Marsupilami), Peyo esqueceu o termo para o saleiro e pediu: "Passa-me o... schtroumpf". Franquin respondeu: "Aqui está o schtroumpf, e quando acabar de schtroumpfar, schtroumpfe de volta". A piada interna evoluiu para a criação do idioma característico das criaturinhas azuis, que substituem a maioria dos substantivos e verbos pelo termo "smurf" (aportuguesamento do holandês original smurf).',
            '- Estrutura de Linguagem e Paródia Política: No álbum Schtroumpf vert et vert Schtroumpf (1972), Peyo parodiou as tensões linguísticas belgas. Na história, a vila divide-se geograficamente entre Norte e Sul devido a divergências sobre o uso do idioma: o Norte usa o termo como sufixo (ex: "smurfador de garrafas"), enquanto o Sul o usa como prefixo (ex: "smurf abridor"). O conflito linguístico fictício serve como uma analogia direta à histórica divisão sociopolítica entre as comunidades de Flandres (neerlandófonos) e da Valônia (francófonos).',
            '2.3 Análise Sociológica: Estrutura Social e Analogias Ideológicas: Os Smurfs são criaturas humanoides de pele azul, com altura equivalente a "três maçãs", que vestem calças brancas e barretes frígios brancos (historicamente associados à liberdade e à Revolução Francesa). A comunidade possui um único líder político e espiritual, o Papai Smurf (Grand Schtroumpf), que se diferencia ao vestir vermelho e ter 542 anos de idade.',
            `[Análise Sociológica das Teorias]
│
┌────────────────────┴────────────────────┐
▼                                         ▼
[Teoria Coletivista]                      [Análise Crítica de Gênero]
- Economia cooperativa                    - Criação da Smurfette por Gargamel
- Sem moeda ou propriedade privada        - Esteriótipo estético original
- Liderança de vermelho (Papai Smurf)     - Reformulações contemporâneas`,
            'Durante a década de 1980, sociólogos e críticos levantaram teorias satíricas sobre a estrutura social da vila:',
            '- Analogia Coletivista/Comunista: Defensores dessa teoria apontavam que a vila opera sob um modelo cooperativo perfeito, sem propriedade privada, onde todos trabalham pelo bem comum e os recursos são distribuídos igualmente na despensa coletiva. A liderança veste vermelho (Papai Smurf), e o antagonista, Gargamel (retratado com traços que remetem a estereótipos anticapitalistas de avareza), busca capturar as criaturas para transformá-las em ouro.',
            '- Crítica de Gênero: A vila original era exclusivamente masculina até Gargamel criar a Smurfette utilizando uma fórmula de argila, malícia e feitiçaria para introduzir a discórdia e o ciúme entre as criaturas. Originalmente com cabelos escuros e traços rudes, ela é convertida pelo Papai Smurf em uma criatura dócil e loira, gerando críticas posteriores sobre o machismo e o sexismo estrutural da obra original. O Studio Peyo (atualmente gerido pelo filho do cartunista, Thierry Culliford) rejeitou de forma veemente tais acusações, classificando-as como grotescas e desprovidas de seriedade.'
          ]
        },
        {
          title: 'CAPÍTULO III: TRADIÇÃO CERVEJEIRA E GASTRONOMIA NACIONAL',
          diagram: `[Cultura da Cerveja na Bélgica]
│ (Patrimônio da UNESCO, 2016)
▼
[1.500 Variedades de Cerveja]
│
┌────────────────────┴────────────────────┐
▼                                         ▼
[Cervejas Trapistas]                      [Fermentação Espontânea]
- Produzidas sob tutela de monges         - Lambics e Geuze
- Chimay, Westvleteren                    - Copos específicos para cada tipo`,
          paragraphs: [
            'A gastronomia da Bélgica é mundialmente celebrada por sua diversidade técnica e herança histórica, resumida popularmente pela premissa de que a culinária belga é servida na fartura da culinária alemã, mas com a refinada qualidade da culinária francesa.',
            '3.1 A Cultura da Cerveja (Patrimônio Cultural da UNESCO): Em 2016, a UNESCO inscreveu a cultura da cerveja na Bélgica na lista representativa do Patrimônio Cultural Imaterial da Humanidade. O país produz quase 1.500 marcas distintas de cervejas.',
            '- Cervejas Trapistas: Cervejas de alta fermentação fabricadas dentro de mosteiros trapistas ativos sob o controle de monges (como a famosa cervejaria Chimay ou a raríssima Westvleteren). Os lucros da produção devem obrigatoriamente ser revertidos para a manutenção do mosteiro e projetos de caridade social.',
            '- Cervejas de Abadia: Marcas comerciais que licenciam receitas históricas de antigas abadias, como a Leffe, cuja receita original remonta ao ano de 1240 na abadia de Dinant.',
            '- Stella Artois: Originária da cervejaria tradicional Den Hoorn (fundada em Leuven em 1366), a marca foi rebatizada de "Artois" após ser adquirida pelo mestre cervejeiro Sebastian Artois em 1717. O nome "Stella" (estrela em latim) surgiu em 1926 como uma edição de Natal limitada que se tornou um sucesso permanente.',
            '- Duvel: Criada em 1918 por Albert Moortgat com o nome de Victory Ale para celebrar o fim da I Guerra Mundial, a cerveja foi apelidada por um provador local como "Que diabo de cerveja" (Duvel em flamengo), adotando o nome comercial definitivo em 1923.',
            '- A Especificidade dos Copos: Um aspecto fundamental do folclore cervejeiro belga é a exigência de que cada estilo e marca de cerveja seja servida em seu copo correspondente de formato exclusivo (cálice, tulipa, balão), projetado cientificamente para valorizar a liberação de aromas e a retenção de espuma.',
            '3.2 A Gastronomia Nacional e as "Batatas Fritas" (Frites): O prato nacional por excelência é o moules-frites (mexilhões ao vapor com aipo e cebola, servidos com batatas fritas), ao lado da carbonade flamande (stoofvlees), um guisado de carne bovina cozido lentamente em cerveja escura local.',
            `[A Origem das Batatas Fritas]
│
▼
[Namur, Dinant e Andenne (rio Mosa, 1680)]
│
┌───────────────────────┴───────────────────────┐
▼ (Técnica Tradicional)                         ▼ (Serviço de Rua)
[Fritura dupla em gordura bovina]               [Friterie / Frietkot / Frituur]
[Controvérsia da Acrilamida, 2017]              [Cones de papel e molhos complexos]`,
            '- Origem das Batatas Fritas: A documentação histórica (livro Curiosités de la table dans les Pays-Bas-Belgiques, 1781) indica que os moradores de Namur e Dinant consumiam batatas cortadas e fritas desde 1680. Os peixes pequenos do rio Mosa costumavam ser fritos para alimentação; nos invernos rigorosos, quando o rio congelava, os habitantes cortavam batatas em formato de peixinhos para fritá-las. A expressão inglesa "French Fries" decorre do fato de que, na I Guerra Mundial, o exército belga utilizava o francês como idioma de comando oficial; ao servirem as fritas aos soldados americanos, estes acreditaram tratar-se de uma especialidade francesa.',
            '- A Técnica da Fritura Dupla: O segredo das batatas fritas belgas consiste na fritura dupla utilizando gordura de carne bovina pura (blanc de bœuf). Elas são fritas uma primeira vez a temperaturas mais baixas (cerca de 150 °C) para cozinhar o interior, retiradas para descansar e resfriar, e fritas uma segunda vez a temperaturas elevadas (cerca de 180 °C) para garantir uma casca dourada e crocante.',
            '- A Controvérsia da Acrilamida (2017): Em 2017, a Comissão Europeia propôs diretrizes para limitar a acrilamida (composto potencialmente cancerígeno gerado pela fritura a altas temperaturas), sugerindo que as batatas fossem escaldadas em água antes de serem fritas. A medida gerou forte reação de políticos e cidadãos belgas, que a consideraram uma agressão direta à tradição gastronômica nacional e ao funcionamento das tradicionais friteries (frietkots ou frituurs).',
            '- Os Molhos: As batatas fritas são servidas com uma grande variedade de molhos à base de maionese, como o molho Andalouse (maionese, extrato de tomate e pimentão), Samurai (maionese com pimenta da Tunísia) e o tradicional looksaus (maionese com alho).'
          ]
        },
        {
          title: 'CAPÍTULO IV: O CHOCOLATE BELGA E O PRALINÉ',
          diagram: `[História do Chocolate na Bélgica]
│ (Início em 1635, ocupação espanhola)
▼
[Controle de Qualidade]
│ (Lei de 1884)
┌───────────────────────┴───────────────────────┐
▼                                               ▼
[Teor de Cacau]                                 [Técnica Artesanal]
- Mínimo de 35% de cacau puro                   - Banimento de óleos vegetais
- Jean Neuhaus II inventa praliné (1912)        - Chocolatiers independentes`,
          paragraphs: [
            'O chocolate belga é uma referência global de alta gastronomia e controle de qualidade industrial, integrando a herança colonial do país com o aprimoramento técnico.',
            '4.1 Origem e a Legislação de 1884: A associação da Bélgica com o cacau iniciou-se em 1635, durante a dominação espanhola, logo após o chocolate ter sido trazido das colônias mesoamericanas para a Europa. Inicialmente consumido como bebida quente pelas classes abastadas, o consumo popularizou-se no século XIX. No início do século XX, o país passou a importar cacau em larga escala de sua colônia na África Central, o Congo Belga.',
            'Para proteger a reputação do chocolate belga de falsificações e adulterações com gorduras baratas (como o óleo de palma ou gordura de coco), o governo belga promulgou uma rigorosa lei de controle de qualidade em 1884:',
            '- Exigência Mínima: Impôs que o chocolate belga contivesse, no mínimo, 35% de cacau puro.',
            '- Banimento de Óleos Vegetais: Proibiu o uso de gorduras vegetais que não fossem a própria manteiga de cacau para aumentar artificialmente o ponto de derretimento do produto, assegurando que o chocolate derreta suavemente à temperatura corporal.',
            '4.2 Jean Neuhaus II e a Invenção do Praliné: Em 1912, o chocolatier de Bruxelas Jean Neuhaus II revolucionou o mercado de confeitos ao inventar o praliné belga, que consiste em bombons com uma casca rígida de chocolate fino recheados com cremes macios, fondant, ganache ou praliné de avelã. Sua esposa desenvolveu a caixa tradicional de papelão (ballotin) para proteger e apresentar os delicados bombons, gerando uma cultura de chocolaterias artesanais e marcas famosas mundialmente como Côte d\'Or, Leonidas, Guylian e Neuhaus.',
            '4.3 O Jenever: O Destilado Nacional: Ao lado da cerveja, a Jenever (também conhecida como genièvre) é o destilado nacional da Bélgica, sendo uma bebida ancestral aromatizada com bagas de zimbro que deu origem ao gim inglês moderno. Protegida pela União Europeia sob onze denominações de origem controlada (AOCs), a maior parte de sua produção tradicional ocorre na Bélgica.',
            '- O Ritual do Primeiro Gole: Servida tradicionalmente em pequenos copos de argila congelados até a borda, os belgas seguem um costume estrito: o copo cheio deve permanecer sobre a mesa, o consumidor deve curvar-se para tomar o primeiro gole sem tocar no copo com as mãos, e somente após esse ritual o copo pode ser erguido para o consumo regular.'
          ]
        },
        {
          title: 'CAPÍTULO V: A EXPRESSÃO MUSICAL: DO CLASSICISMO AO HIP-HOP DE STROMAE',
          diagram: `[Escola Franco-Flamenga] (Séc. XV-XVI)
│
▼
[Adolphe Sax] (Século XIX)
(Invenção do saxofone)
│
▼
[Chanson: Jacques Brel]
(Ne me quitte pas, Amsterdam)
│
▼
[Stromae / Paul Van Haver]
- Alors on danse, Papaoutai
- Eurodance 90 + Chanson clássica`,
          paragraphs: [
            'A história musical da Bélgica é marcada por inovações técnicas, virtuosismo instrumental e uma fusão de correntes estéticas e linguísticas.',
            '5.1 A Escola Franco-Flamenga e o Saxofone: Nos séculos XV e XVI, os compositores da Escola Franco-Flamenga (como Johannes Ciconia, Guillaume Dufay, Gilles Binchois, Johannes Ockeghem, Josquin des Prez e Orlande de Lassus) dominaram a polifonia vocal sacra na Europa, sendo recrutados pelas principais catedrais e cortes da Itália, França e Alemanha.',
            'No século XIX, o inventor belga Adolphe Sax (1814–1894), nascido em Dinant, desenvolveu o saxofone, patenteado em 1846. O instrumento revolucionou a música militar e, posteriormente, tornou-se o pilar do jazz americano no século XX. A Bélgica revelou outros virtuosos instrumentistas, como o guitarrista cigano Django Reinhardt, pioneiro do jazz manouche, e Toots Thielemans, amplamente considerado o maior gaitista de jazz do século, cuja gaita imortalizou temas de filmes como Perdidos na Noite (Midnight Cowboy) e do programa infantil Vila Sésamo (Sesame Street).',
            '5.2 Jacques Brel e a Chanson Francófona: O maior expoente da música belga no século XX foi Jacques Brel (1929–1978). Nascido em Bruxelas de ascendência flamenga, Brel optou por cantar em francês, embora tenha gravado versões de suas músicas em neerlandês (Laat me niet alleen). Deixou a vida burguesa de Bruxelas para tentar a sorte nos cabarés de Paris de Jacques Canetti.',
            'Suas músicas caracterizam-se pela dramaticidade poética, ironia social e interpretação visceral nos palcos. Clássicos como Ne me quitte pas, Amsterdam, La valse à mille temps e Les Bourgeois foram regravados por grandes nomes da música mundial como David Bowie, Frank Sinatra e Nina Simone. No auge de sua carreira, em 1966, Brel anunciou sua despedida definitiva dos palcos, dedicando-se ao cinema, à aviação e à navegação. Passou seus últimos anos de vida recluso na baía de Atuona, na ilha de Hiva Oa (Polinésia Francesa), onde foi sepultado ao lado de Paul Gauguin após falecer de embolia pulmonar aos 49 anos.',
            '5.3 O Fenômeno de Vendas de Salvatore Adamo: Na segunda metade da década de 1960, o cantor belga de origem italiana Salvatore Adamo alcançou um estrondoso sucesso comercial global com baladas românticas e canções poéticas como Tombe la neige. Adamo vendeu milhões de cópias de discos ao redor do mundo, tornando-se, naquele período, o segundo músico que mais vendia discos no planeta, superado apenas pelos britânicos The Beatles.',
            '5.4 O Surgimento da Eletrônica e do Hip-Hop de Stromae: No final da década de 1980, a Bélgica desempenhou um papel central no surgimento da música Techno e do movimento New Beat, revelando bandas pioneiras de Electronic Body Music (EBM) como o Front 242, Snowy Red e o grupo Technotronic, cujo single Pump Up The Jam (1989) tornou-se um dos maiores hits de dance music da história da música.',
            'Na atualidade, o cantor e produtor Stromae (Paul Van Haver, nascido em 1985 em Etterbeek) é o maior nome da música belga. Filho de mãe belga e de pai ruandês (arquiteto que foi assassinado no genocídio de Ruanda de 1994, ausência que o músico retratou de forma marcante na música Papaoutai), Stromae formou-se como engenheiro de som no INRACI.',
            '- O Estilo Musical: Suas canções fundem sintetizadores e batidas eletrônicas da Eurodance dos anos 1990 com a dramaticidade poética e existencial da chanson tradicional de Jacques Brel, além de influências da rumba congolesa e do hip-hop americano. Seu single de estreia Alors on danse (2009) atingiu o primeiro lugar nas paradas de dezenas de países. Músicas de seus álbuns subsequentes, Racine carrée (2013) e Multitude (2022) — como Formidable, Tous les mesmos e L\'enfer (onde aborda abertamente suas crises de depressão e pensamentos suicidas) —, tratam de temas sociológicos complexos, conquistando enorme aclamação da crítica especializada europeia.'
          ]
        },
        {
          title: 'CAPÍTULO VI: FOLCLORE, FESTIVIDADES E DINÂMICA SOCIORRELIGIOSA',
          diagram: `[Patrimônio Folclórico Belga]
│
┌──────────────────┬──────────────┴──────────────┬──────────────────┐
▼                  ▼                             ▼                  ▼
[Ommegang Brux.]   [Meyboom de Bruxelas]         [Carnaval Binche]  [Procissão Sangue]
- Entrada Carlos V - Tradição de 1308            - Mardi Gras       - Bruges (2ª Cruz.)
- UNESCO 2019      - Árvore da alegria           - Gilles de Binche - Relíquia Sangue`,
          paragraphs: [
            'O folclore e a religiosidade na Bélgica manifestam-se em celebrações públicas de origem medieval que preservam as tradições comunitárias e a coesão social regional.',
            '6.1 Manifestações Folclóricas de Destaque:',
            '- O Ommegang de Bruxelas: Realizado anualmente em julho, consiste em uma grandiosa procissão histórica que recria a entrada triunfal do imperador Carlos V e seu filho Filipe II em Bruxelas no ano de 1549. O desfile conta com carros alegóricos, grupos folclóricos vestidos com trajes medievais e grandes gigantes processionais tradicionais (como São Miguel e Santa Gudula), culminando em um espetáculo na Grand-Place. É tombado como Patrimônio Imaterial da UNESCO desde 2019.',
            '- O Meyboom de Bruxelas: Tradição folclórica instituída em 1308 para celebrar a plantação da "árvore da alegria" no dia 9 de agosto, rememorando rivalidades históricas entre as cidades de Bruxelas e Leuven. Conta com desfiles de gigantes de madeira e música popular, integrando a inscrição binacional da UNESCO de "Gigantes e dragões processionais na Bélgica e na França".',
            '- O Carnaval de Binche: Celebrado nas províncias de Hainaut, é um dos eventos mais tradicionais e preservados da Europa, tendo sido reconhecido pela UNESCO como Obra-Prima do Patrimônio Oral e Imaterial da Humanidade em 2003. As festividades culminam na Terça-Feira de Carnaval (Mardi Gras) com os desfiles dos Gilles de Binche:',
            '  * O Traje dos Gilles: Cerca de 1.000 homens locais vestem roupas vibrantes nas cores nacionais (vermelho, preto e amarelo) recheadas de palha, usam tamancos de madeira, máscaras de cera pintadas com óculos verdes e bigodes, e portam ramos de madeira para afastar os maus espíritos.',
            '  * A Parada das Laranjas: À tarde, os Gilles vestem grandes chapéus adornados com plumas brancas de avestruz (cujo aluguel ultrapassa os 300 dólares) e marcham atirando laranjas à multidão. A tradição é tida como presságio de boa sorte, sendo considerado uma ofensa atirar as laranjas de volta para os Gilles.',
            '- A Procissão do Santo Sangue em Bruges: Realizada no Dia da Ascensão desde o século XIII, reúne mais de 50.000 fiéis e peregrinos que acompanham o relicário de cristal que supostamente contém o sangue de Jesus Cristo, trazido da Segunda Cruzada em 1148 pelo Conde de Flandres, Derick da Alsácia.',
            '6.2 Dinâmica Sociorreligiosa na Sociedade Belga: A Bélgica é constitucionalmente um Estado laico, estabelecendo uma clara e estrita separação entre a Igreja e o Estado. No entanto, a trajetória histórica e a sociologia religiosa do país exibem particularidades:',
            `[Dinâmica Religiosa na Bélgica]
│
┌─────────────────────────────────┼─────────────────────────────────┐
▼                                 ▼                                 ▼
[Catolicismo Romano]            [Comunidade Islâmica]     [Denominações Financiadas]
- Força histórica               - 6% da população         - Salários pagos p/ Estado
- 47% a 75% adeptos             - Grandes cidades         - Aulas eletivas nas escolas`,
            '- O Catolicismo Romano: Tem sido a força religiosa tradicional do país, com presença histórica marcante na Flandres. Embora estimativas apontem que entre 47% e 75% dos cidadãos belgas declarem-se católicos, a prática religiosa ativa despencou nas últimas décadas: a frequência dominical à missa caiu de 11,2% em 1998 para apenas 5% em 2009. No entanto, a herança cultural católica permanece arraigada na arquitetura, nos feriados nacionais e no sistema escolar.',
            '- O Islamismo: Constitui a segunda maior denominação religiosa ativa do país, abrangendo cerca de 6% da população geral e concentrando-se principalmente nas grandes áreas urbanas de Bruxelas, Antuérpia e Charleroi, fruto da imigração de origem norte-africana (Marrocos e Argélia) e turca a partir das décadas de 1960 e 1970.',
            '- Financiamento Estatal das Confissões: Um diferencial da constituição belga é o reconhecimento e o financiamento público das principais confissões religiosas (Catolicismo, Protestantismo, Anglicanismo, Ortodoxia, Judaísmo e Islamismo), além de organizações seculares de humanismo laico (laïques). O Estado belga paga as bolsas e pensões dos sacerdotes e conselheiros espirituais das religiões reconhecidas e financia aulas eletivas de ensino religioso confessional ou ética laica nas escolas públicas estaduais. Atualmente, o Budismo encontra-se em fase final de tramitação administrativa para obtenção desse mesmo reconhecimento estatal.'
          ]
        }
      ]
    }
  },
  'economia-matematica': {
    small: {
      title: 'Economia e Matemática da Bélgica',
      subtitle: 'O coração logístico e industrial da Eurozona e indicadores de comércio',
      intro: 'Com base nos dados econômicos, comerciais, monetários e estatísticos da Bélgica que você enviou, estruturei o Texto Resumido (Tamanho Normal) para o seu site, integrando de forma direta as disciplinas de Matemática e Geografia.',
      sections: [
        {
          title: 'I. CARACTERIZAÇÃO MACROECONÔMICA E DADOS DO PIB',
          paragraphs: [
            'A Bélgica possui uma economia de mercado moderna e altamente desenvolvida, cuja força reside em sua infraestrutura logística avançada e em uma base industrial diversificada, concentrada de forma geográfica na região de Flandres, ao norte. Em termos de escala macroeconômica, o país registrou um Produto Interno Bruto (PIB) nominal de aproximadamente US$ 532,2 bilhões em 2018 (US$ 550,8 bilhões em Paridade de Poder de Compra - PPC), sustentando um PIB per capita de US$ 46.316.',
            'Sob a ótica da Matemática Financeira e Estatística, a distribuição setorial do PIB revela a forte dependência do país em relação ao setor de serviços (setor terciário), que representa 77,2% da atividade econômica nacional. A indústria (setor secundário) responde por 22,1%, enquanto a agropecuária (setor primário) compõe apenas 0,7% do PIB total. O país ocupa a 15ª posição no ranking de competitividade global, embora lide com um passivo financeiro estrutural: a dívida pública belga excede 103,4% do PIB, gerando pequenos déficits orçamentários constantes que demandam rígido controle de gastos públicos.'
          ]
        },
        {
          title: 'II. A TRANSIÇÃO MONETÁRIA: DO FRANCO BELGA AO EURO',
          paragraphs: [
            'A história monetária e econômica da Bélgica é marcada por duas grandes eras que refletem a integração financeira europeia:',
            '- O Franco Belga (1832–2002): Introduzido logo após a independência, o franco funcionou como a moeda soberana do país por 170 anos. Com a criação da União Monetária Europeia, a taxa de câmbio de transição foi fixada matematicamente em 31 de dezembro de 1998, estabelecendo que 1 Euro equivaleria estritamente a 40,3399 Francos Belgas. A partir de 1º de janeiro de 2002, o franco belga perdeu seu curso legal definitivo, sendo integralmente substituído pelo euro.',
            '- As Moedas de Euro Belgas: Desenhadas por Jan Alfons Keustermans, as moedas de euro belgas possuem três séries em circulação. A primeira (2002) exibia a efígie do rei Alberto II e o monograma real sob 12 estrelas. A segunda série (2008) ajustou o design às normas europeias, inserindo o código do país (BE) e a marca da casa da moeda no núcleo. A terceira série (lançada em 2014) estampa a efígie do rei Filipe, com seu monograma real (FP) e o ano de emissão ladeado pelos símbolos monetários.'
          ]
        },
        {
          title: 'III. COMÉRCIO EXTERIOR E O MOTOR DO PORTO DE ANTUÉRPIA',
          paragraphs: [
            'A Bélgica é um dos países mais integrados ao comércio internacional global. Em 2020, o país posicionou-se como o 13º maior exportador (movimentando US$ 445,2 bilhões em mercadorias) e o 13º maior importador do mundo (US$ 395,7 bilhões em 2019). Cerca de 75% de todas as transações comerciais belgas são realizadas com parceiros da própria União Europeia. Os fluxos de exportação são liderados pela Alemanha (16,6%), França (14,9%) e Países Baixos (12%).',
            'O principal motor geográfico dessa engrenagem comercial é o Porto de Antuérpia, localizado em Flandres. Trata-se do segundo maior porto da Europa em volume de carga, superado apenas pelo vizinho Porto de Roterdã, nos Países Baixos.',
            '- Evolução Histórica: O porto ganhou relevância no século XV com a fundação da primeira bolsa de mercadorias da região. Tempestades e tsunamis severos ocorridos em 1375 e 1406 aprofundaram naturalmente os canais do rio Escalda, permitindo o abrigo de grandes embolia. O potencial militar e logístico do porto foi ampliado por Napoleão Bonaparte, que ordenou a construção da primeira doca (Doca de Bonaparte) em 1811. A inauguração da histórica ferrovia comercial Iron Rhine em 1879 conectou definitivamente o porto ao coração industrial do Ruhr, na Alemanha, consolidando Antuérpia como o principal hub logístico do noroeste europeu.'
          ]
        },
        {
          title: 'IV. COMPOSIÇÃO DOS SETORES PRIMÁRIO E SECUNDÁRIO',
          paragraphs: [
            'Com poucos recursos naturais domésticos, a Bélgica importa matérias-primas brutas para processá-las e reexportá-las sob a forma de produtos industrializados de alto valor agregado:',
            '- Agropecuária de Alta Produtividade: Apesar do peso reduzido no PIB, a Bélgica produziu 5 milhões de toneladas de beterraba açucareira (para etanol e açúcar) e 4 milhões de toneladas de batata em 2019. A pecuária registrou a produção de 4,3 bilhões de litros de leite de vaca e 1 milhão de toneladas de carne suína no mesmo período.',
            '- Metalurgia e Automóveis: Em 2019, o país montou 285,7 mil veículos automotores. Sem produzir aço bruto doméstico, a Bélgica destaca-se no refino e na reexportação metalúrgica, posicionando-se como o 9º maior importador de aço bruto do mundo (14,1 milhões de toneladas em 2017), processando e reexportando 4 milhões de toneladas de aço manufaturado de alta qualidade.',
            '- O Paradoxo do Chocolate: O país destaca-se como o 2º maior exportador de chocolate do mundo pelo valor de suas exportações (dados de 2016). Trata-se de um fenômeno geográfico e comercial notável, dado que a Bélgica possui produção zero de cacau bruto, baseando seu sucesso inteiramente na importação da matéria-prima, no controle de qualidade imposto pela lei de 1884 e nas técnicas artesanais de refino.'
          ]
        },
        {
          title: 'V. MATRIZ ENERGÉTICA E DADOS DE TRANSIÇÃO',
          paragraphs: [
            'A análise quantitativa da matriz energética belga revela uma dependência de combustíveis fósseis importados e uma transição gradual para fontes limpas:',
            '- Energias Não Renováveis: A Bélgica não possui produção doméstica de petróleo ou gás natural. O país consome cerca de 683 mil barris de petróleo por dia (28º maior consumidor global) e 17,4 bilhões de metros cúbicos de gás natural por ano. Para atender a demanda elétrica estável, o país possui 7 reatores nucleares ativos que geram 5,9 GW de potência instalada.',
            '- Avanço das Energias Renováveis: Como parte dos compromissos europeus de descarbonização, a Bélgica investe de forma contínua na geração limpa. Em 2020, o país registrou marcas expressivas na geração sustentável, alcançando 4,6 GW de potência instalada em energia eólica (19º maior produtor mundial) e 5,6 GW de potência instalada em energia solar fotovoltaica (18º maior produtor mundial).'
          ]
        },
        {
          title: 'VI. INDICADORES SOCIAIS: DESEMPREGO, DESIGUALDADE E COEFICIENTE DE GINI',
          paragraphs: [
            'Os indicadores demográficos e do mercado de trabalho belga revelam uma sociedade estável e com baixos índices de desigualdade social:',
            '- Taxa de Desemprego: A taxa de desemprego na Bélgica permaneceu estável em 6,2% em abril de 2026. A análise da série histórica (1983–2026) indica uma média de desemprego de 7,88%, tendo alcançado seu pico histórico de 11% em outubro de 1983 e seu mínimo recorde de 4,9% em abril de 2020. Os salários mínimos estabelecidos por lei situam-se em 2.112 euros por mês para os trabalhadores em regime de tempo integral.',
            '- Desigualdade e Coeficiente de Gini: A Bélgica apresenta um dos coeficientes de Gini (indicador que mede a desigualdade de renda de 0 a 100, onde quanto menor o valor, mais igualitária é a sociedade) mais baixos e estáveis do planeta, registrando a marca de 25,9 (2015) ou 28,0 (2010), a depender do censo. O índice de extrema pobreza é considerado residual ou erradicado, embora cerca de 15,9% da população viva abaixo da linha de pobreza relativa nacional.'
          ]
        }
      ]
    },
    large: {
      title: 'Tratado Geral de Economia e Matemática da Bélgica',
      subtitle: 'Análise quantitativa do PIB, comércio internacional, transição monetária, infraestrutura logística e demografia do mercado de trabalho',
      intro: 'Apresento a versão ampliada e exaustiva do Tratado de Economia e Matemática da Bélgica (Grupo 4). Este documento integra de forma profunda as disciplinas de Geografia (focada na distribuição espacial de indústrias, portos e parceiros comerciais) e Matemática (focada na análise rigorosa de séries temporais, matrizes energéticas, porcentagens de produção e indicadores econométricos). O Reino da Bélgica constitui uma das economias mais integradas e dinâmicas da Europa Ocidental. Sua localização geográfica estratégica na planície costeira e no planalto central do continente, aliada a uma densa e secular rede de transportes rodoviários, ferroviários e hídricos, viabilizou o desenvolvimento de uma economia de mercado altamente globalizada, caracterizada pelo processamento de matérias-primas importadas e pela posterior reexportação de manufaturas de alto valor agregado. Sob a ótica da Geografia Econômica, o território belga exibe uma assimetria produtiva marcante, com o setor industrial fortemente concentrado ao norte, na região de Flandres. Sob a perspectiva da Matemática Aplicada e Estatística, a análise de seus indicadores macroeconômicos, séries históricas de emprego, balança comercial e capacidade de geração energética permite compreender a estabilidade de seu modelo de desenvolvimento frente às crises externas globais.',
      sections: [
        {
          title: 'CAPÍTULO I: ANÁLISE MACROECONÔMICA DO PIB E INDICADORES ESTRUTURAIS',
          diagram: `[Distribuição Setorial do PIB Belga]
┌────────────────────────────────────────────────────────┐
│██████████──────────────────────────────────────────────│  0,7% - Setor Primário (Agropecuária)
│████████████████████████████────────────────────────────│  22,1% - Setor Secundário (Indústria)
│████████████████████████████████████████████████████████│  77,2% - Setor Terciário (Serviços)
└────────────────────────────────────────────────────────┘`,
          paragraphs: [
            'A Bélgica apresenta indicadores macroeconômicos que a posicionam de forma consolidada no grupo de países de alta renda e elevado desenvolvimento humano.',
            '1.1 O Produto Interno Bruto (PIB): De acordo com os dados estatísticos consolidados de 2018, o PIB nominal da Bélgica atingiu US$ 532,268 bilhões (US$ 550,862 bilhões mensurados em Paridade de Poder de Compra - PPC), registrando uma taxa de crescimento anual real do PIB de 1,2% em 2019. O PIB per capita nominal alcançou a marca de US$ 46.316 no mesmo período.',
            '- Análise Vetorial por Setores (Estatística): A divisão da produção de bens e serviços por setores de atividade econômica demonstra a hegemonia do setor terciário na geração de valor:',
            '  * Setor Terciário (Comércio e Serviços): Responde por 77,2% do PIB e absorve 73% da força de trabalho ativa nacional.',
            '  * Setor Secundário (Indústria): Responde por 22,1% do PIB e concentra 25% da força de trabalho.',
            '  * Setor Primário (Agropecuária): Responde por apenas 0,7% do PIB, empregando 2% da força de trabalho ativa do país.',
            '1.2 Finanças Públicas, Receitas e Passivo Soberano: O balanço orçamentário do Estado belga opera sob pequenas e constantes margens de déficit. Em 2017, as receitas públicas totalizaram US$ 253,5 bilhões, contra despesas fiscais de US$ 258,6 bilhões, gerando um déficit financeiro anual estrutural.',
            'Esse passivo orçamentário reflete-se na volumosa dívida pública nacional, que atingiu 103,4% do PIB em 2017, enquanto a dívida externa bruta acumulada pelo país somava US$ 1,281 trilhão em 2016. Apesar do elevado endividamento público, o país mantém um alto índice de competitividade internacional, ocupando a 15ª posição global de acordo com as métricas do Fórum Econômico Mundial.'
          ]
        },
        {
          title: 'CAPÍTULO II: GEOPOLÍTICA E DINÂMICA MONETÁRIA (DO FRANCO AO EURO)',
          paragraphs: [
            'A soberania e a estabilidade monetária belga são marcadas pela transição da moeda histórica nacional para o ecossistema financeiro europeu integrado:',
            '2.1 O Franco Belga (1832–2002): O franco belga (moeda codificada internacionalmente como BEF) circulou de forma ininterrupta na Bélgica de 1832 a 2002. Com a criação da União Europeia e a adoção da moeda única comum, a taxa de câmbio foi fixada matematicamente em 31 de dezembro de 1998 sob um fator inalterável de: 1 Euro = 40,3399 Francos Belgas. A partir de 1º de janeiro de 2002, o franco belga perdeu seu curso legal definitivo, sendo integralmente substituído pelo euro.',
            '2.2 As Três Séries de Moedas de Euro Belgas: As moedas de euro cunhadas pela Bélgica foram desenhadas pelo mestre gravador Jan Alfons Keustermans, diretor da Academia Municipal de Belas-Artes de Turnhout. Devido a orientações da Comissão Europeia e transições monárquicas, existem três séries distintas de moedas belgas em circulação, todas válidas:',
            '- Primeira Série (2002–2007): Exibe a efígie do rei Alberto II no núcleo da moeda e, na coroa circular externa, o monograma real (um "A" sob uma coroa) rodeado pelas 12 estrelas da Europa.',
            '- Segunda Série (2008–2013): Modificada para atender às orientações da Comissão Europeia. O monograma real e o ano de emissão foram movidos para o núcleo, inserindo-se o código de identificação do país (BE) e os símbolos da casa da moeda.',
            '- Terceira Série (2014–Presente): Lançada após a abdicação de Alberto II. Exibe a efígie do novo monarca, o rei Filipe, com seu monograma real (FP), o código de país (BE) e o símbolo do diretor da casa da moeda ladeando o ano.',
            '- Moeda Especial de 2 Euros: A moeda de 2 euros apresenta em seu bordo a inscrição "2 **", repetida de forma alternada (seis vezes de baixo para cima e de cima para baixo).',
            '- Edição Numismática do Cinquentenário (2008): Para comemorar os 50 anos de criação dos Smurfs (Schtroumpfs), a Bélgica cunhou uma série de moedas comemorativas de 5 euros exibindo um Smurf gravado em seu núcleo metálico, celebrando o patrimônio artístico nacional do cartunista Peyo.'
          ]
        },
        {
          title: 'CAPÍTULO III: COMÉRCIO EXTERIOR E A INFRAESTRUTURA LOGÍSTICA DO PORTO DE ANTUÉRPIA',
          diagram: `[Principais Parceiros de Exportação]       [Principais Parceiros de Importação]
┌───────────────────────────────────┐      ┌───────────────────────────────────┐
│ Alemanha: 16.6%                   │      │ Países Baixos: 17.3%              │
│ França: 14.9%                     │      │ Alemanha: 13.8%                   │
│ Países Baixos: 12%                │      │ França: 9.5%                      │
│ Reino Unido: 8.4%                 │      │ Estados Unidos: 7.1%              │
│ Outros: 48.1%                     │      │ Outros: 48.4%                     │
└───────────────────────────────────┘      └───────────────────────────────────┘`,
          paragraphs: [
            'A economia belga é altamente sensível à oscilação das economias globais devido ao seu elevado grau de abertura comercial.',
            '3.1 Estatísticas de Exportação e Importação:',
            '- Exportações: Em 2020, o país registrou a marca de US$ 445,2 bilhões em mercadorias exportadas (representando 2,4% de toda a exportação de bens global, ocupando a 13ª posição do ranking mundial). Quando computados os bens e serviços integrados, a receita atingiu US$ 431,9 bilhões em 2019 (18º lugar global). Os principais produtos exportados são petróleo refinado (US$ 33,5 bilhões), vacinas e produtos biológicos (US$ 25,6 bilhões), medicamentos (US$ 23,7 bilhões), gás liquefeito (US$ 23,5 bilhões) e automóveis (US$ 21,1 bilhões).',
            '- Importações: Em 2019, as importações somaram US$ 395,7 bilhões (13º lugar global). Os principais insumos importados são petróleo bruto, derivados petroquímicos, automóveis, componentes de transporte, produtos farmacêuticos e diamantes brutos.',
            '3.2 O Porto de Antuérpia como Epicentro Econômico: O Porto de Antuérpia, situado em Flandres, é o segundo maior porto comercial do continente europeu, superado apenas pelo porto holandês de Roterdã.',
            '- Geografia e Formação Fisiográfica: O porto formou-se ao longo das margens profundas do rio Escalda. Tempestades severas ocorridas na costa da Flandres em 1375–1376 e em 1406 escavaram e aprofundaram de forma natural o leito do rio, permitindo a ancoragem de navios mercantes de grande calado. Esse evento geomorfológico atraiu capitalistas de Bruges (cidade que sofria com o assoreamento de seus canais e ameaças de anexação francesa) para Antuérpia, onde fundaram as primeiras bolsas de mercadorias e de letras de câmbio na Idade Média.',
            '- Modernização e Expansão: O imperador francês Napoleão Bonaparte reconheceu o potencial de Antuérpia, ordenando em 1811 a construção da primeira doca profunda (Doca de Bonaparte), seguida pela Doca de Willem em 1813, para fins militares e comerciais. Com a consolidação da independência em 1830, o porto sofreu com os pedágios abusivos cobrados pelo governo dos Países Baixos sobre a foz do rio Escalda. Com o apoio diplomático do Reino Unido (através de Lord Palmerston), a Bélgica conseguiu comprar e resgatar as taxas holandesas em 1863 por meio de uma indenização de capital, liberando a navegação.',
            '- O Tronco Ferroviário (Iron Rhine): Concluído em 1879, o ramal ferroviário Iron Rhine (Ijzeren Rijn) ligou Antuérpia diretamente às ricas minas e indústrias da região siderúrgica do Ruhr, na Alemanha, permitindo ao porto experimentar uma segunda era de ouro. Em 1908, com a conclusão do complexo de comportas do Royers Lock, o porto já operava com oito docas ativas e navios com calados superiores a 24 pés.'
          ]
        },
        {
          title: 'CAPÍTULO IV: PRODUÇÃO INDUSTRIAL E AGROPECUÁRIA (SETOR PRIMÁRIO E SECUNDÁRIO)',
          diagram: `[Produção Agrícola Anual - Principais Culturas (FAO 2019)]
Beterraba Açucareira: 5,0 milhões de toneladas  ██████████
Batata: 4,0 milhões de toneladas               ████████
Trigo: 1,9 milhão de toneladas                 ████
Alface e Chicória: 527 mil toneladas           █
Milho: 429 mil toneladas                       █
Cevada: 401 mil toneladas                      █
Pera: 332 mil toneladas                        █ (8º produtor mundial)
Cenoura: 322 mil toneladas                     █`,
          paragraphs: [
            'A análise estatística setorial da economia da Bélgica demonstra alto rendimento e o uso intensivo de biotecnologia na agropecuária, compensando sua pequena área territorial de cultivo.',
            '4.1 Dados da Produção Agropecuária (2019): Apesar de representar menos de 1% do PIB nacional, o setor primário belga atinge safras volumosas em lavouras de alta tecnologia. Na pecuária, a produção anual belga registrou a marca de 1 milhão de toneladas de carne suína, 4,3 bilhões de litros de leite de vaca, 440 mil toneladas de carne de frango e 263 mil toneladas de carne bovina.',
            '4.2 O Setor Secundário (Indústria Metalúrgica e Manufatura de Alimentos): De acordo com os rankings mundiais de valor de manufatura elaborados pelo Banco Mundial, a Bélgica detém a 29ª indústria mais valiosa do mundo, somando um valor de valor agregado industrial de US$ 64,8 bilhões em 2019.',
            '- Indústria Automobilística: O país montou 285.700 veículos automotores em seu território em 2019 (29º maior produtor mundial).',
            '- Siderurgia e Importação de Aço: A Bélgica não possui produção primária de minério de ferro ou de aço bruto, dependendo da importação de aço para laminação e refino. Em 2017, foi a 9ª maior importadora de aço bruto do mundo (14,1 milhões de toneladas), reexportando cerca de 4 milhões de toneladas de aço beneficiado de alto valor agregado (10º maior reexportador de produtos de aço do planeta).',
            '- O Paradoxo do Chocolate e da Cerveja: Na indústria alimentícia, o país destaca-se internacionalmente: é o 19º maior produtor de cerveja de cevada do mundo e o 2º maior exportador global de chocolate em termos de valor (dados de 2016). O chocolate belga representa um fenômeno de comércio exterior, dado que as indústrias nacionais importam a totalidade do cacau do Congo e de outras regiões tropicais, transformando-o internamente por meio de rígidos processos que impõem o mínimo de 35% de cacau e proíbem gorduras artificiais.'
          ]
        },
        {
          title: 'CAPÍTULO V: MATRIZ ENERGÉTICA DA BÉLGICA',
          diagram: `[Capacidade Elétrica Instalada]
│
┌──────────────────────────┼──────────────────────────┐
▼                          ▼                          ▼
[Usinas Nucleares]      [Energia Solar]            [Energia Eólica]
- 7 reatores ativos     - 5.6 GW instalados        - 4.6 GW instalados
- 5.9 GW de potência    - 18º lugar mundial        - 19º lugar mundial`,
          paragraphs: [
            'A economia belga demanda uma imensa quantidade de energia para sustentar sua malha de transportes e complexos petroquímicos e metalúrgicos.',
            '5.1 Hidrocarbonetos e Dependência Externa: O subsolo belga não abriga jazidas de hidrocarbonetos comerciais estáveis:',
            '- Petróleo: O país apresenta produção zero de petróleo cru. Em 2019, consumiu 683 mil barris de petróleo por dia (28º maior consumidor do planeta). Toda a demanda é suprida por importações por navios tanques em Antuérpia, tendo importado 618 mil barris/dia em 2013 (17º maior importador de petróleo do mundo).',
            '- Gás Natural: Apresenta produção zero. O país consome anualmente 17,4 bilhões de metros cúbicos de gás (42º maior consumidor do planeta), importando cerca de 19,3 bilhões de m³ ao ano por gasodutos e metaneiros (16º maior importador mundial em 2010).',
            '- Carvão: O país apresenta produção zero de carvão desde o fechamento planejado e completo de suas últimas bacias carboníferas em 2016.',
            '5.2 Geração Termonuclear: Para garantir a estabilidade do fornecimento de eletricidade e limitar as flutuações de preços da energia externa, a Bélgica implantou e opera 7 reatores nucleares distribuídos por seu território, totalizando uma potência térmica instalada de 5,9 GW.',
            '5.3 Geração Renovável (Solar e Eólica): Como participante das políticas de mitigação de carbono da União Europeia, a Bélgica tem ampliado sua potência instalada em energias renováveis:',
            '- Energia Eólica: O país registrou 4,6 GW de potência instalada em turbinas eólicas em 2020, posicionando-se como o 19º maior gerador de energia eólica do mundo.',
            '- Energia Solar Fotovoltaica: Alcançou 5,6 GW de potência instalada em 2020 (18º maior gerador solar do planeta).'
          ]
        },
        {
          title: 'CAPÍTULO VI: DEMOGRAFIA, ESTATÍSTICAS DE EMPREGO, DESIGUALDADE E POBREZA',
          diagram: `[Evolução Histórica da Taxa de Fertilidade Belga]
1997: 1,60 ──► 2002: 1,65 ──► 2007: 1,82 ──► 2009: 1,84 ──► 2011: 1,95`,
          paragraphs: [
            'A análise estatística e econométrica da população belga é de competência do órgão estatal oficial Nationaal Instituut voor Statistiek (Instituto Nacional de Estatísticas - Statbel).',
            '6.1 Dados Populacionais e Distribuição Geográfica: Em 2019, a população belga era estimada em 11.515.790 habitantes, expandindo-se para cerca de 11.880.000 em dezembro de 2025. O país ostenta a 2ª maior taxa de crescimento populacional da Europa Ocidental (com taxa de crescimento anual escalando de 0,5% em 2005 para 1,4% em 2011, superada apenas pela Noruega).',
            '- Distribuição Espacial por Regiões (2010): Flandres (Norte) tem 6.251.983 habitantes (57,7% da população); Valônia (Sul) tem 3.498.384 habitantes (32,3% da população); Região de Bruxelas-Capital tem 1.089.538 habitantes (10,1% da população).',
            '- Imigração e os "Novos Belgas" (2012): Cerca de 12,9% da população residente na Bélgica é composta por imigrantes estrangeiros (dos quais 6,4% são originários de fora da União Europeia e 6,5% de países membros da UE). O país adota políticas simplificadas de naturalização, o que permitiu a cerca de 1,3 milhão de novos cidadãos belgas obterem o passaporte local. A composição populacional de origem estrangeira na maior cidade industrial, Antuérpia, registra 61,9% de brancos locais, 21,6% de arábicos (de origem turca e magrebina) e 10,8% de negros de origem subsaariana. Em Bruxelas, o censo de 2009 apontou 54,2% de brancos locais, 26,2% de arábicos e 14,5% de negros.',
            '- Taxa de Fertilidade: O país enfrenta um envelhecimento demográfico moderado, compensado pela elevação da taxa de fertilidade média anual, que subiu de 1,60 em 1997 para 1,95 em 2011.',
            '6.2 Estatísticas do Mercado de Trabalho e Desemprego (1983–2026): A taxa de desemprego na Bélgica permaneceu estável em 6,2% em abril de 2026.',
            '- Série Histórica: A média de desemprego do país entre 1983 e 2026 situa-se em 7,88%. O pico histórico de desemprego ocorreu em outubro de 1983, registrando 11%, enquanto o recorde mínimo de desemprego foi alcançado em abril de 2020, caindo para 4,9%. O salário médio bruto nacional é de 4.076 euros por mês (dados de dezembro de 2022), enquanto o salário mínimo estabelecido por lei federal é de 2.112 euros mensais.',
            '- Medida Histórica de Combate ao Desemprego: Nas décadas de 1970 e 1980, o desemprego crônico foi combatido na Bélgica por meio de um plano nacional de fomento ao emprego informal estruturado, que simplificou o estatuto trabalhista e cortou encargos burocráticos. A medida, embora polêmica na época por flexibilizar direitos, reduziu a pobreza e a criminalidade no país de forma drástica, servindo como modelo posterior para as reformas econômicas de Portugal e de países do Leste Europeu.',
            '6.3 Pobreza e Desigualdade de Renda (Gini): A Bélgica apresenta um dos menores índices de desigualdade social do mundo, exibindo um coeficiente de Gini de 25,9 (2015) ou 28,0 (2010), dependendo do modelo de amostragem censitária.',
            'A miséria extrema é estatisticamente considerada erradicada no país. Cerca de 15,9% da população belga vive abaixo da linha de pobreza relativa (indicada por quem recebe menos de 15 vezes a renda média do país, o que equivale a um patamar entre 200 e 300 euros mensais). No entanto, persistem desafios urbanísticos: a periferia metropolitana da cidade industrial de Antuérpia registra, ao lado dos arredores de Paris, a maior concentração de habitações precárias e favelas verticais da Europa Ocidental.'
          ]
        }
      ]
    }
  },
  'esporte-estilo-vida': {
    small: {
      title: 'Esporte, Saúde e Estilo de Vida na Bélgica',
      subtitle: 'Uma análise do desempenho esportivo, fisiologia dos atletas e o sistema de saúde belga',
      intro: 'Apresento a Versão Resumida (Tamanho Normal) estruturada de I a VI para o seu site, integrando Educação Física e Biologia de forma equilibrada:',
      sections: [
        {
          title: 'I. VISÃO GERAL DO ESPORTE E ENGAJAMENTO SOCIAL',
          paragraphs: [
            'A prática de atividades físicas na Bélgica desempenha um papel fundamental na integração social e na manutenção da saúde pública. O país apresenta um índice elevado de participação esportiva, contando com cerca de 17.000 clubes esportivos regulamentados que reúnem mais de 1,35 milhão de praticantes ativos. Esse contingente representa aproximadamente 13% de toda a população belga envolvida em esportes de forma organizada. Sob a perspectiva da Educação Física, o desenvolvimento esportivo do país é impulsionado por políticas públicas de fomento ao esporte de base nas escolas e comunidades, enquanto a Biologia atua na base do bem-estar social, correlacionando o estilo de vida ativo à prevenção de doenças crônicas e ao aumento da capacidade cardiorrespiratória da população.'
          ]
        },
        {
          title: 'II. A TRAJETÓRIA DOS DIABOS VERMELHOS EM COPAS DO MUNDO',
          paragraphs: [
            'O futebol é a modalidade mais popular no território belga, gerida pela Real Associação Belga de Futebol. A seleção nacional, historicamente conhecida como os Diabos Vermelhos, acumula 15 participações em Copas do Mundo da FIFA, tendo disputado a partida inaugural do torneio em 1930.',
            'Os dois maiores marcos da história do futebol belga em mundiais são:',
            '- A Copa do Mundo de 1986 (México): A seleção alcançou o 4º lugar mundial. O torneio consagrou o goleiro Jean-Marie Pfaff com a Luva de Ouro e revelou o meio-campista Enzo Scifo.',
            '- A Copa do Mundo de 2018 (Rússia): A chamada "Geração de Ouro" garantiu a melhor colocação da história do país ao conquistar o 3º lugar, vencendo o Brasil por 2 a 1 nas quartas de final. O goleiro Thibaut Courtois recebeu a Luva de Ouro como o melhor goleiro do certame.',
            'Em termos de registros estatísticos individuais, o atacante Romelu Lukaku destaca-se como o maior artilheiro da história da seleção, acumulando 90 gols internacionais, dos quais 6 foram marcados em Copas do Mundo.'
          ]
        },
        {
          title: 'III. O CICLISMO BELGA: A HEGEMONIA DE EDDY MERCKX E AS CLÁSSICAS',
          paragraphs: [
            'Ao lado do futebol, o ciclismo de estrada é uma das maiores paixões culturais da Bélgica. O país é mundialmente reconhecido por sediar algumas das provas clássicas de um dia mais exigentes do circuito mundial, como o Tour de Flandres (Ronde van Vlaanderen) e a Liège-Bastogne-Liège, famosas por seus trechos de paralelepípedos (pavé) e subidas íngremes.',
            'O maior expoente deste esporte é Eddy Merckx, apelidado de "O Canibal" devido à sua insaciável determinação de vencer. Merckx é amplamente considerado o maior ciclista de todos os tempos, tendo acumulado 525 vitórias profissionais ao longo de sua carreira. Suas conquistas incluem 5 títulos gerais do Tour de France, 5 do Giro d\'Italia, 1 da Vuelta a España e o recorde mundial da hora estabelecido em 1972 (49,431 km), consolidando a Bélgica como a principal potência histórica do ciclismo de estrada.'
          ]
        },
        {
          title: 'IV. FISIOLOGIA DO ALTO RENDIMENTO: NAFISSATOU THIAM E O HEPTATLO',
          paragraphs: [
            'No atletismo, a Bélgica destaca-se internacionalmente através da figura de Nafissatou Thiam. Nascida em Bruxelas, Thiam consagrou-se como uma das maiores atletas de todos os tempos ao se tornar a única tricampeã olímpica consecutiva do heptatlo (com medalhas de ouro nos Jogos de Rio 2016, Tóquio 2020 e Paris 2024), além de acumular dois títulos mundiais. Sua melhor marca pessoal é de 7.013 pontos, obtida em 2017.',
            'Sob a ótica da Biologia do Esporte, o heptatlo exige um nível extremo de adaptação fisiológica, pois combina sete provas distintas que demandam valências físicas opostas. O treinamento de alto rendimento de Thiam exige o desenvolvimento equilibrado de:',
            '- Fibras musculares do tipo I (contração lenta): Necessárias para a resistência aeróbica em corridas de meio-fundo (800 metros).',
            '- Fibras musculares do tipo II (contração rápida): Essenciais para a potência anaeróbica explosiva exigida no salto em altura, salto em distância, arremesso de peso, lançamento de dardo e corridas de velocidade.'
          ]
        },
        {
          title: 'V. O SISTEMA DE SAÚDE UNIVERSAL E A REDE HOSPITALAR',
          paragraphs: [
            'O alto rendimento de seus atletas e a qualidade de vida da população em geral são sustentados por um sistema de saúde universal altamente estruturado e gerido pelo Ministério Federal da Saúde Pública. O modelo belga é descentralizado e divide-se em três linhas de atendimento: cuidados primários (médicos gerais de família), cuidados secundários (hospitais e especialistas) e cuidados de longo prazo (reabilitação e geriatria).',
            'A infraestrutura de saúde do país é composta por 209 hospitais ativos, dos quais 141 são hospitais gerais (incluindo 7 hospitais universitários de alta complexidade) e 68 são instituições voltadas para a saúde psiquiátrica. O sistema de atendimento pré-hospitalar de urgência é integrado e acionado de forma centralizada pelos números 100 ou 112, contando com ambulâncias básicas e equipes de intervenção médica avançada (veículos MUG/SMUR com médicos emergencistas).'
          ]
        },
        {
          title: 'VI. FINANCIAMENTO, MUTUALIDADES E IMPACTO NA LONGEVIDADE',
          paragraphs: [
            'O financiamento do sistema de saúde belga baseia-se na seguridade social compulsória. Trabalhadores ativos contribuem obrigatoriamente com cerca de 13% do seu salário bruto, enquanto os empregadores recolhem taxas que variam de 15% a 22% sobre a folha de pagamento. A gestão dos fundos e o reembolso dos tratamentos são realizados por meio de sociedades de assistência mútua, conhecidas como mutualidades (mutualités), que devolvem em média 75% dos valores gastos pelos cidadãos em consultas e exames por meio de cartões de identificação eletrônica (eID).',
            'O impacto biológico direto desse sistema de saúde acessível e de alta qualidade reflete-se nos indicadores demográficos do país. A expectativa de vida média ao nascer situa-se atualmente em 81,3 anos. Embora o país apresente índices de longevidade ligeiramente inferiores aos de alguns vizinhos da Europa Ocidental, suas taxas de mortalidade infantil reduzidas e o envelhecimento ativo de sua população atestam a eficiência da integração entre a atividade física sistemática e os cuidados de saúde preventiva.'
          ]
        }
      ]
    },
    large: {
      title: 'Tratado Geral de Esporte, Saúde e Qualidade de Vida da Bélgica',
      subtitle: 'Análise do desempenho esportivo nacional, fisiologia dos atletas de elite e a estrutura biopolítica do sistema de saúde universal',
      intro: 'Apresento a versão ampliada e exaustiva do Tratado de Esporte, Estilo de Vida e Saúde da Bélgica (Grupo 5). Este documento integra as disciplinas de Educação Física (focada no histórico esportivo, dinâmica do ciclismo, atletismo e Copa do Mundo) e Biologia (focada na fisiologia do esporte de alto rendimento, funcionamento do sistema de saúde universal e indicadores biológicos de qualidade de vida). A prática esportiva e a manutenção da saúde pública desempenham um papel de destaque na estruturação da sociedade belga contemporânea. Em termos de engajamento social, o esporte é um pilar de integração de comunidades: o país conta com aproximadamente 17.000 clubes esportivos ativos que reúnem cerca de 1,35 milhão de praticantes regulares, o que equivale a mais de 13% de toda a população belga envolvida em atividades físicas formais. Sob a perspectiva da Educação Física, a Bélgica destaca-se historicamente por sua hegemonia no ciclismo de estrada internacional e pela projeção global de seus atletas no futebol e nas competições olímpicas. Sob a ótica da Biologia, o estilo de vida saudável é sustentado por um dos sistemas de saúde universais mais avançados e acessíveis do mundo, gerando impactos diretos sobre a longevidade, a resiliência física e a qualidade de vida da população.',
      sections: [
        {
          title: 'CAPÍTULO I: O FUTEBOL E A TRAJETÓRIA DOS DIABOS VERMELHOS EM COPAS DO MUNDO',
          diagram: `[Principais Campanhas em Copas]
│
┌─────────────────────┴─────────────────────┐
▼ (México, 1986)                            ▼ (Rússia, 2018)
[Quarto Lugar]                              [Terceiro Lugar]
- Jean-Marie Pfaff (Luva de Ouro)           - Thibaut Courtois (Luva de Ouro)
- Enzo Scifo (Revelação)                    - Geração de Ouro (De Bruyne, Hazard)`,
          paragraphs: [
            'O futebol é o esporte mais popular da Bélgica, organizado pela Real Associação Belga de Futebol (KBVB/URBSFA). A seleção nacional, apelidada de Diabos Vermelhos (Rode Duivels / Diables Rouges) pelo jornalista Pierre Walckiers em 1906, possui uma rica trajetória em competições internacionais.',
            '1.1 O Retrospectivo Histórico nas Copas do Mundo da FIFA: A Bélgica participou da fase final da Copa do Mundo da FIFA em 15 ocasiões, tendo integrado o grupo de seleções fundadoras na edição inaugural de 1930, no Uruguai, onde disputou a primeira partida da história dos Mundiais contra os Estados Unidos. O árbitro belga John Langenus comandou a final histórica daquele torneio.',
            '- A Campanha de 1986 (México): Sob a liderança do capitão Jan Ceulemans, a Bélgica alcançou o quarto lugar. O goleiro Jean-Marie Pfaff foi agraciado com a Luva de Ouro, e o jovem Enzo Scifo foi eleito o melhor jogador jovem do torneio. A equipe foi eliminada nas semifinais pela Argentina de Diego Maradona.',
            '- A Campanha de 2018 (Rússia) e a "Geração de Ouro": A Bélgica conquistou o terceiro lugar, a melhor colocação de sua história. Na fase de grupos, venceu o Panamá (3–0), a Tunísia (5–2) e a Inglaterra (1–0). Nas oitavas de final, operou uma virada histórica contra o Japão (de 0–2 para 3–2). Nas quartas de final, eliminou o Brasil por 2–1, com destaque para a atuação de Kevin De Bruyne e defesas de Thibaut Courtois. A equipe caiu nas semifinais para a eventual campeã França, garantindo o bronze ao vencer novamente a Inglaterra por 2–0.',
            '1.2 Campanha Recente (Copa do Mundo de 2026): Na fase de grupos do Mundial de 2026, a Bélgica competiu no Grupo G, obtendo a classificação para a fase eliminatória em primeiro lugar após somar 5 pontos: Bélgica 1 x 1 Egito | Bélgica 0 x 0 Irã | Nova Zelândia 1 x 5 Bélgica.',
            '- Liderança nos Registros Individuais: O atacante Romelu Lukaku consolidou-se como o maior artilheiro da história da seleção, acumulando 90 gols internacionais, sendo também o maior goleador belga em Copas do Mundo (6 gols marcados nas edições de 2014, 2018 e 2026). O goleiro Thibaut Courtois detém o recorde de aparições da Bélgica em Copas do Mundo, totalizando 18 partidas disputadas ao longo de quatro edições (2014, 2018, 2022 e 2026).'
          ]
        },
        {
          title: 'CAPÍTULO II: O CICLISMO BELGA: EDDY MERCKX E AS CLÁSSICAS DA FLANDRES',
          diagram: `[O Canibal: Eddy Merckx]
│
┌──────────────────────┼──────────────────────┐
▼                      ▼                      ▼
[5x Tour de France]    [5x Giro d'Italia]     [1x Vuelta a España]
- 34 etapas ganhas     - 25 etapas ganhas     - Recorde da hora (1972)`,
          paragraphs: [
            'O ciclismo é considerado uma paixão nacional e um elemento definidor da cultura esportiva belga, regido pela Real Liga Belga de Ciclismo desde 1882.',
            '2.1 A Figura Monumental de Eddy Merckx: Apelidado de "O Canibal" devido à sua determinação insaciável por vitórias, Eddy Merckx é considerado o maior ciclista de todos os tempos. Merckx acumulou 525 vitórias profissionais ao longo de sua carreira (1961–1978). Suas conquistas incluem:',
            '- 5 títulos gerais do Tour de France (vestindo a camisa amarela por 96 dias e vencendo 34 etapas individuais). Em 1969, realizou o feito inédito de vencer simultaneamente as camisas amarela (geral), verde (pontos) e de pontos vermelhos (montanha) do Tour.',
            '- 5 títulos gerais do Giro d\'Italia (25 etapas vencidas).',
            '- 1 título geral da Vuelta a España (1973).',
            '- O histórico recorde mundial da hora, estabelecido na altitude da Cidade do México em 25 de outubro de 1972, atingindo a marca de 49,431 km.',
            '2.2 As Grandes Corridas e Clássicas de um Dia: A Bélgica é o coração das "Clássicas de Primavera", corridas de um dia de extrema exigência física devido ao relevo acidentado e às estradas pavimentadas com paralelepípedos (pavé). O país sedia duas das cinco corridas monumentos do ciclismo mundial:',
            '- O Tour de Flandres (Ronde van Vlaanderen): Disputado desde 1913, caracteriza-se pelas subidas curtas e íngremes de paralelepípedos (hellingen). A Bélgica soma 67 vitórias no evento.',
            '- Liège-Bastogne-Liège: Fundada em 1892 na Valônia, é a mais antiga das clássicas de um dia (La Doyenne), caracterizada pelo relevo montanhoso das Ardenas. Eddy Merckx detém o recorde de vitórias individuais da prova, com 5 conquistas.',
            'O país sedia equipes profissionais proeminentes no circuito da União Ciclística Internacional (UCI World Tour), como a Soudal-Quick-Step e a Intermarché-Circus-Gobert.'
          ]
        },
        {
          title: 'CAPÍTULO III: OUTROS ESPORTES E A FISIOLOGIA DO ALTO RENDIMENTO DE NAFISSATOU THIAM',
          diagram: `[Heptatlo de Nafissatou Thiam]
│ (7.013 pontos em Götzis, 2017)
▼
[Títulos e Conquistas]
│
┌───────────────────────┴───────────────────────┐
▼ (Jogos Olímpicos)                             ▼ (Campeonatos Mundiais)
- Ouro na Rio 2016                              - Ouro em Londres 2017
- Ouro em Tóquio 2020                           - Ouro em Eugene 2022
- Ouro em Paris 2024 (Tricampeã)                - Prata em Doha 2019`,
          paragraphs: [
            'A Bélgica acumula conquistas expressivas em outras modalidades olímpicas, destacando-se no judô, tênis (com as ex-número 1 do mundo Justine Henin e Kim Clijsters) e no atletismo.',
            '3.1 A Hegemonia de Nafissatou Thiam no Heptatlo: Nascida em Bruxelas em 1994, filha de mãe belga e pai senegalês, Nafissatou "Nafi" Thiam é uma das maiores atletas de atletismo da história. Ela é a única tricampeã olímpica consecutiva do heptatlo (títulos conquistados na Rio 2016, Tóquio 2020 e Paris 2024, onde somou 6.880 pontos), além de bicampeã mundial (Londres 2017 e Eugene 2022). Em 2017, na prestigiosa reunião de Götzis, na Áustria, Thiam atingiu sua melhor marca pessoal ao somar 7.013 pontos, tornando-se uma das poucas mulheres a superar a barreira dos 7.000 pontos na história da modalidade.',
            '3.2 Fisiologia do Esporte e Exigência Biológica (Biologia): Sob a perspectiva da Biologia do Esporte, o heptatlo representa a modalidade feminina de pista e campo mais exigente, demandando uma combinação complexa de valências físicas ao longo de dois dias de competição (100 metros com barreiras, salto em altura, arremesso de peso, 200 metros rasos, salto em distância, lançamento de dardo e 800 metros rasos).',
            '- Capacidade de Resiliência Muscular: O treinamento para o heptatlo exige o desenvolvimento equilibrado de fibras musculares do tipo I (de contração lenta, aeróbicas, necessárias para a corrida de meio-fundo de 800 metros) e fibras do tipo IIa e IIx (de contração rápida, anaeróbicas glico-gênicas, cruciais para a potência explosiva exigida nos arremessos, saltos e sprints).',
            '- Fisiologia do Salto em Altura: Thiam destaca-se por possuir uma impulsão vertical notável (atingindo 1,98 m no salto em altura integrado ao heptatlo), o que demanda extrema eficiência na conversão de energia cinética horizontal em força de impulsão vertical, exigindo estabilidade das articulações e dos tendões (particularmente o tendão de Aquiles, cuja lesão a afastou temporariamente das pistas em 2023).'
          ]
        },
        {
          title: 'CAPÍTULO IV: O SISTEMA DE SAÚDE UNIVERSAL BELGA E A QUALIDADE DE VIDA',
          diagram: `[Sistema de Saúde Belga]
│ (Modelo Universal e Compulsório)
▼
[Três Linhas de Cuidado]
│
┌──────────────────────┼──────────────────────┐
▼ (Primeira Linha)     ▼ (Segunda Linha)      ▼ (Terceira Linha)
[Clínica Geral (GPs)]  [Hospitais de Agudos]  [Reabilitação e Longo Prazo]
- Atendimento local    - 209 hospitais totais - Casas de repouso
- Emergências 112      - 7 universitários     - Atendimento domiciliar`,
          paragraphs: [
            'A elevada performance dos atletas belgas e o bem-estar de seus cidadãos são sustentados por uma rede nacional de saúde e segurança social altamente regulada pelo governo federal.',
            '4.1 Organização do Sistema de Saúde: A Bélgica adota um sistema de saúde universal baseado em seguros de saúde sociais obrigatórios. A responsabilidade regulatória nacional compete ao Ministério Federal da Saúde Pública e Segurança Social (FOD Volksgezondheid / SPF Santé Publique). A administração do sistema é descentralizada e operada pelos governos das comunidades Flamenga, Francesa e Germanófona. O atendimento médico é estruturado em três camadas distintas:',
            '1. Primeira Linha (Cuidados Primários): Conduzida por médicos de clínica geral (GPs - General Practitioners) que atendem em consultórios privados ou coletivos locais. O GP funciona como a porta de entrada do paciente no sistema de saúde.',
            '2. Segunda Linha (Cuidados Agudos): Oferecida por hospitais gerais e especializados para intervenções técnicas e cirúrgicas que exigem internação ou acompanhamento especializado.',
            '3. Terceira Linha (Cuidados Crônicos e de Longo Prazo): Voltada para a reabilitação física, cuidados geriátricos, cuidados paliativos e assistência domiciliar por enfermeiros ambulantes.',
            '4.2 A Rede Hospitalar e Estrutura Geral: O país possui 209 hospitais ativos integrados ao financiamento público:',
            '- 68 hospitais psiquiátricos: Especializados em distúrbios comportamentais e terapia mental em ambientes controlados.',
            '- 141 hospitais gerais: Sendo 113 de agudos e 7 hospitais universitários de alta complexidade diretamente vinculados às instituições de ensino e pesquisa científica (como os Hospitais Universitários de Leuven Sint-Rafael).',
            '4.3 Serviços de Emergência Médica (EMS): O resgate e atendimento pré-hospitalar de urgência é acionado de forma centralizada pelos números telefônicos de emergência 100 ou 112.',
            '- Ambulâncias e Unidades de Resposta: O despacho envia uma referência de ambulância padrão tripulada por dois paramédicos para conduzir o paciente ao hospital mais próximo.',
            '- MUG/SMUR (Veículos de Intervenção Médica): Em casos graves, despacha-se um veículo MUG/SMUR tripulado por um médico emergencista e um enfermeiro sênior de trauma. O país conta ainda com dois helicópteros médicos de resgate de financiamento misto, baseados em Bruges (Flanders) e Bra-sur-Lienne (Wallonia).'
          ]
        },
        {
          title: 'CAPÍTULO V: FINANCIAMENTO DA SAÚDE E SEGURIDADE SOCIAL',
          diagram: `[Financiamento da Saúde]
│
┌─────────────────────┴─────────────────────┐
▼ (Previdência Obrigatória)                 ▼ (Sistemas Complementares)
- Desconto de 13% do salário bruto          - Seguros privados adicionais
- Contribuição patronal de 15-22%           - Cobertura de quartos individuais
- Financiamento de tratamentos caros        - Mutualidades (Mutualités)`,
          paragraphs: [
            'O modelo de financiamento do sistema de saúde belga baseia-se na solidariedade de contribuições sociais obrigatórias e no sistema de redistribuição de renda.',
            '5.1 O Desconto da Previdência Social Obrigatória: Toda pessoa física sob contrato de trabalho na Bélgica é registrada de forma obrigatória no sistema de seguridade social.',
            '- Contribuições dos Trabalhadores: Os empregadores descontam diretamente cerca de 13% do salário bruto del empregado para o fundo de segurança social.',
            '- Contribuições dos Empregadores: A empresa deve recolher uma taxa patronal adicional que varia entre 15% e 22% sobre a folha salarial grossa para financiar o sistema. Os profissionais autônomos contribuem de forma direta com uma taxa de 20% a 22% sobre seus rendimentos líquidos declarados.',
            '5.2 O Papel das Mutualidades (Mutualités): As mutualidades (sociedades de assistência mútua, de origem histórica ligada à união de trabalhadores no século XIX, como a cooperativa socialista "La Solidarité" fundada em 1869) gerenciam os fundos da segurança social obrigatória e executam os reembolsos de despesas aos pacientes.',
            '- O Sistema de Reembolso: O paciente em consulta em consultório privado paga diretamente a taxa ao médico (cerca de 20 a 25 euros) e recebe um recibo fiscal. Esse recibo é entregue à sua respectiva vaietec, que realiza o reembolso de cerca de 75% do valor gasto diretamente na conta bancária do cidadão. Para os pacientes em vulnerabilidade social, aplica-se o sistema de "terceiro pagador", no qual o paciente paga apenas a taxa moderadora simbólica de 1 euro, e o Estado reembolsa o médico diretamente.',
            '- Identificação do Paciente (Cartão eID): O antigo cartão de seguridade social plástica com chip (Cartão SIS) foi descontinuado em 2014, sendo substituído pelo cartão de identidade eletrônico oficial (eID), que armazena digitalmente todo o histórico médico e os direitos previdenciários de reembolso do cidadão belga.'
          ]
        },
        {
          title: 'CAPÍTULO VI: INDICADORES BIOLÓGICOS, EXPECTATIVA DE VIDA E BEM-ESTAR',
          paragraphs: [
            'A estruturação eficiente do sistema de saúde universal e o incentivo à prática de exercícios físicos geram impactos biológicos positivos sobre as condições de vida no país.',
            '6.1 Expectativa de Vida e Mortalidade: Os dados de monitoramento demográfico revelam uma progressão consistente na longevidade da população belga. A expectativa de vida média ao nascer subiu de 77,7 anos em 1999 para 81,3 anos (com as mulheres registrando médias superiores à dos homens). No entanto, a Bélgica apresenta uma progressão de expectativa de vida ligeiramente inferior se comparada a outras nações de alta renda da Europa Ocidental, como Suécia, Itália, Espanha e França. A taxa de natalidade do país situa-se em 11,7 nascimentos por 1.000 habitantes, contra uma taxa de mortalidade anual de 9,2 por 1.000 habitantes, mantendo um crescimento vegetativo positivo de 2,5.',
            '6.2 O Estilo de Vida e a Preservação da Saúde (Biologia e Sociedade): O bem-estar e a qualidade de vida belga são reforçados por políticas públicas de promoção à saúde:',
            '- Prevenção e Imunização: As comunidades regionais financiam programas de vacinação compulsória infantil e de controle epidemiológico contra patógenos alimentares de forma integrada com a Agência Federal para a Segurança da Cadeia Alimentar (FASFC/AFSCA) e a agência de segurança nuclear (FANC) para limitar os riscos de exposição à radiação ionizante e contaminações por agrotóxicos.',
            '- Integração de Cuidados (Mantelzorg): A sociedade belga apoia e incentiva o modelo de cuidados comunitários informais (Mantelzorg), permitindo que cuidadores familiares e vizinhos recebam suporte financeiro estatal básico para acolher idosos e pessoas com deficiência física e mental em suas próprias residências, reduzindo a necessidade de institucionalização em asilos públicos e mitigando o isolamento social.'
          ]
        }
      ]
    }
  }
};
