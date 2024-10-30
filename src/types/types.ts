export interface SideBarItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export interface overviewItemProps {
  overview_head: overviewHead[];
  overview_table: overviewTableProps[];
  // overview_chart: OverviewChart[];
}

export interface overviewHead {
  title: string;
  content: string;
  footer: string;
}

export interface overviewTableProps {
  table_name: string;
  rows: overviewTableRowProps[];
}

export interface overviewTableRowProps {
  holder: tableHolderProps,
  email: string,
  noOfLoan: string,
}

export interface tableHolderProps {
  id: string,
  icon: string
  initial: string,
  name: string,
  username: string,
}

export interface loanItemsProps {
  loan_head: loanHead[];
  loan_table: loanTableProps[];
}

export interface loanHead {
  title: string;
  content: string;
  footer: string;
}

export interface loanTableProps {
  rows: loanTableRowProps[];
}

export interface loanTableRowProps {
  id: string,
  amount: string,
  type: string,
  interest: string,
  lender: string,
  borrower: string,
  loanPeriod: string,
}