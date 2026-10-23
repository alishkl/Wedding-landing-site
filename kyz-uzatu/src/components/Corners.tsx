// Розовый казахский орнамент (қошқар мүйіз) по четырём углам секции
export function OrnamentDefs(){return(<svg width="0" height="0" style={{position:'absolute'}} aria-hidden="true"><defs><symbol id="kz-corner" viewBox="0 0 120 120"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
 <path d="M6 112V44Q6 6 44 6H112" strokeWidth="1.5"/><path d="M16 100V46Q16 16 46 16H100" strokeWidth=".8" opacity=".7"/>
 <path d="M30 30C30 17 43 11 53 17C61 22 57 33 49 31C43 30 43 23 48 23" strokeWidth="1.6"/><path d="M30 30C17 30 11 43 17 53C22 61 33 57 31 49C30 43 23 43 23 48" strokeWidth="1.6"/>
 <path d="M52 17C60 12 71 13 77 20M17 52C12 60 13 71 20 77" strokeWidth="1.1"/><path d="M62 24C68 20 76 22 80 28M24 62C20 68 22 76 28 82" strokeWidth=".9" opacity=".8"/>
 <path d="M30 23L37 30L30 37L23 30Z" fill="currentColor" fillOpacity=".35" strokeWidth="1.1"/>
 <path d="M6 118L10 112L6 106L2 112ZM112 6L118 10L112 14L106 10Z" fill="currentColor" strokeWidth=".8"/>
 <circle cx="64" cy="11" r="1.6" fill="currentColor"/><circle cx="82" cy="11" r="1.6" fill="currentColor"/><circle cx="11" cy="64" r="1.6" fill="currentColor"/><circle cx="11" cy="82" r="1.6" fill="currentColor"/>
 <path d="M44 44L50 50M44 50L50 44" strokeWidth=".9"/></g></symbol></defs></svg>)}
export default function Corners(){return(<>{['tl','tr','bl','br'].map(p=><svg key={p} className={'corner '+p} viewBox="0 0 120 120" aria-hidden="true"><use href="#kz-corner"/></svg>)}</>)}
