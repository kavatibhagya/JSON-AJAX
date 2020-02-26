var pagecounter = 1;

var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById("btn");
 btn.addEventListener('click', function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pagecounter + '.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);

    
    };
    ourRequest.send();
    pagecounter++;
    if(pagecounter > 3){
        btn.classList.add("hide-me");
    }
 });

  function renderHTML(data){
      var HTMLString = "";
         
      for(i=0; i<data.length; i++){
          HTMLString += "<p>" + data[i].name + " is a " + data[i].species + "</p>";
      }




      animalContainer.insertAdjacentHTML('beforeend', HTMLString);
      

  }






