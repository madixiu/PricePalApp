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
      return dataEl
}
export function itemDataOptimizer(data) {
  // var data = Object.values(data)
  data = data[0]
  data.price_usd = priceOptimizer(data.price_usd);
  data.market_cap_usd = bigNumberOptimizer(data.market_cap_usd);
  //! cant refer to this because its value starts with number (HAVE TO SOLVE THIS LATAER!)
  // data.24h_volume_usd = bigNumberOptimizer(data.24h_volume_usd);
  if (data.percent_change_24h != null && data.percent_change_24h !=0)
    data.percent_change_24h = twoDigitTruncator(data.percent_change_24h)

    if (data.percent_change_1h != null && data.percent_change_1h !=0)
    data.percent_change_1h = twoDigitTruncator(data.percent_change_1h)

    if (data.percent_change_7d != null && data.percent_change_7d !=0)
    data.percent_change_7d = twoDigitTruncator(data.percent_change_7d)

  return data

}