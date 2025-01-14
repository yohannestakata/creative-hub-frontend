import { Footer } from "@/components/layout";
import { InsightsListContainer } from "@/components/pages/insights";

const Insights = () => {
  return (
    <div>
      <main className="pt-16">
        <header className="grid grid-cols-12 gap-4 px-8">
          <h1 className="col-span-full lg:col-span-10 font-display text-xl font-medium uppercase leading-none lg:text-2xl">
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
