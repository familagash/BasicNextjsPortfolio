import Link from "next/link";
import { articles } from "../data";
import Date from "./date";

const Article = ({ count }) => {
  return (
    <>
      {articles.map(
        (article) =>
          article.id < count && (
            <div className="rounded  md:w-1/2 lg:w-1/3 p-4  " key={article.id}>
              <img src={article.img} className="rounded" alt="technology" />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                  {article.title}
                </h2>
                <p className="text-gray-700 mt-2">{article.content}</p>
                <div className="flex justify-between flex-row my-3 items-center">
                  <Link href={`blog/{id}`}>
                    <a href="#" className=" py-2  rounded text-green-900 ">
                      {" "}
                      {article.link}{" "}
                    </a>
                  </Link>
                  <Date dateString={article.date} />
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default Article;
