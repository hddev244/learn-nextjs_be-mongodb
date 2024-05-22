import type { NextPage } from "next";
import { getComments } from "@/server/_actions/commentAction";
import Comment from "@/types/Comment";

const  Page: NextPage = async () => {
  const {data,errMsg} = await getComments();
  const comments:Comment = data;
  if(errMsg){
    return <div>{errMsg}</div>
  }
  return (
    <>
      {data.map((comment: Comment) => (
        <div key={comment._id} className="w-72 aspect-video">
          <h2>{comment.name}</h2>
          <p>{comment.email}</p>
          <p className="line-clamp-4" >{comment.text}</p>
        </div>
      ))}
    </>
  )
}

export default Page