import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X, Mail, Linkedin, Briefcase, Landmark, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-primary">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b border-transparent",
          isScrolled ? "bg-background/90 backdrop-blur-md border-border/50 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-wide text-primary">Veltro Capital</div>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col items-center gap-8 text-xl font-serif text-muted-foreground">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          className="container mx-auto px-6 md:px-12 relative z-10"
          initial="hidden"
          animate="visible"
          variants={STAGGER}
        >
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl lg:text-8xl font-serif max-w-4xl leading-[1.1] mb-6">
            The Investment Bank Built for India's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#E8D09F] italic">Next Builders.</span>
          </motion.h1>
          
          <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Operator-investors advising the next generation of category creators.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wider uppercase h-14 px-8 rounded-none border border-primary" onClick={() => scrollToSection("contact")}>
              Discuss Your Fundraise
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-white/5 text-foreground hover:text-primary text-sm tracking-wider uppercase h-14 px-8 rounded-none" onClick={() => scrollToSection("services")}>
              Our Services
            </Button>
          </motion.div>
          
          <motion.div variants={FADE_UP} className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50">
            {[
              { label: "Credentials", value: "Ex-Blackstone" },
              { label: "Recognition", value: "Forbes 30U30" },
              { label: "Fundraises Advised", value: "₹150 Cr+" },
              { label: "Focus", value: "Seed to Series B" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-xl font-serif text-foreground">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative border-t border-border/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Fundraising Excellence.</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">We don't just make intros. We act as an extension of your founding team, running a disciplined, institutional-grade fundraise from start to finish.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
          >
            {[
              { title: "Pitch Story & Positioning", desc: "Translating complex visions into inevitable narratives that resonate with institutional capital.", icon: <Target className="w-6 h-6" /> },
              { title: "Investor Targeting", desc: "Precision-mapping your raise to funds and partners with active mandates and strategic fit.", icon: <Target className="w-6 h-6" /> },
              { title: "Warm Introductions", desc: "Leveraging a deep, India-native network to get you in the room with decision-makers.", icon: <Briefcase className="w-6 h-6" /> },
              { title: "Due Diligence Support", desc: "Pre-empting red flags and structuring data rooms to accelerate time-to-close.", icon: <Shield className="w-6 h-6" /> },
              { title: "Valuation & Negotiation", desc: "Structuring rounds that optimize for both immediate capital and long-term cap table health.", icon: <Landmark className="w-6 h-6" /> },
              { title: "Legal & Documentation", desc: "Navigating term sheets and SHAs alongside legal counsel to protect founder interests.", icon: <Landmark className="w-6 h-6" /> }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={FADE_UP}
                className="group p-8 border border-border/50 bg-card/30 hover:bg-card hover:border-primary/30 transition-all duration-500"
              >
                <div className="text-primary mb-6 opacity-70 group-hover:opacity-100 transition-opacity">{service.icon}</div>
                <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-card relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Select Clients.</h2>
              <p className="text-muted-foreground max-w-xl text-lg">Partnering with India's most ambitious founders building the next decade of category-defining companies.</p>
            </div>
            <div className="text-sm uppercase tracking-widest text-primary border-b border-primary pb-1 inline-block w-max">
              Portfolio
            </div>
          </motion.div>

          {/* Desktop header row */}
          <div className="hidden md:grid grid-cols-4 gap-4 pb-4 border-b border-border/50 text-xs uppercase tracking-widest text-muted-foreground/50">
            <span>Company</span>
            <span>Sector</span>
            <span>Round</span>
            <span>Website</span>
          </div>

          <div className="flex flex-col border-t border-border/30">
            {[
              { name: "Basil", href: "https://basil.health/", display: "basil.health", sector: "HealthTech", stage: "Series A" },
              { name: "Nayurja", href: "https://www.nayurja.com/", display: "nayurja.com", sector: "DeepTech", stage: "Family Offices" },
              { name: "Intract", href: "https://www.intract.io/", display: "intract.io", sector: "FinTech", stage: "Seed" },
              { name: "Super Circle", href: "https://supercircle.com/", display: "supercircle.com", sector: "B2B", stage: "Debt" },
              { name: "Just AI", href: null, display: "Stealth", sector: "AI", stage: "SAFE" },
              { name: "Gimi Michi", href: "https://gimimichi.com/", display: "gimimichi.com", sector: "Consumer", stage: "Pre-Seed" }
            ].map((client, i) => {
              const inner = (
                <>
                  {/* Desktop: 4-column grid */}
                  <div className="hidden md:grid grid-cols-4 gap-4 items-center w-full">
                    <h3 className="text-2xl md:text-3xl font-serif group-hover:text-primary transition-colors duration-300">{client.name}</h3>
                    <span className="text-muted-foreground text-sm uppercase tracking-widest">{client.sector}</span>
                    <span className="text-muted-foreground text-sm uppercase tracking-widest">{client.stage}</span>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <span>{client.display}</span>
                      {client.href && <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />}
                    </div>
                  </div>
                  {/* Mobile: stacked */}
                  <div className="md:hidden w-full">
                    <h3 className="text-2xl font-serif group-hover:text-primary transition-colors duration-300 mb-2">{client.name}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-widest text-muted-foreground">
                      <span>{client.sector}</span>
                      <span className="text-border">·</span>
                      <span>{client.stage}</span>
                      <span className="text-border">·</span>
                      <span className="group-hover:text-primary transition-colors">{client.display}</span>
                    </div>
                  </div>
                </>
              );
              return client.href ? (
                <motion.a
                  href={client.href}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex items-center p-6 border-b border-border/50 hover:bg-white/5 transition-colors duration-300"
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex items-center p-6 border-b border-border/50 hover:bg-white/5 transition-colors duration-300"
                >
                  {inner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative border-t border-border/30 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP}
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Operator-Investors,<br/>Turned Investment Bankers.</h2>
              <div className="space-y-6 text-muted-foreground text-lg mb-10">
                <p>
                  Veltro Capital was born out of frustration with traditional advisory. We saw brilliant founders losing momentum because they lacked an institutional approach to fundraising.
                </p>
                <p className="text-foreground font-medium border-l-2 border-primary pl-6 py-2 italic">
                  "Full incentive alignment — we succeed only when you do."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
              className="grid gap-6"
            >
              {[
                { title: "We've Raised Capital Ourselves", desc: "We know what it feels like to be on the other side of the table. We optimize for founder leverage." },
                { title: "Fully Aligned Incentives", desc: "No retainer-heavy models that misalign goals. We are partners in your success, structured to win together." },
                { title: "India-Native Investor Network", desc: "Deep, active relationships with the partners and principals actually deploying capital in India today." }
              ].map((point, i) => (
                <motion.div key={i} variants={FADE_UP} className="p-8 border border-border/50 bg-background/50 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-500" />
                  <h3 className="text-xl font-serif mb-2 text-foreground">{point.title}</h3>
                  <p className="text-muted-foreground text-sm">{point.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-primary text-primary-foreground relative">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Ready to Raise?</h2>
            <p className="text-primary-foreground/80 text-lg mb-12">
              If you're building something that matters and want a partner who treats your cap table like their own, let's talk.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 text-sm tracking-wider uppercase h-14 px-10 rounded-none border border-transparent" asChild>
                <a href="mailto:sambhav@veltrocapital.com">
                  <Mail className="w-4 h-4 mr-3" />
                  Email Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground text-sm tracking-wider uppercase h-14 px-10 rounded-none" asChild>
                <a href="https://www.linkedin.com/company/veltroindia/" target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4 mr-3" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 text-sm text-muted-foreground bg-background">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>© 2025 Veltro Capital. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>New Delhi, India</span>
            <a href="https://www.linkedin.com/company/veltroindia/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
