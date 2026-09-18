const projects = [
  {
    type:"PODIMA",
    index:"01",
    role:"CURRENT · PRODUCT OWNER",
    title:"Dotin / Podima",
    desc:"A product management case-study space for product strategy, discovery, delivery, growth and collaboration with engineering and design.",
    tags:["Product Strategy","Discovery","Growth","Mobile / PWA"]
  },
  {
    type:"TENSOR",
    index:"02",
    role:"PRODUCT OWNER · 2022",
    title:"Tensor Marketplace",
    desc:"Market analysis and marketplace implementation focused on sales strategy and brand recognition in the forex market, coordinating with 8 market partners.",
    tags:["Market Analysis","Marketplace","B2B","Forex"]
  },
  {
    type:"FOREX",
    index:"03",
    role:"PROJECT MANAGER · 2022—2024",
    title:"Five Forex Products",
    desc:"Successfully launched and sold five forex products to a prominent industry player, with delivery within specified timeline and budget constraints.",
    tags:["Product Launch","Project Management","Go-to-Market","Forex"]
  },
  {
    type:"DELTAFX",
    index:"04",
    role:"PMO · 2020—2021",
    title:"DeltaFX",
    desc:"Oversaw a project portfolio and managed 30 concurrent projects across feasibility, planning and development, with reported 300% user-base growth.",
    tags:["PMO","Portfolio","30 Projects","Growth"]
  }
];

const tabs = document.querySelectorAll(".project-tab");
const visualType = document.querySelector("#visualType");
const visualIndex = document.querySelector("#visualIndex");
const projectRole = document.querySelector("#projectRole");
const projectTitle = document.querySelector("#projectTitle");
const projectDesc = document.querySelector("#projectDesc");
const projectTags = document.querySelector("#projectTags");
const visualWindow = document.querySelector(".visual-window");

function renderProject(i){
  const p = projects[i];
  visualWindow.style.transform = "translateY(8px)";
  visualWindow.style.opacity = ".2";
  setTimeout(()=>{
    visualType.textContent=p.type;
    visualIndex.textContent=p.index;
    projectRole.textContent=p.role;
    projectTitle.textContent=p.title;
    projectDesc.textContent=p.desc;
    projectTags.innerHTML=p.tags.map(t=>`<span>${t}</span>`).join("");
    tabs.forEach((tab,n)=>tab.classList.toggle("active",n===i));
    visualWindow.style.transform = "translateY(0)";
    visualWindow.style.opacity = "1";
  },120);
}
tabs.forEach((tab,i)=>tab.addEventListener("click",()=>renderProject(i)));

document.addEventListener("keydown",(e)=>{
  if(!["ArrowLeft","ArrowRight"].includes(e.key)) return;
  const current=[...tabs].findIndex(t=>t.classList.contains("active"));
  const next=e.key==="ArrowRight" ? (current+1)%projects.length : (current-1+projects.length)%projects.length;
  renderProject(next);
});

document.querySelector("#year").textContent=new Date().getFullYear();
