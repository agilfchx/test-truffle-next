import { useState } from 'react';
import { SimpleStorage } from '../../blockchain/abi';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);
const contractAddress = '0x4566cF9f727BE6f22d25c9faaFAC7eDA03EdC993';
const storageContract = new web3.eth.Contract(SimpleStorage, contractAddress);

export default function Test() {
  const [number, setUint] = useState(0);
  const [getNumber, setGet] = useState('0');

  const numberSet = async (t) => {
    t.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    // Get permission to access user funds to pay for gas fees
    const gas = await storageContract.methods.set(number).estimateGas();
    const post = await storageContract.methods.set(number).send({
      from: account,
      gas,
    });
  };

  const numberGet = async (t) => {
    t.preventDefault();
    const post = await storageContract.methods.get().call();
    setGet(post);
  };

  return (
    <div className="main">
      <div className="card">
        <form className="form" onSubmit={numberSet}>
          <label>
            Set your uint256:
            <input
              className="input"
              type="text"
              name="name"
              onChange={(t) => setUint(t.target.value)}
            />
          </label>
          <button className="button" type="submit" value="Confirm">
            Confirm
          </button>
        </form>
        <br />
        <button className="button" onClick={numberGet} type="button">
          Get your uint256
        </button>
        {getNumber}
      </div>
    </div>
  );
}
