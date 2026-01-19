'use client'

import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter()
    router.replace("/what-we-do")
    return
}
 
export default Home;