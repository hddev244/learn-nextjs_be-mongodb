'use client';
import { NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";

interface Props {
  dirs: string[];
}

const Home: NextPage<Props> = ({ dirs }) => {
    const [file, setFile] = useState<File | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            return;
        }
        const data = new FormData();
        data.append("file", file);
        try {
            const res = await axios.post("/api/images", data);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <main>
        <form onSubmit={onSubmit}>
            <input
                type="file"
                name="file"
                onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                    setFile(file);
                }
                }}
            />
            <button type="submit">Upload</button>
        </form>
    </main>
  );
};

export default Home;