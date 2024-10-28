import Icon from './icons'

export const routes = {
	signup: "/signup",
	signin: "/",
	forgotPassword: "/forgot-password",
	home: "/",
	sidebarItems: [
		{
			title: "Overview",
			path: "/",
			icon: Icon.overview,
			alt: "overview"
		  },
		  {
			title: "Loans",
			path: "/loans",
			icon: Icon.moneys,
			alt: "loans"
		  },
		  {
			title: "Customers",
			path: "/customers",
			icon:  Icon.people,
			alt: "customers"
		  },
		  {
			title: "Admin",
			path: "/admin",
			icon:  Icon.user,
			alt: "admin"
		  },
		  {
			title: "Settings",
			path: "/settings",
			icon: Icon.settings,
			alt: "settings"
		},
		{
			title: "Help",
			path: "/help",
			icon: Icon.help,
			alt: "help"
		}

	],
};
