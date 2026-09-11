type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-br from-white/80 to-white/20 p-1 shadow-[0_8px_24px_-6px_rgba(154,92,45,0.35)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-24 w-24 rounded-full object-cover ring-1 ring-white/60"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[#4a3728]">{name}</h1>
        <p className="mt-1.5 text-sm text-[#8a6f5c]">{bio}</p>
      </div>
    </div>
  );
}
