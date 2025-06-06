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
        <div className="arrow-trail text-primary text-2xl px-2">
          <span>›</span>
          <span>›</span>
          <span>›</span>
        </div>
      )}
    </>
  );
}
