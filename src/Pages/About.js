import { useState, useEffect } from 'react';

const About = (props) => {
    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        const response = await fetch('./about.json');
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        getAboutData()
    }, []);

    const loaded = () => (
        <div className="content">
            <div><h2>{about.name}</h2></div>
            <div><h3 style={{color:'#32dfa2'}}>{about.email}</h3></div>
            <div><p>{about.bio}</p></div>
        </div>
    );

    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;