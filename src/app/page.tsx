import { supabase } from "@/lib/supabase";

function Page({ countries }: any) {
    console.log(countries);
    return (
        <ul>
            {/* {countries.map((country: any) => (
                <li key={country.id}>{country.name}</li>
            ))} */}
        </ul>
    );
}

export async function getServerSideProps() {
    let { data } = await supabase.from("products").select("id");

    return {
        props: {
            countries: data,
        },
    };
}

export default Page;
