// actions.js

import axios from 'axios';

// Action types
export const FETCH_CATALOG_REQUEST = 'FETCH_CATALOG_REQUEST';
export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS';
export const FETCH_CATALOG_FAILURE = 'FETCH_CATALOG_FAILURE';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Action creators
export const fetchCatalogRequest = () => {
  return {
    type: FETCH_CATALOG_REQUEST,
  };
};

export const fetchCatalogSuccess = (catalog) => {
  return {
    type: FETCH_CATALOG_SUCCESS,
    payload: catalog,
  };
};

export const fetchCatalogFailure = (error) => {
  return {
    type: FETCH_CATALOG_FAILURE,
    payload: error,
  };
};

export const addToFavorites = (advert) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: advert,
  };
};

export const removeFromFavorites = (advertId) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: advertId,
  };
};

// Async action creator for fetching catalog
export const fetchCatalog = () => {
  return (dispatch) => {
    dispatch(fetchCatalogRequest());

    // Replace the URL with your API endpoint
    axios.get('https://65a93b63219bfa371868d7b4.mockapi.io/Cars')
      .then((response) => {
        dispatch(fetchCatalogSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCatalogFailure(error.message));
      });
  };
};
