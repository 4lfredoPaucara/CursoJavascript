
/**
 * @returns{Promise<Objetct>} quote information
 */
const fetchQuote = async() => {

   const res = await fetch( `https://api.breakingbadquotes.xyz/v1/quotes` );

   const data = await res.json();
   console.log(data[0]);
   
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => {
    document.querySelector('#app-tittle').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';
    // await fetchQuote();

    

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';


    const renderQuote = ( data ) => {

        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );
    }

    //añadir listener

    const renderButton = ( 'click', async () => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote( quote );
    });

    nextQuoteButton.addEventListener('click', renderButton)

    fetchQuote()
    .then( data => renderQuote(data) );
    
}