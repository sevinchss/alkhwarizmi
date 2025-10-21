import React from "react";

export default function GalleryCard({ title, date, count, thumbnail, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 right-4 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
          <span className="text-lg font-medium">{count}</span>
        </div>
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  );
}
