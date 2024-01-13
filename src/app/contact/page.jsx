'use client'
import { IoIosMail } from 'react-icons/io';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Icon from '../techstack/Icon';
import Link from 'next/link';

const Contact = () => {
    return (
        <section id="contact">
            <div className="font-Poppins flex flex-col items-center gap-4 mx-4 lg:mx-40 mt-6 mb-8 text-white" style={{ borderTop: '5px solid #ffff00', color: 'white' }}>
                <h1 className="text-3xl m-2 font-bold" style={{ color: '#ffff00' }}>Contact Priyanshu – Your catalyst for digital innovation</h1>
                <div className="flex gap-4">
                    <Link className="text-yellow-500 text-3xl hover:scale-110 transition-all" href="mailto:priyanshu822400@gmail.com" target='_blank'>
                         
                      
                            <IoIosMail />
                        
                        
                    </Link>
                    <Link className="text-yellow-500 text-3xl hover:scale-110 transition-all" href='https://twitter.com/Priyans16841306' target='_blank'>
                        
                            <FaXTwitter />
                        
                    </Link>
                    <Link className="text-yellow-500 text-3xl hover:scale-110 transition-all" href='https://www.linkedin.com/in/priyanshu-rajput-550b88156/' target='_blank'>
                       
                            <FaLinkedin />
                        
                    </Link>
                    
                </div>
                
            </div>
        </section>
    );
};

export default Contact;
