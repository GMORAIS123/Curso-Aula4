const posts = [

{
 title:'Google Chrome',
content: 
"O Google Chrome, simplesmente conhecido como Chrome, é um navegador multiplataforma desenvolvido e criado pelo Google. Foi lançado pela primeira vez em 2008 para o sistema operacional Microsoft Windows construído com componentes de software livre do WebKit da Apple e Firefox da Mozilla.",

},
{
 title: 'mozilla Firefox',
 content: 
 "Mozilla Firefox, ou simplesmente Firefox, é um navegador gratuito e de código aberto desenvolvido pela Mozilla Foundation e sua subsidiária, a Mozilla Corporation. Ele usa o mecanismo de renderização Gecko para exibir páginas da web, que implementa os padrões da web atuais e antecipados.",

},

{
    title: 'Microsof Edge',
    content: 
    "O Microsoft Edge é um navegador da Web proprietário e multiplataforma criado pela Microsoft. Foi lançado pela primeira vez em 2015 como parte do Windows 10 e Xbox One e posteriormente portado para outras plataformas como um fork do projeto de código aberto Chromium do Google: Android e iOS, macOS, versões mais antigas do Windows e, mais recentemente, Linux.",
   
   },
   

];

const wrapper = document.getElementById('posts');

for (var i=0; i<posts.length; i++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);
    
    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);
    
    wrapper.appendChild(article);
}



