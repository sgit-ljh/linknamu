import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "이정훈",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpeg",
};

const links = [
  { label: "🐙 GitHub", href: "https://github.com/sgit-ljh" },
  { label: "📝 블로그", href: "https://blog.naver.com/sgit" },
  { label: "📧 이메일", href: "mailto:sgit.ljh@gmail.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#fff8ee] via-[#fdecd9] to-[#fbdfc4] px-6 py-20">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
