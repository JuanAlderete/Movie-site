import styles from "./Search.module.css"
import { ImSearch } from 'react-icons/im'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    // const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const query = useQuery();
    const search = query.get("search");

    // useEffect(() => {
    //     setSearchText(search || "");
    // }, [search]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        // navigate("/?search=" + searchText );
    };

    return (
        <form className={styles.SearchContainer} onSubmit={handleSubmit}>
            <div className={styles.SearchBox}>

                <input className={styles.SearchInput} 
                type="text"
                placeholder="Title"
                value={search || ""} 
                onChange={(e) => {
                    const value = e.target.value;
                    // setSearchText(value);
                    navigate("/?search=" + value );
                }}
                />

                <ImSearch size={20} color="black" className={styles.SearchButton}/>

            </div>
        </form>
    )
}