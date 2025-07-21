'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

import logo from '@/assets/pmj.jpeg'
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";


const languageList: { [key: string]: { name: string; number: string; gender: string; male: string; female: string; company: string; } } = {
  Hindi: {
    name: "नाम",
    number: "फ़ोन नंबर",
    gender: "लिंग",
    male: "पुरुष",
    female: "महिला",
    company: "कंपनी का नाम",
  },
  English: {
    name: "Name",
    number: "Phone Number",
    gender: "Gender",
    male: "Male",
    female: "Female",
    company: "Company Name",
  },
  Bangla: {
    name: "নাম",
    number: "ফোন নম্বর",
    gender: "লিঙ্গ",
    male: "পুরুষ",
    female: "মহিলা",
    company: "কোম্পানির নাম",
  },
  Telugu: {
    name: "పేరు",
    number: "ఫోన్ నంబర్",
    gender: "లింగం",
    male: "పురుషుడు",
    female: "స్త్రీ",
    company: "కంపెనీ పేరు",
  }
}

type timeLeftType = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}
export default function Home() {
  return (
    <div className="flex flex-col gap-6 z-40 relative justify-center items-center p-5 md:p-10">
     
    </div>
  );
}
