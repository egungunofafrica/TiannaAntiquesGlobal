import { Crown } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Crown className="w-8 h-8 text-primary" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
          Tianna's Luxury Antiques
        </span>
      </div>
    </div>
  );
}
