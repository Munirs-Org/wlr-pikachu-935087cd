import { GeneratedImage_a53_contact__contact_details_1 } from "./generated-assets";

/* A53: images GENERATED during the run by the image-generation capability
 * (R5) — provider, prompt, validation and moderation lineage live in the
 * AssetArtifact rows and s3_run.image_asset audits, never in this file. */

const COMPONENTS: Record<string, React.ReactNode> = {
  "a53-contact__contact-details-1": <GeneratedImage_a53_contact__contact_details_1 />,
};

export function GeneratedImageryBand({ slots }: { slots: readonly string[] }) {
  const placed = slots.map((s) => COMPONENTS[s]).filter(Boolean);
  if (placed.length === 0) return null;
  return (
    <section
      aria-label="Generated imagery"
      className="a53-generated-imagery-band mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-3"
    >
      {placed}
    </section>
  );
}
