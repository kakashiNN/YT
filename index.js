import axios from "axios";

// ===== CONFIG =====
const VIDEO_ID = "LIEiEwpEhWM"; // YouTube video ID
const SAPISIDHASH = "1761112713_52c16257620314393162c273652445d43855fee9_u"; // Your SAPISIDHASH
const COOKIES =
  "__Secure-1PSIDTS=sidts-CjUBmkD5S2kI1iuw25IoCssmHIwHCRXrmKY6eYJ74ycwBnkz7-4tfsg1MiApcrKze1pYASS5ExAA; __Secure-3PSIDTS=sidts-CjUBmkD5S2kI1iuw25IoCssmHIwHCRXrmKY6eYJ74ycwBnkz7-4tfsg1MiApcrKze1pYASS5ExAA; HSID=A2RxAwkhNBG-XQlw4; SSID=ACDQYyoQdpWWz-3Fn; APISID=Kcpf-VnTGl-HtobW/AYfEx87jlmgiExGNO; SAPISID=mP2gqWlfUsmkJlXH/Al0MgpVjozbp0bRL_; __Secure-1PAPISID=mP2gqWlfUsmkJlXH/Al0MgpVjozbp0bRL_; __Secure-3PAPISID=mP2gqWlfUsmkJlXH/Al0MgpVjozbp0bRL_; SID=g.a0001wgTwNRC_xuRl45ynZZsxoDv-EmsH8n5RHDKjD-yCdSNP_N4j4fPnnCiLtuVkPuIu_yVxQACgYKAdUSARYSFQHGX2Miu-CHEGqbRZPNZFifpNr7xhoVAUF8yKrb25VmPiv2WQ5YMdkXCOVs0076; __Secure-1PSID=g.a0001wgTwNRC_xuRl45ynZZsxoDv-EmsH8n5RHDKjD-yCdSNP_N4qsh6nPd79yJ68BvSni7b8QACgYKAfASARYSFQHGX2MiVKscInUr3nhw0piGZZNPHxoVAUF8yKqqL91ZpwXzfcwe4CxivtOy0076; __Secure-3PSID=g.a0001wgTwNRC_xuRl45ynZZsxoDv-EmsH8n5RHDKjD-yCdSNP_N4upewtEw6RwQuD1BXjLBYpAACgYKAaoSARYSFQHGX2MiOYRzoimjqJ6OLCkINDXbDRoVAUF8yKopiAK2E_NMni09iyvw1Pb20076; LOGIN_INFO=AFmmF2swRQIhAJ6AYoKs2cPBimJbRS80UIy9I_NF8u00RTqV4pvScCXqAiBlkdr-KUvm3PMIJBIrocCOZjQk2LzoWKKcr35QpL1xsw:QUQ3MjNmeGZhN3h6V1ktSnNMdGxUQ3BJcnNRc1ZhMXdWcGgzaFdIcVlONDRXSGlFc0FFUks2bWRzbTY2clZoVWhtWEJxWk5aRVNLYlhuOEJ5YnotTG93X2lEU3Q5cUExSTJnc3JBUTJXSkJlcDMzUGFXeXB1ZEI2bi1HbEk5RnI1VC10dm9VcVQ4dEU1Wklha1ZDSUF5WndWSXptUnBWOW9B; YSC=caOZAnkG98M; VISITOR_INFO1_LIVE=o2Z8xfgbXWo; VISITOR_PRIVACY_METADATA=CgJCRBIEGgAgQg%3D%3D; PREF=tz=Asia.Dhaka&f5=30000; __Secure-ROLLOUT_TOKEN=CLebwvDOhJ-yVxC3sZbFjbeQAxj4nruPjreQAw%3D%3D; SIDCC=AKEyXzVeP9JRC7VMCuYxVrl-GEcLmtWUMJ15o-HSS5UceEmQ7yHJLKK0F9fhGF0gqy81Eh8D; __Secure-1PSIDCC=AKEyXzXdovkXxlW8KjevsqxbxlxvTqhKYmVqNbVYSJURlWXTbdcdg7J5uyOmM9pdY16mSeaf; __Secure-3PSIDCC=AKEyXzWrADcE9LfNp6HwTZDyekWVnjDO1nGSbC2xotm4g9bW-UGBFkJpXC74WITItx2PXRZpng; ST-1i4g4i8=csn=aBDkaPajOVsZchdt&itct=CAUQ_FoiEwjV0PqckLeQAxVCfZ0JHfzFEmQyCmctaGlnaC1yZWNaD0ZFd2hhdF90b193YXRjaJoBBhCOHhieAcoBBOULeQk=";

async function fetchVideo() {
  try {
    const response = await axios.post(
      "https://m.youtube.com/youtubei/v1/player",
      {
        context: {
          client: {
            hl: "en",
            gl: "BD",
            userAgent:
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36,gzip(gfe)",
            clientName: "MWEB",
            clientVersion: "2.20251021.01.00",
            remoteHost: "103.166.230.68",
            deviceMake: "Generic",
            deviceModel: "Android 10.0"
          }
        },
        videoId: VIDEO_ID
      },
      {
        params: { prettyPrint: "false" },
        headers: {
          authorization: `SAPISIDHASH ${SAPISIDHASH}`,
          cookie: COOKIES,
          "user-agent":
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
          accept: "*/*",
          "content-type": "application/json"
        }
      }
    );

    const data = response.data;
    console.log("🎬 Video Details:", data.videoDetails);
    console.log("📹 Streaming Data:", data.streamingData);
  } catch (error) {
    console.error("❌ Error:", error.response?.data || error.message);
  }
}

fetchVideo();
