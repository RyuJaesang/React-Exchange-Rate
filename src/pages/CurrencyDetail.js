import React, { useEffect, useContext, useState } from 'react';
import { ExchangeRateContext, ExchangeRateContextProvider, } from '../context/ExchangeRateContext';

function CurrencyDetail(props) {
    const exchangeRateContext = useContext(ExchangeRateContext);
    useEffect(()=>{
        console.log(props.match.params); 
    }, []);

    const currencyDetail = exchangeRateContext.getCurrencyDetail(
        props.match.params.currencyCode
    );
    
    console.log('currencyDetail', currencyDetail);
    return (
        <div>
     
         이름: {currencyDetail.cur_nm}
         <br/>
         bkpr: {currencyDetail.bkpr}
         <br/>
         deal_bas_r: {currencyDetail.deal_bas_r}
         <br/>
         kftc_bkpr: {currencyDetail.kftc_bkpr}
         <br/>
         kftc_deal_bas_r: {currencyDetail.kftc_deal_bas_r} 

        </div>
    );
}

export default CurrencyDetail;