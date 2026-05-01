import Link from "next/link";

export default function NotFound() {
  return (
    <div>
    <h2 className="font-bold text-5xl text-center text-green-800">
      This page is not found
    </h2>
    <Link href={"/"}>
    <button className="btn bg-green-700 text-center text-white">Back to Home</button>
    </Link>
    
    </div>
  );
}