const state={step:1, answers:[]};
const steps=[...document.querySelectorAll('.step')];
const progress=document.getElementById('progressBar');
const resultTitle=document.getElementById('resultTitle');
const resultText=document.getElementById('resultText');
const resultCta=document.getElementById('resultCta');
const featuredLink=document.getElementById('featuredLink');

// Replace this placeholder with your unique HubSpot affiliate URL after approval.
const HUBSPOT_AFFILIATE_URL='YOUR_HUBSPOT_AFFILIATE_LINK';
function setAffiliateLink(){
  const url=HUBSPOT_AFFILIATE_URL.startsWith('http')?HUBSPOT_AFFILIATE_URL:'https://www.hubspot.com/';
  resultCta.href=url; featuredLink.href=url;
}
setAffiliateLink();

function showStep(n){steps.forEach(s=>s.classList.toggle('active',Number(s.dataset.step)===n));progress.style.width=`${Math.min(100,n/3*100)}%`}
function finish(){
  resultTitle.textContent='HubSpot';
  resultText.textContent='Based on your answers, HubSpot is a strong starting point when you want to connect customer data, sales activity and marketing workflows in one platform.';
  document.getElementById('recommendation').scrollIntoView({behavior:'smooth',block:'center'});
}

document.querySelectorAll('.choices button').forEach(btn=>btn.addEventListener('click',()=>{
  state.answers.push(btn.dataset.value);
  if(state.step<3){state.step++;showStep(state.step)}else{progress.style.width='100%';finish()}
}));

document.querySelectorAll('[data-jump]').forEach(btn=>btn.addEventListener('click',()=>{
  document.getElementById('finder').scrollIntoView({behavior:'smooth'});
  showStep(1);
  window.setTimeout(()=>document.querySelector('.choices button')?.focus(),500);
}));
