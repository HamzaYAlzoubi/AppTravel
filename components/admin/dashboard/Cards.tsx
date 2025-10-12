import TripCard from "./tripCard";

export interface Trip {
  id: number;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  tags: string[];
}

const mockTrips: Trip[] = [
  {
    id: 1,
    title: 'Thornridge Cir. Shiloh',
    location: 'St. George’s, Singapore',
    price: 300,
    imageUrl: '/assets/images/sample.jpeg',
    tags: ['Mountains', 'City'],
  },
  {
    id: 2,
    title: 'Roraima Tepui',
    location: 'Canaima Park, Venezuela',
    price: 790,
    imageUrl: '/assets/images/sample1.jpg',
    tags: ['Solo travel', 'Budget'],
  },
  {
    id: 3,
    title: 'Socotra Island',
    location: 'Yemen',
    price: 870,
    imageUrl: '/assets/images/sample4.jpg',
    tags: ['Luxury', 'Beach'],
  },
  {
    id: 4,
    title: 'San Lake Baikal',
    location: 'Siberia, Russia',
    price: 604,
    imageUrl: '/assets/images/card-img-3.png',
    tags: ['Sports', 'Adventurous'],
  },
//   {
//     id: 5,
//     title: 'Anse Source d’Argent',
//     location: 'La Digue, Seychelles',
//     price: 870,
//     imageUrl: '/assets/images/card-img-5.png',
//     tags: ['Beach', 'Luxury'],
//   },
//   {
//     id: 6,
//     title: 'Aysén Region',
//     location: 'Patagonia, Chile',
//     price: 604,
//     imageUrl: '/assets/images/card-img-6.png',
//     tags: ['Sports', 'Adventurous'],
//   },
//   {
//     id: 7,
//     title: 'Taman Negara',
//     location: 'Peninsular Malaysia',
//     price: 300,
//     imageUrl: '/assets/images/card-img-7.png',
//     tags: ['Mountains', 'Budget'],
//   },
//   {
//     id: 8,
//     title: 'Zhangye Landform',
//     location: 'Gansu, China',
//     price: 790,
//     imageUrl: '/assets/images/card-img-8.png',
//     tags: ['Solo travel', 'City'],
//   },
];

export function Cards() {
  return (
    <section className="grid grid-cols-4 gap-5">
      {mockTrips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </section>
  )
}
