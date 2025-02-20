import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.pexels.com",   // Pexels
      "th.bing.com",         // Bing Images
      "res.cloudinary.com",  // Cloudinary
      "www.lodgify.com",     // Lodgify
      "cleaning-centre.com", // Cleaning Centre
      "via.placeholder.com",
      "img.youtube.com",
    ],
  },
};

export default nextConfig;
