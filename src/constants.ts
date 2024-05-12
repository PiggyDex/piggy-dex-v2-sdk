import { Percent, V2_FACTORY_ADDRESSES } from '@piggy-dex/sdk-core'
import JSBI from 'jsbi'

/**
 * @deprecated use FACTORY_ADDRESS_MAP instead
 */
export const FACTORY_ADDRESS = '0x5D663484bF71Cd760831E44c21F3035432C0F177'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = V2_FACTORY_ADDRESSES

export const INIT_CODE_HASH = '0x3a9376e846f4900071918a1cf1ace6cd71dccb0607e161f25f6c644cdbd1f658'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
