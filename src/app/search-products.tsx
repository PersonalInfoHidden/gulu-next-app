import React, { useEffect, useState } from "react";

// This component searches in the database for the most matching product name
// TODO: handle state

const SearchProducts = () => {
    const searchValue = useState<string>("");

    useEffect(() => {
        // insert sql code here
    }, []);

    const handleChangeSearchBar = (event: any) => {};

    return (
        <div>
            <input type="text" name="searchbar" />
        </div>
    );
};

export default SearchProducts;
