"use client";

import {
    createClientComponentClient,
    createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/nav-bar";
import { useSearchParams } from "next/navigation";

export interface Product {
    store: string;
    storeId: string;
    productName: string;
    productUrl: string;
    brand: string;
    category: string;
    "price.standardPrice": number;
    "price.discountProcentage": string;
    "price.finalPrice": number;
    imageUrl: string;
    id: number;
}

export default function Page() {
    const searchParams = useSearchParams();
    const hasParam: boolean = searchParams.has("page");
    const [products, setProducts] = useState<Product[] | null>(null);
    const supabase = createClientComponentClient();
    useEffect(() => {
        const getData = async () => {
            const response: PostgrestSingleResponse<any> = await supabase.rpc(
                "get_products",
                { page: 18 }
            );
            const data: Product[] = (await response.data) ?? [];
            setProducts(data);
        };
        getData();
    }, []);

    return (
        <>
            <NavBar />
            <div className="main">
                <div className="content">
                    {products ? (
                        <ProductGrid>
                            {products.map((product) => (
                                <ProductItem
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </ProductGrid>
                    ) : (
                        <div className="flex justify-center items-center flex-col-reverse">
                            <h1 className="text-4xl">Loading</h1>
                            <span className="loader"></span>
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
                .loader {
                    width: 72px;
                    height: 72px;
                    border: 5px solid #fafafa;
                    border-bottom-color: transparent;
                    border-radius: 50%;
                    display: inline-block;
                    box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                }

                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </>
    );
}

function ProductGrid({ children }: { children: ReactNode[] }) {
    return <div className="grid grid-cols-3 gap-6">{children}</div>;
}

function ProductItem({ product }: { product: Product }) {
    return (
        <article className="bg-neutral-400 shadow grid place-items-center p-4 rounded">
            <Image
                src={
                    product.imageUrl !== "no image found"
                        ? product.imageUrl
                        : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                }
                width={250}
                height={250}
                alt="Picture of the author"
                className="border-4 border-neutral-800 bg-white"
            />
            <h1 className="font-bold text-center px-6 ">
                {product.productName}
            </h1>
            {product["price.discountProcentage"] ? (
                <div>{product["price.finalPrice"]} SEK</div>
            ) : (
                <div>
                    {product["price.finalPrice"]} SEK{" "}
                    <span>{product["price.discountProcentage"]}% off</span>
                </div>
            )}
        </article>
    );
}
