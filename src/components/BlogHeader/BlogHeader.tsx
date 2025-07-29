"use client";

import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
import BlogHeaderStyle from "./BlogHeader.module.scss";
import ArrowBackIcon from "../Icons/ArrowBackIcon";

type BlogHeaderProps = {
  type: "list" | "post";
  post?: {
    featured_image_url: string;
    title: string;
    created_at: string;
    updated_at: string;
    tags: string;
    reading_time: number;
  };
  integrationCodes?: { created_at: string }[];
  count?: number;
  isLoading?: boolean;
};

export default function BlogHeader({
  type,
  post,
  integrationCodes = [],
  count,
  isLoading,
}: BlogHeaderProps) {
  const formatedCreatedAt = new Date(
    integrationCodes[0]?.created_at
  ).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getImageSrc = () => {
    if (type === "post" && post) {
      return post.featured_image_url;
    }
    return "/images/linkedin.webp";
  };

  const getTitle = () => {
    if (type === "post" && post) {
      return post.title;
    }
    return "Mes posts LinkedIn";
  };

  const renderMeta = () => {
    if (isLoading) {
      return (
        <>
          <span>Chargement du nombre de posts...</span>
          <span>Chargement de la date du dernier post...</span>
        </>
      );
    }

    if (type === "post" && post) {
      return (
        <>
          <span>
            Publié le {post.created_at}{" "}
            {post.updated_at !== post.created_at &&
              `⎪ Modifié le ${post.updated_at}`}
          </span>
          <span>Catégories : {post.tags}</span>
          <span>Lecture : {post.reading_time} min</span>
        </>
      );
    } else if (type === "list" && count && integrationCodes) {
      return (
        <>
          <span>Nombre de posts : {count}</span>
          <span>Dernier post publié le {formatedCreatedAt}</span>
        </>
      );
    }
    return null;
  };

  return (
    <header className={BlogHeaderStyle.header}>
      <Image
        src={getImageSrc()}
        alt={getTitle()}
        width={800}
        height={600}
        className={BlogHeaderStyle.image}
      />
      <div className={BlogHeaderStyle.headerContent}>
        <Link href={ROUTES.BLOG} className={BlogHeaderStyle.backLink}>
          <ArrowBackIcon />
          <span className={BlogHeaderStyle.backText}>Retour</span>
        </Link>
        <h1 className={BlogHeaderStyle.title}>{getTitle()}</h1>
        <div className={BlogHeaderStyle.meta}>{renderMeta()}</div>
      </div>
    </header>
  );
}
