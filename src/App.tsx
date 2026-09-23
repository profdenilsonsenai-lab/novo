import React, { useState } from 'react';
import {
  ExternalLink,
  ArrowUpRight,
  Maximize2,
  Bed,
  Car,
  Compass,
  MapPin,
  Check,
  Calculator,
  ShieldCheck,
  Waves,
  Dumbbell,
  Wine,
  Sparkles,
  TreePine,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

// Pre-generated high-fidelity architectural images
import heroFacadeImg from './assets/images/hero_luxury_apartment_facade_1790202274088.jpg';
import livingInteriorImg from './assets/images/apartment_living_interior_1790202285308.jpg';
import masterSuiteImg from './assets/images/apartment_master_suite_1790202296202.jpg';
import rooftopPoolImg from './assets/images/apartment_rooftop_pool_1790202305338.jpg';

const GOOGLE_FORM_URL = 'https://forms.gle/Zefgw1REndVJtGyQ7';

interface UnitPlan {
  id: string;
  name: string;
  tagline: string;
  area: string;
  bedrooms: string;
  suites: string;
  parking: string;
  priceEstimate: string;
  image: string;
  description: string;
  features: string[];
}

const UNITS: UnitPlan[] = [
  {
    id: 'garden',
    name: 'Planta Garden Privativo',
    tagline: 'A sensação e o verde de uma casa com a segurança de um edifício de prestígio',
    area: '185 m²',
    bedrooms: '3 Quartos',
    suites: '3 Suítes',
    parking: '3 Vagas Livres',
    priceEstimate: 'A partir de R$ 1.680.000',
    image: livingInteriorImg,
    description: 'Amplo terraço privativo integrado ao living com churrasqueira gourmet, jardim privativo e espaço para piscina compacta privativa.',
    features: [
      'Terraço descoberto de 48m² com paisagismo entregue',
      'Living integrado em conceito aberto com pé-direito elevado',
      'Suíte master com closet e cuba dupla no banho',
      'Infraestrutura completa para automação residencial'
    ]
  },
  {
    id: 'tipo',
    name: 'Planta Tipo Premium',
    tagline: 'Equilíbrio primoroso entre convívio social amplo e privacidade nas suítes',
    area: '145 m²',
    bedrooms: '3 Quartos',
    suites: '3 Suítes',
    parking: '2 Vagas Demarcadas',
    priceEstimate: 'A partir de R$ 1.390.000',
    image: masterSuiteImg,
    description: 'Varanda gourmet panorâmica nivelada ao piso da sala, iluminação e ventilação cruzada natural com vistas perenes.',
    features: [
      'Varanda gourmet com churrasqueira a carvão e duto individual',
      'Janelas do piso ao teto com atenuação acústica homologada',
      'Cozinha com ventilação natural direta e despensa',
      'Tomada individual para abastecimento de carro elétrico'
    ]
  },
  {
    id: 'duplex',
    name: 'Master Duplex',
    tagline: 'Imponência vertical com pé-direito duplo e suítes isoladas no pavimento superior',
    area: '225 m²',
    bedrooms: '4 Quartos',
    suites: '4 Suítes',
    parking: '3 Vagas Livres',
    priceEstimate: 'A partir de R$ 2.150.000',
    image: livingInteriorImg,
    description: 'Área social imponente com mezanino envidraçado, suíte master com hidro e closet walk-in de alto luxo.',
    features: [
      'Pé-direito duplo de 5,80m no living principal',
      'Escada escultórica com acabamento em mármore',
      'Hall social privativo com biometria no elevador',
      'Dependência completa de serviço e depósito no subsolo'
    ]
  },
  {
    id: 'penthouse',
    name: 'Cobertura Penthouse',
    tagline: 'O ápice da exclusividade no ponto mais nobre da cidade com vista panorâmica 360°',
    area: '320 m²',
    bedrooms: '4 Suítes',
    suites: '4 Suítes Plenas',
    parking: '4 Vagas Livres + Box',
    priceEstimate: 'Consulte Condições Exclusivas',
    image: rooftopPoolImg,
    description: 'Piscina de borda infinita privativa no deck suspenso, solarium privativo, lareira e acabamentos de padrão internacional.',
    features: [
      'Piscina privativa aquecida com deck em madeira teca',
      'Espaço gourmet externo com forno de pizza e adega',
      'Suíte master com 42m², dois closets e dois banheiros',
      'Elevador privativo com acesso aos dois pavimentos'
    ]
  }
];

const AMENITIES = [
  {
    icon: Waves,
    title: 'Rooftop Lounge & Piscina Infinita',
    description: 'Raia de 25 metros no 26º andar com horizonte infinito, solarium e bar de apoio climatizado.'
  },
  {
    icon: Dumbbell,
    title: 'Academia de Alta Performance',
    description: 'Equipamentos de última geração da Technogym, espaço funcional ao ar livre e estúdio de pilates.'
  },
  {
    icon: Wine,
    title: 'Espaço Gourmet & Adega Privativa',
    description: 'Ambiente refinado para até 30 convidados com cooktop profissional e armários individuais de vinho.'
  },
  {
    icon: Sparkles,
    title: 'Spa & Wellness Center',
    description: 'Sauna seca e úmida, sala de massagem, ducha escocesa e repouso com espelho d’água.'
  },
  {
    icon: TreePine,
    title: 'Parque Privativo com Paisagismo',
    description: 'Mais de 1.800m² de bosque preservado com espécies nativas, pista de caminhada e pet place.'
  },
  {
    icon: ShieldCheck,
    title: 'Segurança & Blindagem Avançada',
    description: 'Portaria blindada 24h, reconhecimento facial, eclusa para pedestres e veículos, e gerador full.'
  }
];

const FAQ_ITEMS = [
  {
    q: 'Qual é o prazo de entrega da obra e estágio atual?',
    a: 'O empreendimento está em fase de lançamento com obras já iniciadas e fundação concluída. O cronograma de entrega prevê conclusão em 36 meses com seguro garantia de entrega e patrimônio de afetação instituído.'
  },
  {
    q: 'Como funciona a flexibilização do fluxo de pagamento?',
    a: 'Durante o período de construção você paga cerca de 30% a 40% do valor total em parcelas mensais, intermediárias semestrais e entrada facilitada. Os 60% restantes podem ser quitados à vista ou financiados pelo banco de sua preferência na entrega das chaves.'
  },
  {
    q: 'Posso personalizar o layout da planta e os acabamentos?',
    a: 'Sim. Oferecemos o programa Exclusivité de personalização guiada pela nossa equipe de arquitetura, permitindo unificação de ambientes, alteração de pontos hidráulicos/elétricos e escolha de kits nobres de porcelanato e bancadas.'
  },
  {
    q: 'Como agendar uma visita ao decorado ou falar com o especialista?',
    a: 'Basta clicar no botão "Tenho Interesse" nesta página. Nosso time de consultores entrará em contato em menos de 15 minutos via WhatsApp ou telefone conforme sua conveniência.'
  }
];

export default function App() {
  const [selectedUnit, setSelectedUnit] = useState<UnitPlan>(UNITS[1]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Financial Simulator State
  const [simUnitValue, setSimUnitValue] = useState<number>(1450000);
  const [simDownPaymentPct, setSimDownPaymentPct] = useState<number>(20);
  const [simMonthsConstruction, setSimMonthsConstruction] = useState<number>(36);

  const downPayment = Math.round((simUnitValue * simDownPaymentPct) / 100);
  const constructionPeriodTotal = Math.round(simUnitValue * 0.20);
  const monthlyConstruction = Math.round(constructionPeriodTotal / simMonthsConstruction);
  const balanceToFinance = simUnitValue - downPayment - constructionPeriodTotal;

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. TOP BAR CONTRACT: Exactly 3 Zones */}
      <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif-display font-semibold tracking-wide text-neutral-50 hover:text-amber-400 transition-colors"
          >
            Reserva Vista Nobre
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#visao-geral" className="hover:text-amber-400 transition-colors">
              Visão Geral
            </a>
            <a href="#plantas" className="hover:text-amber-400 transition-colors">
              Plantas & Apartamentos
            </a>
            <a href="#lazer" className="hover:text-amber-400 transition-colors">
              Lazer Resort
            </a>
            <a href="#localizacao" className="hover:text-amber-400 transition-colors">
              Localização
            </a>
            <a href="#simulador" className="hover:text-amber-400 transition-colors">
              Simulador
            </a>
            <a href="#duvidas" className="hover:text-amber-400 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/10 whitespace-nowrap"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-5 space-y-4 text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#visao-geral"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-amber-400"
            >
              Visão Geral
            </a>
            <a
              href="#plantas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-amber-400"
            >
              Plantas & Apartamentos
            </a>
            <a
              href="#lazer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-amber-400"
            >
              Lazer Resort
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-amber-400"
            >
              Localização
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-amber-400"
            >
              Simulador Financeiro
            </a>
            <div className="pt-2">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors"
              >
                <span>Tenho Interesse</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section id="visao-geral" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7 space-y-8">
                {/* Clean unboxed editorial metadata (Zero-Pill Discipline) */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm tracking-wider uppercase text-amber-400 font-medium">
                  <span>Lançamento Residencial de Alto Padrão</span>
                  <span aria-hidden="true">·</span>
                  <span>Bairro Nobre</span>
                  <span aria-hidden="true">·</span>
                  <span>Condições Especiais</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-display font-medium tracking-tight text-white leading-[1.12]" style={{ textWrap: 'balance' }}>
                    Onde a sofisticação encontra a sua nova perspectiva de viver.
                  </h1>
                  <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
                    Apartamentos exclusivos de <span className="text-white font-medium">145m² a 320m²</span>, com <span className="text-white font-medium">2 a 4 suítes</span>, varanda gourmet integrada e vista panorâmica definitiva. Viva o privilégio do requinte arquitetônico com lazer de padrão internacional.
                  </p>
                </div>

                {/* Primary CTA Decision Block */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/20"
                  >
                    <span>Tenho Interesse</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href="#plantas"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors"
                  >
                    <span>Ver Tipologias & Plantas</span>
                    <ChevronDown className="w-4 h-4" />
                  </a>
                </div>

                {/* Clean Quantitative Trust Row (Adjacency to claims, unboxed) */}
                <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif-display font-semibold text-white tabular-nums">
                      145 a 320<span className="text-sm font-sans font-normal text-amber-400 ml-1">m²</span>
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">Áreas privativas</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif-display font-semibold text-white tabular-nums">
                      3 a 4
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">Suítes plenas</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif-display font-semibold text-white tabular-nums">
                      2 a 4
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">Vagas demarcadas</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif-display font-semibold text-amber-400 tabular-nums">
                      100%
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">Vista livre definitiva</div>
                  </div>
                </div>
              </div>

              {/* Hero Right Visual Asset */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl">
                  <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={heroFacadeImg}
                      alt="Fachada arquitetônica iluminada do Edifício Reserva Vista Nobre ao entardecer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Measured Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent pointer-events-none" />

                  {/* Floating Highlight Info Box */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 text-xs sm:text-sm">
                    <div className="flex items-center justify-between text-neutral-200">
                      <span className="font-semibold text-white">Torre Única com Terreno de 4.200m²</span>
                      <span className="text-amber-400 font-mono text-xs">Exclusividade</span>
                    </div>
                    <p className="text-neutral-400 text-xs mt-1">
                      Apenas 2 apartamentos por andar com acessos sociais totalmente individualizados.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. PLANTAS & APARTAMENTOS (Interactive Showcase) */}
        <section id="plantas" className="py-20 bg-neutral-900/40 border-y border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Section Header */}
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Tipologias Exclusivas
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif-display font-medium text-white tracking-tight" style={{ textWrap: 'balance' }}>
                Plantas inteligentes desenhadas para o seu estilo de vida
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Cada metro quadrado foi projetado com foco na amplitude, luminosidade natural e privacidade. Escolha a planta que atende ao tamanho dos seus sonhos.
              </p>
            </div>

            {/* Interactive Unit Selector Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl">
              {UNITS.map((unit) => {
                const isActive = selectedUnit.id === unit.id;
                return (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    className={`py-3 px-4 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-neutral-800 text-white shadow-md border border-amber-400/30'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                    }`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                      {unit.area}
                    </div>
                    <div className="text-sm font-medium mt-0.5 truncate text-white">
                      {unit.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Unit Detailed Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl items-center">
              
              {/* Unit Visual Asset */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group">
                  <img
                    src={selectedUnit.image}
                    alt={`Perspectiva visual do ${selectedUnit.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                    <span>Perspectiva artística ilustrativa dos acabamentos</span>
                    <span className="text-amber-400 font-medium">Acabamentos Prime</span>
                  </div>
                </div>

                {/* Technical spec summary row */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                    <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xs mb-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Área</span>
                    </div>
                    <div className="text-base font-semibold text-white tabular-nums">
                      {selectedUnit.area}
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                    <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xs mb-1">
                      <Bed className="w-3.5 h-3.5" />
                      <span>Configuração</span>
                    </div>
                    <div className="text-base font-semibold text-white">
                      {selectedUnit.suites}
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                    <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xs mb-1">
                      <Car className="w-3.5 h-3.5" />
                      <span>Garagem</span>
                    </div>
                    <div className="text-base font-semibold text-white">
                      {selectedUnit.parking}
                    </div>
                  </div>
                </div>
              </div>

              {/* Unit Content & CTA */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                    {selectedUnit.name}
                  </span>
                  <h3 className="text-2xl font-serif-display font-medium text-white mt-1">
                    {selectedUnit.tagline}
                  </h3>
                  <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                    {selectedUnit.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Diferenciais Deste Apartamento
                  </div>
                  <ul className="space-y-2.5">
                    {selectedUnit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <div className="text-xs text-neutral-400">Condição estimada:</div>
                  <div className="text-xl font-serif-display font-semibold text-amber-400 mt-0.5">
                    {selectedUnit.priceEstimate}
                  </div>
                </div>

                {/* Primary Button: TENHO INTERESSE with Google Form */}
                <div className="pt-2">
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/10"
                  >
                    <span>Tenho Interesse nesta Unidade</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-neutral-400 text-center mt-2">
                    Receba memorial descritivo, tabela de preços e planta técnica em PDF.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 4. LAZER & ESTRUTURA RESORT */}
        <section id="lazer" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-3">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Experiência Exclusiva
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif-display font-medium text-white tracking-tight" style={{ textWrap: 'balance' }}>
                  Um clube privativo suspenso com lazer comparável aos melhores resorts
                </h2>
              </div>
              <div className="lg:col-span-4 text-sm text-neutral-400 leading-relaxed">
                Ambientes entregues equipados, climatizados e decorados por renomados arquitetos, priorizando o bem-estar e celebrações memoráveis com familiares.
              </div>
            </div>

            {/* Featured Rooftop Pool Showcase Card */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                <img
                  src={rooftopPoolImg}
                  alt="Piscina de borda infinita no rooftop com vista panorâmica do horizonte urbano ao entardecer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 max-w-2xl space-y-2">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Destaque no 26º Andar
                </div>
                <h3 className="text-xl sm:text-3xl font-serif-display font-semibold text-white">
                  Infinity Rooftop Pool com horizonte desobstruído
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 sm:line-clamp-none">
                  Aprecie o pôr do sol na água climatizada, cercado por decks de madeira sustentável e atendimento com serviço de apoio.
                </p>
              </div>
            </div>

            {/* Bento Grid Amenities List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AMENITIES.map((amenity, idx) => {
                const IconComponent = amenity.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors space-y-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-medium text-white">
                        {amenity.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. SIMULADOR FINANCEIRO INTERATIVO */}
        <section id="simulador" className="py-20 bg-neutral-900/50 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Form and Explanation */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold">
                    <Calculator className="w-4 h-4" />
                    <span>Planejamento de Aquisição</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-serif-display font-medium text-white tracking-tight">
                    Simule seu fluxo durante o período de obras
                  </h2>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Personalize o valor do imóvel e o percentual de entrada para visualizar uma estimativa transparente das parcelas até a entrega das chaves.
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  {/* Slider: Valor do Imóvel */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-neutral-300">
                      <span>Valor de Referência</span>
                      <span className="font-mono text-amber-400 font-semibold tabular-nums">
                        {formatBRL(simUnitValue)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1300000}
                      max={3500000}
                      step={50000}
                      value={simUnitValue}
                      onChange={(e) => setSimUnitValue(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                      <span>R$ 1.3M</span>
                      <span>R$ 2.4M</span>
                      <span>R$ 3.5M</span>
                    </div>
                  </div>

                  {/* Slider: Entrada Inicial % */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-neutral-300">
                      <span>Entrada no Ato ({simDownPaymentPct}%)</span>
                      <span className="font-mono text-white font-semibold tabular-nums">
                        {formatBRL(downPayment)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={40}
                      step={5}
                      value={simDownPaymentPct}
                      onChange={(e) => setSimDownPaymentPct(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                      <span>10% (Mínimo)</span>
                      <span>20% (Recomendado)</span>
                      <span>40%</span>
                    </div>
                  </div>

                  {/* Slider: Prazo de Obra */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-neutral-300">
                      <span>Prazo de Construção</span>
                      <span className="font-mono text-white font-semibold tabular-nums">
                        {simMonthsConstruction} meses
                      </span>
                    </div>
                    <input
                      type="range"
                      min={24}
                      max={42}
                      step={6}
                      value={simMonthsConstruction}
                      onChange={(e) => setSimMonthsConstruction(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Simulation Result Board */}
              <div className="lg:col-span-6 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="border-b border-neutral-800 pb-4">
                  <span className="text-xs text-neutral-400 uppercase tracking-wider">Projeção do Fluxo</span>
                  <div className="text-2xl sm:text-3xl font-serif-display font-semibold text-white mt-1">
                    Condições Sob Medida
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-neutral-900">
                    <span className="text-neutral-400">Entrada Facilitada no Ato:</span>
                    <span className="font-semibold text-white font-mono tabular-nums">
                      {formatBRL(downPayment)}
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-neutral-900">
                    <span className="text-neutral-400">Mensais durante a Obra ({simMonthsConstruction}x):</span>
                    <span className="font-semibold text-amber-400 font-mono tabular-nums">
                      {formatBRL(monthlyConstruction)} / mês
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-neutral-900">
                    <span className="text-neutral-400">Saldo na Entrega (Financiamento Bancário / Quitação):</span>
                    <span className="font-semibold text-neutral-200 font-mono tabular-nums">
                      {formatBRL(balanceToFinance)}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800/80 text-xs text-neutral-300 space-y-1">
                  <div className="font-semibold text-white">Sem burocracia desnecessária</div>
                  <p className="text-neutral-400 leading-relaxed">
                    Possibilidade de amortização extraordinária, uso de FGTS na chave e análise de crédito com os principais bancos parceiros (Caixa, Itaú, Bradesco, Santander).
                  </p>
                </div>

                {/* Primary Button with the required link */}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/10"
                >
                  <span>Tenho Interesse nessa Condição</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 6. LOCALIZAÇÃO PRIVILEGIADA */}
        <section id="localizacao" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Endereço Estratégico
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif-display font-medium text-white tracking-tight">
                No epicentro do que a cidade tem de mais valioso
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Mobilidade sem esforço, ruas arborizadas e acesso imediato aos mais renomados centros de ensino, gastronomia refinada e serviços premium.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Proximity Points */}
              <div className="lg:col-span-5 space-y-4">
                {[
                  { place: 'Parque Municipal & Lago', time: '3 min a pé', desc: 'Ar puro e pistas exclusivas de corrida diária.' },
                  { place: 'Colégios Internacionais & Bilíngues', time: '4 min de carro', desc: 'As melhores instituições de ensino do estado.' },
                  { place: 'Polo Gastronômico & Bistrôs', time: '5 min a pé', desc: 'Restaurantes premiados e padarias artesanais.' },
                  { place: 'Shopping Iguatemi & Grifes', time: '7 min de carro', desc: 'Lojas de luxo, cinemas VIP e conveniência total.' },
                  { place: 'Hospital Albert Einstein / Sírio', time: '8 min de carro', desc: 'Referência absoluta em medicina diagnóstica e cuidados.' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium text-white">{item.place}</div>
                      <div className="text-xs text-neutral-400">{item.desc}</div>
                    </div>
                    <div className="text-xs font-semibold font-mono text-amber-400 shrink-0 bg-amber-400/10 px-2.5 py-1 rounded">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>

              {/* Architectural Location Map Frame */}
              <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 lg:p-8 space-y-4">
                <div className="aspect-[16/10] rounded-xl bg-neutral-950 border border-neutral-800 overflow-hidden relative flex flex-col items-center justify-center p-8 text-center">
                  {/* Stylized vector map grid representation */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]" />
                  
                  <div className="relative z-10 space-y-3 max-w-md">
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/30">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="text-base font-serif-display font-semibold text-white">
                      Av. das Palmeiras Nobres, 1200 — Bairro Jardins
                    </div>
                    <p className="text-xs text-neutral-400">
                      Plantão de vendas exclusivo com maquete física 1:40 e apartamento modelo decorado aberto para visitação agendada.
                    </p>
                    
                    <div className="pt-3">
                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline"
                      >
                        <span>Agendar Visita com Especialista</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 pt-2 gap-2">
                  <span>Estacionamento com valet cortesia no local</span>
                  <span className="text-amber-400 font-medium">Horário: Diariamente das 09h às 19h</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 7. DÚVIDAS FREQUENTES (FAQ) */}
        <section id="duvidas" className="py-20 bg-neutral-900/30 border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Esclarecimentos
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-white">
                Perguntas Frequentes sobre a Aquisição
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/60"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-medium text-white hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-amber-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/50 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. FINAL HIGH-CONVERTING CALL TO ACTION BLOCK */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border-t border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Oportunidade de Lançamento
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-medium text-white tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
                Garanta sua unidade com condições exclusivas de primeira tabela
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Cadastre-se para receber atendimento prioritário, tabela com desconto especial de lançamento e o book digital completo do Reserva Vista Nobre.
              </p>
            </div>

            {/* Central High Intent CTA Button with Required URL */}
            <div className="pt-2 flex flex-col items-center">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-2xl shadow-amber-500/25"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  Atendimento em menos de 15 minutos
                </span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  Privacidade total de dados
                </span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  Sem compromisso
                </span>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* 9. QUIET FOOTER */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-neutral-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-base font-serif-display font-medium text-neutral-200">
                Reserva Vista Nobre
              </div>
              <p className="text-neutral-500">
                Incorporação e Construção de Alto Padrão. CRECI 42890-J.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-neutral-400 text-xs">
              <a href="#visao-geral" className="hover:text-neutral-200 transition-colors">Visão Geral</a>
              <a href="#plantas" className="hover:text-neutral-200 transition-colors">Plantas</a>
              <a href="#lazer" className="hover:text-neutral-200 transition-colors">Lazer</a>
              <a href="#simulador" className="hover:text-neutral-200 transition-colors">Simulador</a>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-medium"
              >
                Formulário de Interesse
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600">
            <p>
              © {new Date().getFullYear()} Reserva Vista Nobre Empreendimentos Imobiliários. Todos os direitos reservados.
            </p>
            <p className="max-w-md text-center sm:text-right">
              Imagens meramente ilustrativas com sugestão de decoração. Materiais e acabamentos conforme memorial descritivo registrado no R.I.
            </p>
          </div>
        </div>
      </footer>

      {/* 10. MOBILE FLOATING ACTION (Respecting 15% Mobile Sticky Cap) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 p-3 flex items-center justify-between gap-3">
        <div className="truncate">
          <div className="text-xs font-semibold text-white truncate">Reserva Vista Nobre</div>
          <div className="text-[10px] text-amber-400 truncate">145m² a 320m² · 3 a 4 Suítes</div>
        </div>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-95 transition-all shrink-0"
        >
          <span>Tenho Interesse</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
