import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitMessage } from "@/hooks/useQueries";
import { Globe, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { mutate, isPending } = useSubmitMessage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    mutate(form, {
      onSuccess: () => {
        toast.success("Message sent! We will get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      },
      onError: () => {
        toast.error("Failed to send message. Please try again.");
      },
    });
  };

  const contactItems = [
    {
      icon: MapPin,
      label: "Registered Office",
      value:
        "3rd floor, 212-A, Narayan Peth, above Dena Bank, Kelkar Road, Pune 411030 (M.S. India)",
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      icon: Phone,
      label: "Office Phone",
      value: "+91-9850924747",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: Phone,
      label: "EDARCH Center",
      value: "+91-9850924747",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: Phone,
      label: "Mr. Dilip Deshpande (President)",
      value: "+91 9823082671",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@edarch.org",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.edarch.org",
      color: "text-primary",
      bg: "bg-secondary",
    },
  ];

  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-secondary to-muted py-14">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-primary text-white">Contact</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Reach out to us to learn more about EDARCH, support our mission,
              or collaborate with us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-start gap-4 p-4 rounded-xl ${item.bg} border border-border`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground font-body uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-foreground font-body">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card
                className="shadow-card border-border"
                data-ocid="contact.card"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="font-display text-2xl">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="font-body text-sm">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          className="font-body"
                          data-ocid="contact.input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="font-body text-sm">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, email: e.target.value }))
                          }
                          className="font-body"
                          data-ocid="contact.input"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="font-body text-sm">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        value={form.subject}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, subject: e.target.value }))
                        }
                        className="font-body"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="font-body text-sm">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Write your message here..."
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        className="font-body resize-none"
                        data-ocid="contact.textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-body"
                      data-ocid="contact.submit_button"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div> */}

            <motion.div>
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <div className="mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-primary/15 bg-gradient-to-b from-white to-slate-50 shadow-2xl shadow-slate-200/60 transition-transform duration-300 hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
                      <img
                        src="/assets/uploads/EDARCH_LOGO.jpg"
                        alt="EDARCH Brochure Cover"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <motion.div
                      className="p-6 text-center bg-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.p
                        className="font-display text-xl font-semibold text-primary mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        Make a Difference
                      </motion.p>
                      <motion.h1
                        className="font-display text-xl font-semibold text-primary mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        Your contribution can change lives.
                      </motion.h1>
                      <motion.p
                        className="text-sm text-primary/80 font-medium max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        For donations or support towards EDARCH’s rehabilitation and skill development programs, feel free to contact us at +91 9823082671.
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </section>
            </motion.div>


          </div>
        </div>
      </section>
    </main>
  );
}
