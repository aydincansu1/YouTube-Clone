import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Comments = ({ comment }) => {
  console.log(comment);

  return (
    <div className="comments ">
      {/* kanal resmi */}
      <div>
        <img
          className="rounded-full w-12 h-12"
          src={comment.authorThumbnail[0].url}
          alt=""
        />
      </div>

      {/* kanal yorumları */}
      <div>
        <div className="flex gap-2 align-content-center ">
          <p className="font-bold">{comment.authorText}</p>
          <p className="text-[#AAAAAA] text-sm">{comment.publishedTimeText}</p>
        </div>

        <div>{comment.textDisplay}</div>

        <div className="flex gap-4 text-sm cursor-pointer">
          <div className="flex items-center gap-1">
            <AiFillLike />
          </div>

          <div className="flex items-center gap-3">
            <AiFillDislike />
            <p className="hover:bg-[#3F3F3F] rounded p-2">Yanıtla</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[#3DA3FA] hover:bg-[#263850]">
          {comment.replyCount !== 0 && <IoMdArrowDropdown />}
          <p>{comment.replyCount === 0 ? "" : comment.replyCount + " yanıt"}</p>
        </span>
      </div>
    </div>
  );
};

export default Comments;
