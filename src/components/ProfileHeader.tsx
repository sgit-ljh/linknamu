type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-12 w-12 text-zinc-400 dark:text-zinc-500"
        >
          <path d="M12 12c2.71 0 4.9-2.19 4.9-4.9S14.71 2.2 12 2.2 7.1 4.39 7.1 7.1 9.29 12 12 12Zm0 2.4c-3.27 0-9.8 1.64-9.8 4.9v2.5h19.6v-2.5c0-3.26-6.53-4.9-9.8-4.9Z" />
        </svg>
      </div>
      <div>
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{name}</h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
