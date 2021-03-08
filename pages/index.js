import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Link from "next/link";
import { projects, services } from "../data";
import Article from "../components/article";

// import { server } from "../config/index";
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/projects`);
//   const projects = await res.json();

//   return {
//     props: {
//       projects,
//     },
//   };
// };

export default function Home() {
  return (
    <>
      <Header />

      <main className="l-main">
        <section className="services  bd-container py-12 mb-5" id="services">
          <h2 className="section-title">Services</h2>
          <div className="services__container  bd-grid">
            {services.map((service) => (
              <div
                className="services__content  flex flex-col justify-center "
                key={service.id}
              >
                {service.icon}
                <h3 className="services__title">{services.title}</h3>
                <p className="services__description">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Tabs />

        <section className="featured section bd-container" id="featured">
          <h2 className="section-title">Featured Projects</h2>
          {projects.map((feature) => (
            <div
              key={feature.id}
              className="featured__container featured__content "
            >
              <div className="mb-5 lg:mb-0">
                <img
                  src={feature.img}
                  className="featured__img rounded"
                  alt="featured__image"
                />
                <div className="featured__data bg-white auto  ">
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
          <div className=" flex mt-16 mb-4 px-4  items-center justify-between">
            <h2 className="font-bold text-3xl">Latest articles</h2>
            <Link href="/blog">
              <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
                View all
              </a>
            </Link>
          </div>
          <Article count="3" />
        </section>
      </main>
    </>
  );
}
