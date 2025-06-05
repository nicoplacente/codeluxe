import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export default function PortfolioButtons({ href, aria }) {
  return (
    <Link
      href={href}
      rel="noopener nofollow noreferrer"
      aria-label={aria}
      target="_blank"
      className="bg-primary/50 px-4 py-1 text-sm rounded-xl text-secondary-txt transition duration-300 flex items-center justify-center gap-2 group hover:[box-shadow:inset_0_1px_20px_#0009]"
    >
      Portfolio{" "}
      <span className="group-hover:translate-x-0.5 transition duration-300">
        <IconArrowRight className="size-4" />
      </span>
    </Link>
  );
}
