import React from 'react';
import dambulla from '../../../assets/HistoricalMarvels/HistoricalList/dambulla.png';
import Sigiriya from '../../../assets/HistoricalMarvels/HistoricalList/sigiriya.png';
import kandy from '../../../assets/HistoricalMarvels/HistoricalList/kandy.png';
import Yapahuwa from '../../../assets/HistoricalMarvels/HistoricalList/yapahuwa.png';
import Anuradhapura from '../../../assets/HistoricalMarvels/HistoricalList/anuradhapura.png';
import Galle from '../../../assets/HistoricalMarvels/HistoricalList/galle.png';
import HistoricalCard from './HistoricalCard';


const HistoricleList = () => {
    const BeachList = [
        {
            image: dambulla,
            name : 'Dambulla Cave Temple',
            location: 'Dambulla',
            description: "The Dambulla Cave Temple is a historic Buddhist complex in Sri Lanka, featuring over 150 Buddha statues and murals, dating back to the 1st century BCE. It's celebrated for its heritage and is a UNESCO World Heritage Site."
        },
        {
            image: Sigiriya,
            name : 'Sigiriya',
            location: 'Sigiriya',
            description: "Sigiriya is a majestic rock fortress and UNESCO World Heritage Site in Sri Lanka, famed for its Lion's Gate, frescoes, and gardens. Built by King Kasyapa I, it reflects the grandeur of ancient Sri Lankan architecture."
        },
        {
            image: Yapahuwa,
            name : 'Yapahuwa Rock Fortress',
            location: 'Yapahuwa',
            description : 'Yapahuwa Rock Fortress is a historic site in Sri Lanka, perched on a granite rock, known for its medieval palace ruins and strategic location. It offers insights into the past and panoramic views of the surroundings.'
        },
        {
            image: kandy,
            name : 'Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)',
            location: 'Kandy',
            description: "The Temple of the Sacred Tooth Relic in Kandy is a pivotal Buddhist site, housing the Buddha's tooth relic. It's a spiritual and cultural hub, adorned with Kandyan architecture, offering a tranquil and enriching experience."
        },
        {
            image: Anuradhapura,
            name : 'Anuradhapura',
            location: 'Anuradhapura',
            description: "Anuradhapura is a historic marvel in Sri Lanka, celebrated for its ancient stupas, palaces, and advanced irrigation. It's one of the oldest inhabited cities, reflecting a glorious past and spiritual depth."
        },
        {
            image: Galle,
            name : 'Galle Fort',
            location: 'Galle',
            description: "Galle Fort in Sri Lanka is a historical treasure, reflecting Portuguese and Dutch influences. As a UNESCO site, it offers a journey through colonial history within its charming old town."
        }
    ];
    return(
        <div className='flex glex-col lg:flex-row flex-wrap gap-5 md:gap-16 justify-center'>
            {BeachList.map((beach,index)=>(
                <HistoricalCard key={index} beach={beach}/>
            ))}
        </div>
    )
}

export default HistoricleList;