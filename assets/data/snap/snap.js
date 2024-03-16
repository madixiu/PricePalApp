const axios = require('axios'); 

async function getItemDataReq(itemId) {
//   const  headers = {
//     'authority': 'core.snapp.market',
//     'accept': 'application/json, text/plain, */*',
//     'accept-language': 'en,en-US;q=0.9,de;q=0.8,sm;q=0.7,fa;q=0.6',
//     'cache-control': 'no-cache',
//     'origin': 'https://m.snapp.market',
//     'pragma': 'no-cache',
//     'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"Linux"',
//     'sec-fetch-dest': 'empty',
//     'sec-fetch-mode': 'cors',
//     'sec-fetch-site': 'same-site',
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
// }
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
};
  // const params = {
  //   'platform': 'PWA'
  // };
  // const body= JSON.stringify({
  //   platform: 'PWA'
  // })
  var response = await fetch(`https://core.snapp.market/api/v1/vendors/p5r9nv/products/${itemId}`,
  {
      method: 'GET',
      headers: headers,
      // body: body,
    }
  );
  const data = await response.json();
  console.log(data);
  // return response;
}


async function getItemData(itemId) {
  const response = await getItemDataReq(itemId);
  
  const product = response.data.product;
  const related = response.data.related;
  
  return {product, related};  
}

async function getSnapp() {
  const itemIds = [3532353, 3668627, 3582106, 3543321, 3667303];
  
  const allData = [];
  
  for (let id of itemIds) {
    let data = await getItemDataReq(id);
    allData.push(data);
  }
  console.log(allData);

  // return allData;
}

getSnapp();
