const products = [
 {id:1,name:"56mm x 38mm (2.2-1.4 inch) POS Printer Paper Roll",price:30,category:"Pos Roll",image:"assets/pos-roll-56.png",featured:true},
 {id:2,name:"79mm x 50m POS Printer Paper Roll",price:60,category:"Pos Roll",image:"assets/pos-roll-79.png",featured:true},
 {id:3,name:"80mm x 80mm POS Printer Paper Roll",price:150,category:"Pos Roll",image:"assets/pos-roll-80.png",featured:true},
 {id:4,name:"A400 SATA 480GB Rev 3.0 Internal SSD",price:5500,category:"computer",image:"assets/ssd-480gb.png",featured:true},
 {id:5,name:"Arduino UNO Board",price:18,category:"Robotics Kits & Boards",image:"assets/arduino-uno.png",featured:true},
 {id:6,name:"Raspberry Pi Zero W",price:68,category:"Robotics Kits & Boards",image:"assets/raspberry-pi-zero.png",featured:true},
 {id:7,name:"78mm x 73m Thermal POS Paper Roll",price:1,category:"Thermal Sticker",image:"assets/pos-roll-79.png"},
 {id:8,name:"Raspberry Pi 4 Model B – 4GB",price:55.99,category:"Robotics Kits & Boards",image:"assets/raspberry-pi-4.png"},
 {id:9,name:"Robot Chassis (2WD / 4WD)",price:29,category:"Robotics Kits & Boards",image:"assets/robotics-banner.png"},
 {id:10,name:"LEGO Robotics Kits (Spike Prime)",price:29,category:"Robotics Kits & Boards",image:"assets/arduino-board.png"},
 {id:11,name:"Arduino Mega 2560 Board",price:24,category:"Robotics Kits & Boards",image:"assets/arduino-board.png"},
 {id:12,name:"L298N Motor Driver Module",price:4.5,category:"Electronic Components & Sensors",image:"assets/motor-driver.png"},
 {id:13,name:"Jumper Wires",price:1.8,category:"Robotics Accessories",image:"assets/jumper-wires.png"},
 {id:14,name:"Advanced Sensors (IR, Line Sensors)",price:6.5,category:"Electronic Components & Sensors",image:"assets/ir-sensor.png"},
 {id:15,name:"Basic Sensors (light, temperature, ultrasonic)",price:3.8,category:"Electronic Components & Sensors",image:"assets/relay-module.png"},
 {id:16,name:"Motor Drivers (L298N, L293D, DRV8833)",price:4.5,category:"Electronic Components & Sensors",image:"assets/motor-drivers.png"}
];
const $=s=>document.querySelector(s);
const money=n=>"৳"+Number(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
let cart={1:1},activeCategory="All",query="";
function productCard(p,withButton=false){return `<article class="product-card"><img src="${p.image}" alt="${p.name}" loading="lazy"><h3>${p.name}</h3><div class="price">${money(p.price)}</div>${withButton?`<button class="add-small" data-add="${p.id}">Add to cart</button>`:""}</article>`}
const categoryData = [
 {name:"Robotics Kits & Boards",url:"robotics-kits--boards-ystod",image:"https://picklymart.com/public/uploads/all/KJHvcp8Sx8rNwlz7NmxOaPnmglcU6PnZqe73oQHD.png"},
 {name:"3D Printing",url:"3d-printing-j0kzo",image:"https://picklymart.com/public/uploads/all/gojFpHdKL6hKUe3KcONcOcCMPOBZAW7pSKdFhMKz.png"},
 {name:"Drones & Drone Accessories",url:"Drones--Drone-Accessories-jE90q",image:"https://picklymart.com/public/uploads/all/wcAGDjwt5UJd32iJD1qGCQGgfjsVd6LdwMQy4awh.png"},
 {name:"Electronic Components & Sensors",url:"Electronic-Components--Sensors-CJxTl",image:"https://picklymart.com/public/uploads/all/TRvP6Vyddy8uiuDcJPkefWZoH8eZ4apTwavzAtbV.png"},
 {name:"Tools & Lab Equipment",url:"Tools--Lab-Equipment-jtG7i",image:"https://picklymart.com/public/uploads/all/KzatS77q3VSJhZTpd4dDNip9V5MMn9C3wR1WZuJM.png"},
 {name:"Rubik’s Cubes & Speedcubing",url:"Rubiks-Cubes--Speedcubing-dphnR",image:"https://picklymart.com/public/uploads/all/VGTIX7cEMB1I11QI4EPrAkDBnMWONWjZSS6BNfC0.png"},
 {name:"Robotics Accessories",url:"Robotics-Accessories-OQemM",image:"https://picklymart.com/public/uploads/all/mp5BsrxXO8RxXoYWpVOGTqvd4oDySe3EfMX7WAUJ.png"},
 {name:"computer",url:"computer-43i4t",image:"https://picklymart.com/public/uploads/all/hJStvIRlcllBvzTFnP5kKPi5FxjR92hQJSKPdQvC.png"},
 {name:"Home Decomr",url:"Home-Decomr-FnAan",image:"https://picklymart.com/public/uploads/all/TxOXumDEvowF299guoAOs9Zm1icEtY7YgvLPDoGf.jpg"},
 {name:"Pos Roll",url:"Pos-Roll-GJ2Ze",image:"https://picklymart.com/public/uploads/all/gODtjhpXvB2ZyumbvK80mUM8ure4zNPODDduho67.jpg"},
 {name:"Thermal Sticker",url:"Thermal-Sticker-LJprC",image:"https://picklymart.com/public/assets/img/placeholder.jpg"}
];
function showPage(content){$("main").hidden=true;$("#footer").hidden=true;const page=$("#subPage");page.hidden=false;page.innerHTML=content;window.scrollTo({top:0,behavior:"instant"});}
function showHome(){$("#subPage").hidden=true;$("main").hidden=false;$("#footer").hidden=false;window.scrollTo({top:0,behavior:"smooth"});}
function showCategories(){
 const cards=categoryData.map(c=>`<button class="category-page-card" data-open-category="${c.name}"><img src="${c.image}" alt="" onerror="this.onerror=null;this.src='assets/robotics-banner.png'"><strong>${c.name}</strong></button>`).join("");
 showPage(`<div class="page-container"><div class="breadcrumbs"><button data-action="home">Home</button><span>›</span><strong>All categories</strong></div><h1 class="page-heading">All categories</h1><div class="category-page-grid">${cards}</div><div class="category-page-footer"><h3>Contacts</h3><p>Address: 6th Floor, 9R8G+C59 Chittagong Shopping Complex, সি ডি এ এভেনিউ, চট্টগ্রাম 4225</p><p>Email: info@geniuszoo.com</p><h3>My Account</h3><button data-action="login">Login</button><button data-action="register">Registration</button></div></div>`);
}
function showContact(){showPage(`<div class="contact-page"><div class="contact-info"><h1>Contact us</h1><div class="contact-line"><span>●</span><div><h3>Address</h3><p>6th Floor, 9R8G+C59 Chittagong Shopping Complex, সি ডি এ এভেনিউ, চট্টগ্রাম 4225</p></div></div><div class="contact-line"><span>♧</span><div><h3>Phone</h3><p>Contact information</p></div></div><div class="contact-line"><span>✉</span><div><h3>Email Address</h3><p>info@geniuszoo.com</p></div></div></div><form id="contactPageForm" class="contact-form"><label>Name<input required placeholder="Enter Name"></label><label>Email<input type="email" required placeholder="Enter Email"></label><label>Phone no. (optional)<input type="tel" placeholder="Enter Phone"></label><label>Tell us about your query<textarea required placeholder="Type here..."></textarea></label><button class="green-btn">Submit</button><p id="contactPageMessage" class="hint"></p></form></div>`);}
function showAccountPage(type){const register=type==="register";showPage(`<div class="account-page"><div class="account-visual"><div class="account-logo">♧ Pickly<span>mart</span></div><h2>Smart Picks. Smart Life.</h2><p>Discover smart products for your everyday needs.</p></div><form id="accountPageForm" class="account-page-form"><h1>${register?"Create an account":"Login to your account"}</h1><p>${register?"Register to get started with Picklymart.":"Welcome back! Please enter your details."}</p>${register?'<label>Full name<input required placeholder="Enter your name"></label>':''}<label>Email address<input type="email" required placeholder="Enter email address"></label>${register?'<label>Phone number<input type="tel" required placeholder="Enter phone number"></label>':''}<label>Password<input type="password" minlength="6" required placeholder="Enter password"></label>${register?'<label>Confirm password<input type="password" minlength="6" required placeholder="Confirm password"></label>':'<div class="account-extra"><label><input type="checkbox"> Remember me</label><button type="button" data-action="forgot">Forgot password?</button></div>'}<button class="green-btn account-submit">${register?"Create Account":"Login"}</button><p class="account-switch">${register?'Already have an account? <button type="button" data-action="login">Login</button>':'Don’t have an account? <button type="button" data-action="register">Register now</button>'}</p></form></div>`);}
function showCategoryProducts(name){activeCategory=name;query="";showPage(`<div class="page-container"><div class="breadcrumbs"><button data-action="home">Home</button><span>›</span><button data-action="categories">All categories</button><span>›</span><strong>${name}</strong></div><h1 class="page-heading">${name}</h1><div class="all-grid category-products-grid" id="categoryPageGrid"></div><p id="categoryEmpty" hidden>No products found in this category yet.</p></div>`);const list=products.filter(p=>p.category===name);$("#categoryPageGrid").innerHTML=list.map(p=>productCard(p,true)).join("");$("#categoryEmpty").hidden=list.length>0;}
function renderTrack(id,items,buttons=false){$("#"+id).innerHTML=items.map(p=>productCard(p,buttons)).join("")}
function updateCart(){
 const entries=Object.entries(cart).filter(([,q])=>q>0);
 const count=entries.reduce((n,[,q])=>n+q,0);
 const total=entries.reduce((n,[id,q])=>n+products.find(p=>p.id===+id).price*q,0);
 $("#headerTotal").textContent=money(total);$("#headerItems").textContent=count;$("#cartModalTotal").textContent=money(total);
 $("#cartContents").innerHTML=entries.length?entries.map(([id,q])=>{const p=products.find(x=>x.id===+id);return `<div class="cart-row"><div><p><strong>${p.name}</strong></p><span>${money(p.price)} each</span></div><div class="qty"><button data-qty="-1" data-id="${id}">−</button><span>${q}</span><button data-qty="1" data-id="${id}">+</button></div></div>`}).join(""):"<p>Your cart is empty.</p>";
}
function renderAll(){
 let list=products.filter(p=>(activeCategory==="All"||p.category===activeCategory)&&(`${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())));
 const sort=$("#sortSelect").value;
 if(sort==="low")list.sort((a,b)=>a.price-b.price);
 if(sort==="high")list.sort((a,b)=>b.price-a.price);
 if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 $("#allGrid").innerHTML=list.map(p=>productCard(p,true)).join("");
 $("#noResults").hidden=list.length>0;
 document.querySelectorAll("[data-filter]").forEach(b=>b.classList.toggle("active",b.dataset.filter===activeCategory));
}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),2400)}
function openDialog(id){$("#"+id).showModal()}
function addCart(id){cart[id]=(cart[id]||0)+1;updateCart();toast("Added to cart");}
renderTrack("featuredTrack",products.slice(0,4));
renderTrack("bestTrack",[products[2],products[4],products[5],products[0],products[1],products[7]]);
renderTrack("roboticsTrack",[products[8],products[9],products[10],products[5],products[7]]);
renderTrack("componentsTrack",[products[11],products[12],products[15],products[13],products[14]]);
$("#dealList").innerHTML=[products[0],products[1],products[2],products[3]].map(p=>`<button class="deal-card" data-add="${p.id}"><img src="${p.image}" alt="${p.name}"><strong>${money(p.price)}</strong></button>`).join("");
renderAll();updateCart();
document.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]");if(add){addCart(+add.dataset.add);return}
 const qty=e.target.closest("[data-qty]");if(qty){const id=+qty.dataset.id;cart[id]=(cart[id]||0)+(+qty.dataset.qty);if(cart[id]<=0)delete cart[id];updateCart();return}
 const scroll=e.target.closest("[data-scroll]");if(scroll){const track=$("#"+scroll.dataset.scroll);track.scrollBy({left:+scroll.dataset.dir*track.clientWidth*.8,behavior:"smooth"});return}
 const close=e.target.closest("[data-close]");if(close){$("#"+close.dataset.close).close();return}
 const action=e.target.closest("[data-action]")?.dataset.action;if(!action)return;
 if(action==="cart")openDialog("cartDialog");
 if(action==="home")showHome();
 if(action==="categories")showCategories();
 if(action==="login"||action==="register")showAccountPage(action);
 if(action==="forgot")toast("Password reset requested successfully")
 if(action==="search"){openDialog("searchDialog");$("#modalSearchInput").focus()}
 if(action==="categories")$("#categorySidebar").scrollIntoView({behavior:"smooth",block:"center"});
 if(action==="wholesale"){ $("#infoTitle").textContent="Wholesale Enquiry";$("#infoText").textContent="Tell us what products and quantities you need.";openDialog("infoDialog")}
 if(action==="seller"){ $("#infoTitle").textContent="Join as Seller";$("#infoText").textContent="Register your details to join Picklymart as a seller.";openDialog("infoDialog")}
 if(action==="contact")showContact();
 if(action==="checkout"){if(!Object.values(cart).some(q=>q>0)){toast("Your cart is empty");return}openDialog("checkoutDialog")}
});
document.querySelectorAll("[data-category]").forEach(b=>b.addEventListener("click",()=>showCategoryProducts(b.dataset.category)));
document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{activeCategory=b.dataset.filter;renderAll()}));
$("#searchForm").addEventListener("submit",e=>{e.preventDefault();query=$("#searchInput").value.trim();renderAll();$("#allProducts").scrollIntoView({behavior:"smooth"})});
$("#modalSearchForm").addEventListener("submit",e=>{e.preventDefault();query=$("#modalSearchInput").value.trim();$("#searchInput").value=query;activeCategory="All";renderAll();$("#searchDialog").close();$("#allProducts").scrollIntoView({behavior:"smooth"})});
$("#sortSelect").addEventListener("change",renderAll);
$("#accountForm").addEventListener("submit",e=>{e.preventDefault();toast("Successful!");$("#accountDialog").close()});
$("#infoForm").addEventListener("submit",e=>{e.preventDefault();$("#infoDialog").close();toast("Submitted successfully!");e.target.reset();});
$("#checkoutForm").addEventListener("submit",e=>{e.preventDefault();$("#checkoutDialog").close();toast("Submitted successfully!");e.target.reset();});
document.addEventListener("click",e=>{const c=e.target.closest("[data-open-category]");if(c){showCategoryProducts(c.dataset.openCategory);return;}});
document.addEventListener("submit",e=>{if(e.target.id==="contactPageForm"){e.preventDefault();toast("Submitted successfully!");e.target.reset();}if(e.target.id==="accountPageForm"){e.preventDefault();const pass=e.target.querySelectorAll('input[type="password"]');if(pass.length===2&&pass[0].value!==pass[1].value){toast("Passwords do not match");return;}toast("Successful!");e.target.reset();}});
document.querySelectorAll("dialog").forEach(d=>d.addEventListener("click",e=>{if(e.target===d)d.close()}));
