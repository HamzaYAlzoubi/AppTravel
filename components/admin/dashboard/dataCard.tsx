import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";


type cardDataType = {

    cardData: {
        totalUsers: {
            theTotal: number,
            lastMonth: number
        },
        totalTrips: {
            theTotal: number,
            lastMonth: number
        },
        activeUsersToday: {
            theTotal: number,
            lastMonth: number
        }
    }
}

export default function DataCard({ cardData }: cardDataType) {
    const calculateGrowth = (current: number, previous: number): number => {
        if (previous === 0) return 0;
        return ((current - previous) / previous) * 100;
    };

    const updatedData = {
        totalUsers: {
            ...cardData.totalUsers,
            theGrow: calculateGrowth(cardData.totalUsers.theTotal, cardData.totalUsers.lastMonth),
        },
        totalTrips: {
            ...cardData.totalTrips,
            theGrow: calculateGrowth(cardData.totalTrips.theTotal, cardData.totalTrips.lastMonth),
        },
        activeUsersToday: {
            ...cardData.activeUsersToday,
            theGrow: calculateGrowth(cardData.activeUsersToday.theTotal, cardData.activeUsersToday.lastMonth),
        },
    };
    const userTotalLength = updatedData.activeUsersToday.theTotal.toLocaleString().length;

    return (
        
        <section className="  grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle>Total Users</CardTitle>
                </CardHeader>

                <CardContent className="flex justify-between">
                    <div className="flex justify-between  flex-col">
                        <h1 className="text-3xl font-bold">
                            {updatedData.totalUsers.theTotal.toLocaleString()}
                        </h1>
                        <div className="flex justify-center items-center sm:flex-col sm:mt-4 [@media(min-width:1465px)]:flex-row [@media(min-width:1465px)]:mt-7">
                            <div className="flex justify-center items-center">
                                <Image
                                    className="mr-1"
                                    src={
                                        updatedData.totalUsers.theGrow >= 0
                                            ? "/assets/icons/arrow-up-green.svg"
                                            : "/assets/icons/arrow-down-red.svg"
                                    }
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <p className={`mr-1.5 ${updatedData.totalUsers.theGrow >= 0 ? "text-green-600" : "text-red-600"}`}>
                                    {updatedData.totalUsers.theGrow.toFixed(0)}%
                                </p>
                            </div>
                            <p className="text-gray-600 text-[13px]">vs last month</p>
                        </div>
                    </div>

                    <div>
                        <Image
                            src={
                                updatedData.totalUsers.theTotal >
                                    updatedData.totalUsers.lastMonth
                                    ? "/assets/icons/increment.svg"
                                    : "/assets/icons/decrement.svg"
                            }
                            alt={""}
                            width={160}
                            height={10}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Total Trips</CardTitle>
                </CardHeader>

                <CardContent className="flex justify-between">
                    <div className="flex justify-between  flex-col">
                        <h1 className="text-3xl font-bold">
                            {updatedData.totalTrips.theTotal.toLocaleString()}
                        </h1>
                        <div className="flex justify-center items-center sm:flex-col sm:mt-4 [@media(min-width:1465px)]:flex-row [@media(min-width:1465px)]:mt-7">
                            <div className="flex justify-center items-center">
                                <Image
                                    className="mr-1"
                                    src={
                                        updatedData.totalTrips.theGrow >= 0
                                            ? "/assets/icons/arrow-up-green.svg"
                                            : "/assets/icons/arrow-down-red.svg"
                                    }
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <p className={`mr-1.5 ${updatedData.totalTrips.theGrow >= 0 ? "text-green-600" : "text-red-600"}`}>
                                    {updatedData.totalTrips.theGrow.toFixed(0)}%
                                </p>
                            </div>
                            <p className="text-gray-600 text-[13px]">vs last month</p>
                        </div>
                    </div>

                    <div>
                        <Image
                            src={
                                updatedData.totalTrips.theTotal >
                                    updatedData.totalTrips.lastMonth
                                    ? "/assets/icons/increment.svg"
                                    : "/assets/icons/decrement.svg"
                            }
                            alt={""}
                            width={160}
                            height={10}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card className="sm:col-span-2 lg:col-span-1 "
>
                <CardHeader>
                    <CardTitle>Active Users Today</CardTitle>
                </CardHeader>

                <CardContent className="flex justify-between">
                    <div className="flex justify-between  flex-col">
                        <h1
                            className={`text-3xl font-bold ${userTotalLength <= 3 ? "w-20" : ""
                                }`}
                        >
                            {updatedData.activeUsersToday.theTotal.toLocaleString()}
                        </h1>
                        
                        <div className="flex justify-center items-center lg:flex-col mt-4 [@media(min-width:1465px)]:flex-row [@media(min-width:1465px)]:mt-7">
                            <div className="flex justify-center items-center">
                                <Image
                                    className="mr-1"
                                    src={
                                        updatedData.activeUsersToday.theGrow >= 0
                                            ? "/assets/icons/arrow-up-green.svg"
                                            : "/assets/icons/arrow-down-red.svg"
                                    }
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <p className={`mr-1.5 ${updatedData.activeUsersToday.theGrow >= 0 ? "text-green-600" : "text-red-600"}`}>
                                    {updatedData.activeUsersToday.theGrow.toFixed(0)}%
                                </p>
                            </div>
                            <p className="text-gray-600 text-[13px]">vs last month</p>
                        </div>
                    </div>

                    <div>
                        <Image
                            src={
                                updatedData.activeUsersToday.theTotal >
                                    updatedData.activeUsersToday.lastMonth
                                    ? "/assets/icons/increment.svg"
                                    : "/assets/icons/decrement.svg"
                            }
                            alt={""}
                            width={160}
                            height={10}
                        />
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
