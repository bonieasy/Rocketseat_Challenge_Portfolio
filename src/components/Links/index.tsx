import  { Container, LocalBox, Company, Github, Linkedin, Twitter, Site, Email } from './styles';
import localImg from "../../assets/map-pin.svg"
import companyImg from "../../assets/briefcase.svg"
import gitImg from "../../assets/github.svg"
import linkedinImg from "../../assets/linkedin.svg"
import twitterImg from "../../assets/twitter.svg"
import siteImg from "../../assets/globe.svg"
import emailImg from "../../assets/mail.svg"

export function Links() {
    return (
        <Container>
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

        </Container>
    );
}