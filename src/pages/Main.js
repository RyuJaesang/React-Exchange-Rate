import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';


import { ExchangeRateContext } from '../context/ExchangeRateContext';

function Main(props){
    const exchangeRateContext = useContext(ExchangeRateContext);

    useEffect(() => {
        console.log('exchageRateContext.data: ', exchangeRateContext.data);
    }, [exchangeRateContext.data]);

    return(
        <div>
            <div>
                개발중 ㅋ
            </div>
            {exchangeRateContext.data.map((currency, cI) => {
                return (
                <div key={cI}>
                    <Link exact to={`/currency/${currency.cur_unit}`}>
                        {currency.cur_nm}
                    </Link>
                    {/* {currency.cur_nm}({currency.cur_unit}) : {currency.bkpr} */}
                </div>
                
                );
            })}
        </div>
    )
}

export default Main;
