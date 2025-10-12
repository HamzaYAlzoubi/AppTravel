"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeaderDashboard from "@/components/admin/dashboard/Header";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Expanded user data to 16 users
const users = [
    { id: "USR001", name: "John Doe", email: "john.doe@example.com", joinDate: "2023-01-15", itineraryCreated: 12, status: "Admin", avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: "USR003", name: "Mike Johnson", email: "mike.johnson@example.com", joinDate: "2023-03-10", itineraryCreated: 21, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/65.jpg" },
    { id: "USR005", name: "Chris Lee", email: "chris.lee@example.com", joinDate: "2023-05-22", itineraryCreated: 15, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/41.jpg" },
    { id: "USR006", name: "David Garcia", email: "david.garcia@example.com", joinDate: "2023-06-11", itineraryCreated: 3, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/52.jpg" },
    { id: "USR007", name: "James Wilson", email: "james.wilson@example.com", joinDate: "2023-07-19", itineraryCreated: 18, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/71.jpg" },
    { id: "USR008", name: "Robert Martinez", email: "robert.martinez@example.com", joinDate: "2023-08-01", itineraryCreated: 9, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/88.jpg" },
    { id: "USR009", name: "Daniel Anderson", email: "daniel.anderson@example.com", joinDate: "2023-09-14", itineraryCreated: 25, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: "USR010", name: "Paul Thomas", email: "paul.thomas@example.com", joinDate: "2023-10-29", itineraryCreated: 7, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg" },
    { id: "USR011", name: "Mark Jackson", email: "mark.jackson@example.com", joinDate: "2023-11-05", itineraryCreated: 14, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/33.jpg" },
    { id: "USR012", name: "George White", email: "george.white@example.com", joinDate: "2023-11-12", itineraryCreated: 19, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/44.jpg" },
    { id: "USR013", name: "Brian Harris", email: "brian.harris@example.com", joinDate: "2023-11-20", itineraryCreated: 2, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/55.jpg" },
    { id: "USR014", name: "Kevin Martin", email: "kevin.martin@example.com", joinDate: "2023-12-01", itineraryCreated: 22, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/66.jpg" },
    { id: "USR015", name: "Steven Thompson", email: "steven.thompson@example.com", joinDate: "2023-12-15", itineraryCreated: 11, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/77.jpg" },
    { id: "USR016", name: "Edward Moore", email: "edward.moore@example.com", joinDate: "2023-12-28", itineraryCreated: 17, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/89.jpg" },
    { id: "USR017", name: "Ronald Taylor", email: "ronald.taylor@example.com", joinDate: "2024-01-05", itineraryCreated: 4, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: "USR018", name: "Anthony Clark", email: "anthony.clark@example.com", joinDate: "2024-01-12", itineraryCreated: 16, status: "User", avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg" },
];

export default function AllUsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="h-full w-full flex flex-col gap-6">
      <HeaderDashboard
        title="Manage Users"
        subtitle="Filter, sort, and access detailed user profiles"
        buttonText="+ Add new user"
      />
      <Card className="py-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-4 font-light text-gray-500">NAME</TableHead>
                <TableHead className="p-4 font-light text-gray-500">EMAIL ADDRESS</TableHead>
                <TableHead className="p-4 font-light text-gray-500">JOIN DATE</TableHead>
                <TableHead className="p-4 font-light text-gray-500">ITINERARY CREATED</TableHead>
                <TableHead className="p-4 font-light text-gray-500">STATUS</TableHead>
                <TableHead className="p-4 font-light text-gray-500"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.map((user, i) => (
                <TableRow
                  key={user.id}
                  className={i % 2 === 0 ? "bg-gray-50" : ""}
                >
                  <TableCell className="font-medium p-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      {user.name}
                    </div>
                  </TableCell>
                  <TableCell className="p-4">{user.email}</TableCell>
                  <TableCell className="p-4">{user.joinDate}</TableCell>
                  <TableCell className="p-4">{user.itineraryCreated}</TableCell>
                  <TableCell className="p-4">
                    <Badge
                      className={
                        user.status === "User"
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                      variant={user.status === "Admin" ? "secondary" : "default"}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="p-4">
                    <button className="p-2 hover:bg-gray-200 rounded-full">
                      <Trash2 className="h-5 w-5 text-gray-500" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="pt-2 pb-4">
          <Pagination>
            <PaginationContent className="w-full justify-between">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(i + 1);
                      }}
                      isActive={currentPage === i + 1}
                      className={currentPage === i + 1 ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white" : ""}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </div>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}