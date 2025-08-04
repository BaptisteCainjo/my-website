"use client";

import ArticleCard from "@/components/ArticleCard/ArticleCard";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost";
import FilterBar from "@/components/FilterBar/FilterBar";
import NavBar from "@/components/NavBar/NavBar";
import NotificationBadge from "@/components/NotificationBadge/NotificationBadge";
import BlogStyle from "@/scss/pages/Blog.module.scss";
import { comingSoonPosts } from "@/utils/constants";
import postsJson from "@/utils/data/blogPosts.json";
import { supabase } from "@/utils/supabaseClient";
import Link from "next/link.js";
import { FormEvent, useEffect, useState } from "react";

export default function BlogPage() {
  const [actifFilter, setActifFilter] = useState("tous");
  const [visibleCount, setVisibleCount] = useState(3);
  const [newPostsCount, setNewPostsCount] = useState(0);

  const currentDate = new Date();
  const currentDateWithoutSevenDay = new Date(
    currentDate.setDate(currentDate.getDate() - 7)
  );

  async function loadData() {
    try {
      const query = supabase
        .from("linkedin")
        .select("id, code, created_at")
        .order("created_at", { ascending: false });

      const { data, error } = await query;

      if (error) throw error;

      let count = 0;
      data?.forEach((post) => {
        if (new Date(post.created_at) >= currentDateWithoutSevenDay) {
          count++;
          setNewPostsCount(count);
        }
      });
    } catch (error) {
      console.error("Erreur de chargement:", error);
    }
  }

  useEffect(() => {
    loadData();
  });

  const handleClickFilterBtn = (e: FormEvent<HTMLButtonElement>) => {
    setActifFilter(e.currentTarget.dataset.tag || "tous");
  };

  const posts =
    actifFilter === "tous"
      ? [...postsJson.slice(1), ...comingSoonPosts]
      : postsJson.slice(1).filter((post) => {
          const tagsMatch = Array.isArray(post.tags)
            ? post.tags.includes(actifFilter)
            : post.tags === actifFilter;
          const subTagsMatch = Array.isArray(post.sub_tags)
            ? post.sub_tags.includes(actifFilter)
            : post.sub_tags === actifFilter;
          return tagsMatch || subTagsMatch;
        });

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

      <FeaturedPost />

      <Link href={"blog/linkedin"} className={BlogStyle["linkedin-link"]}>
        Mes posts LinkedIn
        {newPostsCount && newPostsCount > 0 ? (
          <NotificationBadge nbrPosts={newPostsCount} />
        ) : null}
      </Link>

      <FilterBar
        actifFilter={actifFilter}
        handleClickFilterBtn={handleClickFilterBtn}
      />

      <section className={BlogStyle.posts}>
        {posts.slice(0, visibleCount).map((post) => (
          <ArticleCard key={post.id} {...post} />
        ))}

        {posts.length > 3 && (
          <button
            onClick={() =>
              visibleCount < posts.length
                ? setVisibleCount(visibleCount + 3)
                : (setVisibleCount(3),
                  window.scrollTo({ top: 0, behavior: "smooth" }))
            }
            className={BlogStyle.loadMore}
          >
            {visibleCount < posts.length
              ? "Voir plus d'articles"
              : "Voir moins d'articles"}
          </button>
        )}
      </section>
    </>
  );
}
