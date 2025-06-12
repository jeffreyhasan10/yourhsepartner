import React from "react";

const TrustedClients = () => {
  const clients = [
    "Subaru",
    "Campbell's Soup",
    "Virgin Atlantic",
    "Air Liquide",
    "Microsoft",
    "Tesla",
    "Amazon",
    "Google"
  ];

  // Duplicate clients for smooth scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 relative overflow-hidden" id="clients">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Trusted by Leading Organizations
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto opacity-80">
            Global leaders in automotive, tech, energy, and logistics rely on YourHSEPartner for dependable EHS solutions.
          </p>
        </div>

        {/* Scrolling Clients */}
        <div className="space-y-10">
          {/* Row 1 */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right whitespace-nowrap">
              {duplicatedClients.map((name, index) => (
                <div
                  key={`row1-${index}`}
                  className="inline-flex items-center justify-center px-10 py-5 mx-4 bg-white/5 text-white text-lg font-medium border border-white/10 rounded-xl backdrop-blur-md shadow-md hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {[...duplicatedClients].reverse().map((name, index) => (
                <div
                  key={`row2-${index}`}
                  className="inline-flex items-center justify-center px-10 py-5 mx-4 bg-white/5 text-white text-lg font-medium border border-white/10 rounded-xl backdrop-blur-md shadow-md hover:shadow-teal-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex justify-center gap-12 text-center text-white">
          <div>
            <div className="text-4xl font-bold">500+</div>
            <div className="text-sm opacity-70">Trusted Partners</div>
          </div>
          <div>
            <div className="text-4xl font-bold">50+</div>
            <div className="text-sm opacity-70">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold">99.9%</div>
            <div className="text-sm opacity-70">Uptime Guarantee</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedClients;
