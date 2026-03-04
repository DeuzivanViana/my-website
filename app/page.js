'use client'
import { Layout } from "@/components/Layout";
import { Skull } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [waitWhat, setWaitWhat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaitWhat(true);
    }, 1000 * 40);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000 * 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout className={"bg-black min-h-screen w-full flex items-center justify-center"}>
      <div className="flex flex-col items-center justify-center text-white text-center">
        {showImage ? (
          <Image
            key={"d6e96597a52f04beea4415b9ef3b3245561c0516ab211fbe71e4159c304ebdbe"}
            src={"/side.jpg"}
            alt="d6e96597a52f04beea4415b9ef3b3245561c0516ab211fbe71e4159c304ebdbe"
            width={1080}
            height={1080}
            className={"w-96 h-96"}
          />
        ) : waitWhat && !showImage ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <Skull size={72} />
            <h1 className="text-xl font-bold text-center">
              Executing exploit<br />(CVE-2026-2441)...
            </h1>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-bold">Error: Page Not Found</h1>
            <footer className="text-red-700">Don&apos;t wait for 60 seconds</footer>
          </div>
        )}
      </div>
    </Layout>
  );
}