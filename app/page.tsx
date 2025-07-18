"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  ArrowRight,
  Star,
  Shield,
  Award,
  Calendar,
  Users,
  Target,
  Cog,
  Menu,
  X,
  Mail,
} from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast" // Import useToast

const heroSlides = [
  {
    id: 1,
    title: "PRECISÃO QUE TRANSFORMA",
    subtitle: "METAL EM EXCELÊNCIA",
    description: "Usinagem de precisão com tecnologia de ponta e quase uma década de experiência no mercado",
    cta: "Solicite seu Orçamento",
    bgGradient: "from-blue-900 via-blue-800 to-blue-700", // Adjusted
    image: "/images/cnc-machine-1.jpg",
  },
  {
    id: 2,
    title: "SOLUÇÕES INDUSTRIAIS",
    subtitle: "SOB MEDIDA",
    description: "Desde protótipos até produção seriada, entregamos qualidade, confiabilidade e excelência técnica",
    cta: "Conheça Nossa História",
    bgGradient: "from-blue-900 via-blue-800 to-blue-700", // Adjusted
    image: "/images/cnc-milling.jpg",
  },
  {
    id: 3,
    title: "TECNOLOGIA DE PONTA",
    subtitle: "EQUIPE QUALIFICADA",
    description: "Investimento contínuo em inovação e processos eficientes para os mais altos padrões do mercado",
    cta: "Veja Nossos Serviços",
    bgGradient: "from-blue-800 via-blue-900 to-blue-700", // Adjusted
    image: "/images/cnc-precision.jpg",
  },
  {
    id: 4,
    title: "CORTE A LASER",
    subtitle: "PRECISÃO MILIMÉTRICA",
    description: "Tecnologia avançada para acabamentos perfeitos e tolerâncias rigorosas em cada projeto",
    cta: "Saiba Mais",
    bgGradient: "from-blue-900 via-blue-800 to-blue-700", // Adjusted from orange
    image: "/images/laser-cutting.jpg",
  },
  {
    id: 5,
    title: "QUASE UMA DÉCADA",
    subtitle: "DE EXCELÊNCIA",
    description: "Desde 2015, consolidamos nossa posição como referência no setor de usinagem de precisão",
    cta: "Nossa Trajetória",
    bgGradient: "from-blue-800 via-blue-900 to-blue-700", // Adjusted
    image: "/images/lathe-machine.jpg",
  },
]

const companyValues = [
  {
    icon: Target,
    title: "Precisão no Detalhe",
    description: "Cada peça usinada atende aos mais altos padrões do mercado com tolerâncias rigorosas",
    image: "/images/cnc-precision.jpg",
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Mais do que peças, entregamos confiança através da qualidade e seriedade no relacionamento",
    image: "/images/cutting-tool.jpg",
  },
  {
    icon: Cog,
    title: "Inovação Contínua",
    description: "Investimento constante em tecnologia de ponta e processos eficientes",
    image: "/images/cnc-machine-1.jpg",
  },
]

const testimonials = [
  {
    name: "João Silva",
    company: "Metalúrgica Industrial ABC",
    text: "Parceria sólida há mais de 6 anos. Qualidade excepcional e prazos sempre cumpridos!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    company: "Indústria Automotiva XYZ",
    text: "Precisão incomparável e atendimento personalizado. Recomendo sem hesitar.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    company: "Fábrica de Componentes 123",
    text: "Do protótipo à produção seriada, a Usinner sempre entrega excelência técnica.",
    rating: 5,
  },
]

const services = [
  {
    title: "Usinagem CNC",
    description: "Precisão milimétrica em peças complexas com tecnologia de ponta",
    image: "/images/cnc-milling.jpg",
  },
  {
    title: "Usinagem de Precisão",
    description: "Tolerâncias rigorosas e acabamento superior em cada peça",
    image: "/images/cnc-precision.jpg",
  },
  {
    title: "Usinagem de Protótipos",
    description: "Desenvolvimento rápido de protótipos para validação de projetos",
    image: "/images/cnc-machine-1.jpg",
  },
  {
    title: "Usinagem Seriada",
    description: "Produção em série mantendo qualidade e prazos rigorosos",
    image: "/images/cutting-tool.jpg",
  },
]

const companyStats = [
  {
    icon: Calendar,
    number: "2015",
    label: "Fundada em",
    description: "28 de outubro",
  },
  {
    icon: Award,
    number: "9+",
    label: "Anos de",
    description: "Experiência",
  },
  {
    icon: Users,
    number: "100+",
    label: "Clientes",
    description: "Satisfeitos",
  },
  {
    icon: Cog,
    number: "1000+",
    label: "Projetos",
    description: "Entregues",
  },
]

const navigationItems = [
  { name: "USINNER", href: "#home" },
  { name: "CNC", href: "#carousel" },
  { name: "USINAGEM", href: "#services" },
  { name: "VALORES", href: "#values" },
  { name: "CONTATO", href: "#contact" },
]

export default function UsinnerLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toast } = useToast() // Initialize useToast

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const copyEmailToClipboard = () => {
    const email = "addproject.mkt@gmail.com"
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast({
          title: "E-mail copiado!",
          description: "O endereço de e-mail foi copiado para a área de transferência.",
        })
      })
      .catch((err) => {
        console.error("Falha ao copiar o e-mail: ", err)
        toast({
          title: "Erro ao copiar",
          description: "Não foi possível copiar o e-mail. Por favor, tente novamente.",
          variant: "destructive",
        })
      })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <button onClick={() => scrollToSection("#home")} className="flex items-center space-x-3 group">
              <div className="w-14 h-14 relative group-hover:scale-110 transition-transform duration-300">
                <Image src="/images/usinner-logo-new.png" alt="USINNER Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-black text-sky-500 group-hover:text-blue-600 transition-colors duration-300">
                USINNER
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 hover:text-blue-600 font-semibold transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-700 hover:text-blue-600 font-semibold transition-colors duration-300 text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-white pt-16 overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-2/3 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 transform skew-x-12 origin-top-right scale-110"></div>{" "}
            {/* Adjusted */}
          </div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="space-y-6">
                <div className="w-16 h-1 bg-blue-600"></div>
                <h1 className="text-6xl lg:text-7xl font-black text-sky-500 leading-none">USINNER</h1>
                <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 tracking-wide">USINAGEM CNC</h2>{" "}
                {/* Adjusted */}
                <p className="text-lg text-blue-700 leading-relaxed max-w-lg">
                  {" "}
                  {/* Adjusted */}
                  Precisão que transforma metal em excelência. Soluções industriais sob medida desde 2015.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold"
                  onClick={() => scrollToSection("#contact")}
                >
                  ENTRE EM CONTATO
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-bold bg-transparent"
                  onClick={() => scrollToSection("#services")}
                >
                  SAIBA MAIS
                </Button>
              </div>
            </div>

            {/* Right Content - Main Image */}
            <div className="relative z-10">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/cnc-machine-1.jpg"
                  alt="Máquina CNC USINNER"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/cnc-milling.jpg"
                alt="Usinagem CNC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/cnc-precision.jpg"
                alt="Precisão em usinagem"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/cutting-tool.jpg"
                alt="Ferramentas de corte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-950 to-blue-800 text-white">
        {" "}
        {/* Adjusted */}
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {" "}
                  {/* Adjusted */}
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-blue-300 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-200">{stat.description}</div> {/* Adjusted */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section id="carousel" className="relative h-[90vh] overflow-hidden px-4 py-12">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Carousel Slides */}
        <div className="absolute inset-4 max-w-full mx-auto">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              {/* Background Image with Border */}
              <div className="absolute inset-0 border-4 border-white/30 rounded-lg">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-60 rounded-lg`} />
                <div className="absolute inset-0 bg-black/30 rounded-lg" />
              </div>

              <div className="relative h-full flex items-center justify-center">
                <div className="container mx-auto px-6 text-center">
                  <div
                    className={`text-white space-y-6 max-w-5xl mx-auto transform transition-all duration-1000 delay-300 ${
                      index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                  >
                    <div className="space-y-4">
                      <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight">{slide.title}</h1>
                      <h2 className="text-3xl lg:text-5xl font-light text-blue-300 tracking-wide">{slide.subtitle}</h2>
                    </div>

                    <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                      {" "}
                      {/* Adjusted */}
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl"
                        onClick={() => scrollToSection("#services")}
                      >
                        {slide.cta}
                        <ArrowRight className="ml-3 w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-6 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl z-10 border-2 border-white/20"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-6 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl z-10 border-2 border-white/20"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 h-3 bg-white rounded-full"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        {" "}
        {/* Adjusted */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-800 mb-6">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                {/* Adjusted */}
                Serviços
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Especialistas em usinagem de precisão, oferecendo soluções completas desde protótipos até produção seriada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white hover:shadow-2xl transition-all duration-700 hover:-translate-y-4"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="relative p-6 text-center space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50"></div> {/* Adjusted */}
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-800 mb-6">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Valores</span>{" "}
              {/* Adjusted */}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Qualidade, confiabilidade e excelência técnica em cada projeto desenvolvido
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-blue-50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    {" "}
                    {/* Adjusted */}
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="relative p-8 text-center space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        {" "}
        {/* Adjusted */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-800 mb-6">
              O que nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                {/* Adjusted */}
                clientes dizem
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Reconhecidos pela precisão no detalhe e seriedade no relacionamento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-slate-800">{testimonial.name}</div>
                    <div className="text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        {" "}
        {/* Adjusted */}
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-black mb-6">
              Entre em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Contato</span>{" "}
              {/* Adjusted */}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {" "}
              {/* Adjusted */}
              Pronto para transformar suas ideias em realidade? Entre em contato conosco!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a
                href="https://wa.me/554899151526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                <span className="font-bold">WhatsApp</span>
              </a>

              <div
                onClick={copyEmailToClipboard}
                className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:text-blue-300 shadow-lg"
              >
                <Mail className="w-6 h-6" />
                <span className="font-bold">addproject.mkt@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">
        {" "}
        {/* Adjusted */}
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 relative">
                <Image src="/images/usinner-logo-new.png" alt="USINNER Logo" fill className="object-contain" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-sky-400">USINNER</h4>
                <p className="text-sm text-blue-300 font-semibold">USINAGEM CNC</p> {/* Corrected from MACHINING */}
              </div>
            </div>
            <div className="text-blue-300 space-y-2">
              {" "}
              {/* Adjusted */}
              <p>Fundada em 28 de outubro de 2015</p>
              <p>Rua do Albatroz, 263 – Pedra Branca, Palhoça/SC</p>
              <p>Telefone: (48) 99151-5262 | E-mail: addproject.mkt@gmail.com</p>
              <p>
                © 2024 <span className="text-sky-400 font-semibold">USINNER</span> USINAGEM CNC - Precisão que
                transforma metal em excelência
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/554899151526" target="_blank" rel="noopener noreferrer" className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 animate-bounce">
            <Phone className="w-8 h-8 text-white" />
          </div>
        </a>
      </div>
    </div>
  )
}
