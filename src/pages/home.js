import {useQuery} from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {

    const {data : catData, isLoading, isError, refetch} = useQuery({
        queryKey: ["cat"],
        queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    if (isError) {
        return <h1>Ошибка</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return <div>
            <h1>This is home page of {catData?.fact}</h1>
            <button onClick={refetch}>Update data</button>
        </div>
}