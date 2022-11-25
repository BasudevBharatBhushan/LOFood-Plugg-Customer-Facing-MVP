import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Web3Auth } from "@web3auth/modal";
import { ethers } from "ethers";
const Wallet = () => {
  const [walletState, setWalletState] = useState({
    msg: "",
    cond: 1,
    accounts: false,
  });

  const { msg, cond, accounts } = walletState;

  const connectWallet = async () => {
    try {
      const web3auth = new Web3Auth({
        clientId:
          "BEt1A8IDs8WmIQNybClwDm54kjqXh6S8apVAoykRfomAEqN2pFIBa6_TS1uZYoM-F8wF6zHWBE04WS7wgeNvxxU", // get it from Web3Auth Dashboard
        chainConfig: {
          chainNamespace: "eip155",
          chainId: "0x13881",
          rpcTarget:
            "https://polygon-mumbai.g.alchemy.com/v2/vimWVy8DiR0p0UJRgsb-JZZuJFgSDqg3",

          displayName: "Polygon Mainnet",
          blockExplorer: "https://mumbai.polygonscan.com/",
          ticker: "MATIC",
          tickerName: "Matic",
        },
      });
      await web3auth.initModal();

      if (accounts == false) {
        const web3authProvider = await web3auth.connect();
        setWalletState({ msg: "CONNECTED ", cond: 2, accounts: true });
      } else {
        web3auth.logout();
        setWalletState({ msg: "", cond: 1, accounts: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <b style={{ color: "#4BB543", marginRight: "10px" }}>{msg}</b>

      {cond == 1 ? (
        <Button positive onClick={connectWallet}>
          Connect Wallet
        </Button>
      ) : (
        <Button negative onClick={connectWallet}>
          Disconnect
        </Button>
      )}
    </div>
  );
};

export default Wallet;
