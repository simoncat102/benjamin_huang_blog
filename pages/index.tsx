// pages/index.tsx
import Image from "next/image";
import Avatar from '@/public/photos/avatar.jpeg'
const Home = () => {
  return <div className="pt-6">
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
      <p className=" text-neutral-900 font-mono mb-2">{"Benjamin Huang"}</p>
      <Image src={Avatar.src} alt="" width={300} height={300}/>

 

    </div>

  </div>;
};

export default Home;
