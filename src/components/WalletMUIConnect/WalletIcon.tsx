import type { Theme } from "@mui/material";
import { styled } from "@mui/material";
import type { Wallet } from "@solana/wallet-adapter-react";
import type { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";
import React from "react";

const Img = styled("img")(({ theme }: { theme: Theme }) => ({
  width: theme.spacing(2),
  height: theme.spacing(2),
}));

export interface WalletIconProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  wallet: Wallet | null;
}

export const WalletIcon: FC<WalletIconProps> = ({ wallet, ...props }) => {
  return (
    wallet && (
      <Img
        src={wallet.adapter.icon}
        alt={`${wallet.adapter.name} icon`}
        {...props}
      />
    )
  );
};
