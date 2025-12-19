import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { Award, Users, Heart, Target } from "lucide-react";
import interior1 from "@/assets/interior-1.jpg";

const About = () => {
  const values = [
    { icon: Award, title: "Excellence", description: "We strive for perfection in every detail, delivering spaces that exceed expectations." },
    { icon: Users, title: "Collaboration", description: "We work closely with clients, treating every project as a partnership." },
    { icon: Heart, title: "Passion", description: "Our love for design drives us to create spaces that inspire and delight." },
    { icon: Target, title: "Innovation", description: "We embrace new ideas and technologies to push the boundaries of design." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Title */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
        <AppearOnScroll delay={0}>
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
            About Us
          </h1>
        </AppearOnScroll>
      </div>

      {/* Hero Image */}
      <AppearOnScroll delay={0}>
        <figure className="relative flex overflow-hidden w-full mt-[3rem] md:mt-[4.5rem] lg:mt-[6rem] mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
          <picture className="flex w-full justify-center">
            <img
              src={interior1}
              alt="Design Nation Studio"
              className="top-0 left-0 max-w-full w-full aspect-[2/1] xl:aspect-[16/5] object-cover"
            />
          </picture>
        </figure>
      </AppearOnScroll>

      {/* Story Section */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[3rem]">
            The Visionary Behind Design Nation
          </h2>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-6">
            Vishal Singh is the founder and principal designer of Design Nation, a premier interior design firm dedicated to transforming spaces into living works of art. With a sharp eye for detail and a passion for architectural harmony, Vishal has built a reputation for creating interiors that are as functional as they are breathtaking.
          </p>
        </AppearOnScroll>
        <AppearOnScroll delay={300}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground">
            At Design Nation, Vishal leads a team of creative minds who believe that every space has a story to tell. His design philosophy blends modern innovation with timeless elegance, ensuring that every project whether residential or commercial reflects the unique personality and aspirations of the client. Under his leadership, Design Nation has become a destination for those seeking sophisticated, turnkey design solutions.
          </p>
        </AppearOnScroll>
      </div>

      {/* Mission & Vision */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <figure className="blockquote-big text-center mt-[1.25rem] mb-[0.9375rem] md:mt-[1.875rem] md:mb-[1.875rem] lg:mt-[3.75rem] lg:mb-[3.75rem] md:mx-[calc(-18vw+6.875rem)] xl:mx-[-12.5rem]">
            <blockquote className="font-sans text-[calc(5vw+0.6rem)] lg:text-[5.4rem] font-extrabold leading-[1.2]">
              "To create spaces that tell stories, inspire lives, and stand the test of time."
            </blockquote>
            <figcaption className="text-[calc(2.5vw+0.8rem)] lg:text-[3rem] font-semibold leading-[1.6] md:leading-[1.4] before:content-['―_']">
              Our Mission
            </figcaption>
          </figure>
        </AppearOnScroll>
      </div>

      {/* Values Grid */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem]">
              Our Core Values
            </h2>
          </AppearOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AppearOnScroll key={index} delay={index * 100}>
                <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-[2.2rem] font-semibold mb-3">{value.title}</h3>
                  <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
