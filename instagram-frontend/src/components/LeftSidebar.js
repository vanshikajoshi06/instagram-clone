import Link from "next/link";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col gap-6 text-white text-sm pt-6">
      <Link href="/feed" className="font-semibold">🏠 Home</Link>
      <span>🔍 Search</span>
      <span>🎞 Reels</span>
      <span>💬 Messages</span>
      <span>❤️ Notifications</span>
      <Link href="/create">➕ Create</Link>
      <span>👤 Profile</span>
    </div>
  );
}
