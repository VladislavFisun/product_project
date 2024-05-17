import {
    useCallback,
    useEffect,
    useLayoutEffect, useMemo, useRef, useState,
} from 'react';

type RowKey = string | number
interface VirtualListProps {
    itemsCount:number;
    itemHeight?:(index:number)=>number;
    estimatedItemHeight?:(index:number)=>number;
    getItemKey:(index:number)=> RowKey;
    overscan?:number
    scrollingDelay?:number;
    getScrollElement:()=>HTMLElement | null
}

interface VirtualListRow {
    key:RowKey;
    index:number;
    offsetTop:number;
    height:number;
}

const items = Array.from({ length: 10000 }, (_, index) => ({
    id: Math.random().toString(36).slice(2),
    text: String(index),
}));

const containerHeight = 600;
const OVERSCAN = 3;
const SCROLL_DELAY = 100;

function validateProps(props:VirtualListProps) {
    const {
        estimatedItemHeight,
        itemHeight,
    } = props;

    if (!itemHeight && !estimatedItemHeight) {
        throw new Error('Either "itemHeight" or "estimatedItemHeight" must be provided');
    }
}

function useVirtualList(props: VirtualListProps) {
    validateProps(props);
    const {
        estimatedItemHeight,
        getItemKey,
        itemsCount,
        itemHeight,
        overscan = OVERSCAN,
        scrollingDelay = SCROLL_DELAY,
        getScrollElement,
    } = props;

    const [measurementCache, setMeasurementChache] = useState<Record<RowKey, number>>();
    const [listHeight, setListHeight] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [isScrolling, setisScrolling] = useState(false);

    useEffect(() => {
        if (!getScrollElement()) return;
        let timeoutId:ReturnType<typeof setTimeout> = null;

        const handleScroll = () => {
            setisScrolling(true);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                setisScrolling(false);
            }, scrollingDelay);
        };

        getScrollElement().addEventListener('scroll', handleScroll);

        return () => getScrollElement().removeEventListener('scroll', handleScroll);
    }, [getScrollElement, scrollingDelay]);

    useLayoutEffect(() => {
        const scrollElement = getScrollElement();
        if (!scrollElement) {
            return;
        }
        const resizeObserver = new ResizeObserver(([entry]) => {
            if (!entry) return;
            const height = entry?.borderBoxSize[0]?.blockSize ?? entry?.target?.getBoundingClientRect()?.height;
            setListHeight(height);
        });
        resizeObserver.observe(scrollElement);
        return () => resizeObserver.disconnect();
    }, [getScrollElement]);

    useLayoutEffect(() => {
        if (!getScrollElement()) {
            return;
        }
        const handleScroll = () => {
            const { scrollTop } = getScrollElement();
            setScrollTop(scrollTop);
        };

        handleScroll();
        getScrollElement().addEventListener('scroll', handleScroll);

        return () => getScrollElement().removeEventListener('scroll', handleScroll);
    }, [getScrollElement]);

    const {
        endIndex, virtualItems, startIndex, totalHeight,
    } = useMemo(() => {
        const getItemHeight = (index:number) => {
            if (itemHeight) {
                return itemHeight(index);
            }
            const key = getItemKey(index);
            if (typeof measurementCache?.[key] === 'number') return measurementCache[key]!;

            return estimatedItemHeight!(index);
        };
        let rowHeightLogger;
        const rangeStart = scrollTop;
        const rangeEnd = scrollTop + listHeight;
        let totalHeight:number = 0;
        let startIndex = -1;
        let endIndex = -1;
        const allRows:VirtualListRow[] = Array(itemsCount);
        for (let index = 0; index < itemsCount; index++) {
            const key = getItemKey(index);
            const row = {
                key,
                index,
                offsetTop: totalHeight,
                height: getItemHeight(index),
            };
            totalHeight += row.height;
            allRows[index] = row;
            if (startIndex === -1 && row.height + row.offsetTop > rangeStart) {
                startIndex = Math.max(0, index - overscan);
            }

            // TODO: remove -10 when fix logic
            if (endIndex === -1 && row.height + row.offsetTop >= rangeEnd - 10) {
                endIndex = Math.min(itemsCount - 1, index + overscan);
            }
        }

        const virtualItems = allRows.slice(startIndex, endIndex + 1);

        return {
            startIndex, endIndex, totalHeight, virtualItems,
        };
    }, [itemsCount, scrollTop, listHeight, itemHeight, overscan, estimatedItemHeight, measurementCache, getItemKey]);

    const measureElement = useCallback((element:Element | null) => {
        if (!element) return;
        const indexAttribute = element.getAttribute('data-index') || '';
        const index = parseInt(indexAttribute, 10);
        if (Number.isNaN(index)) {
            console.error('dynamic must have valid data-index attribute');
            return;
        }
        const size = element.getBoundingClientRect();
        const key = getItemKey(index);
        setMeasurementChache((cache) => ({ ...cache, [key]: size.height }));
    }, [getItemKey]);

    return {
        virtualItems,
        endIndex,
        startIndex,
        isScrolling,
        totalHeight,
        measureElement,
    };
}

export const VirtualList = () => {
    const [listItems, setListItems] = useState(items);

    const scrollElementRef = useRef<HTMLDivElement>(null);

    const { virtualItems, measureElement, totalHeight } = useVirtualList({
        itemsCount: listItems.length,
        estimatedItemHeight: useCallback(() => 40, []),
        scrollingDelay: SCROLL_DELAY,
        getScrollElement: useCallback(() => scrollElementRef.current, []),
        getItemKey: useCallback((index) => listItems[index]!.id, [listItems]),
    });

    return (
        <div style={{ padding: '0 12px' }}>
            <h1>List</h1>
            <div style={{ marginBottom: '12px' }}>
                <button onClick={() => setListItems((items) => items.slice().reverse())}>
                    reverse
                </button>
            </div>
            <div
                ref={scrollElementRef}
                style={{
                    height: containerHeight,
                    overflow: 'auto',
                    border: '1px solid lightgrey',
                    position: 'relative',
                }}
            >
                <div style={{ height: totalHeight }}>
                    {virtualItems.map((virtualItem) => {
                        const item = listItems?.[virtualItem.index];
                        return (
                            <div
                                key={item.id}
                                ref={measureElement}
                                data-index={virtualItem.index}
                                style={{
                                    position: 'absolute',
                                    padding: '6px 12px',
                                    transform: `translateY(${virtualItem.offsetTop}px)`,
                                }}
                            >
                                {item.text}
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};
