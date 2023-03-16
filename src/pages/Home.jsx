import { Link } from "react-router-dom";
import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <h2>Trending Movies</h2>
                    <Link to='/movie'>
                        <OutlineButton className="small">
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.movie} type={movieType.popular} />
                <div className="section mb-3">
                    <h2>Top Rated Movies</h2>
                    <Link to='/movie'>
                        <OutlineButton className="small">
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.movie} type={movieType.top_rated} />
                <div className="section mb-3">
                    <h2>Trending TV Series</h2>
                    <Link to='/movie'>
                        <OutlineButton className="small">
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.tv} type={tvType.popular} />
                <div className="section mb-3">
                    <h2>Top Rated TV Series</h2>
                    <Link to='/movie'>
                        <OutlineButton className="small">
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.tv} type={tvType.top_rated} />
            </div>
        </>
    )
}

export default Home