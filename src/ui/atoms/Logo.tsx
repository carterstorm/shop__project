import NextImage from "next/image";

export const Logo = () => (
	<div className="mr-6 h-10 w-10">
		<NextImage src="/logo.svg" alt="Logo" width={40} height={40} />
	</div>
);
