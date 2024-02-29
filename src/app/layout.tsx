import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shop Project",
	description: "This shop project is created by using Next app",
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
