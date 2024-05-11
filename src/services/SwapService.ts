import restConnector from "@/connectors/AxiosRestConector";
import { AxiosInstance } from "axios";

export class SwapService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async verifyInfo(values: {
    email: string;
    password: string;
    walletAddress: string;
    images: string[];
    signature: string;
  }): Promise<any | null> {
    const { data } = await restConnector.post("/swap-tokens/info", {
      ...values,
    });

    return data;
  }

  public async getSwapPackage(): Promise<any | null> {
    const { data } = await restConnector.get("/swap-packages");

    return data;
  }

  public async getBuySwapPackageStatus(
    walletAddress: string
  ): Promise<any | null> {
    const { data } = await restConnector.get(
      "/swap-purchases/check-purchased",
      {
        params: {
          walletAddress,
        },
      }
    );

    return data;
  }

  public async confirmWalletAddress(values: {
    walletAddress: string;
    signature: string;
  }): Promise<any | null> {
    const { data } = await restConnector.post("/swap-tokens/confirm-wallet", {
      ...values,
    });

    return data;
  }

  public async verifyTransactionHash(values: {
    token: string;
    txHash: string;
  }): Promise<any | null> {
    const { data } = await restConnector.post("/swap-tokens/verify-txhash", {
      ...values,
    });

    return data;
  }

  public async buySwapPackage(values: {
    swapPackageId: string;
    txHash: string;
  }): Promise<any | null> {
    const { data } = await restConnector.post("/swap-purchases", {
      ...values,
    });

    return data;
  }
}

export const swapService = new SwapService({ restConnector });
