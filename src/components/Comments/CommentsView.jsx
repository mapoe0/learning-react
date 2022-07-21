import React from "react";
import { useEffect, useState } from "react";
export default function CommentsView() {
    const [loading, comments] = useFecth('https://jsonplaceholder.typicode.com/comments?_limit=10')


    if (loading) {
        return <p>Loading.....</p>
    }
    return (<>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>email</th>
                    <th>Commentaire</th>
                </tr>
            </thead>
            <tbody>
                {comments.map((comment)=>{
                    return <tr key={comment.id}>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>)
}
// this time the hook used for fetch data from the api can be reused, 
// attention ça spam
function useFecth(url){
    const [state,setState] = useState({
        items:[],
        loading: true
    })
    
    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            if (response.ok) {
                console.log("request")
                setState({items: data,loading:false})
            } else {
                console.log(JSON.stringify(data))
                setState({items:[], loading: false})
            }
            
        }
        loadData()
    })
    return [state.loading,state.items]
}
// https://jsonplaceholder.typicode.com/comments?_limit=10