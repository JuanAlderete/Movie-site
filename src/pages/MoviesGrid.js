import { useEffect, useState } from "react";
import { MoviesCard } from "../components/MoviesCard";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../components/empty";
import movies from "../components/movies.json";
import styles from './MoviesGrid.module.css';



export function MoviesGrid({ search }) {
    // let movies = [];
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const searchUrl = search 
        ? "/search/movie?query=" + search + "&page=" + page
        : "/discover/movie?page=" + page;

        get(searchUrl).then(data => {
            setMovies(prevMovies => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        });
    }, [search, page]);

    if (!isLoading && movies.length === 0){
        return <Empty />
    }

    return(
        <InfiniteScroll 
        dataLength={movies.length} 
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Spinner />}
        >
            <ul className={styles.moviesGrid}>
                { movies.map((movie) => (
                    <MoviesCard key={movie.id} movie={movie}/>
                ))}
            </ul>
        </InfiniteScroll>
    );
}