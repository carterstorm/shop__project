export const PageHeaderHeading = ({ children }: { children: React.ReactNode }) => {
	return (
		<h1 className="text-center text-3xl font-bold capitalize text-blue-500 sm:text-5xl">
			{children}
		</h1>
	);
};
