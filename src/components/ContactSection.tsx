import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';

/* =====================================================
   CONTACT SECTION COMPONENT
   WhatsApp integration with elegant design
   ===================================================== */

const WHATSAPP_NUMBER = '918078833712'; // Replace with actual number
const WHATSAPP_MESSAGE = 'Hello! I would like to place an order.';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">✦ Get In Touch</span>
          <h2 className="heading-section text-foreground mb-4">Contact Us</h2>
          <p className="text-luxury max-w-2xl mx-auto">
            Ready to order? Reach out to us directly via WhatsApp for quick service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
                  Visit Our Bakery
                </h3>
                <p className="text-muted-foreground">
                  DR .Shabne Road<br />
                   Mahabaleshwar - 412806
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
                  Opening Hours
                </h3>
                <p className="text-muted-foreground">
                  Monday - Saturday: 10:00 AM - 11:00 PM<br />
                  Sunday: 10:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
                  Call Us
                </h3>
                <p className="text-muted-foreground">
                  9028480643,9847606468<br />
                  contact@luxurybakery.com
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-elevated text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366]/10 mb-6">
              <MessageCircle className="text-[#25D366]" size={40} />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Order via WhatsApp
            </h3>
            <p className="text-muted-foreground mb-8">
              The fastest way to place your order! Chat with us directly for personalized service and quick responses.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-semibold rounded-full text-lg transition-all duration-300 hover:bg-[#20BD5A] hover:shadow-lg hover:-translate-y-1 animate-pulse-glow"
              style={{ boxShadow: '0 0 30px rgba(37, 211, 102, 0.3)' }}
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </button>

            <p className="text-sm text-muted-foreground mt-6">
              Available 7 days a week • Quick response guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
