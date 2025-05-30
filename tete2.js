const texto = `Esse é meu site https://neguin.com
esse aqui não funciona http://invalido..com
esse está imcomplete htp://erro
esse é nosso novo site https://correto.org
veja tambem https://www.ingresso.com/filmes?city=curitiba&partnership=home&target=em-breve&page=94`;

function extrairLinksValidos(texto){
    const possiveislinks = texto.match(/https?:\/\/[^\s]+/gi) || [];

}
