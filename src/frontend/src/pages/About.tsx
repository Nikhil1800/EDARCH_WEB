import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, User, Zap } from "lucide-react";
import { motion } from "motion/react";

const futurePlans = [
  {
    title: "National Expansion",
    desc: "EDARCH has plans to establish various centers throughout India to bring all categories of Divyang Persons into the mainstream of society with dignity as Entrepreneurs.",
  },
  {
    title: "International Reach",
    desc: "Expanding our proven model abroad to create sustainable rehabilitation centres, providing the same opportunities for Divyang persons across the globe.",
  },
  {
    title: "Digital Inclusion",
    desc: "Introducing digital literacy and computer-based vocational training programs to prepare Divyang persons for the modern digital economy.",
  },
  {
    title: "Industrial Tie-Ups",
    desc: "Forging new partnerships with industries to provide more employment and entrepreneurship opportunities for trained Divyang persons.",
  },
];

const immediatePlans = [
  "Setting up additional vocational training units in Pune and surrounding districts.",
  "Procuring more industrial plastic moulding machines with donor support.",
  "Launching a paper bag manufacturing division employing 50+ Divyang persons.",
  "Establishing a dedicated computer training lab for visually and hearing impaired individuals.",
  "Organizing quarterly awareness programs and capacity-building workshops.",
  "Launching a fund collection drive through NRIs, NGOs, and CSR contributions.",
];

export function About() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-secondary to-muted py-14">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-primary text-white">About EDARCH</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Story & Leadership
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Meet the visionary behind EDARCH and learn about our plans to
              empower Divyang persons across India and the world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-card border border-border max-w-sm mx-auto lg:mx-0">
                <img
                  src={`${import.meta.env.BASE_URL}assets/uploads/Dilip_Deshpande.jpg`}
                  alt="EDARCH President Page"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
                  {/* About the President */}
                  The President 
                </h2>
              </div>
              <h3 className="font-display text-lg md:text-2xl font-semibold text-accent mb-6">
                Mr. Dilip Deshpande
              </h3>
              <p className="text-foreground/80 font-body text-sm md:text-base leading-relaxed mb-4">
                Dilip Deshpande, founder president of EDARCH is a Chartered
                Engineer and was doing his own business as Industrial Safety
                Consultant for 32 years with his offices in Mumbai, Pune and
                Panjim-Goa.
              </p>
              <p className="text-foreground/80 font-body text-sm md:text-base leading-relaxed mb-4">
                He was also a President of National Safety Organisation for 12
                years. Now he has taken retirement from his business and is
                devoting his life for the social cause and in particular for the
                sustainable rehabilitation of Divyang — Differently Abled
                Persons by developing a unique model of Skill and
                Entrepreneurship Development.
              </p>
              <p className="text-foreground/80 font-body text-sm md:text-base leading-relaxed mb-6">
                He is also a past president of Rotary Club. He is the recipient
                of Parkhe Award, Udyogshri Award, Pune Bhushan Award and many
                more.
              </p>
              <div className="flex flex-wrap items-start justify-start gap-2">
                {[
                  "Chartered Engineer",
                  "Past Rotary President",
                  "Parkhe Award",
                  "Udyogshri Award",
                  "Pune Bhushan Award",
                  "Gurukul Award",
                  "Darpan Ratna",
                  "Honorary Doctorate",
                ].map((award) => (
                  <Badge
                    key={award}
                    variant="secondary"
                    className="font-body text-xs md:text-sm min-w-max"
                  >
                    {award}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center gap-3 justify-center mb-3">
              <Target className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground">
                {/* Our Future Plans */}
                Our Goals
              </h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futurePlans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full shadow-card hover:shadow-hover transition-shadow border-border">
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold text-primary mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {plan.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-accent" />
              <h2 className="font-display text-3xl font-bold text-foreground">
                {/* Immediate Plans */}
                Expansion Plans
              </h2>
            </div>
            <Card className="shadow-card border-l-4 border-l-primary bg-secondary/30">
              <CardContent className="p-6">
                <ul className="space-y-4 font-body">
                  {immediatePlans.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
