import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface HeaderDashboardProps {
  title: ReactNode;
  subtitle: string;
  buttonText: string;
}

export default function HeaderDashboard({ 
  title,
  subtitle,
  buttonText,
 }: HeaderDashboardProps) {
  return (
    <header className="flex justify-between items-center flex-wrap">
      <div>
        <div className="flex items-center">
          <h1 className="font-medium text-2xl mr-2">{title}</h1>
        </div>
        <p className="text-gray-500 ">{subtitle}</p>
      </div>
      <Button className="bg-blue-600 md:w-45 hover:bg-blue-700 w-full mt-3">
        {buttonText}
      </Button>
    </header>
  );
}