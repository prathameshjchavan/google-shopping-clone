type Props = {
	params: {
		id: string;
	};
};

export const revalidate = 300;

const page = ({ params: { id } }: Props) => {
	// API Endpoint

	return <div>page</div>;
};

export default page;
