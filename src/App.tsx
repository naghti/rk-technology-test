import { useState, useEffect } from "react";

import {
  HiddenCheckbox,
  LoadingText,
} from "./styled-components/scss/modules/StyledComponents";

import { StyledButton } from "./styled-components/scss/modules/StyledButton";

import {
  SwitchContainer,
  Slider,
} from "./styled-components/scss/modules/Slider";

import { CatImage } from "./styled-components/scss/modules/CatImage";

import "./App.css";

function App() {
  return (
    <>
      <CatsImagesComponent></CatsImagesComponent>
    </>
  );
}

const API_KEY =
  "live_eltwymMoabFhmeg4S9QX3ZKSUu2sOqYD4SuYrg6B3I2OS1B4CFwn2T4K3Bgk5sm1";
const API_URL = "https://api.thecatapi.com/v1/images/search";

const CatsImagesComponent = () => {
  const [enabled, setEnabled] = useState(false);
  const [catImage, setCatImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const fetchCatImage = async () => {
    if (isLocked) return;
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      const data = await response.json();
      if (data?.length > 0) setCatImage(data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (enabled && !isLocked) {

      const interval = setInterval(fetchCatImage, 10000);

      return () => clearInterval(interval);
    }
  }, [enabled, isLocked]);

  useEffect(() => {
    if (isLocked) {
      setEnabled(false);
    }
  }, [isLocked]);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          width: "100%",
          justifyContent: "center",
        }}
      >

        <SwitchContainer onClick={() => setIsLocked(!isLocked)}>

          <Slider $enabled={isLocked}>
            <HiddenCheckbox
              checked={isLocked}
              onChange={() => setIsLocked(!isLocked)}
              disabled={isLoading}
            />
          </Slider>
        </SwitchContainer>
        <span style={{ marginLeft: "10px" }}>
          {isLocked ? "Система заблокирована" : "Система разблокирована"}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          width: "100%",
          justifyContent: "center",
        }}
      >

        <SwitchContainer onClick={() => !isLocked && setEnabled(!enabled)}>

          <Slider $enabled={enabled}>
            <HiddenCheckbox
              checked={enabled}
              onChange={() => !isLocked && setEnabled(!enabled)}
              disabled={isLocked}
            />
          </Slider>
        </SwitchContainer>
        <span style={{ marginLeft: "10px" }}>
          {enabled ? "Автообновление включено" : "Автообновление выключено"}
        </span>
      </div>

      <div
        style={{
          width: "100%",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {isLoading ? (
          <LoadingText>Загрузка...</LoadingText>
        ) : catImage ? (
          <CatImage src={catImage} isLoading={isLoading} />
        ) : (
          <LoadingText></LoadingText>
        )}
      </div>

      <StyledButton
        onClick={fetchCatImage}
        disabled={isLoading || isLocked}
        style={{ alignSelf: "center" }}
      >
        {isLoading ? "Загрузка..." : "Кнопка системы распределения котиков"}
      </StyledButton>
    </div>
  );
};

export default App;
