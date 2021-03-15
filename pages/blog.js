import Link from "next/link";
import Article from "../components/article";

const Blog = () => {
  return (
    <div className="block section space-x-3 lg:space-x-3 bd-container">
      <div className=" md:flex flex-wrap">
        <Article count="5" />
      </div>
    </div>
  );
};

export default Blog;
