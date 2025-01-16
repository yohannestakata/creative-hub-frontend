const AboutPresentation = ({ paragraph }: { paragraph: string }) => {
  return (
    <p className="px-8 py-16 font-display text-xl lg:text-2xl font-medium leading-none tracking-tighter">
      {paragraph}{" "}
    </p>
  );
};

export default AboutPresentation;
