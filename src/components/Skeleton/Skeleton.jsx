export function MovieCardSkeleton() {
  return (
    <div className="flex flex-col bg-surface border border-border-default rounded-xl overflow-hidden w-full animate-pulse">
      <div className="w-full aspect-2/3 bg-charcoal"></div>
      <div className="p-3 flex flex-col gap-2">
        <div className="h-3.5 bg-elevated rounded w-3/4"></div>
        <div className="h-2.5 bg-elevated rounded w-1/2"></div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="w-full min-h-105 bg-noir border-b border-border-subtle flex items-end p-6 md:p-10 animate-pulse mt-14">
      <div className="max-w-xl w-full flex flex-col gap-3">
        <div className="w-28 h-6 bg-elevated rounded-full"></div>
        <div className="w-3/4 h-10 bg-elevated rounded-lg"></div>
        <div className="w-full h-16 bg-elevated rounded-lg"></div>
        <div className="flex gap-3 mt-2">
          <div className="w-32 h-10 bg-elevated rounded-lg"></div>
          <div className="w-32 h-10 bg-elevated rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export function DetailsSkeleton() {
  return (
    <div className="w-full min-h-110 bg-noir border-b border-border-subtle flex items-end p-6 md:p-10 animate-pulse mt-14">
      <div className="max-w-2xl w-full flex flex-col gap-3">
        <div className="w-1/3 h-5 bg-elevated rounded"></div>
        <div className="w-2/3 h-10 bg-elevated rounded-lg"></div>
        <div className="w-full h-20 bg-elevated rounded-lg"></div>
      </div>
    </div>
  );
}
