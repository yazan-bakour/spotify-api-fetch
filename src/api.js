import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from './config'

export const fetchApi = createApi({
  reducerPath: 'newRelease',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.spotify.com/v1',
    method: 'GET', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + config.api.accessToken
    } 
  }),
  endpoints: (builder) => ({
    getSavedAlbums: builder.query({
      query: () => '/me/albums',
    }),
    getNewReleasedSongs: builder.query({
      query: () => '/browse/new-releases',
    }),
    getFeaturedPlaylists: builder.query({
      query: () => '/browse/featured-playlists'
    }),
    getCategories: builder.query({
      query: () => '/browse/categories'
    }),
    getSearch: builder.query({
      query: param => {
        return `/search?query=${param}&type=album,artist,album,playlist,track`
      }
    }),
    getUser: builder.query({
      query: () => ('/me')
    })
  })
})
