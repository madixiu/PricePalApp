import { twoDigitTruncator,priceOptimizer,bigNumberOptimizer } from "./numberOptimizer";

export function listingDataOptimizer(data) {
  var dataEl = Object.values(data);
      dataEl.sort((a,b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0))
      for (let item of dataEl){
        item.price = priceOptimizer(item.quotes.USD.price)
        item.market_cap=item.quotes.USD.market_cap
        item.percent_change_24h=item.quotes.USD.percent_change_24h
        item.percent_change_1h=item.quotes.USD.percent_change_1h
        item.percent_change_7d=item.quotes.USD.percent_change_7d
        item.volume_24h=item.quotes.USD.volume_24h
        
        if (item.percent_change_24h != null && item.percent_change_24h !=0)
        item.percent_change_24h=twoDigitTruncator(item.percent_change_24h) 
      
        if (item.percent_change_1h != null && item.percent_change_1h !=0)
        item.percent_change_1h=twoDigitTruncator(item.percent_change_1h)
      
        if (item.percent_change_7d != null && item.percent_change_7d !=0)
        item.percent_change_7d=twoDigitTruncator(item.percent_change_7d)
        delete item["quotes"]
      }
      // dataEl = filterArray(dataEl,filter)
      return dataEl
}
export function filterArray(array, filter) {
  switch (filter) {
    case '100':
      return array.slice(0, 100);
    case '200':
      return array.slice(0, 200);
    case '300':
    default:
      return array;
  }
}
export function itemDataOptimizer(data) {
  // data.price = priceOptimizer(data.price);
  data.market_cap = bigNumberOptimizer(data.market_cap);
  //! cant refer to this because its value starts with number (HAVE TO SOLVE THIS LATAER!)
  // data.24h_volume_usd = bigNumberOptimizer(data.24h_volume_usd);
  if (data.change24h != null && data.change24h !=0)
    data.change24h = twoDigitTruncator(data.change24h)

    if (data.change1h != null && data.change1h !=0)
    data.change1h = twoDigitTruncator(data.change1h)

    if (data.change7d != null && data.change7d !=0)
    data.change7d = twoDigitTruncator(data.change7d)

  return data

}