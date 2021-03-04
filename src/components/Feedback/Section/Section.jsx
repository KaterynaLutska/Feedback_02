const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className="Statistics_title ">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
