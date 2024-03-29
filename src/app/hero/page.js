"use client"
import React from 'react'
import { hero ,priyanshuDp} from '../images/index';


import Image from 'next/image';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
const Hero = () => {
    useEffect(() => {
        let typewriter;
        //setScreenWidth(window.innerWidth);
        // Check if the element with id 'typewriter' exists
        const targetElement = document.getElementById('typewriter');

        if (targetElement) {
            typewriter = new Typewriter(targetElement, {
                strings: ["A Software Developer", "A Freelancer", "A Full Stack Developer"],
                autoStart: true,
                loop: true,
            });
        }

        return () => {
            // Cleanup the typewriter instance if it's defined
            if (typewriter) {
                typewriter.stop();
            }
        };
    }, []);
    return (
        <div className="font-Poppins relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
            <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                <div className="text-left">
                    <h3 className="leading-tight text-3xl" style={{ color: '#ffff00' }}>
                    Hi! I&apos;m
                    </h3>
                    <h2 className='mt-2 text-white text-6xl font-Merriweather'>Priyanshu Rajput</h2>
                    <p className='text-3xl sm:text-4xl lg:text-4xl mt-1' id="typewriter" style={{ color: "#ffff00" }}></p>
                    <p className='text-3xl ' style={{ color: 'white' }}>Transform Your Web Presence with Priyanshu – Crafting Bespoke Solutions Tailored to Your Vision.</p>
                    <p className='text-xl mt-2' style={{ color: 'white' }}>
                    I&apos;m a freelance developer who create digital products for business and startups.I have a lot of experience in building websites and web applications with modern technologies.
                    </p>
                    <div className="mb-4 mt-2 flex sm:items-center lg:items-left">
                        <div className="inline-flex  transition duration-150 ease-in-out" role="group">
                            <a
                                className="rounded-l custom-radius px-8 py-4  uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 text-xl font-bold"
                                style={{ backgroundColor: '#ffff00', color: 'black', marginRight: '20px' }}
                                data-te-ripple-init
                                href='https://github.com/001priyanshu'
                                data-te-ripple-color="light"
                                target='_blank'
                            >
                                Github
                            </a>

                            <a
                                className="rounded-r custom-radius px-8 py-4 uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 text-xl font-bold"
                                data-te-ripple-init
                                style={{ backgroundColor: '#ffff00', color: 'black' }}
                                href='https://drive.google.com/file/d/165jQ5R4CPQN6Kk5fVuMavIhFQj1AYLmv/view?usp=sharing                                '
                                onClick={() => handleTwitter()}
                                data-te-ripple-color="light"
                                target='_blank'
                            >
                               Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex items-center py-5 md:w-3/4 md:pb-20 md:pt-10 md:pl-10 ">
                <div className="relative w-full p-3 rounded-full  md:p-8">
                    <div className=" bg-white border-4 w-40 h-40 rounded-full">
                        <Image src={priyanshuDp} />
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Hero;
