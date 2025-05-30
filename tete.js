const texto = `Esse é meu site https://neguin.com
esse aqui não funciona http://invalido..com
esse está imcomplete htp://erro
esse é nosso novo site https://correto.org
`;

const regex = /https?:\/\/[^\s]+/g;
const linksValidos = texto.match(regex);

console.log("links encontrados");
console.log(linksValidos);