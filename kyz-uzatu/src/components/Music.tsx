import {useEffect,useRef,useState} from 'react'
import {config} from '../config'
export default function Music(){
 const a=useRef<HTMLAudioElement>(null),t=useRef(0),[on,setOn]=useState(false),[msg,setMsg]=useState('')
 const ramp=(to:number,done?:()=>void)=>{clearInterval(t.current);t.current=window.setInterval(()=>{const au=a.current!;au.volume=Math.min(1,Math.max(0,au.volume+(to>au.volume?.05:-.05)));if(Math.abs(au.volume-to)<.06){au.volume=to;clearInterval(t.current);done?.()}},60)}
 const play=async(auto=false)=>{const au=a.current!;try{au.volume=0;await au.play();ramp(.7);setOn(true)}catch{setOn(false);if(auto)return;const r=await fetch(config.music,{method:'HEAD'}).catch(()=>null),ok=!!r&&r.ok&&/audio|mpeg|ogg|wav|octet/.test(r.headers.get('content-type')||'');setMsg(ok?'Файл найден, но браузер не смог его воспроизвести (формат или файл повреждён). Конвертируйте в обычный MP3.':'Файл не найден по адресу '+config.music+' — проверьте папку public/music и имя файла')}}
 const stop=()=>{ramp(0,()=>a.current?.pause());setOn(false)}

 // Автозапуск: сразу пробуем сыграть; если браузер запретил — стартуем на первое касание/клик/клавишу гостя (кроме нажатия на саму кнопку музыки)
 useEffect(()=>{let done=false;const evs=['pointerup','touchend','keydown','click'] as const
  const off=()=>evs.forEach(x=>removeEventListener(x,go))
  function go(e:Event){if(done)return;if((e.target as HTMLElement|null)?.closest?.('.mus'))return;done=true;off();if(a.current?.paused)play(true)}
  evs.forEach(x=>addEventListener(x,go));play(true).then(()=>{if(a.current&&!a.current.paused){done=true;off()}})
  return off},[])
 useEffect(()=>{if(msg){const x=setTimeout(()=>setMsg(''),8000);return()=>clearTimeout(x)}},[msg])
 return(<><audio ref={a} src={config.music} loop preload="none"/>
  <button className={'mus'+(on?' on':'')} aria-pressed={on} aria-label={on?'Музыканы өшіру':'Музыканы қосу'} onClick={()=>on?stop():play()}>
   <svg viewBox="0 0 100 100"><defs><path id="ring" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0"/></defs><text className="ring"><textPath href="#ring">{on?'музыка · ойнап тұр · музыка · ойнап тұр · ':'музыканы · қосу · музыканы · қосу · '}</textPath></text></svg>
   <span className="ic">{on?<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>:<svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7z"/></svg>}</span></button>
  {msg&&<div className="toast" role="status">{msg}</div>}</>)}
