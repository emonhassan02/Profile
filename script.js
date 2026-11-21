/* script.js: content.js theke page banay + shob animation. Edit korar dorkar nai. */
const $=id=>document.getElementById(id),Q=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\'/g,"&#39;");
const f=s=>esc(s).replace(/(WIEN2[kK])|([A-Za-z])(\d+)(?![\da-z.])/g,(m,w,a,b)=>w||a+"<sub>"+b+"</sub>");
const au=s=>f(s).split(PROFILE.author).join("<b>"+PROFILE.author+"</b>");
const P=PROFILE,RM=matchMedia("(prefers-reduced-motion:reduce)").matches,CO=matchMedia("(pointer:coarse)").matches;
let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;

/* ===== HERO ===== */
const rt0=()=>{document.documentElement.style.setProperty("--orb",P.orbit||"#ff4d2e");$("photo").classList.toggle("cut",P.photoMode==="cutout")};
document.title=P.pageTitle;
$("kick").textContent=P.affil;$("uni").textContent=P.univ;
$("photo").alt=P.name;$("photo").src=P.photo;rt0();
$("photo").onerror=function(){if(!this.dataset.t&&/png$/i.test(P.photo)){this.dataset.t=1;this.src=P.photo.replace(/png$/i,"jpg");return}this.replaceWith(Object.assign(document.createElement("div"),{className:"ph",textContent:"EH"}))};
$("name").setAttribute("aria-label",P.name);
$("name").innerHTML=P.name.split(" ").map((w,wi,a)=>`<span class="w" aria-hidden="true">${[...w].map((c,i)=>`<span class="ch" style="--i:${a.slice(0,wi).join("").length+i}">${c}</span>`).join("")}</span> `).join("");
$("links").innerHTML=LINKS.filter(l=>l[2]).map(l=>`<a href="${l[2]}" target="_blank" rel="noopener">${esc(l[0])}</a>`).join("");
$("cv").href=P.cv;$("mail").textContent=P.email;$("mail").href="mailto:"+P.email;
const NP=PUBS.filter(p=>!p.s).length;
$("stats").innerHTML=[[NP,"Published Articles"],[PUBS.length-NP,"Manuscripts Submitted"],[TALKS.length,"Conferences & Seminars"],[P.cgpa,"M.S. CGPA (1st Semester)"]].map((s,i)=>`<div data-r style="--d:${i}"><b data-n="${s[0]}">0</b><span>${esc(s[1])}</span></div>`).join("");

/* typewriter */
(function(){const el=$("typ");let r=0,c=0,d=0;if(RM){el.textContent=P.roles[0];return}
  (function t(){const w=P.roles[r];c+=d?-1:1;el.textContent=w.slice(0,c);let ms=d?24:55;
    if(!d&&c===w.length){d=1;ms=1700}else if(d&&!c){d=0;r=(r+1)%P.roles.length;ms=350}setTimeout(t,ms)})()})();

/* ===== CONTENT ===== */
$("obj").innerHTML=f(P.objective);
$("edu").innerHTML=EDU.map(e=>`<li data-r><div class="d">${esc(e.d)}</div><div class="sp"><h3>${f(e.deg)}</h3><div class="o">${f(e.pl)}</div><div>${e.m.map(x=>`<span class="pill p">${f(x)}</span>`).join("")}</div><p><b>${esc(e.tl)}:</b> ${f(e.th)}</p>${e.v?`<a class="lnk" href="${e.v[1]}" target="_blank" rel="noopener">Verification: ${esc(e.v[0])} ↗</a>`:""}</div></li>`).join("");
$("tk").innerHTML=TALKS.map(t=>`<li data-r><div class="d">${esc(t.d)}</div><div class="sp"><span class="pill p" style="margin-top:0">${esc(t.k)}</span><h3 style="margin-top:8px">${f(t.e)}</h3><p><b>Presentation Title:</b> “${f(t.t)}”</p><p><b>Authors:</b> ${au(t.a)}</p><p><b>Organized by:</b> ${f(t.o)}</p></div></li>`).join("");
$("ints").innerHTML=INTERESTS.map((x,i)=>`<div class="sp tilt" data-r style="--d:${i%4}"><h3>${f(x)}</h3></div>`).join("");
$("res").innerHTML=RES.map(x=>`<div class="sp job" data-r><span class="pill p" style="margin-top:0">${esc(x.d)}</span><h3 style="margin-top:8px">${f(x.t)}</h3><p>${f(x.x)}</p><p class="adv"><b>Advisor:</b> ${f(x.a)}</p></div>`).join("");
$("work").innerHTML=WORK.map(x=>`<div class="sp job" data-r><span class="pill p" style="margin-top:0">${esc(x.d)}</span><h3 style="margin-top:8px">${f(x.t)}</h3><p>${f(x.x)}</p></div>`).join("");
$("sk").innerHTML=Object.entries(SKILLS).map(([k,v],i)=>`<div class="sp tilt" data-r style="--d:${i%3}"><h3>${esc(k)}</h3><div class="tags">${v.map((s,j)=>`<span style="--j:${j}">${f(s)}</span>`).join("")}</div></div>`).join("");
$("mem").innerHTML=MEMBER.map((m,i)=>`<div class="sp tilt" data-r style="--d:${i%3}"><small>${esc(m[0])}</small><h3>${f(m[1])}</h3></div>`).join("");
$("assoc").innerHTML=LINKS.slice(1).map((l,i)=>`<div class="sp tilt" data-r style="--d:${i}"><small>${esc(l[0])}</small>${l[2]?`<a href="${l[2]}" target="_blank" rel="noopener">${esc(l[1])}</a>`:`<span>${esc(l[1])}</span>`}</div>`).join("");
$("cert").innerHTML=`<div class="sp job" data-r><span class="pill p" style="margin-top:0">${esc(CERT.d)}</span><h3 style="margin-top:8px">${f(CERT.t)}</h3><p>${f(CERT.x)}</p></div>`;
$("refs").innerHTML=REFS.map((r,i)=>`<div class="sp tilt" data-r style="--d:${i}"><h3>${f(r.n)}</h3><div class="o">${f(r.r)}</div><p>${f(r.t)}</p><p class="adv">${SHOW_PRIVATE?`Phone: ${esc(r.ph)} | `:""}Email: <a href="mailto:${r.em}">${esc(r.em)}</a></p></div>`).join("");
$("addr").textContent=P.affil+", "+P.univ;
$("cMail").textContent=P.email;$("cMail").href="mailto:"+P.email;
$("priv").textContent=SHOW_PRIVATE?`Phone: ${P.phone} | Date of Birth: ${P.dob}`:"";
$("yr").textContent=new Date().getFullYear();$("fName").textContent=P.name;$("fText").textContent=FOOTER_TEXT;

/* ===== REVEAL + COUNTERS + HEADING SCRAMBLE ===== */
function count(el){const n=+el.dataset.n,dec=(el.dataset.n.split(".")[1]||"").length;if(RM){el.textContent=n.toFixed(dec);return}
  const t0=performance.now();(function s(t){const k=Math.min((t-t0)/1700,1),e=1-Math.pow(1-k,4);el.textContent=(n*e).toFixed(dec);if(k<1)requestAnimationFrame(s)})(t0)}
const scr=el=>{const t=el.dataset.t||(el.dataset.t=el.textContent);let n=0;
  const id=setInterval(()=>{el.textContent=[...t].map((c,i)=>i<n||c===" "?c:"ABCDEFGHJKLMNPQRSTUVWXYZ#%&"[Math.random()*28|0]).join("");if(n++>=t.length){el.textContent=t;clearInterval(id)}},26)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add("in");io.unobserve(t);
  Q("[data-n]",t).forEach(count);if(t.matches("h2")&&!RM)scr(t.querySelector(".sc"))}),{threshold:.12,rootMargin:"0px 0px -5% 0px"});
const reveal=()=>Q("[data-r]:not(.in)").forEach(x=>io.observe(x));

/* ===== PUBLICATIONS: search + copy citation ===== */
const pubH=p=>`<article class="sp pub" data-r><div class="y">${p.y}</div><div><h3>${f(p.t)}</h3><div class="a">${au(p.a)}</div><div class="m"><em>${f(p.j)}</em>${p.s?'<span class="pill">Submitted</span>':`<span class="pill g">Impact Factor: ${p.i} (2025)</span><a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI: ${p.doi}</a>`}<button data-c="${PUBS.indexOf(p)}">Copy citation</button></div></div></article>`;
function rp(){const q=$("q").value.trim().toLowerCase();
  [["pubs",0],["subm",1]].forEach(([id,s])=>{const l=PUBS.filter(p=>!!p.s===!!s&&(!q||(p.t+p.j+p.y+p.a).toLowerCase().includes(q)));$(id).innerHTML=l.map(pubH).join("")||'<p class="empty">No publications match your search.</p>'});reveal()}
$("q").oninput=rp;rp();reveal();
document.addEventListener("click",async e=>{const b=e.target.closest("[data-c]");if(!b)return;const p=PUBS[Number(b.dataset.c)];if(!p)return;
  const citation=`${p.a}. ${p.t}. ${p.j}.${p.doi?" DOI: "+p.doi+".":""}`;
  try{
    if(navigator.clipboard&&window.isSecureContext) await navigator.clipboard.writeText(citation);
    else {const ta=document.createElement("textarea");ta.value=citation;ta.style.position="fixed";ta.style.opacity="0";document.body.append(ta);ta.select();document.execCommand("copy");ta.remove();}
    b.textContent="Copied ✓";
  }catch(err){b.textContent="Copy unavailable";}
  setTimeout(()=>b.textContent="Copy citation",1800);
});

/* ===== THEME ===== */
const root=document.documentElement;let sv=null;try{sv=localStorage.getItem("theme")}catch(e){}
const setT=t=>{root.dataset.theme=t;$("theme").textContent=t==="dark"?"☀":"☾";
  const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=t==="dark"?"#070a17":"#f3f6fc";
  try{localStorage.setItem("theme",t)}catch(e){}};
const preferred=sv||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");
setT(preferred);$("theme").onclick=()=>setT(root.dataset.theme==="dark"?"light":"dark");

/* ===== SCROLL: progress bar + self-drawing timelines ===== */
const ts=Q(".tl");let tick=0;
const onScroll=()=>{tick=0;$("bar").style.transform=`scaleX(${scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)})`;
  ts.forEach(t=>{const r=t.getBoundingClientRect();t.style.setProperty("--p",Math.max(0,Math.min(1,(innerHeight*.7-r.top)/r.height)))})};
addEventListener("scroll",()=>{if(!tick)tick=requestAnimationFrame(onScroll)},{passive:true});onScroll();

/* ===== SCROLL-SPY ===== */
const ls=Q("#menu a");
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(l=>{const on=l.hash==="#"+e.target.id;l.classList.toggle("on",on);if(on)l.scrollIntoView({inline:"center",block:"nearest"})})}),{rootMargin:"-40% 0px -55% 0px"});
Q("main .s").forEach(s=>spy.observe(s));

/* ===== POINTER: spotlight, 3D tilt, magnetic buttons, cursor glow ===== */
addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY;const t=e.target.closest?.(".sp"),m=e.target.closest?.(".btn");
  if(t){const r=t.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
    t.style.setProperty("--mx",e.clientX-r.left+"px");t.style.setProperty("--my",e.clientY-r.top+"px");
    if(!RM&&t.classList.contains("tilt"))t.style.transform=`perspective(800px) rotateX(${-py*9}deg) rotateY(${px*11}deg)`}
  if(m&&!RM){const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`}});
document.addEventListener("pointerout",e=>{const t=e.target.closest?.(".tilt,.btn");if(t&&!t.contains(e.relatedTarget))t.style.transform=""});
if(!CO&&!RM){const cu=$("cur");(function L(){cx+=(mx-cx)*.12;cy+=(my-cy)*.12;cu.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(L)})()}

/* ===== ATOM ORBITS around the portrait: back half behind the photo, front half in front ===== */
(function(){
  const cs=[$("orb0")],cx=cs.map(c=>c.getContext("2d")),rt=document.documentElement;let W=0,H=0;
  const O=[[.47,72,-24,1.15,0],[.43,77,33,-.85,2.1],[.39,67,98,.95,4],[.34,82,-68,-1.35,5.2]]; /* radius, inclination, rotation, speed, phase */
  const sz=()=>{const d=devicePixelRatio||1;W=cs[0].clientWidth;H=cs[0].clientHeight;cs.forEach((c,i)=>{c.width=W*d;c.height=H*d;cx[i].setTransform(d,0,0,d,0,0)})};
  new ResizeObserver(sz).observe(cs[0]);
  const pt=(o,th,t)=>{const a=o[0]*W,inc=(o[1]+3*Math.sin(t*.4+o[4])+(my/innerHeight-.5)*8)*Math.PI/180,rz=(o[2]+5*Math.sin(t*.3+o[4])+(mx/innerWidth-.5)*10)*Math.PI/180,
    X0=a*Math.cos(th),Y0=a*Math.sin(th)*Math.cos(inc),Z=a*Math.sin(th)*Math.sin(inc);
    return[W/2+X0*Math.cos(rz)-Y0*Math.sin(rz),H*.52+X0*Math.sin(rz)+Y0*Math.cos(rz),Z]};
  const vis=cs[0].parentNode,LB=["VASP","WIEN2k","SCAPS-1D","BoltzTraP"],PA=Array.from({length:64},()=>[Math.random(),Math.random(),.015+Math.random()*.05,.6+Math.random()*1.8,Math.random()*6.28,.3+Math.random()*1.1]);let px=0,py=0;
  (function frame(now){requestAnimationFrame(frame);if(!W)return;const t=RM?3:now/1000,dark=rt.dataset.theme!=="light",col=P.orbit||"#ff4d2e";
    cx.forEach(c=>{c.clearRect(0,0,W,H);c.globalCompositeOperation=dark?"lighter":"source-over";c.lineCap="round";c.lineJoin="round"});
    px+=((mx/innerWidth-.5)*2-px)*.06;py+=((my/innerHeight-.5)*2-py)*.06;vis.style.setProperty("--px",px.toFixed(3));vis.style.setProperty("--py",py.toFixed(3));
    {const c=cx[0];
      for(let q=0;q<3;q++){const f=(t*.3+q/3)%1,r=f*W*.52;c.beginPath();c.ellipse(W/2,H*.52,r,r*.45,-.35,0,7);c.globalAlpha=Math.pow(1-f,2)*.4;c.strokeStyle=col;c.lineWidth=1.6;c.stroke()}
      PA.forEach(a=>{const y=((a[1]-t*a[2])%1+1)%1,X=a[0]+Math.sin(t*.5+a[4])*.02+px*.03*a[5],e=Math.min(1,Math.min(X,1-X,y,1-y)*6);
        c.globalAlpha=e*(.35+.65*Math.abs(Math.sin(t*1.3+a[4])));c.fillStyle=a[5]>.9?"#fff":col;c.beginPath();c.arc(X*W,y*H,a[3]*a[5],0,7);c.fill()})}
    O.forEach((o,k)=>{
      [[0,Math.PI,1],[Math.PI,2*Math.PI,0]].forEach(([a0,a1,fr])=>{const c=cx[0];c.beginPath();
        for(let i=0;i<=64;i++){const p=pt(o,a0+(a1-a0)*i/64,t);i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1])}
        c.shadowColor=col;c.shadowBlur=fr?18:10;c.strokeStyle=col;c.globalAlpha=fr?.55:.3;c.lineWidth=fr?3.6:2.4;c.stroke();
        c.shadowBlur=0;c.strokeStyle="#fff";c.globalAlpha=fr?.85:.4;c.lineWidth=fr?1.1:.8;c.stroke()});
      const th=o[4]+o[3]*t,sg=Math.sign(o[3]);
      for(let j=29;j>=0;j--){const a=th-sg*j*.05,p=pt(o,a,t),q=pt(o,a-sg*.05,t),fr=p[2]>0?1:0,c=cx[0],f=1-j/30;
        c.beginPath();c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);c.globalAlpha=Math.pow(f,1.6)*(fr?1:.55);c.lineWidth=1+f*5;c.strokeStyle=j<4?"#ffe9d6":col;c.shadowColor=col;c.shadowBlur=14;c.stroke()}
      const p=pt(o,th,t),c=cx[0],r=5.5*(1+p[2]/(o[0]*W)*.4),gr=c.createRadialGradient(p[0],p[1],0,p[0],p[1],r*4);
      gr.addColorStop(0,"#fff");gr.addColorStop(.25,"#ffe3c4");gr.addColorStop(.5,col);gr.addColorStop(1,"transparent");
      c.globalAlpha=1;c.shadowBlur=0;c.fillStyle=gr;c.beginPath();c.arc(p[0],p[1],r*4,0,7);c.fill();
      c.globalAlpha=p[2]>0?.95:.5;c.fillStyle="#fff";c.font="600 12px Hanken Grotesk,sans-serif";c.textAlign="left";c.fillText(LB[k],p[0]+r*2.2,p[1]-r*1.4)});
    cx.forEach(c=>{c.globalAlpha=1;c.shadowBlur=0})})(0);
})();

/* ===== PERIODIC TABLE ===== */
const SYM="H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og".split(" ");
const NAMES="Hydrogen Helium Lithium Beryllium Boron Carbon Nitrogen Oxygen Fluorine Neon Sodium Magnesium Aluminium Silicon Phosphorus Sulfur Chlorine Argon Potassium Calcium Scandium Titanium Vanadium Chromium Manganese Iron Cobalt Nickel Copper Zinc Gallium Germanium Arsenic Selenium Bromine Krypton Rubidium Strontium Yttrium Zirconium Niobium Molybdenum Technetium Ruthenium Rhodium Palladium Silver Cadmium Indium Tin Antimony Tellurium Iodine Xenon Caesium Barium Lanthanum Cerium Praseodymium Neodymium Promethium Samarium Europium Gadolinium Terbium Dysprosium Holmium Erbium Thulium Ytterbium Lutetium Hafnium Tantalum Tungsten Rhenium Osmium Iridium Platinum Gold Mercury Thallium Lead Bismuth Polonium Astatine Radon Francium Radium Actinium Thorium Protactinium Uranium Neptunium Plutonium Americium Curium Berkelium Californium Einsteinium Fermium Mendelevium Nobelium Lawrencium Rutherfordium Dubnium Seaborgium Bohrium Hassium Meitnerium Darmstadtium Roentgenium Copernicium Nihonium Flerovium Moscovium Livermorium Tennessine Oganesson".split(" ");
const MASS="1.008 4.0026 6.94 9.0122 10.81 12.011 14.007 15.999 18.998 20.180 22.990 24.305 26.982 28.085 30.974 32.06 35.45 39.95 39.098 40.078 44.956 47.867 50.942 51.996 54.938 55.845 58.933 58.693 63.546 65.38 69.723 72.630 74.922 78.971 79.904 83.798 85.468 87.62 88.906 91.224 92.906 95.95 98 101.07 102.91 106.42 107.87 112.41 114.82 118.71 121.76 127.60 126.90 131.29 132.91 137.33 138.91 140.12 140.91 144.24 145 150.36 151.96 157.25 158.93 162.50 164.93 167.26 168.93 173.05 174.97 178.49 180.95 183.84 186.21 190.23 192.22 195.08 196.97 200.59 204.38 207.2 208.98 209 210 222 223 226 227 232.04 231.04 238.03 237 244 243 247 247 251 252 257 258 259 266 267 268 269 270 277 278 281 282 285 286 289 290 293 294 294".split(" ");
const COL={alk:"#ff6b81",ae:"#ffa94d",tm:"#7f9bff",pt:"#4fd1c5",mtl:"#b197fc",nm:"#8ce99a",hal:"#ffd43b",ng:"#74c0fc",lan:"#f783ac",act:"#e599f7"};
const CN={alk:"Alkali metal",ae:"Alkaline earth metal",tm:"Transition metal",pt:"Post-transition metal",mtl:"Metalloid",nm:"Reactive nonmetal",hal:"Halogen",ng:"Noble gas",lan:"Lanthanide",act:"Actinide"};
const pos=z=>z===1?[1,1]:z===2?[1,18]:z<=4?[2,z-2]:z<=10?[2,z+8]:z<=12?[3,z-10]:z<=18?[3,z]:z<=36?[4,z-18]:z<=54?[5,z-36]:z<=56?[6,z-54]:z<=71?[9,z-54]:z<=86?[6,z-68]:z<=88?[7,z-86]:z<=103?[10,z-86]:[7,z-100];
const cat=z=>[3,11,19,37,55,87].includes(z)?"alk":[4,12,20,38,56,88].includes(z)?"ae":[2,10,18,36,54,86,118].includes(z)?"ng":[9,17,35,53,85,117].includes(z)?"hal":[5,14,32,33,51,52].includes(z)?"mtl":[1,6,7,8,15,16,34].includes(z)?"nm":z>=57&&z<=71?"lan":z>=89&&z<=103?"act":(z>=21&&z<=30)||(z>=39&&z<=48)||(z>=72&&z<=80)||(z>=104&&z<=112)?"tm":"pt";
const ELS=SYM.map((s,i)=>{const z=i+1,[r,c]=pos(z);return{z,s,n:NAMES[i],m:MASS[i],r,c,k:cat(z)}});
/* electron configuration: Madelung rule + known ground-state exceptions */
const SUB=[];for(let n=1;n<=7;n++)for(let l=0;l<=Math.min(3,n-1);l++)SUB.push([n,l]);
SUB.sort((a,b)=>a[0]+a[1]-b[0]-b[1]||a[0]-b[0]);
const EX={24:"3d5 4s1",29:"3d10 4s1",41:"4d4 5s1",42:"4d5 5s1",44:"4d7 5s1",45:"4d8 5s1",46:"4d10 5s0",47:"4d10 5s1",57:"4f0 5d1",58:"4f1 5d1",64:"4f7 5d1",78:"5d9 6s1",79:"5d10 6s1",89:"5f0 6d1",90:"5f0 6d2",91:"5f2 6d1",92:"5f3 6d1",93:"5f4 6d1",96:"5f7 6d1",103:"6d0 7p1"};
function cfg(z){const o={};let r=z;for(const[n,l]of SUB){const c=Math.min(r,2*(2*l+1));if(c>0)o[n+"spdf"[l]]=c;r-=c;if(r<=0)break}
  (EX[z]||"").split(" ").filter(Boolean).forEach(t=>o[t.slice(0,2)]=+t.slice(2));return o}
const shells=o=>{const s=[];for(const k in o){const n=+k[0]-1;s[n]=(s[n]||0)+o[k]}return s.filter(Boolean)};
function bohr(sh,col){let g=`<svg viewBox="0 0 300 300" aria-hidden="true"><defs><radialGradient id="ng"><stop offset="0" stop-color="${col}"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></radialGradient></defs><circle cx="150" cy="150" r="34" fill="url(#ng)"/><circle cx="150" cy="150" r="9" fill="${col}"/>`;
  sh.forEach((n,i)=>{const r=26+i*Math.min(36,116/Math.max(1,sh.length-1));g+=`<circle cx="150" cy="150" r="${r}" fill="none" stroke="currentColor" opacity=".2"/><g class="orb" style="animation-duration:${5+i*3.5}s;animation-direction:${i%2?"reverse":"normal"}">`;
    for(let k=0;k<n;k++){const a=2*Math.PI*k/n;g+=`<circle cx="${(150+r*Math.cos(a)).toFixed(1)}" cy="${(150+r*Math.sin(a)).toFixed(1)}" r="4" fill="${col}"/>`}g+="</g>"});return g+"</svg>"}
$("pt").innerHTML=ELS.map(e=>`<button class="el" data-z="${e.z}" style="--r:${e.r};--cl:${e.c};--c:${COL[e.k]};--k:${e.r+e.c}" aria-label="${e.n}"><i>${e.z}</i><b>${e.s}</b><small>${e.n}</small></button>`).join("")+'<div class="gap" style="--r:6;--cl:3">57–71</div><div class="gap" style="--r:7;--cl:3">89–103</div><aside class="det sp" id="det" aria-live="polite"></aside>';
$("leg").innerHTML=Object.keys(CN).map(k=>`<button data-k="${k}" style="--c:${COL[k]}">${CN[k]}</button>`).join("");
$("comp").innerHTML=COMPOUNDS.map((c,i)=>`<button class="fb" data-i="${i}">${f(c[0])}</button>`).join("");
function sel(z){const e=ELS[z-1],col=COL[e.k],o=cfg(z),en=Object.entries(o).filter(x=>x[1]>0).sort((a,b)=>a[0][0]-b[0][0]||"spdf".indexOf(a[0][1])-"spdf".indexOf(b[0][1])),
    used=COMPOUNDS.filter(c=>c[1].split(" ").includes(e.s)),f9=e.r>8,blk=e.z===2?"s":f9?"f":e.c<=2?"s":e.c>=13?"p":"d";
  Q(".el.sel").forEach(x=>x.classList.remove("sel"));Q(`.el[data-z="${z}"]`)[0].classList.add("sel");
  $("det").style.setProperty("--c",col);
  $("det").innerHTML=`<div class="bohr">${bohr(shells(o),col)}</div><div><h3><span style="color:${col}">${e.s}</span> ${e.n}</h3><span class="pill">No. ${z}</span><span class="pill">${e.m} u</span><span class="pill">${CN[e.k]}</span><span class="pill">${f9?"f-block":"Group "+e.c}, period ${f9?e.r-3:e.r}, ${blk}-block</span><p class="cfg">${en.map(([k,v])=>k+"<sup>"+v+"</sup>").join(" ")}</p>${used.length?`<p class="used">Studied in: ${used.map(c=>f(c[0])).join(", ")}</p>`:""}</div>`}
const ALL=[...new Set(COMPOUNDS.flatMap(c=>c[1].split(" ")))],st={k:null,q:"",mine:0,set:null};
function flt(){const hi=st.set||(st.mine?ALL:null),m=[];
  Q(".el").forEach(c=>{const e=ELS[c.dataset.z-1],ok=(!st.k||e.k===st.k)&&(!st.q||(e.s+e.n+e.z).toLowerCase().includes(st.q))&&(!hi||hi.includes(e.s));
    c.classList.toggle("dim",!ok);c.classList.toggle("mine",!!hi&&hi.includes(e.s));if(ok)m.push(e.z)});
  if(st.q&&m.length===1)sel(m[0])}
$("pt").addEventListener("click",e=>{const b=e.target.closest(".el");if(b)sel(+b.dataset.z)});
$("eq").oninput=e=>{st.q=e.target.value.trim().toLowerCase();flt()};
$("leg").onclick=e=>{const b=e.target.closest("[data-k]");if(!b)return;st.k=st.k===b.dataset.k?null:b.dataset.k;Q("#leg button").forEach(x=>x.classList.toggle("on",x.dataset.k===st.k));flt()};
$("mine").onclick=()=>{st.mine=st.mine?0:1;st.set=null;$("mine").classList.toggle("on",!!st.mine);Q("#comp .fb").forEach(b=>b.classList.remove("on"));flt()};
$("comp").onclick=e=>{const b=e.target.closest("[data-i]");if(!b)return;const s=COMPOUNDS[+b.dataset.i][1].split(" "),same=st.set&&st.set.join()===s.join();
  st.set=same?null:s;st.mine=0;$("mine").classList.remove("on");Q("#comp .fb").forEach(x=>x.classList.toggle("on",x===b&&!same));flt();if(!same)sel(ELS.find(x=>x.s===s[0]).z)};
/* dock-style lens: cells grow as the pointer gets close */
if(!RM&&!CO){const pt=$("pt");
  pt.addEventListener("pointermove",e=>Q(".el",pt).forEach(c=>{const r=c.getBoundingClientRect(),d=Math.hypot(e.clientX-r.left-r.width/2,e.clientY-r.top-r.height/2),s=1+Math.max(0,1-d/120)*.5;c.style.transform=s>1.01?`scale(${s})`:"";c.style.zIndex=s>1.25?2:""}));
  pt.addEventListener("pointerleave",()=>Q(".el",pt).forEach(c=>{c.style.transform="";c.style.zIndex=""}))}
sel(72);reveal();

/* ===== MARQUEE of compounds ===== */
$("mq").innerHTML=[0,1].map(()=>`<div>${COMPOUNDS.map(c=>`<span>${f(c[0].split(" (")[0])}</span>`).join("")}</div>`).join("");

/* ===== COMMAND PALETTE (Ctrl/Cmd+K) ===== */
const CMD=[...ls.map(a=>[a.textContent,()=>{location.hash=a.hash}]),["Download CV",()=>$("cv").click()],["Toggle theme",()=>$("theme").click()],["Send email",()=>{location.href="mailto:"+P.email}],...ELS.map(e=>[e.n+" ("+e.s+")",()=>{location.hash="#elements";sel(e.z)}])];
const pal=$("pal"),pi=$("pi");let pn=0,pv=[];
function pr2(){const q=pi.value.trim().toLowerCase();pv=CMD.filter(c=>c[0].toLowerCase().includes(q)).slice(0,8);pn=Math.min(pn,Math.max(0,pv.length-1));
  $("pl").innerHTML=pv.map((c,i)=>`<li class="${i===pn?"on":""}" data-i="${i}">${esc(c[0])}</li>`).join("")||'<li class="empty">No match</li>'}
const op=o=>{pal.hidden=!o;if(o){pi.value="";pn=0;pr2();pi.focus()}};
const run=i=>{const c=pv[i];if(c){op(false);c[1]()}};
addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();op(pal.hidden)}
  else if(!pal.hidden){if(e.key==="Escape")op(false);else if(e.key==="ArrowDown"){e.preventDefault();pn=Math.min(pv.length-1,pn+1);pr2()}else if(e.key==="ArrowUp"){e.preventDefault();pn=Math.max(0,pn-1);pr2()}else if(e.key==="Enter")run(pn)}});
pi.oninput=()=>{pn=0;pr2()};$("pl").onclick=e=>{const l=e.target.closest("li[data-i]");if(l)run(+l.dataset.i)};pal.onclick=e=>{if(e.target===pal)op(false)};$("kb").onclick=()=>op(true);

/* ===== HERO PARALLAX ===== */
{const vi=document.querySelector(".vis"),hl=document.querySelector(".hl");
 addEventListener("scroll",()=>{const y=Math.min(scrollY,900);vi.style.translate=`0 ${y*.14}px`;hl.style.translate=`0 ${-y*.05}px`},{passive:true})}

/* ===== COMPUTATIONAL LAB: live simulations of the codes ===== */
(function(){
const cv=$("sim"),x=cv.getContext("2d"),root=document.documentElement;
let W=0,H=0,k=0,T0=0,vis=false,auto=!RM,V={},C={},th="",pt={x:-9,y:-9},L,Tp,PW,PH;
const R=Array.from({length:70},()=>[Math.random()*2-1,Math.random()*2-1]);
const mk=(w,h)=>{const c=document.createElement("canvas");c.width=w;c.height=h;const q=c.getContext("2d");return[c,q,q.createImageData(w,h)]};
const [qc,qx,qi]=mk(72,54),[hc,hx2,hi]=mk(64,36);
const cl=(v,a,b)=>Math.max(a,Math.min(b,v)),ez=f=>1-Math.pow(1-f,3),g=(e,m,s)=>Math.exp(-(((e-m)/s)**2)),sg=v=>1/(1+Math.exp(-v));
const CM=[[8,6,32],[85,20,110],[190,55,85],[246,130,25],[252,238,140]];
const cmap=f=>{f=cl(f,0,.9999)*4;const i=f|0,u=f-i,a=CM[i],b=CM[i+1];return[a[0]+(b[0]-a[0])*u,a[1]+(b[1]-a[1])*u,a[2]+(b[2]-a[2])*u]};
const tx=(s,X,Y,c,sz,al)=>{x.fillStyle=c||C.m;x.font=`${sz||12}px Hanken Grotesk,sans-serif`;x.textAlign=al||"left";x.fillText(s,X,Y)};
const ln=(a,b,c,d,col,w,dash)=>{x.beginPath();x.moveTo(a,b);x.lineTo(c,d);x.strokeStyle=col;x.lineWidth=w||1;x.setLineDash(dash||[]);x.stroke();x.setLineDash([])};
const dot=(X,Y,r,c)=>{x.beginPath();x.arc(X,Y,r,0,7);x.fillStyle=c;x.fill()};
const ax=(xl,yl)=>{x.strokeStyle=C.l;x.lineWidth=1;x.setLineDash([]);x.strokeRect(L,Tp,PW,PH);tx(xl,L+PW/2,Tp+PH+34,C.m,12,"center");x.save();x.translate(L-36,Tp+PH/2);x.rotate(-Math.PI/2);tx(yl,0,0,C.m,12,"center");x.restore()};
const path=(f,a,b,n,mx,my,up,col)=>{x.beginPath();const m=Math.max(1,Math.floor(n*up));for(let i=0;i<=m;i++){const u=a+(b-a)*i/n,X=mx(u),Y=my(f(u));i?x.lineTo(X,Y):x.moveTo(X,Y)}x.strokeStyle=col;x.lineWidth=2.4;x.setLineDash([]);x.stroke()};
const ip=E=>{const a=[.8,1.1,1.34,1.5,1.8,2,2.3],b=[52,44,33,29,18,12,6];let i=0;while(i<5&&E>a[i+1])i++;return b[i]+(b[i+1]-b[i])*(cl(E,a[0],a[6])-a[i])/(a[i+1]-a[i])};

/* 1 VASP: ionic relaxation */
function vasp(t){const A=V.d/100,s=cl((t%10)/7.5,0,1),kk=1-ez(s),n=6,m=4,sx=W*.07,sy=H*.17,gx=W*.29-sx*2.5,gy=H*.2,P=[];
  for(let i=0;i<n;i++)for(let j=0;j<m;j++){const r=R[i*m+j];P.push([gx+i*sx+r[0]*sx*1.1*A*kk,gy+j*sy+r[1]*sy*1.1*A*kk])}
  for(let i=0;i<n;i++)for(let j=0;j<m;j++){const p=P[i*m+j];if(i<n-1){const q=P[(i+1)*m+j];ln(p[0],p[1],q[0],q[1],C.l,1.6)}if(j<m-1){const q=P[i*m+j+1];ln(p[0],p[1],q[0],q[1],C.l,1.6)}}
  P.forEach((p,q)=>dot(p[0],p[1],W*.017,((((q/m)|0)+q%m)%2)?C.a:C.p));
  tx("Atoms relax toward their equilibrium sites",W*.29,H*.9,C.m,13,"center");
  const N=30,Em=A*2.6+.001,E=u=>A*2.2*Math.exp(-u/6)*(1+.12*Math.sin(u*2.1)),mx=u=>L+PW*u/N,my=e=>Tp+PH*(1-e/Em);
  ax("Ionic step","Energy (eV)");path(E,0,N,N,mx,my,s,C.t);dot(mx(s*N),my(E(s*N)),5,C.a);
  tx(s>=1?"Converged: forces below 0.01 eV/Å":`Max force: ${(A*3*kk*kk).toFixed(3)} eV/Å`,L,Tp+PH+54,s>=1?C.t:C.m,13)}

/* 2 WIEN2k: muffin-tin + DOS */
function wien(t){const cx=W*.05,cy=H*.18,cw=W*.43,ch=H*.52,mid=cy+ch/2;
  x.strokeStyle=C.l;x.lineWidth=1.5;x.strokeRect(cx,cy,cw,ch);
  [[.25,C.t],[.75,C.a]].forEach(([u,c])=>{x.beginPath();x.arc(cx+cw*u,mid,ch*.3,0,7);x.fillStyle=c+"33";x.fill();x.strokeStyle=c;x.setLineDash([5,4]);x.lineWidth=1.5;x.stroke();x.setLineDash([]);dot(cx+cw*u,mid,6,c)});
  x.beginPath();for(let i=0;i<=260;i++){const u=i/260,d=Math.min(Math.abs(u-.25),Math.abs(u-.75)),gg=g(d,0,.1),y=mid+ch*.26*Math.sin(u*22-t*3)*(1-gg*.55)+gg*ch*.1*Math.sin(u*90-t*6);i?x.lineTo(cx+cw*u,y):x.moveTo(cx+cw*u,y)}
  x.strokeStyle=C.p;x.lineWidth=2;x.stroke();
  tx("Dashed circles: muffin-tin spheres with atomic-like waves",cx,cy+ch+22,C.m,12);tx("Between spheres: plane waves",cx,cy+ch+40,C.m,12);
  const up=cl(t/2.2,0,1),Eg=V.g,E0=-6,E1=Math.max(8,Eg+7),mx=e=>L+PW*(e-E0)/(E1-E0),my=d=>Tp+PH*(1-d/1.25),
    D=e=>(g(e,-1.4,.8)+.8*g(e,-3.6,.9)+.6*g(e,-5.3,.6))*sg(-e/.12)+(g(e,Eg+1.2,.7)+.7*g(e,Eg+3.4,.9)+.5*g(e,Eg+5.2,.8))*sg((e-Eg)/.12);
  ax("Energy (eV)","DOS (states/eV)");
  [[E0,0,C.t],[Eg,E1,C.a]].forEach(([a,b,c])=>{x.beginPath();x.moveTo(mx(a),my(0));for(let i=0;i<=120;i++){const e=a+(b-a)*i/120*up;x.lineTo(mx(e),my(D(e)))}x.lineTo(mx(a+(b-a)*up),my(0));x.fillStyle=c+"55";x.fill()});
  path(D,E0,E1,240,mx,my,up,C.p);ln(mx(0),Tp,mx(0),Tp+PH,C.m,1,[4,4]);tx("E_F",mx(0)+5,Tp+14,C.m,12);
  tx(`Band gap Eg = ${Eg.toFixed(1)} eV`,L,Tp+PH+54,C.p,13)}

/* 3 Quantum ESPRESSO: SCF charge density */
function qe(t){const b=V.b,kap=.2+b*.7,n=cl((t%12)/9,0,1)*16,res=Math.exp(-kap*n),sl=Math.cos(n*.9),d=qi.data,hx=W*.05,hy=H*.12,hw=W*.46,hh=hw*.75;
  for(let j=0;j<54;j++)for(let i=0;i<72;i++){const u=i/72,v=j/54,pc=(1+Math.cos(u*Math.PI*8))/2*(1+Math.cos(v*Math.PI*6))/2,rc=Math.pow(pc,2)*.85+.11*Math.sqrt(pc),r0=.32+.2*Math.sin(u*11+v*8),c=cmap((rc+(r0-rc)*res*sl)*1.05),o=(j*72+i)*4;d[o]=c[0];d[o+1]=c[1];d[o+2]=c[2];d[o+3]=255}
  qx.putImageData(qi,0,0);x.imageSmoothingEnabled=true;x.drawImage(qc,hx,hy,hw,hh);x.strokeStyle=C.l;x.strokeRect(hx,hy,hw,hh);
  tx("Electron density ρ(r)",hx+hw/2,hy+hh+22,C.m,13,"center");
  const lg=u=>-.869*kap*u,my=v=>Tp+PH*(-v)/8,mx=u=>L+PW*u/16,cur=lg(n);
  ax("SCF iteration","log10 ΔE (Ry)");ln(L,my(-6),L+PW,my(-6),C.m,1,[4,4]);tx("convergence threshold",L+PW-4,my(-6)-6,C.m,11,"right");
  path(u=>Math.max(lg(u),-8),0,16,32,mx,my,n/16,C.t);dot(mx(n),my(Math.max(cur,-8)),5,C.a);
  tx(cur<=-6?`Iteration ${Math.floor(n)}: SCF converged`:`Iteration ${Math.floor(n)}: ΔE = 1e${cur.toFixed(1)} Ry`,L,Tp+PH+54,cur<=-6?C.t:C.m,13)}

/* 4 CASTEP: optical absorption */
function cas(t){const Eg=V.g,e=.3+7.4*((t%12)/12),al=E=>E<Eg?0:(Math.sqrt(E-Eg)*.8+g(E,Eg+2.3,.7)+.6*g(E,Eg+4.6,.9))*(1-Math.exp(-(E-Eg)*8)),
    hue=E=>{const l=1240/E;return l>=380&&l<=700?`hsl(${270*(700-l)/320},90%,58%)`:C.m},mx=E=>L+PW*E/8,my=a=>Tp+PH*(1-a/2.6),a0=al(e),
    cx=W*.05,cw=W*.43,mid=H*.42,u0=.46,dc=a0*5;
  x.fillStyle=C.a+"22";x.fillRect(cx+cw*u0,H*.2,cw*(1-u0),H*.44);x.strokeStyle=C.a;x.lineWidth=1.2;x.strokeRect(cx+cw*u0,H*.2,cw*(1-u0),H*.44);tx("Semiconductor",cx+cw*(u0+(1-u0)/2),H*.2-8,C.a,12,"center");
  x.beginPath();for(let i=0;i<=420;i++){const u=i/420,am=H*.12*(u<u0?1:Math.exp(-dc*(u-u0)/(1-u0))),y=mid+am*Math.sin(e*u*cw*.05-t*7);i?x.lineTo(cx+cw*u,y):x.moveTo(cx+cw*u,y)}x.strokeStyle=hue(e);x.lineWidth=2.4;x.stroke();
  tx(`Photon ${e.toFixed(2)} eV, λ = ${Math.round(1240/e)} nm`,cx,H*.78,hue(e),13);tx(e<Eg?"Below the gap: passes through":"Above the gap: absorbed",cx,H*.78+20,C.m,13);
  ax("Photon energy (eV)","Absorption α (arb. units)");
  x.beginPath();x.moveTo(mx(0),my(0));for(let i=0;i<=200;i++){const E=8*i/200;x.lineTo(mx(E),my(al(E)))}x.lineTo(mx(8),my(0));x.fillStyle=C.a+"44";x.fill();path(al,0,8,200,mx,my,1,C.a);
  for(let i=0;i<48;i++){x.fillStyle=`hsl(${270*i/48},90%,58%)`;x.fillRect(mx(1.6+1.6*i/48),Tp+PH+4,mx(1.6+1.6/48)-mx(1.6)+1,8)}
  tx("visible",mx(2.4),Tp+PH-8,C.m,11,"center");ln(mx(e),Tp,mx(e),Tp+PH,hue(e),1.5);dot(mx(e),my(al(e)),5,hue(e));
  tx(`Band gap Eg = ${Eg.toFixed(1)} eV`,L,Tp+PH+54,C.a,13)}

/* 5 SCAPS-1D: layered solar cell + J-V */
function scaps(t){const Eg=V.g,Rs=V.r,jsc=ip(Eg),voc=Eg-.4,vt=.0388,j0=jsc/(Math.exp(voc/vt)-1),pts=[];let pm=0,mp=[0,0];
  for(let i=0;i<=90;i++){const J=jsc*.9995*i/90,Vv=vt*Math.log((jsc-J)/j0+1)-J*Rs/1000;if(Vv<0)break;pts.push([Vv,J]);if(Vv*J>pm){pm=Vv*J;mp=[Vv,J]}}
  const x0=W*.05,y0=H*.22,cw=W*.43,ch=H*.42,F=[.08,.14,.46,.2,.12],NM=["TCO","ETL","Absorber","HTL","Back"],K=[C.m,C.t,C.a,C.p,C.m],xs=[];let u=0;
  F.forEach((f,i)=>{const X=x0+cw*u;x.fillStyle=K[i]+(i%4?"66":"33");x.fillRect(X,y0,cw*f,ch);x.strokeStyle=K[i];x.lineWidth=1;x.strokeRect(X,y0,cw*f,ch);tx(NM[i],X+cw*f/2,y0+ch+18,C.m,i%4?12:11,"center");xs.push(X);u+=f});
  for(let i=0;i<12;i++){const p=(t*.45+i/12)%1,X=x0-W*.03+p*(cw*.6+W*.03),Y=y0+ch*(.08+.84*((i*.618)%1));ln(X-10,Y-3,X,Y,"#ffd43b",1.5);dot(X,Y,3.2,"#ffd43b")}
  for(let i=0;i<20;i++){const p=(t*.3+i/20)%1,xa=xs[2]+cw*.46*(.2+.6*Math.abs(R[i][0])),Y=y0+ch*(.12+.76*Math.abs(R[i+20][1]));
    dot(xa+(xs[1]+cw*.07-xa)*p,Y,3,"#74c0fc");dot(xa+(xs[3]+cw*.1-xa)*p,Y,3,"#ff6b81")}
  tx("Light →",x0,y0-12,"#ffd43b",12);tx("electrons go to the ETL, holes to the HTL",x0,y0+ch+42,C.m,12);
  const mx=v=>L+PW*v/2.1,my=j=>Tp+PH*(1-j/56);ax("Voltage (V)","Current density (mA/cm²)");
  x.fillStyle=C.t+"33";x.fillRect(L,my(mp[1]),mx(mp[0])-L,Tp+PH-my(mp[1]));
  x.beginPath();pts.forEach((p,i)=>i?x.lineTo(mx(p[0]),my(p[1])):x.moveTo(mx(p[0]),my(p[1])));x.strokeStyle=C.p;x.lineWidth=2.4;x.stroke();
  dot(mx(mp[0]),my(mp[1]),5+1.8*Math.sin(t*4),C.a);tx("MPP",mx(mp[0])+8,my(mp[1])-8,C.a,12);
  const vo=pts.length?pts[0][0]:0;tx(`Voc ${vo.toFixed(2)} V    Jsc ${jsc.toFixed(1)} mA/cm²`,L,Tp+PH+54,C.m,13);tx(`FF ${(pm/(vo*jsc)*100).toFixed(1)} %    PCE ${pm.toFixed(1)} %`,L,Tp+PH+74,C.t,13)}

/* 6 COMSOL: finite-element style heat conduction */
const GW=64,GH=36;let Tm=new Float32Array(GW*GH),Tn=new Float32Array(GW*GH);
const heat0=()=>{for(let j=0;j<GH;j++)for(let i=0;i<GW;i++)Tm[j*GW+i]=1.1*Math.exp(-(((i-20)/5)**2+((j-18)/5)**2))+.8*Math.exp(-(((i-44)/4)**2+((j-12)/4)**2))};
function comsol(t){const D=V.D,q=V.q,hx=W*.04,hy=H*.1,hw=W*.72,hh=hw*GH/GW;
  if(pt.x>hx&&pt.x<hx+hw&&pt.y>hy&&pt.y<hy+hh){const ci=(pt.x-hx)/hw*GW,cj=(pt.y-hy)/hh*GH;for(let j=Math.max(1,(cj-4)|0);j<Math.min(GH-1,cj+5);j++)for(let i=Math.max(1,(ci-4)|0);i<Math.min(GW-1,ci+5);i++)Tm[j*GW+i]+=.25*Math.exp(-(((i-ci)/2)**2+((j-cj)/2)**2))}
  for(let s=0;s<3;s++){for(const p of[18*GW+20,12*GW+44]){Tm[p]+=.12*q;Tm[p+1]+=.12*q;Tm[p+GW]+=.12*q;Tm[p+GW+1]+=.12*q}for(let j=1;j<GH-1;j++)for(let i=1;i<GW-1;i++){const p=j*GW+i;Tn[p]=Tm[p]+D*(Tm[p-1]+Tm[p+1]+Tm[p-GW]+Tm[p+GW]-4*Tm[p])}const sw=Tm;Tm=Tn;Tn=sw}
  let mT=0;const d=hi.data;for(let p=0;p<GW*GH;p++){const v=Tm[p];if(v>mT)mT=v;const c=cmap(v/1.2),o=p*4;d[o]=c[0];d[o+1]=c[1];d[o+2]=c[2];d[o+3]=255}
  hx2.putImageData(hi,0,0);x.imageSmoothingEnabled=true;x.drawImage(hc,hx,hy,hw,hh);
  x.beginPath();for(let i=0;i<=GW;i+=4){x.moveTo(hx+hw*i/GW,hy);x.lineTo(hx+hw*i/GW,hy+hh)}for(let j=0;j<=GH;j+=4){x.moveTo(hx,hy+hh*j/GH);x.lineTo(hx+hw,hy+hh*j/GH)}
  for(let j=0;j<GH;j+=4)for(let i=0;i<GW;i+=4){x.moveTo(hx+hw*i/GW,hy+hh*j/GH);x.lineTo(hx+hw*(i+4)/GW,hy+hh*(j+4)/GH)}
  x.strokeStyle="rgba(255,255,255,.14)";x.lineWidth=1;x.stroke();
  for(let i=0;i<40;i++){x.fillStyle=`rgb(${cmap(1-i/40).map(Math.round)})`;x.fillRect(W*.8,hy+hh*i/40,W*.035,hh/40+1)}
  tx("500 K",W*.84,hy+10,C.m,11);tx("293 K",W*.84,hy+hh,C.m,11);tx("T",W*.8,hy-6,C.m,12);
  tx(`Peak temperature ${Math.round(293+Math.min(mT,1.2)/1.2*207)} K`,hx,hy+hh+22,C.p,13);tx("Move the cursor over the plate to heat it. Edges are held cold.",hx,hy+hh+42,C.m,12)}

/* 7 Phonopy: phonon branches of a diatomic chain */
function phon(t){const mu=V.m,q=V.q*Math.PI,S=1+1/mu,wf=qq=>{const d=Math.sqrt(Math.max(0,S*S-4*Math.sin(qq/2)**2/mu));return[Math.sqrt(Math.max(0,S-d)),Math.sqrt(S+d)]},[wa,wo]=wf(q),wm=Math.sqrt(2*S),
    sp=W*.03,r1=W*.011,r2=r1*Math.cbrt(mu),x0=W*.29-8*sp;
  const chain=(yc,w,name,c)=>{let A=2*Math.cos(q/2),B=2-w*w;const nm=Math.max(Math.abs(A),Math.abs(B))||1;A/=nm;B/=nm;tx(name,W*.29,yc-H*.1,c,13,"center");
    const P=[];for(let n=0;n<8;n++){P.push([x0+2*n*sp+sp*.38*A*Math.cos(q*n-w*t*2.2),r1,C.p]);P.push([x0+(2*n+1)*sp+sp*.38*B*Math.cos(q*(n+.5)-w*t*2.2),r2,C.a])}
    for(let i=0;i<15;i++)ln(P[i][0],yc,P[i+1][0],yc,C.l,2);P.forEach(p=>dot(p[0],yc,p[1],p[2]))};
  chain(H*.32,wa,"Acoustic mode: neighbours move together",C.t);chain(H*.64,wo,"Optical mode: neighbours move against each other",C.a);
  const mx=u=>L+PW*u/Math.PI,my=w=>Tp+PH*(1-w/(wm*1.08));ax("Wave vector, Γ to X","Frequency ω (arb. units)");tx("Γ",L,Tp+PH+16,C.m,12,"center");tx("X",L+PW,Tp+PH+16,C.m,12,"center");
  path(u=>wf(u)[0],0,Math.PI,90,mx,my,1,C.t);path(u=>wf(u)[1],0,Math.PI,90,mx,my,1,C.a);ln(mx(q),Tp,mx(q),Tp+PH,C.m,1,[4,4]);dot(mx(q),my(wa),5,C.t);dot(mx(q),my(wo),5,C.a);
  const[ga,go]=wf(Math.PI);tx(mu>1.05?`Gap at X: ${(go-ga).toFixed(2)}`:"Equal masses: the gap closes at X",L,Tp+PH+54,C.m,13)}

/* 8 BoltzTraP: Seebeck and power factor */
function boltz(t){const Eg=V.g,kt=8.617e-5*V.T,m0=-.3,m1=Eg+.3,mu=m0+(m1-m0)*(.5-.5*Math.cos(t*.5)),
    sn=z=>z>=0?-86.17*(z+2):-172.34/(1-z*.6),spp=z=>z>=0?86.17*(z+2):172.34/(1-z*.6),cn=z=>z>=0?Math.exp(-z):1+Math.pow(-z,1.5),
    F=m=>{const a=(Eg-m)/kt,b=m/kt,nn=cn(a),pp=cn(b),S=(sn(a)*nn+spp(b)*pp)/(nn+pp);return[S,S*S*(nn+pp)]};
  let pm=0;for(let i=0;i<=140;i++)pm=Math.max(pm,F(m0+(m1-m0)*i/140)[1]);
  const mx=m=>L+PW*(m-m0)/(m1-m0),mS=s=>Tp+PH*(.5-cl(s,-600,600)/1200),mP=p=>Tp+PH*(1-.9*p/pm),[S,P]=F(mu);
  const bx=W*.05,by=H*.3,bw=W*.43,bh=H*.2,gr=x.createLinearGradient(bx,0,bx+bw,0);gr.addColorStop(0,"#ff6b81");gr.addColorStop(1,"#74c0fc");
  x.globalAlpha=.4;x.fillStyle=gr;x.fillRect(bx,by,bw,bh);x.globalAlpha=1;x.strokeStyle=C.l;x.lineWidth=1.2;x.strokeRect(bx,by,bw,bh);
  tx("Hot side",bx,by-10,"#ff6b81",13);tx("Cold side",bx+bw,by-10,"#74c0fc",13,"right");
  for(let i=0;i<36;i++){const p=(t*.22+i/36)%1;dot(bx+bw*p,by+bh*(.1+.8*Math.abs(R[i][1])),3.2,S<0?"#74c0fc":"#ff6b81")}
  tx(S<0?"−":"+",bx+bw+14,by+bh/2+6,C.i,20,"center");tx(S<0?"+":"−",bx-14,by+bh/2+6,C.i,20,"center");
  tx(`Dominant carriers: ${S<0?"electrons (S < 0)":"holes (S > 0)"}`,bx,by+bh+28,C.m,13);tx(`Voltage for ΔT = 100 K: ${(Math.abs(S)*.1).toFixed(1)} mV`,bx,by+bh+48,C.p,13);
  ax("Chemical potential μ (eV)","Seebeck S (µV/K)");x.fillStyle=C.m+"22";x.fillRect(mx(0),Tp,mx(Eg)-mx(0),PH);tx("VBM",mx(0)-4,Tp+14,C.m,11,"right");tx("CBM",mx(Eg)+4,Tp+14,C.m,11);
  ln(L,mS(0),L+PW,mS(0),C.m,1,[3,4]);path(m=>F(m)[0],m0,m1,140,mx,mS,1,C.t);path(m=>F(m)[1],m0,m1,140,mx,mP,1,C.a);
  ln(mx(mu),Tp,mx(mu),Tp+PH,C.i,1,[4,3]);dot(mx(mu),mS(S),5,C.t);dot(mx(mu),mP(P),5,C.a);
  tx("Seebeck S",L,Tp+PH+54,C.t,13);tx("Power factor (normalised)",L+PW*.3,Tp+PH+54,C.a,13)}

const TL=[
 {n:"VASP",s:"Plane-wave DFT",f:vasp,c:[["d","Initial distortion","%",0,60,35,1]],d:"Plane-wave DFT with PAW potentials. Atoms move until the forces vanish, which gives the relaxed structure. In my work, DFT with VASP and WIEN2k gives the bandgap, electron/hole effective masses, electron affinity and dielectric constant.",
  i:'<circle cx="6" cy="7" r="2.4"/><circle cx="18" cy="8" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M8.4 7.4l7.2.4M7 9l4 7M17 10l-4 6"/>'},
 {n:"WIEN2k",s:"All-electron FP-LAPW",f:wien,c:[["g","Band gap"," eV",.2,3,1.4,.1]],d:"All-electron FP-LAPW method: atomic-like waves inside muffin-tin spheres and plane waves in between. The density of states shows the band gap. In my work, WIEN2k drives the first-principles study of the XCaBi (X = K, Rb, Cs) Zintl compounds.",
  i:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>'},
 {n:"Quantum ESPRESSO",s:"Plane waves, pseudopotentials",f:qe,c:[["b","Mixing β","",.1,.9,.5,.05]],d:"Plane waves with pseudopotentials. The self-consistent cycle mixes the charge density until the energy stops changing. Change the mixing parameter β to see how fast it converges.",
  i:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'},
 {n:"CASTEP",s:"Optical properties",f:cas,c:[["g","Band gap"," eV",.5,4,1.8,.1]],d:"Plane-wave DFT, widely used for optical properties. Absorption switches on when the photon energy passes the band gap, and the photon is absorbed inside the material.",
  i:'<path d="M2 12c1.5-6 3-6 4.5 0s3 6 4.5 0 3-6 4.5 0"/><path d="M17 12h5m-2-2l2 2-2 2"/>'},
 {n:"SCAPS-1D",s:"Solar-cell device",f:scaps,c:[["g","Absorber gap"," eV",.9,2.2,1.4,.05],["r","Series resistance"," Ω·cm²",0,6,1,.1]],d:"One-dimensional solar-cell simulator. In my work I test different ETL and HTL layers on an absorber and look for the stack with the highest efficiency.",
  i:'<circle cx="6" cy="6" r="2.5"/><path d="M6 1.5V.5M1.5 6H.5"/><rect x="10" y="10" width="12" height="11" rx="1.5"/><path d="M14 10v11M18 10v11"/>'},
 {n:"COMSOL Multiphysics",s:"Finite elements",f:comsol,i0:heat0,c:[["D","Thermal diffusivity","",.05,.24,.16,.01],["q","Heat sources","",0,1,.6,.05]],d:"Finite-element multiphysics on a meshed geometry. Here heat spreads across a plate whose edges are held cold. COMSOL appears next to SCAPS-1D in the NaSiCl3 perovskite solar-cell paper.",
  i:'<path d="M3 20L12 4l9 16z"/><path d="M7.5 12h9M12 4v16M7.5 12L12 20M16.5 12L12 20"/>'},
 {n:"Phonopy",s:"Lattice dynamics",f:phon,c:[["q","Wave vector q","π/a",.05,.98,.4,.01],["m","Mass ratio m2/m1","",1,4,2,.1]],d:"Lattice dynamics from DFT forces. Atoms in a crystal vibrate in acoustic and optical modes, and imaginary frequencies would signal a dynamical instability. A two-atom chain shows both branches.",
  i:'<circle cx="4" cy="12" r="2.2"/><circle cx="20" cy="12" r="2.2"/><path d="M6.2 12l2-4 3 8 3-8 2 4"/>'},
 {n:"BoltzTraP",s:"Thermoelectric transport",f:boltz,c:[["T","Temperature"," K",100,900,300,10],["g","Band gap"," eV",.2,1.5,.6,.05]],d:"Boltzmann transport theory on top of a DFT band structure gives the Seebeck coefficient, conductivity and power factor against chemical potential. A simple semiconductor model shows the typical shapes.",
  i:'<path d="M10 4a2 2 0 014 0v9.5a4 4 0 11-4 0z"/><path d="M12 9v7"/>'}];

$("tabs").innerHTML=TL.map((o,i)=>`<button data-i="${i}" role="tab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${o.i}</svg><span>${o.n}<small>${o.s}</small></span></button>`).join("");
function pick(i,user){k=i;T0=performance.now();if(user)auto=false;Q("#tabs button").forEach((b,j)=>b.classList.toggle("on",j===i));
  const o=TL[i];$("stn").textContent=o.n;$("sts").textContent=o.s;$("std").textContent=o.d;V={};
  $("ctl").innerHTML=o.c.map(c=>{V[c[0]]=c[5];return`<label>${c[1]} <input type="range" data-id="${c[0]}" min="${c[3]}" max="${c[4]}" step="${c[6]}" value="${c[5]}" aria-label="${c[1]}"><b id="v-${c[0]}">${c[5]}${c[2]}</b></label>`}).join("");
  if(o.i0)o.i0()}
$("ctl").oninput=e=>{const id=e.target.dataset.id;if(!id)return;V[id]=+e.target.value;$("v-"+id).textContent=e.target.value+TL[k].c.find(c=>c[0]===id)[2];auto=false};
$("tabs").onclick=e=>{const b=e.target.closest("button");if(b)pick(+b.dataset.i,1)};
cv.addEventListener("pointermove",e=>{const r=cv.getBoundingClientRect();pt.x=(e.clientX-r.left)/r.width*W;pt.y=(e.clientY-r.top)/r.height*H});
cv.addEventListener("pointerleave",()=>{pt.x=-9});
const sz=()=>{const d=devicePixelRatio||1;W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;x.setTransform(d,0,0,d,0,0)};
new ResizeObserver(sz).observe(cv);new IntersectionObserver(es=>{vis=es[0].isIntersecting}).observe(cv);
const col=()=>{const q=getComputedStyle(root),v=n=>q.getPropertyValue(n).trim();C={p:v("--pri"),t:v("--teal"),a:v("--amb"),i:v("--ink"),m:v("--mute"),l:v("--line")};th=root.dataset.theme};
pick(1);
(function loop(now){requestAnimationFrame(loop);if(!vis||!W||document.hidden||RM)return;if(th!==root.dataset.theme||!C.p)col();
  x.clearRect(0,0,W,H);L=W*.58;Tp=H*.1;PW=W*.37;PH=H*.66;const t=RM?5:(now-T0)/1000;TL[k].f(t);
  if(auto&&t>11)pick((k+1)%TL.length,0)})(0);
})();

/* ===== ACCESSIBILITY + BACK TO TOP ===== */
(function(){
  const b=$("backTop");
  if(!b)return;
  let pending=false;
  const update=()=>{pending=false;b.classList.toggle("show",window.scrollY>520)};
  addEventListener("scroll",()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});
  update();
  b.addEventListener("click",()=>window.scrollTo({top:0,behavior:RM?"auto":"smooth"}));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("pal").hidden){$("pal").hidden=true}});
})();
