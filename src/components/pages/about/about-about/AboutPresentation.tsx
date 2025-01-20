const AboutPresentation = ({ paragraph }: { paragraph: string }) => {
  return (
    <p className="px-4 py-16 font-display text-xl font-medium leading-none tracking-tighter md:px-8 lg:text-2xl 2xl:text-2xl">
      {paragraph}{" "}
    </p>
  );
};

export default AboutPresentation;
