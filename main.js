const question = [
     {
          text : 'hello',
          ans : 'hello'
     },

     {
          text : 'what is your name ',
          ans : 'my name is sujon biswas'
     },

     {
          text : 'your favarite player name ',
          ans : 'my favarite player name leneo messi'
     },
     
     {
          text : 'where are you from',
          ans : 'my from is sylhet'
     },

     {
          text : 'where are you live',
          ans : 'my live in atgram'
     },

     {
          text : 'what is your proffession',
          ans : 'my proffession is computer codding most the succsesful'
     },

     {
          text : 'what do present',
          ans : 'i am present is computer science and technology at sylhet polytechnic institute in student'
     },

     {
          text : 'what is your father name',
          ans : 'my father name is sree sukandra biswas'
     },

     {
          text : 'what is your father proffession',
          ans : 'my father proffession farmer'
     },

     {
          text : 'what is your mother name',
          ans : 'my mother name is sree tulsi rani biswas'
     },

     {
          text : 'what is your mother proffession',
          ans : 'my mother proffession gardiant'
     },

     {
          text : 'your facebook profile id',
          ans : 'my facebook profile id sujon biswas'
     },

     {
          text : 'your proffession',
          ans : 'my proffession is long run programmer'
     },
     {
          text : 'why programmer',
          ans : 'my favarite proffession and must be success'
     },

     {
          text : 'what is programmer',
          ans : 'programmer is most world way proffession and that a person success this person long run programmer proffession'
     },

     {
          text : 'what is your got name',
          ans : 'my got name is krishna'
     },

     {
          text : 'believe me',
          ans : 'yes'
     },

     {
          text : 'তুমার জনক কে',
          ans : 'sujon'
     },
     {
          text : 'বাংলাদেশের রাজধানীর নাম কি',
          ans : 'ডাকা'
     },
     {
          text : 'বাংলাদেশে কয়টি জেলা আছে',
          ans : '৬৪ টি জেলা আছে'
     },

]




var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event){
     var text = event.results[0][0].transcript;
     document.getElementById('output').innerHTML = text;

     read(text);
}

function read(text){
     var speech = new SpeechSynthesisUtterance();
     speech.text = text;
     speech.question.map(plan=>
          ` if(text == '${plan.text}'){
             speech.text = '${plan.ans}';
     }
     else{v  
          speech.text = 'please agin';
     }`
     )
   
     document.getElementById('res').innerHTML = speech.text;
     window.SpeechSynthesis.speech(speech)

}





for(var i = 0;i<=3;i++){
     document.querySelectorAll('.Mybutton')[i].addEventListener('click',function(){
          var text = this.innerHTML;
          audio(text)
          animation(text)

     });
}

function audio(text){
     switch(text){
          case "a":
               var a = new Audio('a.mp3')
               a.play();
               document.getElementById('output').innerHTML = `click ${text}`;
                
               setTimeout(()=>{
                   document.getElementById('output').innerHTML = ''
   
             },2000)
               break;

          case "A":
               var a = new Audio('a.mp3')
               a.play();
               document.getElementById('output').innerHTML = `click ${text}`;
                
               setTimeout(()=>{
                   document.getElementById('output').innerHTML = ''
   
             },2000)
               break;
          case "b":
               var b = new Audio('a.mp3')
               b.play();
               document.getElementById('output').innerHTML = `click ${text}`;
                
               setTimeout(()=>{
                   document.getElementById('output').innerHTML = ''
   
             },2000)
               break;
          case "B":
               var b = new Audio('a.mp3')
               b.play();
               document.getElementById('output').innerHTML = `click ${text}`;
                
               setTimeout(()=>{
                   document.getElementById('output').innerHTML = ''
   
             },2000)
               break;
          case "c":
               var c = new Audio('a.mp3')
               c.play();
               document.getElementById('output').innerHTML = `click ${text}`;
                
               setTimeout(()=>{
                   document.getElementById('output').innerHTML = ''
   
             },2000)
               break;
          case "C":
               var c = new Audio('a.mp3')
               c.play();
               document.getElementById('output').innerHTML = `click ${text}`;
                
               setTimeout(()=>{
                   document.getElementById('output').innerHTML = ''
   
             },2000)
               break;
          case "d":
               var d = new Audio('a.mp3')
               d.play();
               document.getElementById('output').innerHTML = `click ${text}`;
                
               setTimeout(()=>{
                   document.getElementById('output').innerHTML = ''
   
             },2000)
               break;

          case "D":
                document.getElementById('output').innerHTML = `click ${text}`;
                
                setTimeout(()=>{
                    document.getElementById('output').innerHTML = ''
    
              },2000)
                
               var d = new Audio('a.mp3')
               d.play();
               break;
          default:
                     document.getElementById('output').innerHTML = `click ${text} music not found please enter your correct button`;

          setTimeout(()=>{
                document.getElementById('output').innerHTML = ''

          },3000)
          break;
            
               
     }
}

document.addEventListener('keypress',function(event){
     var text = event.key;
     audio(text);
     animation(text)


})


function animation(text){
      var selector = document.querySelector('.'+ text);
          selector.classList.add('active');
  
     setTimeout(() => {
          selector.classList.remove('active');
          
     }, 5000);

  
}





const details = [
     {
          name : "sujon biswas",
          p : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis animi',
          button : 'sujon',
          images : ['1724829876876.png']

     },
     {
          name : "sujon biswas",
          p : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis animi',
          button : 'sujon',
          images : ['4.jpeg']

     },
     {
          name : "sujon biswas",
          p : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis animi',
          button : 'sujon',
          images : ['4.jpg']

     },
     {
          name : "sujon biswas",
          p : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis animi',
          button : 'sujon',
          images : ['5.jpeg']

     },
     {
          name : "sujon biswas",
          p : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis animi',
          button : 'sujon',
          images : ['6.jpg']

     },
     {
          name : "sujon biswas",
          p : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis animi',
          button : 'sujon',
          images : ['IMG_20250205_115602.jpg']

     },
     {
          name : "sujon biswas",
          p : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis animi',
          button : 'sujon',
          images : ['sujon biswas.jpg']

     },
     {
          name : "sujon biswas",
          p : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis animi',
          button : 'sujon',
          images : ['Untitled design.png']

     },
]

function initialize(){
     var my = document.getElementById('images');
my.innerHTML = details.map(link =>
     `
     <div>  
      <img src="${link.images}" alt="">
               <h2>${link.name}</h2>
               <p>${link.p} </p>
               <button>${link.button}</button>
               </div>
               `
).join('')

}
initialize()
document.addEventListener('DOMContentLoaded',function(){
     read(text);
     initialize()
})