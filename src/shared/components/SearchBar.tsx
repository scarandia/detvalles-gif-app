import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    buttonText: string;
    onQuery: (query: string) => void;
}
export const SearchBar = ({ placeholder = 'Buscar', buttonText, onQuery }: Props) => {
    const [query, setQuery] = useState('')

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuery(query)
        }, 700)

        return () => {
            clearTimeout(timeOutId)
        };
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
        //setQuery('')
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}

                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>{buttonText}</button>
        </div>
    )
}