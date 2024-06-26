import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/header";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen bg-white">
     
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        
        <h1 className="mx-auto max-w-4xl font-display text-xl font-bold tracking-normal text-gray-800 sm:text-4xl">
        Décorez et aménagez votre intérieur en quelques secondes {" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">grâce à l'IA</span>
          </span>{" "}
  
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-800  text-gray-800 leading-7 ">
        Gagnez du temps et de l'argent en visualisant vos espaces décorés avant travaux grâce à l'intelligence artificielle, voyez en un clic à quoi ressembleront vos pièces.Dites adieu aux gros budgets de consulting et concrétisez votre projet gratuitement et sereinement.
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dashboard"
        >
          Generate your dream room
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/original-pic.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic-2.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
