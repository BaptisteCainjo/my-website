import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import BlogStyle from "@/scss/pages/Blog.module.scss";
import postsJson from "@/utils/data/blogPosts.json";
import formattedDate from "@/utils/functions/formattedDate";
import Link from "next/link.js";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import { comingSoonPosts } from "@/utils/constants";
import { ROUTES } from "@/utils/constants";

export default function BlogPage() {
  const posts = [...postsJson, ...comingSoonPosts];

  return (
    <>
      <NavBar />
      <section className={BlogStyle.header}>
        <h1 className={BlogStyle.label}>Blog</h1>
        <h2 className={BlogStyle.title}>
          J&apos;écris pour mieux penser,
          <br /> je pense pour mieux vivre.
        </h2>
        <p className={BlogStyle.subtitle}>
          Articles sur le développement, l&apos;UX/UI, le développement
          personnel, le voyage et bien d&apos;autres encore.
        </p>
      </section>

      <article className={BlogStyle.featuredPost}>
        <Link
          href={`${ROUTES.BLOG}/${posts[0].slug}`}
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

      <div className={BlogStyle.posts}>
        {posts.slice(1).map((post) => (
          <ArticleCard key={post.id} {...post}></ArticleCard>
        ))}
      </div>
    </>
  );
}
