import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    step: 1,
    title: "Orthopaedically Divyang",
    desc: "The person sits on the machine & inserts die in the machine which he can easily do.",
    color: "bg-sky-100 border-sky-300 text-sky-800",
    accent: "bg-sky-500",
  },
  {
    step: 2,
    title: "Blind Person",
    desc: "The blind person clamps the die by rotating spindle with his sense of touch.",
    color: "bg-orange-100 border-orange-300 text-orange-800",
    accent: "bg-orange-500",
  },
  {
    step: 3,
    title: "Hearing Impaired",
    desc: "The hearing impaired person uses his concentration strength to put the raw material into the machine.",
    color: "bg-green-100 border-green-300 text-green-800",
    accent: "bg-green-500",
  },
  {
    step: 4,
    title: "Mentally Challenged",
    desc: "The mentally challenged person with his physical strength rotates the wheel to inject the material in the die and completes the process.",
    color: "bg-purple-100 border-purple-300 text-purple-800",
    accent: "bg-purple-500",
  },
];

const whyEdarch = [
  {
    id: "inclusive",
    text: "Provides inclusive employment using each person's unique ability.",
  },
  {
    id: "entrepreneurs",
    text: "Trains Divyang persons to be self-reliant Entrepreneurs, not just employees.",
  },
  {
    id: "team-model",
    text: "Unique team-based model where different disabilities complement each other.",
  },
  {
    id: "iso",
    text: "ISO 9001-2008 accredited, ensuring quality training and product standards.",
  },
  {
    id: "pm-recognition",
    text: "Recognized by the Prime Minister and International organisations.",
  },
  {
    id: "sustainable",
    text: "Sustainable social enterprise model — earning while contributing.",
  },
  {
    id: "experience",
    text: "Backed by 25+ years of experience in vocational rehabilitation.",
  },
  {
    id: "industry",
    text: "Strong industry partnerships ensure real-world employment opportunities.",
  },
];

export function Overview() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-secondary to-muted py-14">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-primary text-white">Overview</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              EDARCH Overview
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              A sustainable model of skill development and entrepreneurship for
              Divyang persons.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              The EDARCH Model
            </h2>
            <div className="space-y-4 text-foreground/80 font-body leading-relaxed">
              <p>
                EDARCH has developed a unique and sustainable rehabilitation
                model for Divyang (Differently Abled) persons. Rather than
                dependence on charity or government support, EDARCH empowers
                Divyang persons to become productive entrepreneurs.
              </p>
              <p>
                The organisation focuses on Skill Development and
                Entrepreneurship — equipping Divyang individuals with marketable
                vocational skills so they can earn with dignity, contribute to
                the economy, and live independently.
              </p>
              <p>
                EDARCH&apos;s model is based on leveraging the{" "}
                <strong>unique abilities</strong> of each category of Divyang
                person. Rather than focusing on what they cannot do, we focus on
                what they can do exceptionally well. A blind person has a
                heightened sense of touch; a hearing-impaired person has
                exceptional visual concentration; a mentally challenged person
                often has outstanding physical strength.
              </p>
              <p>
                By combining these unique abilities in a team-based production
                process, EDARCH creates products of the highest quality —
                benefiting industries while providing meaningful work to Divyang
                persons.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">
              Why EDARCH?
            </h2>
            <p className="text-muted-foreground font-body text-center">
              What sets our model apart from conventional rehabilitation
              programmes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyEdarch.map((point, i) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border shadow-xs hover:shadow-card transition-shadow"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 font-body">
                  {point.text}
                </p>
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
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              {/* Modus Operandi of Vocational Training */}
               Machines and Infracture.
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              A 4-step collaborative production process leveraging the unique
              strengths of each Divyang person.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/assets/uploads/All_Studant_Callage.jpg"
                  alt="EDARCH Vocational Training"
                  className="w-full object-contain"
                />
              </div>
            </motion.div>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`border ${step.color} shadow-xs`}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div
                        className={`${step.accent} text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold font-display text-sm`}
                      >
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-sm mb-1">
                          STEP {step.step}: {step.title}
                        </h3>
                        <p className="text-sm font-body opacity-80">
                          {step.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
