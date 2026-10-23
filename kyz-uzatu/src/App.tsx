import {useEffect,useState,ReactNode} from 'react'
import {config,dateNum,timeStart} from './config'
import Countdown from './components/Countdown'
import Music from './components/Music'
import Rsvp from './components/Rsvp'
import Calendar from './components/Calendar'
// Все экраны одного размера (100svh); content задаёт область текста поверх фона
const Seam=()=><div className="seam" aria-hidden="true"><div className="strip">{Array.from({length:24},(_,i)=><img key={i} src={config.photos.flowers} alt="" style={{transform:`${i%2?'scaleX(-1) ':''}rotate(${[-8,6,-4,9][i%4]}deg)`}}/>)}</div></div>
const Pg=({bg,top,h,cls='',children}:{bg:string;top:string;h:string;cls?:string;children:ReactNode})=>(
 <section className={'pg '+cls} style={{backgroundImage:`url(${bg})`}}><div className="fr rv" style={{top,height:h}}>{children}</div></section>)
export default function App(){
 const [sy,setSy]=useState(0),[up,setUp]=useState(false),P=config.photos,q=encodeURIComponent(`${config.city.toLowerCase()} ${config.address} ${config.venue}`.replace(/[«»]/g,'')),ll=config.lat!=null&&config.lng!=null,gis=config.link2gis||(ll?`https://2gis.kz/search/${q}?m=${config.lng}%2C${config.lat}%2F17`:`https://2gis.kz/search/${q}`),gm=config.linkGoogle||(ll?`https://www.google.com/maps/search/?api=1&query=${config.lat},${config.lng}`:`https://www.google.com/maps/search/?api=1&query=${q}`)
 useEffect(()=>{const on=()=>{setSy(scrollY);setUp(scrollY>600)};addEventListener('scroll',on,{passive:true});return()=>removeEventListener('scroll',on)},[])
 useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add('in'),io.unobserve(e.target))),{threshold:.1});document.querySelectorAll('.rv').forEach(e=>io.observe(e));return()=>io.disconnect()},[])
 return(<div className="page"><Music/>
  <header className="pg hero"><div className="herobg" style={{backgroundImage:`url(${P.hero})`,transform:`translateY(${sy*.12}px) scale(1.08)`}}/>
   <div className="heroin"><h1 className="script name">{config.bride}</h1><p className="qyz">QYZ UZATU</p><p className="hdate">{dateNum}</p></div></header><Seam/>
  <Pg bg={P.bg1} top="44%" h="46%"><h2 className="script">Құрметті</h2><p className="caps">{config.guestsLine}</p></Pg><Seam/>
  <Pg bg={P.bg2} top="36%" h="58%"><p className="caps">{config.invite[0]}</p><h3 className="script big">{config.brideGen}</h3><p className="caps">{config.invite[2]}</p>
   <p className="caps mini">Той басталуына қалды</p><Countdown/></Pg><Seam/>
  <Pg bg={P.bg3} top="42%" h="54%"><h2 className="script">Той салтанаты:</h2><p className="caps">{dateNum} ЖЫЛ</p><Calendar/><h2 className="script sm">Басталу уақыты:</h2><p className="caps">{timeStart}-ДЕ</p></Pg><Seam/>
  <Pg bg={P.bg5} top="10%" h="44%"><h2 className="script">Мекен - жайымыз:</h2><p className="caps">{config.city}<br/>{config.address}</p><p className="caps venue">{config.venue}</p>
   <div className="maps"><a href={gis} target="_blank" rel="noopener"><i className="pin g"/>КАРТАНЫ АШУ · 2GIS</a>
   <a href={gm} target="_blank" rel="noopener"><i className="pin"/>GOOGLE MAPS</a></div></Pg><Seam/>
  <Pg bg={P.bg6} top="57%" h="38%" cls="sm"><h2 className="script">Той бағдарламасы:</h2>{config.schedule.map(([t,h])=><div className="step" key={t}><span>— {t} —</span><p className="caps">{h}</p></div>)}</Pg><Seam/>
  <Pg bg={P.bg4} top="10%" h="44%"><h2 className="script">Той иелері:</h2><p className="caps hn">{config.hosts}</p><p className="caps">{config.closing}</p></Pg><Seam/>
  <Pg bg={P.bg4} top="7%" h="58%"><h2 className="script">Сауалнама:</h2><Rsvp/></Pg>
  {up&&<button className="up" aria-label="Жоғары" onClick={()=>scrollTo({top:0,behavior:'smooth'})}>↑</button>}</div>)}
