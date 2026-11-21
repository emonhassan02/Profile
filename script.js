/* script.js: content.js theke data nie page banay. Eta edit korar dorkar nai. */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const f=s=>esc(s).replace(/([A-Za-z])(\d+)(?![\d.])/g,"$1<sub>$2</sub>");

document.title=PROFILE.pageTitle;
$("navName").textContent=PROFILE.navName;$("navSub").textContent=PROFILE.navSub;
$("photo").alt=PROFILE.name;$("photo").src=PROFILE.photo;
$("badges").innerHTML=PROFILE.badges.map(b=>`<span class="badge">${esc(b)}</span>`).join("");
$("name").textContent=PROFILE.name;$("role").textContent=PROFILE.role;$("loc").textContent=PROFILE.location;
$("links").innerHTML=LINKS.filter(l=>l[1]).map(l=>`<a href="${l[1]}"${l[1].startsWith("mailto")?"":' target="_blank" rel="noopener"'}>${esc(l[0])}</a>`).join("");
$("n-pub").textContent=PUBS.filter(p=>!p.s).length;$("n-talk").textContent=TALKS.length;
$("n-3").textContent=PROFILE.stat3Value;$("l-3").textContent=PROFILE.stat3Label;
$("cv").href=PROFILE.cv;
$("aboutText").innerHTML=ABOUT.map(p=>`<p>${p}</p>`).join("");
$("edu").innerHTML=EDUCATION.map(e=>`<li><div class="d">${esc(e.years)}</div><div class="b"><h3>${f(e.degree)}</h3><div class="o">${f(e.place)}</div><p>${f(e.text)}</p>${e.pills.map((p,i)=>`<span class="pill${i?"":" p"}">${esc(p)}</span>`).join("")}</div></li>`).join("");
$("jobs").innerHTML=EXPERIENCE.map((x,i)=>`<div class="job${i%2?" t":""}"><div class="h"><h3>${f(x.title)}</h3><span class="pill ${i?"p":"g"}">${esc(x.badge)}</span></div><div class="r"><span>${esc(x.when)}</span>${f(x.role)}</div><p>${f(x.text)}</p></div>`).join("");
$("ints").innerHTML=INTERESTS.map(i=>`<div><h3>${f(i[0])}</h3><p>${f(i[1])}</p></div>`).join("");
$("tk").innerHTML=TALKS.map(t=>`<li><div class="d">${esc(t[0])}</div><div class="b"><h3>${f(t[2])}</h3><p>${f(t[1])}</p></div></li>`).join("");
$("sk").innerHTML=Object.entries(SKILLS).map(([k,v])=>`<div><h3>${esc(k)}</h3><div>${v.map(s=>`<span>${esc(s)}</span>`).join("")}</div></div>`).join("");
$("cText").textContent=CONTACT_TEXT;$("cMail").textContent=PROFILE.email;$("cMail").href="mailto:"+PROFILE.email;
$("yr").textContent=new Date().getFullYear();$("fName").textContent=PROFILE.name;$("fText").textContent=FOOTER_TEXT;

/* ===== PUBLICATIONS: search, filter, show all ===== */
let filt="all",term="",all=false;const LIM=3;
function renderPubs(){
  const l=PUBS.filter(p=>(filt==="all"||(filt==="sub")===!!p.s)&&(p.t+p.j+p.y).toLowerCase().includes(term));
  const full=all||term||filt!=="all";const shown=full?l:l.slice(0,LIM);
  $("pubs").innerHTML=shown.map(p=>`<article class="pub"><div class="y">${p.y}</div><div><h3>${f(p.t)}</h3><div class="a">${esc(p.a).split(esc(PROFILE.authorName)).join("<b>"+esc(PROFILE.authorName)+"</b>")}</div><div class="m"><em>${esc(p.j)}</em>${p.s?'<span class="pill">Under review</span>':`<span class="pill g">IF ${p.i}</span><a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI</a><button data-doi="${p.doi}">Copy citation</button>`}</div></div></article>`).join("")||'<p class="empty">No publications match your search.</p>';
  $("more").hidden=full||l.length<=LIM;
}
renderPubs();
$("q").oninput=e=>{term=e.target.value.trim().toLowerCase();renderPubs()};
$("seg").onclick=e=>{const b=e.target.closest("button");if(!b)return;filt=b.dataset.f;[...$("seg").children].forEach(x=>x.classList.toggle("on",x===b));renderPubs()};
$("more").onclick=()=>{all=true;renderPubs()};
document.addEventListener("click",e=>{const d=e.target.dataset&&e.target.dataset.doi;if(!d)return;const p=PUBS.find(x=>x.doi===d);
  navigator.clipboard.writeText(`${p.a}. ${p.t}. ${p.j} (${p.y}). https://doi.org/${p.doi}`).then(()=>{e.target.textContent="Copied";setTimeout(()=>e.target.textContent="Copy citation",1600)})});

/* ===== THEME ===== */
const root=document.documentElement;let sv=null;try{sv=localStorage.getItem("theme")}catch(e){}
function setT(t){root.dataset.theme=t;$("theme").textContent=t==="dark"?"☀":"☾";try{localStorage.setItem("theme",t)}catch(e){}}
setT(sv||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));
$("theme").onclick=()=>setT(root.dataset.theme==="dark"?"light":"dark");

/* ===== SCROLL-SPY ===== */
const ls=[...document.querySelectorAll("#menu a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(l=>{const on=l.hash==="#"+e.target.id;l.classList.toggle("on",on);if(on)l.scrollIntoView({inline:"center",block:"nearest"})})}),{rootMargin:"-30% 0px -60% 0px"});
document.querySelectorAll("main section").forEach(s=>io.observe(s));

/* ===== PEROVSKITE LATTICE (decorative, profile card) ===== */
(function(){
  const c=$("lat"),x=c.getContext("2d"),N=2,P=[],B=[],o=1.5;
  for(let i=0;i<=N;i++)for(let j=0;j<=N;j++)for(let k=0;k<=N;k++)P.push([i-o+.5,j-o+.5,k-o+.5,0]);
  for(let i=0;i<N;i++)for(let j=0;j<N;j++)for(let k=0;k<N;k++){const q=[i-o+.5,j-o+.5,k-o+.5];P.push([q[0]+.5,q[1]+.5,q[2]+.5,1]);
    [[.5,.5,0],[.5,.5,1],[.5,0,.5],[.5,1,.5],[0,.5,.5],[1,.5,.5]].forEach(d=>P.push([q[0]+d[0],q[1]+d[1],q[2]+d[2],2]))}
  for(let a=0;a<P.length;a++)for(let b=a+1;b<P.length;b++){const p=P[a],q=P[b];if(p[3]+q[3]===3&&Math.hypot(p[0]-q[0],p[1]-q[1],p[2]-q[2])<.51)B.push([a,b])}
  let ry=.5,W,H;const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
  function sz(){const d=devicePixelRatio||1;W=c.clientWidth;H=c.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)}
  addEventListener("resize",sz);sz();
  function pr(p){const X=p[0]*Math.cos(ry)+p[2]*Math.sin(ry),Z=-p[0]*Math.sin(ry)+p[2]*Math.cos(ry),Y=p[1]*Math.cos(.5)-Z*Math.sin(.5),Z2=p[1]*Math.sin(.5)+Z*Math.cos(.5),s=Math.min(W,H)/2.6,k=1/(1+Z2*.1);return[W/2+X*s*k,H*.62+Y*s*k,Z2,k,s]}
  const col=["#9fb4ff","#f2b866","#5fd8c8"];
  function draw(){x.clearRect(0,0,W,H);const Q=P.map(pr);x.strokeStyle="rgba(180,200,255,.35)";
    B.forEach(([a,b])=>{x.beginPath();x.moveTo(Q[a][0],Q[a][1]);x.lineTo(Q[b][0],Q[b][1]);x.stroke()});
    Q.map((p,i)=>i).sort((a,b)=>Q[b][2]-Q[a][2]).forEach(i=>{const p=Q[i],t=P[i][3];x.fillStyle=col[t];x.beginPath();x.arc(p[0],p[1],[.1,.2,.13][t]*p[4]*p[3],0,7);x.fill()});
    if(!rm)ry+=.003;requestAnimationFrame(draw)}
  draw();
})();