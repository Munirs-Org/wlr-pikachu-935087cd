import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

/**
 * Card (registry item: card) — content container consuming wlr-theme CSS
 * variables. Declares the registry's single npm dependency (clsx); the
 * sync CLI records it in registry-lock.json and the site generator merges
 * it into the site's package.json.
 */

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** card heading — NOT the HTML global title attribute (Omit removes the conflict that broke next build type-checking). */
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function Card({ title, description, children, className, ...rest }: CardProps) {
  return (
    <div
      data-wlr-id="wlr-card"
      className={clsx(
        "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]",
        "flex flex-col gap-2 p-6 shadow-sm",
        className,
      )}
      {...rest}
    >
      {title ? <h3 className="text-lg font-semibold leading-tight">{title}</h3> : null}
      {description ? <p className="text-sm text-[var(--muted-foreground)]">{description}</p> : null}
      {children ? <div className="pt-2">{children}</div> : null}
    </div>
  );
}
