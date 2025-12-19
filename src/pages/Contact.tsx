import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppearOnScroll from "@/components/AppearOnScroll";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Two Column Layout */}
      <div className="relative w-full pb-12 md:pb-20 lg:pb-32 px-6 md:px-[calc(18vw-10rem)]">
        <div className="max-w-[138rem] mx-auto flex flex-col items-center">
          <div className="relative flex items-start justify-between flex-col lg:flex-row lg:w-full gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div className="w-full lg:w-1/2 py-[3rem] md:py-[5rem] lg:py-[8rem]">
              <AppearOnScroll delay={0}>
                <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] font-semibold tracking-[-0.01em] leading-[1.2] mb-[2rem]">
                  Let's Create Something Beautiful Together
                </h1>
              </AppearOnScroll>
              <AppearOnScroll delay={100}>
                <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-[4rem]">
                  Ready to transform your space? Get in touch with us for a free consultation. We'd love to hear about your project.
                </p>
              </AppearOnScroll>

              <AppearOnScroll delay={200}>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-[1.6rem] font-semibold mb-1">Visit Us</h3>
                      <p className="text-[1.6rem] text-muted-foreground">
                        Gomti Nagar, Lucknow
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-[1.6rem] font-semibold mb-1">Call Us</h3>
                      <p className="text-[1.6rem] text-muted-foreground">
                        <a href="tel:+918417831886" className="hover:text-primary transition-colors">
                          +91-8417831886
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-[1.6rem] font-semibold mb-1">Email Us</h3>
                      <p className="text-[1.6rem] text-muted-foreground">
                        <a href="mailto:designation.interio@gmail.com" className="hover:text-primary transition-colors">
                          designation.interio@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-[1.6rem] font-semibold mb-1">Business Hours</h3>
                      <p className="text-[1.6rem] text-muted-foreground">
                        Monday - Saturday: 10:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </AppearOnScroll>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-[44%] max-w-[80rem] py-[3rem] md:py-[5rem] lg:py-[8rem]">
              <AppearOnScroll delay={0}>
                <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                  <h2 className="text-[2.2rem] font-semibold mb-6">Book a Free Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-[1.4rem] font-medium mb-2">
                        Full Name <span className="text-muted-foreground">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full text-[1.6rem] leading-[2.4rem] h-[52px] px-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[1.4rem] font-medium mb-2">
                          Email <span className="text-muted-foreground">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full text-[1.6rem] leading-[2.4rem] h-[52px] px-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label className="block text-[1.4rem] font-medium mb-2">
                          Phone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full text-[1.6rem] leading-[2.4rem] h-[52px] px-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[1.4rem] font-medium mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full text-[1.6rem] leading-[2.4rem] h-[52px] px-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Interior</option>
                        <option value="commercial">Commercial Interior</option>
                        <option value="architectural">Architectural Design</option>
                        <option value="turnkey">Turnkey Project</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[1.4rem] font-medium mb-2">
                        Tell us about your project <span className="text-muted-foreground">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full text-[1.6rem] leading-[2.4rem] p-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground resize-y"
                        placeholder="Describe your project, budget range, timeline, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-[1.6rem] font-semibold h-[52px] px-8 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </AppearOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14235.93759847959!2d80.99049435!3d26.856685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2edf5cfe2f9%3A0x1c5e5e0e8f8e8e8e!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635774283401!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Design Nation Location"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
