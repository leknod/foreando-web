"use client";

import { useState } from "react";

export default function ForumIcon({
  url = "",
  name = "",
  size = "md",
  className = "",
}) {
  const [errorLevel, setErrorLevel] = useState(0);

  const initial = (name?.trim()?.charAt(0) || "F").toUpperCase();
  const isSmall = size === "sm";

  const containerClasses = isSmall
    ? "flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded border border-slate-200 bg-slate-50"
    : "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-linear-to-br from-slate-50 to-slate-100";

  const imgClasses = isSmall
    ? "h-3.5 w-3.5 object-contain"
    : "h-6 w-6 object-contain";

  const textClasses = isSmall
    ? "text-[11px] font-bold leading-none bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent select-none"
    : "text-xl font-bold leading-none bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent select-none";

  let hostname = "";
  let apexDomain = "";

  if (url) {
    try {
      let parsed = url.trim();
      if (!/^https?:\/\//i.test(parsed)) {
        parsed = `https://${parsed}`;
      }
      hostname = new URL(parsed).hostname;

      // Extract apex domain (e.g., foro.adslzone.net -> adslzone.net, www.abretelibro.com -> abretelibro.com)
      const parts = hostname.split(".");
      if (parts.length >= 2) {
        const isDoubleTld =
          parts.length > 2 &&
          ["com", "org", "edu", "gob", "co", "net", "nom"].includes(
            parts[parts.length - 2],
          );
        apexDomain = isDoubleTld
          ? parts.slice(-3).join(".")
          : parts.slice(-2).join(".");
      } else {
        apexDomain = hostname;
      }
    } catch {
      hostname = "";
      apexDomain = "";
    }
  }

  // Level 0: Try Google Favicon (sz=64) by apex domain (e.g. adslzone.net)
  // Level 1: Try Google Favicon (sz=64) by exact hostname if different (e.g. foro.adslzone.net)
  // Level 2+: Immediate fallback to styled letter avatar
  let currentSrc = null;
  if (errorLevel === 0 && (apexDomain || hostname)) {
    currentSrc = `https://www.google.com/s2/favicons?domain=${apexDomain || hostname}&sz=64`;
  } else if (errorLevel === 1 && hostname && hostname !== apexDomain) {
    currentSrc = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  }

  const hasSubdomain = hostname && apexDomain && hostname !== apexDomain;
  const maxLevel = hasSubdomain ? 2 : 1;

  // Detect when Google returns 404 or the 16x16 default generic globe placeholder
  const handleImageLoad = (e) => {
    const img = e.currentTarget;
    if (img.naturalWidth <= 16 && img.naturalHeight <= 16) {
      setErrorLevel((prev) => (hasSubdomain && prev === 0 ? 1 : 2));
    }
  };

  const handleImageError = () => {
    setErrorLevel((prev) => (hasSubdomain && prev === 0 ? 1 : 2));
  };

  if (currentSrc && errorLevel < maxLevel) {
    return (
      <div className={`${containerClasses} ${className}`}>
        <img
          key={currentSrc}
          src={currentSrc}
          alt={name ? `Icono de ${name}` : ""}
          className={imgClasses}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={`${containerClasses} ${className}`}>
      <span className={textClasses} aria-hidden="true">
        {initial}
      </span>
    </div>
  );
}
