import Icon from "./icons";
import { loanItemsProps, overviewItemProps } from "@/types/types";

export const overview_items: overviewItemProps = {
  overview_head: [
    {
      title: "Total Amount in Loan Collected",
      content: "#150,823,360",
      footer: "#980,800",
    },
    {
      title: "Number of Customers",
      content: "24,743",
      footer: "",
    },
    {
      title: "Total Number of Loan Collected",
      content: "104,766",
      footer: "",
    },
  ],
  overview_table: [
    {
      table_name: "Top ranking lenders",
      rows: [
        {
          holder: {
            id: "1",
            icon: Icon.ArrowUp,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
        {
          holder: {
            id: "2",
            icon: Icon.Minus,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
        {
          holder: {
            id: "3",
            icon: Icon.ArrowDown,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
        {
          holder: {
            id: "4",
            icon: Icon.ArrowUp,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
        {
          holder: {
            id: "5",
            icon: Icon.ArrowUp,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
      ],
    },
    {
      table_name: "Highest credit score holders",
      rows: [
        {
          holder: {
            id: "1",
            icon: Icon.ArrowUp,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
        {
          holder: {
            id: "2",
            icon: Icon.ArrowDown,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
        {
          holder: {
            id: "3",
            icon: Icon.Minus,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
        {
          holder: {
            id: "4",
            icon: Icon.ArrowDown,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
        {
          holder: {
            id: "5",
            icon: Icon.Minus,
            initial: "JD",
            name: "John Doe",
            username: "@eroberts",
          },
          email: "eroberts@gmial.com",
          noOfLoan: "84",
        },
      ],
    },
  ],
  //   overview_chart: [

  //   ],
};

export const loan_items: loanItemsProps = {
  loan_head: [
    {
      title: "Total number of P2P Loans",
      content: "₦98,725,653",
      footer: "",
    },
  ],
  loan_table: [
    {
      rows: [
        {
            id: "1",
            amount: "₦4,000",
            type: "Request",
            interest: "5%",
            lender: "@justinlati",
            borrower: "@johndorsi",
            loanPeriod: "2 weeks",
        },
        {
            id: "2",
            amount: "₦6,000",
            type: "Selection",
            interest: "5%",
            lender: "@justinlati",
            borrower: "@johndorsi",
            loanPeriod: "2 weeks",
        },
        {
            id: "3",
            amount: "₦8,500",
            type: "Request",
            interest: "5%",
            lender: "@justinlati",
            borrower: "@johndorsi",
            loanPeriod: "2 weeks", 
        },
        {
            id: "4",
            amount: "₦1,500",
            type: "Selection",
            interest: "5%",
            lender: "@justinlati",
            borrower: "@johndorsi",
            loanPeriod: "2 weeks",
        },
        {
            id: "5",
            amount: "₦500",
            type: "Request",
            interest: "5%",
            lender: "@justinlati",
            borrower: "@johndorsi",
            loanPeriod: "2 weeks",
        },
        {
            id: "6",
            amount: "₦6,800",
            type: "Selection",
            interest: "5%",
            lender: "@justinlati",
            borrower: "@johndorsi",
            loanPeriod: "2 weeks",
        },
        {
            id: "7",
            amount: "₦10,500",
            type: "Request",
            interest: "5%",
            lender: "@justinlati",
            borrower: "@johndorsi",
            loanPeriod: "2 weeks",
        },
        {
            id: "8",
            amount: "₦20,000",
            type: "Selection",
            interest: "5%",
            lender: "@justinlati",
            borrower: "@johndorsi",
            loanPeriod: "2 weeks",        
        },
        {
            id: "9",
            amount: "₦2,500",
            type: "Request",
            interest: "5%",
            lender: "@justinlati",
            borrower: "@johndorsi",
            loanPeriod: "2 weeks",
        },
      ],
    },
  ],
};
