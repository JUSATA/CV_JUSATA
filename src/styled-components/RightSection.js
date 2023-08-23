import styled from "styled-components";

const RightSection = styled.div`
  margin-bottom: 40px;
  
  border-radius: 10px;
  h1 {
    text-align: center;
    margin: 0;
    font-weight: normal;
    font-size: 32px !important;
  }
  h1,
  h2,
  h3 {
    text-align: center;
    margin: 0 0 12px 0;
    position: relative;
    font-weight: normal;
    font-size: 24px;
    &:after {
      content: "";
      width: 160px;
      height: 1px;
      position: absolute;
      bottom: -5px;
      left: calc(50% - 80px);
      background: black;
    }
  }
  .name {
    &:after {
      content: "";
    }
  }
  .title {
    font-size: 18px;
    &:after {
      content: none;
    }
  }
  ul {
    margin: 0 0 15px 0;
    padding: 0 0 0 20px;
  }
  li {
    margin: 0;
    padding: 0;
    p {
      margin: 0;
      padding: 0;
    }
  }
  li li,
  li ul {
    margin-left: 10px;
    padding-left: 0;
  }
  .skills {
    list-style-type: none;
    margin: 30px 0 0 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    .skill {
      width: 22%;
    }
    .bolts {
      margin: 5px 0 0 0;
      padding: 0;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 20px;
      gap: 5px;
      position: relative;
      li {
        width: 10px;
        height: 20px;
        background: rgba(0, 0, 0, 0.32);
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.32);
        &.on {
          background: rgba(0, 215, 30, 1);
          border: 1px solid green;
        }
        &.off {
          border: 1px solid gray;
        }
      }
    }
  }
`;

export default RightSection;
