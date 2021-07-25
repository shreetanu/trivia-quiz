// Example to use query


import { useRouter } from 'next/router'

function testnew() {

    const router = useRouter();
    return (
        <h1>{router.query.api}</h1>
    )
}

export default testnew;