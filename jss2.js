var courses = [{
    path: 'html1.png',
    title: 'DOM EN HTML ',
    price:50 ,
    category: 'HTML'
},
{
    path: 'photoj2.png',
    title: 'JS COURSE',
    price: 152,
    category: 'JS'
},
{
    path: 'css1.jpg',
    title: 'DECLARATION DES VARIABLE',
    price: 78,
    category: 'CSS'
},
{
    path: 'html2.jpg',
    title: 'HTML BEGINNER ',
    price: 45,
    category: 'HTML'
},
{
    path: 'php2.jpg',
    title: 'WHAT IS PHP ?',
    price: 255,
    category: 'PHP'
},
{
    path: 'html3.jpg',
    title: 'HTML MANIPULATION',
    price: 140,
    category: 'HTML'
},
{
    path: 'css2.jpg',
    title: 'CSS ADVANCED',
    price: 85,
    category: 'CSS'
},

{
    path: 'php1.png',
    title: 'BASIC',
    price: 99,
    category: 'PHP'
},
{
    path: 'js8.png',
    title: 'LES OBJETS',
    price: 128,
    category: 'JS'
},
{
    path: 'js9.png',
    title: 'WHAT IS JAVASCRIPT ?',
    price: 255,
    category: 'JS'
},

{
    path: 'js9.png',
    title: 'WHAT IS JAVASCRIPT ?',
    price: 255,
    category: 'JS'
},
{
    path: 'js9.png',
    title: 'WHAT IS JAVASCRIPT ?',
    price: 255,
    category: 'JS'
},
]




/* creat elemt  */
var el = document.querySelector('#content2');

function creationCourses(image, titre, prix) {
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = image;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(prix +" $"));
    div.setAttribute('class', 'card col-3 me-3 mb-3','#cardy');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    el.append(div);
}





   
    
    /*----------------------SEARCH----------------------------------------- */

    let sr =document.getElementById("place");
    function search(){
        let i;
        let test =0;

        el.innerHTML='';  /* clear content*/
        for(i=0; i<courses.length;i++){

           if(courses[i].category.toUpperCase().includes(sr.value.toUpperCase()) || courses[i].title.toUpperCase().includes(sr.value.toUpperCase()) ){
            creationCourses(courses[i].path, courses[i].title, courses[i].price);
            test = 1;
           }
         
        }
        if(test==0){

            courses.forEach((v) => {
                creationCourses(v.path, v.title, v.price);
            })
          
        }
        


    }

     document.getElementById("place").addEventListener("input",search());
     
    /*---------------------------------------------------------------------------------------------------------------------------------------*/

    function filtjs(){
        var i;el.innerHTML='';
            for(i=0;i<courses.length;i++){
                if(courses[i].category==="JS") {
                creationCourses(courses[i].path, courses[i].title, courses[i].price);
            }

         }
        };

        function affiche(){
 
            var i;
            el.innerHTML='';
            for(i=0;i<courses.length;i++){
                creationCourses(courses[i].path, courses[i].title, courses[i].price);

            }

        }
        

        /*---------------------------------------------------------------------------------------------------------------------------------------*/

    function filtall(){
        var i;
        el.innerHTML='';

        courses.forEach((v) =>{creationCourses(courses.path, courses.title, courses.price);} )
        courses
        };
    /*---------------------------------------------------------------------------------------------------------------------------------------*/

        function filthtml(){
            var i;el.innerHTML='';
                for(i=0;i<courses.length;i++){
                    if(courses[i].category==="HTML") {
                    creationCourses(courses[i].path, courses[i].title, courses[i].price);
                }
    
             }
            };
    /*---------------------------------------------------------------------------------------------------------------------------------------*/
            function filtcss(){
                var i;el.innerHTML='';
                    for(i=0;i<courses.length;i++){
                        if(courses[i].category==="CSS") {
                        creationCourses(courses[i].path, courses[i].title, courses[i].price);
                    }
        
                 }
                };     
    /*---------------------------------------------------------------------------------------------------------------------------------------*/
    function filtphp(){
        var i;el.innerHTML='';
            for(i=0;i<courses.length;i++){
                if(courses[i].category==="PHP") {
                creationCourses(courses[i].path, courses[i].title, courses[i].price);
            }

         }
        };  

     /*---------------------------------------------------------------------------------------------------------------------------------------*/
 
   
                 function filtall(){
                    var i;
                        for(i=0;i<courses.length;i++){
                        b[i].style.display="block";   
                        }
                     };





                     
  document.getElementById("price-id").innerHTML=document.getElementById("range-id").value;

    function fetch(){
        var range= document.getElementById("range-id");
        document.getElementById("price-id").innerHTML = ''+ range.value ;

        var i;el.innerHTML='';
        for(i=0;i<courses.length;i++){
            if(courses[i].price<=range.value) {

            creationCourses(courses[i].path, courses[i].title, courses[i].price);
        }
    
     }
    }
    
    

   
