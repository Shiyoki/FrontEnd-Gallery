import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Carousell(){
    return(
<AwesomeSlider>
    <div className="h-20" data-src="https://wallpapercave.com/wp/wp5106253.jpg"></div>
    <div className="h-20" data-src="https://wallpapercave.com/wp/wp5167395.jpg"></div>
    <div className="h-20" data-src="https://wallpapercave.com/wp/wp5167468.png"></div>
</AwesomeSlider>
    )

}