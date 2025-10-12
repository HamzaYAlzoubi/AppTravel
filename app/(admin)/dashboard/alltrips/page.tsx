"use client";

import HeaderDashboard from "@/components/admin/dashboard/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function AllTripsPage() {

  const Map = useMemo(() => dynamic(() => import('@/components/admin/dashboard/Map'), { 
    loading: () => <p>A map is loading...</p>,
    ssr: false 
  }), []);

  return (
    <div className="h-full w-full flex flex-col gap-6">
      <HeaderDashboard
        title="Add new Trips"
        subtitle="View and generate Al travel plans"
        buttonText="+ Create a trip"
      />
      <Card className="max-w-3xl mx-auto w-full">
        <CardContent>
          <div className="grid grid-cols-1 gap-6">
            {/* Selector 1 */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="select-1" className="text-gray-500">Country</Label>
              <Select defaultValue="jordan">
                <SelectTrigger id="select-1" className="w-full">
                  <SelectValue placeholder="Select a country..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jordan">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/assets/icons/jordan-flag.svg" alt="Jordan" />
                        <AvatarFallback>JO</AvatarFallback>
                      </Avatar>
                      <span>Jordan</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="usa">
                    <span>USA</span>
                  </SelectItem>
                  <SelectItem value="egypt">
                    <span>Egypt</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Input 2 */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="input-2" className="text-gray-500">Duration</Label>
              <Input type="text" id="input-2" placeholder="Enter number of days (e.g., 5, 12)" className="w-full" />
            </div>
            {/* Selector 3 */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="select-3" className="text-gray-500">Group Type</Label>
              <Select>
                <SelectTrigger id="select-3" className="w-full">
                  <SelectValue placeholder="Select a group type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Selector 4 */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="select-4" className="text-gray-500">Travel style</Label>
              <Select>
                <SelectTrigger id="select-4" className="w-full">
                  <SelectValue placeholder="Select your travel style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Selector 5 */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="select-5" className="text-gray-500">Interests</Label>
              <Select>
                <SelectTrigger id="select-5" className="w-full">
                  <SelectValue placeholder="Select your travel style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Selector 6 */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="select-6" className="text-gray-500">Budget Estimate</Label>
              <Select>
                <SelectTrigger id="select-6" className="w-full">
                  <SelectValue placeholder="Select your budget preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Label 7 and Map */}
            <div className="grid w-full items-center gap-1.5">
                <Label className="text-gray-500">Location on map</Label>
                <Map />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}