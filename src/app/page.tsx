"use client";
import Book1Image from "@/assets/book1.png";
import Book2Image from "@/assets/book2.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br">
			{/* Header */}
			<header className="flex justify-between items-center p-6 md:p-8">
				<div className="flex items-center gap-2">
					<span className="font-bold font-mono text-3xl text-gray-800">TEENS IMAGE</span>
				</div>

				<nav className="hidden md:flex items-center gap-6">
					<Link href={"https://wa.me/+919151645694"}>
						<button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium">
							Pre-Book Now
						</button>
					</Link>
				</nav>
			</header>

			{/* Hero Section */}
			<div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-8 py-12 lg:py-24">
				{/* Left Content */}
				<div className="flex-1 max-w-xl lg:max-w-2xl mb-12 lg:mb-0 px-10 md:px-20">
					<h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 ">
						TEEN IMAGE <br /> Launching soon
					</h1>

					{/* <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
						Id at nibh gravida aliquet sed posuere at. Facilisis id nibh ut vel,
						hendrerit urna. Nec eget nibh ut adipiscing est et ornare. Volutpat feugiat
						tellus arcu ullamcorper porta justo, porttitor hac. Mattis scelerisque
						tincidunt sit auctor in. Sed metus placerat pellentesque.
					</p> */}

					<div className="flex items-center gap-4">
						<Link href={"https://wa.me/+919151645694"}>
							<button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium">
								Pre-Book Now
							</button>
						</Link>
					</div>
				</div>

				{/* Right Content - Books */}
				<div className="flex justify-center pl-20">
					<Image
						src={Book2Image}
						alt="The Best Book in the World"
						width={400}
						height={400}
						className="transform rotate-12 z-10 rounded-lg mr-20"
					/>
				</div>
			</div>
		</div>
	);
}
