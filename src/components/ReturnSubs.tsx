"use client";

import { useEffect, useState } from "react";

export default function ReturnSubs() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/subscriberCount")
      .then((res) => res.json())
      .then((data) => setCount(parseInt(data.subscribers, 10)))
      .catch(console.error);
  }, []);

  return (
    <p>
      {count !== null ? count.toLocaleString() : "Loading..."}
    </p>
  );
}