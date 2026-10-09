
// const products=[{
// image:' image/Big peanut.jpg',

// name:'Peanut-Big size',
// price:'₦8000',
// Added:'Added'



// },{

// image:' image/1 penter of chinching.jpg',

// name:'Peanut-Big size',
// price:'₦8000',
// Added:'Added',
// }]



// let increaedecreas=``



// productHTML='';
// products.forEach((product)=>{


//   productHTML+=``;

// });



 





// let cart=0;
// const carthtml=document.querySelector('.cart')
// carthtml.innerHTML=cart;



// const goodsranging=document.querySelector('.goods-ranging').innerHTML=productHTML;

// const odernowreswide=document.querySelectorAll('.oder-nowreswide5-3');

// for (let i=0; i<odernowreswide.length;i++){

//   odernowreswide[i].addEventListener('click',()=>{

//    document.getElementById('padded').style.display='block';

//    cart++
// carthtml.innerHTML=cart;
//   })
// }


// const padd1=document.querySelector('.paddedreswidgt5-3');


// let choice=0;
// padd1.innerHTML=choice;

//  pluseings.ad






// function pluseing(){
//     choice++
// padd1.innerHTML=choice;

// }

// function minusing(){
//    if (choice>0){
//     choice--
// padd1.innerHTML=choice;
//   }
// };






function callmenu(){
  const menulist=document.getElementById('menulisting');
   menulist.style.display='block';
}

 
function menuclose(){
  const menulist=document.getElementById('menulisting');
   menulist.style.display='none';
}


// function allcarts(){
//  let overall=document.getElementById('overall').style.display='block';
// }


// function closepopup(){
// let overall=document.getElementById('overall').style.display='none';
// }





















  let cart=0;
let alltotal=0;
cartbox= document.getElementById('cart')

// register
const usermedia =document.getElementById('usermedia');
let signup=document.getElementById('showform');
let email=document.getElementById('theemail');
let phone=document.getElementById('thephone');
let name= document.getElementById('name')
let warningemail=document.querySelector('.waringin');
let warningphone=document.querySelector('.waringinphone');

let formsub= document.getElementById('formsub')
let succefullsingup=document.getElementById('getting-successful')





function continuebnt(){
 if (email.value|| phone.value){


    succefullsingup.style.display='block'
savedata()
signup.addEventListener('submit',function(event){

  window.location.href='main.html';
event.preventDefault();
setTimeout(function(){
  succefullsingup.style.display=''
},2000)

})


}


else if(email.value===''||phone.value===''){

warningphone.style.display='block';
warningemail.style.display='block';
event.preventDefault();
}




}

function ordernow(){
signup.style.display='block'
emailcom.style.display='block'
 phonecom.style.display='none'
signinproperties.style.display='block'
allowing.innerHTML='Login'
 longinproperties.style.display='none'
warningemail.style.display='none'
warningphone.style.display='none'
}



// login nav

const signinproperties=document.getElementById('signinproperties');
let allowing=document.getElementById('allowing')
const longinproperties=document.getElementById('longinproperties');

function login(){


if (allowing.innerHTML==='Login'){
  signinproperties.style.display='none'
longinproperties.style.display='block'
allowing.innerHTML='Signup'
loginemailpage.style.display='block'
loginphonepage.style.display='none'
warningemail.style.display='none'
warningphone.style.display='none'
}

else if(allowing.innerHTML==='Signup') {
   signinproperties.style.display='block'
longinproperties.style.display='none'
allowing.innerHTML='Login'
}

}


// // login page


const loginemailpage=document.getElementById('loginemailpage')
const loginphonepage=document.getElementById('loginphonepage')
let emaillongininput=document.getElementById('emaillongininput')
let phonelogininput=document.getElementById('phonelogininuput')
let warninloginphon=document.querySelector('.waringinlonginphone')
  let warninloginemail=document.querySelector('.warninloginemail')

function loginemail(){
loginemailpage.style.display='block'
loginphonepage.style.display='none'
warninloginemail.style.display=''
  warninloginphon.style.display=''
}
 function loginphone(){
loginemailpage.style.display='none'
loginphonepage.style.display='block'
warninloginemail.style.display=''
  warninloginphon.style.display=''
 }






let invaliduser= document.getElementById('getting-successfullogin')
 let welcomebak= document.getElementById('logings')


function loginbnt(){

registereduserE=localStorage.getItem('loginuserE');


if (emaillongininput.value ===registereduserE|| phonelogininput.value ===registereduserE){
  signup.addEventListener('submit',function(event){
  
 succefullsingup.style.display='block'
  welcomebak.innerHTML='Welcom back';

window.location.href='main.html'

event.preventDefault();
     setTimeout(function(){
succefullsingup.style.display=''

 },2000)

  })

  
}
  



else if ( emaillongininput.value !=registereduserE || phonelogininput.value!=registereduserE){
event.preventDefault()
 invaliduser.style.display='block';
 
setTimeout(function(){

invaliduser.style.display='none'
},2000) 

}



else if (emaillongininput.value==='' || phonelogininput.value===''){


  warninloginemail.style.display='block';
  warninloginphon.style.display='block'; 
   event.preventDefault();
}







}


// login page end

document.addEventListener('click',(event)=>{

  if (event.target===signup){
    signup.style.display='none'
    signinproperties.style.display='none'
    longinproperties.style.display='none'
  }

})



//

  
let thebnt= document.querySelector('forbtn');
let phonecom=document.getElementById('close-phone');
let emailcom= document.getElementById('clolose-email')

function thatpagephone(){

emailcom.style.display='none'
phonecom.style.display='block'
warningphone.style.display='';
warningemail.style.display='';

}


 function thatpageemail(){
emailcom.style.display='block'
phonecom.style.display='none'
warningphone.style.display='';
warningemail.style.display='';
 }

// register end



// selection pop up
let popbox = document.getElementById('selection')
    function selection(){
popbox.style.display='block';

}
function selectionrem(){
  popbox.style.display='';
}
// selection pop up end






// datas


function savedata(){
  
  localStorage.setItem('carts',cart)
 localStorage.setItem('loginuserE',email.value ||phone.value);
//  localStorage.setItem('loginuserP',);

}


showdata()
 function showdata(){
cartbox.innerHTML=localStorage.getItem('carts');

let  registereduserE=localStorage.getItem('loginuserE');
// registereduserP=localStorage.getItem('loginuserP');
usermedia.innerHTML=registereduserE

 }




// datas end


// 1st 

let total=0;
let pricep=0;
let bigp=8000;


  
function add1()
{ 
total++

document.getElementById('padd1').innerText=total;
document.getElementById('padd11').innerText=total;
  


  pricep+=bigp;
  document.getElementById('result1').innerText=`₦${pricep}`;


}

function remove1()
{

  if ( pricep>1)
  {
    total--
document.getElementById('padd1').innerText=total;

pricep-=bigp
document.getElementById('result1').innerText=`₦${pricep}`;
  }

  
}

 
function cart1() {
 
 if (total===0) 
  {
  selection()
   display= document.getElementById('padded',).innerText='';
  
cartbox


  }
else if (total>0)
{
  let display=document.getElementById('padded').innerText=`Added`

   cart++
 let cartbox= document.getElementById('cart').innerText=cart;
 let cartbox53= document.getElementById('cart5-3').innerText=cart;



//  recent order

document.getElementById('name1').innerHTML=`Peanut-Big size`;
document.getElementById('number1').innerHTML=total;
 let amoun1=  document.getElementById('amount1').innerHTML=pricep;
 amoun1
 document.getElementById('recent-goods-image1').innerHTML=`<img class="recent-image-js"  src="image/Big peanut.jpg" alt=""> `;
 document.getElementById('delete-order1').innerHTML=`<img class="call" src="icon/close-page.svg" alt="">`

 let tt =alltotal+=pricep;
 document.getElementById('alltotal').innerHTML=tt;
 savedata()
}



}

//2nd
let total2=0;

let pricepb=0;
let pbottle=2500;


function add2()
{


  total2++
  document.getElementById('padd2').innerText=total2;

  pricepb+=pbottle;
  document.getElementById('result2').innerText=`₦${pricepb}`;
}

function remove2(){
if(pricepb>1)
{
total2--
document.getElementById('padd2').innerText=total2;
document.getElementById('padd22').innerText=total2;
pricepb-=pbottle
document.getElementById('result2').innerText=`₦${pricepb}`;
}


}



function cart2() {


  if (total2===0)
  {
    selection()
  display= document.getElementById('padded2',).innerText='';
    cartbox
  }
  else if(total2>0)
  {
 let display=document.getElementById('padded2').innerHTML=`Added`;
  cart++
 let cartbox= document.getElementById('cart').innerText=cart;
 let cartbox53= document.getElementById('cart5-3').innerText=cart;


// recent order
 document.getElementById('name2').innerHTML=`Peanut-1 bottle`
 document.getElementById('number2').innerHTML=total2;
 document.getElementById('amount2').innerHTML=pricepb;
document.getElementById('recent-goods-image2').innerHTML=`<img class="recent-image-js
"  src="image/peanut on bottle.jpg" alt="">`
document.getElementById('delete-order2').innerHTML=`<img   class="call" src="icon/close-page.svg" alt="">`

let  tt2=alltotal+=pricepb
document.getElementById('alltotal').innerHTML=`₦${tt2}`;
savedata();
  }
  
}




// 3rd

let total3=0;

let pricechinhin0ne=0;
let chinchin0nep=10000;

function add3()
{

  total3++
  document.getElementById('padd3').innerText=total3;

  pricechinhin0ne+=chinchin0nep;
  document.getElementById('result3').innerText=`₦${pricechinhin0ne}`;
}

function remove3()
{
  if(pricechinhin0ne>1)
  {
    total3--
document.getElementById('padd3').innerText=total3;
document.getElementById('padd33').innerText=total3;
pricechinhin0ne-=chinchin0nep;
document.getElementById('result3').innerText=`₦${pricechinhin0ne}`;
  }

}


function cart3() {


 

  if (total3===0)
  {
    selection()
    cartbox
  }

  else if(total3>0){ cart++
  
    let display= document.getElementById('padded3').innerText='Added';
 
 let cartbox= document.getElementById('cart').innerText=cart;
 let cartbox53= document.getElementById('cart5-3').innerText=cart;


// recent order
document.getElementById('name3').innerHTML=`Chinchin-1 penter`
 document.getElementById('number3').innerHTML=total3;
 document.getElementById('amount3').innerHTML=pricechinhin0ne;

document.getElementById('recent-goods-image3').innerHTML=`<img class="recent-image-js"  src="image/1 penter of chinching.jpg" alt="">`
document.getElementById('delete-order3').innerHTML=`<img   class="call" src="icon/close-page.svg" alt="">`;

let tt3= alltotal+=pricechinhin0ne
document.getElementById('alltotal').innerHTML=`₦${tt3}`;

savedata()
  }
}




// 4th
let total4=0;

let pricemeatp=0;
let meatpie=1500;

function add4()
{


  total4++
  document.getElementById('padd4').innerText=total4;
document.getElementById('padd44').innerText=total4;
  pricemeatp+=meatpie;
  document.getElementById('result4').innerText=`₦${pricemeatp}`;
}

function remove4()
{
  if (pricemeatp)
  {
   total4--
document.getElementById('padd4').innerText=total4;

pricemeatp-=meatpie;
document.getElementById('result4').innerText=`₦${pricemeatp}`; 
  }

}


function cart4() {
  

  if (total4===0)
  {
    selection()
      display= document.getElementById('padded4',).innerText='';
          cartbox
          savecarts()

  }



  else if (total4>0)
  { 
    let display= document.getElementById('padded4').innerText=`Added`
cart++
 let cartbox= document.getElementById('cart').innerText=cart;
 let cartbox53= document.getElementById('cart5-3').innerText=cart;



 // recent oder
  document.getElementById('number4').innerHTML=`${total4}`
  document.getElementById('amount4').innerHTML=`${pricemeatp}`;
  document.getElementById('name4').innerHTML=`Meat pie`;



  document.getElementById('recent-goods-image4').innerHTML=`<img class="recent-image-js" src="image/1 meat pie.jpg" alt="">`;
document.getElementById('delete-order4').innerHTML=`<img  class="call" src="icon/close-page.svg" alt="">`

  let tt4=alltotal+=pricemeatp
  let hmm4= tt4--
  allgooods=hmm4
    document.getElementById('alltotal').innerHTML=`₦${tt4}`;

    savedata()
  }
}




// 5th

let total5=0;
 

let pricebigchichin=0;
let bigchinchin=4000;

function add5()
{






  total5++
  document.getElementById('padd5').innerText=total5;
document.getElementById('padd55').innerText=total5;
 let ppp= pricebigchichin+=bigchinchin
  document.getElementById('result5').innerText=`₦${ppp}`;

}

function remove5()
{
  if (pricebigchichin)
  {
   total5--
document.getElementById('padd5').innerText=total5;

pricebigchichin-=bigchinchin

document.getElementById('result5').innerText=`₦${pricebigchichin}`; 
  }

}



function cart5() {
  

  if (total5===0)
  {
    selection()
      display= document.getElementById('padded5',).innerText='';
    cartbox
    savedata()
  }

  else if (total5>0)
  {
    let display= document.getElementById('padded5').innerText=`Added`;
cart++
 let cartbox= document.getElementById('cart').innerText=cart;
 let cartbox53= document.getElementById('cart5-3').innerText=cart;
 

 // recent oder

  document.getElementById('number5').innerHTML=total5;
 let amount= document.getElementById('amount5').innerHTML=`${pricebigchichin}`;

 


  document.getElementById('name5').innerHTML=`Chinchin-big(st)`;



  document.getElementById('recent-goods-image5').innerHTML=`<img class="recent-image-js" src="image/Chinchin on big.jpg" alt="">`
document.getElementById('delete-order5').innerHTML=`<img class="call" src="icon/close-page.svg" alt="">`
alltotal+=pricebigchichin;
  document.getElementById('alltotal').innerHTML=`₦${alltotal}`;
savedata()
  } 
}







// 6th 
let total6=0;

let pricesmallp=0;
let smallp=1000;


function add6()
{


  total6++
  document.getElementById('padd6').innerText=total6;

  pricesmallp+=smallp

// allgooods=result6
  document.getElementById('result6').innerText=`₦${pricesmallp}`;



}



function remove6()
{
  if (pricesmallp)
  {
   total6--
document.getElementById('padd6').innerText=total6;
 document.getElementById('padd66').innerText=total6;
pricesmallp-=smallp

document.getElementById('result6').innerText=`₦${pricesmallp}`;
  }

}



// .innerText=cart;




function cart6() {
  

  if (total6===0)
  {

selection()
      display= document.getElementById('padded6',).innerText='';
   cartbox
 savedata()
  }

  else if (total6>0){
  let display= document.getElementById('padded6')
.innerText=`Added`
cart++

 let cartbox= document.getElementById('cart').innerText=cart;
let cartbox53= document.getElementById('cart5-3').innerText=cart;


let theshowElement=document.querySelector('.recent-order-rap')
 // recent oder
 let number=document.getElementById('number6').innerHTML=`${total6}`
 let amount6=document.getElementById('amount6').innerHTML=`₦${pricesmallp}`

 
  document.getElementById('name6').innerHTML=`Peanut-small(st)`;


  document.getElementById('recent-goods-image6').innerHTML=`<img class="recent-image-js" src="image/chichin-sachet.jpg" alt="">`

  document.getElementById('delete-order6').innerHTML=`<img class="call" src="icon/close-page.svg" alt="">`

alltotal+=pricesmallp

document.getElementById('alltotal').innerHTML=`₦${alltotal}`;
savecarts()

  }


// cartbox.innerHTML=localStorage.getItem('carts')
  }



  // remover order
 
 
let removeorderss6=document.getElementById('remove-order6')
let removeorderss5=document.getElementById('remove-order5');
 let allgooods=''

// function removeorder(id){

//   document.getElementById(id).remove()

  
// document.getElementById(id).remove();
//   // let final= alltotal-=amount
// alltotal-=pricesmallp
// alltotal-=pricebigchichin

// document.getElementById('alltotal').innerHTML=`₦${alltotal}`;

// }

function removeorder1(){
alltotal-=bigp
document.getElementById('remove-order1').innerHTML=''
document.getElementById('alltotal').innerHTML=`₦${alltotal}`;

}

 function removeorder2(){
alltotal-=pbottle
document.getElementById('remove-order2').innerHTML=''

document.getElementById('alltotal').innerHTML=`₦${alltotal}`;

}

function removeorder3(){
alltotal-=chinchin0nep
document.getElementById('remove-order3').innerHTML=''
document.getElementById('alltotal').innerHTML=`₦${alltotal}`;

}

 function removeorder4(){
alltotal-=meatpie
document.getElementById('remove-order4').innerHTML=''

document.getElementById('alltotal').innerHTML=`₦${alltotal}`;

}


function  removeorder5()
{
alltotal-=bigchinchin
document.getElementById('remove-order5').innerHTML=''
document.getElementById('alltotal').innerHTML=`₦${alltotal}`;

}

 function removeorder6(){
alltotal-=smallp
document.getElementById('remove-order6').innerHTML=''

document.getElementById('alltotal').innerHTML=`₦${alltotal}`;

}


  // remove order end 

  











// empty cart pop up



let emptycart= document.getElementById('empty-cart')

let myform=document.getElementById('form')
let nolocation=document.getElementById('no-location')
let textareElement=document.getElementById('text-location')
let themove=document.getElementById('the-move')
let paypage=document.getElementById('pay-page')

let removeorders=document.querySelector('.remover-order')

  localStorage.setItem('orders',JSON.stringify(removeorderss6));



myform=JSON.parse(localStorage.getItem('orders'))

function confirm(){

if (alltotal===0){ 
// myform.addEventListener('button', function(event){

//   event.preventDefault();
emptycart.style.display='block'
  setTimeout(()=> {emptycart.style.display='none'},1500);

}


else if (alltotal>1 && textareElement.value){
  document.getElementById('amount-to pay').innerHTML=alltotal
  box.style.display=''

  themove.style.display='block'
  setTimeout(()=>{themove.style.display='none'
 paypage.style.display='block'  
  },3000)
 

}
else{
nolocation.style.display='block'
setTimeout(()=>{nolocation.style.display='none'},1500)

}

}


//  payment successful and fail
let thepaymentsuccess=document.getElementById('payment-successul')
let thepaymentfial=document.getElementById('')

const inputfileElement=document.getElementById('inputfile')
const uploadbtn=document.querySelector('.uploadbtn')
const uploadimage=document.getElementById('uploadimage')
const uploadimage2=document.getElementById('uploadimage2')

uploadbtn.addEventListener('click',()=>{
let thefile=inputfileElement.files[0]
uploadimage.src=URL.createObjectURL(thefile);
uploadimage2.src=URL.createObjectURL(thefile);

})

const addarray=[]
const addmin=document.getElementById('addmin')
function ihavesentit(){
//   paypage.style.display=''
// themove.style.display='block';
// setTimeout(()=>{themove.style.display='none'; 
//   thepaymentsuccess.style.display='block'},4000)
// deletpaid()
uploadimage2.style.display='block'

let word='paid';
addarray.push(word)

renderihavesentit()
}


function renderihavesentit(){
  let goodhtm='';
for (googsindex=0;googsindex<addarray.length;googsindex++){
let thegoodsadd= addarray [googsindex];
let ghtml=`<div>${thegoodsadd}</div>`
goodhtm+=ghtml

}
addmin.innerHTML=goodhtm;
}


  let box =  document.getElementById('overall')
function allcarts(){
  box.style.display='block';
}
const viewallt=document.querySelector('.viewall')

function closepopup(){
  box.style.display='';
  nav1stcart.style.display='block';
  nav2ndcart.style.display='none';

// view
 viewallproduct.style.display='none'
less.style.display='none'
vall.style.display='block'
hearodisplay.style.display='block'
nav1sthome.style.display='none'
nav2ndhome.style.display='block'
nav1stproduct.style.display='block'
nav2ndproduct.style.display='none'
}



function showpage(p){
document.querySelectorAll('.page').forEach(item=>{item.style.display='none';});

document.getElementById(p).style.display='block';
menulist.style.display='';
}




// background colore switch
let backroundElement=document.getElementById('backg')
let leftpagbacground=document.getElementById('menu')
let allbacground=backroundElement+leftpagbacground
function swiching(){
  

  if (backroundElement.innerHTML==='off'){

        document.getElementById('backg').innerHTML='on'
document.body.style.backgroundColor='green';
  }

  else if (backroundElement.innerHTML==='on')
  {
    document.getElementById('backg').innerHTML='off'
    document.body.style.background='#fef5f0'
  }
  
}


// background colour end


// live chat
const myarrays =[]
 const inputElement=document.getElementById('input-text')
function send(){ 

  let thetype=inputElement.value;
myarrays.push(thetype)

inputElement.value=''
renderall()
}

function renderall(){
  let thehtml=''
  for (index=0;index<myarrays.length;index++){
    const theconvert =myarrays[index]

    let html =`<p class="pj">${theconvert}</p>`

thehtml+=html
  }
textshow.innerHTML=thehtml

 
}

let textshow= document.getElementById('showtext')



let thechatbox= document.getElementById('all text')
function startchat(){
  thechatbox.style.display='block'
  agree.style.display='';
  textshow.innerHTML='';
  thebot.style.display='';
  alloption.style.display='block'
    fregutly.classList.remove('green')
      livechat.classList.remove('green')
}

let agree= document.getElementById('agree')

function removechat(){
 agree.style.display='block'
}

  let ThbntElement=document.getElementById('bnt-tap')

function btnyes(){
  
  thechatbox.style.display='';

}

function btnno(){
  agree.style.display='';
  
}
//  bot 
    let thebot= document.getElementById('all-inputs')
    let FAQ =document.getElementById('FAQ')
    let alloption=document.getElementById('chat-option')
    let livechat= document.getElementById('live')
    let fregutly= document.getElementById('frequent')
    let help=document.getElementById('help')
    
  function live(){
    // document.getElementById('showtext').innerHTML='please wait a moment'
 if (livechat.innerHTML==='Live chat')
{
 document.getElementById('live').innerHTML='Live chat'
  livechat.classList.add('green')

  document.getElementById('frequent').innerHTML='FAQ';
  fregutly.classList.remove('green')
}
// else if (livechatElement.innerHTML==='Live chat'){

  



  FAQ.style.display='';
  help.innerHTML='Live chat'
  // let showtext= document.getElementById('showtext')
  //  thebot.style.display=
 textshow.innerHTML='Please wait a moment...'

 setTimeout(()=>{textshow.innerHTML='Connected'; thebot.style.display='block'},4000)
}


function frequent()
{
if (fregutly.innerHTML==='FAQ'){
  document.getElementById('frequent').innerHTML='FAQ';
  fregutly.classList.add('green')

  document.getElementById('live').innerHTML='Live chat';
  livechat.classList.remove('green')
}
// else if (fregutly.innerHTML==='FAQ'){

 thebot.style.display='';
 textshow.innerHTML='';
 FAQ.style.display='block'
 help.innerHTML='FAQ'
}
// list
// let alllists=
function list (page){
  document.querySelectorAll('.all-lists').forEach(item=>{item.style.display='none'})
    document.getElementById(page).style.display='block'
}

// menu

let menulist= document.getElementById('menu')

function menu(){

menulist.style.display='block';
}

function menuclose(){
  menulist.style.display='';
}


document.addEventListener('click',(event)=>{

  if(event.target===menulist){
    menulist.style.display='none'
  }
})
// menu end

// width5-3
const viewallproduct=document.getElementById('hideonwide5-3')
const less= document.querySelector('.less')
const vall= document.querySelector('.vall')
const hearodisplay=document.getElementById('hero-display')

const econy= encodeURIComponent()
function viewall(){
viewallproduct.style.display='block'
less.style.display='block'
vall.style.display='none'
hearodisplay.style.display='none'

// view
 nav2ndproduct.style.display='block';
  nav1stproduct.style.display='none';

   nav2ndhome.style.display='none';
  nav1sthome.style.display='block';
}
function viewless(){
  viewallproduct.style.display='none'
less.style.display='none'
vall.style.display='block'
hearodisplay.style.display='block'

// view

nav2ndproduct.style.display='';
  nav1stproduct.style.display='block';

 nav2ndhome.style.display='block';
  nav1sthome.style.display='none';
}

const shopnow=document.getElementById('shopnowbnt')
 
if(shopnow.innerHTML==='Shop Now'){
 vall.style.display='block'
}



// nav buttom
let navoptions=document.querySelector('.navoptions')
// 
const nav1sthome=document.querySelector('.nav-out1sthome');
const nav2ndhome=document.querySelector('.nav-out2ndhome');

const nav1stproduct=document.querySelector('.nav-our1stprodcut');
const nav2ndproduct=document.querySelector('.nav-out2ndprodcut');

const nav1stcart=document.querySelector('.nav-out1stcat');
const nav2ndcart=document.querySelector('.nav-out2ndcat');

  const nav1stcontact=document.querySelector('.nav-1stcontac');
  const nav2ndcontact=document.querySelector('.nav-2ndcontac');

// 

if (shopnow.innerHTML==='Shop Now'){
  nav2ndhome.style.display='block';
  nav1sthome.style.display='none';
}
  



function navigation1sthome(){
  nav2ndhome.style.display='block';
  nav1sthome.style.display='none';

  nav1stproduct.style.display='block';
    nav2ndproduct.style.display='none';

    nav1stcart.style.display='block'
  nav2ndcart.style.display='none';

  nav1stcontact.style.display='block';
nav2ndcontact.style.display='none';

// view

 viewallproduct.style.display='none'
less.style.display='none'
vall.style.display='block'
hearodisplay.style.display='block'



}

function navigation1stproduct(){
 

  nav2ndproduct.style.display='block';
  nav1stproduct.style.display='none';
  

nav1sthome.style.display='block';
  nav2ndhome.style.display='none';

 nav1stcart.style.display='block';
  nav2ndcart.style.display='none';

  nav1stcontact.style.display='block';
nav2ndcontact.style.display='none';

// view
viewallproduct.style.display='block'
less.style.display='block'
vall.style.display='none'
hearodisplay.style.display='none'



}

function navigation1stcart(){
   nav1stcart.style.display='none'
  nav2ndcart.style.display='block';

  nav1stproduct.style.display='block';
    nav2ndproduct.style.display='none';

    nav1sthome.style.display='block';
  nav2ndhome.style.display='none';

  nav1stcontact.style.display='block';
nav2ndcontact.style.display='none';

// view
box.style.display='block';
}


function navigation1stcontact(){
nav1stcontact.style.display='none';
nav2ndcontact.style.display='block';

 nav1stcart.style.display='block'
  nav2ndcart.style.display='none';

nav1stproduct.style.display='block';
  nav2ndproduct.style.display='none';
  
  nav2ndhome.style.display='none';
  nav1sthome.style.display='block';
}







// width5-3 end






  


  




































// fu
