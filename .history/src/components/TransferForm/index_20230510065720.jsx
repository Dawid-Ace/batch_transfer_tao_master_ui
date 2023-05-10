import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { DragDrop } from "../DragDrop";

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
  const [isSuccess, setSuccess] = useState(true);

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
    color: ${(props) => props.color || '#899A9A'};
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    text-decoration: underline;
    margin: 0px;
    cursor: pointer;
  `

  const FormWrapper = styled.form`
    max-width: 750px;
    min-width: 750px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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
    margin-top: 120px;
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
  `

  const TransferSuccess = styled.div`
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

  const BlurRect = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 30, 0.3);
    z-index: 10;
  `

  const sendForm =
    (<FormWrapper>
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
          
      }

      <Comment>
        {isInputMode ? 'The address and amount are seperated by commas' : 'Accepted CSV/Excel/Txt'}
      </Comment>

      <ResultWrapper color='red'>
        <FlexWrapper>
          <Label> Addresses with Amounts </Label>
          <Switch color={'red'}>
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
    )

  const transferSuccess = (
    <TransferSuccess>
      TAO transfer successfully
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer" }} onClick={() => setSuccess(false)}>
        <path d="M10.7071 2.70699L7.41408 5.99999L10.7071 9.29299C10.8026 9.38524 10.8788 9.49558 10.9312 9.61759C10.9836 9.73959 11.0112 9.87081 11.0123 10.0036C11.0135 10.1364 10.9882 10.268 10.9379 10.3909C10.8876 10.5138 10.8134 10.6255 10.7195 10.7194C10.6256 10.8133 10.5139 10.8875 10.391 10.9378C10.2681 10.9881 10.1365 11.0134 10.0037 11.0122C9.8709 11.0111 9.73968 10.9835 9.61768 10.9311C9.49567 10.8787 9.38533 10.8025 9.29308 10.707L6.00008 7.41399L2.70708 10.707C2.61483 10.8025 2.50449 10.8787 2.38249 10.9311C2.26048 10.9835 2.12926 11.0111 1.99648 11.0122C1.8637 11.0134 1.73202 10.9881 1.60913 10.9378C1.48623 10.8875 1.37458 10.8133 1.28069 10.7194C1.18679 10.6255 1.11254 10.5138 1.06226 10.3909C1.01198 10.268 0.986677 10.1364 0.987831 10.0036C0.988985 9.87081 1.01657 9.73959 1.06898 9.61759C1.12139 9.49558 1.19757 9.38524 1.29308 9.29299L4.58608 5.99999L1.29308 2.70699C1.19757 2.61474 1.12139 2.5044 1.06898 2.38239C1.01657 2.26039 0.988985 2.12917 0.987831 1.99639C0.986677 1.86361 1.01198 1.73193 1.06226 1.60904C1.11254 1.48614 1.18679 1.37449 1.28069 1.28059C1.37458 1.1867 1.48623 1.11245 1.60913 1.06217C1.73202 1.01189 1.8637 0.986585 1.99648 0.987739C2.12926 0.988893 2.26048 1.01648 2.38249 1.06889C2.50449 1.1213 2.61483 1.19748 2.70708 1.29299L6.00008 4.58599L9.29308 1.29299C9.38533 1.19748 9.49567 1.1213 9.61768 1.06889C9.73968 1.01648 9.8709 0.988893 10.0037 0.987739C10.1365 0.986585 10.2681 1.01189 10.391 1.06217C10.5139 1.11245 10.6256 1.1867 10.7195 1.28059C10.8134 1.37449 10.8876 1.48614 10.9379 1.60904C10.9882 1.73193 11.0135 1.86361 11.0123 1.99639C11.0112 2.12917 10.9836 2.26039 10.9312 2.38239C10.8788 2.5044 10.8026 2.61474 10.7071 2.70699Z" fill="black" />
      </svg>

    </TransferSuccess>
  )

  return (
    isSuccess ? (
      <>
        <BlurRect />
        {transferSuccess}
        {sendForm}
      </>
    )
      :
      sendForm
  )
}
