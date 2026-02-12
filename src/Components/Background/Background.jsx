import './Background.css'
import Mars from '../../assets/Mars.mp4'
import galaxy from '../../assets/galaxy.jpg'
import galaxy1 from '../../assets/galaxy1.jpg'
import galaxy2 from '../../assets/galaxy2.jpg'

const Background = ({playStatus,heroCount}) => {
    if (playStatus) {
    return (
        <video className='background fade-in' autoPlay loop muted>
            <source src={Mars} type='video/mp4' />
        </video>
    )
}
    else if(heroCount===0)
    {
        return <img src={galaxy} className='background' alt="" />
    }
    else if(heroCount===1) /// another image can be add
    {
        return <img src={galaxy1} className='background' alt="" />
    }
    else if(heroCount===2)
    {
        return <img src={galaxy2} className='background' alt="" />
    }
}

export default Background