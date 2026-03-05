import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  ChevronRight,
  Menu,
  X,
  Zap,
  ShieldCheck,
  TrendingUp,
  Award,
  AlertCircle,
  ArrowRight,
  Star,
  Quote,
  HelpCircle,
  ArrowDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const UrgencyBar = () => (
  <div className="bg-gold-primary text-piano-black py-2 px-4 text-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] z-[60] relative">
    ⚠️ ATENÇÃO: Restam apenas <span className="underline font-black">7 vagas</span> para novos membros este mês.
  </div>
);

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Clube', href: '#clube' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Planos', href: '#planos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <UrgencyBar />
      <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-piano-black/90 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container-premium flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 border border-gold-primary/30 rounded-full flex items-center justify-center">
              <span className="text-xl font-display font-bold text-gold-primary">M</span>
            </div>
            <span className="text-[10px] font-display font-bold tracking-[0.4em] hidden sm:block text-text-primary">BARBEARIA</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="micro-label text-text-secondary hover:text-gold-primary transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#planos" className="premium-button">
              GARANTIR VAGA
            </a>
          </div>

          <button className="lg:hidden text-text-secondary hover:text-text-primary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 bg-piano-black z-[70] p-10 flex flex-col justify-center gap-8 lg:hidden"
            >
              <button className="absolute top-10 right-10 text-text-secondary" onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-4xl font-display tracking-widest text-text-primary hover:text-gold-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#planos" className="premium-button w-full py-5 text-sm" onClick={() => setMobileMenuOpen(false)}>
                ASSINAR AGORA
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-premium-gradient">
    <div className="absolute inset-0 z-0 opacity-30">
      <img src="https://i.imgur.com/5F3nvmj.jpeg" alt="Fachada M Barbearia" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 whisky-overlay"></div>
    </div>

    <div className="relative z-10 container-premium">
      <div className="max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-10 h-[1px] bg-gold-primary/40"></span>
            <span className="micro-label">Exclusividade & Tradição</span>
          </div>
          <h1 className="editorial-title mb-10 text-text-primary">
            Estilo não é evento.<br />
            <span className="gold-text-gradient italic font-serif lowercase">É constância.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl font-light leading-relaxed mb-12">
            Tenha acesso <span className="text-text-primary font-medium border-b border-gold-primary/30">ILIMITADO</span> à barbearia mais premium de São Paulo por um valor fixo mensal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#planos" className="premium-button px-12 py-5 text-sm">
              QUERO MEU ACESSO <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-4 px-6">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-9 h-9 rounded-full border-2 border-piano-black" referrerPolicy="no-referrer" />
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-text-secondary">
                +800 Membros Ativos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-gold-primary/40">
      <ArrowDown size={24} />
    </div>
  </section>
);

const TheProblem = () => (
  <section className="py-32 bg-piano-black relative">
    <div className="container-premium">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/5">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-piano-dark rounded-3xl border border-gold-primary/20 p-8 hidden md:flex flex-col justify-center">
            <p className="text-4xl font-display font-bold text-gold-primary mb-1">50%</p>
            <p className="micro-label leading-tight opacity-70">Economia média mensal</p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <span className="micro-label mb-6 block">O Problema</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight text-text-primary">
            Manter o visual impecável <span className="text-gold-primary/60 italic font-serif">custa caro.</span>
          </h2>
          <div className="space-y-6 text-lg text-text-secondary font-light leading-relaxed">
            <p>Você sabe como é: você corta o cabelo, fica ótimo por uma semana, e depois começa a perder o corte. Mas você espera mais 2 semanas para não gastar de novo.</p>
            <p className="border-l-2 border-gold-primary/20 pl-6 italic text-text-primary/60">"O homem de sucesso não pode se dar ao luxo de estar com o visual 'mais ou menos' metade do mês."</p>
            <p>No Clube M Black, você elimina essa barreira. Quer ajustar o pezinho toda semana? <span className="text-text-primary font-medium">Pode.</span> Quer cortar a cada 10 dias? <span className="text-text-primary font-medium">Pode.</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ValueStack = () => {
  const items = [
    { title: "Cortes Ilimitados", value: "R$ 450,00", desc: "Mantenha o degradê sempre fresco, sem limites." },
    { title: "Barba Ilimitada", value: "R$ 400,00", desc: "Alinhamento e hidratação sempre que precisar." },
    { title: "Agendamento VIP", value: "R$ 150,00", desc: "Prioridade total nos horários de pico." },
    { title: "Produtos Premium", value: "R$ 100,00", desc: "Uso de pomadas e óleos de alto padrão." },
    { title: "Experiência M", value: "Inestimável", desc: "Ambiente exclusivo, café e cerveja gelada." },
    { title: "Sem Fidelidade", value: "Liberdade", desc: "Cancele quando quiser, sem multas." },
  ];

  return (
    <section id="beneficios" className="py-32 bg-piano-dark">
      <div className="container-premium">
        <div className="text-center mb-20">
          <span className="micro-label mb-6 block">Benefícios</span>
          <h2 className="editorial-title text-text-primary">O que você <span className="gold-text-gradient italic font-serif lowercase">recebe:</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="premium-card p-10 group hover:border-gold-primary/50 transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-display font-bold uppercase tracking-widest text-text-primary">{item.title}</h3>
                <span className="text-gold-primary/40 font-tech text-[10px] font-bold">{item.value}</span>
              </div>
              <p className="text-text-secondary text-sm font-light leading-relaxed group-hover:text-text-primary/70 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Ricardo Santos", role: "Empresário", text: "Hoje eu vou toda semana, meu visual tá sempre impecável e eu gasto menos que antes. O Clube M Black mudou meu jogo." },
    { name: "Felipe Oliveira", role: "Advogado", text: "A praticidade de não precisar pagar a cada visita é incrível. O agendamento pelo app é rápido e o atendimento é o melhor de SP." },
    { name: "Gustavo Lima", role: "Arquiteto", text: "O plano que não compromete o limite do cartão foi o diferencial. Faço barba e cabelo ilimitado e estou sempre pronto." },
  ];

  return (
    <section id="depoimentos" className="py-32 bg-piano-black">
      <div className="container-premium">
        <div className="text-center mb-20">
          <span className="micro-label mb-6 block">Social Proof</span>
          <h2 className="editorial-title text-text-primary">Quem já é <span className="gold-text-gradient italic font-serif lowercase">M Black:</span></h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="premium-card p-10 relative">
              <Quote className="absolute top-6 right-6 text-gold-primary/5" size={48} />
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={12} className="fill-gold-primary/60 text-gold-primary/60" />)}
              </div>
              <p className="text-lg font-light italic text-text-secondary mb-8 leading-relaxed">"{r.text}"</p>
              <div>
                <p className="font-display font-bold text-gold-primary text-xs uppercase tracking-widest">{r.name}</p>
                <p className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    { 
      name: "BARBA BLACK", 
      price: "159", 
      features: ["Barba ilimitada", "Toalha quente", "Esfoliação facial", "Produtos premium"],
      highlight: false
    },
    { 
      name: "CORTE BLACK", 
      price: "149", 
      features: ["Corte ilimitado", "Lavagem inclusa", "Finalização premium", "Pézinho sempre limpo"],
      highlight: true,
      tag: "MAIS ESCOLHIDO"
    },
    { 
      name: "FULL BLACK", 
      price: "260", 
      features: ["Corte + Barba ilimitados", "Todos os benefícios", "Cerveja de cortesia", "Atendimento VIP"],
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-32 bg-piano-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-premium-gradient opacity-50 z-0"></div>
      <div className="container-premium relative z-10">
        <div className="text-center mb-24">
          <span className="micro-label mb-6 block">Assinatura</span>
          <h2 className="editorial-title mb-4 text-text-primary">Escolha seu <span className="gold-text-gradient italic font-serif lowercase">Arsenal.</span></h2>
          <p className="micro-label text-text-secondary">Sem fidelidade • Cancele quando quiser</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className={`premium-card p-12 flex flex-col relative ${plan.highlight ? 'premium-card-highlight' : ''}`}
            >
              {plan.tag && (
                <div className="absolute top-6 right-6 bg-gold-primary text-piano-black px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                  {plan.tag}
                </div>
              )}
              
              <h3 className="text-xl font-display font-bold mb-10 tracking-widest text-text-primary">{plan.name}</h3>
              <div className="mb-12">
                <span className="text-text-secondary text-xs font-bold align-top mt-2 inline-block">R$</span>
                <span className="text-7xl font-display font-bold text-gold-primary leading-none">{plan.price}</span>
                <span className="text-text-secondary text-xs font-bold">/mês</span>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-text-secondary font-light">
                    <CheckCircle2 size={14} className="text-gold-primary/40" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`premium-button w-full ${!plan.highlight ? 'bg-transparent border border-gold-primary/30 text-gold-primary hover:bg-gold-primary/10' : ''}`}>
                ASSINAR AGORA
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Tem tempo de fidelidade?", a: "Não. Você pode cancelar quando quiser, sem multas ou burocracia." },
    { q: "Como funciona o agendamento?", a: "Você terá acesso ao nosso sistema online. Como membro, você tem prioridade total." },
    { q: "Compromete o limite do meu cartão?", a: "Não! Utilizamos o sistema de cobrança recorrente, igual à Netflix." },
    { q: "Posso usar em qualquer unidade?", a: "Sim! Sua assinatura é válida em todas as nossas unidades em São Paulo." },
  ];

  return (
    <section id="faq" className="py-32 bg-piano-black">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="micro-label mb-6 block">Dúvidas</span>
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-text-primary">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group premium-card !bg-transparent !rounded-2xl">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <h3 className="text-sm font-display font-bold uppercase tracking-widest group-open:text-gold-primary transition-colors text-text-primary">{f.q}</h3>
                <ChevronRight size={16} className="text-gold-primary/40 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-text-secondary text-sm font-light leading-relaxed">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-40 bg-piano-black relative overflow-hidden text-center">
    <div className="absolute inset-0 z-0 opacity-10">
      <img src="https://i.imgur.com/5F3nvmj.jpeg" alt="Fachada" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
    </div>
    <div className="relative z-10 container-premium">
      <h2 className="editorial-title mb-10 text-text-primary">
        Sua imagem é seu <br />
        <span className="gold-text-gradient italic font-serif lowercase">maior ativo.</span>
      </h2>
      <p className="text-lg text-text-secondary mb-12 font-light max-w-2xl mx-auto leading-relaxed">
        Não deixe para amanhã o cuidado que você merece hoje. Garanta sua vaga no Clube M Black.
      </p>
      <a href="#planos" className="premium-button px-16 py-6 text-sm mx-auto">
        QUERO SER M BLACK
      </a>
      <p className="mt-10 text-gold-primary/60 text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">
        ⚠️ APENAS 7 VAGAS RESTANTES
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-piano-black py-24 border-t border-white/5">
    <div className="container-premium">
      <div className="grid lg:grid-cols-12 gap-16 mb-20">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 border border-gold-primary/30 rounded-full flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-gold-primary">M</span>
            </div>
            <span className="text-lg font-display font-bold tracking-[0.4em] text-text-primary">BARBEARIA</span>
          </div>
          <p className="text-text-secondary text-sm max-w-md leading-relaxed font-light">
            Referência em barbearia clássica e atendimento premium em São Paulo. O Clube M Black é o primeiro programa de assinatura focado na constância do estilo masculino.
          </p>
        </div>
        
        <div className="lg:col-span-3">
          <h4 className="micro-label mb-8">Unidades</h4>
          <div className="space-y-8">
            <div>
              <p className="text-gold-primary/60 font-display font-bold uppercase tracking-widest text-[10px] mb-2">Alto da Boa Vista</p>
              <p className="text-text-secondary text-xs font-light">Rua Darwin, 590<br />São Paulo - SP</p>
            </div>
            <div>
              <p className="text-gold-primary/60 font-display font-bold uppercase tracking-widest text-[10px] mb-2">Campo Belo</p>
              <p className="text-text-secondary text-xs font-light">Rua João de Sousa Dias, 377<br />São Paulo - SP</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <h4 className="micro-label mb-8">Conecte-se</h4>
          <div className="flex gap-4 mb-8">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-primary/40 hover:text-gold-primary transition-all text-text-secondary">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/5511999999999" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-primary/40 hover:text-gold-primary transition-all text-text-secondary">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-text-secondary/30 text-[9px] uppercase tracking-[0.4em]">
          © 2024 M Barbearia • São Paulo - SP
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-text-secondary/30 text-[9px] uppercase tracking-[0.4em] hover:text-gold-primary transition-colors">Privacidade</a>
          <a href="#" className="text-text-secondary/30 text-[9px] uppercase tracking-[0.4em] hover:text-gold-primary transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-piano-black selection:bg-gold-primary selection:text-piano-black overflow-x-hidden">
      <Nav />
      <Hero />
      <TheProblem />
      <ValueStack />
      <Testimonials />
      <Plans />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
