/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["drive.google.com","drive.usercontent.google.com"], // Add any external domains if needed
      unoptimized: true, // Disable image optimization for all images
    },
  };
  
  export default nextConfig;
  