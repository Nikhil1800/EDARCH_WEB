import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Warehouse, CheckCircle2, Sparkles } from "lucide-react";
import { BASE_URL } from "@/utils/constants";

const products = [
  "Footwear and sandals",
  "Paper bags and eco-friendly packaging",
  "Crafted greeting cards and stationery",
  "Handmade candles and decorative pieces",
  "Plastic moulded components and buttons",
];

export function ProductsManufacture() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-secondary to-muted py-14">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="mb-4 bg-primary text-white">Products Manufactured</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Products Manufactured at EDARCH
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              EDARCH empowers Divyang persons through skill-based manufacturing, creating high-quality products that support sustainable employment and community impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,_0.8fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-card border border-border">
                <img
                  src={`${BASE_URL}assets/uploads/EDARCH_Music.mpeg`}
                  alt="EDARCH Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary font-semibold mb-2">
                    Inclusive Industry
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    Built by people with purpose.
                  </h2>
                </div>
                <p className="text-foreground/80 font-body leading-relaxed">
                  Our manufacturing units are designed to provide accessible workspaces, guided training and quality-focused craftsmanship. Every product carries the skills and dignity of the people who make it.
                </p>
                <p className="text-foreground/80 font-body leading-relaxed">
                  From finished goods to packaging, EDARCH creates practical products for daily use while generating steady income for our trainees and artisans.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {products.map((product) => (
                    <Card key={product} className="shadow-card border-border">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <p className="font-body font-medium text-foreground">{product}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-primary font-semibold mb-2">
              Product Images
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Product Images
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mx-auto mt-4">
              These images showcase the products manufactured at EDARCH, reflecting our commitment to quality, inclusion, and skilled workmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "All Products",
                src: `${BASE_URL}assets/uploads/EDARCH_All_product.jpg`,
              },
              {
                title: "Chakan Products",
                src: `${BASE_URL}assets/uploads/EDARCH_Chakan_Product.jpg`,
              },
              {
                title: "Pirangute Products",
                src: `${BASE_URL}assets/uploads/EDARCH_Pirangute_Product.jpg`,
              },
              {
                title: "Ranjangaon Products",
                src: `${BASE_URL}assets/uploads/EDARCH_Ranjangaon_Prod.jpg`,
              },
            ].map((image) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="overflow-hidden rounded-3xl border border-border shadow-card bg-muted">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-4">
                    <p className="font-medium text-foreground">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality First",
                desc: "Every product is inspected and finished with care to meet the needs of our customers and communities.",
                icon: Sparkles,
              },
              {
                title: "Skilled Training",
                desc: "Participants receive hands-on training in manufacturing, packaging, and logistics to build long-term careers.",
                icon: Warehouse,
              },
              {
                title: "Sustainable Impact",
                desc: "Production work is structured to support social inclusion, economic independence, and environmental responsibility.",
                icon: Sparkles,
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full shadow-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
