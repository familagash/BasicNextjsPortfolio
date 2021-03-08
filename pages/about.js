const About = () => {
  return (
    <div className="about about__container section bd-container   ">
      <div className="about__img mx-auto ">
        <img src="../assets/img/avatar.png" className="about__img " />
      </div>

      <div className=" about__content mt-5 text-justify">
        <h2 className="about__title text-3xl text-left ">About me</h2>
        <p className="about__subtitle">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          predefined chunks as necessa humour,All the Lorem Ipsum generators on
          the Internet tend to repeat ry, making this the first true generator
          on the Internet.
        </p>
        <div className="about__tech my-4">
          <span className="font-bold mr-2  text-gray-600 bg-gray-300 rounded-sm  px-2.5 py-1  ">
            HTML
          </span>
          <span className="font-bold mr-2  text-gray-600 bg-gray-300 rounded-sm  px-2.5 py-1  ">
            CSS
          </span>
          <span className="font-bold mr-2  text-gray-600 bg-gray-300 rounded-sm  px-2.5 py-1  ">
            JAVASCRIPT
          </span>
          <span className="font-bold mr-2  text-gray-600 bg-gray-300 rounded-sm  px-2.5 py-1  ">
            REACT
          </span>
          <span className="font-bold mr-2  text-gray-600 bg-gray-300 rounded-sm  px-2.5 py-1  ">
            NEXT JS
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
