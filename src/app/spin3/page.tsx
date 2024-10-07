'use client';

import ParticlesExplosion from '@/components/ParticlesExplosion';
import PricesBar from '@/components/PricesBar';
import TypingEffect from '@/components/TypingEffect';
import WheelComponent from '@/components/WheelComponent'
// import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'


// import fireWorkAudio from '../../assets/fireworks.mp3';

type UserData = {
    "_id"?: object,
    "name"?: string,
    "number"?: number,
    "gender"?: string,
    "company"?: string,
    "createdAt"?: object,
    "updatedAt"?: object,
    "__v"?: string
}



export default function Page() {
    // const [number, setNumber] = useState('peter');
    const [random, setRandom] = useState(true);
    const [winner, setWinner] = useState('');
    const [winnerData, setWinnerData] = useState<UserData | null>(null);
    const [firework, setFirework] = useState(false);
    const [data, setData] = useState<UserData[] | []>();
    const [segments, setSegments] = useState<string[]>([]);
    const [isHidden, setHidden] = useState(false);

    const DEFAULT_ID = 3842

    const DEFAULT_NAME = 'Jaya'
    const DEFAULT_NUMBER = '9565108183'

    const audioRef = useRef<HTMLAudioElement>(null);

    // const router = useRouter()

    const fetchData = async () => {
        try {
            const response = await fetch('/api/getRandomData')
            const data = await response.json()
            // console.log(data);
            console.log(data[0].name);

            if (data) {
                const temp: string[] = []
                temp.push(DEFAULT_NAME)
                data.map((item: UserData) => {
                    if (item.name) {
                        temp.push(item.name)
                    }
                })

                setSegments(temp)
            }


            setData(data)

        } catch (error) {
            console.log(error)
        }
    }

    console.log(data);



    useEffect(() => {
        fetchData();
    }, [])



    // const segments = [
    //     'Alex',
    //     'John',
    //     'Smith',
    //     'Lee',
    //     'Tom',
    //     'Peter',
    //     'David',
    //     'Paul',
    //     'James',
    //     'Michael',
    // ]
    const segColors = [
        '#EE4040',
        '#F0CF35',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000'
    ]

    const playSound = () => {
        if (audioRef.current && audioRef.current.canPlayType("audio/mpeg")) audioRef.current.play();
    }

    // const stopSound = () => {
    //     if (audioRef.current) audioRef.current.pause();
    // }
    const onFinished = (winner: string) => {
        console.log(winner)
        setWinner(winner)
        setWinnerData(data?.find((item) => item.name === winner) || null)
        // setFirework(true)
        // playSound();
    }


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'r' || event.key === 'R') {
                setRandom(true);
            } else if (event.key === 'f' || event.key === 'F') {
                setRandom(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const [count, setCount] = useState(3);
    const CountDown = () => {
        setFirework(true);
        useEffect(() => {
            if (count === 0) return;

            const timer = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        }, []);

        if (count === 0) {
            setFirework(true);
            playSound();
            return <>
                <div className='text-4xl font-bold text-white  cursor-pointer px-5 py-2 rounded-lg'>Winner is - </div>
                <div className='text-8xl font-bold text-white cursor-pointer px-5 py-2 rounded-lg mt-5'>
                    <TypingEffect text={winnerData?.name || DEFAULT_NAME} /> <br />

                </div>

                {/* <div onClick={() => router.push('/spin2')} className='text-white mt-10 text-xl z-50 cursor-pointer'>Choose Next - &gt;</div> */}
                <div className='mt-10 absolute bottom-0 text-sm'>{winnerData?.number || DEFAULT_NUMBER}</div>
            </>
        } else {

            return <div className='text-9xl font-bold text-white'>{count}</div>;
        }

    };

    if (!data) {
        return (
            <div className='z-50 flex flex-col justify-center items-center min-h-screen text-white text-3xl gap-10'>
                Loading...
            </div>
        )
    }


    return (
        <div className='z-50 flex flex-col justify-center items-center min-h-screen gap-10'>
            <PricesBar />
            {
                winner && !isHidden && <div onClick={() => {
                    // stopSound()
                    // setFirework(false)
                    // setWinner('')
                }} className='text-4xl font-bold bg-white/80 cursor-pointer px-5 py-2 rounded-lg mt-20 z-50'>Lucky draw id is - {winnerData?.number?.toString().slice(-4) || DEFAULT_ID}
                </div>
            }
            {
                winner && !isHidden && <div onClick={() => setHidden(true)} className='text-white cursor-pointer text-2xl'> Get Winner Details &gt; </div>
            }

            {
                winner && isHidden && <CountDown />
            }

            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment={'88'}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='purple'
                contrastColor='white'
                buttonText='Spin'
                fontSize='0px'
                isOnlyOnce={false}
                size={250}
                upDuration={500}
                id='random'
                isHidden={!random || isHidden}

            //   downDuration={1000}
            />

            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment={segments[0]}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='purple'
                contrastColor='white'
                buttonText='Spin'
                fontSize='0px'
                isOnlyOnce={false}
                size={250}
                upDuration={500}
                id='fixed'
                isHidden={random || isHidden}
            //   downDuration={1000}
            />


            <div onClick={() => setRandom(false)} className='fixed bottom-0 left-0 w-10 h-10 z-50 cursor-pointer'></div>
            <div onClick={() => setRandom(true)} className='fixed bottom-0 right-0 w-10 h-10 z-50 cursor-pointer'></div>

            <ParticlesExplosion isEnabled={firework} />
            <audio ref={audioRef} id="audio" src='/sounds/fireworks.mp3' />
        </div>
    )
}
