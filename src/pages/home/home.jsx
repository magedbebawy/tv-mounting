import img1 from '../../assets/tv3.webp';
import img2 from '../../assets/tv.jpeg';
import img3 from '../../assets/tv2.jpeg';
import Gallery from '../../components/gallery/gallery';
import './home.css';
import Reviews from '../../components/reviews/reviews';
function Home() {
    const images = [
        {
            id: 1,
            url: img1
        },
        {
            id: 2,
            url: img2
        },
        {
            id: 3,
            url: img3
        }
    ];
    return (
        <div className='home'>
            <div className='image'>
                <h2>Securely Mounted, Perfectly Aligned:</h2>
                <h3>Unleash Your TV's Full Potential!</h3>
                <a href="book">Book A Service</a>
            </div>
            <Gallery images={images}/>
            <Reviews />
        </div>
    )
}

export default Home;