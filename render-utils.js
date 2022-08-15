export function renderHack(hack) {
    const lifeHackDiv = document.createElement('div');

    const containerDiv = document.createElement('div');
    const img = document.createElement('img');
    const titleEl = document.createElement('h2');

    const quotesDiv = document.createElement('div');
    const blockquoteEl = document.createElement('blockquote');
    const quoteOneEl = document.createElement('p');
    const citationOneEl = document.createElement('p');
    const quoteTwoEl = document.createElement('p');
    const citationTwoEl = document.createElement('p');

    const articleCopyEl = document.createElement('p');
    const articleCopyTwoEl = document.createElement('p');
    const articleCopyThreeEl = document.createElement('p');
    const articleCopyFourEl = document.createElement('p');
    const resourcesDiv = document.createElement('div');
    const resourceOneEl = document.createElement('a');
    const resourceTwoEl = document.createElement('a');

    lifeHackDiv.classList.add('life-hack');
    containerDiv.classList.add('container');
    quotesDiv.classList.add('quotes');
    quoteOneEl.classList.add('quote-one');
    citationOneEl.classList.add('citation-one');
    quoteTwoEl.classList.add('quote-two');
    citationTwoEl.classList.add('citation-two');
    articleCopyEl.classList.add('article-copy');
    articleCopyTwoEl.classList.add('article-copy');
    articleCopyThreeEl.classList.add('article-copy');
    articleCopyFourEl.classList.add('article-copy');
    resourcesDiv.classList.add('resources');

    img.src = `./assets/${hack.keyword}.jpg`;
    titleEl.textContent = hack.title;

    resourceOneEl.href = hack.url_one;
    resourceOneEl.target = '_blank';
    resourceTwoEl.href = hack.url_two;
    resourceTwoEl.target = '_blank';

    quoteOneEl.textContent = hack.quote_one;
    citationOneEl.textContent = hack.citation_one;
    quoteTwoEl.textContent = hack.quote_two;
    citationTwoEl.textContent = hack.citation_two;

    articleCopyEl.textContent = hack.article_copy;
    articleCopyTwoEl.textContent = hack.article_copy_two;
    articleCopyThreeEl.textContent = hack.article_copy_three;
    articleCopyFourEl.textContent = hack.article_copy_four;

    resourceOneEl.textContent = hack.resource_one;
    resourceTwoEl.textContent = hack.resource_two;

    containerDiv.append(img, titleEl);

    blockquoteEl.append(quoteOneEl, citationOneEl, quoteTwoEl, citationTwoEl);
    quotesDiv.append(blockquoteEl);

    resourcesDiv.append(resourceOneEl, resourceTwoEl);

    lifeHackDiv.append(containerDiv, quotesDiv, articleCopyEl, articleCopyTwoEl, articleCopyThreeEl, articleCopyFourEl, resourcesDiv);

    return lifeHackDiv;
}
