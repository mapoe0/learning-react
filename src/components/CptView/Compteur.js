import React,{useState, useEffect} from 'react';

export default function Compteur () {
    const [count, increment] = useIncrement(0,2);
    // paramètre 1: focntion ) excuter :ex changer le titre
    // entre les 2: fonction paramètre optionnel pour excuter une fonction sur l'élement nexiste plus
    // paramètre 2: [tableau] tableau de valeur à observer
    // la fonction ne s'exécute que si les objets du tableau change
    useEffect(()=> {document.title = 'Cpt'+count},[count])
    useEffect(()=>{
        const timer = window.setInterval(()=>{
                increment()
            },1000)
            return function(){clearInterval(timer)}
        })
    return (
    <button onClick={increment}>Compteur: {count}</button>
    )
}
function useIncrement (initial, step){
    const [count,setCount] = useState(initial)
    const increment = () => {
        setCount(c =>c+step);
    }
    return [count, increment]
}