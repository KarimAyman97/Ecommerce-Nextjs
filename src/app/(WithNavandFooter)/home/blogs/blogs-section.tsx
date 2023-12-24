import { Blog } from "@/app/_types/types";
import Link from "next/link";
import { BlogsAnimation } from "./blogs-animation";
import { BlogsHeaderAnimation } from "./blogs-header-animation";

const blogs: Blog[] = [
  {
    id: "1",
    about: "Guides",
    title:
      "Stick with High-Quality, Healthy Non-Toxic Cookware for Safe & Healthy Eating",
    image: "imgs/home/blogs/1.jpg",
    description:
      "When selecting your cookware, there are several things to consider especially when it is nonstick. Is your cookware non-toxic? Find out now!",
    author: "User 1",
    datePublished: "January 26, 2021",
    link: "#",
  },
  {
    id: "3",
    about: "Guides",
    title: "Vegetable Cooking Chart",
    image: "imgs/home/blogs/2.jpg",
    description:
      "There are several benefits to cooking using the Vapor® Cooking Method. One of which is the succulence achieved when cooking your favorite vegetables. Everyone prefer their vegetables cooked in different...",
    author: "User 2",
    datePublished: "January 26, 2022",
    link: "#",
  },
  {
    id: "2",
    about: "Guides",
    title: "Waterless Cookware – The Best Cookware",
    image: "imgs/home/blogs/3.jpg",
    description:
      "Maintaining your active, healthy lifestyle isn’t always a breeze. It’s more than just skipping the junk food and taking the stairs; it takes commitment, and requires a conscience daily effort...",
    author: "User 3",
    datePublished: "July 22, 2023",
    link: "#",
  },
];
export const BlogsSection = () => {
  return (
    <section className="mt-32 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <BlogsHeaderAnimation>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Latest from blog
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Stay updated with the latest trends, tips, and recipes in the
              culinary world with our blog. Discover valuable insights, product
              reviews, and expert advice on all things cookware.
            </p>
          </div>
        </BlogsHeaderAnimation>
        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          {blogs.map((blog) => (
            <BlogPost key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BlogElementProps {
  blog: Blog;
}

const BlogPost: React.FC<BlogElementProps> = ({ blog }) => {
  return (
    <BlogsAnimation>
      <div>
        <Link href={blog.link} title="" className="block aspect-w-4 aspect-h-3">
          <img className="object-cover w-full h-full" src={blog.image} alt="" />
        </Link>
        <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
          {blog.about}
        </span>
        <p className="mt-6 text-xl font-semibold lg:h-28">
          <Link href={blog.link} title="" className="text-black">
            {blog.title}
          </Link>
        </p>
        <p className="mt-4 text-gray-600 line-clamp-3">{blog.description}</p>
        <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
        <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
          {blog.author} . {blog.datePublished}
        </span>
      </div>
    </BlogsAnimation>
  );
};
