var button = document.getElementById("submitBtn-2")

button.addEventListener("click",function(){
    const s = parseFloat(document.getElementById("salary").value)
    const b = parseFloat(document.getElementById("benefits").value)
    const gp = s+b



    const res = "Your Gross Salary is "+gp
    document.getElementById("answer").textContent = res

    var button = document.getElementById("submitBtn-3")
    button.addEventListener("click",function(){
        if(gp<=24000){
            let tax = gp*0.1
            let nhif =gp-750
            const deductions = tax+(gp-nhif)
            const n = gp-deductions
            document.getElementById("answer2").textContent = n

        }
        if(gp>24000 && gp<=40000){
            let tax = gp*0.25
            let nhif =gp-1050
            const deductions = tax+(gp-nhif)
            const n = gp-deductions
            document.getElementById("answer2").textContent = n


        }
        if(gp>40000 && gp<=60000){
            let tax = gp*0.3
            let nhif =gp-1200
            const deductions = tax+(gp-nhif)
            const n = gp-deductions
            document.getElementById("answer2").textContent = n


        }
        if(gp>60000){
            let tax = gp*0.4
            let nhif =gp-1900
            const  deductions = tax+(gp-nhif)
            const n = gp-deductions
            document.getElementById("answer2").textContent = n


        }


})
})

