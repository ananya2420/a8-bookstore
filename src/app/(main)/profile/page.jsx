"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import profilePic from "../../../assets/profile.png";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Access Denied</h2>
        <p className="text-gray-500">You must be logged in to view this page.</p>
        <Link href="/login" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Go to Login
        </Link>
      </div>
    );
  }

  const userImage = session.user?.image;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-green-50 p-4">
      <div className="card w-96 bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
        <div className="p-8 flex flex-col items-center text-center">

          <h2 className="text-green-800 text-2xl font-bold mb-6 border-b w-full pb-4">
            My Profile
          </h2>

          <div className="mb-6">
            <div className="w-28 h-28 rounded-full ring-4 ring-green-500 ring-offset-2 overflow-hidden">
              <img
                src={userImage || profilePic.src}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800">
            {session.user?.name || "User"}
          </h3>

          <p className="text-sm text-gray-500 mb-6">
            {session.user?.email}
          </p>

          <div className="w-full text-left space-y-3 mb-8 text-gray-600 border-t pt-6">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-400">Member Since:</span>
              <span className="text-gray-700">
                {session.user?.createdAt
                  ? new Date(session.user.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                  : "N/A"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-400">Status:</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
          </div>

          <Link
            href="/profile/update"
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition font-semibold text-center"
          >
            Update Information
          </Link>

        </div>
      </div>
    </div>
  );
}