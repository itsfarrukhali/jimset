"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DetailDialogProps = {
  buttonLabel: string;
  title: string;
  summary: string;
  details: string[];
  label?: string;
  image?: string;
  imageAlt?: string;
  schedule?: string;
  location?: string;
  href?: string;
  dark?: boolean;
};

export default function DetailDialog({
  buttonLabel,
  title,
  summary,
  details,
  label,
  image,
  imageAlt,
  schedule,
  location,
  href,
  dark = false,
}: DetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={dark ? "outline" : "default"}
          className={
            dark
              ? "mt-4 h-9 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              : "mt-5 h-9 bg-primary text-white hover:bg-primary-dark"
          }
        >
          {buttonLabel} <ArrowRight className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0">
        {image ? (
          <div className="relative aspect-[16/7] overflow-hidden bg-surface">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary-dark/55 to-transparent" />
          </div>
        ) : null}
        <div className="p-6 md:p-8">
          <DialogHeader>
            {label ? (
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                {label}
              </p>
            ) : null}
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{summary}</DialogDescription>
          </DialogHeader>

          {schedule || location ? (
            <div className="mt-5 grid gap-3 rounded-xl border bg-surface p-4 text-sm text-gray-700 sm:grid-cols-2">
              {schedule ? (
                <p className="flex gap-2">
                  <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary" />
                  {schedule}
                </p>
              ) : null}
              {location ? (
                <p className="flex gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  {location}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-700">
            {details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <DialogFooter className="mt-7 border-t pt-5">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            {href ? (
              <Button asChild className="bg-gold text-primary-dark hover:bg-gold/85">
                <Link href={href}>
                  Continue <ExternalLink className="size-4" />
                </Link>
              </Button>
            ) : null}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
