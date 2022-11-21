import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;    

    .profile-photo {
        border-radius: 100%;
        box-sizing: border-box;
        width: 128px;
        height: 128px;
        border: 2px solid var(--green);
    }
`;
export const Profile = styled.div`
    width: 348px;
    height: 292px;
    background: var(--background1);
    position: static;
    padding: 32px;
    padding-bottom: 44px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

export const Links = styled.div`
    width: 348px;
    height: 348px;
    background: var(--background1);
    position: block;
    left: 40px;
    top: 362px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 32px;
`;

export const LocalBox = styled.div `
    display: flex;
    align-content: flex-start;
    gap: 20px;
    padding-bottom: 20px;
`;

export const Company = styled.div `
    display: flex;
    align-content: flex-start;
    gap: 20px;
    padding-bottom: 20px;
`;

export const Github = styled.div `
    display: flex;
    align-content: flex-start;
    gap: 20px;
    padding-bottom: 20px;
`;

export const Linkedin = styled.div `
    display: flex;
    align-content: flex-start;
    gap: 20px;
    padding-bottom: 20px;
`;

export const Twitter = styled.div`
    display: flex;
    align-content: flex-start;
    gap: 20px;
    padding-bottom: 20px;
`;

export const Site = styled.div`
    display: flex;
    align-content: flex-start;
    gap: 20px;
    padding-bottom: 20px;
`;

export const Email = styled.div `
    display: flex;
    align-content: flex-start;
    gap: 20px;
`;
export const Tech = styled.div`
    width: 348px;
    height: 208px;
    background: var(--background1);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 30px 20px;
`;
export const Experiencies = styled.div`
    width: 348px;
    height: 349px;
    background: var(--background1);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 30px 20px; 
`;