import Header from "../components/Header";
import Tabs from "../components/Tabs";
import { projects } from "../data";

export default function Home() {
  return (
    <>
      <Header />

      <main className="l-main">
        <section className="services  bd-container py-12" id="services">
          <h2 className="section-title">Services</h2>

          <div className="services__container  bd-grid">
            <div className="services__content  flex flex-col justify-center ">
              <svg
                className="services__img "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4C2.138 11.409 2 11.696 2 12s.138.591.375.781L7.375 16.781zM16.625 7.219l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4C21.862 12.591 22 12.304 22 12s-.138-.591-.375-.781L16.625 7.219z"></path>
                <path
                  transform="rotate(102.527 12 12)"
                  d="M2.78 11H21.219V13.001H2.78z"
                ></path>
              </svg>
              <h3 className="services__title">Web Development</h3>
              <p className="services__description">
                We offer our clients excellent quality services for many years,
                with the best and delicious food in the city.
              </p>
            </div>

            <div className="services__content ">
              <svg
                className="services__img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.445 3H7.555C7.21 3 6.889 3.178 6.706 3.47L3.25 9h17.5l-3.456-5.53C17.111 3.178 16.79 3 16.445 3zM11.26 21.186c.397.437 1.083.437 1.48 0L22 11H2L11.26 21.186z"></path>
              </svg>
              <h3 className="services__title">Web Design</h3>
              <p className="services__description">
                We offer our clients excellent quality services for many years,
                with the best and delicious food in the city.
              </p>
            </div>

            <div className="services__content">
              <svg
                className="services__img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7 3H9V21H7zM4 3H6V21H4zM10 3H12V21H10z"></path>
                <path
                  transform="scale(-1) rotate(69.775 17.21 -24.221)"
                  d="M7.888 11H25.887999999999998V13H7.888z"
                ></path>
              </svg>{" "}
              <h3 className="services__title">Ui Design</h3>
              <p className="services__description">
                We offer our clients excellent quality services for many years,
                with the best and delicious food in the city.
              </p>
            </div>
          </div>
        </section>

        <Tabs />

        <section className="featured section bd-container" id="featured">
          <h2 className="section-title">Featured Projects</h2>
          {projects.map((feature) => (
            <div key={feature.id} className="featured__container">
              <div className="featured__content mb-5">
                <img
                  src={feature.img}
                  className="featured__img rounded"
                  alt="featured image"
                />
                <div className="featured__data bg-white">
                  <p className="featured__count">0{feature.id}. </p>
                  <h3 className="featured__title">{feature.title}</h3>
                  <p className="featured__description">{feature.content}</p>
                  <div className=" my-4 ">
                    <span className="font-bold mr-2  text-gray-600 bg-gray-300 rounded-sm  px-1.5 py-1  ">
                      {feature.stack[0]}
                    </span>
                    <span className="font-bold text-gray-600 bg-gray-300 rounded-sm  px-1.5 py-1 ">
                      {feature.stack[1]}
                    </span>
                  </div>
                  <div className="featured__link flex flex-row px-1 ">
                    <a href="#">{feature.githubIcon}</a>
                    <a href="#">{feature.shareIcon}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section>
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl">Latest news</h2>
            <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div className="block md:flex flex-wrap space-x-0 lg:flex lg:space-x-6">
            <div className="rounded  md:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p className="text-gray-700 mt-2">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>

                <a
                  href="#"
                  className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="rounded w-full md:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p className="text-gray-700 mt-2">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>

                <a
                  href="#"
                  className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="rounded w-full md:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p className="text-gray-700 mt-2">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>

                <a
                  href="#"
                  className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
