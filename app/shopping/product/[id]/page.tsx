import { getFetchUrl } from "@/lib/getFetchUrl";
import { ProductData } from "@/typings";
import { StarIcon } from "@heroicons/react/24/solid";
import { notFound } from "next/navigation";

type Props = {
	params: {
		id: string;
	};
};

export const revalidate = 300;

const page = async ({ params: { id } }: Props) => {
	const response = await fetch(getFetchUrl(`/api/shopping/product/${id}`));
	const productData = (await response.json()) as ProductData;

	if (!productData.content.pricing) {
		notFound();
	}

	return (
		<div className="p-12 pt-0">
			<h1 className="text-2xl">{productData.content.title}</h1>

			{productData.content.reviews && (
				<div>
					<div className="flex space-x-1">
						{[
							...Array.from({
								length: Math.round(productData.content.reviews.rating),
							}),
						].map((_, i) => (
							<StarIcon key={i} className="h-5 w-5 text-yellow-500" />
						))}

						{/* show remaining start from review out of 5 */}
						{[
							...Array.from({
								length: 5 - Math.round(productData.content.reviews.rating),
							}),
						].map((_, i) => (
							<StarIcon key={i} className="h-5 w-5 text-gray-200" />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default page;