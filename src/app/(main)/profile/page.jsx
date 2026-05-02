import { auth } from "@/lib/auth";

import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

 
  if (!session?.user) {
    redirect("/login");
  }

  const { name, email, image, id, createdAt } = session.user;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      {/* Cover */}
      <div className="h-40 bg-gradient-to-r from-brown-400 to-brown-700 rounded-xl mb-[-50px]" />

      {/* Avatar */}
      <img
        src={image || "/images/default.png"}
        alt="profile"
        className="w-24 h-24 rounded-full border-4 border-white mx-6"
      />

      {/* Info */}
      <div className="mt-4 px-6">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-gray-500">Member of goodreads</p>

        <div className="mt-4 space-y-2">
          <p>📧 {email}</p>
          <p>📅 {new Date(createdAt).toDateString()}</p>
          <p>🆔 {id}</p>
        </div>

        {/* ✅ Navigate to update */}
        <Link
          href="/profile/update"
          className="inline-block mt-4 bg-brown-600 text-white px-4 py-2 rounded"
        >
          ✏️ Update
        </Link>
      </div>
    </div>
  );
}
