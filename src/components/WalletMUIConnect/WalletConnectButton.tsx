import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';
import { useWallet } from '@solana/wallet-adapter-react';
import type { FC, MouseEventHandler } from 'react';
import React, { useCallback, useMemo } from 'react';
import { WalletIcon } from './WalletIcon.js';

export const WalletConnectButton: FC<ButtonProps> = ({
    color = 'primary',
    type = 'button',
    children,
    disabled,
    onClick,
    ...props
}) => {
    const { wallet, connect, connecting, connected } = useWallet();

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            if (onClick) onClick(event);
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            if (!event.defaultPrevented)
                connect().catch(() => {
                    // Silently catch because any errors are caught by the context `onError` handler
                });
        },
        [onClick, connect]
    );

    const content = useMemo(() => {
        if (children) return children;
        if (connecting) return 'Connecting ...';
        if (connected) return 'Connected';
        if (wallet) return 'Connect';
        return 'Connect Wallet';
    }, [children, connecting, connected, wallet]);

    return (
        <Button
            color={color}
            type={type}
            onClick={handleClick}
            disabled={disabled || !wallet || connecting || connected}
            startIcon={<WalletIcon wallet={wallet} />}
            {...props}
        >
            {content}
        </Button>
    );
};
