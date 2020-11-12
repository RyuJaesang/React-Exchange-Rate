import React, { createContext, useState, useEffect, } from 'react';

const ExchangeRateContextValue = {
    data: [],

}

export const ExchangeRateContext = createContext(ExchangeRateContextValue);

const authkey = 'OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9'


export function ExchangeRateContextProvider(props) {
    const [data, setData] = useState([]);

    function getCurrencyDetail(currencyCode){
      const currencyMatched = data.filter(currency => {
        return currency.cur_unit === currencyCode;
      });

      if (!currencyMatched.length) {
        return false;
      }

      return currencyMatched[0];
    }

    useEffect(async() => {
        fetch(
          `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=${'2020-11-11'}&data=${'AP01'}`)
        .then(
          response=>{
            return response.json()
          }
        ).then(
          responseJSON => {
            console.log('responseJSON: ', responseJSON);
            setData(responseJSON)
          }
        )
      }, []);

      return(
          <ExchangeRateContext.Provider value={{
              data, // => data: data,
              getCurrencyDetail
          }}>
              {props.children}
          </ExchangeRateContext.Provider>
      )



}