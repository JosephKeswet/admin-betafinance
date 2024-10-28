import Icon from "./icons";

export const routes = {
  signup: "/signup",
  signin: "/",
  forgotPassword: "/forgot-password",
  home: "/",
  sidebarItems: [
    {
      title: "Overview",
      path: "/",
      icon: Icon.Overview,
      activeIcon: Icon.OverviewActive,
      alt: "overview",
    },
    {
      title: "Loans",
      path: "/loans",
      icon: Icon.Loan,
      activeIcon: Icon.LoanActive,
      alt: "loans",
    },
    {
      title: "Customers",
      path: "/customers",
      icon: Icon.Customer,
      activeIcon: Icon.CustomerActive, // Add active icon for customers page (if needed)  e.g., Icon.CustomerActive,  Icon.CustomerActiveActive, etc.  for active state
      alt: "customers",
    },
    {
      title: "Admin",
      path: "/admin",
      icon: Icon.Admin,
      activeIcon: Icon.AdminActive, // Add active icon for admin page (if needed)  e.g., Icon.AdminActive,  Icon.AdminActiveActive, etc.  for active state
      alt: "admin",
    },
    {
      title: "Settings",
      path: "/settings",
      icon: Icon.Settings,
      activeIcon: Icon.SettingsActive, // Add active icon for settings page (if needed)  e.g., Icon.SettingsActive,  Icon.SettingsActiveActive, etc.  for active state
      alt: "settings",
    },
    {
      title: "Help",
      path: "/help",
      icon: Icon.Help,
      activeIcon: Icon.HelpActive, // Add active icon for help page (if needed)  e.g., Icon.HelpActive,  Icon.HelpActiveActive, etc.  for active state
      alt: "help",
    },
  ],
};
