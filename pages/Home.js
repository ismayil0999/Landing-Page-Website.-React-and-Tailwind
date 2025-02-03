import Contact from "@/components/Contact"
import Counter from "@/components/Counter"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Portfolio from "@/components/Portfolio"
import Reviews from "@/components/Reviews"
import Services from "@/components/Services"
import Skills from "@/components/Skills"

function HomePage(){
    return(
        <div className="icon  min-h-[100vh] w-full rounded-[10px] flex flex-col gap-[40px]">
<Counter/>
<Services/>
<Portfolio/>
<Skills/>
<div className="grid grid-cols-2 max-[683px]:grid-cols-1 max-[683px]:gap-[50px] pb-[40px]">
    <Experience/>
    <Education/>
</div>
<Reviews/>
<Contact/>
        </div>
    )
}
export default HomePage