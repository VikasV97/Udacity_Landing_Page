console.log(window.innerWidth);

let superBtn = document.querySelector('#supermanBtn');
superBtn.addEventListener('click', ()=>{
    let ele = document.querySelector('.superhero');
    ele.scrollIntoView();   
    const size = window.innerWidth;   
    if (size === 1024 || size === 1440){
        data = () =>{ele.style.border = `5px solid blue`};
        setTimeout(data, 500);
        reset =() =>{ele.style.border ='none'};
        setTimeout(reset, 1000); 
    }
})

let batBtn = document.querySelector('#batmanBtn');
batBtn.addEventListener('click', ()=>{
    let ele = document.querySelector('.superhero2');
    ele.scrollIntoView();   
    const size = window.innerWidth;   
    if (size === 1024 || size === 1440){
        data = () =>{ele.style.border = `5px solid black`};
        setTimeout(data, 500);
        reset =() =>{ele.style.border ='none'};
        setTimeout(reset, 1000); 
    }
})

let wonderBtn = document.querySelector('#wwBtn');
wonderBtn.addEventListener('click', ()=>{
    let ele = document.querySelector('.superhero3');
    ele.scrollIntoView();   
    const size = window.innerWidth;   
    if (size === 1024 || size === 1440){
        data = () =>{ele.style.border = `5px solid yellow`};
        setTimeout(data, 500);
        reset =() =>{ele.style.border ='none'};
        setTimeout(reset, 1000); 
    }
})

let fBtn = document.querySelector('#flashBtn');
fBtn.addEventListener('click', ()=>{
    let ele = document.querySelector('.superhero4');
    ele.scrollIntoView();   
    const size = window.innerWidth;   
    if (size === 1024 || size === 1440){
        data = () =>{ele.style.border = `5px solid red`};
        setTimeout(data, 500);
        reset =() =>{ele.style.border ='none'};
        setTimeout(reset, 1000); 
    }
})


let backScroll = window.pageYOffset;
window.onscroll = ()=> {
  let fwdScroll = window.pageYOffset;
  if (backScroll > fwdScroll){
    document.getElementById("navbar").style.top = "0";
  } 
  else{
    document.getElementById("navbar").style.top = "-50px";
  }
  backScroll = fwdScroll;
}

let upBtn = document.querySelector('#moveUp');
upBtn.addEventListener('click', ()=>{
    window.scrollTo(474, 6);
})

