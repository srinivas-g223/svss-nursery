import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, Heart, Leaf, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Sprout, Sun, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/hero.jpg.asset.json";
import nurseryAsset from "@/assets/nursery.jpg.asset.json";
import succulentAsset from "@/assets/succulent.jpg.asset.json";
import arecaAsset from "@/assets/areca-palm.jpg.asset.json";
import snakeAsset from "@/assets/snake-plant.jpg.asset.json";
import moneyAsset from "@/assets/money-plant.jpg.asset.json";
import roseAsset from "@/assets/rose.jpg.asset.json";
import hibiscusAsset from "@/assets/hibiscus.jpg.asset.json";
import jasmineAsset from "@/assets/jasmine.jpg.asset.json";
import logoAsset from "@/assets/logo-mark.png.asset.json";

const phone = "+91 80741 72504";
const whatsapp = "https://wa.me/918074172504?text=Hello%20SVSS%20Nursery%2C%20I%20have%20a%20question%20about%20your%20plants.";

const plants = [
  { name: "Areca Palm", type: "Indoor Plant", copy: "Feathery, graceful fronds that soften every bright corner.", image: arecaAsset.url },
  { name: "Snake Plant", type: "Indoor Plant", copy: "Upright, sturdy leaves that thrive with very little attention.", image: snakeAsset.url },
  { name: "Money Plant", type: "Climber", copy: "A cheerful trailing green that grows happily in soil or water.", image: moneyAsset.url },
  { name: "Rose", type: "Flowering Plant", copy: "Classic, fragrant blooms for sunny pots and garden beds.", image: roseAsset.url },
  { name: "Hibiscus", type: "Flowering Plant", copy: "Bold, colourful flowers on a fast-growing tropical shrub.", image: hibiscusAsset.url },
  { name: "Jasmine", type: "Flowering Plant", copy: "Sweet-scented white flowers for fences, gates and pots.", image: jasmineAsset.url },
];

const navigation = [
  ["Home", "#home"], ["About", "#about"], ["Plants", "#plants"], ["Services", "#services"], ["Gallery", "#gallery"], ["Contact", "#contact"],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVSS Nursery | Plants & Garden Guidance in Rajahmundry" },
      { name: "description", content: "Visit SVSS Nursery in Dhavaleswaram for healthy indoor, outdoor and flowering plants, friendly garden guidance and green-space inspiration." },
      { property: "og:title", content: "SVSS Nursery | Grow Your Green World" },
      { property: "og:description", content: "Healthy plants, friendly guidance and ideas for every green corner in and around Rajahmundry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NurseryPage,
});

function NurseryPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home" className="bg-background text-foreground">
      <div className="bg-forest text-primary-foreground">
        <div className="section-shell flex min-h-10 items-center justify-between gap-4 py-2 text-[11px] font-semibold sm:text-xs">
          <span className="flex items-center gap-2"><Clock3 className="size-3.5" /> Open daily: 9:00 AM – 7:00 PM</span>
          <a href="tel:+918074172504" className="flex items-center gap-2 hover:text-accent"><Phone className="size-3.5" /> {phone}</a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-lg">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="SVSS Nursery home">
            <img src={logoAsset.url} alt="SVSS Nursery leaf logo" className="size-12 object-contain" />
            <div><strong className="font-display text-xl font-bold">SVSS Nursery</strong><span className="block text-[9px] font-bold uppercase text-primary">Green today. Healthier tomorrow.</span></div>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <Button asChild variant="hero" size="lg" className="hidden lg:inline-flex"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Enquire Now</a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="section-shell grid gap-1 border-t border-border py-4 lg:hidden">{navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-secondary">{label}</a>)}</nav>}
      </header>

      <section className="relative min-h-[760px] overflow-hidden bg-forest text-primary-foreground md:min-h-[calc(100vh-7.5rem)]">
        <img src={heroAsset.url} alt="Lush tropical plants at SVSS Nursery" className="absolute inset-0 size-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/10" />
        <div className="section-shell relative flex min-h-[760px] items-center py-20 md:min-h-[calc(100vh-7.5rem)]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase backdrop-blur"><Sprout className="size-4" /> Dhavaleswaram • Rajahmundry</div>
            <h1 className="text-6xl font-semibold leading-[0.92] sm:text-7xl md:text-8xl">Grow Your<br/><em className="text-accent">Green World</em></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/85 sm:text-lg">Healthy plants, honest gardening advice and inspiration to make every home, balcony and garden feel alive.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="cream" size="lg"><a href="#plants">Explore Plants <ArrowRight /></a></Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#contact"><MapPin /> Visit Nursery</a></Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 divide-x divide-primary-foreground/25 border-t border-primary-foreground/25 pt-6">
              {[['50+','Plant varieties'],['500+','Happy customers'],['Open','All 7 days']].map(([value,label]) => <div key={label} className="px-3 first:pl-0"><strong className="font-display text-2xl sm:text-3xl">{value}</strong><span className="mt-1 block text-[10px] uppercase text-primary-foreground/65 sm:text-xs">{label}</span></div>)}
            </div>
          </div>
        </div>
        <Leaf className="animate-float-leaf absolute right-[8%] top-[18%] hidden size-14 text-accent lg:block" />
      </section>

      <section id="about" className="scroll-mt-24 py-20 md:py-28">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg pb-14 pr-12">
            <img src={nurseryAsset.url} alt="Healthy foliage grown at SVSS Nursery" className="h-[560px] w-full rounded-[8rem_1rem_8rem_1rem] object-cover shadow-soft" />
            <img src={succulentAsset.url} alt="Succulent from the nursery collection" className="absolute bottom-0 right-0 h-52 w-44 rounded-[5rem_1rem_5rem_1rem] border-8 border-background object-cover shadow-lift" />
          </div>
          <div><p className="mb-4 text-xs font-bold uppercase text-primary">Our nursery story</p><h2 className="text-4xl font-semibold leading-tight sm:text-6xl">A little more green makes every place feel alive.</h2><p className="mt-6 leading-7 text-muted-foreground">SVSS Nursery is a neighbourhood plant nursery in Dhavaleswaram, near Rajahmundry. We grow and select plants that suit our climate, and love helping people find the right one for their home, shop or garden.</p><p className="mt-4 leading-7 text-muted-foreground">Whether you want a single pot for a sunny window or a full garden, you will find honest advice and healthy plants here.</p><Button asChild variant="hero" size="lg" className="mt-8"><a href={whatsapp} target="_blank" rel="noreferrer">Talk to our plant team <ArrowRight /></a></Button></div>
        </div>
      </section>

      <section id="plants" className="scroll-mt-24 bg-secondary py-20 md:py-28">
        <div className="section-shell"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase text-primary">Plant collection</p><h2 className="mt-3 text-4xl font-semibold sm:text-6xl">Find plants for every corner</h2><p className="mt-4 text-muted-foreground">From easy indoor greens to vivid flowering shrubs, discover plants chosen for our local climate.</p></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{plants.map((plant, index) => <article key={plant.name} className={`group overflow-hidden rounded-lg bg-card shadow-soft ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}><div className="h-80 overflow-hidden"><img src={plant.image} alt={plant.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-6"><span className="text-[10px] font-bold uppercase text-primary">{plant.type}</span><h3 className="mt-1 text-3xl font-semibold">{plant.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{plant.copy}</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Ask availability <ArrowRight className="size-4" /></a></div></article>)}</div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 py-20 md:py-28"><div className="section-shell"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase text-primary">Why visit SVSS</p><h2 className="mt-3 text-4xl font-semibold sm:text-6xl">More than a nursery. A greener lifestyle.</h2><p className="mt-5 text-muted-foreground">Everything you need to choose well, plant confidently and keep your green spaces thriving.</p></div><div className="grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2">{[
            [ShieldCheck,'Healthy plants','Carefully grown and ready to settle into their new home.'],[Heart,'Friendly guidance','Simple, honest advice on light, water and soil.'],[Sparkles,'Quality selection','Thoughtful varieties for homes, terraces and gardens.'],[Sun,'Green-space ideas','Practical inspiration for balconies and courtyards.']
          ].map(([Icon,title,copy]) => { const C = Icon as typeof Leaf; return <div key={title as string} className="bg-card p-8"><div className="mb-5 flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><C /></div><h3 className="text-2xl font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy as string}</p></div>})}</div></div></div></section>

      <section className="bg-forest py-16 text-primary-foreground"><div className="section-shell grid grid-cols-2 gap-y-10 text-center md:grid-cols-4">{[['1000+','Healthy plants'],['100+','Green spaces'],['50+','Plant varieties'],['500+','Happy customers']].map(([value,label]) => <div key={label}><strong className="font-display text-4xl text-accent sm:text-5xl">{value}</strong><span className="mt-2 block text-xs font-semibold uppercase text-primary-foreground/70">{label}</span></div>)}</div></section>

      <section id="gallery" className="scroll-mt-24 py-20 md:py-28"><div className="section-shell"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase text-primary">A glimpse of green</p><h2 className="mt-3 text-4xl font-semibold sm:text-6xl">Nature, ready to come home.</h2></div><Button asChild variant="outline" size="lg"><a href={whatsapp} target="_blank" rel="noreferrer">Request more photos <ArrowRight /></a></Button></div><div className="mt-12 grid h-[700px] grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4">{[heroAsset,nurseryAsset,roseAsset,jasmineAsset].map((image,i) => <img key={image.url} src={image.url} alt={["Tropical nursery display","Lush green nursery plants","Blooming rose","Fragrant jasmine"][i]} className={`size-full rounded-lg object-cover ${i === 0 ? 'col-span-2 row-span-2' : ''} ${i === 1 ? 'col-span-2' : ''}`} />)}</div></div></section>

      <section id="contact" className="scroll-mt-24 bg-cream py-20 md:py-28"><div className="section-shell grid overflow-hidden rounded-lg bg-forest text-primary-foreground shadow-soft lg:grid-cols-2"><div className="p-8 sm:p-14"><p className="text-xs font-bold uppercase text-accent">Visit & contact</p><h2 className="mt-3 text-4xl font-semibold sm:text-6xl">Bring home a little piece of nature.</h2><p className="mt-5 max-w-lg leading-7 text-primary-foreground/75">Come by SVSS Nursery and discover the right plant for your space. Our team is happy to guide you.</p><div className="mt-9 space-y-5"><div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-accent" /><p>Industrial Colony Rd, Dowlaiswaram Industrial Estate,<br/>Dhavaleswaram, Rajahmundry, Andhra Pradesh 533125</p></div><div className="flex gap-4"><Clock3 className="shrink-0 text-accent" /><p>Open daily • 9:00 AM – 7:00 PM</p></div><div className="flex gap-4"><Phone className="shrink-0 text-accent" /><a href="tel:+918074172504">{phone}</a></div></div><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="cream" size="lg"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="tel:+918074172504"><Phone /> Call Now</a></Button></div></div><div className="min-h-96"><img src={hibiscusAsset.url} alt="Bright hibiscus flower available at SVSS Nursery" className="size-full object-cover" /></div></div></section>

      <footer className="bg-forest pb-10 pt-16 text-primary-foreground"><div className="section-shell"><div className="grid gap-10 border-b border-primary-foreground/15 pb-12 md:grid-cols-[1.3fr_0.7fr_1fr]"><div><div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="size-14 rounded-lg bg-background object-contain" /><strong className="font-display text-2xl">SVSS Nursery</strong></div><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/65">Healthy plants, friendly guidance and ideas for every green corner. Green Today... Healthier Tomorrow...</p></div><div><h3 className="font-sans text-sm font-bold uppercase">Explore</h3><div className="mt-5 grid gap-3">{navigation.slice(1).map(([label,href]) => <a key={href} href={href} className="text-sm text-primary-foreground/65 hover:text-accent">{label}</a>)}</div></div><div><h3 className="font-sans text-sm font-bold uppercase">Visit us</h3><p className="mt-5 text-sm leading-6 text-primary-foreground/65">Industrial Colony Rd, Dhavaleswaram,<br/>Rajahmundry, AP 533125</p><a href="tel:+918074172504" className="mt-4 block font-semibold">{phone}</a></div></div><p className="pt-8 text-center text-xs text-primary-foreground/50">© 2026 SVSS Nursery. All rights reserved.</p></div></footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3"><Button asChild size="icon" variant="hero" className="size-12 rounded-full shadow-lift"><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp SVSS Nursery"><MessageCircle /></a></Button><Button asChild size="icon" className="size-12 rounded-full bg-forest shadow-lift hover:bg-primary-strong"><a href="tel:+918074172504" aria-label="Call SVSS Nursery"><Phone /></a></Button></div>
    </main>
  );
}