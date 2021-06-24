import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { StaticMap } from "react-map-gl";
import { IconLayer } from "@deck.gl/layers";
import { DataFilterExtension } from "@deck.gl/extensions";
import DeckGL from "@deck.gl/react";
import { MapView } from "@deck.gl/core";

import Foto from "../../assets/imgs/items/foto.png";

import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import "mapbox-gl/dist/mapbox-gl.css";
import marker from "../../assets/imgs/items/marker.png";
import { Container, Filters, CheckList } from "./styles";
import Checkbox from "../../components/Checkbox";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
//const MAP_STYLE =
//  "https://tiles.basemaps.cartocdn.com/gl/voyager-gl-style/style.json";
const MAP_VIEW = new MapView({ repeat: true });
const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 512, height: 786, mask: true },
};

export default function Busca() {
  const { user } = useAuth();
  const history = useHistory();
  const [data, setData] = useState([]);
  const [coords, setCoords] = useState(null);

  const [filter, setFilter] = useState({
    baba: false,
    cozinhar: false,
    cuidarCasa: false,
    domingo: false,
    encanador: false,
    lavarLouca: false,
    lavarRoupa: false,
    passearPet: false,
    quarta: false,
    quinta: false,
    sabado: false,
    segunda: false,
    sexta: false,
    terca: false,
    range: [
      [0, 10000],
      [0, 0],
    ],
  });

  const fetchMaids = async () => {
    try {
      const response = await api.get("/maids");

      if (response.data.error) throw Error("Erro na requisição!");
      setData(response.data.data);
    } catch (error) {
      setTimeout(fetchMaids, 1000);
    }
  };

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoords(coords);
    });
  };

  useEffect(() => {
    fetchMaids();
    fetchLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCheck = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.checked,
    });
    setData(data.concat());
  };

  return (
    <Container>
      <DeckGL
        layers={[
          new IconLayer({
            id: "icon-layer",
            data: data,
            pickable: true,
            iconAtlas: marker,
            iconMapping: ICON_MAPPING,
            sizeScale: 60,
            getIcon: (d) => "marker",
            getPosition: (d) => {
              return [d.localizacao.longitude, d.localizacao.latitude];
            },
            getColor: (d) => [0, 240, 240],
            // Filtro
            getFilterValue: (f) => {
              let n = 0;
              // servicos
              n += filter.baba && !Boolean(f.servicos.baba) ? 1 : 0;
              n += filter.cuidarCasa && !Boolean(f.servicos.cuidarCasa) ? 1 : 0;
              n += filter.lavarRoupa && !Boolean(f.servicos.lavarRoupa) ? 1 : 0;
              n += filter.passearPet && !Boolean(f.servicos.passearPet) ? 1 : 0;
              n += filter.lavarLouca && !Boolean(f.servicos.lavarLouca) ? 1 : 0;
              n += filter.encanador && !Boolean(f.servicos.encanador) ? 1 : 0;
              n += filter.cozinhar && !Boolean(f.servicos.cozinhar) ? 1 : 0;
              // dias
              n += filter.segunda && !Boolean(f.dias.segunda) ? 1 : 0;
              n += filter.terca && !Boolean(f.dias.terca) ? 1 : 0;
              n += filter.quarta && !Boolean(f.dias.quarta) ? 1 : 0;
              n += filter.quinta && !Boolean(f.dias.quinta) ? 1 : 0;
              n += filter.sexta && !Boolean(f.dias.sexta) ? 1 : 0;
              n += filter.sabado && !Boolean(f.dias.sabado) ? 1 : 0;
              n += filter.domingo && !Boolean(f.dias.domingo) ? 1 : 0;

              return [f.preco, n];
            },
            filterRange: filter.range,
            extensions: [new DataFilterExtension({ filterSize: 2 })],
          }),
        ]}
        views={MAP_VIEW}
        initialViewState={{
          longitude: user?.localizacao.longitude ?? coords?.longitude ?? 0,
          latitude: user?.localizacao.latitude ?? coords?.latitude ?? 0,
          zoom: user ? 14 : coords ? 14 : 3,
          maxZoom: 20,
        }}
        controller={{ dragRotate: false }}
        onClick={({ object }) => {
          if (object != null) {
            history.push(`/perfil/${object._id}`);
          }
        }}
        getTooltip={({ object }) =>
          object && {
            html: `<div> <img src=${Foto} alt='Foto'/>
          <h2>${object.nome.split(" ")[0]}</h2>
          <h4>${object.telefone}</h4>
          <br/>
          <span>R$ ${object.precoHora}/hora</span>
          <div/>`,
          }
        }
      >
        <StaticMap
          reuseMaps
          mapStyle={MAP_STYLE}
          preventStyleDiffing={true}
          mapboxApiAccessToken="pk.eyJ1IjoieXJvZHJpZ28yMjE5IiwiYSI6ImNrcGw4cHk1YzBvc2MydW4yZmI0aXoyNzMifQ._r5Tb35EAUac3oHyOS6q2Q"
        />
      </DeckGL>

      <Filters>
        <h3>Filtro</h3>
        <div>
          <div>
            <p>Serviços</p>
            <CheckList>
              <Checkbox onChange={setCheck} name="baba" checked={filter.baba}>
                Babá
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="lavarRoupa"
                checked={filter.lavarRoupa}
              >
                Lavar Roupa
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="passearPet"
                checked={filter.passearPet}
              >
                Passear com Pet
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="cuidarCasa"
                checked={filter.cuidarCasa}
              >
                Cuidar da Casa
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="lavarLouca"
                checked={filter.lavarLouca}
              >
                Lavar Louca
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="encanador"
                checked={filter.encanador}
              >
                Encanador
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="cozinhar"
                checked={filter.cozinhar}
              >
                Cozinhar
              </Checkbox>
            </CheckList>
          </div>
          <div>
            <p>Dias Disponíveis</p>
            <CheckList>
              <Checkbox
                onChange={setCheck}
                name="segunda"
                checked={filter.segunda}
              >
                Segunda
              </Checkbox>
              <Checkbox onChange={setCheck} name="terca" checked={filter.terca}>
                Terca
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="quarta"
                checked={filter.quarta}
              >
                Quarta
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="quinta"
                checked={filter.quinta}
              >
                Quinta
              </Checkbox>
              <Checkbox onChange={setCheck} name="sexta" checked={filter.sexta}>
                Sexta
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="sabado"
                checked={filter.sabado}
              >
                Sabado
              </Checkbox>
              <Checkbox
                onChange={setCheck}
                name="domingo"
                checked={filter.domingo}
              >
                Domingo
              </Checkbox>
            </CheckList>
          </div>
        </div>
      </Filters>
    </Container>
  );
}
