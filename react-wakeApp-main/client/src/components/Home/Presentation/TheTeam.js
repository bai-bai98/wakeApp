import dahanPic from './headPics/dahan.jpg'
import aviadPic from './headPics/aviad.jpg'
import hendelPic from './headPics/hendel.jpg'
import goldaPic from './headPics/golda.jpg'
import davidPic from './headPics/david.png'
import ozPic from './headPics/oz.jpg'
import baileyPic from './headPics/bailey.jpg'
import { Paper } from '@mui/material'

const team = [
    {
        name: "Benhamin Dahan",
        picture: dahanPic,
        role: "Data Scientist",
    },
    {
        name: "Benjamin Hendel",
        picture: hendelPic,
        role: "Data Scientist",
    },

    {
        name: "Aviad Schmuel",
        picture: aviadPic,
        role: "Full Stack",
    },
    {
        name: "Golda Hutchison  ",
        picture: goldaPic,
        role: "Full Stack",
    },
    {
        name: "Bailey",
        picture: baileyPic,
        role: "Full Stack",
    },

    {
        name: "Oz",
        picture: ozPic,
        role: "Full Stack",
    },

    {
        name: "David Frischer",
        picture: davidPic,
        role: "Full Stack",
    },



]

const TheTeam = () => {
    return (

        <>
            <h2>The Team:</h2>
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center" }}>

                {team.map((person) => (
                    <Paper elevation={5} sx={{ marginTop: 2, marginRight: 2 }}>
                        <div style={{ display: 'flex', width: 300, alignItems: 'center', justifyContent: 'space-evenly', padding: '10px' }}>
                            <div>
                                <img style={{ borderRadius: 100 }} src={person.picture} alt="head" width="80" />
                            </div>
                            <div>
                                <p>{person.name}</p>
                                <p>{person.role}</p>
                            </div>
                        </div>
                    </Paper>
                ))}
            </div>
        </>

    );
}

export default TheTeam;