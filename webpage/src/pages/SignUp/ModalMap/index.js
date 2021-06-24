import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { StaticMap } from "react-map-gl";
import { IconLayer } from "@deck.gl/layers";
import DeckGL from "@deck.gl/react";
import { MapView } from "@deck.gl/core";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import marker from "../../../assets/imgs/items/marker.png";

Modal.setAppElement("#root");

const MAP_VIEW = new MapView({ repeat: true });

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 512, height: 786, mask: true },
};

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

export default function ModalMap({ show, lat, long, setLocal, ...props }) {
  const [data, setData] = useState([]);

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      if (!lat && !long) {
        setData([
          {
            latitude: coords.latitude,
            longitude: coords.longitude,
            zoom: 14,
          },
        ]);
        setLocal(coords.latitude, coords.longitude);
      } else {
        setData([
          {
            latitude: lat,
            longitude: long,
            zoom: 14,
          },
        ]);
      }
    });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <Modal
      isOpen={show}
      className="Modal"
      overlayClassName="Overlay"
      {...props}
    >
      <h5>Escolha sua Localização</h5>
      <div>
        <DeckGL
          layers={[
            new IconLayer({
              id: "icon-layer",
              data,
              pickable: true,
              iconAtlas: marker,
              iconMapping: ICON_MAPPING,
              sizeScale: 60,
              getIcon: (d) => "marker",
              getPosition: (d) => {
                return [d.longitude, d.latitude];
              },
              getColor: (d) => [0, 240, 240],
              // Filtro
            }),
          ]}
          views={MAP_VIEW}
          initialViewState={{
            longitude: data[0]?.longitude ?? 0,
            latitude: data[0]?.latitude ?? 0,
            zoom: data[0]?.zoom ? data[0].zoom : 3,
            maxZoom: 20,
          }}
          controller={{ dragRotate: false }}
          onClick={(e) => {
            const { coordinate, viewport } = e;

            setData([
              {
                longitude: coordinate[0],
                latitude: coordinate[1],
                zoom: viewport.zoom,
              },
            ]);
            setLocal(coordinate[1], coordinate[0]);
          }}
        >
          <StaticMap
            reuseMaps
            mapStyle={MAP_STYLE}
            preventStyleDiffing={true}
            mapboxApiAccessToken="pk.eyJ1IjoieXJvZHJpZ28yMjE5IiwiYSI6ImNrcGw4cHk1YzBvc2MydW4yZmI0aXoyNzMifQ._r5Tb35EAUac3oHyOS6q2Q"
          />
        </DeckGL>
      </div>
    </Modal>
  );
}
