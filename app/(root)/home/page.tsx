import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/auth/LogoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import DestinationCard from '@/components/ui/DestinationCard';
import Link from "next/link";
import TripCard from "@/components/admin/dashboard/tripCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const handpickedTrips = [
  { id: 1, title: "Thornridge Cir. Shiloh", location: "St Georges, Grenada", price: 1802, imageUrl: "/assets/images/sample.jpeg", tags: ["Mountain", "City"] },
  { id: 2, title: "Roraima Tepui", location: "Canaima Park, Venezuela", price: 1790, imageUrl: "/assets/images/sample1.jpg", tags: ["Solo travel", "Budget"] },
  { id: 3, title: "Socotra Island", location: "Socotra, Yemen", price: 2800, imageUrl: "/assets/images/sample4.jpg", tags: ["Luxury", "Beach"] },
  { id: 4, title: "San Lake Baikal", location: "Irkutsk, Russia", price: 1604, imageUrl: "/assets/images/card-img-3.png", tags: ["Sports", "Adventurous"] },
  { id: 5, title: "Anse Source d'Argent", location: "La Digue, Seychelles", price: 2100, imageUrl: "/assets/images/card-img-4.png", tags: ["Beach", "Luxury"] },
  { id: 6, title: "Aysén Region", location: "Aysén, Chile", price: 2350, imageUrl: "/assets/images/card-img-5.png", tags: ["Sports", "Adventurous"] },
  { id: 7, title: "Taman Negara", location: "Pahang, Malaysia", price: 1950, imageUrl: "/assets/images/card-img-6.png", tags: ["Mountain", "Budget"] },
  { id: 8, title: "Zhangye Landform", location: "Gansu, China", price: 2650, imageUrl: "/assets/images/card-img-1.png", tags: ["Solo travel", "City"] },
];

export default async function HomePage() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  
  // Fallback for user's name initial
  const nameInitial = session.user?.name?.charAt(0).toUpperCase() || 'U';

  return (
    <>
      <main className="relative">
        <header className="absolute top-0 left-0 right-0 z-10 p-8">
          <div className="container mx-auto flex justify-between items-center px-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-white text-2xl font-bold cursor-pointer">
              <img src="/assets/icons/logo.svg" alt="Tourvisto Logo" className="h-8 w-8" />
              <span>Tourvisto</span>
            </Link>

            {/* User Section */}
            <div className="flex items-center gap-4 text-white">
              <span>{session.user?.name || 'User'}</span>
              <Avatar>
                <AvatarImage src={session.user?.image || ''} alt="User Avatar" />
                <AvatarFallback>{nameInitial}</AvatarFallback>
              </Avatar>
              <LogoutButton url="/login" variant="homepage" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex items-center text-white"
          style={{ backgroundImage: "url('/assets/images/hero-img.png')" }}
        >
          <div className="container mx-auto px-12">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold leading-tight">
                Plan Your Trip with Ease
              </h1>
              <p className="mt-4 text-lg max-w-lg">
                Customize your travel itinerary in minutes—pick your
                destination, set your preferences, and explore with confidence.
              </p>
              <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Destinations Section */}
        <section className="py-20 px-4 md:px-12 container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Featured Travel Destinations</h2>
          <p className="text-gray-600 mb-12">
            Check out some of the best places you can visit around the world.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[700px]">
            {/* Left Column (Complex Grid) */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-rows-2 grid-cols-2 gap-6 h-full">
                <div className="col-span-2 row-span-1">
                  <DestinationCard
                    className="h-full min-h-[300px]"
                    imgSrc="/assets/images/card-img-1.png"
                    rating="3.5"
                    title="Barcelona Tour"
                    activities="196"
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <DestinationCard
                    className="h-full min-h-[300px]"
                    imgSrc="/assets/images/card-img-4.png"
                    rating="4.8"
                    title="London, United State"
                    activities="120"
                  />
                </div>
                <div className="col-span-1 row-span-1">
                  <DestinationCard
                    className="h-full min-h-[300px]"
                    imgSrc="/assets/images/card-img-5.png"
                    rating="4.5"
                    title="Australia Tour"
                    activities="100"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (Vertical Stack) */}
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col gap-6 h-full">
                <DestinationCard
                  className="h-1/3"
                  imgSrc="/assets/images/card-img-2.png"
                  rating="3.5"
                  title="Australia Tour"
                  activities="196"
                />
                <DestinationCard
                  className="h-1/3"
                  imgSrc="/assets/images/card-img-3.png"
                  rating="3.5"
                  title="Japan Tour"
                  activities="196"
                />
                <DestinationCard
                  className="h-1/3"
                  imgSrc="/assets/images/card-img-6.png"
                  rating="4.2"
                  title="Thornridge Cir. Shiloh"
                  activities="80"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-12 container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Handpicked Trips</h2>
          <p className="text-gray-600 mb-12">
            Browse well-planned trips designed for different travel styles and interests.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {handpickedTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">6</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>

        {/* Footer Section */}
        <footer className="px-4 md:px-12 container mx-auto pt-24 pb-12">
          <div className="p-6 flex flex-wrap justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 text-gray-800 text-xl font-bold">
              <img src="/assets/icons/logo.svg" alt="Tourvisto Logo" className="h-8 w-8" />
              <span>Tourvisto</span>
            </div>
            {/* Links */}
            <div className="flex items-center gap-6 text-gray-600 text-sm">
              <a href="#" className="hover:text-gray-900">Terms & Condition</a>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
