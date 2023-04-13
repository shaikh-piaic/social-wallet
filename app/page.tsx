import Image from "next/image";
import { Inter } from "next/font/google";
import RpcProviderExample from "@/components/SocialWallet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className=' min-h-screen text-center p-24'>
			<h1 className='font-bold text-4xl my-5'>Wallet Connection</h1>
			<h2 className='font-bold text-2xl my-5'>Ethers API Wallet</h2>
			<RpcProviderExample />
		</main>
	);
}
