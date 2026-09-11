type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl border border-white/40 bg-white/40 px-5 py-4 text-sm font-medium text-[#4a3728] shadow-[0_4px_16px_-4px_rgba(154,92,45,0.2)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_8px_20px_-4px_rgba(154,92,45,0.28)]"
    >
      {label}
    </a>
  );
}
