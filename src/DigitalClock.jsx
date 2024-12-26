import { useEffect, useState } from "react"

export default function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date);
        },1000);
    })

    function hour(){
        let hour = time.getHours();
        hour = hour % 12 || 12;
        return`${padZero(hour)}`
    }

    function minutes(){
        const minutes = time.getMinutes();
        return`${padZero(minutes)}`
    }

    function seconds(){
        const seconds = time.getSeconds();
        return`${padZero(seconds)}`
    }

    function padZero(number){
        return(number<10 ? "0" : "") + number;
    }
    return(
        <div className="bg-gray-900 h-screen flex justify-center items-center">
            <div className="h-1/4 text-center">
            <div><h1 className="text-4xl text-white mb-3" style={{ fontFamily: 'DSEG' }}><b>Time Right Now</b></h1></div>
            <div className="text-white text-center flex">
            <span className="text-6xl mr-2 bg-white text-black rounded-lg w-24" style={{ fontFamily: 'DSEG' }}>{hour()}<p className="text-xl">HRS</p></span>
            <span className="text-6xl mr-2" style={{ fontFamily: 'DSEG' }}>:</span>
            <span className="text-6xl mr-2 bg-white text-black rounded-lg w-24" style={{ fontFamily: 'DSEG' }}>{minutes()}<p className="text-xl">MINS</p></span>
            <span className="text-6xl mr-2" style={{ fontFamily: 'DSEG' }}>:</span>
            <span className="text-6xl bg-white text-black rounded-lg w-24" style={{ fontFamily: 'DSEG' }}>{seconds()}<p className="text-xl">SECS</p></span>
            </div>
            </div>
        </div>
    );
}