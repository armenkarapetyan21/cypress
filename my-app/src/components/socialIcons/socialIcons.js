import React from 'react';
import youtube from '../../assets/images/socialIcons/youtube.png';
import tiktok from '../../assets/images/socialIcons/tiktok.png';
import instagram from '../../assets/images/socialIcons/instagram.png';
import facebook from '../../assets/images/socialIcons/facebook.png';

const socialIcons = [
    {
        url: facebook,
        name: 'facebook',
    },
    {
        url: instagram,
        name: 'instagram',
    },
    {
        url: tiktok,
        name: 'tiktok',
    },
    {
        url: youtube,
        name: 'youtube',
    },
]

const SocialIcons = () => {
    return (
        <div className='socialIconsContainer'>
            <p>Follow us On</p>
            <div className='socialIconsContent'>
                {
                    socialIcons.map(icon =>{
                        return (
                            <div key={icon.name} className='socialIcons'>
                                <img src={icon.url} alt={icon.name}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SocialIcons;
