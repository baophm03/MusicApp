import React, { createContext, useState } from 'react';

const FavoriteTracksContext = createContext({
  favoriteTracks: [],
  setFavoriteTracks: () => {},
});

export const FavoriteTracksProvider = ({ children }) => {
  const [favoriteTracks, setFavoriteTracks] = useState([]);

  return (
    <FavoriteTracksContext.Provider value={{ favoriteTracks, setFavoriteTracks }}>
      {children}
    </FavoriteTracksContext.Provider>
  );
};

export default FavoriteTracksContext;
