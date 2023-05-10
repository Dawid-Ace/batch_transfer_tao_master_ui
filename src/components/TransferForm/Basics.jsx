import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  items-align: center;
`

export const Label = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
  margin: 0px;
`;

export const Switch = styled.p`
  color: ${(props) => props.color || '#899A9A'};
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  text-decoration: underline;
  margin: 0px;
  cursor: pointer;
`

export const FormWrapper = styled.form`
  max-width: 750px;
  min-width: 750px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`;

export const FormInput = styled.div`
  border: solid 1px #B8C9C9;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 16px;
  background-color: white;
  min-height: 100px;
`

export const Comment = styled.div`
  color: #899A9A;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`
export const SendButton = styled.button`
  width: 106px;
  height: 50px;
  background: #000000;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: white;
  margin-top: 120px;
`

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  border-color: red;
  margin-top: 18px;
`

export const ResultListItem = styled.div`
  border: solid 1px #B8C9C9;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 16px;
  background-color: white;
`

export const TransferSuccess = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  
  z-index: 10;

  padding-left:15px;
  padding-right: 30px;

  position: absolute;
  width: 500px;
  height: 40px;
  top: 46px;

  background: #0AA07B;
  border-radius: 4px;

  margin: 0px;
`

export const BlurRect = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 30, 0.3);
  z-index: 10;
`
export const ConnectWallet = styled.button`
  color: black
`