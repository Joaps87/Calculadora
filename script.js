
function calcular(event){
    event.preventDefault();

    let etanolInput = document.getElementById("etanol").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("cont_result");
    let resultado = document.getElementById("resultado");

    let etanolSpan = document.getElementById("result_etanol");
    let gasolinaSpan = document.getElementById("result_gasolina");
   

    let calculo = (etanolInput / gasolinaInput);

    if(calculo < 0.7){
        resultado.innerHTML = "Compensa Etanol";
        
    }else{
        resultado.innerHTML = "Compensa Gasolina";
    }


    etanolSpan.innerHTML = " etanol R$ " + etanolInput;
    gasolinaSpan.innerHTML = " gasolina R$ " + gasolinaInput;
    
    contentResult.classList.remove("hide")

    


}
