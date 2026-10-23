// Рваный край полосы (clip-path), детерминированный по seed
export function torn(seed:number){let s=seed;const r=()=>(s=(s*16807)%2147483647)/2147483647,n=44,a:string[]=[],b:string[]=[]
 for(let i=0;i<=n;i++)a.push(`${(i/n*100).toFixed(1)}% ${(r()*2).toFixed(2)}%`)
 for(let i=n;i>=0;i--)b.push(`${(i/n*100).toFixed(1)}% ${(100-r()*2).toFixed(2)}%`)
 return `polygon(${a.join(',')},${b.join(',')})`}
