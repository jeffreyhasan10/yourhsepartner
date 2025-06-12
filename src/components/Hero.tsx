import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Shield, Users, TrendingUp, Play } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie').then(response => response.json()).then(data => setLottieData(data)).catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const stats = [
    {
      icon: Shield,
      value: "99.9%",
      label: "Compliance Rate",
      color: "text-ehs-600",
      bg: "bg-ehs-50"
    },
    {
      icon: Users,
      value: "500K+",
      label: "Protected Workers",
      color: "text-ehs-700",
      bg: "bg-ehs-100"
    },
    {
      icon: TrendingUp,
      value: "45%",
      label: "Incident Reduction",
      color: "text-ehs-800",
      bg: "bg-ehs-200"
    }
  ];

  return (
    <section
      className="overflow-hidden relative bg-gradient-to-br from-ehs-50 via-white to-ehs-100"
      id="hero"
      style={{
        padding: isMobile ? '100px 12px 60px' : '120px 20px 80px'
      }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ehs-gradient opacity-30 blur-3xl rounded-full animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-gradient opacity-20 blur-2xl rounded-full animate-float pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-ehs-200 opacity-10 blur-xl rounded-full pointer-events-none"></div>
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(236,245,255,0.15) 100%)",
        backdropFilter: "blur(2px)"
      }}></div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-ehs-200 rounded-full animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.4
              }}
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            {/* Floating badge */}
            <div className="pulse-chip mb-6 opacity-0 animate-fade-in flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-ehs-100" style={{
              animationDelay: "0.1s"
            }}>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ehs-500 text-white mr-2 text-xs font-bold shadow-md">01</span>
              <span className="font-semibold text-ehs-700 tracking-wide">EHS Management Excellence</span>
            </div>

            <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight opacity-0 animate-fade-in font-display drop-shadow-lg" style={{
              animationDelay: "0.3s"
            }}>
              House Your <span className="gradient-text bg-gradient-to-r from-ehs-500 via-primary to-ehs-700 bg-clip-text text-transparent">EHS Management System</span>
              <br className="hidden sm:inline" />
              on One Platform
            </h1>

            <p
              style={{ animationDelay: "0.5s" }}
              className="section-subtitle mt-6 mb-10 leading-relaxed opacity-0 animate-fade-in text-gray-700 font-normal text-lg sm:text-xl text-left max-w-2xl"
            >
              Your EHS management system is made up of policies, procedures and activities to help your business meet its health, safety and sustainability goals. Our cloud-based software gives you the essential tools to protect workers, remain compliant and enhance workplace safety.
            </p>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 opacity-0 animate-fade-in" style={{
              animationDelay: "0.6s"
            }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`stats-card text-center transition-all duration-300 hover:scale-105 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border border-ehs-100 py-6 px-2 flex flex-col items-center`}
                  style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)" }}
                >
                  <div className={`flex items-center justify-center mb-3 w-12 h-12 rounded-full ${stat.bg} shadow-inner animate-bounce-slow`}>
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{
              animationDelay: "0.8s"
            }}>
              <a
                href="#features"
                className="button-primary flex items-center justify-center group w-full sm:w-auto text-center px-7 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-ehs-500 via-primary to-ehs-700 text-white shadow-lg hover:from-primary hover:to-ehs-500 transition-all duration-200"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#demo"
                className="button-secondary flex items-center justify-center w-full sm:w-auto text-center group px-7 py-3 rounded-xl font-semibold text-lg bg-white/80 border border-ehs-200 text-primary shadow hover:bg-ehs-50 transition-all duration-200"
              >
                <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110 text-ehs-500" />
                Watch Demo
              </a>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="mt-12 opacity-0 animate-fade-in" style={{
              animationDelay: "1s"
            }}>
              <p className="text-ehs-600 font-medium mb-4">Trusted by Industry Leaders</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">ISO 14001 & 45001 Compliant</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Cloud-based Security</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 flex items-center justify-center">
            {/* Enhanced Floating badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 hover:scale-105 transition-transform">
              <div className="bg-gradient-to-r from-ehs-500 via-primary to-ehs-700 text-white px-6 py-2.5 rounded-full shadow-lg font-semibold text-base tracking-wide border border-white/30 backdrop-blur-md">
                YourHSEPartner
              </div>
            </div>

            {lottieData ? (
              <div className="relative z-10 animate-fade-in group" style={{
                animationDelay: "0.9s"
              }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-ehs-500/20 via-primary/20 to-ehs-700/20 rounded-3xl opacity-80 blur-xl group-hover:opacity-100 transition-opacity"></div>
                <div className="rounded-3xl shadow-2xl border border-ehs-100/50 bg-white/60 backdrop-blur-md overflow-hidden hover:shadow-ehs-500/20 transition-all">
                  <LottieAnimation
                    animationPath={lottieData}
                    className="w-full h-auto max-w-lg mx-auto relative z-10"
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>
            ) : (
              <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-3xl shadow-2xl border border-ehs-100 bg-white/60 backdrop-blur-md group">
                <div className="absolute inset-0 bg-primary-gradient rounded-3xl -z-10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img
                  ref={imageRef}
                  alt="EHS Management Dashboard"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                  className="w-full h-auto transition-transform duration-500 ease-out object-fill group-hover:scale-105"
                  src="/lovable-uploads/bd8cb36b-ea77-4f07-a211-3d2857f02339.png"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
