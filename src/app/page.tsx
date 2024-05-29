import { getPosts } from "@/server/actions/postAction";
import type { NextPage } from "next"; 

const  Page: NextPage = async () => {
  const {data ,errMsg} = await getPosts();
  const post = data;
  if(errMsg){
    return <div>{errMsg}</div>
  }

  if(!post){
    return <div>Loading...</div>
  }

  const content = post.content;

  return (
    <>
        <div dangerouslySetInnerHTML={{__html: content}}>
        </div>
    </>
  )
}

export default Page