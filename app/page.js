import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 md:mx-80 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Abhiviraj Goel</h1>
        <p>
          Hey, I’m Abhiviraj Goel —a founder, builder, and firm believer in the
          power of peer-to-peer service models. I love creating products that
          challenge traditional ownership and unlock new ways for people to
          access what they need.
        </p>
        <p>
          Right now, I’m working on Lynk., a peer-to-peer car-sharing platform
          aimed at making mobility more affordable and efficient in India.
          Before that, I launched hustl., a college reselling platform where
          students could buy and sell everything from clothes to coursework
          (yes, even essays). Whether it’s transportation, knowledge, or
          everyday goods, I’m fascinated by how marketplaces can democratize
          access and create value from underutilized resources.
        </p>
        <div className="flex flex-row gap-5">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Email
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            X
          </a>
        </div>
      </main>
    </div>
  );
}