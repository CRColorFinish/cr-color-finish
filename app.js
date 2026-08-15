const form=document.getElementById('quoteForm');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const msg=`Buongiorno, vorrei richiedere un preventivo.\n\nNome: ${d.get('nome')}\nTelefono: ${d.get('telefono')}\nComune: ${d.get('comune')||'-'}\nTipo di lavoro: ${d.get('lavoro')}\n\nDescrizione:\n${d.get('descrizione')}`;
  const phone='390000000000'; // SOSTITUIRE con il numero WhatsApp di C.R. Color Finish
  window.location.href=`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));}
