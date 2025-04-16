var shareBtn = document.getElementById('firstBtn');
shareBtn.addEventListener('click',()=>{
     if(navigator.share){
          navigator.share({
              url : ['1.mp4']
          })
          .then(()=>{
               console.log('are you cerrect');
          })
          .catch((e)=>{
               console.log('error '+ e);
          })

     }
})


// count section start here

var count = 0;
var project = setInterval(project,60);

function project(){
     count++;
     document.getElementById('num1').innerHTML = count;

     if(count == 400){
          clearInterval(project);
     }
}

var count1 = 0;
var client = setInterval(client,60);

function client(){
     count1++;
     document.getElementById('num2').innerHTML = count1;

     if(count1 == 500){
          clearInterval(client);
     }
}

var count3 = 0;
var links = setInterval(links,40);

function links(){
     count3++;
     document.getElementById('num3').innerHTML = count3;

     if(count3 == 600){
          clearInterval(links);
     }
}