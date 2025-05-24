import Image from "next/image";
import ArticleCardStyle from "./ArticleCard.module.scss";

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  featured_image_url: string;
  tags: string[];
  created_at: string;
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  featured_image_url,
  tags,
  created_at,
}: ArticleCardProps) {
  return (
    <article className={ArticleCardStyle.postCard}>
      <Image
        src={featured_image_url}
        alt={title}
        className={ArticleCardStyle.postImage}
        width={400}
        height={300}
        priority={false}
      />
      <div className={ArticleCardStyle.postContent}>
        <div>
          <p className={ArticleCardStyle.meta}>
            {tags} • {created_at}
          </p>
          <h4 className={ArticleCardStyle.postTitle}>{title}</h4>
          <p className={ArticleCardStyle.excerpt}>{excerpt}</p>
        </div>
        <span className={ArticleCardStyle.arrow}>→</span>
      </div>
    </article>
  );
}
