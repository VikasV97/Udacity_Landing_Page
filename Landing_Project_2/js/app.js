// selecting elements
let secArr = document.querySelectorAll('section');
let navBar = document.getElementsByClassName('navbar');
let uList = document.getElementById('navItemsList');

//function to generate a text link
sectionLinks =(text)=> {
    const items = `<a>${text}</a>`;
    return items;
}

// Creating new li elements depending on number of sections in page
navBuild =() => {
    
    const fragItem = document.createDocumentFragment();
    for(let i=0; i< secArr.length; i++){
        const lList = document.createElement('li');
        const itemText = secArr[i].getAttribute('text');
        if( i === 0){           
            lList.setAttribute('id', 'sec1');
            //console.log(lList);            
        }
        else if( i === 1){
            lList.setAttribute('id', 'sec2');
            //console.log(lList); 
        }
        else if( i === 2){
            lList.setAttribute('id', 'sec3');
            //console.log(lList); 
        }
        else{
            lList.setAttribute('id', 'sec4');
            //console.log(lList); 
        }
        lList.innerHTML = sectionLinks(itemText);
        fragItem.appendChild(lList);
       
    }
    
    uList.appendChild(fragItem);
     
    
}

navBuild();

//Using scrollIntoView to scroll the page to the appropriate section
let supClick = document.querySelector('#sec1');
let batClick = document.querySelector('#sec2');
let wwClick = document.querySelector('#sec3');
let flashClick = document.querySelector('#sec4');
supClick.addEventListener('click',()=>{
    let supSection = document.querySelector('#section1');
    supSection.scrollIntoView({behavior: "smooth"});
    
// Avoided looping functions for better Time Complexity O
})
batClick.addEventListener('click',()=>{
    let supSection = document.querySelector('#section2');
    supSection.scrollIntoView({behavior: "smooth"});

})
wwClick.addEventListener('click',()=>{
    let supSection = document.querySelector('#section3');
    supSection.scrollIntoView({behavior: "smooth"});

})
flashClick.addEventListener('click',()=>{
    let supSection = document.querySelector('#section4');
    supSection.scrollIntoView({behavior: "smooth"});

})
// scroll to the top function  
let upBtn = document.querySelector('#moveUp');
upBtn.addEventListener('click', ()=>{
    window.scrollTo(474, 6);
})

let backScroll = window.pageYOffset;
window.onscroll = ()=> {
  let fwdScroll = window.pageYOffset;
  if (backScroll > fwdScroll){
    document.getElementById("navbar").style.top = "0";
  } 
  else{
    document.getElementById("navbar").style.top = "-70px";
  }
  backScroll = fwdScroll;
}

