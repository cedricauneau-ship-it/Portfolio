"use client";

import Styles from "./ImageModal.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="closeGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#FF8A00" />
        <stop offset="50%" stopColor="#E13A8B" />
        <stop offset="100%" stopColor="#19C3D3" />
      </linearGradient>
    </defs>

    <line
      x1="6"
      y1="6"
      x2="18"
      y2="18"
      stroke="#E6E8EE"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <line
      x1="18"
      y1="6"
      x2="6"
      y2="18"
      stroke="#E6E8EE"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

type Props = {
  src: any;
  alt: string;
};

export default function ImageModal({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className={Styles.thumbnail}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className={Styles.tableOverlay}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className={Styles.closeButton}
            aria-label="Fermer l’image"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            <CloseIcon />
          </button>

          <Image
            src={src}
            alt={alt}
            width={1200}
            height={700}
            className={Styles.tableImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
