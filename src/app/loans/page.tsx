"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { loan_items } from "@/lib/constants";

const Loan = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Button
          variant={activeTab === "P2P" ? "default" : "outline"}
          className={
            activeTab === "P2P"
              ? "bg-primary-light text-primary"
              : "bg-white text-gray-700"
          }
          onClick={() => setActiveTab("P2P")}
        >
          P2P Market Place
        </Button>
        <Button
          variant={activeTab === "Beta" ? "default" : "outline"}
          className={
            activeTab === "Beta"
              ? "bg-primary-light text-primary"
              : "bg-white text-gray-700"
          }
          onClick={() => setActiveTab("Beta")}
        >
          Beta Loans
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {loan_items.loan_head.map((item, index) => (
          <Card key={index} className="col-span-1 rounded-lg">
            <CardHeader>
              <CardDescription>{item.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{item.content}</p>
            </CardContent>
            <CardFooter>
              <p>{item.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <Button
          variant="ghost"
          className={`px-4 py-2 ${
            activeTab === "Pending"
              ? "rounded-none border-b-2 border-primary text-primary"
              : "text-black"
          }`}
          onClick={() => setActiveTab("Pending")}
        >
          Pending
        </Button>
        <Button
          variant="ghost"
          className={`px-4 py-2 ${
            activeTab === "Completed"
              ? "rounded-none border-b-2 border-primary text-primary"
              : "text-black"
          }`}
          onClick={() => setActiveTab("Completed")}
        >
          Completed
        </Button>
      </div>

      <Card className="overflow-x-auto p-0">
        <Table className="bg-white text-black px-6 min-w-[640px] md:min-w-full">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="text-xs text-left pl-6 py-2">
                Amount
              </TableHead>
              <TableHead className="text-xs text-left px-0 py-2">
                Type
              </TableHead>
              <TableHead className="text-xs text-left px-0 py-2">
                Interest
              </TableHead>
              <TableHead className="text-xs text-left px-0 py-2">
                Lender
              </TableHead>
              <TableHead className="text-xs text-left px-0 py-2">
                Borrower
              </TableHead>
              <TableHead className="text-xs text-left px-0 py-2">
                Loan Period
              </TableHead>
              <TableHead className="text-xs text-center py-2"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loan_items.loan_table.map((table, tableIndex) =>
              table.rows.map((loan, loanIndex) => (
                <TableRow key={`${tableIndex}-${loanIndex}`}>
                  <TableCell className="text-left pl-6 py-2">
                    {loan.amount}
                  </TableCell>
                  <TableCell className="text-left px-0 py-2">
                    {loan.type}
                  </TableCell>
                  <TableCell className="text-left px-0 py-2">
                    {loan.interest}
                  </TableCell>
                  <TableCell className="text-left px-0 py-2">
                    {loan.lender}
                  </TableCell>
                  <TableCell className="text-left px-0 py-2">
                    {loan.borrower}
                  </TableCell>
                  <TableCell className="text-left px-0 py-2">
                    {loan.loanPeriod}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="ghost"
                      className="text-gray-500 hover:text-gray-700 border-[1px] border-gray-300 text-center rounded-md px-2 py-0"
                    >
                      ...
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t-[1px] border-gray-300">
          <span className="text-sm text-gray-400">Page {currentPage} of 6</span>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              className="px-2"
            >
              {"<"}
            </Button>
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "ghost"}
                className={`px-3 py-1 ${
                  page === currentPage
                    ? "bg-primary-light text-black"
                    : "text-gray-400"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="ghost"
              onClick={() => setCurrentPage(Math.min(currentPage + 1, 6))}
              className="px-2"
            >
              {">"}
            </Button>
          </div>
          <div></div>
        </div>
      </Card>
    </div>
  );
};

export default Loan;
