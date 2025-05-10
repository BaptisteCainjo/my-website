import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import posts from "@/utils/data/blogPosts.json";
import BlogStyle from "@/scss/pages/Blog.module.scss";

export default function BlogPage() {
  return (
    <>
      <NavBar />
      <main className={BlogStyle.blog}>
        <section className={BlogStyle.header}>
          <h1 className={BlogStyle.label}>Blog</h1>
          <h2 className={BlogStyle.title}>
            J’écris pour mieux penser,
            <br /> je pense pour mieux vivre.
          </h2>
          <p className={BlogStyle.subtitle}>
            Articles sur le développement, l’UX/UI, le développement personnel
            et le voyage.
          </p>
        </section>

        <article className={BlogStyle.featuredPost}>
          <div className={BlogStyle.featuredImageWrapper}>
            <Image
              src={posts[0].featured_image_url}
              alt={posts[0].title}
              className={BlogStyle.featuredImage}
              width={800}
              height={600}
            />
            <div className={BlogStyle.featuredContent}>
              <p className={BlogStyle.meta}>
                {posts[0].tags} • {posts[0].created_at}
              </p>
              <h3 className={BlogStyle.postTitle}>{posts[0].title}</h3>
              <p className={BlogStyle.excerpt}>{posts[0].excerpt}</p>
            </div>
          </div>
        </article>

        <div className={BlogStyle.postGrid}>
          {posts.slice(1).map((post) => (
            <article key={post.id} className={BlogStyle.postCard}>
              <Image
                src={post.featured_image_url}
                alt={post.title}
                className={BlogStyle.postImage}
                width={400}
                height={300}
              />
              <div className={BlogStyle.postContent}>
                <div>
                  <p className={BlogStyle.meta}>
                    {post.tags} • {post.created_at}
                  </p>
                  <h4 className={BlogStyle.postTitle}>{post.title}</h4>
                  <p className={BlogStyle.excerpt}>{post.excerpt}</p>
                </div>
                <span className={BlogStyle.arrow}>→</span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
