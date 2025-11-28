// Utility helpers
const $ = (s, r=document)=> r.querySelector(s);
const $$ = (s, r=document)=> [...r.querySelectorAll(s)];
function snackbar(msg){ const s=$('#snackbar'); s.textContent=msg; s.style.display='block'; setTimeout(()=>s.style.display='none',2000); }
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }

// LocalStorage Wrapper
const DB={
  get(k){ try{return JSON.parse(localStorage.getItem(k))||[]}catch(e){return[]} },
  set(k,v){ localStorage.setItem(k,JSON.stringify(v)) }
};

// Seed defaults
(function init(){
  if(!localStorage.getItem('users')){
    DB.set('users',[{id:uid(),name:'Admin',email:'admin@gmail.com',password:'admin123',isAdmin:true}]);
  }
  if(!localStorage.getItem('products')){
    DB.set('products',[{
      id:uid(),name:'Wireless Headphones',price:2499,
      description:'Comfortable wireless headphones.',
      image:'https://images.unsplash.com/photo-1518444024082-2f1d0f7e3f14'
    }]);
  }
  if(!localStorage.getItem('cart')) DB.set('cart',[]);
})();

let currentUser = localStorage.getItem('loggedInUser')||null;
function getUser(email){ return DB.get('users').find(u=>u.email===email); }

// Navbar update
function updateNav(){
  const add = $('#nav-addproduct'); const login=$('#nav-login'); const user=$('#nav-username'); const out=$('#logoutBtn'); const fab=$('#fab');
  if(currentUser){
    const u=getUser(currentUser);
    user.classList.remove('hidden'); user.querySelector('a').textContent=u.name.split(' ')[0];
    login.classList.add('hidden'); out.classList.remove('hidden');
    if(u.isAdmin){ add.classList.remove('hidden'); fab.classList.remove('hidden'); }
    else{ add.classList.add('hidden'); fab.classList.add('hidden'); }
  } else {
    login.classList.remove('hidden'); user.classList.add('hidden'); out.classList.add('hidden'); add.classList.add('hidden'); fab.classList.add('hidden');
  }
  cartCount();
}
updateNav();

// Routing
const pages = $$('section.page');
function route(id){ pages.forEach(p=>p.classList.add('hidden')); $('#page-'+id).classList.remove('hidden'); }

document.addEventListener('click',(e)=>{
  const r=e.target.closest('[data-route]'); if(!r) return; e.preventDefault(); route(r.dataset.route);
});

// Login
$('#logoutBtn').onclick=()=>{ localStorage.removeItem('loggedInUser'); currentUser=null; updateNav(); route('login'); snackbar('Logged out'); };

// Cart count
function cartCount(){ $('#cart-count').textContent = DB.get('cart').reduce((s,i)=>s+i.qty,0); }

// FAB
$('#fab').onclick=()=> route('add-product');
