import React, { useEffect, useState } from "react";
import styled from 'styled-components';

export const TransferForm = () => {
  const fetchUserBalance = async address => {
    const res = await api.query.system.account(address);
    if (res.isEmpty) return 0;
    const { data } = res.toJSON();
    return data.free / UNIT;
  };


  return (
    <>
    </>
  )
}
