"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  overlay?: React.ReactNode;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  priority = false,
  objectFit = "cover",
  overlay,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Fallback si l'image ne charge pas
  const fallbackSrc = "/images/truck-placeholder.svg";

  return (
    <div className={`relative overflow-hidden ${containerClassName || ""}`}>
      {/* Skeleton loader */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-xl" />
      )}

      <Image
        src={hasError ? fallbackSrc : src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        className={`
          transition-all duration-700 ease-in-out
          ${isLoading ? "scale-105 blur-lg opacity-0" : "scale-100 blur-0 opacity-100"}
          ${objectFit === "cover" ? "object-cover" : ""}
          ${objectFit === "contain" ? "object-contain" : ""}
          ${className || ""}
        `}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        sizes={fill ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        unoptimized={src.startsWith("data:")}
      />

      {/* Overlay optionnel */}
      {overlay && (
        <div className="absolute inset-0 z-10">
          {overlay}
        </div>
      )}
    </div>
  );
}