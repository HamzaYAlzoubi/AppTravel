import Image from 'next/image';

interface DestinationCardProps {
  imgSrc: string;
  rating: string;
  title: string;
  activities: string;
  className?: string;
}

export default function DestinationCard({
  imgSrc,
  rating,
  title,
  activities,
  className = '',
}: DestinationCardProps) {
  return (
    <div className={`relative rounded-2xl overflow-hidden h-full text-white ${className}`}>
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover"
      />
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>

      {/* Content, absolutely positioned */}
      <div className="absolute top-0 left-0 right-0 bottom-0 p-5 flex flex-col justify-between">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm w-fit">
          {rating}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-200">{activities} Activities</p>
        </div>
      </div>
    </div>
  );
}
