import { createFileRoute } from "@tanstack/react-router";
import { Flame, Leaf, Clock, HeartHandshake, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/contact";
import heroImg from "@/assets/cochinita-hero.jpg";
import tacosImg from "@/assets/tacos.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raíces del Mayab — Cochinita pibil 100% yucateca" },
      {
        name: "description",
        content:
          "Cochinita pibil con receta tradicional yucateca: achiote, naranja agria y hoja de plátano. Pide por WhatsApp al 656 751 8415.",
      },
      { property: "og:title", content: "Raíces del Mayab — Cochinita pibil 100% yucateca" },
      {
        property: "og:description",
        content: "Receta tradicional yucateca, cocción lenta en hoja de plátano. Pide por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47a9.4 9.4 0 0 1 6.7 2.78 9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.53A11.33 11.33 0 0 0 12.04.6C5.76.6.65 5.7.65 11.98c0 2 .52 3.97 1.52 5.7L.55 23.4l5.86-1.54a11.37 11.37 0 0 0 5.63 1.43h.01c6.28 0 11.39-5.1 11.39-11.38 0-3.04-1.18-5.9-3.34-8.04z" />
    </svg>
  );
}

function WhatsAppButton({
  children,
  size = "xl",
  message,
}: {
  children: React.ReactNode;
  size?: "lg" | "xl";
  message?: string;
}) {
  return (
    <Button asChild variant="whatsapp" size={size}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="!size-5" />
        {children}
      </a>
    </Button>
  );
}

const pilares = [
  {
    icon: Leaf,
    titulo: "Achiote y naranja agria",
    texto: "Recado rojo preparado a la manera de las abuelas, con especias molidas y jugo de naranja agria.",
  },
  {
    icon: Clock,
    titulo: "Marinado lento",
    texto: "La carne reposa toda la noche para que el sabor llegue hasta el último hilo.",
  },
  {
    icon: Flame,
    titulo: "Cocción en hoja de plátano",
    texto: "Envuelta y cocida a fuego lento por horas, como en el pib tradicional maya.",
  },
  {
    icon: HeartHandshake,
    titulo: "100% yucateca",
    texto: "Sin atajos ni sustitutos: la receta de siempre, hecha con cariño y orgullo.",
  },
];

const presentaciones = [
  { titulo: "Por kilo", texto: "Para la comida en casa, lista para servir." },
  { titulo: "Tacos y tortas", texto: "Con cebolla morada encurtida y salsa de habanero." },
  { titulo: "Para eventos", texto: "Fiestas, reuniones y celebraciones de todo tamaño." },
];

const pasos = [
  { n: "01", titulo: "Escríbenos", texto: `Mándanos un WhatsApp al ${WHATSAPP_DISPLAY}.` },
  { n: "02", titulo: "Cuéntanos tu pedido", texto: "Dinos cuánto necesitas y para cuándo." },
  { n: "03", titulo: "Disfruta", texto: "Te confirmamos los detalles y a disfrutar del Mayab." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Encabezado */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#" className="font-display text-xl font-bold text-cream md:text-2xl">
            Raíces <span className="italic text-accent">del</span> Mayab
          </a>
          <div className="hidden sm:block">
            <WhatsAppButton size="lg">Pedir ahora</WhatsAppButton>
          </div>
        </div>
      </header>

      {/* Portada */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-earth">
        <img
          src={heroImg}
          alt="Cochinita pibil sobre hoja de plátano con cebolla morada y tortillas"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
          <div className="max-w-xl animate-rise">
            <p className="mb-5 inline-block rounded-full border border-accent/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Receta tradicional · 100% yucateca
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.02] text-cream md:text-7xl">
              El sabor del Mayab, <span className="italic text-accent">en cada bocado.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-earth-foreground/85">
              Cochinita pibil marinada en achiote y naranja agria, envuelta en hoja de plátano y
              cocida lentamente, como se ha hecho por generaciones en Yucatán.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <WhatsAppButton>Haz tu pedido por WhatsApp</WhatsAppButton>
              <Button asChild variant="outline-light" size="xl">
                <a href="#receta">Conoce la receta</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="greca h-3 w-full" aria-hidden="true" />

      {/* Receta */}
      <section id="receta" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Nuestra receta
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Raíces que se saborean
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            En Raíces del Mayab respetamos cada paso de la receta original. Nada de atajos:
            ingredientes de la península, paciencia y el mismo cariño con el que se prepara en los
            pueblos de Yucatán.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg font-bold">{titulo}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tradición */}
      <section className="bg-earth text-earth-foreground">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Herencia maya
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-cream md:text-5xl">
              "Pibil" significa <span className="italic text-accent">cocido bajo tierra</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed opacity-85">
              Los mayas cocinaban en el pib, un horno de piedras calientes bajo tierra. De ahí
              nace la cochinita: suave, jugosa y con ese aroma ahumado que te transporta a la
              península. Nosotros mantenemos viva esa tradición.
            </p>
          </div>
        </div>
      </section>

      {/* Presentaciones */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr]">
          <img
            src={tacosImg}
            alt="Tacos y torta de cochinita pibil con cebolla encurtida"
            width={1200}
            height={1200}
            loading="lazy"
            className="aspect-square w-full rounded-3xl object-cover shadow-card"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              ¿Cómo la quieres?
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Para cada antojo y cada ocasión
            </h2>
            <ul className="mt-8 space-y-4">
              {presentaciones.map((p) => (
                <li
                  key={p.titulo}
                  className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-card"
                >
                  <h3 className="text-xl font-bold">{p.titulo}</h3>
                  <p className="mt-1 text-muted-foreground">{p.texto}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Pregúntanos por disponibilidad y cantidades directamente por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo pedir */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-28">
          <h2 className="text-center text-4xl font-bold md:text-5xl">Pedir es muy fácil</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {pasos.map((p) => (
              <div key={p.n} className="text-center">
                <p className="font-display text-6xl font-extrabold text-primary/80">{p.n}</p>
                <h3 className="mt-3 text-xl font-bold">{p.titulo}</h3>
                <p className="mt-2 text-muted-foreground">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado final */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="greca absolute inset-x-0 top-0 h-3" aria-hidden="true" />
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-28">
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            ¿Se te antojó? <span className="italic">Escríbenos.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg opacity-90">
            Haz tu pedido de cochinita pibil hoy mismo y lleva el auténtico sabor de Yucatán a tu
            mesa.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <WhatsAppButton>WhatsApp {WHATSAPP_DISPLAY}</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Pie */}
      <footer className="bg-earth text-earth-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm md:flex-row">
          <p className="font-display text-lg font-bold text-cream">
            Raíces <span className="italic text-accent">del</span> Mayab
          </p>
          <p className="flex items-center gap-2 opacity-80">
            <MapPin className="size-4" /> Cochinita pibil tradicional yucateca
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-accent hover:underline"
          >
            <WhatsAppIcon className="size-4" /> {WHATSAPP_DISPLAY}
          </a>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir por WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-warm transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
