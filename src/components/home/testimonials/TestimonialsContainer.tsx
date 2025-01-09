import { TestimonialsPresentation } from "./";

const TestimonialsContainer = () => {
  const sampleTestimonials = [
    {
      id: "1",
      testimonial:
        "We’re proud to be part of the early implementation of Creative Hub Ethiopia. It’s a great addition to the growing creative landscape of the country.",
      profileName: "Anna Getaneh",
      profileAvatarUrl:
        "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profilePosition: "Designer and Social Entrepreneur, African Mosaique",
    },
    {
      id: "2",
      testimonial:
        "We’re proud to be part of the early implementation of Creative Hub Ethiopia. It’s a great addition to the growing creative landscape of the country.",
      profileName: "Anna Getaneh",
      profileAvatarUrl:
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      profilePosition: "Designer and Social Entrepreneur, African Mosaique",
    },
  ];

  return <TestimonialsPresentation testimonials={sampleTestimonials} />;
};

export default TestimonialsContainer;
