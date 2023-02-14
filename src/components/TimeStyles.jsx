import styled from 'styled-components'
export const TimeContainer = styled.div`
  position: absolute;
  text-align: center;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 100%;
  max-width: 700px;
`
export const TimeText = styled.p`
  font-size: 7rem;
  font-weight: 500;
  margin: 0;
  padding: 0;

  @media screen and (max-width:600px) {
    font-size: 5rem;
  }
`
export const Greeting = styled.p`
  font-size: 3rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  
  @media screen and (max-width:600px) {
    font-size: 2rem;
  }
`
