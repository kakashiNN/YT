import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ status: 'error', message: 'Missing url parameter' });
  }

  try {
    const response = await axios.post(
      'https://submagic-free-tools.fly.dev/api/facebook-download',
      { url },
      {
        headers: {
          'authority': 'submagic-free-tools.fly.dev',
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          'origin': 'https://submagic-free-tools.fly.dev',
          'pragma': 'no-cache',
          'referer': 'https://submagic-free-tools.fly.dev/facebook-downloader',
          'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
        }
      }
    );

    const data = response.data;

    let hd = '';
    let sd = '';

    if (data.videoFormats) {
      data.videoFormats.forEach(v => {
        if (v.quality === 'HD') hd = v.url;
        if (v.quality === 'SD') sd = v.url;
      });
    }

    res.status(200).json({
      status: 'success',
      hd,
      sd
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch data' });
  }
}
