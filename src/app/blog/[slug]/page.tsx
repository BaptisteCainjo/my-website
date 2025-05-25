import NavBar from "@/components/NavBar/NavBar";
import posts from "@/utils/data/blogPosts.json";
import Image from "next/image";
import BlogPostStyle from "@/scss/pages/BlogPost.module.scss";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "documentation-web-equilibre-dev-ux.md"
  );
  filePath;
  const fileContent = fs.readFileSync(filePath, "utf8");

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <NavBar />
      <article className={BlogPostStyle.blogPost}>
        <header className={BlogPostStyle.header}>
          <Image
            src={posts[0].featured_image_url}
            alt={posts[0].title}
            width={800}
            height={600}
          />
          <div>
            <h1 className={BlogPostStyle.title}>{post.title}</h1>
            <div className={BlogPostStyle.meta}>
              <span>Published: {post.created_at}</span>
              <span>Category: {post.tags}</span>
              <span>Reading time: {post.reading_time} minutes</span>
            </div>
          </div>
        </header>

        <section className={BlogPostStyle.content}>
          <ReactMarkdown>{fileContent}</ReactMarkdown>
        </section>

        <section className={BlogPostStyle.related}>
          <h2>Plus d&apos;articles que vous allez adorer</h2>

          {posts.slice(0).map((post) => (
            <ArticleCard key={post.id} {...post}></ArticleCard>
          ))}
        </section>
      </article>
    </>
  );
}
