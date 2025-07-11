import postsJson from "@/utils/data/blogPosts.json";
import { FormEvent, useMemo } from "react";
import FilterBarStyle from "./FilterBar.module.scss";

interface FilterBarProps {
  actifFilter: string;
  handleClickFilterBtn: (btn: FormEvent<HTMLButtonElement>) => void;
}

export default function FilterBar({
  actifFilter,
  handleClickFilterBtn,
}: FilterBarProps) {
  const tagFrequency = useMemo(() => {
    const frequency: { [tag: string]: number } = {};

    postsJson.slice(1).forEach((post) => {
      const mainTag = post.tags;
      frequency[mainTag] = (frequency[mainTag] || 0) + 1;

      post.sub_tags.forEach((subTag) => {
        frequency[subTag] = (frequency[subTag] || 0) + 1;
      });
    });
    return frequency;
  }, []);

  const sortedTags = useMemo(() => {
    return Object.entries(tagFrequency)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [tagFrequency]);

  const allTags = useMemo(() => ["tous", ...sortedTags], [sortedTags]);
  return (
    <nav>
      <ul className={FilterBarStyle.container}>
        {allTags.map((tag, index) => (
          <li key={index}>
            <button
              className={`${FilterBarStyle.btn}${
                tag === actifFilter ? ` ${FilterBarStyle.actif}` : ""
              }`}
              data-tag={tag}
              onClick={handleClickFilterBtn}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
