import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const Wallet = () => {
  const [walletState, setWalletState] = useState({
    msg: "Please Connect Wallet ",
    cond: 1,
  });

  const { msg, cond } = walletState;

  const handleClick = () => {
    if (cond === 1) {
      setWalletState({ msg: "CONNECTED ", cond: 2 });
    } else {
      setWalletState({ msg: "Please Connect Wallet ", cond: 1 });
    }
  };

  return (
    <div>
      {cond == 2 ? (
        <b style={{ color: "#32CD32", marginRight: "10px" }}>{msg}</b>
      ) : (
        <b style={{ marginRight: "10px" }}>{msg}</b>
      )}

      {cond == 1 ? (
        <Button positive onClick={handleClick}>
          Connect
        </Button>
      ) : (
        <Button negative onClick={handleClick}>
          Disconnect
        </Button>
      )}
    </div>
  );
};

export default Wallet;
