var courses = [{
    path: 'photoj1.png',
    title: 'Manipulation des attributs ',
    price:50 +"$",
    category: 'HTML'
},
{
    path: 'photoj2.png',
    title: 'DOM en HTML',
    price: 152+"$",
    category: 'HTML'
},
{
    path: 'photoj3.png',
    title: 'declaration des variablese',
    price: 78+"$",
    category: 'HTML'
},
{
    path: 'photoj4.png',
    title: 'CSS Properties',
    price: 45+"$",
    category: 'HTML'
},
{
    path: 'photoj5.png',
    title: 'CSS selectors',
    price: 140+"$",
    category: 'HTML'
},
{
    path: 'photoj6.png',
    title: 'HTML Attributes And values',
    price: 85+"$",
    category: 'HTML'
},

{
    path: 'js7.png',
    title: 'HTML element and tags',
    price: 99+"$",
    category: 'HTML'
},
{
    path: 'js8.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 128+"$",
    category: 'HTML'
},
{
    path: 'js9.png',
    title: 'what is javascript ?',
    price: 255+"$",
    category: 'JS'
},




]


function creetab(im,tit,pr){

    let div=document.createElement('div'),
     img=document.createElement('img'),
     p=document.createElement('p'),
     span=document.createElement('span');

    img.src=im;
    p.appendChild(document.createTextNode(tit));
    span.appendChild(document.createTextNode(pr));
  
    div.setAttribute('class', 'card cards11 ');
    img.setAttribute('class','card_img');
    p.setAttribute('class', 'card_text');
    span.setAttribute('class', 'card_text');

    div.append(img);
    div.append(p);
    div.append(span);

(document.getElementById("bors2")).append(div);

}
courses.forEach(e=>{
    creetab(e.image,e.title,e.price);
    
});

const a = document.getElementById("#inp11") ; 
const b = document.querySelectorAll("#cards11"); 
a.addEventListener('keyup',(e)=>{
    const c =e.target.value ; 
    b.forEach((e)=>{
        if(e.textContent.indexOf(c)>=0) e.style.display ="block" ; 
        else e.style.display ="none" ; 
    })
}) 

var jer = document.getElementById("jer"); 
jer.addEventListener("click",fprice);
function fprice (){
    let i ; 
    for(i=0 ; i<courses.length;i++){
        if(courses[i].price<=( jer.value))
       b[i].style.display ="block" ;
       else b[i].style.display ="none" ; 
    }
    }
    function filtjs(){
        var i;el.innerHTML='';
            for(i=0;i<courses.length;i++){
                if(courses[i].category==="JS") {
                creationCourses(courses[i].path, courses[i].title, courses[i].price);
            }

         }
        };

    

        function filtHTML(){
            var i;el.innerHTML='';
                for(i=0;i<courses.length;i++){
                    if(courses[i].category==="JS") {
                    creationCourses(courses[i].path, courses[i].title, courses[i].price);
                }
    
             }
            };

    function filthtml(){
        var i;
            for(i=0;i<courses.length;i++){
                if(courses[i].category=="HTML") b[i].style.display="block";
                else b[i].style.display="none";
            }

         };
         function filtcss(){
            var i;
                for(i=0;i<courses.length;i++){
                    if(courses[i].category=="CSS") b[i].style.display="block";
                    else b[i].style.display="none";
                }

             };
             function filtphp(){
                var i;
                    for(i=0;i<courses.length;i++){
                        if(courses[i].category=="PHP") b[i].style.display="block";
                        else b[i].style.display="none";
                    }
                    
                 };

                 function filtall(){
                    var i;
                        for(i=0;i<courses.length;i++){
                        b[i].style.display="block";   
                        }
                     };




/*
function remplir(){
    let cp=0;
    while (cp<3){
        let x1 = Math.floor(Math.random() * 19);
        
        let el1= courses[x1];
     

        let fig1=document.createElement("FIGURE");
        
        let img1 = document.createElement("img");
        fig1.appendChild(img1);
        img1.setAttribute("src",el1.path);
        img1.setAttribute("width", "200px");
        img1.setAttribute("height", "200px");
        var titre1 = document.createElement("figcaption");
        var t1 = document.createTextNode(el1.title);
        titre1.appendChild(t1);
        fig1.appendChild(titre1);
        var prix1 = document.createElement("figcaption");
        var p1 = document.createTextNode(el1.price);
        prix1.appendChild(p1);
        fig1.appendChild(prix1);
        document.body.appendChild(fig1);
        cp++}
        
}*/

window.onload=remplir();
