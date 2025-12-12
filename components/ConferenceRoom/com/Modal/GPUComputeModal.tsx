"use client";

import { px } from "@/utils/pxToRem";

export default function GPUComputeModal() {
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
        NVIDIA A100 GPU Computing Power
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
        Provide NVIDIA A100 or equivalent GPU computing power for model
        training. At least 40GB VRAM GPU required for large-scale image
        recognition model training and fine-tuning. This project offers
        high-performance computing resources for AI research and development.
      </p>
    </div>
  );
}
