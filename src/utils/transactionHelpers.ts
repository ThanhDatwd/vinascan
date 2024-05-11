/**
 * Wait transactions to be mined.
 *
 * Based on https://raw.githubusercontent.com/Kaisle/await-transaction-mined/master/index.js
 */

import Web3 from "web3";

const DEFAULT_INTERVAL = 1500;

const DEFAULT_BLOCKS_TO_WAIT = 1;

interface Options {
  // Poll delay in milliseconds
  interval?: number;

  // How many blocks to wait
  blocksToWait?: number;
}

/**
 * Wait for one or multiple transactions to confirm.
 *
 * Usage:
 * ```
 * const promiEvent = return this.oldToken.methods.approve(this.tokenSwapSmartContractAddress, inputs.fullBalance).send({ from: this.walletState.selectedAddress });
 * promiEvent.on("txHash", (hash) => {
 *  // We get transaction hash from MetaMask right after the user presses Confirm
 *  const receipt = await waitTransaction(web3, hash, {blocksToWait: 5, internal: 5000})
 *  // Do something with transaction of 5 confirmations
 * });
 *
 * ```
 *
 * @param web3
 * @param txnHash A transaction hash or list of those
 * @param options Wait timers
 * @return Transaction receipt
 */
export function waitTransaction(
  web3: Web3,
  txnHash: string | string[],
  options: Options
): Promise<any> {
  const interval =
    options && options.interval ? options.interval : DEFAULT_INTERVAL;
  const blocksToWait =
    options && options.blocksToWait
      ? options.blocksToWait
      : DEFAULT_BLOCKS_TO_WAIT;
  const transactionReceiptAsync = async function (
    txnHash: string,
    resolve: any,
    reject: any
  ) {
    try {
      const receipt = web3.eth.getTransactionReceipt(txnHash);
      if (!receipt) {
        setTimeout(function () {
          transactionReceiptAsync(txnHash, resolve, reject);
        }, interval);
      } else {
        if (blocksToWait > 0) {
          const resolvedReceipt = await receipt;
          if (!resolvedReceipt || !resolvedReceipt.blockNumber)
            setTimeout(function () {
              transactionReceiptAsync(txnHash, resolve, reject);
            }, interval);
          else {
            try {
              const block = await web3.eth.getBlock(
                resolvedReceipt.blockNumber
              );
              const current = await web3.eth.getBlock("latest");
              if (current.number - block.number >= blocksToWait) {
                const txn = await web3.eth.getTransaction(txnHash);
                if (txn.blockNumber != null) resolve(resolvedReceipt);
                else
                  reject(
                    new Error(
                      "Transaction with hash: " +
                        txnHash +
                        " ended up in an uncle block."
                    )
                  );
              } else
                setTimeout(function () {
                  transactionReceiptAsync(txnHash, resolve, reject);
                }, interval);
            } catch (e) {
              setTimeout(function () {
                transactionReceiptAsync(txnHash, resolve, reject);
              }, interval);
            }
          }
        } else resolve(receipt);
      }
    } catch (e) {
      reject(e);
    }
  };

  // Resolve multiple transactions once
  if (Array.isArray(txnHash)) {
    const promises: any = [];
    txnHash.forEach(function (oneTxHash) {
      promises.push(waitTransaction(web3, oneTxHash, options));
    });
    return Promise.all(promises);
  } else {
    return new Promise(function (resolve, reject) {
      transactionReceiptAsync(txnHash, resolve, reject);
    });
  }
}

const ethereumAddressPattern = /^(0x)?[0-9a-fA-F]{40}$/;
const transactionHashPattern = /^(0x)?[0-9a-fA-F]{64}$/;

export function isEthereumAddress(str: string) {
  return ethereumAddressPattern.test(str);
}

export function isTransactionHash(str: string) {
  return transactionHashPattern.test(str);
}

export function isNumber(value: string | number) {
  return !isNaN(parseFloat(value as string)) && isFinite(value as number);
}
