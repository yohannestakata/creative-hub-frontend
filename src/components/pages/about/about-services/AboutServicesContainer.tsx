import { AboutServicesPresentation } from ".";

const sampleServices = [
  {
    id: "1",
    title: "Collaborate and Create",
    description:
      "Start your day by immersing yourself in a vibrant co-working space designed to foster creativity and collaboration. Join forces with like-minded individuals and turn ideas into reality.",
    imageUrl:
      "https://images.unsplash.com/photo-1736092306049-d55fd016a88f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
  },
  {
    id: "2",
    title: "Fuel Your Day",
    description:
      "Take a break and recharge with a cup of expertly brewed coffee. Whether you're brainstorming or just need a moment of tranquility, our cozy coffee shop is the perfect spot.",
    imageUrl:
      "https://images.unsplash.com/photo-1736063600610-dea26300cbb5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
  },
  {
    id: "3",
    title: "Inspire Your Senses",
    description:
      "Wander through our gallery and let the art spark your imagination. Discover local talent and find inspiration in every brushstroke and sculpture.",
    imageUrl:
      "https://images.unsplash.com/photo-1736598499967-8399bd5e2ab9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Build Your Vision",
    description:
      "Bring your concepts to life in our state-of-the-art Fab-Lab. With access to cutting-edge tools and technology, you can prototype, create, and innovate without limits.",
    imageUrl:
      "https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "Explore Knowledge",
    description:
      "Dive into a world of information at our digital library. Whether you’re researching or seeking inspiration, an extensive collection of resources is at your fingertips.",
    imageUrl:
      "https://images.unsplash.com/photo-1736678595826-2d3e0b94638c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "Showcase Your Work",
    description:
      "End your day by exploring dynamic exhibitions or presenting your own. The exhibition hall is where ideas meet the world, providing a platform to share and celebrate achievements.",
    imageUrl:
      "https://images.unsplash.com/photo-1732165338466-7251776eb4cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
  },
];

const AboutServicesContainer = () => {
  return <AboutServicesPresentation services={sampleServices} />;
};

export default AboutServicesContainer;
