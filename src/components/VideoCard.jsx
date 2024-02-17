import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={` ${isRow ? "row" : ""} cursor-pointer`}
    >
      {/*resim detay alani */}
      <div>
        <img
          className="v-pic rounded w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video?.richThumbnail[0]?.url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt="video banner"
        />
      </div>
      {/*alt detay alani */}
      <div className="flex gap-4 mt-5">
        <img
          className="c-pic rounded-full w-14 h-14"
          src={video.channelThumbnail[0].url}
          alt="channel picture"
        />
        <div>
          <h4
            className={`${isRow ? "line-clamp-1" : "line-clamp-2"} font-bold`}
          >
            {video.title}
          </h4>
          <p>{video.channelTitle}</p>
          <div className="detail flex gap-2">
            <p>
              <span>{millify(video.viewCount)}</span> <span>Goruntulenme</span>
            </p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
