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
                card.innerHTML = `<div class="right"><span class="green">${getRandomWord(right_words)}</span> Correct answer.</div>`

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
                    card.innerHTML = `<div class="try_again">${getRandomWord(TryAgain_words)}</div>`
                    element.remove();
                    try_count = 0
                   
                    
                     


                }else{


                    if(card.children[0].className == "try_again"){

                        const random_index = Math.floor(Math.random() * wrong_short_words.length)
                        const wrong_short = wrong_short_words[random_index];
                        const wrong_long = wrong_long_words[random_index]
                        
                        card.style.display = "block";
                        card.innerHTML = `<div class="wrong"><span class="red">${wrong_short}</span> <span class="black">${wrong_long}</span> <span class="blue">"${right_ans}"</span> </div>`
    
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


// const q1_array = Array.from(document.querySelectorAll('input[name="q1"]'));

// q1_array.forEach((ele)=>{
//     ele.addEventListener("change",(e)=>{

//         if(e.target.value == answers[0].q1){
//             const q1_card = document.getElementById("q1_card");
//             q1_card.style.display = "block";
//             q1_card.innerHTML = `<div><span class="green">${getRandomWord(right_words)}</span> Correct answer.</div>`

//             q1_array.forEach((element)=>{
//                 element.disabled = true
//             })

//             q1_card.addEventListener("click",(e)=>{
              

//                 document.getElementById(e.currentTarget.dataset.btn).style = "block"
//                 q1_card.style.display = "none"

//             })

//         }else{

//             const q1_card = document.getElementById("q1_card");
//             q1_card.style.display = "block";
//             q1_card.innerHTML = `<div class="try_again">${getRandomWord(TryAgain_words)}</div>`

//             q1_array.forEach((element)=>{
//                 if(element.value == e.target.value){
//                     element.remove();
//                 }
//             })

//             q1_card.addEventListener("click",(e)=>{
              

//                 document.getElementById(e.currentTarget.dataset.btn).style = "block"
//                 q1_card.style.display = "none"

//             })

//         }
//     })
// })


const show_btns = Array.from(document.querySelectorAll(".show_btn"))

show_btns.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
        document.getElementById(e.currentTarget.dataset.card).style = "block"
        ele.style.display = "none"
    })
})