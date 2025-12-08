import { Instagram, Facebook, MessageCircle } from 'lucide-react';

/* =====================================================
   FOOTER COMPONENT
   Minimal, centered design with social icons
   ===================================================== */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
  ];

  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container-luxury">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="#home" className="mb-6">
            <span className="text-2xl font-heading font-bold">
              ✦ Lucky Bakery
            </span>
          </a>

          {/* Tagline */}
          <p className="text-primary-foreground/70 mb-8 max-w-md">
            Crafting moments of joy, one bake at a time.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-primary-foreground/20 mb-6" />

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Luxury Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
