/**
 * @file types.ts
 * @description Definições de tipos e interfaces estritas para o portal O Clarim Belga.
 * Segue os padrões corporativos de tipagem imutável e autodescritiva.
 */

/**
 * Representa um marco cronológico na linha do tempo histórica do Reino da Bélgica.
 */
export interface TimelineItem {
  readonly year: string;
  readonly title: string;
  /** Época ou período histórico (ex: 'antiguidade', 'idade-media', 'revolucao-belga', 'contemporanea') */
  readonly period: string;
  readonly description: string;
  /** Detalhes aprofundados para visualização expandida (modal ou gaveta de leitura) */
  readonly details: string;
  /** Insights filosóficos ou sociopolíticos da época, se aplicável */
  readonly philosophicalInsight?: string;
  readonly philosopher?: string;
}

/**
 * Estrutura de dados geoespaciais para marcação e realce de mapas interativos.
 */
export interface GeoCoordinates {
  readonly lat: number;
  readonly lng: number;
  readonly zoom?: number;
  /** Caminho vetorial SVG (parâmetro 'd') para renderizar o destaque da província no mapa */
  readonly svgPath?: string;
}

/**
 * Detalhes geográficos, ecológicos e estruturais de uma região ou província belga.
 * Foca primariamente nas três grandes regiões: Flandres (Flanders), Valônia (Wallonia) e Bruxelas-Capital.
 */
export interface RegionDetail {
  readonly id: 'flanders' | 'wallonia' | 'brussels' | string;
  readonly name: string;
  readonly clima: string;
  readonly relevo: string;
  readonly recursos: readonly string[];
  readonly problemas: readonly string[];
  readonly biomas: readonly string[];
  readonly faunaFlora: readonly string[];
  readonly description: string;
  /** Dados geográficos para o realce no mapa dinâmico (String padrão ou coordenadas complexas) */
  readonly coordinates: string | GeoCoordinates;
}

/**
 * Representação de elementos do rico patrimônio cultural belga.
 */
export interface CulturalItem {
  readonly id: string;
  readonly title: string;
  /** Categorias expandidas para incluir a forte tradição de quadrinhos belgas (Banda Desenhada) e folclore */
  readonly category: 'música' | 'culinária' | 'costumes' | 'folclore' | 'banda-desenhada';
  readonly description: string;
  readonly details: string;
  /** Cor hexadecimal ou classe utilitária de CSS para estilização dinâmica do card */
  readonly accentColor: string;
  readonly extra?: {
    readonly ingredients?: readonly string[];
    readonly steps?: readonly string[];
    /** Caminho para arquivo de áudio ou pronúncia local (ex: dialeto flamengo ou francês valão) */
    readonly audioPlaceholder?: string;
    /** Expressões ou expressões idiomáticas regionais típicas */
    readonly expressions?: readonly {
      readonly phrase: string;
      readonly meaning: string;
    }[];
  };
}

/**
 * Representa os setores que compõem o PIB (Produto Interno Bruto) da Bélgica.
 */
export interface GdpSector {
  readonly name: string;
  readonly value: number;
  /** Representação percentual (de 0 a 100) do peso do setor na economia geral */
  readonly weight: number;
  readonly description: string;
}

/**
 * Representa uma campanha histórica ou grande feito esportivo da seleção belga (Red Devils).
 * Nota de Rigor Histórico: A Bélgica nunca venceu uma Copa do Mundo (melhor resultado: 3º lugar em 2018), 
 * portanto a interface foi evoluída de 'WorldCupTitle' para 'SportsCampaign' para refletir marcos e campanhas reais.
 */
export interface SportsCampaign {
  readonly year: string;
  readonly tournament: 'World Cup' | 'Euro' | 'Olympics';
  /** Oponente no jogo decisivo ou mais marcante da campanha */
  readonly opponent: string;
  readonly score: string;
  /** Estrelas ou destaques individuais da campanha (ex: ["Eden Hazard", "Kevin De Bruyne", "Romelu Lukaku"]) */
  readonly stars: readonly string[];
  readonly manager: string;
  readonly description: string;
  readonly tactics: string;
  /** Posição final alcançada na campanha (ex: "3rd Place", "Gold Medal", "Runners-up") */
  readonly finalResult: string;
}

/**
 * Metadados estruturais das seções de leitura e consulta oficial do portal.
 */
export interface SectionData {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  /** Tópicos de cobertura oficial (ex: ["Geografia", "História", "Sociologia"]) */
  readonly disciplines: readonly string[];
  readonly coverImage: string;
  readonly summary: string;
  /** Tempo estimado de leitura formatado (ex: "5 min de leitura") */
  readonly readTime: string;
}