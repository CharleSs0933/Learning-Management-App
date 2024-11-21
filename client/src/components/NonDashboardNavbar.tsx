import { BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const NonDashboardNavbar = () => {
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <Link href="/" className="nondashboard-navbar__brand">
          CHARLESS
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Link href="/search" className="nondashboard-navbar__search-input">
              <span className="hidden sm:inline">Search Courses</span>
              <span className="sm:hidden">Search</span>
            </Link>
            <BookOpen className="nondashboard-navbar__search-icon" size={10} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;
