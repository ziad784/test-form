const answers = [
    {"q1":"All"},
    {"q2":"keep away"},
    {"q3":"Worry"},
    {"q4":"Anxiety"}
]

const right_words = [
    "Well done!",
    "Excellent!",
    "Good Job!",
    "Very Good!",
    "Bravo!",
    "Great!",
    "Amazing!",
    "You did it!",
    "That’s good!",
    "Wonderful!",
    "You got it",
    "I’m Proud of you!",
    "Nice work!",
    "Keep it up",
    "You did very well!"
]


const TryAgain_words = [
    "Try once more",
    "Give it another try!",
    "Try again!",
    "Come on! You can do it!",
    "Never give up!",
    "Keep tying!",
    "Stay strong!",
    "Try once more!",
    "Never Stop!"
]


const wrong_short_words = [
    "Sorry!",
    "No!",
    "Oops!",
    "This is not true!",
    
]
const wrong_long_words = [
    "Your answer is wrong. The correct answer is",
    "This is not the right answer. The correct answer is",
    "Incorrect answer. The correct answer is",
    "The correct answer is",
    
]


function getRandomWord(words){
    return words[Math.floor(Math.random() * words.length)]
}

let try_count ;


const answers_array = Array.from(document.querySelectorAll(".answers"));

answers_array.forEach((ele)=>{
    const q_array = Array.from(document.querySelectorAll("."+ele.dataset.q));
   
    q_array.forEach((element)=>{
      
        element.children[0].addEventListener("change",(e)=>{

            const card = document.getElementById(ele.dataset.q+"_card");
           
            const right_ans = answers[parseInt(ele.dataset.q.split("q")[1]) - 1][ele.dataset.q]
            
            
            if(right_ans == e.target.value){
                
                card.style.display = "block";
                card.innerHTML = `<div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                <div class="right"><span class="green">${getRandomWord(right_words)}</span> Correct answer.</div>`

                document.getElementById(ele.dataset.q+"_rating").style.display = "flex"
                q_array.forEach((radio)=>{
                    radio.children[0].disabled = true
                })

                card.addEventListener("click",(e)=>{
          

                    document.getElementById(e.currentTarget.dataset.btn).style = "block"
                    card.style.display = "none"

                })
               

            }else{

             
                if(card.children.length === 0){
                  


                    card.style.display = "block";
                    card.innerHTML = ` <div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                    <div class="try_again orange">${getRandomWord(TryAgain_words)}</div>`
                    element.remove();
                  
                    card.addEventListener("click",(e)=>{
          

                        document.getElementById(e.currentTarget.dataset.btn).style = "block"
                        card.style.display = "none"
    
                    })
                   
                    
                     


                }else{

                    

                    if(card.children[1].classList.contains("try_again")){

                        const random_index = Math.floor(Math.random() * wrong_short_words.length)
                        const wrong_short = wrong_short_words[random_index];
                        const wrong_long = wrong_long_words[random_index]
                        
                        card.style.display = "block";
                        card.innerHTML = `<div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                        <div class="wrong"><span class="red">${wrong_short}</span> <span class="black">${wrong_long}</span> <span class="blue">"${right_ans}"</span> </div>`
    
                        document.getElementById(ele.dataset.q+"_rating").style.display = "flex"
                        q_array.forEach((radio)=>{
                            radio.children[0].disabled = true
                        })
    
                        card.addEventListener("click",(e)=>{
                  
    
                            document.getElementById(e.currentTarget.dataset.btn).style = "block"
                            card.style.display = "none"
    
                        })
                       


                    }

                   

                }
            
            }


         

        })
    })
})




const show_btns = Array.from(document.querySelectorAll(".show_btn"))

show_btns.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
        document.getElementById(e.currentTarget.dataset.card).style = "block"
        ele.style.display = "none"
    })
})



const rating = Array.from(document.querySelectorAll(".rating"))

rating.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
        const color_name = e.currentTarget.className.split("_")[1];
        console.log(color_name);
        e.currentTarget.classList.add(color_name)

        rating.forEach((ele)=>{
            
            if(ele.dataset.q == e.currentTarget.dataset.q){
                if(ele != e.currentTarget){
                    ele.classList.remove(ele.classList[2])
                }

            }

           
        })

    })
})
