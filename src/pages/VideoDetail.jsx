import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import ReactPlayer from "react-player";
import Loader from "../components/Loader";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../components/StringArea";
import VideoCard from "../components/VideoCard";
import Comments from "../components/Comments";
import LoaderComments from "./../components/LoaderComments";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);

  //1) arama parametresine erisim icin kurulum
  const [searchParams] = useSearchParams();

  //2) url'den v isimli arama parametresini al
  const id = searchParams.get("v");

  //3) idsi bilinen videonun bilgilerini api'den al
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
    getData(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, [searchParams]);
  return (
    <div className="detail-page h-screen overflow-auto p-5">
      {/*Video icerigi */}
      <div>
        <ReactPlayer
          className={"rounded"}
          width={"100%"}
          height={"50vh"}
          light
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        {!video ? (
          <p>Yukleniyor...</p>
        ) : (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            <div className="flex justify-between">
              {/*sol*/}

              <div className="flex item-center gap-4">
                <img
                  className="rounded-full"
                  src={video.channelThumbnail[0].url}
                  alt=""
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.commentCountText}</p>
                </div>
                <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
                  Abone ol
                </button>
              </div>
              {/*sag*/}

              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer  ">
                <div className="flex items-center gap-4 py-2 px-4 border-r transition ">
                  <AiFillLike />
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
              {/*aciklama*/}
            </div>
            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} görüntüleme </p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>
          </>
        )}
        {/* Yorumlar */}
        <div className="flex flex-col gap-3 my-6">
          {!comments ? (
            <LoaderComments />
          ) : (
            comments.map((comment) => (
              <Comments key={comment.commentId} comment={comment} />
            ))
          )}
        </div>
      </div>

      {/*Alakali videolar */}

      <div className="flex gap-5  flex-col p-1 sm:p-6 max-sm:mt-6">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard video={item} isRow={true} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
