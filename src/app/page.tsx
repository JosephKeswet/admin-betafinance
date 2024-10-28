import { Chart } from "@/components/Chart";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { overview_items } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  const table = overview_items.overview_table;
 
  return (
    <main className="flex flex-col flex-1">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
          {overview_items.overview_head.map((item, index) => (
          <Card key={index} className='col-span-1 rounded-xs'>
            <CardHeader>
              <CardDescription>{item.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
            <CardFooter>
              <p>{item.footer}</p>
            </CardFooter>
          </Card>
          ))}
        </div>
        <div className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        {table.map((table, tableIndex) => (
          <div key={tableIndex} className="bg-white border-[1px] rounded">
            <h2 className="text-lg font-semibold border-b-[1px] border-gray-300 p-2">
              {table.table_name}
            </h2>
            <Table className="">
              <TableBody>
                {table.rows.map((item, rowIndex) => (
                  <TableRow className='pl-4' key={rowIndex}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <div>
                          <p>{item.holder.id}</p>
                        </div>
                        <Image
                          src={item.holder.icon}
                          alt="Icon"
                        />
                        <span className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
                        <Avatar>
                <AvatarFallback>{item.holder.initial}</AvatarFallback>
              </Avatar>
                        </span>
                        <div>
                          <p className="font-bold">{item.holder.name}</p>
                          <p className="text-sm text-gray-500">
                            {item.holder.username}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>
                      {item.noOfLoan}
                      <span> Loans</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
        </div>
        <div>
          <Chart />
        </div>
        </div>
      </div>
    </main>
  );
}
