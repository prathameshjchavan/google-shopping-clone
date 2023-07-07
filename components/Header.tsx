"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
	return (
		<header>
			<Link href="/">
				<Image
					src="https://links.papareact.com/208"
					alt="Google Logo"
					className="object-contain mr-10"
					width={150}
					height={150}
				/>
			</Link>

			<div></div>
		</header>
	);
};

export default Header;
