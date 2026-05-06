import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Clock,
  DollarSign,
  Globe,
  Handshake,
  Heart,
  Home,
  MapPin,
  Monitor,
  Power,
  Recycle,
  StretchHorizontal,
} from "lucide-react";
import { motion } from "motion/react";

const ways = [
  {
    num: 1,
    title: "Donate Funds",
    desc: "Your financial contribution is exempt from income tax under Section 80G. Every rupee goes directly to training and empowering Divyang persons.",
    icon: DollarSign,
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100 text-amber-700",
  },
  {
    num: 2,
    title: "Donate Infrastructure",
    desc: "Donate useful equipment such as computers, fans, cupboards, machines, tools, tackles, and other equipment to expand our training capacity.",
    icon: Monitor,
    color: "bg-sky-50 border-sky-200",
    iconBg: "bg-sky-100 text-sky-700",
  },
  {
    num: 3,
    title: "Generate Industrial Tie-Ups",
    desc: "Use your professional network and good offices to create industrial partnerships and generate orders for EDARCH-trained Divyang persons.",
    icon: Home,
    color: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-100 text-teal-700",
  },
  {
    num: 4,
    title: "Donate Land",
    desc: "Get involved by donating land to establish a new EDARCH Center in your city or town, expanding our reach across India.",
    icon: MapPin,
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100 text-green-700",
  },
  {
    num: 5,
    title: "Volunteer Your Time",
    desc: "Spare your valuable time and energy for vocational training and skill development sessions at EDARCH centers.",
    icon: Clock,
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100 text-purple-700",
  },
  {
    num: 6,
    title: "NRI & CSR Support",
    desc: "Using your contacts and digital knowledge, arrange for funds through NRIs, NGOs, and industries through their CSR initiatives.",
    icon: Globe,
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-700",
  },
  {
    num: 7,
    title: "Waste Paper Collection",
    desc: "Give your support for Waste Paper Collection drives which provide raw materials for our paper bag manufacturing division.",
    icon: Recycle,
    color: "bg-lime-50 border-lime-200",
    iconBg: "bg-lime-100 text-lime-700",
  },
  {
    num: 8,
    title: "Empowering Abilities",
    desc: "EDARCH invites persons with disabilities to enroll in our programs designed to build skills, confidence, and independence.",
    icon: Handshake,
    color: "bg-red-50 border-red-200",
    iconBg: "bg-red-100 text-red-700",
  },
];

export function Appeal() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-accent text-white">Appeal</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join Our Mission
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
              Help EDARCH establish centres throughout India and abroad,
              bringing all categories of Divyang persons into the mainstream of
              society with dignity as Entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <blockquote className="font-display text-2xl text-foreground italic leading-relaxed">
              &ldquo;EDARCH has plans to establish various such centres
              throughout India and abroad and bring all categories of Divyang
              Persons in the main stream of society with dignity as
              Entrepreneurs.&rdquo;
            </blockquote>
          </motion.div>
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
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              8 Ways to Support EDARCH
            </h2>
            <p className="text-muted-foreground font-body">
              Every contribution, big or small, makes a difference.
            </p>
          </motion.div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="appeal.list"
          >
            {ways.map((way, i) => (
              <motion.div
                key={way.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`appeal.item.${i + 1}`}
              >
                <Card
                  className={`h-full border ${way.color} shadow-card hover:shadow-hover transition-all hover:-translate-y-1`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-10 h-10 rounded-lg ${way.iconBg} flex items-center justify-center mb-4`}
                    >
                      <way.icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-muted-foreground font-body">
                        0{way.num}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {way.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {way.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/80 font-body mb-8 max-w-xl mx-auto">
              Contact us today to discuss how you can contribute to the EDARCH
              mission.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-body font-semibold"
                data-ocid="appeal.primary_button"
              >
                <Heart className="w-4 h-4 mr-2" />
                Support EDARCH
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
