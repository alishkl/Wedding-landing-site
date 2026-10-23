import {config} from '../config'
export default function Calendar(){
 const [y,m,d]=new Intl.DateTimeFormat('en-CA',{timeZone:config.timeZone}).format(new Date(config.eventISO)).split('-').map(Number)
 const first=(new Date(Date.UTC(y,m-1,1)).getUTCDay()+6)%7,days=new Date(Date.UTC(y,m,0)).getUTCDate()
 const cells=[...Array(first).fill(0),...Array.from({length:days},(_,i)=>i+1)]
 return(<div className="cal" role="img" aria-label={`${d}.${m}.${y}`}><div className="dow">{['ДС','СС','СР','БС','ЖМ','СБ','ЖС'].map(x=><span key={x}>{x}</span>)}</div>
  <div className="days">{cells.map((n,i)=><span key={i} className={n===d?'me':''}>{n||''}{n===d&&<svg viewBox="0 0 24 24"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.7A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg>}</span>)}</div></div>)}
