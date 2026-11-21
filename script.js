/* script.js: content.js theke page banay + shob animation. Edit korar dorkar nai. */
const $=id=>document.getElementById(id),Q=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const f=s=>esc(s).replace(/(WIEN2[kK])|([A-Za-z])(\d+)(?![\da-z.])/g,(m,w,a,b)=>w||a+"<sub>"+b+"</sub>");
const au=s=>f(s).split(PROFILE.author).join("<b>"+PROFILE.author+"</b>");
const P=PROFILE,RM=matchMedia("(prefers-reduced-motion:reduce)").matches,CO=matchMedia("(pointer:coarse)").matches;
let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;

/* ===== HERO ===== */
document.title=P.pageTitle;
$("kick").textContent=P.affil;$("uni").textContent=P.univ;
$("photo").alt=P.name;$("photo").src=P.photo;
$("photo").onerror=function(){this.replaceWith(Object.assign(document.createElement("div"),{className:"ph",textContent:"EH"}))};
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
document.addEventListener("click",e=>{const b=e.target.closest("[data-c]");if(!b)return;const p=PUBS[b.dataset.c];
  navigator.clipboard.writeText(`${p.a}. ${p.t}. ${p.j}.${p.doi?" DOI: "+p.doi+".":""}`).then(()=>{b.textContent="Copied ✓";setTimeout(()=>b.textContent="Copy citation",1600)})});

/* ===== THEME ===== */
const root=document.documentElement;let sv=null;try{sv=localStorage.getItem("theme")}catch(e){}
const setT=t=>{root.dataset.theme=t;$("theme").textContent=t==="dark"?"☀":"☾";try{localStorage.setItem("theme",t)}catch(e){}};
setT(sv||"dark");$("theme").onclick=()=>setT(root.dataset.theme==="dark"?"light":"dark");

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

/* ===== 3D PEROVSKITE LATTICE (hero): rotates, follows the mouse ===== */
(function(){const c=$("lat"),x=c.getContext("2d"),V=[],B=[],N=2,o=1.5,C=["#9fb4ff","#f2b866","#5fd8c8"];
  for(let i=0;i<=N;i++)for(let j=0;j<=N;j++)for(let k=0;k<=N;k++)V.push([i-o+.5,j-o+.5,k-o+.5,0]);
  for(let i=0;i<N;i++)for(let j=0;j<N;j++)for(let k=0;k<N;k++){const q=[i-o+.5,j-o+.5,k-o+.5];V.push([q[0]+.5,q[1]+.5,q[2]+.5,1]);
    [[.5,.5,0],[.5,.5,1],[.5,0,.5],[.5,1,.5],[0,.5,.5],[1,.5,.5]].forEach(d=>V.push([q[0]+d[0],q[1]+d[1],q[2]+d[2],2]))}
  for(let a=0;a<V.length;a++)for(let b=a+1;b<V.length;b++){const p=V[a],q=V[b];if(p[3]+q[3]===3&&Math.hypot(p[0]-q[0],p[1]-q[1],p[2]-q[2])<.51)B.push([a,b])}
  let ry=.5,rx=.5,W,H;
  const sz=()=>{const d=devicePixelRatio||1;W=c.clientWidth;H=c.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)};addEventListener("resize",sz);sz();
  const pr=p=>{const X=p[0]*Math.cos(ry)+p[2]*Math.sin(ry),Z=-p[0]*Math.sin(ry)+p[2]*Math.cos(ry),Y=p[1]*Math.cos(rx)-Z*Math.sin(rx),Z2=p[1]*Math.sin(rx)+Z*Math.cos(rx),s=Math.min(W,H)/3.2,k=1/(1+Z2*.12);return[W/2+X*s*k,H/2+Y*s*k,Z2,k,s]};
  (function draw(){x.clearRect(0,0,W,H);const A=V.map(pr);x.strokeStyle="rgba(150,175,255,.4)";x.lineWidth=1;x.shadowBlur=0;
    B.forEach(([a,b])=>{x.beginPath();x.moveTo(A[a][0],A[a][1]);x.lineTo(A[b][0],A[b][1]);x.stroke()});
    A.map((p,i)=>i).sort((a,b)=>A[b][2]-A[a][2]).forEach(i=>{const p=A[i],t=V[i][3];x.fillStyle=x.shadowColor=C[t];x.shadowBlur=10;x.beginPath();x.arc(p[0],p[1],[.1,.2,.13][t]*p[4]*p[3],0,7);x.fill()});
    rx+=((.45+(my/innerHeight-.5)*.5)-rx)*.04;if(!RM)ry+=.004+(mx/innerWidth-.5)*.012;requestAnimationFrame(draw)})();
})();
