import React from "react";

import profileConfig from "@/data/profile-config.json";
import { ProfileCard } from "@/components/profile-card";

const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-600 via-red-500 to-orange-400 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-600/30 to-orange-400/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <ProfileCard config={profileConfig} />
      </div>
    </main>
  );
};

export default page;
