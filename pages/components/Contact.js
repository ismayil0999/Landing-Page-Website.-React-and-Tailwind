import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Contact() {

    return (
        <div data-aos="zoom-in-up" id='contact' className="w-full flex flex-col p-[10px] gap-[40px] pb-[60px]">
            <div>
                <span className="position-text text-4xl w-full text-center flex justify-center font-bold">Contact</span>
            </div>
            <div className="grid grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:gap-[70px]">
                <form  className="flex flex-col gap-[20px] w-full items-center">
                    <input
                        type="text"
                        name='firstname'
                        placeholder="First Name"
        
                        className="w-[80%] rounded-[5px] bg-[#0A0A0A] border-[2px] border-[#252525] h-[40px] p-3 outline-none text-white"
                    /><input
                        type="text"
                        name='lastname'
                        placeholder="Last Name"
                        className="w-[80%] rounded-[5px] bg-[#0A0A0A] border-[2px] border-[#252525] h-[40px] p-3 outline-none text-white"
                    />
                  
                    <input
                        type="text"
                        name='email'
                        placeholder="Email"
                        className="w-[80%] rounded-[5px] bg-[#0A0A0A] border-[2px] border-[#252525] h-[40px] p-3 outline-none text-white"
                    />
             

                    <textarea
                        placeholder="Message"
                        className="min-w-[80%] max-w-[80%] min-h-[200px] max-h-[200px] rounded-[5px] bg-[#0A0A0A] border-[2px] border-[#252525] h-[35px] p-[3px] outline-none text-white"
                    />
                    <button
                        type="submit"
                        className="w-[50%] btn rounded-[20px] font-bold h-[40px] flex items-center justify-center text-black"
                    >
                        Send Message
                    </button>
                </form>

                <div className="flex flex-col gap-[40px]">
                    <span className='flex gap-[10px] items-center'>
                        <LocalPhoneIcon className='btn rounded-full w-[40px] h-[40px] p-[4px]' />
                        <a href={`tel://+0000000000`} className='text-white font-bold text-xl'>60011111111</a>
                    </span>
                    <span className='flex gap-[10px] items-center'>
                        <EmailIcon className='btn rounded-full w-[40px] h-[40px] p-[4px]' />
                        <a href={`mailto://example@gmail.com`} className='text-white font-bold text-xl'>example@gmail.com</a>
                    </span>
                    <span className='flex gap-[10px] items-center'>
                        <LocationOnIcon className='btn rounded-full w-[40px] h-[40px] p-[4px]' />
                        <a href={`tel://+0000000000`} className='text-white font-bold text-xl'>60011111111</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact;
