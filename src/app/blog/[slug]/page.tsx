import NavBar from "@/components/NavBar/NavBar";
import postsJson from "@/utils/data/blogPosts.json";
import Image from "next/image";
import BlogPostStyle from "@/scss/pages/BlogPost.module.scss";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import Link from "next/link.js";
import { ROUTES } from "@/utils/constants/routes";

export function generateStaticParams() {
  return postsJson.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postsJson.find((p) => p.slug === params.slug);

  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    `${post?.slug}.md`
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
            src={post.featured_image_url}
            alt={post.title}
            width={800}
            height={600}
            className={BlogPostStyle.image}
          />
          <div className={BlogPostStyle.headerContent}>
            <Link href={`${ROUTES.BLOG}`} className={BlogPostStyle.backLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              <span className={BlogPostStyle.backText}>Retour</span>
            </Link>

            <h1 className={BlogPostStyle.title}>{post.title}</h1>
            <div className={BlogPostStyle.meta}>
              <span>
                {" "}
                Publié le {post.created_at}{" "}
                {post.updated_at !== post.created_at &&
                  `⎪ Modifié le ${post.updated_at}`}
              </span>
              <span> Catégories : {post.tags}</span>
              <span> Lecture : {post.reading_time} min</span>
            </div>
          </div>
        </header>

        <section className={BlogPostStyle.content}>
          <ReactMarkdown>{fileContent}</ReactMarkdown>
        </section>

        {postsJson.filter((p) => p.slug !== params.slug).length > 0 && (
          <section className={BlogPostStyle.related}>
            <h2>Plus d&apos;articles que vous allez adorer</h2>
            <div className={BlogPostStyle.posts}>
              {postsJson
                .filter((p) => p.slug !== params.slug)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map((post) => (
                  <ArticleCard key={post.id} {...post}></ArticleCard>
                ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
