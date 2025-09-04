import type { FC } from "react";

interface Props {
    searches: string[];
    onLabelClick: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelClick }: Props) => {
    return (
        <div className="previous-searches">
            <h2>Búsquedas Previas</h2>
            <ul className="previous-searches-list">
                {searches.map((term) => (
                    <li key={term} onClick={() => onLabelClick(term)}>
                        {term}
                    </li>
                ))}
            </ul>
        </div>
    )
}
