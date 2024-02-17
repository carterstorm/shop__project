export const ProductCoverImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="aspect-square cursor-pointer overflow-hidden rounded-lg border border-gray-100 transition hover:border-gray-300 hover:bg-slate-200">
			<img
				src={src}
				alt={alt}
				width={320}
				height={320}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
