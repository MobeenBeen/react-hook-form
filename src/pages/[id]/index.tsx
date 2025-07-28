import { useRouter } from "next/router"
export default function lister (){
    const router = useRouter();
    return(
        <div>
            this is to test the dynamic routing {router.query.id}
        </div>
    )
}