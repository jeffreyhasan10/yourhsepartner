import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
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
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
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
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  const stats = [
    { icon: Shield, value: "99.9%", label: "Compliance Rate", color: "text-ehs-600" },
    { icon: Users, value: "500K+", label: "Protected Workers", color: "text-ehs-700" },
    { icon: TrendingUp, value: "45%", label: "Incident Reduction", color: "text-ehs-800" }
  ];
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-br from-ehs-50 via-white to-ehs-100" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-ehs-gradient opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-gradient opacity-20 blur-2xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ehs-500 text-white mr-2 text-xs font-bold">01</span>
              <span>EHS Management Excellence</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              House Your <span className="gradient-text">EHS Management System</span><br className="hidden sm:inline" />on One Platform
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-700 font-normal text-base sm:text-lg text-left"
            >
              Your EHS management system is made up of policies, procedures and activities to help your business meet its health, safety and sustainability goals. Our cloud-based software gives you the essential tools to protect workers, remain compliant and enhance workplace safety.
            </p>

            {/* Stats Section */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="stats-card text-center">
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.8s" }}
            >
              <a 
                href="#features" 
                className="button-primary flex items-center justify-center group w-full sm:w-auto text-center"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#demo" 
                className="button-secondary w-full sm:w-auto text-center"
              >
                Watch Demo
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {lottieData ? (
              <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <div className="absolute inset-0 bg-primary-gradient rounded-3xl opacity-10 blur-xl"></div>
                <LottieAnimation 
                  animationPath={lottieData} 
                  className="w-full h-auto max-w-lg mx-auto relative z-10"
                  loop={true}
                  autoplay={true}
                />
              </div>
            ) : (
              <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-ehs-shadow">
                <div className="absolute inset-0 bg-primary-gradient rounded-2xl sm:rounded-3xl -z-10 opacity-20"></div>
                <img 
                  ref={imageRef} 
                  src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png" 
                  alt="EHS Management Dashboard" 
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out" 
                  style={{ transformStyle: 'preserve-3d' }} 
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
