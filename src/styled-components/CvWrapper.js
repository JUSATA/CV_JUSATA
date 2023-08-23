import styled from "styled-components";

const CvWrapper = styled.div`
  padding: 16px;
  min-width: 760px;
  max-width: 760px;
  min-height: 1088px;
  border-radius: 10px;
  max-height: 1088px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  .rodo {
    position: absolute;
    text-align: justify;
    bottom: 0;
    left: 15px;
    width: calc(100% - 60px);
    background: rgba(255, 255, 255, 1);
    font-size: 12px;
    line-height: 1rem;
    padding: 5px;
    border: 1px solid #5a5a5a;
  }
`;

export default CvWrapper;
