document.addEventListener("DOMContentLoaded", function() {});


//grabbing data from localhost
fetch('http://localhost:3000/books')
    .then(function(response){
         return response.json();
    })
    .then(function(data){
        data.forEach(book => {
            let title = document.createElement('li')
            title.textContent = book.title
            document.querySelector('#list').appendChild(title)

       
            //show Details
            title.addEventListener('mouseover', function(){
                //let list = document.querySelector('#list')
                let image = document.createElement('img') 
                    image.textContent = book[img_url]
                let heading = document.createElement('h1')
                    heading.textContent = book.title
                let description = document.createElement('p')
                    description.textContent = book.description
                let likers = document.createElement('li')  
                document.querySelector('#show-panel').appendChild(image,heading, description,likers)
            })
            
        });;
    });

//Show details from div#show-panel




