import fs from "fs";
import matter from "gray-matter";
import { IPost } from "./interfaces";

const getPosts = (): IPost[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      slug: fileName.replace(".md", ""),
      description: matterResult.data.description,
      keywords: matterResult.data.keywords,
    };
  });

  return posts;
};

export default getPosts;
