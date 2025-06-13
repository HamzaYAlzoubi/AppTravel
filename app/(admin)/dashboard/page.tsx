import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function dashboard() {

  return (
    <div className="p-4 ">
      <header className="flex justify-between items-center  flex-wrap">

        <div>
          <div className="flex items-center">
            <h1 className="font-medium text-2xl mr-2">Welcome hamza</h1>
            <Image src="/assets/icons/Hi.png" alt="hi" width={30} height={100} />
          </div>
          <p className="text-gray-500 ">Track activity, trends, and popular destinations in real time</p>
        </div>


        <Button className="bg-blue-600 md:w-45 hover:bg-blue-700 w-full mt-3">+ Create a trip</Button>

      </header>

      <section className=" mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </section>

      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
    </div>
  );
}
