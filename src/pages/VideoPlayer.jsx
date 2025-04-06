import { useEffect, useRef, useState } from "react";
import { getProgress, saveProgress } from "../api/api";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchProgress = async () => {
      const res = await getProgress(token);
      if (videoRef.current) {
        videoRef.current.currentTime = res.data.segundos;
      }
    };
    fetchProgress();
  }, [token]);

  const handlePause = async () => {
    const currentSeconds = Math.floor(videoRef.current.currentTime);
    await saveProgress(token, currentSeconds);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white pt-10 px-4">
      <h2 className="text-4xl font-bold text-center drop-shadow-lg">
        🎬 Reproduciendo: Flow
      </h2>
      <video
        ref={videoRef}
        width="1100"
        controls
        onPause={handlePause}
        onEnded={handlePause}
        
      >
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>
  );
}
