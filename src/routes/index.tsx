import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Products } from "@/components/site/Products";
import { Category } from "@/lib/products";
import { Promo } from "@/components/site/Promo";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jamal Almari — Curated Luxury: Attar, Perfume, Watches & Eyewear" },
      {
        name: "description",
        content:
          "Jamal Almari is a Dubai-based house of curated luxury — rare attar, signature perfume, mechanical timepieces and premium eyewear for the bold few.",
      },
      { property: "og:title", content: "Jamal Almari — Curated Luxury" },
      {
        property: "og:description",
        content: "Discover attar, perfume, watches and sunglasses curated for those who refuse the ordinary.",
      },
    ],
  }),
});

function Index() {
  const [selectedCategory, setSelectedCategory] =
    useState<"All" | Category>("All");
  return (
    <I18nProvider>
      <main className="bg-background text-foreground">
        <Header />
        <Hero />
        <Categories onCategorySelect={setSelectedCategory} />
        <Products
          filter={selectedCategory}
          setFilter={setSelectedCategory}
        />
        <Promo />
        <About />
        <Footer />
      </main>
    </I18nProvider>
  );
}
