
const botaoGerador = document.getElementById("btnGerador");
const idConselho = document.querySelector(".advice-id");
const conselho = document.querySelector(".advice-description");

async function traduzirTexto(texto) {
    const response = await fetch("https://api.mymemory.translated.net/get?q=" + texto + "&langpair=en|pt");
    const data = await response.json();
    return data.responseData.translatedText;
}

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Conselho ${adviceContent.slip.id}`;
    const adviceText = `${adviceContent.slip.advice}`;

    const textoTraduzido = await traduzirTexto(adviceText);
    const idTraduzido = await traduzirTexto(adviceId);
    console.log("id", adviceId );

    

    // const traductionText = await traduzirTexto(adviceText)
    
    idConselho.innerHTML = adviceId;
    conselho.innerHTML = textoTraduzido;
    console.log("adviceContent: ", adviceContent);
}

botaoGerador.addEventListener("click", getAdvice);

//  getAdvice();

