"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

/**
 * Responsive project gallery.
 * - Desktop: grid with a lightbox on click.
 * - Mobile: simple stacked layout, no heavy animation.
 */
export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);
  const next = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length,
    );
  const prev = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length,
    );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setLightboxIndex(index)}
            aria-label={`View ${title} screenshot ${index + 1}`}
            className="relative aspect-video overflow-hidden rounded-xl shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f70f1]"
          >
            <Image
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox — desktop only */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot viewer`}
          className="fixed inset-0 z-[70] hidden md:flex items-center justify-center bg-black/90 p-8"
          onClick={closeLightbox}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={closeLightbox}
            className="absolute p-2 text-3xl text-gray-100 rounded-full top-6 right-6 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ✕
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute p-2 text-4xl text-gray-100 rounded-full left-6 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${title} screenshot ${lightboxIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute p-2 text-4xl text-gray-100 rounded-full right-6 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
