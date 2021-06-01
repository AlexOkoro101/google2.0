import Head from "next/head"
import { useRouter } from "next/router";
import Header from "../components/Header"
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({results}) {
    const router = useRouter();

    console.log(results)
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* header */}
            <Header></Header>

            {/* search results */}
            <SearchResults results={results}></SearchResults>
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = true;
    const startInex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`)
    .then(res => res.json());

    //after SSR pass result to client

    return {
        props: {
            results: data
        }
    }
}