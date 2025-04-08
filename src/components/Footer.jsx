import React from "react";

export default function Footer() {
    return (
      <footer className="mt-10 px-6 md:px-45 py-12 text-sm text-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
          <h1 className="text-2xl font-bold mb-2">SHOP STYLE</h1>
          <p className="max-w-xs mb-4">
            Shop Style is a factory brand produced by Shop Stylers,
            the makers of the world's highest quality knit fabrics and apparel.
          </p>
          <div>
            <p className="font-bold">Social</p>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>
  
        {/* Center Column */}
        <div>
          <p className="font-bold mt-5 mb-2 underline">Information</p>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Size Guide</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Wholesale</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
          </ul>
        </div>
  
        {/* Right Column */}
        <div>
          <p className="font-bold mt-5 mb-2">
            Join our newsletter to stay up to date on features and releases.
          </p>
        </div>
  
        {/* Bottom */}
        <div className="col-span-full border-t border-black mt-12 pt-4 flex flex-col md:flex-row justify-between text-xs">
          <p>© 2025 Shop Style. All Rights Reserved</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="underline">Terms of Service</a>
            <a href="#" className="underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  }
  