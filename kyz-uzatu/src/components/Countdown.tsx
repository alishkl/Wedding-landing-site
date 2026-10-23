import {useEffect,useState} from 'react'
import {config} from '../config'
const L=['күн','сағат','минут','секунд']
export default function Countdown(){
 const [now,setNow]=useState(Date.now())
 useEffect(()=>{const t=setInterval(()=>setNow(Date.now()),1000);return()=>clearInterval(t)},[])
 const d=new Date(config.eventISO).getTime()-now
 if(d<=0)return <p className="today">Бүгін — біздің ерекше күніміз!<small>Сегодня наш особенный день!</small></p>
 const v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60]
 return <div className="cd">{v.map((x,i)=><div key={i}><b key={x}>{String(x).padStart(2,'0')}</b><span>{L[i]}</span></div>)}</div>}
