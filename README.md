# icplaza-js-sdk



## <a name='installation'></a>Installation

```bash
npm install icplaza-js-sdk
```

## <a name='usage'></a>Usage


Open your Dapp. Develope and test in Discover -> DappBrowser.


Npm
```javascript
var icplaza = require('icplaza-js-sdk')
console.log(icplaza.isConnected());
```

Browser
```html
<script src="./dist/icplaza.js"></script>
<script>
    console.log(icplaza.isConnected());
</script>
```


## <a name='contents'></a>Contents

<!-- vscode-markdown-toc -->
* [Installation](#installation)
* [Usage](#usage)
* [Contents](#contents)
    * [1. COMMON](#1.-common)
        * [1.1 icplaza.getAppInfo](#1.1-icplaza.getappinfo)
        * [1.2 icplaza.getCurrentWallet](#1.2-icplaza.getcurrentwallet)
        * [1.3 icplaza.getWallet](#1.3-icplaza.getwallet)
        * [1.4 icplaza.back](#1.4-icplaza.back)
        * [1.5 icplaza.close](#1.5-icplaza.close)
        * [1.6 icplaza.sendEthTransaction](#1.6-icplaza.sendEthTransaction)
        
    * [2.COSMOS](#1.cosmos)
        * [2.1 icplaza.signCosmosTransaction](#2.1-icplaza.signcosmostransaction)



#### <a name='1.1-icplaza.getappinfo'></a>1.1 icplaza.getAppInfo


```javascript
icplaza.getAppInfo()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `name`: `String`
    - `system`: `String`
    - `version`: `String`
    - `sys_version`: `String`
- `msg`: `String`

##### Example

```javascript
icplaza.getAppInfo().then(console.log)

> {
    result: true,
    data: {
        name: 'TokenPocket',
        system: 'android',
        version: '0.3.4',
        sys_version: '26'
    },
    msg: 'success'
}
```



#### <a name='1.2-icplaza.getcurrentwallet'></a>1.2 icplaza.getCurrentWallet

Get user's current wallet info

```javascript
icplaza.getCurrentWallet()
```

##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `name`: `String`
    - `address`: `String`
    - `blockchain`: `String` 
- `msg`: `String`

##### Example

```javascript
icplaza.getCurrentWallet().then(console.log)

> {
    result: true,
    data: {
        name: 'itokenpocket',
        address: 'EOSaaaaaaaaabbbbbbbb',
        blockchain: 'eos'
    },
    msg: 'success'
}
```


#### <a name='1.3-icplaza.getwallet'></a>1.3 icplaza.getWallet


Get / Switch User's Wallet

```javascript
icplaza.getWallet(params)
```

##### Parameters

`params`- `Object`:
- `walletTypes`: `Array`  ['eth', 'btc'] // Enum  blockchains
- `switch`: `Boolean` switch current wallet or not


##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `Object`
    - `name`: `String`
    - `address`: `String`
    - `blockchain`: `String` 
- `msg`: `String`

##### Example

```javascript
icplaza.getWallet({walletTypes: ['eth', 'bsc', 'dot'], switch: false}).then(console.log)

> {
    result: true,
    data: [
        {
            name: 'ethwallet11',
            address: '0x40e5A542087FA4b966209707177b103d158Fd3A4',
            blockchain: 'eth'
        }
    ],
    msg: 'success'
}
```


#### <a name='1.4-icplaza.back'></a>1.4 icplaza.back

```javascript
icplaza.back()
```

##### Example

```javascript
icplaza.back()

```

#### <a name='1.5-icplaza.close'></a>1.5 icplaza.close


Close the page

```javascript
icplaza.close()
```

##### Example

```javascript
icplaza.close()

```

#### <a name='1.6-icplaza.sendEthTransaction'></a>1.6 icplaza.sendEthTransaction


```javascript
icplaza.sendEthTransaction(params)
```

##### Parameters

`params`- `Object`:
- `to`: `String`  
- `value`: `String` 
- `contract`: `String` 


##### Returns

`Object`:
- `result`: `Boolean`
- `data`: `String`
- `msg`: `String`

##### Example

```javascript
icplaza.sendEthTransaction({to: '0x8AF76D9822626e84C38fD3810aC4aa19E4625203', value: 0.01, contract: '0xc1d8aff8a9cbfe46691351353e04beb1ea9b0881'}).then(console.log)

> {
    result: true,
    data: '0xf8a7060783015f9094c1d8aff8a9cbfe46691351353e04beb1ea9b088180b844a9059cbb00000000000000000000000017e40c8c6d2d5d18ebec371d936ea1b91f7a1c730000000000000000000000000000000000000000000000008ac7230489e80000824673a06e6490c043ae45ac93d9dc3f4165b3600ad2ac07307b0892990d2419f7ef13a0a05dc17278d50d3987dc263f4e304649089d6d57c33bc088c89c4924099e715d69',
    msg: 'success'
}
```


### <a name='2.cosmos'></a>2.COSMOS

#### <a name='2.1-icplaza.signcosmostransaction'></a>2.1 icplaza.signCosmosTransaction

```javascript
icplaza.signCosmosTransaction(stdTx)
```

##### Parameters

`stdTx`- `Object`:
- `from`: `String`
- `chain_id`: `String`
- `account_number`: `String | Number`
- `sequence`: `String | Number`
- `fees`: `Object`
- `gas`: `String`
- `memo`: `String`
- `type`: `String`
- `msg`: `Object`

##### Returns

`Object`:

- `result`: `Boolean`

- `data`: `Object`

- `msg`: `String`

##### Example

```javascript
icplaza.signCosmosTransaction({
	"from": "cosmos1njg8uq4ek9y9yourfromaddress",
	"chain_id": "cosmoshub-2",
	"account_number": 1756,
	"sequence": 3,
	"fees": {
		"denom": "uatom",
		"amount": 500
	},
	"gas": 20000,
	"memo": "",
	"type": "transfer",
	"msg": {
		"to": "cosmos1njg8uq4ek9y9yourfromaddress",
		"coins": [{
			"denom": "uatom",
			"amount": 100000
		}]
	}
}).then(console.log)

> {
	"result": true,
	"data": {
		"tx": {
			"signatures": [{
				"pub_key": {
					"type": "tendermint/PubKeySecp256k1",
					"value": "AkG3bCO5p9MO8a1ABGYtyS8ed4aZuBKEY+"
				},
				"signature": "K7XCuz/ucESBZnQS94uOHZnJCUbFuWH2x659/3O04ihZaZT99cx+aaaaaaaaaaa=="
			}],
			"memo": "",
			"msg": [{
				"type": "cosmos-sdk/MsgSend",
				"value": {
					"amount": [{
						"amount": "100000",
						"denom": "uatom"
					}],
					"from_address": "cosmos1njg8uq4ek9y9yourfromaddress",
					"to_address": "cosmos1njg8uq4ek9y9yourtoaddress"
				}
			}],
			"fee": {
				"amount": [{
					"denom": "uatom",
					"amount": "500"
				}],
				"gas": "20000"
			}
		},
		"mode": "sync"
	},
	"msg": "success"
}
```


