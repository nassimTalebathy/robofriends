import React from 'react';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const randomLetters = (n=3) => {
    var rnd_num = Array(n).fill().map( x => LETTERS.length * Math.random());
    rnd_num = rnd_num.map(Math.round);
    var rnd_let = rnd_num.map(x => LETTERS.substring(x, x+1));
    return rnd_let.join('');
}

const Card = ({name, username, email, id}) => {
    let rnd_letters = randomLetters(14);
    return (
        // br -> border
        // pa -> padding
        // ma -> margin
        // grow -> animation
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2">
            <img src={'https://robohash.org/' + id + '?200x200'} alt=''/>
            <div>
                <h2>{name}</h2>
                <p>{username}: {email}</p>
            </div>
        </div>
    );
}

export default Card;