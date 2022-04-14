import Styled from "styled-components";

const Button = Styled.button`
background: #FFA246;
border: none;
border-radius: 10px;
// box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06), 0px 4px 4px rgba(50, 50, 71, 0.08);
height: ${(props) => props.buttonHeight};
width: ${(props) => props.buttonWidth};
color: #02474C;
font-weight: bold;
font-size: 16px;
line-height: 22px;
cursor:pointer;
padding:16px, 33px, 16px, 33px;
span {
    display: flex;
}
img {
    height: 20px;
    width: 20px;
}
`;

export default Button;