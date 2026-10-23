import {useState,FormEvent} from 'react'
import {config} from '../config'
type S='idle'|'sending'|'ok'|'no'|'error'|'off'
export default function Rsvp(){
 const [s,setS]=useState<S>('idle'),[err,setErr]=useState<Record<string,string>>({}),{formId,entries,options}=config.rsvp
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault()
  const f=new FormData(e.currentTarget),name=String(f.get('name')).trim(),att=String(f.get('att')||'')
  const er:Record<string,string>={};if(name.length<3)er.name='Аты-жөніңізді жазыңыз';if(!att)er.att='Жауапты таңдаңыз';setErr(er);if(Object.keys(er).length)return
  if(!formId){setS('off');return}
  setS('sending')
  try{await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`,{method:'POST',mode:'no-cors',body:new URLSearchParams({[entries.name]:name,[entries.attending]:att})});setS(att===options[2]?'no':'ok')}catch{setS('error')}}
 if(s==='ok'||s==='no')return(<div className="msg"><h3>{s==='ok'?'Рахмет!':'Хабарлағаныңызға рахмет'}</h3><p>{s==='ok'?'Жауабыңыз форма арқылы жіберілді. Сізді күтеміз!':'Өкінішті, бірақ жылы тілегіңіз үшін алғысымыз шексіз.'}</p><small>Google Forms сақталғанын браузерге растамайды — жауап кестеде көрінеді.</small></div>)
 return(<form onSubmit={submit} noValidate><p className="lead">ТОЙҒА ҚАТЫСУЫҢЫЗДЫ РАСТАУЫҢЫЗДЫ СҰРАЙМЫЗ:</p>
  <label>АТЫ-ЖӨНІҢІЗ (ЖҰБАЙЫҢЫЗБЕН КЕЛЕТІН БОЛСАҢЫЗ, ЕКІ ЕСІМДІ ДЕ КӨРСЕТІҢІЗ):<input name="name" autoComplete="name"/><em>{err.name}</em></label>
  <fieldset><legend>ТОЙҒА КЕЛЕСІЗ БЕ:</legend>{options.map(o=><label className="opt" key={o}><input type="radio" name="att" value={o}/> {o}</label>)}<em>{err.att}</em></fieldset>
  <button className="btn" disabled={s==='sending'}>{s==='sending'?'ЖІБЕРІЛУДЕ…':'ЖАУАПТЫ ЖІБЕРУ'}</button>
  {s==='off'&&<p className="note">Жіберу әлі бапталмаған (config.ts ішінде Google Form жоқ). Жауап сақталмады — байланысыңыз: {config.contacts.map(c=>c.join(' ')).join(', ')}.</p>}
  {s==='error'&&<p className="note">Жіберу мүмкін болмады. Кейінірек қайталап көріңіз.</p>}</form>)}
