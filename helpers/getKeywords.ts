import { IPost } from "./interfaces";

const getKeywords = (posts: IPost[]): string[] => {
  const keywords: string[] = [];
  posts.forEach((post) => {
    post.keywords.forEach((keyword) => {
      if (!keywords.includes(keyword)) {
        keywords.push(keyword);
      }
    });
  });
  return keywords.sort((a, b) => a.localeCompare(b));
};
export default getKeywords;
