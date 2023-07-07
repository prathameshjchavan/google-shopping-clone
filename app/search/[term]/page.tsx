import { SearchParams } from "@/typings";
import { redirect } from "next/navigation";

type Props = {
	searchParams: SearchParams;
	params: {
		term: string;
	};
};

const SearchPage = ({ searchParams, params: { term } }: Props) => {
	if (!term) {
		redirect("/");
	}

	// fetch from API...

	return <div>{/* Results Page */}</div>;
};

export default SearchPage;
