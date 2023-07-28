import React, { useState, useEffect} from 'react'
import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core'

import styles from '../styles'

const WalletButton = () => {
  const [ rendered, setRendered] = useState('')
  const { ens } = useLookupAddress()
  const { account, activateBrowserWallet, deactive } = useEthers()


  return (
    <button
      onClick={() => {
        if ( ! account ) {
          activateBrowserWallet()
        } else {
          deactive()
        }
      }}
      className={styles.walletButton}
    >
      { rendered === '' && 'Connect Wallet' }
      { rendered !== '' && rendered }
    </button>
  )
}

export default WalletButton