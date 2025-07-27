/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram } from "lucide-react";
import profileImage from "@/assets/images/book1.jpg";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";

interface BusinessCard {
	id: string;
	name: string;
	title: string;
	company?: string;
	email: string;
	phone: string;
	address: string;
	website?: string;
	social?: {
		linkedin?: string;
		twitter?: string;
		facebook?: string;
		instagram?: string;
		threads?: string;
	};
	avatar?: string;
	bio?: string;
}

export default function BusinessCardPage() {
	// Sample business card data from JSON object
	const businessCard: BusinessCard = {
		id: "1",
		name: "Vishal Tiwari",
		title: "Author of TEENS IMAGE",
		// company: "Fidel Law House",
		email: "vishaltiwari@gmail.com",
		phone: "+91 9151645694",
		address: "",
		website: "teensimage.com",
		social: {
			linkedin: "https://linkedin.com/in/vishal-tiwarii",
			twitter: "https://x.com/teensimg",
			instagram: "https://instagram.com/teensimg",
		},
		avatar: profileImage.src,
		bio: "",
	};

	return (
		<div className="min-h-screen bg-secondary px-4 py-8 md:px-8 lg:px-16">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
						Business Card
					</h1>
					<p className="text-white/80 text-lg">Professional Contact Information</p>
				</div>

				{/* Business Card */}
				<div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
						{/* Avatar */}
						<div className="flex-shrink-0">
							<img
								src={businessCard.avatar}
								alt={businessCard.name}
								className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-gray-100"
							/>
						</div>

						{/* Main Info */}
						<div className="flex-1 text-center md:text-left">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
								{businessCard.name}
							</h2>
							<p className="text-xl text-primary font-semibold mb-1">
								{businessCard.title}
							</p>
							<p className="text-lg text-gray-600 mb-6">{businessCard.company}</p>

							{/* Bio */}
							{businessCard.bio && (
								<p className="text-gray-700 leading-relaxed mb-6">
									{businessCard.bio}
								</p>
							)}

							<Link href={"https://amzn.in/d/31bkmeu"}>
								<button className="bg-[#f6ab01] text-black rounded-lg py-2 px-4 hover:bg-primary-dark transition-colors hover:bg-amber-500 cursor-pointer">
									Buy Now
								</button>
							</Link>
						</div>
					</div>

					{/* Contact Information */}
					<div className="border-t border-gray-200 pt-8 mt-8">
						<h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
							Contact Information
						</h3>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Email */}
							<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
								<Mail className="w-6 h-6 text-primary flex-shrink-0" />
								<div>
									<p className="text-sm text-gray-600 font-medium">Email</p>
									<a
										href={`mailto:${businessCard.email}`}
										className="text-primary hover:underline font-semibold">
										{businessCard.email}
									</a>
								</div>
							</div>

							{/* Phone */}
							<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
								<Phone className="w-6 h-6 text-primary flex-shrink-0" />
								<div>
									<p className="text-sm text-gray-600 font-medium">Phone</p>
									<a
										href={`tel:${businessCard.phone}`}
										className="text-primary hover:underline font-semibold">
										{businessCard.phone}
									</a>
								</div>
							</div>

							{/* Address */}
							<div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg md:col-span-2">
								<MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
								<div>
									<p className="text-sm text-gray-600 font-medium">Address</p>
									<p className="text-gray-900 font-semibold">
										{businessCard.address}
									</p>
								</div>
							</div>

							{/* Website */}
							{businessCard.website && (
								<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg md:col-span-2">
									<Globe className="w-6 h-6 text-primary flex-shrink-0" />
									<div>
										<p className="text-sm text-gray-600 font-medium">Website</p>
										<a
											href={`https://${businessCard.website}`}
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary hover:underline font-semibold">
											{businessCard.website}
										</a>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Social Media */}
					{businessCard.social && (
						<div className="border-t border-gray-200 pt-8 mt-8">
							<h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
								Connect With US
							</h3>
							<div className="flex justify-center md:justify-start gap-6">
								{businessCard.social.linkedin && (
									<a
										href={businessCard.social.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
										<Linkedin className="w-6 h-6" />
									</a>
								)}
								{businessCard.social.twitter && (
									<a
										href={businessCard.social.twitter}
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
										<BsTwitterX className="w-6 h-6" />
									</a>
								)}
								{businessCard.social.instagram && (
									<a
										href={businessCard.social.instagram}
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
										<Instagram className="w-6 h-6" />
									</a>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
