import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shop Project - Next.js 14 Masters Course",
	description: "This page was created during the Nextjs 14 Masters course",
	openGraph: {
		title: "Shop Project - Next.js 14 Masters Course",
		description: "This page was created during the Nextjs 14 Masters course",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-slate-100`}>
				<Header />
				<section className="mx-auto px-8 py-6">{children}</section>
			</body>
		</html>
	);
}
