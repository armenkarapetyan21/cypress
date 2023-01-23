import './App.css';
import './assets/fonts/PoppinsRegular.ttf'
import Header from "./components/header/header";
import banner from './assets/images/baner.jpg'
import imageBanner1 from './assets/images/imageBanner/1.png';
import imageBanner2 from './assets/images/imageBanner/2.png';
import imageBanner3 from './assets/images/imageBanner/3.png';
import imageBanner4 from './assets/images/imageBanner/4.png';
import imageBanner5 from './assets/images/imageBanner/5.png';
import Footer from "./components/footer/footer";

const images = [
    {
        url: imageBanner1,
        name: '1',
    },
    {
        url: imageBanner2,
        name: '2',
    },
    {
        url: imageBanner3,
        name: '3',
    },
    {
        url: imageBanner4,
        name: '4',
    },
    {
        url: imageBanner5,
        name: '5',
    }
]

function App() {
    return (
        <div className="App">
            <div className={'size'}>
                <Header/>
                <p className={'title'}>Minimalist Room</p>
                <p className={'description'}>It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking at its layout.
                </p>
                <img className={'banner'} src={banner} alt={'banner'}/>
                <section className='articles'>
                    <div className='article'>
                        <p>Project Overview</p>
                        <span>Online learning with us does not interfere with your daily life. because learning can be done
                            anytime and anywhere. Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere. Online learning with us does not
                            interfere with your daily life. because learning can be done anytime and anywhere. </span>
                        <div className='dateDescription'>
                            <span>July 22 - 2022</span>
                            <span>Interior Design - Furnitur</span>
                        </div>
                    </div>
                    <div className='article'>
                        <p>Design Process</p>
                        <span>Online learning with us does not interfere with your daily life. because learning can be done
                            anytime and anywhere. Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere.</span>
                        <span>Online learning with us does not interfere with your daily life. because learning can be done
                            anytime and anywhere. Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere.</span>
                    </div>
                </section>
                <section className="grid">
                    {
                        images.map((image) => {
                            return (
                                <img
                                    key={image.name}
                                    src={image.url}
                                    alt={image.name}/>
                            )
                        })
                    }
                </section>
            </div>
            <section className="subFooter">
                <div className="size subFooterContent">
                    <div className="subFooterInfo">
                        <p>let's discuss making your interior like a dream place!</p>
                    </div>
                    <div className="subFooterBtn">
                        <p>Contact us below to work together to build your amazing interior</p>
                        <button>Contact Us</button>
                    </div>
                </div>
            </section>
            <div className={'size'}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
