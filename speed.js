const button = document.getElementById("submitBtn-1")

button.addEventListener("click",function(){
    const x = parseFloat(document.getElementById("speed").value)
  

    if(x <= 70){
        const res = "Speed is OK"
        document.getElementById("answer").textContent = res
    }
    if(x>70){
        const dp = (x)*0.05
        const res = "Your demerit points are "+ dp
        document.getElementById("answer").textContent = res
        if(dp>12){
            const res = "License suspended"
            document.getElementById("answer").textContent = res
        }

    }

})