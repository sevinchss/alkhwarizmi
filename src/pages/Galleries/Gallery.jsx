import { useState } from 'react';
import { galleryData } from './data_gallery.js';
import GalleryCard from './GalleryCard.jsx';
import Pagination from './Pagination.jsx';
import GalleryModal from './GalleryModal.jsx';

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGallery, setSelectedGallery] = useState(null);

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(galleryData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = galleryData.slice(startIndex, endIndex);

  const handleCardClick = (item) => {
    setSelectedGallery(item);
  };

  const handleCloseModal = () => {
    setSelectedGallery(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16">
        <h1 className="text-5xl font-medium mb-12">Gallereya</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <GalleryCard
              key={item.id}
              title={item.title}
              date={item.date}
              count={item.count}
              thumbnail={item.thumbnail}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {selectedGallery && (
        <GalleryModal
          isOpen={!!selectedGallery}
          onClose={handleCloseModal}
          title={selectedGallery.title}
          date={selectedGallery.date}
          images={selectedGallery.images}
        />
      )}
    </div>
  );
}

export default Gallery;
