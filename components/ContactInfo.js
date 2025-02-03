import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function ContactInfo(){
    return(
        <div className='w-full flex flex-col gap-[40px]'>
<div className="flex  gap-[20px] w-full">
<a href='' className='text-[#D3D3D3]  flex gap-[20px] items-center '><GitHubIcon className=' text-[#8750f7]'/></a>
<a href='' className='text-[#D3D3D3]  flex gap-[20px] items-center '><LinkedInIcon className='text-[#8750f7]'/></a>
<a href='' className='text-[#D3D3D3]  flex gap-[20px] items-center '><InstagramIcon className=' text-[#8750f7]'/></a>
</div>
<button className='btn text-black font-bold bg-red-600 w-[140px] h-[35px] pl-2 pr-2 rounded-[5px]'>DOWNLOAD CV</button>
</div>
    )
}
export default ContactInfo