"use client";

import { useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import profilePic from "../../../../assets/profile.png";

export default function UpdateProfile() {
  const { data: session } = useSession();

  const [name, setName] = useState(session?.user?.name || "");
  const [photoUrl, setPhotoUrl] = useState(session?.user?.image || "");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalImage = photoUrl.trim() ? photoUrl : profilePic.src;

    const { data, error } = await authClient.updateUser({
      name: name || undefined,
      image: finalImage,
    });

    if (data) {
      router.push("/profile");
      router.refresh();
    } else {
      alert(error.message || "Failed to update profile");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-blue-50 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-100">
        <form onSubmit={handleUpdate} className="card-body">

          <h2 className="card-title text-green-800 text-2xl mb-6 justify-center">
            Update Profile Information
          </h2>

          {/* Preview */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={photoUrl || profilePic.src}
              alt="preview"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <span className="text-xs text-gray-500 mt-2">Preview</span>
          </div>

          {/* Name */}
          <div className="form-control w-full mb-4">
            <label className="label font-bold text-gray-700 pb-1">
              New Name:
            </label>
            <input
              type="text"
              placeholder="Enter new name"
              className="input input-bordered w-full focus:input-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Image */}
          <div className="form-control w-full mb-8">
            <label className="label font-bold text-gray-700 pb-1">
              New Photo URL:
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full focus:input-primary"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>

          <div className="card-actions justify-end mt-4 pt-4 border-t gap-3">
            <Link href="/profile" className="btn btn-ghost bg-gray-100 px-8">
              Cancel
            </Link>

            <button
              type="submit"
              className={`btn bg-green-600 text-white px-8 border-none hover:bg-green-700 ${
                loading ? "loading" : ""
              }`}
              disabled={loading}
            >
              {loading ? "" : "Update Information"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}