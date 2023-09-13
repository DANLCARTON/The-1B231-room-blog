import { useEffect, useState } from "react"

const useFetch = (url) => {
    
    const [data, updateData] = useState(null);
    const [isPending, updateIsPending] = useState(true);
    const [error, updateError] = useState(null)

    useEffect(() => {

        const abortController = new AbortController(); // perso ça marche très bien sans alors bon mais je le met quand même pour la beauté du sport

        fetch(url, {signal: abortController.signal}).then((res) => {
            if (!res.ok) throw Error("could not fetch the data for that resource")
            return res.json()
        }).then((data) => {
            updateData(data)
            updateIsPending(false)
            updateError(null)
        }).catch((err) => {
            if (err.name === "AbortError") {
                console.log("abort error je sais plus quoi")
            } else {
                updateIsPending(false)
                updateError(err.message)
            }
        })

        return () => abortController.abort()

    }, [url])

    return {data, isPending, error}
}

export default useFetch