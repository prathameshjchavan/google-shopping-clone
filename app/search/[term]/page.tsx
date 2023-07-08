import ResultsList from "@/components/ResultsList";
import { getFetchUrl } from "@/lib/getFetchUrl";
import { PageResult, SearchParams } from "@/typings";
import { redirect } from "next/navigation";

type Props = {
	searchParams: SearchParams;
	params: {
		term: string;
	};
};

export const revalidate = 300;

const SearchPage = async ({ searchParams, params: { term } }: Props) => {
	if (!term) {
		redirect("/");
	}

	// fetch from API...
	const response = await fetch(getFetchUrl("/api/search"), {
		method: "POST",
		body: JSON.stringify({ searchTerm: term, ...searchParams }),
	});

	const results = (await response.json()) as PageResult[];

	return (
		<div>
			<ResultsList results={results} term={term} />
		</div>
	);
};

export default SearchPage;
