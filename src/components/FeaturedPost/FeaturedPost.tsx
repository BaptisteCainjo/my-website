import React from "react";
import Image from "next/image";
import Link from "next/link";
import postsJson from "@/utils/data/blogPosts.json";
import formattedDate from "@/utils/functions/formattedDate";
import { ROUTES } from "@/utils/constants/routes";
import FeaturedPostStyle from "./FeaturedPost.module.scss";
import { comingSoonPosts } from "@/utils/constants/comingSoonPosts";

export default function FeaturedPost() {
  const posts = [...postsJson, ...comingSoonPosts];
  return (
    <article className={FeaturedPostStyle.post}>
      <Link
        href={`${ROUTES.BLOG}/${posts[0].slug}`}
        className={FeaturedPostStyle.featuredLink}
      >
        <div className={FeaturedPostStyle.imageWrapper}>
          <Image
            src={posts[0].featured_image_url}
            alt={posts[0].title}
            className={FeaturedPostStyle.image}
            width={800}
            height={600}
            priority
          />
          <div className={FeaturedPostStyle.content}>
            <p className={FeaturedPostStyle.meta}>
              {formattedDate(posts[0].created_at)} • {posts[0].tags}
            </p>
            <h3 className={FeaturedPostStyle.postTitle}>{posts[0].title}</h3>
            <p className={FeaturedPostStyle.excerpt}>{posts[0].excerpt}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
