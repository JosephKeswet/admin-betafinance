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
