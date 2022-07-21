import React, { useState, useEffect } from 'react';

export default function Compteur2() {
    const [count, increment] = useIncrement(0, 2);
    const [compteurVisible, toogleCompteur] = useToggle(true)

    // paramètre 1: focntion ) excuter :ex changer le titre
    // entre les 2: fonction paramètre optionnel pour excuter une fonction sur l'élement nexiste plus
    // paramètre 2: [tableau] tableau de valeur à observer
    // la fonction ne s'exécute que si les objets du tableau change
    useEffect(() => { document.title = 'Cpt' + count }, [count])
    
    return (
        <div>
            {compteurVisible ?<button onClick={increment}>Compteur: {count}</button> : <p>Compteur caché</p>}
            <input type="checkbox" checked={compteurVisible} onChange={toogleCompteur}></input>
        </div>
    )
}
function useIncrement(initial, step) {
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(c => c + step);
    }
    return [count, increment]
}
function useToggle(initialValue = true){
    const [value, setValue] = useState(initialValue);
    const toogle = function(){
        setValue(v=>!v)
    }
    return [value, toogle]
}