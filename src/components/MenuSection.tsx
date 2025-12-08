import { useEffect, useRef } from 'react';
import cakesImage from '@/assets/menu-cakes.jpg';
import breadImage from '@/assets/menu-bread.jpg';
import snacksImage from '@/assets/menu-snacks.jpg';

/* =====================================================
   MENU SECTION COMPONENT
   Three luxury category cards with hover effects
   ===================================================== */

const menuItems = [
  {
    title: 'Cakes',
    description: 'Elegant celebration cakes crafted with premium ingredients',
    image: cakesImage,
  },
  {
    title: 'Bread',
    description: 'Artisan sourdough and rustic loaves baked fresh daily',
    image: breadImage,
  },
  {
    title: 'Snacks',
    description: 'Golden croissants and delicate pastries for any moment',
    image: snacksImage,
  },
];

const MenuSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.menu-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section  className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">✦ Discover Our Selection</span>
          <h2 className="heading-section text-foreground mb-4">Our Special Menu</h2>
          <p className="text-luxury max-w-2xl mx-auto">
            Each creation is a masterpiece, made with the finest ingredients and time-honored techniques.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <article
              key={item.title}
              className={`menu-card opacity-0 group cursor-pointer stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-card card-hover">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="heading-card text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
