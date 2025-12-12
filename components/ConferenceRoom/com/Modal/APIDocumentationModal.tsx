"use client";

import { px } from "@/utils/pxToRem";

export default function APIDocumentationModal() {
  return (
    <div>
      <h2
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(24),
          marginBottom: px(20),
          color: "#000000",
        }}
      >
        Write detailed API documentation
      </h2>
      <p
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(16),
          lineHeight: "150%",
          color: "#555555",
        }}
      >
        Document the new scene analysis feature with examples. This project
        requires comprehensive API documentation including usage examples, code
        samples, and best practices for developers.
      </p>
    </div>
  );
}
