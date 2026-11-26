"use client";

import type React from "react";

/* A53: images GENERATED during the run by the image-generation capability
 * (R5) — provider, prompt, validation and moderation lineage live in the
 * AssetArtifact rows and s3_run.image_asset audits, never in this file. */

export function GeneratedImage_a53_home__hero_1(props?: { className?: string; style?: React.CSSProperties; priority?: boolean; [key: string]: unknown }) {
  const mergedClass = props?.className ? `a53-generated-asset ${props.className}` : "a53-generated-asset w-full h-full overflow-hidden";
  return (
    <div data-a53-slot="a53-home__hero-1" className={mergedClass} style={props?.style}>
      <ImportedGeneratedImage src="/generated/a53-home__hero-1.jpg" alt="Generated imagery for home__hero-1 (background) — Memorial headstone etched with Pikachu standing in a landscaped garden" />
    </div>
  );
}
export { GeneratedImage_a53_home__hero_1 as GeneratedImage_home__hero_1 };

export function GeneratedImage_a53_about__hero_1(props?: { className?: string; style?: React.CSSProperties; priority?: boolean; [key: string]: unknown }) {
  const mergedClass = props?.className ? `a53-generated-asset ${props.className}` : "a53-generated-asset w-full h-full overflow-hidden";
  return (
    <div data-a53-slot="a53-about__hero-1" className={mergedClass} style={props?.style}>
      <ImportedGeneratedImage src="/generated/a53-about__hero-1.jpg" alt="Generated imagery for about__hero-1 (background) — Pikachu plush beside a memorial gravestone in a garden; aspect: 16:9;" />
    </div>
  );
}
export { GeneratedImage_a53_about__hero_1 as GeneratedImage_about__hero_1 };

export function GeneratedImage_a53_contact__hero_1(props?: { className?: string; style?: React.CSSProperties; priority?: boolean; [key: string]: unknown }) {
  const mergedClass = props?.className ? `a53-generated-asset ${props.className}` : "a53-generated-asset w-full h-full overflow-hidden";
  return (
    <div data-a53-slot="a53-contact__hero-1" className={mergedClass} style={props?.style}>
      <ImportedGeneratedImage src="/generated/a53-contact__hero-1.jpg" alt="Generated imagery for contact__hero-1 (background) — Photo of a stone memorial monument in a garden with yellow flowers " />
    </div>
  );
}
export { GeneratedImage_a53_contact__hero_1 as GeneratedImage_contact__hero_1 };

export function GeneratedImage_a53_home__other_1(props?: { className?: string; style?: React.CSSProperties; priority?: boolean; [key: string]: unknown }) {
  const mergedClass = props?.className ? `a53-generated-asset ${props.className}` : "a53-generated-asset aspect-[4/3] overflow-hidden rounded-sm";
  return (
    <div data-a53-slot="a53-home__other-1" className={mergedClass} style={props?.style}>
      <ImportedGeneratedImage src="/generated/a53-home__other-1.jpg" alt="Generated imagery for home__other-1 (product) — Family crouching together beside Pikachu at a memorial garden with heads" />
    </div>
  );
}
export { GeneratedImage_a53_home__other_1 as GeneratedImage_home__other_1 };

export function GeneratedImage_a53_about__content_1(props?: { className?: string; style?: React.CSSProperties; priority?: boolean; [key: string]: unknown }) {
  const mergedClass = props?.className ? `a53-generated-asset ${props.className}` : "a53-generated-asset aspect-[4/3] overflow-hidden rounded-sm";
  return (
    <div data-a53-slot="a53-about__content-1" className={mergedClass} style={props?.style}>
      <ImportedGeneratedImage src="/generated/a53-about__content-1.jpg" alt="Generated imagery for about__content-1 (product) — Museum display of Pikachu memorabilia, framed art and figurines; aspe" />
    </div>
  );
}
export { GeneratedImage_a53_about__content_1 as GeneratedImage_about__content_1 };

export function GeneratedImage_a53_contact__contact_details_1(props?: { className?: string; style?: React.CSSProperties; priority?: boolean; [key: string]: unknown }) {
  const mergedClass = props?.className ? `a53-generated-asset ${props.className}` : "a53-generated-asset aspect-[4/3] overflow-hidden rounded-sm";
  return (
    <div data-a53-slot="a53-contact__contact-details-1" className={mergedClass} style={props?.style}>
      <ImportedGeneratedImage src="/generated/a53-contact__contact-details-1.jpg" alt="Generated imagery for contact__contact-details-1 (product) — Stylized street map illustration in soft greens, creams, an" />
    </div>
  );
}
export { GeneratedImage_a53_contact__contact_details_1 as GeneratedImage_contact__contact_details_1 };

function GeneratedAssetsDefault(props?: { className?: string; style?: React.CSSProperties; [key: string]: unknown }): React.ReactElement | null {
  return <GeneratedImage_a53_home__hero_1 {...props} />;
}
Object.assign(GeneratedAssetsDefault, {
  GeneratedImage_a53_home__hero_1,
  GeneratedImage_a53_about__hero_1,
  GeneratedImage_a53_contact__hero_1,
  GeneratedImage_a53_home__other_1,
  GeneratedImage_a53_about__content_1,
  GeneratedImage_a53_contact__contact_details_1,
});
export default GeneratedAssetsDefault;

function ImportedGeneratedImage({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- deterministic bytes committed beside this file; no optimizer dependency
    <img src={src} alt={alt} decoding="async" className="h-full w-full object-cover" />
  );
}
