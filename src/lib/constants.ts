export interface L2ToL1GatewayAddresses {
    [contractAddress: string]: string;
  }  

const objKeyAndValToLowerCase = (obj: { [key: string]: string }) =>
Object.keys(obj).reduce((acc: { [key: string]: string }, key) => {
  acc[key.toLowerCase()] = obj[key].toLowerCase();
  return acc;
}, {});

// TODO: read these values from the gateway or a subgraph
export const l2ToL1GatewayAddresses: L2ToL1GatewayAddresses = objKeyAndValToLowerCase({
// L2 ERC20 Gateway	mainnet
'0x09e9222e96e7b4ae2a407b98d48e330053351eee':
  '0xa3A7B6F88361F48403514059F1F16C8E78d60EeC',
// L2 Arb-Custom Gateway	mainnet
'0x096760f208390250649e3e8763348e783aef5562':
  '0xcEe284F754E854890e311e3280b767F80797180d',
// L2 weth mainnet
'0x6c411ad3e74de3e7bd422b94a27770f5b86c623b':
  '0xd92023E9d9911199a6711321D1277285e6d4e2db',
// L2 dai gateway mainnet
'0x467194771dae2967aef3ecbedd3bf9a310c76c65':
  '0xd3b5b60020504bc3489d6949d545893982ba3011',
// L2 ERC20 Gateway	rinkeby
'0x195c107f3f75c4c93eba7d9a1312f19305d6375f':
  '0x91169Dbb45e6804743F94609De50D511C437572E',
// L2 Arb-Custom Gateway	rinkeby
'0x9b014455acc2fe90c52803849d0002aeec184a06':
  '0x917dc9a69F65dC3082D518192cd3725E1Fa96cA2',
// L2 Weth Gateway rinkeby
'0xf94bc045c4e926cc0b34e8d1c41cd7a043304ac9':
  '0x81d1a19cf7071732D4313c75dE8DD5b8CF697eFD',
// old L2 weth gateway in rinkeby? we can prob remove this
'0xf90eb31045d5b924900aff29344deb42eae0b087':
  '0x81d1a19cf7071732D4313c75dE8DD5b8CF697eFD',
// livepeer gateway mainnet
'0x6d2457a4ad276000a615295f7a80f79e48ccd318':
  '0x6142f1C8bBF02E6A6bd074E8d564c9A5420a0676',
// Lido gateway Arb1
  '0x07d4692291b9e30e326fd31706f686f83f331b82':
  '0x0f25c1dc2a9922304f2eac71dca9b07e310e8e5a'
});

// nova
export const l2ToL1GatewayAddressesNova: L2ToL1GatewayAddresses =
objKeyAndValToLowerCase({
  // L2 ERC20 Gateway	mainnet
  '0xcf9bab7e53dde48a6dc4f286cb14e05298799257':
    '0xb2535b988dce19f9d71dfb22db6da744acac21bf',
  // L2 Arb-Custom Gatewa	mainnet
  '0xbf544970e6bd77b21c6492c281ab60d0770451f4':
    '0x23122da8c581aa7e0d07a36ff1f16f799650232f',
  // L2 weth mainnet
  '0x7626841cb6113412f9c88d3adc720c9fac88d9ed':
    '0xe4e2121b479017955be0b175305b35f312330bae',

  // L2 dai gateway mainnet
  '0x10e6593cdda8c58a1d0f14c5164b376352a55f2f':
    '0x97f63339374fce157aa8ee27830172d2af76a786',
});

export const SEVEN_DAYS_IN_SECONDS = 7 * 24 * 60 * 60;
