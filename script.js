// fEATURING WITH ALTERNATE LIGHT - DARK THEMES

const cb=document.getElementById('theme'), lb=document.getElementById('label');
const saved=localStorage.getItem('jaipur-theme');
if(saved==='dark'){cb.checked=true; lb.textContent='☀️ Light';}
cb.addEventListener('change',()=>{
  localStorage.setItem('jaipur-theme', cb.checked?'dark':'light');
  lb.textContent=cb.checked?'☀️ Light':'Dark';
});



// SORTING THE CATEGORIES

const radios = document.querySelectorAll('input[name="cat"]');
const cards = document.querySelectorAll('.card');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    const filter = radio.id; // all, fort, palace, hidden, bazaar, temple

    cards.forEach(card => {
      const cat = card.getAttribute('data-c');
      if (filter === 'all' || cat === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
