
var url = "http://localhost:3000/main"
if (window.location.pathname === '/C:/Users/dhoni/web/technology.html'){
    console.log("tech")
     url = "http://localhost:3000/tech"
}
else if (window.location.pathname === '/C:/Users/dhoni/web/sports.html'){
    console.log("sports")
     url = "http://localhost:3000/sports"
}
else if (window.location.pathname === '/C:/Users/dhoni/web/movies.html'){
    console.log("movies")
     url = "http://localhost:3000/movies"
}


fetch(url).then((resp) => resp.json()).then(function(data){
    shownews(data);
})

function shownews(data){
   
    data.articles.forEach(element => {
      
        creation(element)
        
    });
}

function creation(data){
  
    var card = document.createElement('div')
    var heading = document.createElement('p');
    var description = document.createElement('p');
    var cardcontainer = document.createElement('div')
    var link = document.createElement('a')
    link.href= data.url

    card.classList.add('cards')
    heading.classList.add('newsheading')
    description.classList.add('newsdescription');


    heading.appendChild(document.createTextNode(data.title))
    description.appendChild(document.createTextNode(data.description))
   

    document.getElementById('cardcontainer').appendChild(link)
    link.appendChild(card)
    card.appendChild(heading)
    card.appendChild(description)
 
   

    console.log(data.description)
}