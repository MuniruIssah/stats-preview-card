import * as React from "react"
import bg from '../images/image-header-desktop.jpg'
import {statistics} from "../utils";
import Stat from "../components/stat";

export default function IndexPage() {
    return (
        <div className={'App'}>
         <div className={'w-full max-w-6xl flex flex-col-reverse md:flex-row min-h-[55vh] rounded-lg overflow-hidden shadow-lg'}>
             <div className={'text-white bg-[#1B1938] flex-1 py-10 px-5 lg:p-0'}>
               <div className={'max-w-sm mx-auto flex flex-col space-y-6 md:space-y-16 justify-center items-center md:items-stretch  h-full'}>
                    <div className={'text-center md:text-left flex flex-col space-y-6'}>
                    <h1 className={'text-2xl md:text-4xl font-bold'}>Get <span className={'text-[#AA5CDB]'}>insights</span> that help your business grow.</h1>
                    <p className={'text-white/75 text-sm md:text-md'}>Discover the benefits of data analytics and make better decisions regarding revenue,
                        customer experience and overall efficiency</p>
                </div>
                    <div className={'max-w-xs flex flex-col space-y-6  justify-between md:flex-row md:space-y-0 '}>
                        {
                            statistics.map((item,index)=><Stat key={item.title} {...item} />)
                        }
                    </div>
                 </div>
             </div>
             <div className={'flex-1 min-h-[25vh]'}>
                 <div className={'image-bg bg-[#AA5CDB] bg-blend-multiply flex-1 w-full h-full min-h-[25vh]'} style={{ backgroundImage:`url(${bg})`}}>

                 </div>

             </div>
         </div>
        </div>
    )
  }


export const Head = () => <title>Stats Preview</title>
