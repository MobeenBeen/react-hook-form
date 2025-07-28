import useSWR from 'swr';

export default function data(){
    const url ="https://dummyjson.com/users"
    const fetcher = (url) => fetch(url).then(res => res.json())
    const {data, error, isLoading }= useSWR(url,fetcher)
    if(isLoading){
        return(
        <div>
            its loading
        </div>)
    }
    if(error){
        return(
        <div>
            error in fetching
        </div>)
    }
    return(
        <div>
            {data?.users?.map((user:any)=>(
                <li key={user.id}>{user.firstName}</li>)
            )}
        </div>
    )
}