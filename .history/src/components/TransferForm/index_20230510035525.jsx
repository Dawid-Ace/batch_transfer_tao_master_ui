import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Title',
    selector: row => row.title,
  },
  {
    name: 'Year',
    selector: row => row.year,
  },
];
const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
]
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


  const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    items-align: center;
  `

  const FormLabel = styled.p`
    color: black;
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    margin: 0px;
  `;

  const UploadSwitch = styled.p`
    color: #899A9A;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    text-decoration: underline;
    margin: 0px;
  `

  const FormWrapper = styled.form`
    max-width: 560px;
    min-width: 560px;
    display: flex;
    flex-direction: column;

    max-height: 400px;
  `;

  const FormInput = styled.div`
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

  return (
    <FormWrapper>
      <FlexWrapper>
        <FormLabel>
          Addresses with Amounts
        </FormLabel>

        <UploadSwitch>
          Upload File
        </UploadSwitch>
      </FlexWrapper>

      <FormInput contentEditable placeholder="Insert address and amount, seperate with comma" />

      <Comment>
        The address and amount are seperated by commas
      </Comment>

      <SendButton>
        Send
      </SendButton>
    </FormWrapper>
  )
}
