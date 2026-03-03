import { motion, AnimatePresence } from "motion/react";
import { 
  Car, 
  ShieldCheck, 
  Droplets, 
  Sparkles, 
  Wind, 
  Sun, 
  Star, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  CheckCircle2,
  Award,
  Zap,
  Shield,
  Gem,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-xl py-3 border-b border-black/5 shadow-sm" : "bg-transparent py-5 md:py-6"}`}>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-brand-red z-50"
        style={{ 
          scaleX: isScrolled ? undefined : 0,
          width: "100%",
          transformOrigin: "0%"
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-9 h-9 md:w-10 md:h-10 bg-brand-red rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/20"
          >
            <Car className="text-white" size={20} />
          </motion.div>
          <span className="text-lg md:text-xl font-display font-black tracking-tighter text-brand-ink">
            DETAILING <span className="text-brand-red">MONSTER</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-gray-600 hover:text-brand-red transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a href="tel:+919876543210" className="btn-primary py-2.5 px-6 text-sm">
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-black/5 absolute w-full left-0 px-4 py-8 flex flex-col gap-6 text-center shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold text-brand-ink"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+919876543210" className="btn-primary">
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FlippingText = () => {
  const words = ["Brand New", "Showroom Ready", "Ultra Glossy", "Fully Protected"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-12 md:h-20 overflow-hidden relative inline-block align-middle ml-1 md:ml-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-brand-red block font-black text-3xl md:text-6xl"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Car" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] md:text-xs font-black mb-6 md:mb-8 tracking-widest uppercase">
              <Sparkles size={12} className="md:w-3.5 md:h-3.5" />
              Mohali's #1 Car Care Studio
            </div>
            <h1 className="text-3xl md:text-6xl font-display font-black leading-[1.1] mb-6 md:mb-8 text-brand-ink">
              Premium Detailing <br />
              That Makes Your <br />
              Car Look <FlippingText />
            </h1>
            <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-10 leading-relaxed max-w-xl">
              Experience the ultimate luxury car care. From 9H ceramic coating to interior deep cleaning, we bring back that showroom shine with precision and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <a href="https://wa.me/919876543210" className="btn-primary text-base md:text-lg px-8 md:px-10 py-4 md:py-5">
                <MessageCircle size={20} className="md:w-[22px] md:h-[22px]" />
                Book Appointment
              </a>
              <a href="tel:+919876543210" className="btn-secondary text-base md:text-lg px-8 md:px-10 py-4 md:py-5">
                <Phone size={20} className="md:w-[22px] md:h-[22px]" />
                Call Now
              </a>
            </div>

            <div className="mt-12 md:mt-16 flex items-center gap-8 md:gap-10">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-brand-ink">5.0</span>
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="md:w-4 md:h-4" fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Google Rating</span>
              </div>
              <div className="h-10 md:h-12 w-px bg-black/10"></div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-brand-ink">1.2k+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cars Detailed</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Car Detailing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Warranty</p>
                <p className="text-xl font-black text-brand-ink">Up to 5 Years</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1603584173870-7f31189bc400?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="w-full md:w-auto text-center md:text-left">
            <h2 className="text-xs md:text-sm font-black text-brand-red uppercase tracking-[0.3em] mb-3 md:mb-4">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-display font-black">Our Recent <span className="text-brand-red">Masterpieces</span></h3>
          </div>
          <a href="https://instagram.com" className="btn-secondary w-full md:w-auto justify-center">
            <Instagram size={20} />
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg border-4 border-white"
            >
              <img 
                src={img} 
                alt="Detailing Work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Technicians",
      desc: "Our team consists of certified detailing professionals with years of experience in luxury car care.",
      icon: <Award className="text-brand-red" size={32} />,
      className: "md:col-span-2 md:row-span-1",
      stat: "10+ Years"
    },
    {
      title: "Premium Products",
      desc: "We use only world-class chemicals and coatings.",
      icon: <Gem className="text-brand-red" size={32} />,
      className: "md:col-span-1 md:row-span-1",
      stat: "Top Tier"
    },
    {
      title: "Advanced Tech",
      desc: "Equipped with the latest infrared curing lamps and dual-action polishers.",
      icon: <Zap className="text-brand-red" size={32} />,
      className: "md:col-span-1 md:row-span-2",
      stat: "Pro Grade"
    },
    {
      title: "Guaranteed Satisfaction",
      desc: "We don't stop until your car looks absolutely perfect. Our 5.0 rating speaks for itself.",
      icon: <Shield className="text-brand-red" size={32} />,
      className: "md:col-span-2 md:row-span-1",
      stat: "100% Happy"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621359953476-b1629902f602?auto=format&fit=crop&q=80&w=2000" 
          alt="Car Detailing Background" 
          className="w-full h-full object-cover opacity-[0.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Monster Claw Mark Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none rotate-12 translate-x-1/4 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-red">
          <path d="M40,20 C50,60 45,100 40,180 M80,10 C95,70 90,120 85,190 M120,30 C135,80 130,130 125,170 M160,15 C175,65 170,115 165,185" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs md:text-sm font-black text-brand-red uppercase tracking-[0.3em] mb-3 md:mb-4">Why Us</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6">The <span className="text-brand-red">Monster</span> Difference</h3>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[190px]">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.15)"
              }}
              className={`group relative overflow-hidden p-6 md:p-8 rounded-3xl border border-brand-red/10 ${f.className} bg-brand-red/5 backdrop-blur-md transition-all duration-500`}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-brand-red/0 group-hover:from-brand-red group-hover:to-brand-red/90 transition-all duration-500" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                    className="p-2.5 bg-white/50 backdrop-blur-sm rounded-2xl group-hover:bg-white/20 transition-colors"
                  >
                    {React.cloneElement(f.icon as React.ReactElement, { 
                      className: "text-brand-red group-hover:text-white transition-colors",
                      size: 28
                    })}
                  </motion.div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-red group-hover:text-white/60 transition-colors bg-brand-red/10 group-hover:bg-white/10 px-2.5 py-1 rounded-full">
                    {f.stat}
                  </span>
                </div>
                
                <h4 className="text-lg md:text-xl font-black mb-2 group-hover:text-white transition-colors">
                  {f.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed">
                  {f.desc}
                </p>
                
                {/* Decorative Element */}
                <div className="mt-auto pt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="text-white" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { 
      title: "Pre-Inspection & Prep", 
      desc: "We start with a high-pressure rinse to remove loose dirt, followed by a thorough inspection of the paint's health under specialized LED detailing lights.",
      icon: <HelpCircle size={24} />,
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "Snow Foam Bath", 
      desc: "A thick layer of pH-neutral snow foam is applied to encapsulate and lift surface contaminants, ensuring a scratch-free contact wash.",
      icon: <Droplets size={24} />,
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "Paint Correction", 
      desc: "Using dual-action polishers and premium compounds, we remove swirl marks, scratches, and oxidation to restore the original paint depth.",
      icon: <Zap size={24} />,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "Ceramic Application", 
      desc: "The surface is chemically prepped before applying the 9H Ceramic Coating, which is then cured under infrared lamps for maximum durability.",
      icon: <ShieldCheck size={24} />,
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "Final Inspection", 
      desc: "A 50-point quality check is performed. We inspect every corner, gap, and surface to ensure perfection before the final handover.",
      icon: <CheckCircle2 size={24} />,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 relative overflow-hidden bg-brand-gray">
      {/* Monster Eye Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none -translate-x-1/2">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-red">
          <path d="M10,50 Q50,10 90,50 Q50,90 10,50 Z M50,35 A15,15 0 1,0 50,65 A15,15 0 1,0 50,35 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs md:text-sm font-black text-brand-red uppercase tracking-[0.3em] mb-3 md:mb-4">Our Method</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black">The <span className="text-brand-red">Monster</span> Workflow</h3>
            <p className="text-sm md:text-base text-gray-500 mt-4 max-w-2xl mx-auto px-4">We follow a rigorous multi-stage process to ensure every vehicle that leaves our studio is nothing short of perfection.</p>
          </motion.div>
        </div>

        <div className="relative space-y-16 md:space-y-24">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-red/30 to-transparent -translate-x-1/2" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-24 items-center relative`}
            >
              {/* Step Number Circle for Desktop */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-2 border-brand-red rounded-full items-center justify-center z-20 shadow-xl">
                <span className="text-brand-red font-black text-sm">{i + 1}</span>
              </div>

              <div className="w-full md:w-1/2">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white group"
                >
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-56 md:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-12 md:h-12 bg-brand-red text-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-xl shadow-xl">
                    0{i + 1}
                  </div>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                    className="text-brand-red p-3 bg-brand-red/10 backdrop-blur-md rounded-xl shadow-sm border border-brand-red/20"
                  >
                    {step.icon}
                  </motion.div>
                  <h4 className="text-xl md:text-2xl font-black">{step.title}</h4>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 md:mb-8">{step.desc}</p>
                <div className="flex justify-center md:justify-start gap-3 md:gap-4">
                  <div className="h-1.5 w-12 md:w-16 bg-brand-red rounded-full shadow-sm"></div>
                  <div className="h-1.5 w-4 md:w-6 bg-brand-red/20 rounded-full"></div>
                  <div className="h-1.5 w-4 md:w-6 bg-brand-red/20 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StudioSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Monster Claw Mark Background */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-[0.02] pointer-events-none -rotate-12 -translate-x-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-red">
          <path d="M40,20 C50,60 45,100 40,180 M80,10 C95,70 90,120 85,190 M120,30 C135,80 130,130 125,170 M160,15 C175,65 170,115 165,185" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-xs md:text-sm font-black text-brand-red uppercase tracking-[0.3em] mb-3 md:mb-4">Our Studio</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black mb-6 md:mb-8 leading-tight">A World-Class <span className="text-brand-red">Environment</span> for Your Car</h3>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              Our studio isn't just a garage—it's a precision-engineered facility. We maintain a dust-free, temperature-controlled environment with specialized multi-spectrum lighting to ensure every swirl and defect is visible and corrected to perfection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-5 md:p-6 bg-brand-red/5 backdrop-blur-sm rounded-2xl border border-brand-red/10"
              >
                <div className="w-10 h-10 bg-brand-red text-white rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-brand-red/20">
                  <Wind size={20} />
                </div>
                <h4 className="font-black text-lg md:text-xl mb-1 md:mb-2">Dust-Free</h4>
                <p className="text-xs md:text-sm text-gray-500">Advanced HEPA filtration systems for a flawless finish.</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-5 md:p-6 bg-brand-red/5 backdrop-blur-sm rounded-2xl border border-brand-red/10"
              >
                <div className="w-10 h-10 bg-brand-red text-white rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-brand-red/20">
                  <Sun size={20} />
                </div>
                <h4 className="font-black text-lg md:text-xl mb-1 md:mb-2">LED Lighting</h4>
                <p className="text-xs md:text-sm text-gray-500">Multi-spectrum lights reveal even the smallest paint defects.</p>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <div className="space-y-3 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl"
              >
                <img src="https://images.unsplash.com/photo-1553008169-2d9d74c91520?auto=format&fit=crop&q=80&w=600" alt="Studio 1" className="h-48 md:h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Detailing Bay</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl"
              >
                <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=600" alt="Studio 2" className="h-36 md:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Precision Tools</span>
                </div>
              </motion.div>
            </div>
            <div className="space-y-3 md:space-y-6 pt-6 md:pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl"
              >
                <img src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=600" alt="Studio 3" className="h-36 md:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Premium Products</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl"
              >
                <img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600" alt="Studio 4" className="h-48 md:h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Final Inspection</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BrandPartners = () => {
  const brands = [
    { name: "Meguiar's", logo: <Car size={40} /> },
    { name: "Gtechniq", logo: <Shield size={40} /> },
    { name: "3M", logo: <Zap size={40} /> },
    { name: "Koch Chemie", logo: <Droplets size={40} /> },
    { name: "Sonax", logo: <Sparkles size={40} /> }
  ];

  return (
    <section className="py-16 border-y border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.5em] mb-12 text-brand-ink">Trusted By Premium Brands</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, i) => (
            <motion.div 
              key={i} 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: i * 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              {brand.logo}
              <span className="text-xs font-bold uppercase tracking-widest">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MaintenanceTips = () => {
  const tips = [
    { title: "Two-Bucket Method", desc: "Always use two buckets when washing to prevent swirl marks." },
    { title: "Avoid Direct Sun", desc: "Never wash your car in direct sunlight to prevent water spots." },
    { title: "Microfiber Only", desc: "Use high-GSM microfiber towels for drying and buffing." },
    { title: "Regular Top-ups", desc: "Use a ceramic detailer every 3 months to maintain coating health." }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1000" alt="Maintenance" className="rounded-2xl md:rounded-[3rem] shadow-xl md:shadow-2xl border-4 md:border-8 border-white" referrerPolicy="no-referrer" />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-xs md:text-sm font-black text-brand-red uppercase tracking-[0.3em] mb-3 md:mb-4">Expert Advice</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black mb-6 md:mb-8">Maintenance <span className="text-brand-red">Tips</span></h3>
            <div className="space-y-4 md:space-y-6">
              {tips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row gap-4 md:gap-6 p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-black/5 shadow-sm items-center sm:items-start text-center sm:text-left"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-red/10 rounded-lg md:rounded-xl flex items-center justify-center text-brand-red shrink-0">
                    <CheckCircle2 size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg md:text-xl mb-1">{tip.title}</h4>
                    <p className="text-sm md:text-base text-gray-500">{tip.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const Pricing = () => {
  const packages = [
    {
      name: "Monster Refresh",
      price: "₹1,999",
      features: ["Foam Wash", "Interior Vacuum", "Tire Dressing", "Liquid Wax Polish"],
      popular: false,
      icon: <Droplets size={24} />
    },
    {
      name: "Monster Deep Clean",
      price: "₹4,999",
      features: ["Full Interior Detailing", "Engine Bay Cleaning", "Clay Bar Treatment", "Machine Waxing"],
      popular: true,
      icon: <Sparkles size={24} />
    },
    {
      name: "Monster Ceramic",
      price: "₹14,999",
      features: ["9H Ceramic Coating", "Paint Correction", "Alloy Protection", "3 Year Warranty"],
      popular: false,
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Monster Claw Mark Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none rotate-12 translate-x-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-red">
          <path d="M40,20 C50,60 45,100 40,180 M80,10 C95,70 90,120 85,190 M120,30 C135,80 130,130 125,170 M160,15 C175,65 170,115 165,185" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Car" 
          className="w-full h-full object-cover opacity-[0.02]"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs md:text-sm font-black text-brand-red uppercase tracking-[0.3em] mb-3 md:mb-4">Pricing</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black">Detailing <span className="text-brand-red">Packages</span></h3>
            <p className="text-sm md:text-base text-gray-500 mt-4 max-w-2xl mx-auto">Choose the perfect monster treatment for your vehicle. No hidden costs, just pure perfection.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className={`p-8 md:p-10 rounded-3xl border-2 ${pkg.popular ? "border-brand-red bg-white shadow-2xl shadow-brand-red/10" : "border-brand-red/10 bg-brand-red/5 backdrop-blur-md"} relative flex flex-col transition-all duration-500`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-black py-1.5 px-6 rounded-full uppercase tracking-widest shadow-lg shadow-brand-red/30">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pkg.popular ? "bg-brand-red text-white" : "bg-brand-red/10 text-brand-red"}`}>
                  {pkg.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-black">{pkg.name}</h4>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl md:text-5xl font-black text-brand-ink">{pkg.price}</span>
                <span className="text-gray-400 font-bold text-sm">/ onwards</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-600 font-semibold text-sm md:text-base">
                    <CheckCircle2 size={18} className="text-brand-red shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919876543210" className={`w-full py-4 rounded-2xl font-black text-center transition-all duration-300 ${pkg.popular ? "bg-brand-red text-white shadow-xl shadow-brand-red/30 hover:scale-[1.02]" : "bg-brand-ink text-white hover:bg-brand-red hover:scale-[1.02]"}`}>
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How long does ceramic coating last?", a: "Our premium 9H ceramic coatings last between 3 to 5 years depending on the package and maintenance. We provide a warranty certificate with every application." },
    { q: "What is the difference between wax and ceramic coating?", a: "Wax provides short-term shine (1-2 months) and minimal protection. Ceramic coating creates a permanent chemical bond, offering superior hardness, UV protection, and extreme hydrophobicity for years." },
    { q: "How much time does a full detailing take?", a: "A full deep clean usually takes 4-6 hours. Ceramic coating and paint correction are more intensive, requiring 24-48 hours for proper application and curing in our controlled environment." },
    { q: "Do you offer pick and drop service?", a: "Yes, we offer complimentary pick and drop service for premium detailing packages within Mohali to ensure a hassle-free experience for our clients." }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-brand-gray">
      {/* Monster Claw Mark Background */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-[0.02] pointer-events-none -rotate-12 -translate-x-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-red">
          <path d="M40,20 C50,60 45,100 40,180 M80,10 C95,70 90,120 85,190 M120,30 C135,80 130,130 125,170 M160,15 C175,65 170,115 165,185" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2000" 
          alt="BMW Car" 
          className="w-full h-full object-cover opacity-[0.03]"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs md:text-sm font-black text-brand-red uppercase tracking-[0.3em] mb-3 md:mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black">Common <span className="text-brand-red">Questions</span></h3>
          </motion.div>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl md:rounded-3xl border border-brand-red/10 overflow-hidden shadow-xl shadow-black/5"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 md:p-8 flex justify-between items-center text-left hover:bg-brand-red/5 transition-colors group"
              >
                <span className="font-black text-base md:text-xl flex items-center gap-4 group-hover:text-brand-red transition-colors">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors ${openIndex === i ? "bg-brand-red text-white" : "bg-brand-red/10 text-brand-red"}`}>
                    <HelpCircle size={18} className="md:w-5 md:h-5" />
                  </div>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-brand-red/20 transition-all duration-300 ${openIndex === i ? "bg-brand-red text-white rotate-90" : "text-brand-red"}`}>
                  <ChevronRight size={18} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-gray-500 text-sm md:text-lg leading-relaxed border-t border-brand-red/5">
                      <p className="pl-12 md:pl-14">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Ceramic Coating",
      description: "9H Hardness protection that provides extreme gloss and hydrophobic properties for years.",
      icon: <ShieldCheck className="text-brand-red" size={32} />,
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Paint Protection (PPF)",
      description: "Self-healing film that protects your car from scratches, stone chips, and environmental damage.",
      icon: <Sparkles className="text-brand-red" size={32} />,
      image: "https://images.unsplash.com/photo-1552933529-e359b2477252?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Interior Deep Cleaning",
      description: "Complete sanitization and restoration of your car's interior, from leather to carpets.",
      icon: <Wind className="text-brand-red" size={32} />,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Foam Wash & Wax",
      description: "Gentle yet effective cleaning using pH-neutral foam and high-quality wax for a shiny finish.",
      icon: <Droplets className="text-brand-red" size={32} />,
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=2000" 
          alt="Mercedes Car" 
          className="w-full h-full object-cover opacity-[0.03]"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-black text-brand-red uppercase tracking-[0.3em] mb-3 md:mb-4">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-display font-black">Professional <span className="text-brand-red">Car Care</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="perspective-1000 h-[350px] md:h-[400px] group"
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute inset-0 w-full h-full glass-card rounded-2xl md:rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col items-center text-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
                    className="mb-4 md:mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <h4 className="text-xl md:text-2xl font-black mb-2 md:mb-4">{service.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-6">{service.description}</p>
                  <div className="mt-auto text-brand-red font-black flex items-center gap-2 text-xs md:text-sm">
                    Tap to View <ArrowRight size={14} className="md:w-4 md:h-4" />
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-red/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-white text-center">
                    <h4 className="text-2xl font-black mb-4">Get Started</h4>
                    <p className="mb-8 font-medium">Book this service today and give your car the monster treatment.</p>
                    <a href="https://wa.me/919876543210" className="bg-white text-brand-red font-black py-3 px-8 rounded-full shadow-xl">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Monster Claw Mark Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none rotate-12 translate-x-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-red">
          <path d="M40,20 C50,60 45,100 40,180 M80,10 C95,70 90,120 85,190 M120,30 C135,80 130,130 125,170 M160,15 C175,65 170,115 165,185" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=2000" 
          alt="Supercar" 
          className="w-full h-full object-cover opacity-[0.02]"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-xs md:text-sm font-black text-brand-red uppercase tracking-[0.3em] mb-3 md:mb-4">Contact</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black mb-8 md:mb-12">Visit Our <span className="text-brand-red">Monster</span> Studio</h3>
            
            <div className="space-y-6 md:space-y-8">
              {[
                { icon: <MapPin />, title: "Location", detail: "Swaraj 4 No. Gate, Plot No. D 52, near Punjab Tractors Limited, Mohali" },
                { icon: <Clock />, title: "Business Hours", detail: "Open Daily: 9:00 AM - 8:30 PM" },
                { icon: <Phone />, title: "Call Us", detail: "+91 98765 43210", highlight: true }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex flex-col sm:flex-row items-center lg:items-start gap-4 md:gap-6 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center shrink-0 border border-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-red/5">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <div>
                    <h4 className="font-black text-lg md:text-xl mb-1 md:mb-2">{item.title}</h4>
                    <p className={`text-sm md:text-lg ${item.highlight ? "text-brand-red font-black" : "text-gray-500 font-medium"}`}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 md:mt-16 p-8 md:p-12 bg-brand-red/5 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] border border-brand-red/10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-brand-red/20 transition-colors" />
              <h4 className="text-2xl md:text-3xl font-black mb-4">Ready to Shine?</h4>
              <p className="text-sm md:text-lg text-gray-600 mb-8 md:mb-10 font-medium">Drop us a message on WhatsApp for a quick quote or to schedule your slot. We respond within minutes!</p>
              <a href="https://wa.me/919876543210" className="btn-primary w-full py-5 text-lg md:text-xl shadow-2xl shadow-brand-red/30 hover:scale-[1.02] transition-transform">
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-[650px] rounded-[2rem] md:rounded-[4rem] overflow-hidden border-4 md:border-[12px] border-brand-gray shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.565451245678!2d76.7023456!3d30.7023456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzA4LjQiTiA3NsKwNDInMDguNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Detailing Monster Location"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-12 border-t border-brand-red/10 relative overflow-hidden">
      {/* Monster Claw Mark Background */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.01] pointer-events-none -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-red">
          <path d="M40,20 C50,60 45,100 40,180 M80,10 C95,70 90,120 85,190 M120,30 C135,80 130,130 125,170 M160,15 C175,65 170,115 165,185" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20 text-center md:text-left">
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-6 md:mb-8 group cursor-pointer">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-10 h-10 md:w-14 md:h-14 bg-brand-red rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl shadow-brand-red/20"
              >
                <Car className="text-white md:w-8 md:h-8" size={24} />
              </motion.div>
              <span className="text-xl md:text-3xl font-display font-black tracking-tighter text-brand-ink">
                DETAILING <span className="text-brand-red">MONSTER</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-md mb-8 md:mb-10 text-base md:text-lg leading-relaxed font-medium">
              The ultimate destination for premium car care in Mohali. We combine cutting-edge technology with pure passion to deliver showroom-quality results every time.
            </p>
            <div className="flex gap-4 md:gap-6">
              {[Instagram, Facebook].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, backgroundColor: "#EF4444", color: "#FFFFFF" }}
                  className="w-12 h-12 md:w-14 md:h-14 bg-brand-red/5 rounded-2xl flex items-center justify-center text-brand-red transition-all duration-300 border border-brand-red/10"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg md:text-xl mb-6 md:mb-8 text-brand-ink uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 md:space-y-5 text-gray-500 font-bold text-sm md:text-base">
              <li><a href="#home" className="hover:text-brand-red transition-colors flex items-center gap-2">
                <ChevronRight size={14} className="text-brand-red" /> Home
              </a></li>
              <li><a href="#about" className="hover:text-brand-red transition-colors flex items-center gap-2">
                <ChevronRight size={14} className="text-brand-red" /> About Us
              </a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2">
                <ChevronRight size={14} className="text-brand-red" /> Services
              </a></li>
              <li><a href="#pricing" className="hover:text-brand-red transition-colors flex items-center gap-2">
                <ChevronRight size={14} className="text-brand-red" /> Pricing
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg md:text-xl mb-6 md:mb-8 text-brand-ink uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 md:space-y-5 text-gray-500 font-bold text-sm md:text-base">
              <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2">
                <ChevronRight size={14} className="text-brand-red" /> Ceramic Coating
              </a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2">
                <ChevronRight size={14} className="text-brand-red" /> Paint Protection
              </a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2">
                <ChevronRight size={14} className="text-brand-red" /> Interior Cleaning
              </a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2">
                <ChevronRight size={14} className="text-brand-red" /> Car Polishing
              </a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-brand-red/10 flex flex-col md:row justify-between items-center gap-6 md:gap-8 text-gray-400 font-bold text-[10px] md:text-sm uppercase tracking-[0.2em] text-center">
          <p>© {new Date().getFullYear()} Detailing Monster. Crafted with Passion.</p>
          <div className="flex gap-6 md:gap-12">
            <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <BrandPartners />
      <WhyChooseUs />
      <Gallery />
      <StudioSection />
      <Services />
      <Process />
      <MaintenanceTips />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button for Mobile */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/919876543210" 
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-3xl shadow-2xl md:hidden"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
