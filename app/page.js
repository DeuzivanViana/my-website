import { Layout } from "@/components/Layout";
import { NavigationBar } from "@/components/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <Layout className={"bg-black h-[100vh] flex items-center justify-center"}>
      <div className=" max-h-96 relative bottom-20">
        <Image
          key={"d6e96597a52f04beea4415b9ef3b3245561c0516ab211fbe71e4159c304ebdbe"}
          src={"/side.jpg"}
          alt="d6e96597a52f04beea4415b9ef3b3245561c0516ab211fbe71e4159c304ebdbe"
          width={1080}
          height={1080}
          className={"w-96 h-96"}
        />
      </div>
    </Layout>
  );
}
