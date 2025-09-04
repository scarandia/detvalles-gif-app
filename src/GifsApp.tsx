import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GifList } from "./gifs/components/GifList"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

  const { gifs, recentSearches, handleSearch, handleRecentSearchesClick } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Encuentra el Gif Perfecto" />

      {/* Search */}
      <SearchBar
        placeholder="Buscar Gifs" buttonText="Buscar"
        onQuery={handleSearch}
      />

      {/* Busquedas Previas */}
      <PreviousSearches
        searches={recentSearches}
        onLabelClick={handleRecentSearchesClick}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  )
}