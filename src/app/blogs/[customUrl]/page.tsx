import { getPostByUrl } from "@/server/actions/postAction";
import type { NextPage } from "next";

type Props = {
    customUrl: string;
    };

const Page: NextPage<{params : Props}> = async (props) => {
    const { params } = props;
    const {data ,errMsg} = await getPostByUrl(params.customUrl);

    if(errMsg){
        return <div>{errMsg}</div>
    }

    if(!data){
        return <div>Loading...</div>
    }

    const content = data.content;

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: content}}>
        </div>
    </>
  )
}

export default Page