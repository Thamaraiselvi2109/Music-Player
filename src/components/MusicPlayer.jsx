import { useState } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

const songs = [
  {
    title: 'Dreams',
    artist: 'Fleetwood Mac',
    src: '/songs/dreams.mp3',
    image: '/images/album1.jpg',
  },
  {
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    src: '/songs/bohemian.mp3',
    image: '/images/album2.jpg',
  },
  // Add more songs...
];

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = songs[currentSongIndex];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const goToPrevious = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md my-20 mx-auto">
      <img
        src={currentSong.image}
        alt="Album Art"
        className="w-40 h-40 rounded-full mb-4 object-cover"
      />

      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">{currentSong.title}</h2>
        <p className="text-sm text-gray-400">{currentSong.artist}</p>
      </div>

      <div className="w-full mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span>0:00</span>
          <span>3:45</span>
        </div>
        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div className="bg-blue-500 h-2 w-1/3 rounded-full"></div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button onClick={goToPrevious}>
          <FaStepBackward size={24} />
        </button>
        <button
          onClick={togglePlayPause}
          className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
        <button onClick={goToNext}>
          <FaStepForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
