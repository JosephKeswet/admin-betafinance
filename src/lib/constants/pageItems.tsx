import Icon from "./icons";
import { overviewItemProps } from "@/types/types";

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
            { holder: {id: "1", icon: Icon.ArrowUp, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
            { holder: {id: "2", icon: Icon.Minus, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
            { holder: {id: "3", icon: Icon.ArrowDown, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
            { holder: {id: "4", icon: Icon.ArrowUp, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
            { holder: {id: "5", icon: Icon.ArrowUp, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
        ]
    },
    {
        table_name: "Highest credit score holders",
        rows: [
            { holder: {id: "1", icon: Icon.ArrowUp, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
            { holder: {id: "2", icon: Icon.ArrowDown, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
            { holder: {id: "3", icon: Icon.Minus, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
            { holder: {id: "4", icon: Icon.ArrowDown, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
            { holder: {id: "5", icon: Icon.Minus, initial: "JD", name: "John Doe", username: "@eroberts"}, email: "eroberts@gmial.com", noOfLoan: "84" },
        ]
    }
  ],
//   overview_chart: [

//   ],
};