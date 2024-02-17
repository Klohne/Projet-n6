import Banner from '../components/banner/Banner'
import Gallery from '../components/gallery/Gallery'
import '../styles/Home.css'


function Home() {
    return (
        <div className="home-wrapper">
            <Banner />
            <Gallery />
        </div>
    )
}

export default Home