import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import BlogStyle from "@/scss/pages/Blog.module.scss";
import posts from "@/utils/data/blogPosts.json";
import formattedDate from "@/utils/functions/formattedDate";
import Link from "next/link.js";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

export default function BlogPage() {
  return (
    <>
      <NavBar />
      <section className={BlogStyle.header}>
        <h1 className={BlogStyle.label}>Blog</h1>
        <h2 className={BlogStyle.title}>
          J’écris pour mieux penser,
          <br /> je pense pour mieux vivre.
        </h2>
        <p className={BlogStyle.subtitle}>
          Articles sur le développement, l’UX/UI, le développement personnel et
          le voyage.
        </p>
      </section>

      <article className={BlogStyle.featuredPost}>
        <Link
          href={`/blog/${posts[0].slug}`}
          className={BlogStyle.featuredLink}
        >
          <div className={BlogStyle.featuredImageWrapper}>
            <Image
              src={posts[0].featured_image_url}
              alt={posts[0].title}
              className={BlogStyle.featuredImage}
              width={800}
              height={600}
              priority
            />
            <div className={BlogStyle.featuredContent}>
              <p className={BlogStyle.meta}>
                {formattedDate(posts[0].created_at)} • {posts[0].tags}
              </p>
              <h3 className={BlogStyle.postTitle}>{posts[0].title}</h3>
              <p className={BlogStyle.excerpt}>{posts[0].excerpt}</p>
            </div>
          </div>
        </Link>
      </article>

      <div className={BlogStyle.postGrid}>
        {posts.slice(0).map((post) => (
          <ArticleCard key={post.id} {...post}></ArticleCard>
        ))}
      </div>
    </>
  );
}
