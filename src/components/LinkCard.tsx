type LinkCardProps = {
  label: string;
  href: string;
  clicks: number;
  onClick?: () => void;
};

export default function LinkCard({ label, href, clicks, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex w-full items-center justify-center rounded-2xl border border-white/40 bg-white/40 px-5 py-4 text-sm font-medium text-[#4a3728] shadow-[0_4px_16px_-4px_rgba(154,92,45,0.2)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_8px_20px_-4px_rgba(154,92,45,0.28)]"
    >
      <span>{label}</span>
      <span className="absolute right-5 text-xs font-normal text-[#8a6f5c]">
        {clicks}회
      </span>
    </a>
  );
}
