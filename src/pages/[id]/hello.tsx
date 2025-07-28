import { useRouter } from "next/router"

export default function app(){
    const router = useRouter();
    return(

        <div>
        this is to test the ids different page called app {router.query.id}
    </div>
    )
}