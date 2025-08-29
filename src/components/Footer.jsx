import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center bg-gray-900 text-gray-600">
      © {new Date().getFullYear()} Shailesh. | All Rights are Reserved!
    </footer>
  );
}
