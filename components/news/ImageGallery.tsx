"use client";

import Image from "next/image";
import { Expand, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { galleryImages } from "@/data/news-events";

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
      {galleryImages.map((image, index) => (
        <Dialog key={image.src}>
          <DialogTrigger asChild>
            <button
              type="button"
              className={`group relative overflow-hidden rounded-xl bg-gray-100 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              aria-label={`View gallery image: ${image.caption}`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/90 via-primary-dark/5 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-white">
                  <span>
                    <span className="block text-sm font-bold">
                      {image.caption}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-xs text-white/70">
                      <Images className="size-3" /> View gallery image
                    </span>
                  </span>
                  <span className="rounded-full bg-white/15 p-2 backdrop-blur-sm transition group-hover:bg-gold group-hover:text-primary-dark">
                    <Expand className="size-4" />
                  </span>
                </span>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl bg-primary-dark p-4">
            <DialogHeader className="sr-only">
              <DialogTitle>{image.caption}</DialogTitle>
              <DialogDescription>{image.alt}</DialogDescription>
            </DialogHeader>
            <div className="relative h-[72vh] overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <Button className="pointer-events-none bg-black/60 text-white">
                  {image.caption}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
