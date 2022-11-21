import  { Container, Profile, Links, LocalBox, Company, Github, Linkedin, Twitter, Site, Email, Tech, Experiencies } from './styles';
import localImg from "../../assets/map-pin.svg"
import companyImg from "../../assets/briefcase.svg"
import gitImg from "../../assets/github.svg"
import linkedinImg from "../../assets/linkedin.svg"
import twitterImg from "../../assets/twitter.svg"
import siteImg from "../../assets/globe.svg"
import emailImg from "../../assets/mail.svg"

export function Left() {
    return (
        <Container>
            <Profile>
                <img src="https://avatars.githubusercontent.com/u/23294397?v=4" alt="profile-photo" className='profile-photo' />
                <h1>Ariele Bonifacio</h1>
                <p>Front-End Developer</p>
            </Profile>

            <Links>
                <LocalBox>
                    <img src={localImg} alt="local-icon"/>
                    <p>Brazil</p>
                </LocalBox>

                <Company>
                    <img src={companyImg} alt="company-icon"/>
                    <p>Rocketseat</p>
                </Company>

                <Github>
                    <img src={gitImg} alt="github-icon"/>
                    <p>Github</p>
                </Github>

                <Linkedin>
                    <img src={linkedinImg} alt="linkedin-icon"/>
                    <p>Linkedin</p>
                </Linkedin>

                <Twitter>
                    <img src={twitterImg} alt="twitter-icon"/>
                    <p>Twitter</p>
                </Twitter>

                <Site>
                    <img src={siteImg} alt="globe-icon"/>
                    <p>site</p>
                </Site>

                <Email>
                    <img src={emailImg} alt="email-icon"/>
                    <p>email</p>
                </Email>
            </Links>
                <Tech>
                    <h1>Tecnologias</h1>
                </Tech>
                <Experiencies>
                    <h1>Experiencia</h1>
                </Experiencies>
        </Container>
    );
}