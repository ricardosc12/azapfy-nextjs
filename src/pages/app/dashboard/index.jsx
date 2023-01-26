import Chart from "@/components/molecules/Chart"
import Widget from "@/components/molecules/Widget"
import { useEffect } from "react"

export default function Dash({charts,widgets}){

    return (
        <div>
            <Widget widgets={widgets}/>
            <div style={{display:'flex', width:'300px',margin:'auto',justifyContent:'center',alignItems:'center'}}>
                {charts?.map((chart,id)=>{
                    return <Chart key={id} {...chart}/>
                })}
            </div>
         </div>
    )

}

export async function getServerSideProps(context) {

    const res = await fetch('http://localhost:3000/api/dashboard',{
        method:'POST'
    })
    const data = await res.json()
    
    return {
        props: data
    }
  }


Dash.nav=true