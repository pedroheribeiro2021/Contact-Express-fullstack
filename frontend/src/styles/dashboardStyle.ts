import styled from "styled-components";


export const DashboardStyle = styled.section`

    .add-icon {
        padding: 10px;
        height: 20px;
        border-radius: 8px;
        cursor: pointer;
        position: relative;
        bottom: 130px;
        width: 50px;
        color: var(--color4);
    }

    .add-icon:hover {
        background-color: var(--color4);
        color: white;
        transition-delay: 2s;
        transition: 2s background-color;
    }

    .logout {
        position: relative;
        left: 1350px;
        bottom: 150px;
        width: 50px;
    }

    .apresentation {
        width: 40%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 15px;

        h3 {
            font-size: 70px;
            color: var(--color3);
        }
    }

    .contacts {
        text-align: center;
        width: 60%;
        margin: 0 auto;

        .contacts-title {
            font-size: 40px;
            color: var(--color3);
        }
    }

    ul {
        height: 40vh;
        opacity: 0.85;
        padding-top: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        overflow-x: auto;
    }

    ul::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }

    ul::-webkit-scrollbar-track {
        background: transparent;
        padding: 2px;
        }

    ul::-webkit-scrollbar-thumb {
        background-color: var(--color1);
    }

    li {
        display: flex;
        align-items: center;
        width: 85%;
        /* margin-left: 150px; */
        background-color: var(--color2);
        border-radius: 5px;

        h3 {
            padding: 35px;
        }

        .icon {
            cursor: pointer;
            padding: 15px;
            height: 20px;
            width: 20px;
            color: var(--color4);
        }
    }

`