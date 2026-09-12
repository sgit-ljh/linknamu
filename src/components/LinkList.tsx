"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type Link = {
  id: string;
  label: string;
  href: string;
};

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setClicks(data))
      .catch(() => {});
  }, []);

  const handleClick = async (id: string) => {
    try {
      const res = await fetch(`/api/clicks/${id}`, { method: "POST" });
      const data: { count: number } = await res.json();
      setClicks((prev) => ({ ...prev, [id]: data.count }));
    } catch {
      // 네트워크 오류 시 클릭 수 표시는 갱신하지 않는다.
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          label={link.label}
          href={link.href}
          clicks={clicks[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
