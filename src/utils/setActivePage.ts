import { notFound } from "next/navigation";

export const setActivePage = (page: string, numberOfAllPages: number) => {
	if (parseInt(page) < 1 || isNaN(parseInt(page)) || parseInt(page) > numberOfAllPages) {
		return notFound();
	} else {
		return parseInt(page);
	}
};
