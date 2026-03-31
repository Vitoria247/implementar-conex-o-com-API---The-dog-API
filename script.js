const url = "https://api.thedogapi.com/v1/images/search";

const botao = document.getElementById("btnDog");
const status = document.getElementById("status");
const img = document.getElementById("dogImg");

botao.addEventListener("click", buscarDog);

async function buscarDog() {
    status.innerText = "Carregando...";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const data = await response.json();

        img.src = data[0].url;

        status.innerText = "Aqui está seu cachorro 🐾";

    } catch (erro) {
        status.innerText = "Erro ao carregar ❌";
        console.error(erro);
    }
}