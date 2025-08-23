import postsJson from "@/utils/data/blogPosts.json";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export const comingSoonPosts = Array(Math.max(0, 3 - postsJson.length + 1))
  .fill(null)
  .map((_, index) => ({
    id: 1000 + index,
    title: "Article à venir",
    slug: "#",
    excerpt: "Article en cours d'écriture...",
    featured_image_url: "/images/coming_soon.webp",
    created_at: `${String(currentDate.getMonth() + (index + 1)).padStart(
      2,
      "0"
    )}-${currentYear}`,
    tags: "",
  }));

export const allPosts = [...postsJson, ...comingSoonPosts].sort(
  (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
);

export const allPostsWithComingSoon = allPosts.map((post) => ({
  ...post,
  created_at: new Date(post.created_at).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
}));
