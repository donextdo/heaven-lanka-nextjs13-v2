import React from 'react';
import arugambay from '../../../assets/Beaches/ListImages/arugambay.jpeg';
import unawatuna from '../../../assets/Beaches/ListImages/unawatuna.jpeg';
import weligama from '../../../assets/Beaches/ListImages/weligama2.jpeg';
import casuarina from '../../../assets/Beaches/ListImages/casuarina.jpeg';
import kabalana from '../../../assets/Beaches/ListImages/kabalana.jpg';
import goyambokka from '../../../assets/Beaches/ListImages/Goyambokka-Sri-Lanka.jpg';
import BeachCard from './BeachCard';


const BeachesList = () => {
    const BeachList = [
        {
            image: arugambay,
            name : 'Arugam Bay',
            location: 'Ampara',
            description: 'Nestled along Sri Lanka’s southeast coast, Arugam Bay beckons with its historic charm and breathtaking Indian Ocean views. Surfers from around the globe flock here for its legendary surf breaks. Beyond the waves, explore local beaches, tranquil lagoons, ancient temples, and the nearby Kumana National Park. Despite the 2004 tsunami’s impact, Arugam Bay has emerged as a vibrant tourist destination.'
        },
        {
            image: unawatuna,
            name : 'Unawatuna',
            location: 'Galle',
            description: 'Unawatuna, a name synonymous with paradise, boasts a banana-shaped golden shoreline kissed by turquoise waters. Sunbeds await sunseekers, while the west end reveals rocky outcrops leading to a hill crowned by a pagoda and a majestic Buddha statue. Unawatuna’s past, shaped by the 2004 tsunami, adds depth to its beauty.'
        },
        {
            image: casuarina,
            name : 'Casuarina Beach',
            location: 'Jaffna',
            description : 'Casuarina Beach, a coastal jewel near Jaffna, cradles white sands beneath a canopy of casuarina trees. Stroll along its 1.5-kilometer stretch, where serenity meets the lapping waves. This pristine beach promises an escape from the ordinary.'
        },
        {
            image: weligama,
            name : 'Weligama',
            location: 'Matara',
            description: 'In this “sandy village,” Weligama unveils Sri Lanka’s longest sandy beach. Aspiring surfers find their rhythm on gentle waves, while sunset enthusiasts revel in the mesmerizing horizon. Weligama invites you to unwind, learn to surf, and immerse yourself in coastal tranquility.'
        },
        {
            image: kabalana,
            name : 'Kabalana Beach',
            location: 'Ahangama',
            description: 'Kabalana Beach, with its soft golden sands, beckons both novice and seasoned surfers. Sun-kissed days unfold in quaint surf shacks, where the ocean’s rhythm harmonizes with your soul. Whether you ride the waves or simply bask in the sun, Kabalana is a coastal haven.'
        },
        {
            image: goyambokka,
            name : 'Goyambokka beach',
            location: 'Tangalle',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptatem omnis sint illo non molestiae sed. Delectus nobis quidem nisi, excepturi quibusdam natus aut ullam placeat ab, itaque quos quae.'
        }
    ];
    return(
        <div className='flex glex-col lg:flex-row flex-wrap gap-5 md:gap-16 justify-center'>
            {BeachList.map((beach,index)=>(
                <BeachCard key={index} beach={beach}/>
            ))}
        </div>
    )
}

export default BeachesList;