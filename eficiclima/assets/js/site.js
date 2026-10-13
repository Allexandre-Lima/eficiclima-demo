(function(){
"use strict";
var C=window.EFICI||{},$=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var st=null;try{st=localStorage.getItem("efi-motion")}catch(e){}
var rm=st?st==="off":matchMedia("(prefers-reduced-motion:reduce)").matches,root=document.documentElement,inner=document.body.classList.contains("inner");
if(rm)root.classList.add("rm");
var mt=$("#mt");if(mt){mt.textContent="Animações: "+(rm?"desligadas":"ligadas");mt.onclick=function(){try{localStorage.setItem("efi-motion",rm?"on":"off")}catch(e){}location.reload()}}
var ICO='<svg class="i" aria-hidden="true"><use href="#wa"/></svg>';
$$("[data-wa]").forEach(function(a){a.href="https://wa.me/"+C.telefone+"?text="+encodeURIComponent(a.dataset.wa);a.target="_blank";a.rel="noopener";a.addEventListener("click",function(){window.dataLayer&&window.dataLayer.push({event:"whatsapp_click",pagina:location.pathname,mensagem:a.dataset.wa})})});
$$("header .btn[data-wa],#qb,.ct .btn[data-wa],.pc .btn[data-wa]").forEach(function(b){b.insertAdjacentHTML("afterbegin",ICO)});
var mb=$(".mb"),nv=$("nav"),hd0=$("header");
if(mb){mb.onclick=function(){var o=nv.classList.toggle("open");hd0.classList.toggle("mopen",o);mb.setAttribute("aria-expanded",o);mb.textContent=o?"Fechar":"Menu";document.body.style.overflow=o?"hidden":""};$$("nav a").forEach(function(a){a.addEventListener("click",function(){if(nv.classList.contains("open"))mb.click()})})}
/* painel rápido do hero */
var qp=$("#qp");
if(qp&&C.painel){var q=function(k){var d=C.painel[k];qp.textContent=d.preco;$("#qd").textContent=d.texto;var b=$("#qb");b.dataset.wa=d.msg;b.href="https://wa.me/"+C.telefone+"?text="+encodeURIComponent(d.msg);$$(".tabs button").forEach(function(x){x.setAttribute("aria-selected",x.dataset.k==k)})};$$(".tabs button").forEach(function(b){b.onclick=function(){q(b.dataset.k)}});q(0)}
/* verão / inverno */
var S={v:["Frio quando aperta o calor.","O portátil resfria o ambiente e funciona em 110V. Fácil de usar e de levar de um cômodo para outro.","Ideal para residências, escritórios, consultórios e muito mais.","Frio"],i:["Calor sem gastar à toa.","Os modelos quente e frio usam bomba de calor: transferem calor em vez de gerá-lo por resistência elétrica. Em condições adequadas, pode ser bem mais eficiente que aquecedores elétricos convencionais.","No modo aquecimento o aparelho pode funcionar com o tampão, sem dreno. Quando a bandeja encher, ele emite um alarme: é só escoar e voltar a usar.","Calor"]};
$$(".sw button").forEach(function(b){b.onclick=function(){var d=S[b.dataset.s];$("#estacoes").dataset.s=b.dataset.s;$("#st").textContent=d[0];$("#sp").textContent=d[1];$("#sn").textContent=d[2];$("#sg").textContent=d[3];$$(".sw button").forEach(function(x){x.setAttribute("aria-pressed",x===b)})}});
/* vídeos */
var hv=$("#hv"),pp=$("#pp"),v2=$("#v2");
if(hv){if(rm)hv.pause();pp.textContent=rm?"Reproduzir vídeo":"Pausar vídeo";pp.onclick=function(){if(hv.paused){hv.play();pp.textContent="Pausar vídeo"}else{hv.pause();pp.textContent="Reproduzir vídeo"}}}
if(v2&&!rm)new IntersectionObserver(function(e){e.forEach(function(x){x.isIntersecting?v2.play().catch(function(){}):v2.pause()})},{threshold:.3}).observe(v2);
/* entradas */
$$("[data-st]").forEach(function(c){Array.prototype.forEach.call(c.children,function(e,i){e.classList.add("rv");e.style.transitionDelay=i*110+"ms"})});
$$("h2.d,.lead,.fq>div,.ct h2,.ct p,.ct .acts,.sea .sw,#sp,#sn,.pm section,.pm .pc").forEach(function(e){e.classList.add("rv")});
var ro=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");ro.unobserve(x.target)}})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});
$$(".rv").forEach(function(e){ro.observe(e)});
/* contadores */
var cu=$$(".big .p,.row .p").map(function(e){return{e:e,t:e.textContent,n:+e.textContent.match(/[\d.]+/)[0].replace(".","")}});
var ci=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;ci.unobserve(x.target);if(rm)return;var o=cu.filter(function(c){return c.e===x.target})[0],t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1300),v=Math.round(o.n*(1-Math.pow(1-k,4)));o.e.textContent=o.t.replace(/[\d.]+/,v.toLocaleString("pt-BR"));if(k<1)requestAnimationFrame(f)})(t0)})},{threshold:.8});
cu.forEach(function(c){ci.observe(c.e)});
/* scroll */
var pe=$$("[data-par]"),hero=$(".hero"),pgb=$("#pg"),vf=$(".vf"),hd=$("header"),wab=$(".wa"),stp=$("#stp"),sd=stp?Array.prototype.slice.call(stp.children):[],tk=0;
function frame(){tk=0;var y=window.scrollY,H=window.innerHeight;
hd.classList.toggle("s",inner||y>H*.6);
if(!rm){if(hero)hero.style.setProperty("--k",Math.min(1,y/(hero.offsetHeight*.85)).toFixed(3));
pe.forEach(function(e){var r=e.parentElement.getBoundingClientRect();if(r.bottom<-100||r.top>H+100)return;e.style.transform="translateY("+((r.top+r.height/2-H/2)*-e.dataset.par).toFixed(1)+"px) scale(1.18)"});
if(vf){var r=vf.getBoundingClientRect(),p=Math.max(0,Math.min(1,(H-r.top)/(H*.9)));vf.style.transform="scale("+(.86+.14*p).toFixed(3)+")";vf.style.borderRadius=(70-34*p).toFixed(0)+"px"}}
if(stp){var r2=stp.getBoundingClientRect(),p2=Math.max(0,Math.min(1,(H*.75-r2.top)/(r2.height+120)));stp.style.setProperty("--p",p2*100+"%");sd.forEach(function(d,i){d.classList.toggle("on",p2>i/sd.length+.02)})}
if(wab)wab.classList.toggle("on",y>(inner?320:H*.7));
if(pgb)pgb.style.transform="scaleX("+(y/(document.documentElement.scrollHeight-H||1)).toFixed(4)+")"}
window.addEventListener("scroll",function(){if(!tk){tk=1;requestAnimationFrame(frame)}},{passive:true});window.addEventListener("resize",frame);frame();
/* formulário de orçamento */
var f=$("#fq");
if(f){var sel=f.elements.servico,m=location.search.match(/servico=([^&]+)/);if(m){try{sel.value=decodeURIComponent(m[1])}catch(e){}}
f.addEventListener("submit",function(ev){ev.preventDefault();var g=function(n){return(f.elements[n].value||"").trim()},r=function(n){var x=f.querySelector("input[name="+n+"]:checked");return x?x.value:"Não informado"};
var t="Olá! Gostaria de um orçamento.\nServiço: "+g("servico")+"\nNome: "+g("nome")+"\nEndereço do atendimento: "+g("endereco")+"\nQueixa ou necessidade: "+g("queixa")+"\nVaga para estacionar no local: "+r("vaga")+"\nUnidades interna e externa de fácil acesso: "+r("acesso")+"\nVou enviar a foto do equipamento aqui na conversa.";
window.dataLayer&&window.dataLayer.push({event:"orcamento_enviado",servico:g("servico")});window.open("https://wa.me/"+C.telefone+"?text="+encodeURIComponent(t),"_blank","noopener")})}
})();
