// localStorage.setItem('name','Arif');
// localStorage.setItem('ID','1')
// sessionStorage.setItem('name',"Arif");
// sessionStorage.setItem('ID','1');

// document.querySelector('h1').innerHTML=localStorage.getItem('name');
// localStorage.clear();
// localStorage.removeItem('name')
// let element= document.querySelector('form');
// element.addEventListener('submit',gonder)
// function gonder(e){
//     e.preventDefault()
//     let inp= document.querySelector('input').value;
//     localStorage.setItem('not',inp);
// }

let inp=document.querySelector('.opacity');
let border=document.querySelector('.border');

inp.addEventListener('input',test)
let imge=document.getElementsByClassName('img1')
// let h1= document.getElementById('bor')
function test (){
    localStorage.setItem('Opacity',inp.value);
    let opacityQaydan=localStorage.getItem('Opacity')
    imge.style.opacity=opacityQaydan;
//   imge.style.opacity=`${opacityQaydan}`
// h1.innerHTML=opacityQaydan;
}
  

inp.addEventListener('input',bord)

function bord(){
  setInterval(()=>{
     localStorage.setItem('border',border.value); 
  },1000) 
 
}



