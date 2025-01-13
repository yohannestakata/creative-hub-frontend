import RichText, { BlockNode } from "@/components/layout/RichText";
import InsightHeader from "@/components/pages/insight/InsightHeader";

const Insight = () => {
  const post: {
    title: string;
    headerImage: string;
    author: string;
    authorAvatar: string;
    content: BlockNode[];
  } = {
    title: "Understanding Modern Web Development: A Comprehensive Guide",
    headerImage:
      "https://images.unsplash.com/photo-1736532496900-af334a4bce1c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "John Doe",
    authorAvatar:
      "https://images.unsplash.com/photo-1736267740362-0c10963c8047?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: "Web development has evolved significantly over the past decade. From simple static pages to complex applications, the journey has been remarkable. In this comprehensive guide, we'll explore the modern practices and tools that shape today's web development landscape.",
          },
        ],
      },
      {
        type: "h2",
        children: [{ text: "The Rise of JavaScript Frameworks" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "JavaScript frameworks have revolutionized how we build web applications. They've introduced concepts like component-based architecture, state management, and declarative UI programming, making it easier to build complex applications.",
          },
        ],
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1736532496900-af334a4bce1c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Comparison of popular JavaScript frameworks",
        caption: "Popular JavaScript frameworks and their market share in 2024",
      },
      {
        type: "h2",
        children: [{ text: "The Impact of Server-Side Rendering" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Server-side rendering (SSR) has made a comeback with frameworks like Next.js. This approach combines the best of both worlds: the dynamic capabilities of client-side applications with the performance benefits of server rendering.",
          },
        ],
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1733690577845-4f4641a456b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Modern CSS implementation using Tailwind",
        caption: "Example of utility-first CSS using Tailwind CSS",
      },
    ],
  };

  return (
    <>
      <InsightHeader
        title={post.title}
        headerImage={post.headerImage}
        authorAvatar={post.authorAvatar}
        author={post.author}
      />

      <main className="grid grid-cols-12 gap-4 px-8 py-12">
        <div className="col-span-8 col-start-3">
          <RichText content={post.content} />
        </div>
      </main>
    </>
  );
};

export default Insight;
