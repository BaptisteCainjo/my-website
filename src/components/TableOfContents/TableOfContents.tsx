"use client";

import { useEffect, useState } from "react";
import styles from "./TableOfContents.module.scss";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;
    const extractedHeadings: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

      extractedHeadings.push({ id, text, level });
    }

    setHeadings(extractedHeadings);

    const timeout = setTimeout(() => {
      extractedHeadings.forEach((heading) => {
        const elements = Array.from(
          document.querySelectorAll(`h${heading.level}`)
        );
        const element = elements.find((el) => {
          const text = el.textContent?.trim() || "";
          return text === heading.text;
        });

        if (element && !element.id) {
          element.id = heading.id;
        }
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
      }
    );


    const timeout = setTimeout(() => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 200);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={styles.tableOfContents}>
      <h2 className={styles.title}>Sommaire</h2>
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${styles.item} ${styles[`level${heading.level}`]} ${
              activeId === heading.id ? styles.active : ""
            }`}
          >
            <a
              href={`#${heading.id}`}
              className={styles.link}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
