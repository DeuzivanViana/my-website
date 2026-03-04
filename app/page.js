'use client'
import { Layout } from "@/components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout className={"bg-black h-[100vh] flex items-center justify-center"}>
      <div className=" max-h-96">
        { showImage ?
          <Image
          key={"d6e96597a52f04beea4415b9ef3b3245561c0516ab211fbe71e4159c304ebdbe"}
            src={"/side.jpg"}
            alt="d6e96597a52f04beea4415b9ef3b3245561c0516ab211fbe71e4159c304ebdbe"
            width={1080}
            height={1080}
            className={"w-96 h-96 relative bottom-20"}
            /> : <h1 className="text-3xl font-bold">Error: Page Not Found</h1>
        }
      </div>
    </Layout>
  );
}
