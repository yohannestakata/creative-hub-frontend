import { PartnersGalleryPresentation } from "./";

const PartnersGalleryContainer = () => {
  const images = [
    {
      id: "img1",
      url: "https://images.unsplash.com/photo-1736268020819-7a6b3478b692?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      alt: "A beautiful landscape with mountains in the background",
    },
    {
      id: "img2",
      url: "https://images.unsplash.com/photo-1736281512973-d17ef05f9709?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
      alt: "A close-up of a colorful flower in a garden",
    },
    {
      id: "img3",
      url: "https://images.unsplash.com/photo-1736281547025-46a511438ee0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      alt: "A serene beach view with waves crashing on the shore",
    },

    {
      id: "img4",
      url: "https://images.unsplash.com/photo-1736288002606-9db16875f180?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      alt: "A sunset view over a calm lake",
    },
    {
      id: "img5",
      url: "https://images.unsplash.com/photo-1736267734902-53ef6c74156e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
      alt: "A bustling city street at night with bright lights",
    },
    {
      id: "img6",
      url: "https://images.unsplash.com/photo-1736160388319-c99c1dd44099?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
      alt: "A tranquil forest with tall trees and a walking path",
    },

    {
      id: "img7",
      url: "https://images.unsplash.com/photo-1735480176664-766f6f405ac2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
      alt: "A snowy mountain peak under a clear blue sky",
    },
    {
      id: "img8",
      url: "https://images.unsplash.com/photo-1735760672876-1c6f801f6436?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
      alt: "A vibrant cityscape during sunrise",
    },
  ];

  return <PartnersGalleryPresentation images={images} />;
};

export default PartnersGalleryContainer;
