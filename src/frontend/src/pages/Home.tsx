import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Factory, Package, Users } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

//const BASE_URL = import.meta.env.BASE_URL;
const BASE_URL = "/EDARCH_WEB/";

const statsData = [
  {
    name: "Years of Service",
    value: 25,
    suffix: "+",
    icon: Award,
    color: "#0f7490",
  },
  {
    name: "Persons Trained",
    value: 500,
    suffix: "+",
    icon: Users,
    color: "#d1622a",
  },
  {
    name: "Industrial Partners",
    value: 10,
    suffix: "+",
    icon: Factory,
    color: "#16a34a",
  },
  {
    name: "Products Made",
    value: 19,
    suffix: "+",
    icon: Package,
    color: "#ca8a04",
  },
];

const chartData = [
  { name: "Years", value: 25, fill: "#0f7490" },
  { name: "Trained", value: 500, fill: "#d1622a" },
  { name: "Partners", value: 10, fill: "#16a34a" },
  { name: "Products", value: 19, fill: "#ca8a04" },
];

const quickLinks = [
  {
    title: "About EDARCH",
    desc: "Learn about our founder Dilip Deshpande and our mission for sustainable rehabilitation.",
    href: "/about" as const,
    color: "from-sky-50 to-teal-50 border-teal-200",
  },
  {
    title: "Overview",
    desc: "Understand our unique vocational training model and why EDARCH stands apart.",
    href: "/overview" as const,
    color: "from-orange-50 to-amber-50 border-orange-200",
  },
  {
    title: "Recognitions",
    desc: "National awards, ISO certification, and recognition from top leaders of India.",
    href: "/recognitions" as const,
    color: "from-green-50 to-emerald-50 border-green-200",
  },
  {
    title: "Support Us",
    desc: "Join our mission. Donate funds, infrastructure, or your time and expertise.",
    href: "/appeal" as const,
    color: "from-rose-50 to-pink-50 border-rose-200",
  },
];

function AnimatedProgressBar({
  value,
  max,
  color,
}: { value: number; max: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting)
          setTimeout(() => setWidth((value / max) * 100), 200);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, max]);
  // return (
  //   <div ref={ref} className="h-2 bg-muted rounded-full overflow-hidden">
  //     <div
  //       className="h-full rounded-full transition-all duration-1000 ease-out"
  //       style={{ width: `${width}%`, backgroundColor: color }}
  //     />
  //   </div>
  // );
}

export function Home() {
  return (
    <main>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}assets/uploads/Edarch1Page.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-6 text-sm px-4 py-1">
              ISO 9001-2008 Accredited Organisation
            </Badge> */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              EDARCH
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-body mb-4 leading-relaxed max-w-3xl mx-auto">
              Entrepreneurship Development And Rehabilitation Centre for the
              Handicapped
            </p>
            <p className="text-base md:text-lg text-white/70 font-body italic mb-8">
              &ldquo;Alone we are less, United we are best, EDARCH has proved
              this&rdquo;
            </p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
              className="text-3xl md:text-4xl text-cyan-500 font-body font-semibold leading-tight mb-1"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>"विकलांगो </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>की </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>एक </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>तमन्ना </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>है, </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>हमें </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>कुछ </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>बनना </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>है.." </motion.span>
            </motion.p>
            {/* <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/about">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-body"
                  data-ocid="home.primary_button"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/appeal">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-white/10 hover:bg-white/20 font-body"
                  data-ocid="home.secondary_button"
                >
                  Support Us
                </Button>
              </Link>
            </div> */}
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* <section className="py-12 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.2)]"
          >
            <div>
              <Badge className="bg-white/10 text-white border-white/15 mb-3 text-sm px-4 py-1">
                EDARCH Audio
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                Listen to our story
              </h2>
              <p className="text-sm md:text-base text-slate-200 max-w-2xl leading-relaxed">
                Enjoy a short audio introduction to EDARCH’s mission, achievements, and the people we serve.
                Use the audio player to start playback when you’re ready.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-card">
              <audio controls className="w-full" preload="metadata">
                <source src={`${BASE_URL}assets/uploads/EDARCH_Music.mpeg`} />
                Your browser does not support the audio element.
              </audio>
            </div>
          </motion.div>
        </div>
      </section> */}




      <section className="py-12 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.2)]"
          >
            <div>
              <Badge className="bg-white/10 text-white border-white/15 mb-3 text-sm px-4 py-1">
                EDARCH Audio
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                Emotions of Differently Abled
              </h2>
              <p className="text-sm md:text-base text-slate-200 max-w-2xl leading-relaxed">
                Enjoy a short audio emotions to EDARCH’s mission, and the people we serve.
                Use the audio player to start playback when you’re ready.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-card">
              <audio controls className="w-full" preload="metadata" autoPlay>
                <source src={`${import.meta.env.BASE_URL}assets/uploads/EDARCH_Music.mpeg`} />
                Your browser does not support the audio element.
              </audio> 
             {/* <audio autoPlay muted style={{ display: 'none' }}>
              <source src={`${BASE_URL}assets/uploads/EDARCH_Music.mp3`} />
                Your browser does not support the audio element.
              </audio> */}
            </div>
          </motion.div>
        </div>
      </section>






      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              {/* Our Impact in Numbers */}
              Our Success in Numbers
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Three decades of transforming lives through skills,
              entrepreneurship, and inclusion.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="text-center p-6 shadow-card hover:shadow-hover transition-shadow border-border">
                  <CardContent className="p-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <stat.icon
                        className="w-6 h-6"
                        style={{ color: stat.color }}
                      />
                    </div>
                    <p
                      className="font-display text-4xl font-bold mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="text-sm text-muted-foreground font-body">
                      {stat.name}
                    </p>
                    {/* <div className="mt-3">
                      <AnimatedProgressBar
                        value={stat.value}
                        max={500}
                        color={stat.color}
                      />
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-card border-border overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
                  Impact Overview
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} barSize={48}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontFamily: "Plus Jakarta Sans", fontSize: 12 }}
                      />
                      <YAxis
                        tick={{ fontFamily: "Plus Jakarta Sans", fontSize: 12 }}
                      />
                      <Tooltip
                        contentStyle={{
                          fontFamily: "Plus Jakarta Sans",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                        {chartData.map((entry) => (
                          <Cell key={entry.name} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </section>

      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-2xl md:text-3xl font-semibold text-white italic">
            &ldquo;Alone we are less, United we are best, EDARCH has proved
            this&rdquo;
          </p>
          <Badge className="mt-4 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
            ISO 9001-2008 Accredited
          </Badge>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              {/* Explore EDARCH */}
              Rehabilitation Module
            </h2>
            <p className="text-muted-foreground font-body">
              Discover our programs, achievements, and ways to help.
            </p>
          </motion.div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="home.list"
          >
            {quickLinks.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`home.item.${i + 1}`}
              >
                <Link to={item.href} className="block h-full group">
                  <Card
                    className={`h-full border bg-gradient-to-br ${item.color} shadow-card group-hover:shadow-hover transition-all duration-300 group-hover:-translate-y-1`}
                  >
                    <CardContent className="p-6">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-card aspect-video">
            <img
              src={`${import.meta.env.BASE_URL}assets/uploads/Edarch1Page3.jpg`}
              alt="EDARCH Brochure Cover"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}