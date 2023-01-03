import Head from "next/head";
import { Inter } from "@next/font/google";
import Banner from "../components/Banner";
import MainHeaderNav from "../components/MainHeaderNav";
import MenuBar from "../components/MenuBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>OAK + FORT</title>
				<meta name="description" content="Oak fort landing page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Banner />
				<MainHeaderNav />
				<MenuBar />
			</main>
		</>
	);
}
