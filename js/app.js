const partes = [
  {
    astroClasse: "lua",
    astroEmoji: "🌙",
    texto: `Saudações, minha lua.

As coisas não são fáceis… eu ainda tenho muito que aprender.
Mas o que eu sei e o que eu sinto é real.

Eu te amo.
E eu não vou embora só porque a distância existe.`
  },
  {
    astroClasse: "lua",
    astroEmoji: "🌙",
    texto: `Mesmo longe, eu penso em você de um jeito constante.
Como quem acende uma luz baixinha
só pra te lembrar: “eu tô aqui”.

Porque, de alguma forma,
a sua presença completa a minha.`
  },
  {
    astroClasse: "sol",
    astroEmoji: "☀️",
    texto: `Se o mundo parecer pesado,
segura minha mão do jeito que dá.

Eu te apoio.
Eu te escolho.
Eu vou cuidar de você mesmo à distância.

Você me faz querer ser melhor,
e isso também é amor.`
  },
  {
    astroClasse: "sol",
    astroEmoji: "☀️",
    texto: `Eu queria estar aí agora.
Mas enquanto não dá…
eu fico do seu lado em pensamento,
em carinho,
em mensagem,
em presença.

Se eu sou o sol em algum momento,
é porque você é a lua que me acalma.`
  },
  {
    astroClasse: "juntos",
    astroEmoji: "🌙☀️",
    texto: `E quando você olhar pro céu,
lembra disso:

a gente pode estar longe,
mas eu continuo junto.
Você completa quem eu sou.

Eu te amo. Sempre. 🖤`
  }
];

let indice = 0;
let fim = false;
let respondeu = false;

const textoEl = document.getElementById("texto");
const astroEl = document.getElementById("astro");
const btnEl = document.getElementById("btn");

// troca fundo conforme estado
function setFundo(astroClasse) {
  document.body.classList.remove("bg-lua", "bg-sol", "bg-juntos");
  if (astroClasse === "lua") document.body.classList.add("bg-lua");
  if (astroClasse === "sol") document.body.classList.add("bg-sol");
  if (astroClasse === "juntos") document.body.classList.add("bg-juntos");
}

function proximo() {

  // Se terminou e ainda não mostrou a resposta final
  if (fim && !respondeu) {
    respondeu = true;

    textoEl.textContent =
`E se algum dia você duvidar…
lembra disso:

eu ainda estou aqui.
Sempre. 🤍`;

    astroEl.textContent = "🤍";
    astroEl.className = "astro juntos";
    setFundo("juntos");

    btnEl.textContent = "Recomeçar";
    btnEl.classList.remove("final");
    return;
  }

  // Se clicou em Recomeçar
  if (btnEl.textContent === "Recomeçar") {
    indice = 0;
    fim = false;
    respondeu = false;

    btnEl.textContent = "Continuar";
    btnEl.style.opacity = 1;
    btnEl.classList.remove("final");

    // reinicia no começo
    const parte = partes[indice];
    textoEl.textContent = parte.texto;
    astroEl.textContent = parte.astroEmoji;
    astroEl.className = "astro " + parte.astroClasse;
    setFundo(parte.astroClasse);

    indice++;
    return;
  }

  // fluxo normal
  const parte = partes[indice];

  textoEl.textContent = parte.texto;
  astroEl.textContent = parte.astroEmoji;
  astroEl.className = "astro " + parte.astroClasse;
  setFundo(parte.astroClasse);

  indice++;

  if (indice >= partes.length) {
    fim = true;
    btnEl.textContent = "🖤";
    btnEl.classList.add("final");
  }
}
document.body.classList.add("bg-lua");
proximo();
