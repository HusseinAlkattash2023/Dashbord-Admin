const sideMenu=document.querySelector('aside');
const menuByn=document.querySelector('#menu-btn');
const closeByn=document.querySelector('#close-btn');
const themeToggler=document.querySelector('.theme-toggler');


menuByn.addEventListener('click',()=>{
    sideMenu.style.display='block';
    sideMenu.style.width='18rem';
});
closeByn.addEventListener('click',()=>{
    sideMenu.style.display='none';
});

themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variable');
    
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active')

});
Orders.forEach(order=>{
    const tr=document.createElement('tr');
    const trContent=`
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.pymentStatus}</td>
    <td class="${order.shipping==='Delivered'?'danger':order.shipping==='Pending'?'warning':'primary'}">${order.shipping}</td>
    <td class="primary"><Details></Details></td>
    `;
    tr.innerHTML=trContent;
    document.querySelector('table tbody').appendChild(tr);
});

 

