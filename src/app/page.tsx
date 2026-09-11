import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "이정훈",
  bio: "지루함을 이겨내는 바이버",
};

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <ProfileHeader name={profile.name} bio={profile.bio} />
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
