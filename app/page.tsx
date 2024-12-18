import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen from-secondary to-secondaryShadow bg-gradient-radial overflow-hidden">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl text-white effects">drew spooner</h1>
          <p className="text-xl text-white opacity-90 effects">software developer</p>
          <p className="text-lg text-white opacity-80 effects">new york city, ny</p>
          
          <div className="my-6">
            <label className="text-lg text-white opacity-80">password</label>
            <input type="password" id="small-input" className="block p-1 text-gray-900 border border-secondaryHighlight rounded-lg bg-gray-100 text-base focus:ring-blue-500 focus:border-blue-500 "></input>
        </div>
        </div>
      </div>
    </main>
  );
}
