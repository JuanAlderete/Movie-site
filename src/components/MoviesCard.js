import { Link } from 'react-router-dom';
import styles from './MoviesCard.module.css';
// import placeholder from "../placeholder.jpg"
import { getMovieImg } from '../utils/getMovieImg';

export function MoviesCard( {movie} ){
    // const imageURL = movie.poster_path
    // ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    // : placeholder;

    const imageURL = getMovieImg(movie.poster_path, 500);

    return <li className={styles.movieCard}>
            <Link to={'/movies/' + movie.id}>
                <img width={230} height={345} className={styles.movieImage} src={imageURL} alt={movie.title}/>
                <div> {movie.title} </div>
            </Link>
            </li>
}