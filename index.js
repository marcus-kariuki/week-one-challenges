const button = document.getElementById("submitBtn")

button.addEventListener("click",function(){
    const x = parseFloat(document.getElementById("grade").value)

    if(x > 100){
        const res = "Invalid"
        document.getElementById("answer").textContent = res

    }else if(x => 79){
        const res = "Grade A"
        document.getElementById("answer").textContent = res
    }
    if(x<=78 && x>59){
        const res = "Grade B"
        document.getElementById("answer").textContent = res
    }
    if(x<=59 && x>48){
        const res = "Grade C"
        document.getElementById("answer").textContent = res
    }
    if(x<=48 && x>39){
        const res = "Grade D"
        document.getElementById("answer").textContent = res
    }
    if(x<=39){
        const res = "Grade E"
        document.getElementById("answer").textContent = res
    }
})