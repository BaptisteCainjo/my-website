"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleCard.module.scss";
import formattedDate from "@/utils/functions/formattedDate";
import ArrowBlog from "@/assets/svg/icons/arrow_blog.svg";
import { ROUTES } from "@/utils/constants";

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  featured_image_url: string;
  tags: string;
  created_at: string;
  slug: string;
}

export default function ArticleCard({
  title,
  excerpt,
  featured_image_url,
  tags,
  created_at,
  slug,
}: ArticleCardProps) {
  return (
    <Link href={`${ROUTES.BLOG}/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={featured_image_url}
          alt={title}
          className={styles.image}
          priority={false}
          fill
        />
        <div className={styles.iconWrapper}>
          <Image
            src={ArrowBlog}
            className={styles.icon}
            alt="Flèche renvoyant sur un article"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.meta}>
          {formattedDate(created_at)}
          {tags !== "à venir" && ` • ${tags}`}
        </p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </Link>
  );
}
