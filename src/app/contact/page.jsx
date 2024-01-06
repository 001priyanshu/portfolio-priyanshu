'use client'
import { IoIosMail } from 'react-icons/io';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Icon from '../techstack/Icon';

const Contact = () => {
    return (
        <section id="contact">
            <div className="font-Poppins flex flex-col items-center gap-4 mx-4 lg:mx-40 mt-6 mb-8 text-white" style={{ borderTop: '5px solid #ffff00', color: 'white' }}>
                <h1 className="text-3xl m-2 font-bold" style={{ color: '#ffff00' }}>Contact Priyanshu – Your catalyst for digital innovation</h1>
                <div className="flex gap-4">
                    <a className="text-yellow-500" href="mailto:priyanshu822400@gmail.com" target='_blank'>
                        <Icon>
                            <IoIosMail />
                        </Icon>
                    </a>
                    <a className="text-yellow-500" href='https://twitter.com/Priyans16841306' target='_blank'>
                        <Icon>
                            <FaXTwitter />
                        </Icon>
                    </a>
                    <a className="text-yellow-500" href='https://www.linkedin.com/in/priyanshu-rajput-550b88156/' target='_blank'>
                        <Icon>
                            <FaLinkedin />
                        </Icon>
                    </a>
                    
                </div>
                
            </div>
        </section>
    );
};

export default Contact;