import React, { useState } from 'react'

import { Contract } from '@ethersproject/contracts'
import { abis } from '@my-app/contracts'
import { 
  ERC20, 
  useContractFunction,
  useEthers,
  useTokenAllowance,
  useTokenBalance
} from '@usedapp/core'
import { ethers } from 'ethers'
import { parseUnits } from 'ethers/lib/utils'

function Exchange() {
  return (
    <div>Exchange</div>
  )
}

export default Exchange