import SubTitle from "@/ui/sub-title";
import { IconChevronRight } from "@tabler/icons-react";

export default function CardProccess({ title, svgIcon, isArrow }) {
  const Icon = svgIcon;
  return (
    <>
      <div className="flex w-full flex-col items-center gap-3 bg-secondary/50 p-6 border border-primary-txt/10 rounded-xl">
        <Icon className="size-12 text-primary" />
        <SubTitle className="text-sm">{title}</SubTitle>
      </div>
      {isArrow && (
        <span className="w-fit text-primary">
          <div className="arrow-container">
            <span className="arrow rotate-90  sm:rotate-0 left-1/2 -top-1/2 sm:-translate-x-[8px]">
              ›
            </span>
          </div>
        </span>
      )}
    </>
  );
}
