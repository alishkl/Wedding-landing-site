import {useMemo,CSSProperties} from 'react'
type Tone='pink'|'white'
// 5 градаций от освещённой к теневой стороне: [основание лепестка, середина, кончик]
const RAMP:Record<Tone,string[][]>={
 pink:[['#d86aa8','#f08fc0','#fcd6e8'],['#cc5599','#e87fb5','#f8bad6'],['#bd4389','#da6aa6','#f2a0c6'],['#a9377a','#c85594','#e285b3'],['#8c2a63','#a9437d','#c9689a']],
 white:[['#d3dbbd','#f5f4e8','#ffffff'],['#cdd2ba','#edecdf','#fbfbf5'],['#c3c5b1','#e1e0d2','#f2f1e7'],['#b3b2a2','#cfcdbf','#e5e2d5'],['#9e9c8f','#b9b6a9','#d1cdc0']]}
const PETAL='M0 0C-5-2-7.5-6.5-5-9.2C-3.2-11-.8-10.2 0-11.2C.8-10.2 3.2-11 5-9.2C7.5-6.5 5-2 0 0Z'
export default function Hydrangea({tone='pink',size=200,seed=1,leaves=true,style}:{tone?:Tone;size?:number;seed?:number;leaves?:boolean;style?:CSSProperties}){
 const pts=useMemo(()=>{let s=seed*9301+49297;const r=()=>(s=(s*16807)%2147483647)/2147483647
  return Array.from({length:120},(_,i)=>{const a=i*2.39996+r()*.25,rad=3.9*Math.sqrt(i)+(r()-.5)*2.4,x=50+rad*Math.cos(a),y=50+rad*Math.sin(a)
   const d=((x-50)*-.6+(y-50)*-.8)/45,k=Math.max(0,Math.min(4,Math.round((1-d)/2*4+(r()-.5)*1.4)))
   return{x,y,k,rot:r()*90,sc:.78+r()*.26,rad}}).sort((a,b)=>b.rad-a.rad)},[seed])
 const id=(k:number)=>`hg-${tone}-${k}`,ls=[[200,1.2],[150,1.05],[115,.95],[245,1]]
 return(<svg className="hyd" viewBox="-30 -30 160 160" width={size} height={size} style={style} aria-hidden="true"><defs>
  {RAMP[tone].map((c,k)=><radialGradient key={k} id={id(k)} gradientUnits="userSpaceOnUse" cx="0" cy="0" r="11"><stop offset="0" stopColor={c[0]}/><stop offset=".55" stopColor={c[1]}/><stop offset="1" stopColor={c[2]}/></radialGradient>)}
  <linearGradient id="hg-leaf" x1="0" y1="0" x2="0" y2="-1"><stop offset="0" stopColor="#2f6a3c"/><stop offset="1" stopColor="#7fb36d"/></linearGradient>
  {RAMP[tone].map((_,k)=><g id={`hf-${tone}-${k}`} key={k}>{[45,135,225,315].map(r=><g key={r} transform={`rotate(${r})`}><path d={PETAL} fill={`url(#${id(k)})`} stroke="rgba(70,0,45,.28)" strokeWidth=".25"/><path d="M0-1.5V-8.2M0-4C-1.6-5-2.6-5.4-3.4-6.2M0-4C1.6-5 2.6-5.4 3.4-6.2" stroke="rgba(255,255,255,.4)" strokeWidth=".3" fill="none"/></g>)}<circle r="1.1" fill="#f1dc8a" stroke="rgba(90,50,0,.4)" strokeWidth=".2"/></g>)}</defs>
  {leaves&&ls.map(([a,s],i)=><g key={i} transform={`translate(50 50) rotate(${a}) scale(${s})`}><path d="M0 0C-17-8-26-32-4-62C-2-64 2-64 4-62C26-32 17-8 0 0Z" fill="url(#hg-leaf)" stroke="#264f2f" strokeWidth=".6"/><path d="M0-4V-58M0-20L-9-30M0-20L9-30M0-34L-7-43M0-34L7-43" stroke="rgba(255,255,255,.35)" strokeWidth=".6" fill="none"/></g>)}
  {pts.map((p,i)=><use key={i} href={`#hf-${tone}-${p.k}`} transform={`translate(${p.x} ${p.y}) rotate(${p.rot}) scale(${p.sc})`}/>)}</svg>)}
