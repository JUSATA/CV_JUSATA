import styled from "styled-components";

const LeftSection = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 64px;
  line-height: 1.5rem;
  p {
    margin: 0;
    padding: 0;
    &.strong {
      font-weight: bold;
    }
  }
  h2 {
    margin: 0 0 10px 0;
    font-weight: normal;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 64px;
      height: 1px;
      background: black;
    }
  }
  ul {
    padding-left: 20px;
  }
`;

export default LeftSection;
