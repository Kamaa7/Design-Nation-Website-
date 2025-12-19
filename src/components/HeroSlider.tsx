import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "Transforming Spaces Into",
    highlight: "Stories",
    subtitle: "Premium interior design solutions that blend modern Indian sensibility with global aesthetics.",
  },
  {
    image: heroSlide2,
    title: "Crafting Elegant",
    highlight: "Interiors",
    subtitle: "Every space has a story waiting to be told. Let us help you tell yours.",
  },
  {
    image: interior1,
    title: "Designing Your",
    highlight: "Dreams",
    subtitle: "From concept to completion, we deliver exceptional spaces tailored to your vision.",
  },
  {
    image: interior2,
    title: "Where Luxury Meets",
    highlight: "Comfort",
    subtitle: "Experience the perfect harmony of form, function, and timeless elegance.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Images with Fade Transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-[calc(18vw-10rem)]">
        <div className="max-w-[138rem] mx-auto w-full">
          <div className="max-w-[70rem]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute pointer-events-none"
                }`}
              >
                {index === currentSlide && (
                  <>
                    <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.1] tracking-[-0.02em] mb-6 text-foreground">
                      {slide.title}{" "}
                      <span className="inline-block [background-image:linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))] bg-clip-text text-transparent">
                        {slide.highlight}
                      </span>
                    </h1>
                    <p className="text-[1.6rem] md:text-[1.8rem] leading-[1.8] text-muted-foreground mb-10 max-w-[50rem]">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-[1.5rem] font-semibold px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105"
                      >
                        Get a Quote
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-[1.5rem] font-semibold px-8 py-4 border-2 border-foreground/80 rounded-lg hover:bg-foreground hover:text-background transition-all"
                      >
                        View Projects
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/40 hover:bg-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
