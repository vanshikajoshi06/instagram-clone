export default function RightSidebar() {
  return (
    <div className="pt-6 text-sm text-gray-300">
      <h3 className="font-semibold mb-4 text-white">
        Suggested for you
      </h3>

      {["Naman", "Gaurvi", "Stuti", "Auraby"].map((user) => (
        <div
          key={user}
          className="flex justify-between items-center mb-4"
        >
          <span>{user}</span>
          <button className="text-pink-500 font-semibold">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
