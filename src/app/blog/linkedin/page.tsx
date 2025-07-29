"use client";

import { memo, useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import NavBar from "@/components/NavBar/NavBar";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import LinkedinStyle from "@/scss/pages/Linkedin.module.scss";
import { useInView } from "react-intersection-observer";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const ITEMS_PER_PAGE = 6;

type IntegrationCode = {
  id: string;
  code: string;
  created_at: string;
};

const IntegrationCodeItem = memo(
  ({ integrationCode }: { integrationCode: IntegrationCode }) => (
    <div
      key={integrationCode.id}
      dangerouslySetInnerHTML={{ __html: integrationCode.code }}
    />
  )
);

IntegrationCodeItem.displayName = "IntegrationCodeItem";

export default function LinkedinPage() {
  const [integrationCodes, setIntegrationCodes] = useState<IntegrationCode[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({ threshold: 0, rootMargin: "100px" });

  const loadData = async (isInitial = false) => {
    if (!hasMore && !isInitial) {
      return;
    }

    try {
      const startRange = isInitial ? 0 : integrationCodes.length;
      const endRange = startRange + ITEMS_PER_PAGE - 1;

      const query = supabase
        .from("linkedin")
        .select("id, code, created_at", {
          count: isInitial ? "exact" : "estimated",
        })
        .order("created_at", { ascending: false })
        .range(startRange, endRange);

      const { data, count: totalCount, error } = await query;

      if (error) throw error;

      if (isInitial) {
        setIntegrationCodes(data || []);
        if (totalCount !== null) {
          setCount(totalCount);
          setHasMore(totalCount > ITEMS_PER_PAGE);
        }
      } else {
        setIntegrationCodes((prev) => [...prev, ...(data || [])]);
        setHasMore(data && data.length === ITEMS_PER_PAGE);
      }
    } catch (error) {
      console.error("Erreur de chargement:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData(true);
  });

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadData(false);
    }
  }, [inView, hasMore, isLoading]);

  return (
    <>
      <NavBar />
      <section>
        <BlogHeader
          type="list"
          integrationCodes={integrationCodes}
          count={count}
          isLoading={isLoading}
        />

        {isLoading && integrationCodes.length === 0 ? (
          <div className={LinkedinStyle.content}>
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <div key={index}>
                <Skeleton height={400} />
              </div>
            ))}
          </div>
        ) : (
          <>
            <article className={LinkedinStyle.content}>
              {integrationCodes.map((integrationCode) => (
                <IntegrationCodeItem
                  key={integrationCode.id}
                  integrationCode={integrationCode}
                />
              ))}

              {hasMore && <div ref={ref}></div>}
            </article>
          </>
        )}
      </section>
    </>
  );
}
