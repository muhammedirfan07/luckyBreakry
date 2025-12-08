import { useEffect, useRef } from 'react';
import { Truck, Clock, Award, Leaf } from 'lucide-react';

/* =====================================================
   DELIVERY SECTION COMPONENT
   Premium delivery features with scroll animations
   ===================================================== */

const deliveryFeatures = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Fresh from oven to your doorstep within hours',
  },
  {
    icon: Clock,
    title: 'Same Day Service',
    description: 'Order before noon for same-day delivery',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Temperature-controlled packaging ensures freshness',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable packaging for a greener tomorrow',
  },
];

const DeliverySection = () => {
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

    const items = sectionRef.current?.querySelectorAll('.delivery-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="delivery" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">✦ Doorstep Delivery</span>
          <h2 className="heading-section text-foreground mb-4">Premium Delivery Available</h2>
          <p className="text-luxury max-w-2xl mx-auto">
            Experience the luxury of freshly baked goods delivered right to your door.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliveryFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`delivery-item opacity-0 text-center stagger-${index + 1}`}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6 group">
                <feature.icon
                  size={32}
                  className="text-primary transition-transform duration-300 group-hover:scale-110"
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300" />
              </div>
              <h3 className="heading-card text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            Free Delivery whit in 2km!
          </h3>
          <p className="text-muted-foreground mb-6">
            Treat yourself to luxury without the extra cost.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
