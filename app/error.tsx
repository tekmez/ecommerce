"use client";

import { Button } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>No products found</h1>
      <Button
        type="primary"
        style={{ backgroundColor: "#f5222d", borderColor: "#f5222d" }}
        onClick={() => {
          const params = new URLSearchParams(searchParams);
          params.delete("page");
          params.delete("query");
          params.delete("sortBy");
          params.delete("brand");
          params.delete("model");
          window.location.href = `/?${params}`;
          reset();
        }}
      >
        Go back
      </Button>
    </div>
  );
}
