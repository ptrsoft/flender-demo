import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_map from "highcharts/modules/map";

// Initialize the map module
HC_map(Highcharts);

const WorldMapChartComponent = () => {
  const [mapOptions, setMapOptions] = useState(null);

  useEffect(() => {
    const data = [
      ["USA", 33.75, -84.38, 7],
      ["Australia", -33.87, 151.2, 10],
      ["Greece", 38, 23.72, 6],
      ["China", 39.92, 116.38, 9],
      ["Great Britain", 51.5, -0.12, 4],
      ["Brazil", -22.91, -43.2, 4],
      ["Japan", 35.69, 139.69, 8],
    ];

    // Fetch the map data from Highcharts CDN
    fetch("https://code.highcharts.com/mapdata/custom/world.topo.json")
      .then((response) => response.json())
      .then((mapData) => {
        const options = {
          chart: {
            map: mapData,
            marginTop: -150, // Decrease top margin
          },

          legend: {
            enabled: false,
          },

          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: "bottom",
            },
          },

          mapView: {
            fitToGeometry: {
              type: "MultiPoint",
              coordinates: [
                // Alaska west
                [-164, 54],
                // Greenland north
                [-35, 84],
                // New Zealand east
                [179, -38],
                // Chile south
                [-68, -55],
              ],
            },
          },

          title: {
            text: "",
            align: "left",
          },

          // subtitle: {
          //   text:
          //     'Source: <a href="https://en.wikipedia.org/wiki/Norway_at_the_Olympics">Wikipedia</a>',
          //   align: "left",
          // },

          tooltip: {
            headerFormat: "",
            pointFormat:
              "{point.country}<br/>" + "Total medals: {point.z}<br/>",
          },

          series: [
            {
              name: "World map",
              nullColor: "#f1f3f5",
            },
            {
              name: "Olympic games",
              type: "mapbubble",
              color: "#a07bed",
              keys: ["country", "lat", "lon", "z"],
              data: data,
              minSize: "5%",
              maxSize: "6%",
            },
          ],
        };
        setMapOptions(options);
      })
      .catch((error) => console.error("Error fetching map data:", error));
  }, []);

  return mapOptions ? (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"mapChart"}
      options={mapOptions}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default WorldMapChartComponent;
