"use client";
import { useState } from "react";
export default function ProductActions() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setLiked(!liked)}
        className={`${liked ? "bg-green-500" : "bg-red-500"} cursor-pointer p-2`}
      >
        {liked ? "liked" : "like"}
      </button>
      <br />
      <button
        onClick={() => setCount((c) => c + 1)}
        className="cursor-pointer p-2"
      >
        Add :{count}
      </button>
    </div>
  );
}
