import getPosts from "@/helpers/getPosts";
import getKeywords from "@/helpers/getKeywords";
import PortfolioList from "@/components/portfolio-list";
import "@/styles/main.css";
const posts = getPosts();
const keywords = getKeywords(posts);
export default function PortfolioHome() {
  return (
    <>
      <PortfolioList posts={posts} keywords={keywords} />
    </>
  );
}
