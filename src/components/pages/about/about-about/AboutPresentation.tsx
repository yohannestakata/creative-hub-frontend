const AboutPresentation = ({ paragraph }: { paragraph: string }) => {
  return (
    <p className="md:px-8 px-4 py-16 font-display text-xl lg:text-2xl font-medium leading-none tracking-tighter">
      {paragraph}{" "}
    </p>
  );
};

export default AboutPresentation;
