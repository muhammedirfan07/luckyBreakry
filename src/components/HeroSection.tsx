import { useState, useEffect } from "react";
import { ChevronRight, Play } from "lucide-react";
import heroBakery from "@/assets/hero-bakery.jpg";
import heroCake from "@/assets/hero-cake.jpg";
import heroCroissant from "@/assets/hero-croissant.jpg";

/* =====================================================
   HERO SECTION - FULL VIEWPORT WIDTH & HEIGHT
   Auto-sliding carousel with premium design
   ===================================================== */

const heroSlides = [
  {
    image: heroCake,
    title: "The Perfect Baked",
    highlight: "Cake Everyday!",
    description:
      "Every bite tells a story of quality ingredients and passionate craftsmanship.",
  },
  {
    image: heroBakery,
    title: "Freshly Crafted",
    highlight: "Artisan Bakery",
    description:
      "Experience the art of baking at its finest with our premium selections.",
  },
  {
    image: heroCroissant,
    title: "Golden & Flaky",
    highlight: "French Pastries",
    description:
      "Buttery croissants and delicate pastries baked fresh every morning.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-screen h-screen min-h-[600px] overflow-hidden"
      style={{ marginLeft: "calc(-50vw + 50%)", width: "100vw" }}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Watch Video Badge */}
              {/* <button className="inline-flex items-center gap-3 mb-8 group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={18} className="text-primary-foreground ml-0.5" fill="currentColor" />
                </div>
                <span className="text-foreground font-medium">Watch Video</span>
              </button> */}

              {/* Animated Title */}
              <div className="relative mb-6">
                {heroSlides.map((slide, index) => (
                  <h1
                    key={index}
                    className={`heading-display text-foreground transition-all duration-700 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0 relative"
                        : "opacity-0 translate-y-8 absolute inset-0"
                    }`}
                  >
                    {slide.title}
                    <br />
                    <span className="text-gradient-gold">
                      {slide.highlight}
                    </span>
                  </h1>
                ))}
              </div>

              {/* Animated Description */}
              <div className="relative h-20 mb-10">
                {heroSlides.map((slide, index) => (
                  <p
                    key={index}
                    className={`text-luxury text-lg transition-all duration-700 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0 relative"
                        : "opacity-0 translate-y-4 absolute inset-0"
                    }`}
                  >
                    {slide.description}
                  </p>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact" className="btn-primary group">
                  Order Now
                  <ChevronRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </a>
                <a href="#menu" className="btn-outline">
                  Explore Menu
                  <ChevronRight size={20} />
                </a>
              </div>

              {/* Slide Dots */}
              <div className="flex gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-primary w-10"
                        : "bg-foreground/30 w-3 hover:bg-foreground/50"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Featured Image Circle */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute -inset-8 rounded-full border-2 border-primary/20" />
                <div className="absolute -inset-16 rounded-full border border-primary/10" />

                {/* Main image circle */}
                <div
                  className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] 
     rounded-full overflow-hidden shadow-2xl  border-background"
                >
                  {heroSlides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.image}
                      alt={slide.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        index === currentSlide
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-110"
                      }`}
                    />
                  ))}
                </div>

                {/* Floating Tags */}
                <div className="absolute -top-4 right-8 bg-card px-5 py-3 rounded-full shadow-lg animate-float">
                  <span className="font-semibold text-foreground">
                    🥐 Crunchy
                  </span>
                </div>
                <div className="absolute top-1/4 -left-8 bg-card px-5 py-3 rounded-full shadow-lg animate-float stagger-2">
                  <span className="font-semibold text-foreground">
                    🌿 Organic
                  </span>
                </div>
                <div className="absolute bottom-16 -right-4 bg-card px-5 py-3 rounded-full shadow-lg animate-float stagger-3">
                  <span className="font-semibold text-foreground">
                    ⭐ Fresh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
