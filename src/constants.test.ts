import { INIT_CODE_HASH } from './constants'
import { bytecode } from '@piggy-dex/v2-contracts/out/UniswapV2Pair.sol/UniswapV2Pair.json'
import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON. COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [bytecode.object])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
