import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "杰哥的AI工坊",
	subtitle: "技术学习与分享",
	lang: "zh_CN",
	themeColor: {
		hue: 18,
		fixed: false,
	},
	banner: {
		enable: true,
		src: '/banner.jpg',
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/Momoyeyu",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg",
	name: "苏俊杰",
	bio: "Code Is Elegant",
	links: [
		{
			name: "学术主页",
			icon: "fa6-solid:graduation-cap",
			url: "https://scholar.google.com/citations?user=0c27Ns4AAAAJ&hl",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Momoyeyu",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/171878754",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:momoyeyu@outlook.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
