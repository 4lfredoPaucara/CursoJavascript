import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {      
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = ( hero1, hero2 ) => {
        element.innerHTML = `${hero1.name} - ${hero2.name}`
        console.log(renderTwoHeroes);
    }

    const renderError = ( error ) => {
        element.innerHTML = `
        <p style="color: red;">Error: ${ error }</p>
            <h3>${ error }</h3>
        `
    }

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f2343e37870b91ef1';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeroes( hero1, hero2 ) )
    .catch( renderError );
    
    //!FORMA 2
    //let hero1;
    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 => {
    //         renderTwoHeroes(hero1, hero2);
    //     })
    //     .catch( renderError );
    
    //!FORMA 1
    // findHero( id1 )
    //     .then( (hero1) => {
    //         findHero( id2 )
    //         .then( hero2  =>{
    //             renderTwoHeroes( hero1, hero2 )
    //         })
    //     .catch ( renderError );
    //     })
    //     .catch ( renderError );

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {
    
    return new Promise( (resolve, reject ) => {
        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve ( hero );
            return;
        }

        reject(`Hero with id ${ id } not found`);
                    
    } );

    return promise;
    
}