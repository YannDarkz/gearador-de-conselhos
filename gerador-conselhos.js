alert('olá mundo')

const botaoGerador = document.getElementById("btnGerador");
const idConselho = document.querySelector(".advice-id");
const conselho = document.querySelector(".advice-description");
console.log(idConselho)

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    idConselho.innerHTML = adviceId;
    conselho.innerHTML = adviceText;
}

botaoGerador.addEventListener("click", getAdvice);

 getAdvice();

