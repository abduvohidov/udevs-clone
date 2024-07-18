import {
	dropdownIconConsulting,
	dropdownIconDelever,
	dropdownIconDesign,
	dropdownIconEng,
	dropdownIconErp,
	dropdownIconGoodZone,
	dropdownIconIman,
	dropdownIconMobile,
	dropdownIconOptimization,
	dropdownIconRu,
	dropdownIconSmsUz,
} from "@/shared/assets/icons/dropdown-icons";

export const NAVLIST_CONTENT = [
	{
		name: "Услуги",
		link: "/",
		isContent: false,
	},
	{
		name: "Команда",
		link: "/team",
		isContent: false,
	},
	{
		name: "Напрaвление",
		link: "/mobile",
		isContent: true,
		content: [
			{
				title: "Разработка мобильных приложений",
				icon: dropdownIconMobile,
				url: "/mobile",
			},
			{
				title: "Разработка и внедрение ERP систем",
				icon: dropdownIconErp,
				url: "/erp",
			},
			{
				title: "UI / UX дизайн",
				icon: dropdownIconDesign,
				url: "/design",
			},

			{
				title: "IT консалтинг",
				icon: dropdownIconConsulting,
				url: "/consulting",
			},
			{
				title: "Оптимизация инфраструктуры",
				icon: dropdownIconOptimization,
				url: "/optimization",
			},
		],
	},
	{
		name: "Инструменты",
		link: "/intstruments",
		isContent: false,
	},
	{
		name: "Клиенты",
		link: "/ourclients",
		isContent: false,
	},
	{
		name: "Портфолио",
		link: "/portfolio",
		isContent: true,
		content: [
			{
				title: "Delever",
				icon: dropdownIconDelever,
				url: "/delever",
			},
			{
				title: "Sms.uz",
				icon: dropdownIconSmsUz,
				url: "/smsuz",
			},
			{
				title: "Goodzone",
				icon: dropdownIconGoodZone,
				url: "/goodzone",
			},

			{
				title: "Iman",
				icon: dropdownIconIman,
				url: "/iman",
			},
		],
	},
	{
		name: "Язык",
		link: "/lang",
		isContent: true,
		content: [
			{
				title: "Рус",
				icon: dropdownIconRu,
				url: "",
			},
			{
				title: "Eng",
				icon: dropdownIconEng,
				url: "",
			},
		],
	},
];
