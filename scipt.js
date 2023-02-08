const randomNubmer = Math.floor(Math.random() * 11);
console.log(randomNubmer);
const myBtn = document.querySelector('button').addEventListener('click',checkResult)
let count = 0;


function checkResult(){
    let inp =+document.querySelector('input').value;
    if(count <= 3){
        if(inp===randomNubmer){
            alert('you are right')
            return
        }else{
            alert("you aren't right")
        }
    }else{
        alert('attempts are over')
        return
    }
    count ++
    clueNumber(inp)

}

function clueNumber(inp){
    if(inp>randomNubmer){
        alert('number is less')
    }else{
        alert('number is more')
    }
}