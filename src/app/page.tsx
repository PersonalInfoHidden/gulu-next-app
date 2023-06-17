import NavBar from "@/components/nav-bar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function Page() {
    const supabase = createServerComponentClient({ cookies: cookies });
    const {
        data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
    return (
        <div>
            <NavBar />
            {user?.email}
            <main className="main">
                <div className="content">
                    <div className="flex gap flex-col gap-y-8 my-12">
                        <span>
                            <h1 className="text-7xl font-bold py-6 text-red-600">
                                Find The Equip
                            </h1>
                        </span>
                        <div>
                            <div className="flex justify-center flex-col items-center">
                                <div className="block w-full py-5">
                                    <h3 className="font-medium uppercase">
                                        populärast just nu
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-900"></div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium">
                                {"Kategorier".toUpperCase()}
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6">
                                    <h4>Utespelare</h4>
                                    <img
                                        src="https://octopusthrower.com/wp-content/uploads/imagn-images/2017/07/19724569.jpeg"
                                        alt=""
                                        className="aspect-square object-center object-cover shadow"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4>Målvakt</h4>
                                    <img
                                        src="https://images.cdn.yle.fi/image/upload/f_auto,fl_progressive/q_auto/w_4126/w_500/dpr_2/v1675194810/39-106665763d9719ce0d08.jpg"
                                        alt=""
                                        className="aspect-square object-center object-cover shadow"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4>Off ice</h4>
                                    <img
                                        src="https://fox2now.com/wp-content/uploads/sites/14/2020/01/gettyimages-1201780282.jpg"
                                        alt=""
                                        className="aspect-square object-center object-cover shadow"
                                    />
                                </div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Page;
