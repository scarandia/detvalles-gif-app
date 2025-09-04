import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

//const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [recentSearches, setRecentSearches] = useState<string[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleRecentSearchesClick = async (term: string) => {

        

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term)
        setGifs(gifs)
    };

    /* Validate recent searches */
    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (recentSearches.includes(query)) return;

        setRecentSearches([query, ...recentSearches].splice(0, 6))

        const gifs = await getGifsByQuery(query)
        setGifs(gifs)

        gifsCache.current[query] = gifs;
        console.log(gifsCache)

    }
    return {

        gifs,

        handleRecentSearchesClick,
        handleSearch,
        recentSearches,
    }
} 