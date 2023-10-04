import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

export default function CityNav() {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[1];
  function linkClasses(type = null) {
    let classes = "py-2 px-3 text-sm font-bold rounded-2xl ";
    if (type == subpage) {
      classes += " bg-blue-500";
    } else classes += " bg-gray-200 ";
    return classes;
  }
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Link to={"/newyork"} className={linkClasses("newyork")}>
          New York
        </Link>
        <Link to={"/mumbai"} className={linkClasses("mumbai")}>
          Mumbai
        </Link>
        <Link to={"/paris"} className={linkClasses("paris")}>
          Paris
        </Link>
        <Link to={"/london"} className={linkClasses("london")}>
          London
        </Link>
      </div>
      <div>
        <Link
          to={"/london"}
          className="flex text-sm border border-blue-500 py-1 px-3 rounded-2xl text-blue-500 font-semibold"
        >
          <div>View all</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
