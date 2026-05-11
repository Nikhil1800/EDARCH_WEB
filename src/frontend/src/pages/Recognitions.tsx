import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Award, Scissors } from "lucide-react";
import { motion } from "motion/react";
import { BASE_URL } from "@/utils/constants";

const awards = [
  {
    id: "pm-award",
    caption:
      "Hon. Prime Minister of India Shri. Atal Bihari Vajpayeeji presenting National Award to Mr. Dilip Deshpande - President EDARCH",
    icon: "\uD83C\uDFC6",
    color: "bg-amber-50 border-amber-200",
  },
  {
    id: "helen-keller",
    caption:
      "Mrs. Hon. Sonia Gandhi presenting International Helen Keller Award to EDARCH",
    icon: "\uD83C\uDF0D",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: "iso-cert",
    caption:
      "EDARCH received ISO Certification at the hands of Shri. Mohan Dhariyaji",
    icon: "\uD83D\uDCCB",
    color: "bg-green-50 border-green-200",
  },
  {
    id: "national-award",
    caption:
      "National Award received by EDARCH for outstanding contribution to Divyang rehabilitation",
    icon: "\uD83C\uDF96\uFE0F",
    color: "bg-rose-50 border-rose-200",
  },
];

const products = [
  {
    name: "Paper Bags",
    desc: "Eco-friendly paper bags manufactured by Divyang persons at EDARCH. Various sizes for retail and industrial use.",
    icon: "\uD83D\uDECD\uFE0F",
  },
  {
    name: "Industrial Plastic Components",
    desc: "High-precision industrial plastic components manufactured using the collaborative 4-step vocational training process.",
    icon: "\u2699\uFE0F",
  },
];

const activities = [
  {
    name: "Mini Golf Sports Activity",
    desc: "Recreational sports programs to promote physical wellness and team spirit among Divyang participants.",
    icon: "\u26F3",
  },
  {
    name: "Dandiya Program \u2014 Navratri",
    desc: "Cultural celebration events bringing together Divyang persons and the community during Navratri festival.",
    icon: "\uD83C\uDF8A",
  },
];

export function Recognitions() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-secondary to-muted py-14">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-primary text-white">Recognitions</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Over three decades of excellence, recognized by India&apos;s
              highest offices and international organisations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-card border border-border max-w-3xl mx-auto">
            <img
              src={`${BASE_URL}assets/uploads/Awards_Collage.jpg`}
              alt="EDARCH Recognitions"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 justify-center mb-10"
          >
            <Award className="w-6 h-6 text-primary" />
            <h2 className="font-display text-3xl font-bold text-foreground">
              {/* EDARCH Recognitions */}
              EDARCH Appreciations 
            </h2>
          </motion.div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
            data-ocid="recognitions.list"
          >
            {awards.map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`recognitions.item.${i + 1}`}
              >
                <Card
                  className={`h-full border ${award.color} shadow-card hover:shadow-hover transition-shadow`}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <span className="text-3xl">{award.icon}</span>
                    <p className="text-sm text-foreground/80 font-body leading-relaxed italic">
                      &ldquo;{award.caption}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 justify-center mb-10"
          >
            <Scissors className="w-6 h-6 text-accent" />
            <h2 className="font-display text-3xl font-bold text-foreground">
              Products Manufactured at EDARCH
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full shadow-card border-border hover:shadow-hover transition-shadow">
                  <CardContent className="p-6 text-center">
                    <span className="text-4xl mb-4 block">{product.icon}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {product.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 justify-center mb-10"
          >
            <Activity className="w-6 h-6 text-primary" />
            <h2 className="font-display text-3xl font-bold text-foreground">
              EDARCH Activities
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {activities.map((activity, i) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full shadow-card border-border bg-gradient-to-br from-secondary to-muted hover:shadow-hover transition-shadow">
                  <CardContent className="p-6 text-center">
                    <span className="text-4xl mb-4 block">{activity.icon}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {activity.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {activity.desc}
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
