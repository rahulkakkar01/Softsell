import React from "react";
import { Button } from "../components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

// Use the same avatar style as Beyond Chats (e.g., adventurer)
const getRandomAvatarUrl = (seed) =>
  `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(seed)}`;

const AccountPage = ({ user, onClose }) => {
  const avatarUrl = user.photoURL
    ? user.photoURL
    : getRandomAvatarUrl(user.email || user.uid);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white shadow-xl rounded-2xl w-full max-w-sm p-8 text-center text-black">
        <button
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full mb-4 bg-white flex items-center justify-center border border-gray-200">
            <img
              src={avatarUrl}
              alt="avatar"
              className="w-16 h-16 object-contain"
              draggable={false}
            />
          </div>
          <h2 className="text-xl font-bold mb-2">{user.displayName || "Account"}</h2>
          <p className="mb-4">{user.email}</p>
          <Button
            className="w-full"
            onClick={() => signOut(auth)}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;