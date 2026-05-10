import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Users, 
  Trophy, 
  Bus,
  Menu,
  X,
  ArrowRight,
  GraduationCap,
  Image as ImageIcon,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const HERO_SLIDES = [
  {
    image: "https://theindianschool.in/uploads/posts/L-16972674476964-pre-primary-magic-years-main.jpg",
    title: "Nurturing Minds, Building Futures",
    subtitle: "Excellence in Education since 1995"
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop",
    title: "Holistic Development for Every Child",
    subtitle: "Empowering students through academics and co-curricular activities"
  },
  {
    image: "https://i.ibb.co/3mCc8kcW/3439.jpg",
    title: "A Vibrant Community of Learners",
    subtitle: "Where curiosity meets opportunity"
  }
];

const NOTICES = [
  "Admissions open for Academic Session 2024-25",
  "Annual Sports Day scheduled for October 15th",
  "Parent-Teacher Meeting next Saturday at 9:00 AM",
  "Inter-school Debate competition results announced",
  "Summer camp registration starts from May 20th"
];

const ALUMNI = [
  {
    name: "Dr. Rohan Mehra",
    batch: "Class of 2005",
    achievement: "Cardiovascular Surgeon at AIIMS",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    quote: "Santsar gave me the moral compass and academic foundation that defined my career in medicine."
  },
  {
    name: "Sanya Malhotra",
    batch: "Class of 2012",
    achievement: "Lead Engineer at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    quote: "The curiosity sparked in the science labs at Santsar still drives my work in technology today."
  },
  {
    name: "Capt. Vikram Singh",
    batch: "Class of 2008",
    achievement: "Indian Army Officer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    quote: "The discipline and leadership skills I learned on the Santsar sports field are my greatest assets."
  }
];

const GALLERY = [
  { title: "Science Fair 2023", category: "Academic", image: "https://m.media-amazon.com/images/I/61II6Kf79PL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Annual Sports Day", category: "Sports", image: "https://www.hpsbegumpet.org.in/wp-content/uploads/2023/11/2A2A0154-1024x683.jpg" },
  { title: "Cultural Fest", category: "Cultural", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070" },
  { title: "Robotics Workshop", category: "Technology", image: "https://images.pexels.com/photos/17260648/pexels-photo-17260648/free-photo-of-robotics-event-for-children.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Art Exhibition", category: "Creative", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5T8rtx8_5sneX548gBlKkBueYhoV0ETgKNA&s" },
  { title: "Graduation 2023", category: "Ceremony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGeQg0CkazrnHSYgSF_-jXsjXmPbUU0gFQXA&s" }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<'home' | 'admission'>('home');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Header */}
      <div id="top-bar" className="bg-primary text-white py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2 hidden sm:flex">
            <Mail size={14} />
            <span>info@santsarschool.edu.in</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <div className="flex items-center gap-2 mr-4">
            <MapPin size={14} />
            <span>Sector 15, New Delhi, India</span>
          </div>
          <div className="flex items-center gap-3">
            <Facebook size={16} className="cursor-pointer hover:text-secondary transition-colors" />
            <Twitter size={16} className="cursor-pointer hover:text-secondary transition-colors" />
            <Instagram size={16} className="cursor-pointer hover:text-secondary transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav id="main-nav" className="sticky top-0 z-50 bg-white border-b border-gray-200 py-1.5 px-4 md:px-8 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <img 
            src="https://www.santsarpublicschool.in/images/logo.png" 
            alt="Santsar Public School Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {['Home', 'About Us', 'Academics', 'Admissions', 'Gallery', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => {
                setView('home');
                const id = item.toLowerCase().replace(' ', '-');
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="hover:text-primary transition-colors hover:border-b-2 hover:border-primary pb-1"
            >
              {item}
            </button>
          ))}
          <a href="#" className="flex items-center gap-1.5 text-primary font-bold hover:opacity-80 transition-opacity">
            <FileText size={16} />
            Public Disclosure
          </a>
          <button 
            onClick={() => setView('admission')}
            className="bg-primary text-white px-5 py-1.5 rounded hover:bg-opacity-90 transition-all font-semibold"
          >
            Apply Now
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-[88px] bg-white shadow-2xl z-40 p-6 flex flex-col gap-4 border-t border-gray-100 h-screen overflow-y-auto"
          >
            <div className="flex justify-center mb-4">
              <img 
                src="https://www.santsarpublicschool.in/images/logo.png" 
                alt="Logo" 
                className="h-14"
                referrerPolicy="no-referrer"
              />
            </div>
            {['Home', 'About Us', 'Academics', 'Admissions', 'Gallery', 'Contact'].map((item) => (
              <button 
                key={item} 
                className="text-left text-lg font-medium text-gray-800" 
                onClick={() => {
                  setView('home');
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const id = item.toLowerCase().replace(' ', '-');
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                {item}
              </button>
            ))}
            <a href="#" className="flex items-center gap-2 text-primary font-bold py-2 border-t border-gray-100 mt-2">
              <FileText size={20} />
              Public Disclosure
            </a>
            <button 
              onClick={() => {
                setView('admission');
                setIsMenuOpen(false);
              }}
              className="bg-primary text-white py-3 rounded-md font-bold mt-2"
            >
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-grow"
          >
        {/* Hero Section */}
        <section id="home" className="relative h-[55vh] md:h-[65vh] overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img 
                src={HERO_SLIDES[currentSlide].image} 
                alt={HERO_SLIDES[currentSlide].title}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="max-w-3xl"
                >
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight font-serif drop-shadow-lg">
                    {HERO_SLIDES[currentSlide].title}
                  </h2>
                  <p className="text-base md:text-xl text-secondary font-medium mb-8 max-w-xl mx-auto italic drop-shadow-md">
                    "{HERO_SLIDES[currentSlide].subtitle}"
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-primary text-white border-2 border-primary px-8 py-2.5 rounded-full font-bold hover:bg-transparent hover:border-white transition-all shadow-xl text-sm">
                      Explore Campus
                    </button>
                    <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/60 px-8 py-2.5 rounded-full font-bold hover:bg-white hover:text-primary transition-all text-sm">
                      Check Results
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all z-20"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all z-20"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {HERO_SLIDES.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-secondary scale-125 shadow-[0_0_8px_#FFD700]' : 'bg-white/40 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </section>

        {/* Notice Board Banner */}
        <div className="bg-secondary/15 py-3 px-4 overflow-hidden relative border-y border-secondary/30">
          <div className="max-w-7xl mx-auto flex items-center">
            <div className="bg-primary text-secondary px-4 py-1.5 rounded-full font-black text-[9px] md:text-xs uppercase whitespace-nowrap z-10 shadow-lg border border-secondary/20 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary"></span>
              </span>
              Latest News
            </div>
            <div className="ml-6 overflow-hidden w-full relative">
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-secondary/5 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-secondary/5 to-transparent z-10" />
              <motion.div 
                animate={{ x: [0, -2000] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex gap-20 whitespace-nowrap py-1"
              >
                {[...NOTICES, ...NOTICES, ...NOTICES].map((notice, i) => (
                  <span key={i} className="flex items-center gap-3 font-semibold text-primary/80 hover:text-primary transition-colors cursor-default text-xs md:text-sm">
                    <Trophy size={14} className="text-secondary" />
                    {notice}
                    <span className="mx-4 text-gray-300">|</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <section id="about-us" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(128,0,0,0.12)] relative z-10">
                <img 
                   src="https://i.ibb.co/svcG35cw/image.png" 
                  alt="Principal"
                  className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-64 bg-white p-6 rounded-xl shadow-2xl z-20 border-l-[4px] border-primary">
                <p className="font-serif italic text-gray-600 mb-3 leading-relaxed text-xs">"It is a wonderful feeling to reach you through this prospectus which will provide useful information about Academic facilities, environment of the school and outstanding performances of our brilliant students throughout the year."</p>
                <div className="h-[1.5px] w-10 bg-secondary mb-3" />
                <p className="font-black text-primary text-lg font-serif">S K JHA</p>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[.15em] mt-1">Principal</p>
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-[60px] -z-10" />
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-10 bg-secondary" />
                <h4 className="text-secondary font-black tracking-[.2em] uppercase text-[10px]">Since 1995</h4>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1.1] font-serif">Cultivating Wisdom, Shaping Champions</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-base font-light">
                <p>
                  Santsar Public School has been at the forefront of educational excellence for nearly three decades. We don't just teach subjects; we inspire a love for learning that lasts a lifetime.
                </p>
                <p>
                  Our campus is a sanctuary of knowledge where tradition meets innovation. We provide a platform where students can explore their passions, from the scientific laboratories to the sports arenas.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Academics Section */}
        <section id="academics" className="bg-gray-50 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[80px]" />
          
          <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
              <div className="max-w-xl">
                <h4 className="text-secondary font-black tracking-[0.2em] uppercase text-[10px] mb-2">Academic Streams</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Pathway to Excellence</h2>
              </div>
              <div className="flex gap-3">
                <button className="p-3 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-3 rounded-full bg-primary text-white hover:bg-black transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Foundation Years",
                  level: "Pre-K to Grade 2",
                  desc: "A nurturing environment focused on play-based learning and emotional intelligence.",
                  img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1974&auto=format&fit=crop"
                },
                {
                  title: "Middle School",
                  level: "Grade 3 to Grade 8",
                  desc: "Transitioning to formal academics with interdisciplinary projects and research skills.",
                  img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  title: "Senior Secondary",
                  level: "Grade 9 to Grade 12",
                  desc: "Rigorous CBSE curriculum spanning Science, Commerce, and Humanities streams.",
                  img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] group"
                >
                  <div className="h-[250px] overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="text-secondary font-black text-[10px] uppercase tracking-widest mb-1">{item.level}</p>
                      <h3 className="text-lg font-bold font-serif">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                    <button className="w-full flex items-center justify-between group-hover:text-primary font-bold border-t border-gray-100 pt-5 text-sm">
                      View Curriculum <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Section */}
        <section id="alumni" className="py-16 px-4 md:px-8 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-3 mb-3">
                <div className="h-[1px] w-10 bg-secondary" />
                <h4 className="text-secondary font-black tracking-[0.2em] uppercase text-[10px]">Our Pride</h4>
                <div className="h-[1px] w-10 bg-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Global Alumni Network</h2>
              <p className="text-base text-white/70 max-w-xl mx-auto">
                Our former students are making their mark in diverse fields across the globe.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {ALUMNI.map((person, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[1.5rem] flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-3 border-secondary/30 group-hover:border-secondary transition-all">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-0.5">{person.name}</h3>
                  <p className="text-secondary font-black text-[9px] uppercase tracking-widest mb-3">{person.batch}</p>
                  <div className="h-px w-6 bg-white/20 mb-4" />
                  <p className="text-xs font-medium text-secondary/90 mb-3">{person.achievement}</p>
                  <p className="text-white/60 italic text-xs leading-relaxed">
                    "{person.quote}"
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-primary transition-all font-bold text-xs flex items-center gap-2 mx-auto">
                <GraduationCap size={16} />
                Join Alumni Association
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div className="max-w-xl">
                   <h4 className="text-primary font-black tracking-[0.2em] uppercase text-[10px] mb-2">Glimpses of Santsar</h4>
                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Recent Activities</h2>
                </div>
                <button className="text-primary font-bold flex items-center gap-1.5 hover:gap-3 transition-all group text-sm">
                   View Full Gallery <ArrowRight size={18} />
                </button>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {GALLERY.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  >
                     <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <span className="text-secondary font-black text-[8px] uppercase tracking-widest mb-1">{item.category}</span>
                        <h3 className="text-sm font-bold text-white font-serif">{item.title}</h3>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* Features / Why Choose Us */}
        <section className="py-16 bg-primary text-white overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-50 to-transparent" />
           
           <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <h4 className="text-secondary font-black tracking-widest uppercase text-[10px] mb-4">Why Santsar?</h4>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 leading-tight">Setting Benchmark in Education</h2>
                    
                    <div className="space-y-6">
                       {[
                          { title: "Digital Classroom", desc: "Every classroom is equipped with smart interactive boards." },
                          { title: "24/7 Security", desc: "Comprehensive CCTV coverage and professional security staff." },
                          { title: "Creative Hubs", desc: "Dedicated studios for performing arts, music, and dance." }
                       ].map((item, i) => (
                          <div key={i} className="flex gap-4">
                             <div className="w-10 h-10 shrink-0 bg-white/10 rounded-lg flex items-center justify-center text-secondary">
                                <span className="text-lg font-black font-serif">{i + 1}</span>
                             </div>
                             <div>
                                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="relative">
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                       <motion.div initial={{ y: 0 }} whileInView={{ y: -20 }} viewport={{ once: true }} transition={{ duration: 1 }} className="space-y-4 pt-10">
                          <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071" className="rounded-xl shadow-xl" referrerPolicy="no-referrer" />
                          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104" className="rounded-xl shadow-xl" referrerPolicy="no-referrer" />
                       </motion.div>
                       <motion.div initial={{ y: 0 }} whileInView={{ y: 20 }} viewport={{ once: true }} transition={{ duration: 1 }} className="space-y-4">
                          <img src="https://images.unsplash.com/photo-1497633762265-9a177c809852?q=80&w=2070" className="rounded-xl shadow-xl" referrerPolicy="no-referrer" />
                          <div className="bg-secondary p-6 rounded-xl text-primary text-center">
                             <p className="text-3xl font-black mb-1">28+</p>
                             <p className="font-bold uppercase tracking-widest text-[8px]">Years Journey</p>
                          </div>
                       </motion.div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Admissions CTA */}
        <section id="admissions" className="py-16 px-4">
           <div className="max-w-5xl mx-auto rounded-3xl bg-white overflow-hidden shadow-xl flex flex-col md:flex-row border border-gray-100">
              <div className="md:w-1/2 p-10 md:p-14">
                 <h4 className="text-primary font-black tracking-widest uppercase text-[10px] mb-3">Admissions 2024-25</h4>
                 <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6 leading-tight">Your Child's Bright Future Starts Here</h2>
                 <p className="text-gray-500 text-base mb-8 leading-relaxed">
                    Join the Santsar family. We follow a merit-based admission policy that values diversity and holistic potential.
                 </p>
                 <div className="space-y-3 mb-10">
                    {['Online Application Process', 'Merit-based Admissions', 'Scholarship Programs'].map(item => (
                       <div key={item} className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                             <ChevronRight size={12} />
                          </div>
                          <p className="font-semibold text-gray-700 text-sm">{item}</p>
                       </div>
                    ))}
                 </div>
                 <button 
                    onClick={() => setView('admission')}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
                 >
                    Register For Inquiry
                 </button>
              </div>
              <div className="md:w-1/2 bg-gray-100 relative min-h-[300px]">
                 <img 
                    src="https://theindianschool.in/uploads/posts/L-16972674476964-pre-primary-magic-years-main.jpg" 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-primary/20 backdrop-grayscale-[0.5]" />
              </div>
           </div>
        </section>
      </motion.main>
    ) : (
      <motion.main
        key="admission"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        className="flex-grow py-20 px-4 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-gray-500 font-bold mb-8 hover:text-primary transition-colors"
          >
            <ChevronLeft size={20} /> Back to Home
          </button>

          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-primary p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Admission Inquiry 2024-25</h2>
                <p className="text-white/70 max-w-xl text-lg">Please fill out the form below. Our admissions team will contact you within 24-48 working hours.</p>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            </div>

            <form className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => {
              e.preventDefault();
              alert("Inquiry submitted successfully! We will get back to you soon.");
              setView('home');
            }}>
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-6 flex items-center gap-3">
                  <Users size={24} className="text-primary" /> Student Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Student's Full Name *</label>
                    <input required type="text" className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Gender *</label>
                    <select required className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all">
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Date of Birth *</label>
                    <input required type="date" className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Seeking Admission For Class *</label>
                    <select required className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all">
                      <option value="">Select Class</option>
                      {['Pre-Nursery', 'Nursery', 'KG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th Science', '11th Commerce', '11th Humanities'].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-6 flex items-center gap-3">
                  <Phone size={24} className="text-primary" /> Guardian Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Parent/Guardian Name *</label>
                    <input required type="text" className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Michael Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Relation with Student *</label>
                    <input required type="text" className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Father" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Mobile Number *</label>
                    <input required type="tel" className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address *</label>
                    <input required type="email" className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="parent@example.com" />
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-6 flex items-center gap-3">
                  <MapPin size={24} className="text-primary" /> Additional Info
                </h3>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Residential Address *</label>
                  <textarea required className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all min-h-[100px]" placeholder="Street, City, State, PIN"></textarea>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 mt-8">
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-start gap-4 mb-8">
                  <AlertCircle className="text-blue-500 shrink-0 mt-1" size={20} />
                  <p className="text-sm text-blue-700 italic">
                    By submitting this form, you agree to receive communications from Santsar Public School regarding the admission process. 
                  </p>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all">
                  Submit Admission Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.main>
    )}
  </AnimatePresence>

      {/* Footer */}
      <footer id="contact" className="bg-[#050608] text-white pt-16 pb-8 overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
         
         <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
               <div className="flex items-center gap-3 mb-6">
                  <img 
                    src="https://www.santsarpublicschool.in/images/logo.png" 
                    alt="Logo" 
                    className="h-12 brightness-0 invert"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                  Creating global leaders of tomorrow with the spark of creativity and a foundation of cultural values.
               </p>
               <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-primary hover:border-primary transition-all cursor-pointer group">
                       <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    </div>
                  ))}
               </div>
            </div>

            <div>
               <h4 className="text-base font-bold mb-6 font-serif border-l-4 border-primary pl-4 uppercase tracking-wider">Education</h4>
               <ul className="space-y-3 text-gray-500 font-medium text-sm">
                  {['Preschool Wing', 'Primary Section', 'Middle School', 'High School', 'Higher Secondary', 'Co-Curriculars'].map(item => (
                    <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                       <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:w-3 group-hover:bg-secondary transition-all" />
                       {item}
                    </li>
                  ))}
               </ul>
            </div>

            <div>
               <h4 className="text-base font-bold mb-6 font-serif border-l-4 border-primary pl-4 uppercase tracking-wider">Quick Contact</h4>
               <div className="space-y-6">
                  <div className="flex gap-3 group">
                     <div className="w-8 h-8 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <MapPin size={16} />
                     </div>
                     <p className="text-gray-500 text-xs leading-relaxed">Sector 15, Rohini, New Delhi, 110085, India</p>
                  </div>
                  <div className="flex gap-3 group">
                     <div className="w-8 h-8 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Phone size={16} />
                     </div>
                     <p className="text-gray-500 text-xs leading-relaxed">+91 011-2345678<br />+91 98765 43210</p>
                  </div>
                  <div className="flex gap-3 group">
                     <div className="w-8 h-8 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Mail size={16} />
                     </div>
                     <p className="text-gray-500 text-xs leading-relaxed">info@santsarschool.edu.in</p>
                  </div>
               </div>
            </div>
            
            <div>
               <h4 className="text-base font-bold mb-6 font-serif border-l-4 border-primary pl-4 uppercase tracking-wider">School Hours</h4>
               <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                     <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Summer (Apr-Oct)</p>
                     <p className="text-gray-400 font-medium text-xs">07:30 AM — 01:30 PM</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                     <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Winter (Nov-Mar)</p>
                     <p className="text-gray-400 font-medium text-xs">08:00 AM — 02:00 PM</p>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <p>© 2024 Santsar Public School. Affiliated to CBSE. All Rights Reserved.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
               <a href="#" className="hover:text-secondary transition-colors">Admin Login</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
