import { FC } from "react"

const Home: FC = (): JSX.Element => {
  return (
    <div>
      <p>
        Chain-key Bitcoin (ckBTC), a multi-chain bitcoin twin on the Internet Computer, is an ICRC-1-compliant token
        that is backed 1:1 by bitcoin (BTC) such that 1 ckBTC can always be redeemed for 1 BTC and vice versa. The ckBTC
        minter canister is responsible for both minting ckBTC tokens when users transfer bitcoins to its control and
        burning ckBTC when handling Bitcoin retrieval requests. ckBTC transactions are facilitated through a ledger
        canister, which in conjunction with archive canisters, tracks ckBTC account balances and transaction history
        between accounts. An index canister provides access to ckBTC transactions associated with individual accounts.
      </p>
    </div>
  )
}

export default Home
