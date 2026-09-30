import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  BadgeCheck,
  BookOpen,
  Check,
  Coffee,
  Eye,
  ExternalLink,
  FileText,
  Fingerprint,
  Heart,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Moon,
  Smartphone,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Sun,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';
import useHighContrast from './hooks/useHighContrast';

const logoUrl = '/logo.png';

const features = [
  {
    icon: HeartHandshake,
    title: 'Encontrar',
    text: 'Conecte-se por afinidades reais: leituras, passeios, viagens e hobbies que fazem parte da sua vida.',
  },
  {
    icon: Eye,
    title: 'Compreender',
    text: 'Perfis claros, fontes amplas e navegação por escolhas. Sem gestos de deslizar ou toques acidentais.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiar',
    text: 'A proposta prevê verificação de perfil e recursos de proteção para você conversar com mais tranquilidade.',
  },
];

const moments = [
  {
    image: '/encontros-selfie-compartilhada.png',
    alt: 'Duas mulheres maduras sorrindo enquanto registram uma selfie juntas',
    title: 'Uma conversa compartilhada pode ser o começo.',
    text: 'Tecnologia e bons momentos se encontram quando há companhia, atenção e vontade de se conectar.',
  },
];


const heroImage = '/hero-casal-viajante.png';
const autonomyImage = '/corrida-casal.png';
const personImage = '/pessoa-madura.png';
const steps = [
  ['1', 'Você conta o que gosta', 'Escolha hobbies e preferências de um jeito simples e sem pressa.', Smartphone],
  ['2', 'Boas afinidades aparecem', 'Veja sugestões de conexão e, se quiser, receba uma ideia para começar o primeiro olá.', Sparkles],
  ['3', 'Você combina o próximo passo', 'Conversem e, se fizer sentido para ambos, escolham um local público para se conhecer.', MapPin],
];

const safetyFeatures = [
  [Fingerprint, 'Verificação de perfil', 'A proposta considera verificação com biometria facial para ajudar a reduzir perfis falsos, sempre com atenção ao consentimento.'],
  [ShieldAlert, 'Bloqueio e denúncia', 'Recursos visíveis para bloquear ou denunciar um perfil com poucos toques.'],
  [LockKeyhole, 'Privacidade e LGPD', 'Proteção de dados e transparência pensadas desde o início, em respeito à LGPD.'],
];

const team = [
  ['José Guilherme', 'Líder de Projeto / Desenvolvedor'],
  ['Abraão Silva', 'Desenvolvedor'],
  ['Paulo Rafael', 'Desenvolvedor'],
  ['Brigitte Lara', 'Desenvolvedora'],
];

function Reveal({ children, className = '', delay = 0, id }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ActionLink({ children, href, secondary = false, highContrast }) {
  const reducedMotion = useReducedMotion();
  const contrastColors = highContrast
    ? 'bg-accent text-on-action hover:brightness-110'
    : 'bg-gradient-to-r from-[#8C2D52] to-[#FF2A55] text-white hover:brightness-105';

  return (
    <motion.a
      href={href}
      whileHover={reducedMotion || highContrast ? undefined : { scale: 1.02 }}
      whileTap={reducedMotion || highContrast ? undefined : { scale: 0.98 }}
      className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-xl px-7 py-4 text-lg font-medium transition-colors focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#FF2A55] ${
        secondary
          ? 'border-2 border-ink text-ink hover:bg-line'
          : `${contrastColors} shadow-lg shadow-[#8C2D52]/20`
      }`}
    >
      {children}
    </motion.a>
  );
}

function FloatingBadge({ children, className = '', delay = 0, reducedMotion }) {
  return (
    <motion.div
      animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={reducedMotion ? undefined : { scale: 1.03 }}
      className={`inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-panel px-5 py-3 text-base font-medium text-ink shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const [highContrast, toggleHighContrast] = useHighContrast();
  const reducedMotion = useReducedMotion();
  const ctaMotion = reducedMotion
    ? {}
    : { animate: { scale: [1, 1.025, 1] }, transition: { duration: 2.8, repeat: Infinity } };

  return (
    <div className="min-h-screen overflow-hidden bg-surface font-sans text-ink">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-action focus:px-6 focus:py-3 focus:font-medium focus:text-on-action"
      >
        Pular para o conteúdo
      </a>

    
      <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" aria-label="BeyondTime, início" className="flex min-h-12 items-center gap-2">
            <motion.img
              src={logoUrl}
              alt=""
              aria-hidden="true"
              {...ctaMotion}
              className="h-10 w-[5.5rem] object-cover object-center md:h-12 md:w-[6.5rem]"
            />
          </a>

          <nav aria-label="Navegação principal" className="order-3 w-full overflow-x-auto sm:order-2 sm:w-auto">
            <ul className="flex min-w-max items-center justify-center gap-1 sm:gap-2">
              {[
                ['#como-funciona', 'Como funciona'],
                ['#para-quem', 'Para quem é'],
                ['#projeto', 'O projeto'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-ink transition-colors hover:bg-line hc:hover:bg-transparent hc:hover:text-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="order-2 flex items-center gap-2 sm:order-3">
            <button
              type="button"
              aria-pressed={highContrast}
              aria-label={highContrast ? 'Ativar modo claro' : 'Ativar modo escuro e alto contraste'}
              onClick={toggleHighContrast}
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-line px-3 text-base font-medium text-ink transition-colors hover:bg-line hc:hover:bg-transparent hc:hover:text-accent"
            >
              {highContrast ? <Sun aria-hidden="true" className="size-5" /> : <Moon aria-hidden="true" className="size-5" />}
              <span className="hidden md:inline">{highContrast ? 'Modo claro' : 'Modo escuro'}</span>
              <span className="md:hidden">{highContrast ? 'Claro' : 'Escuro'}</span>
            </button>
            <a
              href="#como-funciona"
              className={`inline-flex min-h-12 items-center justify-center rounded-lg px-4 text-base font-medium transition-colors hover:brightness-105 ${highContrast ? 'bg-accent text-on-action' : 'bg-gradient-to-r from-[#8C2D52] to-[#FF2A55] text-white'}`}
            >
              Conhecer o MVP
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section id="inicio" className="relative isolate scroll-mt-32">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,42,85,0.12),_transparent_48%)] hc:bg-none" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <Reveal className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#8C2D52]/25 bg-panel/70 px-4 py-2 text-base font-medium text-[#8C2D52] hc:border-accent hc:text-accent">
                Conexões Reais que Vão Além do Tempo
              </span>
              <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:mx-0">
                Sempre é tempo de viver novas histórias e conexões reais.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted lg:mx-0">
                Descubra um espaço digital feito sob medida para você encontrar companheirismo,
                conversar sobre seus hobbies favoritos e construir amizades com total segurança e calma.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <ActionLink href="#como-funciona" highContrast={highContrast}>
                  Explorar Conexões Seguras <ArrowDown aria-hidden="true" className="size-5" />
                </ActionLink>
                <ActionLink href="#projeto" secondary highContrast={highContrast}>Conheça a proposta</ActionLink>
              </div>
              <p className="mt-6 flex items-center justify-center gap-2 text-base font-medium text-muted lg:justify-start">
                <MapPin aria-hidden="true" className="size-5 text-[#8C2D52] hc:text-accent" />
                Pensada para pessoas 50+ em Sergipe
              </p>
            </Reveal>

            <Reveal delay={0.12} className="relative mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-3 shadow-2xl shadow-[#2A0B2C]/10 sm:p-4">
                <img
                  src={heroImage}
                  alt="Casal maduro viajando com mochilas e tirando uma selfie ao ar livre"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-[#2A0B2C]/10"
                  fetchPriority="high"
                />
                <div className="flex items-center justify-between gap-3 px-3 py-4 sm:px-5 sm:py-5">
                  <div>
                    <p className="font-heading text-lg font-bold text-ink">Uma boa conversa pode abrir caminhos.</p>
                    <p className="mt-1 text-base text-muted">Conexões no seu tempo, do seu jeito.</p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#8C2D52]/10 text-[#8C2D52] hc:bg-transparent hc:text-accent">
                    <Heart aria-hidden="true" className="size-6" />
                  </span>
                </div>
              </div>
              <FloatingBadge className="absolute -left-10 top-8 hidden lg:inline-flex" delay={0.2} reducedMotion={reducedMotion}>
                <BadgeCheck aria-hidden="true" className="size-5 text-brand-wine hc:text-accent" />
                Perfis verificados
              </FloatingBadge>
              <FloatingBadge className="absolute -right-8 bottom-24 hidden lg:inline-flex" delay={0.65} reducedMotion={reducedMotion}>
                <Heart aria-hidden="true" className="size-5 fill-current text-brand-wine hc:text-accent" />
                98% de afinidade por leitura
              </FloatingBadge>
              <div className="absolute -bottom-10 -left-2 hidden items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 shadow-lg sm:flex sm:-left-8">
                <span className="grid size-11 place-items-center rounded-full bg-[#8C2D52]/10 text-[#8C2D52] hc:bg-transparent hc:text-accent">
                  <UsersRound aria-hidden="true" className="size-6" />
                </span>
                <span className="text-base font-medium text-ink">Mais calma para se conectar</span>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 lg:hidden">
                <FloatingBadge delay={0.2} reducedMotion={reducedMotion}>
                  <BadgeCheck aria-hidden="true" className="size-5 text-brand-wine hc:text-accent" />
                  Perfis verificados
                </FloatingBadge>
                <FloatingBadge delay={0.65} reducedMotion={reducedMotion}>
                  <Heart aria-hidden="true" className="size-5 fill-current text-brand-wine hc:text-accent" />
                  Afinidade por leitura
                </FloatingBadge>
              </div>
            </Reveal>
          </div>
          <a href="#proposta" className="mx-auto mb-6 flex w-fit min-h-12 items-center gap-2 px-4 text-base font-medium text-muted transition-colors hover:text-ink hc:hover:text-accent">
            Conheça um jeito mais humano de se conectar <ArrowDown aria-hidden="true" className="size-5" />
          </a>
        </section>

        <section id="proposta" className="scroll-mt-28 border-y border-line bg-panel py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-base font-medium uppercase tracking-[0.12em] text-[#8C2D52] hc:text-accent">Mais espaço para o que importa</p>
              <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">A vida fica melhor quando temos com quem compartilhar bons momentos.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Chega de aplicativos confusos, botões minúsculos ou da dúvida sobre quem está do outro lado.
                O BeyondTime foi pensado para reduzir barreiras e trazer mais tranquilidade à experiência.
              </p>
            </Reveal>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map(({ icon: Icon, title, text }, index) => (
                <motion.li
                  key={title}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={reducedMotion ? undefined : { scale: 1.03, y: -4 }}
                  className="rounded-xl border border-line bg-surface p-7 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
                >
                  <span className="grid size-14 place-items-center rounded-xl bg-[#8C2D52]/10 text-[#8C2D52] hc:bg-transparent hc:text-accent">
                    <Icon aria-hidden="true" className="size-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{text}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-28 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-base font-medium uppercase tracking-[0.12em] text-[#8C2D52] hc:text-accent">Simples desde o primeiro passo</p>
              <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">Como funciona</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">Uma experiência pensada para acompanhar você, sem apressar nenhuma conexão.</p>
            </Reveal>
            <ol className="grid gap-5 md:grid-cols-3">
              {steps.map(([number, title, text, Icon], index) => (
                <motion.li
                  key={number}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={reducedMotion ? undefined : { scale: 1.03 }}
                  className="rounded-xl border border-line bg-panel p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-full bg-[#8C2D52]/10 text-xl font-medium text-[#8C2D52] hc:bg-transparent hc:text-accent">{number}</span>
                    <Icon aria-hidden="true" className="size-7 text-[#8C2D52] hc:text-accent" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{text}</p>
                </motion.li>
              ))}
            </ol>
            <Reveal delay={0.12} className="mt-16">
              <div className="relative mx-auto flex min-h-[22rem] max-w-5xl flex-col items-center justify-center px-2 py-6 sm:min-h-[25rem]">
                <motion.div
                  animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={reducedMotion ? undefined : { scale: 1.03 }}
                  className="relative z-10 w-full max-w-md rounded-3xl border border-line bg-panel p-6 shadow-2xl shadow-[#2A0B2C]/15 sm:p-8"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-heading text-lg font-bold">Uma conexão para você</p>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-base font-medium text-accent">Prévia do MVP</span>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <img src={personImage} alt="" className="size-20 rounded-2xl object-cover shadow-md shadow-[#2A0B2C]/10 sm:size-24" loading="lazy" />
                    <div>
                      <p className="font-heading text-xl font-bold">Afinidades em comum</p>
                      <p className="mt-1 text-base text-muted">Leitura · passeios · conversas</p>
                    </div>
                  </div>
                  <div className="mt-5 flex min-h-12 items-center gap-3 rounded-xl border border-line px-4 py-3">
                    <MessageCircle aria-hidden="true" className="size-5 shrink-0 text-accent" />
                    <p className="text-base font-medium">Que tal começar falando sobre seu livro favorito?</p>
                  </div>
                </motion.div>

                <FloatingBadge className="absolute left-0 top-10 hidden xl:inline-flex" delay={0.1} reducedMotion={reducedMotion}>
                  <Heart aria-hidden="true" className="size-5 fill-current text-brand-wine hc:text-accent" />
                  Hobbies em comum
                </FloatingBadge>
                <FloatingBadge className="absolute right-0 top-12 hidden xl:inline-flex" delay={0.45} reducedMotion={reducedMotion}>
                  <MessageCircle aria-hidden="true" className="size-5 text-brand-wine hc:text-accent" />
                  Conversa sem pressa
                </FloatingBadge>
                <FloatingBadge className="absolute bottom-8 -left-8 hidden xl:inline-flex" delay={0.8} reducedMotion={reducedMotion}>
                  <MapPin aria-hidden="true" className="size-5 text-brand-wine hc:text-accent" />
                  Encontro em local público
                </FloatingBadge>
                <div className="mt-4 flex flex-wrap justify-center gap-2 xl:hidden">
                  {[
                    [Heart, 'Hobbies em comum'],
                    [MessageCircle, 'Conversa sem pressa'],
                    [MapPin, 'Local público'],
                  ].map(([Icon, label]) => (
                    <FloatingBadge key={label} reducedMotion={reducedMotion}>
                      <Icon aria-hidden="true" className="size-5 text-brand-wine hc:text-accent" />
                      {label}
                    </FloatingBadge>
                  ))}
                </div>
              </div>
              <p className="text-center text-base text-muted">Prévia conceitual. Perfis, afinidades e sugestões são ilustrativos.</p>
            </Reveal>
          </div>
        </section>

        <section id="encontros" className="scroll-mt-28 border-y border-line bg-panel py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal>
                <p className="text-base font-medium uppercase tracking-[0.12em] text-[#8C2D52] hc:text-accent">Encontros e momentos reais</p>
                <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">Um café pode ser o começo de uma bela amizade.</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Bons encontros não precisam de roteiro. Basta encontrar alguém com quem dividir uma conversa,
                  uma caminhada ou aquele café ao ar livre.
                </p>
                <div className="mt-6 flex items-center gap-3 text-lg font-medium text-ink">
                  <Coffee aria-hidden="true" className="size-6 text-[#8C2D52] hc:text-accent" />
                  Mais companhia para os momentos simples
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <img
                  src={moments[0].image}
                  alt={moments[0].alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-[#2A0B2C]/10"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal className="order-2 lg:order-1">
              <img
                src={autonomyImage}
                alt="Casal maduro compartilhando uma refeição enquanto observa o celular"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-[#2A0B2C]/10"
              />
            </Reveal>
            <Reveal className="order-1 lg:order-2" delay={0.1}>
              <p className="text-base font-medium uppercase tracking-[0.12em] text-[#8C2D52] hc:text-accent">Autonomia, no seu ritmo</p>
              <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">Você no controle de cada escolha.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Letras confortáveis, caminhos claros e ações por botões deixam a tecnologia mais acolhedora.
                Sem deslizar por engano; com liberdade para parar, voltar e decidir.
              </p>
              <ul className="mt-6 grid gap-3 text-lg font-medium text-ink">
                {['Escolhas visíveis e fáceis de rever', 'Perfis claros, sem excesso de informação', 'Conexões no seu tempo'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#8C2D52] hc:text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="para-quem" className="scroll-mt-28 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-base font-medium uppercase tracking-[0.12em] text-[#8C2D52] hc:text-accent">Para quem é</p>
              <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">Para quem sabe que ainda há muito por viver.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Para pessoas 50+ que buscam amizades, conversas ricas ou novos relacionamentos e valorizam
                simplicidade, respeito e clareza visual.
              </p>
            </Reveal>
            <ul className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
              {[
                [Heart, 'Novas amizades'],
                [MessageCircle, 'Conversas que fazem bem'],
                [UsersRound, 'Novos relacionamentos'],
              ].map(([Icon, label]) => (
                <li key={label} className="flex min-h-20 items-center justify-center gap-3 rounded-xl border border-line bg-panel px-5 py-4 text-center text-lg font-medium">
                  <Icon aria-hidden="true" className="size-6 shrink-0 text-[#8C2D52] hc:text-accent" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="seguranca" className="scroll-mt-28 border-y border-line bg-[#2A0B2C] py-16 text-white hc:bg-panel hc:text-ink sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <span className="grid size-16 place-items-center rounded-2xl bg-white/10 text-[#FFB4C4] hc:bg-surface hc:text-accent">
                <ShieldCheck aria-hidden="true" className="size-9" />
              </span>
              <p className="mt-6 text-base font-medium uppercase tracking-[0.12em] text-[#FFB4C4] hc:text-accent">Segurança em primeiro lugar</p>
              <h2 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">Confiança para se conectar com tranquilidade.</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85 hc:text-muted">
                A proposta do MVP considera privacidade, escolhas conscientes e ferramentas de proteção desde o início.
                Segurança é um cuidado contínuo, não uma promessa absoluta.
              </p>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {safetyFeatures.map(([Icon, title, text]) => (
                <li key={title} className="rounded-xl border border-white/20 bg-white/5 p-5 hc:border-line hc:bg-surface">
                  <Icon aria-hidden="true" className="size-7 text-[#FFB4C4] hc:text-accent" />
                  <h3 className="mt-3 font-heading text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-white/80 hc:text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projeto" className="scroll-mt-28 border-b border-line py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-xl bg-[#8C2D52]/10 text-[#8C2D52] hc:bg-transparent hc:text-accent">
                <BookOpen aria-hidden="true" className="size-7" />
              </span>
              <p className="mt-5 text-base font-medium uppercase tracking-[0.12em] text-[#8C2D52] hc:text-accent">Projeto e governança acadêmica</p>
              <h2 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">Uma ideia construída em equipe.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Projeto do curso de Análise e Desenvolvimento de Sistemas da UNINASSAU, desenvolvido em 2026.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <h3 className="font-heading text-xl font-bold">Equipe do projeto</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {team.map(([name, role]) => (
                    <li key={name} className="rounded-xl border border-line bg-panel p-5">
                      <UserRoundCheck aria-hidden="true" className="size-6 text-[#8C2D52] hc:text-accent" />
                      <p className="mt-3 text-lg font-medium">{name}</p>
                      <p className="mt-1 text-base text-muted">{role}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal id="ficha-tecnica" className="scroll-mt-28" delay={0.1}>
                <h3 className="font-heading text-xl font-bold">Governança e tecnologia</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">
                  Stack homologada, controle de versão e boas práticas de colaboração no GitHub.
                </p>
                <ul className="mt-5 flex flex-wrap gap-3" aria-label="Tecnologias do projeto">
                  {['React', 'React Native', 'Java Spring Boot', 'PostgreSQL', 'GitHub'].map((item) => (
                    <li key={item} className="rounded-lg border border-line bg-panel px-4 py-3 text-base font-medium">{item}</li>
                  ))}
                </ul>
                <p className="mt-6 text-base text-muted">UNINASSAU · Análise e Desenvolvimento de Sistemas · 2026</p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark text-[#FDFBF7] hc:bg-panel hc:text-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-16">
          <section aria-labelledby="footer-brand">
            <a href="#inicio" aria-label="BeyondTime, voltar ao início" className="inline-flex min-h-12 items-center gap-3">
              <img src={logoUrl} alt="" aria-hidden="true" className="h-10 w-[5.5rem] object-contain" />
              <span id="footer-brand" className="font-heading text-xl font-bold">BeyondTime</span>
            </a>
            <p className="mt-4 text-lg font-medium text-[#FDFBF7] hc:text-ink">Conexões autênticas para a melhor fase da vida.</p>
            <p className="mt-3 text-base leading-relaxed text-[#FDFBF7]/80 hc:text-muted">
              Plataforma focada em autonomia, segurança e laços reais para o público 50+.
            </p>
          </section>

          <nav aria-labelledby="footer-navigation">
            <h2 id="footer-navigation" className="font-heading text-2xl font-bold text-[#E6AC39] hc:text-accent">Navegação rápida</h2>
            <ul className="mt-4 grid gap-2">
              {[
                ['#projeto', 'O Projeto'],
                ['#como-funciona', 'Como Funciona'],
                ['#seguranca', 'Segurança'],
                ['#para-quem', 'Para Quem É'],
                ['#ficha-tecnica', 'Ficha Técnica'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="inline-flex min-h-11 items-center text-base font-medium text-[#FDFBF7]/85 transition-colors hover:text-[#E6AC39] hc:text-ink hc:hover:text-accent">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-governance">
            <h2 id="footer-governance" className="font-heading text-2xl font-bold text-[#E6AC39] hc:text-accent">Transparência &amp; Governança</h2>
            <a
              href="/Politica_de_Governanca_BeyondTime_v1.0%20(3).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex min-h-14 items-center gap-2 rounded-xl border-2 border-[#E6AC39] px-4 py-3 text-base font-medium transition-transform hover:scale-[1.02] hc:hover:scale-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#E6AC39] ${highContrast ? 'bg-accent text-on-action' : 'bg-brand-wine text-white'}`}
            >
              <FileText aria-hidden="true" className="size-5 shrink-0" />
              <span>Política de Governança (PDF)</span>
              <ExternalLink aria-hidden="true" className="size-5 shrink-0" />
            </a>
            <p className="mt-4 text-base leading-relaxed text-[#FDFBF7]/80 hc:text-muted">
              Termos de Uso &amp; Proteção de Dados (LGPD)
            </p>
          </section>

          <section aria-labelledby="footer-academic">
            <h2 id="footer-academic" className="font-heading text-2xl font-bold text-[#E6AC39] hc:text-accent">Projeto de Bloco / MVP 2026</h2>
            <p className="mt-4 text-base leading-relaxed text-[#FDFBF7]/85 hc:text-muted">
              Análise e Desenvolvimento de Sistemas (ADS) — UNINASSAU.
            </p>
            <p className="mt-3 text-base font-medium text-[#FDFBF7] hc:text-ink">Equipe</p>
            <p className="mt-1 text-base leading-relaxed text-[#FDFBF7]/80 hc:text-muted">
              José Guilherme (Líder), Abraão Silva, Paulo Rafael e Brigitte Lara.
            </p>
          </section>
        </div>

        <div className="border-t border-white/20 hc:border-line">
          <p className="mx-auto max-w-7xl px-4 py-5 text-center text-base leading-relaxed text-[#FDFBF7]/75 hc:text-muted sm:px-6 lg:px-8">
            © 2026 BeyondTime. Desenvolvido para o Edital nº 02/2026 — UNINASSAU. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}