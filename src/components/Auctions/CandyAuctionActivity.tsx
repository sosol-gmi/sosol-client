import React, { useState, useCallback, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CandyShop, fetchAuctionHistory } from '@liqnft/candy-shop-sdk';
import { AuctionBid, AuctionStatus, ListBase, SortBy } from '@liqnft/candy-shop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Loader } from '../Loader';
import { ExplorerLink } from '../ExplorerLink';

dayjs.extend(relativeTime);

function removeDuplicate<T>(oldList: T[] = [], addList: T[], key: keyof T): T[] {
  const duplicateList = [...oldList, ...addList];
  const newList: T[] = [];
  const memo: any = {};
  for (const item of duplicateList) {
    if (memo[item[key]]) break;
    newList.push(item);
    memo[item[key]] = true;
  }
  return newList;
}

function EMPTY_FUNCTION(): void {
  //
}

interface AuctionActivityProps {
  candyShop: CandyShop;
  orderBy?: SortBy;
  auctionAddress: string;
}

const LIMIT = 10;
const Logger = 'CandyShopUI/AuctionActivity';

export const AuctionActivity: React.FC<AuctionActivityProps> = ({ candyShop, auctionAddress, orderBy }) => {
  const [bids, setBids] = useState<AuctionBid[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);

  const getAuctionBids = useCallback(
    (offset: number, limit: number, firstLoad?: boolean) => () => {
      fetchAuctionHistory(auctionAddress, { offset, limit, orderByArr: orderBy })
        .then((res: ListBase<AuctionBid>) => {
          const { result, offset, totalCount, count, success } = res;
          if (!success) {
            return setHasMore(false);
          }
          const hasMore = offset + count < Number(totalCount);
          if (hasMore) {
            setOffset(offset + count + 1);
          }

          setHasMore(hasMore);
          setBids((list) => {
            if (firstLoad) return result || [];
            return removeDuplicate<AuctionBid>(list, result, 'bidAddress');
          });
        })
        .catch((error: any) => {
          setHasMore(false);
          console.log(`${Logger}: fetchAuctionHistory failed, error=`, error);
        });
    },
    [auctionAddress, orderBy]
  );

  useEffect(() => {
    getAuctionBids(0, LIMIT)();
  }, [getAuctionBids]);

  return (
    <div className="candy-activity-auction">
      <div className="candy-activity-auction-table-container" id="candy-activity-auction-scroll-target">
        <div className="candy-activity-auction-header candy-activity-auction-item">
          <span>BUYER ADDRESS</span>
          <span>PRICE</span>
          <span>STATUS</span>
        </div>

        <InfiniteScroll
          dataLength={bids.length}
          next={offset === 0 ? EMPTY_FUNCTION : getAuctionBids(offset, LIMIT)}
          loader={<Loader />}
          hasMore={hasMore}
        >
          {bids.map((auction) => {
            return (
              <div key={auction.bidAddress} className="candy-activity-auction-item">
                <div>
                  <ExplorerLink
                    type="address"
                    address={auction.buyerAddress}
                    code={true}
                  />
                </div>
                <div className="candy-activity-auction-price">
                  {`${(Number(auction.price) / candyShop.baseUnitsPerCurrency).toLocaleString(undefined, {
                    minimumFractionDigits: candyShop.priceDecimalsMin,
                    maximumFractionDigits: candyShop.priceDecimals
                  })} ${candyShop.currencySymbol}`}
                </div>
                <div>{AuctionStatus[auction.status]}</div>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};
