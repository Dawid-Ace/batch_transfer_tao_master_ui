import React, { useEffect, useState } from "react";
import styled from 'styled-components';
export const TransferForm = () => {
  /*
  const fetchUserBalance = async address => {
    const res = await api.query.system.account(address);
    if (res.isEmpty) return 0;
    const { data } = res.toJSON();
    return data.free / UNIT;
  };

  const fetchAndSetUserBalance = async () => {
    const _balance = await fetchUserBalance(currentAccount.address);
    setBalance(_balance);
  };

  const getFromAccount = async () => {
    const {
      address,
      meta: { source, isInjected }
    } = currentAccount;

    if (!isInjected) {
      return [currentAccount];
    }

    // currentAccount is injected from polkadot-JS extension, need to return the addr and signer object.
    // ref: https://polkadot.js.org/docs/extension/cookbook#sign-and-send-a-transaction
    const injector = await web3FromSource(source);
    return [address, { signer: injector.signer }];
  };

  const txResHandler = ({ status }) => {
    setTxStatus({
      visible: true,
      ...(status.isFinalized
        ? { type: 'success', message: 'Success' }
        : { type: 'info', message: `Current transaction status: ${status.type}` })
    });
    if (status.isFinalized) fetchInfo();
  };

  const txErrHandler = err => {
    setTxStatus({ visible: true, type: 'error', message: `😞 Transaction Failed: ${err.toString()}` });
  };

  const submitTx = async tx => {
    setPending(true);
    const fromAccount = await getFromAccount();
    tx.signAndSend(...fromAccount, txResHandler)
      .catch(txErrHandler)
      .finally(() => setPending(false));
  };

  const onUnstake = () => {
    submitTx(api.tx.subtensorModule.removeStake(HOTKEY, Math.floor(amount * UNIT)));
  };
  */

  const [inputMode, setInputMode] = useState('input');
  const isInputMode = inputMode === 'input';

  const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    items-align: center;
  `

  const Label = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    margin: 0px;
  `;

  const Switch = styled.p`
    color: ${(props) => (props.alert === true ? 'red' : '#899A9A')};
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    text-decoration: underline;
    margin: 0px;
    cursor: pointer;
  `

  const FormWrapper = styled.form`
    max-width: 560px;
    min-width: 560px;
    display: flex;
    flex-direction: column;

    max-height: 360px;
    min-height: 360px;
    position: relative;
  `;

  const FormInput = styled.div`
    border: solid 1px #B8C9C9;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 16px;
    background-color: white;
    min-height: 100px;
  `

  const DragAndDrop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 17px;


    cursor: pointer;    
    border: solid 1px #B8C9C9;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 20px;
    background-color: white;
    min-height: 100px;
  `

  const Comment = styled.div`
    color: #899A9A;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
  `
  const SendButton = styled.button`
    width: 106px;
    height: 50px;
    background: #000000;
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: white;
    position: absolute;
    bottom: 0px;
  `

  const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.color};
    border-color: red;
    margin-top: 18px;
 `

  const ResultListItem = styled.div`
    border: solid 1px #B8C9C9;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 16px;
    background-color: white;
    min-height: 50px;
  `

  return (
    <>
      <FormWrapper>
        <FlexWrapper>
          <Label> Addresses with Amounts </Label>

          <Switch onClick={() =>
            setInputMode(prev => prev === 'input' ? 'upload' : 'input')
          }>
            {isInputMode ? 'Upload File' : 'Insert Manually'}
          </Switch>
        </FlexWrapper>

        {
          isInputMode ?
            <FormInput contentEditable placeholder="Insert address and amount, seperate with comma" />
            :
            <DragAndDrop>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 18H17C17.2652 18 17.5196 18.1054 17.7071 18.2929C17.8946 18.4804 18 18.7348 18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19C0 18.7348 0.105357 18.4804 0.292893 18.2929C0.48043 18.1054 0.734784 18 1 18ZM10 15V3.414L12.293 5.707C12.4816 5.88915 12.7342 5.98995 12.9964 5.98767C13.2586 5.98539 13.5094 5.88022 13.6948 5.69482C13.8802 5.50941 13.9854 5.2586 13.9877 4.9964C13.99 4.7342 13.8892 4.4816 13.707 4.293L9.707 0.292997C9.6139 0.200353 9.50347 0.126956 9.382 0.0769973C9.26106 0.0261718 9.13119 -7.62939e-06 9 -7.62939e-06C8.86881 -7.62939e-06 8.73894 0.0261718 8.618 0.0769973C8.49653 0.126956 8.3861 0.200353 8.293 0.292997L4.293 4.293C4.19749 4.38524 4.12131 4.49559 4.0689 4.61759C4.01649 4.7396 3.9889 4.87082 3.98775 5.0036C3.9866 5.13638 4.0119 5.26805 4.06218 5.39095C4.11246 5.51385 4.18671 5.6255 4.2806 5.71939C4.3745 5.81329 4.48615 5.88754 4.60905 5.93782C4.73194 5.9881 4.86362 6.0134 4.9964 6.01225C5.12918 6.01109 5.2604 5.98351 5.3824 5.9311C5.50441 5.87869 5.61475 5.80251 5.707 5.707L8 3.414V15C8 15.2652 8.10536 15.5196 8.29289 15.7071C8.48043 15.8946 8.73478 16 9 16C9.26522 16 9.51957 15.8946 9.70711 15.7071C9.89464 15.5196 10 15.2652 10 15Z" fill="#899A9A" />
              </svg>
              <Comment>
                Drop your files or click to upload
              </Comment>
            </DragAndDrop>
        }

        <Comment>
          {isInputMode ? 'The address and amount are seperated by commas' : 'Accepted CSV/Excel/Txt'}
        </Comment>

        <ResultWrapper color='red'>
          <FlexWrapper>
            <Label> Addresses with Amounts </Label>
            <Switch alert={true}>
              Delete Item
            </Switch>
          </FlexWrapper>

          <ResultListItem>
            Line 1 : 5fffffffffffffffffffffffffffffffffffffffffffffffffffff is a invalid wallet address, and amount
          </ResultListItem>
        </ResultWrapper>

        <SendButton>
          Send
        </SendButton>
      </FormWrapper>
    </>
  )
}
