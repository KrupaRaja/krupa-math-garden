var answer;
var score=0;
var backgroundImages=[];

function nextQuestion(){
 const n1 = Math.floor(Math.random() * 5);
 document.getElementById('n1').innerHTML =n1;

 const n2 = Math.floor(Math.random() * 6);
 document.getElementById('n2').innerHTML =n2;

 answer= n1+n2;
}

function checkAnswer(){
      
    const prediction = predictImage();

    // console.log(answer);
    // console.log(prediction);

    if (prediction == answer){
        score++;
       console.log(`Correct Score : ${score}`);
       if (score <= 6) {
        backgroundImages.push(`url('images/background${score}.svg')`);
        document.body.style.backgroundImage = backgroundImages;
    } 
       else{

        score=0;
           backgroundImages=[];
           document.body.backgroundImages=backgroundImages;

           alert("Well done! Your math garden is in full bloom! Want to Start again?");
           
       }
    }
    else{
        if(score != 0)
        {
            score--;
        }
        console.log('Wrong ${score}');

        alert('Oops! Check your calculations and try writing the number neater next time!');
        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);
    }
    }
