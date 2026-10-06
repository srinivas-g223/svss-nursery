import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, Leaf, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/hero.jpg.asset.json";
import nurseryAsset from "@/assets/nursery.jpg.asset.json";
import succulentAsset from "@/assets/succulent.jpg.asset.json";
import arecaAsset from "@/assets/areca-palm.jpg.asset.json";
import moneyAsset from "@/assets/money-plant.jpg.asset.json";
import roseAsset from "@/assets/rose.jpg.asset.json";
import hibiscusAsset from "@/assets/hibiscus.jpg.asset.json";
import jasmineAsset from "@/assets/jasmine.jpg.asset.json";
import logoAsset from "@/assets/logo-mark.png.asset.json";
import plantPhotoSources from "@/data/plant-photo-sources.json";

const phone = "+91 80741 72504";
const whatsapp = "https://wa.me/918074172504?text=Hello%20SVSS%20Nursery%2C%20I%20have%20a%20question%20about%20your%20plants.";

type PlantPhoto = {
  url: string;
  attribution?: string;
  source?: string;
  license?: string;
  licenseUrl?: string;
};

const plantCategories = [
  { name: "Indoor Plants", emoji: "🪴", plants: ["Money Plant", "Snake Plant", "Peace Lily", "ZZ Plant", "Areca Palm", "Lucky Bamboo"] },
  { name: "Outdoor Plants", emoji: "🌿", plants: ["Croton", "Hibiscus", "Ixora", "Bougainvillea", "Jasmine"] },
  { name: "Flowering Plants", emoji: "🌸", plants: ["Rose", "Marigold", "Chrysanthemum", "Gerbera", "Hibiscus", "Jasmine"] },
  { name: "Fruit Plants", emoji: "🍋", plants: ["Mango", "Guava", "Lemon", "Papaya", "Pomegranate", "Sapota", "Dragon Fruit"] },
  { name: "Vegetable Plants", emoji: "🥕", plants: ["Tomato", "Chilli", "Brinjal", "Curry Leaf", "Drumstick", "Spinach"] },
  { name: "Herbal & Medicinal Plants", emoji: "🌿", plants: ["Tulsi", "Aloe Vera", "Neem", "Mint", "Lemongrass", "Ashwagandha"] },
  { name: "Ornamental Plants", emoji: "🌺", plants: ["Croton", "Dracaena", "Aglaonema", "Cordyline", "Coleus"] },
  { name: "Palm Plants", emoji: "🌴", plants: ["Areca Palm", "Fan Palm", "Date Palm", "Foxtail Palm"] },
  { name: "Cactus & Succulents", emoji: "🌵", plants: ["Aloe Vera", "Echeveria", "Jade Plant", "Haworthia", "Various Cactus"] },
  { name: "Climbers & Creepers", emoji: "🌱", plants: ["Money Plant", "Rangoon Creeper", "Bougainvillea", "Passion Flower"] },
];

const plantImages: Record<string, PlantPhoto> = {
  "Money Plant": { url: moneyAsset.url },
  "Areca Palm": { url: arecaAsset.url },
  Rose: { url: roseAsset.url },
  Hibiscus: { url: hibiscusAsset.url },
  Jasmine: { url: jasmineAsset.url },
  ...plantPhotoSources,
};

const navigation = [
  ["Home", "#home"], ["About", "#about"], ["Plants", "#plants"], ["Services", "#services"], ["Gallery", "#gallery"], ["Contact", "#contact"],
] as const;

const services = [
  { title: "Plants & Saplings", copy: "Healthy plants and young saplings to bring more life to your home and garden.", image: arecaAsset.url, imageAlt: "Healthy areca palm plants growing at the nursery", photoCredit: null },
  { title: "Garden Landscaping", copy: "Thoughtful garden layouts and greenery ideas for your outdoor spaces.", image: "/images/about-nursery.jpg", imageAlt: "Colorful flowering plants arranged through a garden nursery", photoCredit: null },
  { title: "Pots & Gardening Supplies", copy: "Find pots and useful gardening essentials for every growing space.", image: "/images/service-pots.jpg", imageAlt: "Terracotta and colorful ceramic flower pots for sale at a garden centre", photoCredit: { attribution: "Rod Allday", source: "https://commons.wikimedia.org/wiki/File:Flower_pots_for_sale_at_Hare_Hatch_Garden_centre_-_geograph.org.uk_-_5410595.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0" } },
  { title: "Plant Delivery", copy: "Get your chosen plants delivered with care, right to your doorstep.", image: "/images/plant-delivery.jpg", imageAlt: "Delivery truck at a plant nursery", photoCredit: { attribution: "Jonathan Billinger", source: "https://commons.wikimedia.org/wiki/File:Sundries_delivery_at_Kingsdown_Nurseries_-_geograph.org.uk_-_739347.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0" } },
];

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryResultsRef = useRef<HTMLDivElement>(null);
  const activeCategory = plantCategories.find((category) => category.name === selectedCategory);
  const creditedPlants = activeCategory?.plants.filter((plant) => {
    const photo = plantImages[plant];
    return photo.source && photo.attribution && photo.license;
  }) ?? [];

  useEffect(() => {
    if (!selectedCategory || window.matchMedia("(min-width: 768px)").matches) return;

    categoryResultsRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }, [selectedCategory]);

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

      <section aria-label="Welcome to SVSS Nursery" className="overflow-hidden bg-cream">
        <h1 className="sr-only">Welcome to SVSS Nursery — Nature’s goodness grows here</h1>
        <picture className="hidden xl:block">
          <source media="(min-width: 1280px)" srcSet="/images/svss-nursery-banner.png" />
          <img src={heroAsset.url} alt="SVSS Nursery banner with leafy plants and hands holding a seedling" fetchPriority="high" className="block h-auto w-full" />
        </picture>
        <div className="xl:hidden">
          <img
            src="/images/svss-nursery-banner-mobile.png"
            alt="SVSS Nursery mobile banner with the nursery logo, healthy plant message, and seedling held in hands"
            fetchPriority="high"
            className="block h-auto w-full"
          />
          <div className="bg-forest px-4 py-4">
            <div className="mx-auto flex max-w-sm flex-col gap-3 sm:flex-row">
              <Button asChild variant="cream" size="lg" className="w-full">
                <a href="#plants">Explore Plants <ArrowRight /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="#contact"><MapPin /> Visit Nursery</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 py-14 sm:py-20 md:py-28">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg pb-14 pr-12">
            <img
              src="/images/about-nursery.jpg"
              alt="Visitors exploring rows of colorful flowers and greenery at a garden nursery"
              className="h-[420px] w-full rounded-[6rem_1rem_6rem_1rem] object-cover shadow-soft motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-700 motion-safe:transition-[transform,box-shadow] motion-safe:ease-out motion-safe:hover:scale-[1.03] motion-safe:hover:shadow-lift sm:h-[560px] sm:rounded-[8rem_1rem_8rem_1rem]"
            />
            <img src={succulentAsset.url} alt="Succulent from the nursery collection" className="absolute bottom-0 right-0 h-52 w-44 rounded-[5rem_1rem_5rem_1rem] border-8 border-background object-cover shadow-lift motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:delay-200 motion-safe:duration-700 motion-safe:transition-transform motion-safe:hover:scale-105" />
          </div>
          <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">About SVSS Nursery</p><h2 className="text-4xl font-semibold leading-tight sm:text-6xl">Rooted in care. Growing with our community.</h2><p className="mt-6 leading-7 text-muted-foreground">SVSS Nursery is your neighbourhood plant nursery in Dhavaleswaram, near Rajahmundry. We bring together healthy indoor greens, outdoor favourites, flowering plants and thoughtful garden choices suited to local homes and weather.</p><p className="mt-4 leading-7 text-muted-foreground">From choosing your first easy-care plant to finding a statement bonsai, our friendly team shares practical advice on light, watering and care—so your plants can thrive long after you take them home.</p><div className="mt-6 flex flex-wrap gap-2">{["Healthy plants", "Friendly guidance", "For every green space"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground"><Leaf className="size-3.5 text-primary" />{item}</span>)}</div><Button asChild variant="hero" size="lg" className="mt-8"><a href={whatsapp} target="_blank" rel="noreferrer">Talk to our plant team <ArrowRight /></a></Button></div>
        </div>
      </section>

      <section id="plants" className="scroll-mt-24 bg-secondary py-14 sm:py-20 md:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase text-primary">Plant collection</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-6xl">Find plants for every corner</h2>
            <p className="mt-4 text-muted-foreground">Choose a plant category to explore the varieties available at SVSS Nursery.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5" role="group" aria-label="Plant categories">
            {plantCategories.map((category, index) => (
              <button
                key={category.name}
                type="button"
                aria-expanded={selectedCategory === category.name}
                aria-controls={`plants-${index}-subcategories`}
                aria-pressed={selectedCategory === category.name}
                onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                style={{ animationDelay: `${index * 45}ms` }}
                className={`group relative z-0 flex min-h-28 flex-col items-center justify-center gap-2 rounded-xl border p-3 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-500 motion-safe:transition-[transform,box-shadow,border-color] motion-safe:hover:z-10 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.04] motion-safe:hover:shadow-lift motion-safe:active:scale-[0.98] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:min-h-32 sm:p-4 ${selectedCategory === category.name ? "border-primary bg-primary text-primary-foreground shadow-lift ring-1 ring-primary/30" : "border-border bg-card text-foreground hover:border-primary hover:text-primary"}`}
              >
                <span aria-hidden="true" className="text-3xl motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-3">{category.emoji}</span>
                <span className="text-sm font-semibold leading-tight">{category.name}</span>
                <span className={`text-xs ${selectedCategory === category.name ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{category.plants.length} varieties</span>
              </button>
            ))}
          </div>

          {activeCategory && (
            <div ref={categoryResultsRef} id={`plants-${plantCategories.indexOf(activeCategory)}-subcategories`} className="mt-10 scroll-mt-24 rounded-2xl border border-border bg-background/70 p-4 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-300 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Plants in this category</p>
                  <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">{activeCategory.emoji} {activeCategory.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{activeCategory.plants.length} plant types</p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4" role="list" aria-label={`${activeCategory.name} subcategories`}>
                {activeCategory.plants.map((plant, index) => {
                  const photo = plantImages[plant];

                  return (
                    <article
                      key={plant}
                      role="listitem"
                      style={{ animationDelay: `${index * 60}ms` }}
                      className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-500 motion-safe:transition-[transform,box-shadow,border-color] motion-safe:hover:-translate-y-1 motion-safe:hover:border-primary/70 motion-safe:hover:shadow-lift motion-safe:hover:ring-1 motion-safe:hover:ring-primary/30"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={photo.url}
                          alt={plant}
                          loading="lazy"
                          className="size-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-display text-xl font-semibold sm:text-2xl">{plant}</h4>
                        <a
                          href={`https://wa.me/918074172504?text=${encodeURIComponent(`Hello SVSS Nursery, is ${plant} available?`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1 whitespace-nowrap text-xs font-bold text-primary sm:gap-2 sm:text-sm"
                        >
                          Ask availability <ArrowRight className="size-4" />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>

              {creditedPlants.length > 0 && (
                <details className="mt-6 border-t border-border pt-4">
                  <summary className="cursor-pointer text-sm font-semibold text-muted-foreground hover:text-primary">
                    Photo credits &amp; licenses
                  </summary>
                  <ul className="mt-3 grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
                    {creditedPlants.map((plant) => {
                      const photo = plantImages[plant];

                      return (
                        <li key={plant}>
                          {plant} — Photo by {photo.attribution} ·{" "}
                          <a href={photo.source} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-primary">
                            Source
                          </a>
                          {" · "}
                          <a href={photo.licenseUrl ?? photo.source} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-primary">
                            {photo.license}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              )}
            </div>
          )}
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-cream py-14 sm:py-20 md:py-28">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="group relative">
            <img
              src="/images/services-gardening.jpg"
              alt="Gardener planting purple flowers into rich soil"
              loading="lazy"
              className="h-[360px] w-full rounded-[1.5rem] object-cover shadow-soft motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-700 motion-safe:transition-[transform,box-shadow] motion-safe:ease-out motion-safe:group-hover:scale-[1.02] motion-safe:group-hover:shadow-lift sm:h-[480px]"
            />
            <div className="absolute bottom-5 left-5 rounded-xl border border-primary-foreground/30 bg-forest/90 px-5 py-4 text-primary-foreground shadow-lift backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:delay-300 motion-safe:duration-700">
              <p className="font-display text-2xl font-semibold">Grow something beautiful</p>
              <p className="mt-1 text-sm text-primary-foreground/75">Everything for your greener space</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Our services</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">A little help for every garden.</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">From choosing your first sapling to creating a fresh green space, we have what you need to grow.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map(({ title, copy, image, imageAlt }, index) => (
                <article
                  key={title}
                  style={{ animationDelay: `${index * 90}ms` }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-500 motion-safe:transition-[transform,box-shadow,border-color] motion-safe:hover:-translate-y-1 motion-safe:hover:border-primary/60 motion-safe:hover:shadow-lift motion-safe:hover:ring-1 motion-safe:hover:ring-primary/20"
                >
                  <div className="aspect-[16/7] overflow-hidden">
                    <img
                      src={image}
                      alt={imageAlt}
                      loading="lazy"
                      className="size-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
                  </div>
                </article>
              ))}
            </div>

            <details className="mt-5 text-xs text-muted-foreground">
              <summary className="cursor-pointer font-semibold hover:text-primary">Service photo credits &amp; licenses</summary>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {services.flatMap(({ title, photoCredit }) => photoCredit ? [
                  <li key={title}>
                    {title} — Photo by {photoCredit.attribution} ·{" "}
                    <a href={photoCredit.source} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-primary">Source</a>
                    {" · "}
                    <a href={photoCredit.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-primary">{photoCredit.license}</a>
                  </li>,
                ] : [])}
              </ul>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-forest py-12 text-primary-foreground sm:py-16"><div className="section-shell grid grid-cols-2 gap-y-10 text-center md:grid-cols-4">{[['1000+','Healthy plants'],['100+','Green spaces'],['50+','Plant varieties'],['500+','Happy customers']].map(([value,label]) => <div key={label}><strong className="font-display text-4xl text-accent sm:text-5xl">{value}</strong><span className="mt-2 block text-xs font-semibold uppercase text-primary-foreground/70">{label}</span></div>)}</div></section>

      <section id="gallery" className="scroll-mt-24 py-14 sm:py-20 md:py-28"><div className="section-shell"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase text-primary">A glimpse of green</p><h2 className="mt-3 text-4xl font-semibold sm:text-6xl">Nature, ready to come home.</h2></div><Button asChild variant="outline" size="lg"><a href={whatsapp} target="_blank" rel="noreferrer">Request more photos <ArrowRight /></a></Button></div><div className="mt-12 grid h-[420px] grid-cols-2 grid-rows-2 gap-3 sm:h-[520px] sm:gap-4 md:h-[700px] md:grid-cols-4">{[heroAsset,nurseryAsset,roseAsset,jasmineAsset].map((image,i) => <img key={image.url} src={image.url} alt={["Tropical nursery display","Lush green nursery plants","Blooming rose","Fragrant jasmine"][i]} className={`size-full rounded-lg object-cover ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''} ${i === 1 ? 'md:col-span-2' : ''}`} />)}</div></div></section>

      <section id="contact" className="scroll-mt-24 bg-cream py-14 sm:py-20 md:py-28"><div className="section-shell grid overflow-hidden rounded-lg bg-forest text-primary-foreground shadow-soft lg:grid-cols-2"><div className="p-6 sm:p-14"><p className="text-xs font-bold uppercase text-accent">Visit & contact</p><h2 className="mt-3 text-4xl font-semibold sm:text-6xl">Bring home a little piece of nature.</h2><p className="mt-5 max-w-lg leading-7 text-primary-foreground/75">Come by SVSS Nursery and discover the right plant for your space. Our team is happy to guide you.</p><div className="mt-9 space-y-5"><div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-accent" /><p>Industrial Colony Rd, Dowlaiswaram Industrial Estate,<br/>Dhavaleswaram, Rajahmundry, Andhra Pradesh 533125</p></div><div className="flex gap-4"><Clock3 className="shrink-0 text-accent" /><p>Open daily • 9:00 AM – 7:00 PM</p></div><div className="flex gap-4"><Phone className="shrink-0 text-accent" /><a href="tel:+918074172504">{phone}</a></div></div><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="cream" size="lg"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="tel:+918074172504"><Phone /> Call Now</a></Button></div></div><div className="min-h-96"><img src={hibiscusAsset.url} alt="Bright hibiscus flower available at SVSS Nursery" className="size-full object-cover" /></div></div></section>

      <footer className="bg-forest pb-10 pt-16 text-primary-foreground"><div className="section-shell"><div className="grid gap-10 border-b border-primary-foreground/15 pb-12 md:grid-cols-[1.3fr_0.7fr_1fr]"><div><div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="size-14 rounded-lg bg-background object-contain" /><strong className="font-display text-2xl">SVSS Nursery</strong></div><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/65">Healthy plants, friendly guidance and ideas for every green corner. Green Today... Healthier Tomorrow...</p></div><div><h3 className="font-sans text-sm font-bold uppercase">Explore</h3><div className="mt-5 grid gap-3">{navigation.slice(1).map(([label,href]) => <a key={href} href={href} className="text-sm text-primary-foreground/65 hover:text-accent">{label}</a>)}</div></div><div><h3 className="font-sans text-sm font-bold uppercase">Visit us</h3><p className="mt-5 text-sm leading-6 text-primary-foreground/65">Industrial Colony Rd, Dhavaleswaram,<br/>Rajahmundry, AP 533125</p><a href="tel:+918074172504" className="mt-4 block font-semibold">{phone}</a></div></div><p className="pt-8 text-center text-xs text-primary-foreground/50">© 2026 SVSS Nursery. All rights reserved.</p></div></footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3"><Button asChild size="icon" variant="hero" className="size-12 rounded-full shadow-lift"><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp SVSS Nursery"><MessageCircle /></a></Button><Button asChild size="icon" className="size-12 rounded-full bg-forest shadow-lift hover:bg-primary-strong"><a href="tel:+918074172504" aria-label="Call SVSS Nursery"><Phone /></a></Button></div>
    </main>
  );
}