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

  const FormLabel = styled.p`
    color: black;
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
  `;

  const FormWrapper = styled.form`
    max-width: 560px;
    min-width: 560px;
    display: flex;
    flex-direction: column;

  `;

  return (
    <FormWrapper>
      <FormLabel>
        Addresses with Amounts
      </FormLabel>
      <DataTable
        columns={columns}
        data={data}
      />
    </FormWrapper>
  )
}
