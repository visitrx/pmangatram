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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [language, setLanguage] = useState<keyof typeof languageList>("English")
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [company, setCompany] = useState("");

  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = {
      name,
      number,
      gender,
      company
    };

    if (!formData.name || !formData.number || !formData.gender) {
      toast.error("Please fill all the fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('/api/register', formData, {
        headers: {
          "Content-type": "multipart/form-data"
        },
      });
      console.log(response);

      if (response.status === 200) {
        toast.success("Registered Successfully!!");
        router.replace(`/success?number=${response.data.number}&language=${language}`);

      } else {
        toast.error(response.data.error);
      }

    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }

    setIsSubmitting(false);
  };

  const calculateTimeLeft = () => {
    // const difference = +new Date('2024-10-08') - +new Date();
    const targetDate = new Date('2024-10-08T09:00:00');
    const difference = +targetDate - +new Date();
    let timeLeft: timeLeftType = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<timeLeftType>(() => calculateTimeLeft() as timeLeftType);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft() as timeLeftType);
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (timeLeft?.hours) {
    return (
      <div className="flex flex-col gap-6 z-40 relative justify-center items-center p-5 md:p-10">
        <Image src={logo} alt="PMJ" className="w-full md:w-1/2 self-center rounded-lg" />
        <h1 className="text-3xl text-center text-white mt-40">Registration will be starting soon..</h1>
        <div className="text-3xl text-center text-white"> {timeLeft?.hours} H : {timeLeft?.minutes} M : {timeLeft?.seconds} S</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 z-40 relative justify-center items-center p-5 md:p-10">
      <Image src={logo} alt="PMJ" className="w-full md:w-1/2 self-center rounded-lg" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-6 w-full lg:w-1/3 "
      >
        <div className="mb-10 w-1/3 md:w-full">

          <label
            className="heading"
            htmlFor="name">Language: </label>
          <select
            className="ml-2"
            name="language"
            id="language"
            defaultValue="English"
            onChange={(e) => setLanguage(e.target.value)}
          >
            {/* <option className="text-gray-500" value="" >Select</option> */}
            <option className="text-black" value="English" selected>English</option>
            <option className="text-black" value="Hindi">Hindi</option>
            <option className="text-black" value="Bangla">Bangla</option>
            <option className="text-black" value="Telugu">Telugu</option>
          </select>
        </div>

        <div>
          <label
            className="heading"
            htmlFor="name">{languageList[language].name} *</label>
          <input
            required
            className="input"
            type="text"
            placeholder={languageList[language].name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label
            className="heading"
            htmlFor="number">{languageList[language].number} *</label>
          <input
            required
            className="input"
            type="tel"
            minLength={10}
            maxLength={10}
            placeholder={languageList[language].number}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div className="flex gap-4 items-center">
          <div className="heading">{languageList[language].gender} * : </div>

          <label
            className="flex gap-1 text-white"
            htmlFor="male">
            {languageList[language].male}
            <input
              required
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label
            className="flex gap-1 text-white"
            htmlFor="female">
            {languageList[language].female}
            <input
              type="radio"
              id="female"
              name="gender"
              value='female'
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label
            className="heading"
            htmlFor="company">{languageList[language].company}</label>
          <input
            className="input"
            type="text"
            placeholder={languageList[language].company}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <br />
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn">{isSubmitting ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
}
