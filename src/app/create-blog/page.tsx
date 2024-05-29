'use client' // only in App Router
import "./styles.css";
import React, { useState } from 'react';
import axios from 'axios';

import CustomEditor from '@/components/custom-editor';
import Image from "next/image";

const initialData = `<h1>xin chao</h1><blockquote><p><span style="color:#fb4934;">const</span><span style="color:#ebdbb2;"> </span><span style="color:#a89984;">[</span><span style="color:#83a598;">data</span><span style="color:#a89984;">,</span><span style="color:#ebdbb2;"> </span><span style="color:#83a598;">setData</span><span style="color:#a89984;">]</span><span style="color:#ebdbb2;"> </span><span style="color:#8ec07c;">=</span><span style="color:#ebdbb2;"> </span><span style="color:#fabd2f;">useState</span><span style="color:#ebdbb2;">(</span><span style="color:#a89984;">''</span><span style="color:#ebdbb2;">)</span><span style="color:#a89984;">;</span></p><p><span style="color:#fb4934;">const</span><span style="color:#ebdbb2;"> </span><span style="color:#fabd2f;">handleChange</span><span style="color:#ebdbb2;"> </span><span style="color:#8ec07c;">=</span><span style="color:#ebdbb2;"> </span><span style="color:#a89984;">(</span><span style="color:#83a598;">data</span><span style="color:#8ec07c;">:</span><span style="color:#fabd2f;"> string</span><span style="color:#a89984;">)</span><span style="color:#ebdbb2;"> </span><span style="color:#8ec07c;">=&gt;</span><span style="color:#ebdbb2;"> </span><span style="color:#a89984;">{</span></p><p><span style="color:#fabd2f;">setData</span><span style="color:#e5c07b;">(</span><span style="color:#83a598;">data</span><span style="color:#e5c07b;">)</span><span style="color:#a89984;">;</span></p><p><span style="color:#a89984;">}</span></p></blockquote><figure class="image"><img style="aspect-ratio:800/510;" src="/images/1716945507316-huong-dan-viet-blog-1.jpg" width="800" height="510"></figure>`

function Home() {
  const [data, setData] = useState(initialData);
  const [customUrl, setCustomUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleChange = (data: string) => {
    setData(data);
  }

  const handleChangeThumbnail = async (e: any) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    const serverUrl = process.env.SERVER_URL || "http://localhost:3000";
    const url = serverUrl + "/api/images";
    axios.post(url, data)
    .then(res => {
      console.log(res.data.body);
      setThumbnail(res.data.body);
    })
  }

  const handlePublish = async () => {
    const serverURI = process.env.SERVER_URL || "http://localhost:3000";
    const payload = {
      title: title,
      customUrl:  customUrl,
      description : description,
      // tags : tags,
      thumbnail: thumbnail,
      content : data
    }
    console.log(payload);

    axios.post(serverURI + '/api/posts', payload)
    .then(res => {
      console.log(res.data);
    })

  }

  return (
    <div className='container gap'>
      <div className="head">
        <h1>Tạo Bài viết</h1>
        <button className="publishBtn" onClick={handlePublish} >Đăng bài</button>
      </div>
      <div className="input-container">
        <div className="input-left">
          <div className="input-group">
            <label htmlFor="title">title </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="customUrl">customUrl</label>
            <input
              id="customUrl"
              type="text"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="tags">tags</label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>
        <div className="input-right">
          <div className="input-group">
            <label htmlFor="thumbnail">thumbnail</label>
            <input
              id="thumbnail"
              type="file"
              onChange={(e) => {handleChangeThumbnail(e)}}
            />
          </div>
          {/* show thumbnail */}
          <div className="thumbnail">
            <Image
              src={thumbnail}
              alt="thumbnail"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* Custom CKeditor */}
      <CustomEditor onChange={handleChange} initialData={initialData} />
    </div>
  );
}

export default Home;