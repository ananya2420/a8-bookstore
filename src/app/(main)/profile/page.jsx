"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import profilePic from "../../../assets/profile.png";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  // 1. Handle Loading State
  if (isPending) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // 2. Handle Unauthenticated State (Optional but recommended)
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 gap-4">
        <p>You must be logged in to view this page.</p>
        <Link href="/login" className="btn btn-primary">Login</Link>
      </div>
    );
  }

  const userImage = session.user?.image;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-green-50">
      <div className="card w-96 bg-base-100 shadow-xl border border-gray-100">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-green-800 text-2xl mb-4 border-b w-full pb-2 justify-center">
            My Profile
          </h2>
          
          <div className="avatar mb-4">
            <div className="w-28 h-28 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2 overflow-hidden">
              <img 
                src={userImage || profilePic.src} 
                alt="Profile"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.src = profilePic.src;
                }}
              />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            {session.user?.name || "User"}
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            {session.user?.email}
          </p>

          <div className="w-full text-left space-y-2 mb-8 text-gray-600 border-t pt-4">
            <p className="text-sm">
              <span className="font-semibold text-gray-400">Member Since:</span>{" "}
              {session.user?.createdAt 
                ? new Date(session.user.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  }) 
                : "N/A"}
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-400">Status:</span>{" "}
              <span className="text-green-600">Active</span>
            </p>
          </div>

          <div className="card-actions w-full">
            <Link href="/profile/update" className="btn bg-green-600 hover:bg-green-700 text-white w-full border-none normal-case text-lg">
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}