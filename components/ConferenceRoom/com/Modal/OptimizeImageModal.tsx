"use client";

import { px } from "@/utils/pxToRem";

export default function OptimizeImageModal() {
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
        Optimize image recognition performance
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
        Optimize inference speed for high-resolution images; target 30%
        reduction in processing time. This project focuses on improving the
        efficiency and performance of image recognition algorithms through
        optimization techniques.
      </p>
    </div>
  );
}
