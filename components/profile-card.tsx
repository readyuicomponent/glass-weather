"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

interface ProfileConfig {
  profile: {
    name: string;
    title: string;
    description: string;
    profileImage: string;
    hireUrl: string;
  };
  socialLinks: Array<{
    platform: "twitter" | "linkedin" | "github" | "instagram" | "email";
    url: string;
  }>;
  theme: {
    colors: {
      primary: string;
      secondary: string;
    };
    background: {
      type: string;
      from: string;
      via: string;
      to: string;
    };
  };
  customization: {
    showSocialLinks: boolean;
    showHireButton: boolean;
    cardMaxWidth: string;
    animationDuration: number;
  };
}

interface ProfileCardProps {
  config: ProfileConfig;
}

const socialIcons = {
  twitter: IconBrandTwitter,
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  instagram: IconBrandInstagram,
  email: IconMail,
};

export function ProfileCard({ config }: ProfileCardProps) {
  const { profile, socialLinks, customization } = config;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: customization.animationDuration }}
      whileHover={{ y: -5 }}
      className={`w-full max-w-sm sm:max-w-md lg:max-w-${customization.cardMaxWidth} mx-auto`}
    >
      <Card className="overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-4 sm:p-6 text-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mb-4 sm:mb-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto">
              <Avatar className="w-full h-full ring-2 ring-white/30 shadow-lg">
                <AvatarImage
                  src={profile.profileImage || "/placeholder.svg"}
                  alt={profile.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-lg sm:text-xl lg:text-2xl font-semibold bg-white/20 backdrop-blur-sm text-white">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2"
          >
            {profile.name}
          </motion.h3>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-sm sm:text-base font-medium text-white/80 mb-3 sm:mb-4"
          >
            {profile.title}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4 sm:mb-6 px-2"
          >
            {profile.description}
          </motion.p>

          {/* Social Media Links */}
          {customization.showSocialLinks && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              {socialLinks.map((social, index) => {
                const Icon = socialIcons[social.platform];
                return (
                  <motion.div
                    key={social.platform}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-200 hover:shadow-lg"
                    >
                      <Icon size={16} className="sm:w-5 sm:h-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </CardContent>

        {/* Hire Button */}
        {customization.showHireButton && (
          <CardFooter className="p-4 sm:p-6 pt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="w-full"
            >
              <Link href={profile.hireUrl} className="block w-full">
                <Button
                  className="w-full font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all duration-200 cursor-pointer hover:shadow-lg hover:scale-105"
                  size="lg"
                >
                  Hire Me
                </Button>
              </Link>
            </motion.div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
