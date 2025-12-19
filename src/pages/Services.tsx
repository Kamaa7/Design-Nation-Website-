import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { Home, Building2, Compass, Package, Layout, ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Living Room Design",
      description: "Create elegant living spaces with sophisticated wall paneling, ambient lighting, and curated artwork for a refined atmosphere.",
      features: [
        "Custom wall paneling & textures",
        "Statement artwork selection",
        "Ambient lighting design",
        "Premium flooring solutions",
        "Furniture arrangement planning",
      ],
      image: service1,
    },
    {
      icon: Building2,
      title: "Bedroom Design",
      description: "Design serene bedroom retreats with comfortable furnishings, soft lighting, and thoughtful storage solutions.",
      features: [
        "Bed & headboard design",
        "Integrated study corners",
        "Ceiling fan & lighting fixtures",
        "Window treatment design",
        "Cozy seating arrangements",
      ],
      image: service2,
    },
    {
      icon: Compass,
      title: "Master Bedroom Interiors",
      description: "Luxurious master bedroom designs featuring elegant wardrobes, work desks, and harmonious color palettes.",
      features: [
        "Premium wardrobe systems",
        "Integrated work stations",
        "Artistic wall decor",
        "Designer ceiling treatments",
        "Coordinated soft furnishings",
      ],
      image: service3,
    },
    {
      icon: Package,
      title: "Modular Kitchen Design",
      description: "Functional and stylish modular kitchens with marble backsplashes, smart storage, and modern appliances.",
      features: [
        "Modular cabinet systems",
        "Premium countertop installation",
        "Under-cabinet lighting",
        "Open shelf displays",
        "Appliance integration",
      ],
      image: service4,
    },
    {
      icon: Layout,
      title: "Complete Home Interiors",
      description: "End-to-end interior solutions bringing together all spaces with cohesive design language and premium finishes.",
      features: [
        "Full home design planning",
        "3D visualization & renders",
        "Material & finish selection",
        "Furniture procurement",
        "Project execution & handover",
      ],
      image: service5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
        <AppearOnScroll delay={0}>
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
            Our Services
          </h1>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] md:text-[2rem] text-muted-foreground text-center mt-6 max-w-[60rem] mx-auto">
            Comprehensive design solutions tailored to transform your vision into reality
          </p>
        </AppearOnScroll>
      </div>

      {/* Services List */}
      <Section className="py-[6rem] md:py-[10rem]">
        <div className="space-y-24">
          {services.map((service, index) => (
            <AppearOnScroll key={index} delay={0}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <service.icon className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-[2.4rem] md:text-[3rem] font-semibold mb-4">{service.title}</h2>
                  <p className="text-[1.8rem] text-muted-foreground leading-[1.8] mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-[1.6rem]">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[1.6rem] font-semibold text-primary hover:opacity-80 transition-opacity"
                  >
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-[8rem] md:py-[12rem] bg-muted/30">
        <div className="max-w-[80rem] mx-auto text-center">
          <AppearOnScroll delay={0}>
            <h2 className="text-[3rem] md:text-[4.2rem] font-semibold mb-6">Let's Discuss Your Project</h2>
          </AppearOnScroll>
          <AppearOnScroll delay={150}>
            <p className="text-[1.8rem] text-muted-foreground mb-8">
              Have a specific requirement? We'd love to understand your needs and provide a customized solution.
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={300}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[1.8rem] font-semibold px-10 py-5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
              <ArrowRight className="w-6 h-6" />
            </Link>
          </AppearOnScroll>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Services;
