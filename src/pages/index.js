import * as React from "react"
import bg from '../images/image-header-desktop.jpg'
import {statistics} from "../utils";
import Stat from "../components/stat";

export default function IndexPage() {
    return (
        <div className={'App'}>
         <div className={'wrapper'}>
             <div className={'main-container'}>
               <div className={'main-content'}>
                    <div className={'heading-and-paragraph'}>
                    <h1 className={'heading'}>Get <span className={'text-[#AA5CDB]'}>insights</span> that help your business grow.</h1>
                    <p className={'paragraph'}>Discover the benefits of data analytics and make better decisions regarding revenue,
                        customer experience and overall efficiency.</p>
                </div>
                    <div className={'stats-group '}>
                        {
                            statistics.map((item,index)=><Stat key={item.title} {...item} />)
                        }
                    </div>
                 </div>
             </div>
             <div className={'flex-1'}>
                 <div className={'image-bg '} style={{ backgroundImage:`url(${bg})`}}></div>
             </div>
         </div>
        </div>
    )
  }


export const Head = () => <title>Stats Preview</title>
