import { getPosts } from "@/server/actions/postAction";
import type { NextPage } from "next"; 

const  Page: NextPage = async () => {
  const {data ,errMsg} = await getPosts();
  const posts = data;
  if(errMsg){
    return <div>{errMsg}</div>
  }
  return (
    <>
      {posts && posts.map(post => (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>{post.description}</p>
        </div>
      ))}
    </>
  )
}

export default Page