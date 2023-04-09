import React from "react";
import "../../../Discover/styles/_discover.scss";
import DiscoverBlock from "../../../Discover/components/DiscoverBlock"

export default function SearchedContent({data}) {

  return (
    <div className="discover">
      <>
        <DiscoverBlock text="ALBUMS" id="albums" data={data?.data?.albums?.items || []} imagesKey="images" />
        <DiscoverBlock text="ARTIST" id="artist" data={data?.data?.artists?.items || []} imagesKey="images" />
        <DiscoverBlock text="TRACKS" id="tracks" data={data?.data?.tracks?.items || []} imagesKey="tracks" />
        <DiscoverBlock text="PLAYLISTS" id="playlists" data={data?.data?.playlists?.items || []} imagesKey="images" />
      </>
    </div>
  )
}
