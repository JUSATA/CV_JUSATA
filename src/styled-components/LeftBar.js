import styled from "styled-components";

const LeftBar = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(112deg,rgb(182 182 182) 0%,rgb(0 0 0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 15px;
  box-sizing: border-box;
  color: white;
  img {
    width: 80%;
    margin: 0 auto 45px auto;
    height: auto;
    border-radius: 99%;
    border: 1px solid #5a5a5a;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default LeftBar;
