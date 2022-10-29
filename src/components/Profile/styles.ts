import styled from "styled-components";

export const Container = styled.div`
    width: 348px;
    height: 292px;
    background: var(--background1);
    position: absolute;
    left: 40px;
    top: 40px;
    padding: 32px;
    padding-bottom: 44px;

    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    img {
        border-radius: 100%;
        box-sizing: border-box;
       // position: absolute;
        width: 128px;
        height: 128px;
        /* left: 150px;
        top: 72px; */
        border: 2px solid var(--green);
    }

`;