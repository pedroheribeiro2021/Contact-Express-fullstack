import styled from "styled-components";

export const LoginPageStyle = styled.section`

/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */

    form {
        margin-top: 3.5%;
    }

    h3 {
        padding: 5px;
    }

    .eye {
        position: relative;
        left: 75px;
        bottom: 32px;
        cursor: pointer;
        color: var(--color4)
    }

    span {
        padding: 5px;
    }

    button {
        margin: 0 0 10px 0;
    }

    .register-link {
        padding-bottom: 10px;
        color: var(--color1);
        font-weight: 500;
    }

    .register-link:hover {
        color: white;
        transition-delay: 2s;
        transition: 2s background-color;
    }

`