'use client';

import ParticlesExplosion from '@/components/ParticlesExplosion';
import WheelComponent from '@/components/WheelComponent'
import React, { useEffect, useRef, useState } from 'react'

// import fireWorkAudio from '../../assets/fireworks.mp3';

export default function Page() {
    // const [number, setNumber] = useState('peter');
    const [random, setRandom] = useState(false);
    const [winner, setWinner] = useState('');
    const [firework, setFirework] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);
    const segments = [
        'Alex',
        'John',
        'Smith',
        'Lee',
        'Tom',
        'Peter',
        'David',
        'Paul',
        'James',
        'Michael',
    ]
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

    const stopSound = () => {
        if (audioRef.current) audioRef.current.pause();
    }
    const onFinished = (winner: string) => {
        console.log(winner)
        setWinner(winner)
        setFirework(true)
        playSound();
        // setNumber(prev => prev + 1)
        // if (number >= segments.length - 1) {
        //     setNumber(0);
        // }
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


    return (
        <div className='z-50 flex flex-col justify-center items-center min-h-screen gap-10'>
            {
                winner && <div onClick={() => {
                    stopSound()
                    setFirework(false)
                    setWinner('')
                }} className='text-4xl font-bold bg-white cursor-pointer px-5 py-2 rounded-lg mt-20 z-50'>Winner is {winner}</div>
            }

            {/* {
                random ? ( */}
            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment={'88'}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='purple'
                contrastColor='white'
                buttonText='Spin'
                fontSize='20px'
                isOnlyOnce={false}
                size={250}
                upDuration={500}
                id='random'
                isHidden={!random}

            //   downDuration={1000}
            />
            {/* ) : ( */}
            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment='peter'
                onFinished={(winner) => onFinished(winner)}
                primaryColor='purple'
                contrastColor='white'
                buttonText='Spin'
                fontSize='20px'
                isOnlyOnce={false}
                size={250}
                upDuration={500}
                id='fixed'
                isHidden={random}
            //   downDuration={1000}
            />
            {/* )
            } */}
            {/* <ConfettiComponent/> */}
            <div onClick={() => setRandom(false)} className='fixed bottom-0 left-0 w-10 h-10 z-50 cursor-pointer'></div>
            <div onClick={() => setRandom(true)} className='fixed bottom-0 right-0 w-10 h-10 z-50 cursor-pointer'></div>

            <ParticlesExplosion isEnabled={firework} />
            <audio ref={audioRef} id="audio" src='/sounds/fireworks.mp3' />
        </div>
    )
}
