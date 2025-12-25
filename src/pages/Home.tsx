import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import HeroSlider from "@/components/HeroSlider";
import { Home, Building2, Compass, Package, Layout, Clock, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import interior4 from "@/assets/interior-4.jpg";
import interior5 from "@/assets/interior-5.jpg";
import interior6 from "@/assets/interior-6.jpg";
import kitchen from "@/assets/kitchen.jpg";

const HomePage = () => {
  const projectsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    projectsRef.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Home,
      title: "Residential Interior Design",
      description: "Transform your home into a personalized sanctuary that reflects your lifestyle and taste.",
    },
    {
      icon: Building2,
      title: "Commercial Interior Design",
      description: "Create inspiring workspaces that boost productivity and leave lasting impressions.",
    },
    {
      icon: Compass,
      title: "Architectural Design",
      description: "Innovative architectural solutions that blend form, function, and sustainability.",
    },
    {
      icon: Package,
      title: "Turnkey Projects",
      description: "End-to-end project management from concept to completion with zero hassle.",
    },
    {
      icon: Layout,
      title: "Space Planning & 3D Visualization",
      description: "See your space come to life before construction with detailed 3D renders.",
    },
  ];

  const projects = [
    { title: "Modern Master Bedroom", category: "Residential", image: interior1 },
    { title: "Luxury Kitchen Design", category: "Residential", image: kitchen },
    { title: "Contemporary Bedroom", category: "Residential", image: interior3 },
    { title: "Elegant Bedroom Suite", category: "Residential", image: interior4 },
    { title: "Stylish Bedroom Space", category: "Residential", image: interior5 },
    { title: "Premium Bedroom Design", category: "Residential", image: interior6 },
  ];

  const whyChooseUs = [
    { icon: Award, title: "Experience & Expertise", description: "Over a decade of crafting exceptional spaces" },
    { icon: Layout, title: "Customized Designs", description: "Tailored solutions unique to your vision" },
    { icon: CheckCircle, title: "Quality Materials", description: "Premium finishes and trusted suppliers" },
    { icon: Clock, title: "On-Time Delivery", description: "Projects completed within promised timelines" },
    { icon: Users, title: "Transparent Pricing", description: "No hidden costs, clear communication" },
  ];

  const testimonials = [
    {
      quote: "Design Nation transformed our outdated apartment into a modern masterpiece. Their attention to detail is unmatched.",
      name: "Priya Sharma",
      project: "Residential Project, Mumbai",
    },
    {
      quote: "Working with Design Nation was seamless. They understood our brand and created an office space that inspires our team daily.",
      name: "Rajesh Kumar",
      project: "Commercial Project, Bangalore",
    },
    {
      quote: "From concept to completion, the team delivered beyond our expectations. Highly recommend for any interior project.",
      name: "Anita Desai",
      project: "Residential Project, Delhi",
    },
  ];

  const processSteps = [
    { step: "01", title: "Consultation", description: "We understand your vision, requirements, and budget" },
    { step: "02", title: "Design Planning", description: "Creating detailed designs and 3D visualizations" },
    { step: "03", title: "Execution", description: "Bringing designs to life with quality craftsmanship" },
    { step: "04", title: "Handover", description: "Final walkthrough and seamless project handover" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Section */}
      <Section className="py-[6rem] md:py-[8rem] bg-muted/30">
        <div className="max-w-[80rem] mx-auto text-center">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.4rem] md:text-[3.2rem] font-semibold mb-6">About Design Nation</h2>
          </AppearOnScroll>
          <AppearOnScroll delay={150}>
            <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-8">
              Founded with a passion for creating transformative spaces, Design Nation has been at the forefront of interior design and architecture in India. We believe every space has a story waiting to be told, and we're here to help you tell yours.
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={300}>
            <p className="text-[1.8rem] leading-[1.8] text-muted-foreground">
              Our client-centric approach combines meticulous craftsmanship with innovative design thinking, delivering spaces that are not just beautiful but truly functional.
            </p>
          </AppearOnScroll>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-[6rem] md:py-[10rem]">
        <AppearOnScroll delay={0}>
          <div>
            <h2 className="text-[2.4rem] md:text-[3.2rem] font-semibold mb-4 text-center">Our Services</h2>
            <p className="text-[1.8rem] text-muted-foreground text-center mb-12 max-w-[60rem] mx-auto">
              Comprehensive design solutions tailored to bring your vision to life
            </p>
          </div>
        </AppearOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AppearOnScroll key={index} delay={index * 100}>
              <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow group">
                <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-[2rem] font-semibold mb-3">{service.title}</h3>
                <p className="text-[1.6rem] text-muted-foreground leading-[1.7]">{service.description}</p>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="py-[6rem] md:py-[10rem] bg-muted/30">
        <AppearOnScroll delay={0}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-[2.4rem] md:text-[3.2rem] font-semibold mb-4">Featured Projects</h2>
              <p className="text-[1.8rem] text-muted-foreground">Explore our portfolio of exceptional spaces</p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[1.6rem] font-semibold text-primary hover:opacity-80 transition-opacity mt-4 md:mt-0"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </AppearOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className="blog-feed__item group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-[1.2rem] font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-[1.8rem] font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-[6rem] md:py-[10rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.4rem] md:text-[3.2rem] font-semibold mb-12 text-center">Why Choose Design Nation</h2>
        </AppearOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {whyChooseUs.map((item, index) => (
            <AppearOnScroll key={index} delay={index * 100}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-[1.6rem] font-semibold mb-2">{item.title}</h3>
                <p className="text-[1.4rem] text-muted-foreground">{item.description}</p>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </Section>

      {/* Statistics */}
      <Section className="py-[6rem] md:py-[8rem] bg-primary text-primary-foreground">
        <AppearOnScroll delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <span className="text-[4.8rem] md:text-[6rem] font-bold">12+</span>
              <p className="text-[1.8rem] opacity-90">Years of Experience</p>
            </div>
            <div>
              <span className="text-[4.8rem] md:text-[6rem] font-bold">500+</span>
              <p className="text-[1.8rem] opacity-90">Projects Completed</p>
            </div>
            <div>
              <span className="text-[4.8rem] md:text-[6rem] font-bold">350+</span>
              <p className="text-[1.8rem] opacity-90">Happy Clients</p>
            </div>
          </div>
        </AppearOnScroll>
      </Section>

      {/* Testimonials */}
      <Section className="py-[6rem] md:py-[10rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.4rem] md:text-[3.2rem] font-semibold mb-12 text-center">What Our Clients Say</h2>
        </AppearOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AppearOnScroll key={index} delay={index * 150}>
              <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                <p className="text-[1.6rem] leading-[1.8] mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-[1.6rem] font-semibold">{testimonial.name}</p>
                  <p className="text-[1.4rem] text-muted-foreground">{testimonial.project}</p>
                </div>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="py-[6rem] md:py-[10rem] bg-muted/30">
        <AppearOnScroll delay={0}>
          <div>
            <h2 className="text-[2.4rem] md:text-[3.2rem] font-semibold mb-4 text-center">Our Process</h2>
            <p className="text-[1.8rem] text-muted-foreground text-center mb-12">From concept to completion, a seamless journey</p>
          </div>
        </AppearOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <AppearOnScroll key={index} delay={index * 150}>
              <div className="relative">
                <span className="text-[6rem] font-bold text-primary/20">{step.step}</span>
                <h3 className="text-[2rem] font-semibold mb-2 -mt-4">{step.title}</h3>
                <p className="text-[1.6rem] text-muted-foreground">{step.description}</p>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-[8rem] md:py-[12rem]">
        <div className="max-w-[80rem] mx-auto text-center">
          <AppearOnScroll delay={0}>
            <div>
              <h2 className="text-[3rem] md:text-[4.2rem] font-semibold mb-6">Ready to Transform Your Space?</h2>
              <p className="text-[1.8rem] text-muted-foreground mb-8">
                Let's create something extraordinary together. Book a free consultation today.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[1.8rem] font-semibold px-10 py-5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Book a Consultation
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </AppearOnScroll>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default HomePage;
