import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { ArrowRight } from "lucide-react";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import interior4 from "@/assets/interior-4.jpg";
import interior5 from "@/assets/interior-5.jpg";
import interior6 from "@/assets/interior-6.jpg";
import interior7 from "@/assets/interior-7.jpg";
import service1 from "@/assets/service-1.jpg";
import kitchen from "@/assets/kitchen.jpg";
import livingRoom from "@/assets/living room.jpg";
import kidsBedroom from "@/assets/kids bedroom.png";
import elegantBedroom from "@/assets/Elegant bedroom.jpg";
import commercial1 from "@/assets/commercial 1.jpg";
import commercial2 from "@/assets/commercial 2.jpg";
import commercial3 from "@/assets/commercial 3.jpg";
import commercial4 from "@/assets/commercial 4.jpg";
import modernSpace from "@/assets/modern space.jpg";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
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
  }, [selectedCategory]);

  const projects = [
    { title: "Master Bedroom Suite", category: "Residential", image: interior1, description: "A luxurious master bedroom featuring elegant wall textures, ambient lighting, and premium finishes." },
    { title: "Contemporary Living Room", category: "Residential", image: livingRoom, description: "Modern living space with artistic wall paneling, statement artwork, and sophisticated furnishings." },
    { title: "Premium Kitchen Design", category: "Residential", image: kitchen, description: "Elegant modular kitchen with marble backsplash, under-cabinet lighting, and smart storage." },
    { title: "Elegant Guest Bedroom", category: "Residential", image: elegantBedroom, description: "Stylish guest bedroom with designer ceiling, wardrobes, and coordinated soft furnishings." },
    { title: "Modern Living Space", category: "Residential", image: modernSpace, description: "Contemporary living area with premium flooring, artistic decor, and ambient lighting design." },
    { title: "Cozy Family Room", category: "Residential", image: interior7, description: "Warm family space designed for comfort with plush seating and thoughtful storage solutions." },
    { title: "Kids Bedroom", category: "Residential", image: kidsBedroom, description: "Playful and cozy kids bedroom with whimsical wallpaper, soft colors, and modern design elements perfect for children." },
    { title: "Executive Conference Room", category: "Commercial", image: commercial1, description: "Sophisticated meeting room with integrated shelving, modern lighting, and elegant furnishings for professional environments." },
    { title: "Modern Office Workspace", category: "Commercial", image: commercial2, description: "Contemporary office space with collaborative workstations, natural lighting, and minimalist design for enhanced productivity." },
    { title: "Luxury Reception Lounge", category: "Commercial", image: commercial3, description: "Elegant reception area featuring curved seating, natural stone accents, and ambient lighting creating a welcoming atmosphere." },
    { title: "Premium Executive Office", category: "Commercial", image: commercial4, description: "High-end executive office with sophisticated design, built-in storage, and refined finishes for professional excellence." },
  ];

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
        <AppearOnScroll delay={0}>
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
            Our Projects
          </h1>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] md:text-[2rem] text-muted-foreground text-center mt-6 max-w-[60rem] mx-auto">
            Explore our portfolio of exceptional residential and commercial spaces
          </p>
        </AppearOnScroll>
      </div>

      {/* Filter */}
      <Section className="pt-12 pb-0">
        <div className="flex gap-4 justify-center flex-wrap">
          {["All", "Residential", "Commercial"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-[1.6rem] font-medium px-6 py-3 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="py-[4rem] md:py-[6rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className="blog-feed__item group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-[1.4rem] font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-[2.2rem] font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-[1.6rem] text-muted-foreground leading-[1.7]">{project.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-[8rem] md:py-[12rem] bg-muted/30">
        <div className="max-w-[80rem] mx-auto text-center">
          <AppearOnScroll delay={0}>
            <h2 className="text-[3rem] md:text-[4.2rem] font-semibold mb-6">Have a Project in Mind?</h2>
          </AppearOnScroll>
          <AppearOnScroll delay={150}>
            <p className="text-[1.8rem] text-muted-foreground mb-8">
              Let's discuss how we can bring your vision to life with our expertise and creativity.
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={300}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[1.8rem] font-semibold px-10 py-5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Your Project
              <ArrowRight className="w-6 h-6" />
            </Link>
          </AppearOnScroll>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Projects;
