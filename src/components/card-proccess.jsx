import SubTitle from "@/ui/sub-title";

export default function CardProccess({ title, svgIcon, isArrow }) {
  const Icon = svgIcon;
  return (
    <>
      <div className="flex w-full flex-col items-center gap-3 bg-secondary/50 p-6 border border-primary-txt/10 rounded-xl">
        <Icon className="size-12 text-primary" />
        <SubTitle className="text-base">{title}</SubTitle>
      </div>
      {isArrow && (
        <div className="arrow-trail text-primary rotate-90 top-[42px] sm:rotate-0 sm:top-0">
          <span>›</span>
          <span>›</span>
          <span>›</span>
        </div>
      )}
    </>
  );
}
