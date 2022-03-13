import { Routes, Route, BrowserRouter, Link  } from 'react-router-dom';

import styles from './App.module.css';

import { LandingPage } from './pages/LandingPage';
import { MoviesDetails } from './pages/MoviesDetails';


export function App() {
    return (
        <div>
            <BrowserRouter>
                <header>
                        {/* <img className={styles.logo} src="htEps://img2.freepng.es/20180509/icw/kisspng-film-cinema-logo-5af2add6ebd529.260347231525853654966.jpg" alt="Logo Pagina" /> */}
                        <Link to='/'>
                            <h1 className={styles.title}><p><a href=''> TACHAME LA PELI </a></p></h1>
                        </Link>
                </header>
                <main>
                        <Routes>
                            <Route path='/' element={ <LandingPage/> }/>
                            <Route path='/movies/:movieId' element={ <MoviesDetails/> }/>
                        </Routes>
                </main>
            </BrowserRouter> 
        </div>  
    );
}