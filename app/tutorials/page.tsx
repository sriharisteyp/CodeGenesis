"use client";

import { useState, useEffect } from "react";
import videosData from "../../DataBase/Vidios.json";  // Path to your JSON file with video data
import Image from "next/image";
import Link from "next/link";

const videoData = videosData;

const VideosPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videoData);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;

  // Update filtered videos based on search term
  useEffect(() => {
    const filtered = videoData.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filtered);
    setCurrentPage(1); // Reset to the first page when search term changes
  }, [searchTerm]);

  // Handle search functionality with type annotation for event
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Slice the video data to display only the current page's videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  return (
    <div>
      <header> {/* Your Header component here */} </header>

      <main className="bg-gray-900 py-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">CodeGenesis Videos</h1>

          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for videos..."
              className="w-full max-w-lg px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Video List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {currentVideos.length > 0 ? (
              currentVideos.map((video) => (
                <Link key={video.id} href={video.url} target="_blank">
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={video.thumbnail || "https://via.placeholder.com/400x300"}
                      alt="Video Thumbnail"
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-white mb-4">
                        {video.title || "Untitled Video"}
                      </h2>
                      <p className="text-gray-300 mb-4">
                        {video.description || "No description available."}
                      </p>
                      <button className="bg-[#2d36bd] p-[5px] text-white rounded-md">
                        Watch
                      </button>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-400">No videos found.</p>
            )}
          </div>

          {/* Pagination Controls */}
          {filteredVideos.length > videosPerPage && (
            <div className="mt-8">
              <ul className="flex justify-center space-x-4">
                <li>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-600 disabled:opacity-50"
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 text-white ${currentPage === index + 1 ? 'bg-blue-600' : 'bg-gray-700'} rounded-md hover:bg-gray-600`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-600 disabled:opacity-50"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </main>

      <footer> {/* Your Footer component here */} </footer>
    </div>
  );
};

export default VideosPage;
