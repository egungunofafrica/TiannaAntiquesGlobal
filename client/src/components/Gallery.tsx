import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import antique images
import chinesePorcelain from "@assets/antique_chinese_porc_b2f04495_1763209187582.jpg";
import frenchBronze1 from "@assets/french_empire_bronze_ddd9e64e_1763209187601.jpg";
import sculpture1 from "@assets/photo_2025-11-13_11-51-01_1763056285034_1763209187602.jpg";
import ornamentClock from "@assets/photo_2025-11-13_11-51-05_1763056285033_1763209187602.jpg";
import grandDisplay from "@assets/photo_2025-11-13_11-51-09_1763056285027_1763209187602.jpg";
import globeSculpture from "@assets/photo_2025-11-13_11-51-33_1763056315828_1763209187603.jpg";
import miniatureClock from "@assets/photo_2025-11-13_11-50-51_1763056315829_1763209187603.jpg";
import baroqueInterior from "@assets/ornate_french_baroqu_899971c7_1763209187603.jpg";
import goldClock from "@assets/collectt_1763055734521_1763209187604.jpg";
import greenBronze from "@assets/french_empire_bronze_54038da5_1763209187604.jpg";
import candelabra from "@assets/collect_1763055734524_1763209187604.webp";
import antiqueGrandfather from "@assets/antique_grandfather__eab955b0_1763209187605.jpg";

const antiques = [
  {
    id: "1",
    title: "Antique Chinese Porcelain Jar",
    description: "18th century blue and white porcelain with intricate floral motifs",
    imageUrl: chinesePorcelain,
    category: "Porcelain",
  },
  {
    id: "2",
    title: "French Empire Bronze Sculpture",
    description: "Patinated bronze figure with exceptional detail",
    imageUrl: frenchBronze1,
    category: "Bronze",
  },
  {
    id: "3",
    title: "Gilded Bronze Figurine",
    description: "French Empire period sculpture with cherub detail",
    imageUrl: sculpture1,
    category: "Bronze",
  },
  {
    id: "4",
    title: "Ornate Mantel Clock",
    description: "19th century French bronze and ormolu clock with equestrian figure",
    imageUrl: ornamentClock,
    category: "Clocks",
  },
  {
    id: "5",
    title: "Grand Salon Display",
    description: "Collection of French Empire decorative arts and porcelain",
    imageUrl: grandDisplay,
    category: "Collections",
  },
  {
    id: "6",
    title: "Bronze Globe Sculpture",
    description: "Monumental bronze scientific instrument with classical figures",
    imageUrl: globeSculpture,
    category: "Bronze",
  },
  {
    id: "7",
    title: "Miniature Garniture Set",
    description: "Painted porcelain and gilt bronze clock set",
    imageUrl: miniatureClock,
    category: "Clocks",
  },
  {
    id: "8",
    title: "Baroque Palace Interior",
    description: "Ornate ceiling frescoes and architectural details",
    imageUrl: baroqueInterior,
    category: "Architecture",
  },
  {
    id: "9",
    title: "Empire Style Mantel Clock",
    description: "Black marble and gilt bronze with allegorical figure",
    imageUrl: goldClock,
    category: "Clocks",
  },
  {
    id: "10",
    title: "Classical Bronze Boxer",
    description: "Hellenistic bronze sculpture with verdigris patina",
    imageUrl: greenBronze,
    category: "Bronze",
  },
  {
    id: "11",
    title: "Louis XVI Garniture",
    description: "Gilt bronze and porcelain clock with matching candelabra",
    imageUrl: candelabra,
    category: "Collections",
  },
  {
    id: "12",
    title: "Baroque Period Clock",
    description: "Ornate wooden case with gilt bronze mounts",
    imageUrl: antiqueGrandfather,
    category: "Clocks",
  },
];

export function Gallery() {
  const [selectedAntique, setSelectedAntique] = useState<typeof antiques[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Curated Collection
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exquisite pieces spanning centuries of European and Asian craftsmanship
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {antiques.map((antique) => (
              <div
                key={antique.id}
                className="group relative overflow-hidden rounded-md border border-border hover-elevate cursor-pointer"
                onClick={() => setSelectedAntique(antique)}
                data-testid={`antique-${antique.id}`}
              >
                <div className="aspect-square overflow-hidden bg-card">
                  <img
                    src={antique.imageUrl}
                    alt={antique.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs uppercase tracking-wider text-primary mb-2">
                      {antique.category}
                    </p>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      {antique.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {antique.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedAntique} onOpenChange={() => setSelectedAntique(null)}>
        <DialogContent className="max-w-5xl p-0 gap-0">
          {selectedAntique && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={() => setSelectedAntique(null)}
                data-testid="button-close-lightbox"
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-black flex items-center justify-center p-8">
                  <img
                    src={selectedAntique.imageUrl}
                    alt={selectedAntique.title}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-card">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                      {selectedAntique.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                    {selectedAntique.title}
                  </h3>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    {selectedAntique.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
