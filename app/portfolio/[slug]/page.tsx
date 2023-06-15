import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPosts from "@/helpers/getPosts";
import ProjectsNav from "@/components/projectNav";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="modular">
        <ProjectsNav keyWords={[]} setTag={() => {}} showTags={false} />
        <section className="resume-section" id="o">
          <div className="resume-section-content">
            <h3>{post.data.title}</h3>
            <p>{post.data.description}</p>
            <article className="prose">
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostPage;
