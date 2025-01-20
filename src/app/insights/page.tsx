import { Footer, Nav } from "@/components/layout";
import { InsightsListContainer } from "@/components/pages/insights";

const Insights = () => {
  return (
    <div>
      <Nav />
      <main className="pt-8">
        <header className="grid grid-cols-12 gap-4 px-8">
          <h1 className="col-span-full font-display text-xl font-medium uppercase leading-none tracking-tighter md:text-2xl lg:col-span-10 2xl:text-3xl">
            What You Want to Know About Creative Hub
          </h1>
        </header>
        <InsightsListContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
