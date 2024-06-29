const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        At Comfy Store, we believe that comfort is the key to happiness. Founded
        with the vision of providing high-quality, comfortable products for
        every aspect of your life, we are dedicated to bringing you the best in
        home essentials, apparel, and lifestyle accessories.<br/> Our mission is
        simple: to enhance your comfort and improve your quality of life. We
        meticulously select products that are not only stylish and functional
        but also offer unparalleled comfort. Whether it's a cozy blanket for
        your living room, soft and breathable clothing, or ergonomic office
        furniture, we've got you covered.
      </p>
    </>
  );
};
export default About;
