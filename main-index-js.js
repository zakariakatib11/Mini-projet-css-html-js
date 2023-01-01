var courses =[
    {
        path : 'html.jpg',
        title : 'manipulation en HTML',
        price : 4,
        category : 'HTML'

    },
    {
        path : 'download2.jpeg',
        title : 'manipulation en JAVASCRIPT',
        price : 5,
        category : 'JS'

    }]

    let element = document.getElementById('resultat');


function creationcourses(image, titre, prix) 
{

    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = image;
    p.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode(prix));
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    element.append(div);
}
courses.forEach(e => {
    creationcourses(e.path, e.title, e.price);
});



/*-------------Range------------ */
const slider=document.getElementById("t-range").value;
const value = document.querySelector(".value")
$(function() {
	$('.range').next().text('--'); // Valeur par défaut
	$('.range').on('input', function() {
		var $set = $(this).val();
		$(this).next().text($set);
	});
});

