import React, { useEffect, useState } from "react";
import styled from 'styled-components';

export const TransferForm = () => {
  const fetchUserBalance = async () => {
    const res = await api.query.system.account();
    if (res.isEmpty) return 0;
    const { data } = res.toJSON();
    return data.free / UNIT;
  };


  return (
    <>
    </>
  )
}
