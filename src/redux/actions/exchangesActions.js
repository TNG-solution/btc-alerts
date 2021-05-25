import {
  GET_EXCHANGES,
  GET_EXCHANGES_ERROR,
  UI_LOADING
} from '../types/index';

import Axios from 'axios';

const getPrice = (exchange) => {
  let price = 0;

  exchange.tickers.forEach(item => {
    if(item.base === "BTC" && item.target === "USDT"){
      price = item.last;
    }
  })

  return price;
}

const getPriceBitso = (exchange) => {
  let price = 0;

  exchange.tickers.forEach(item => {
    if(item.base === "BTC" && item.target === "USD"){
      price = item.last;
    }
  })

  return price;
}

const addExchanges = (binance, bitso, coinbase, crypto) => {
  let exchanges = [];
  
  let binanceInfo = {
    name: binance.name,
    url: binance.url,
    price: getPrice(binance),
    image: binance.image,
    // bg: '#12161C',
    bg: '#040703',
    color: '#FFFFFF'
  };

  let bitsoInfo = {
    name: bitso.name,
    url: bitso.url,
    price: getPriceBitso(bitso),
    image: bitso.image
  };

  let coinbaseInfo = {
    name: coinbase.name,
    url: coinbase.url,
    price: getPrice(coinbase),
    image: coinbase.image,
    // bg: '#56B4FC',
    // bg: '#0561c1',
    bg: '#075AB5',
    color: '#FFFFFF'
  };

  let cryptoInfo = {
    name: crypto.name,
    url: crypto.url,
    price: getPrice(crypto),
    image: crypto.image,
    bg: '#022043',
    color: '#FFFFFF'
  };

  exchanges.push(binanceInfo, bitsoInfo, coinbaseInfo, cryptoInfo);

  return exchanges;
}

export const get_exchanges = () => dispatch => {
  dispatch({
    type: UI_LOADING,
    payload: true
  });

  let binance = 'https://api.coingecko.com/api/v3/exchanges/binance';
  let bitso = 'https://api.coingecko.com/api/v3/exchanges/bitso';
  let coinbase = 'https://api.coingecko.com/api/v3/exchanges/gdax';
  let crypto = 'https://api.coingecko.com/api/v3/exchanges/crypto_com';

  const requestBinance = Axios.get(binance);
  const requestBitso = Axios.get(bitso);
  const requestCoinbase = Axios.get(coinbase);
  const requestCrypto = Axios.get(crypto);

  Axios.all([requestBinance, requestBitso, requestCoinbase, requestCrypto]).then(Axios.spread((...res) => {
    const responseBinance = res[0];
    const responseBitso = res[1];
    const responesCoinbase = res[2];
    const responesCrypto = res[3];

    let exchanges = addExchanges(responseBinance.data, responseBitso.data, responesCoinbase.data, responesCrypto.data);

    dispatch({
      type: GET_EXCHANGES,
      payload: exchanges
    });
  })).catch(err => {
    // console.log(err);
    dispatch({
      type: GET_EXCHANGES_ERROR,
      payload: err.message
    });
  })
}
