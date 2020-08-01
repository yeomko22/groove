import axios from 'axios';

const getTrackBackground = async (TrackId, trackPlayerRef) => {
  const url = `https://vision.googleapis.com/v1/images:annotate`;
  const body = {
    requests: [
      {
        image: {
          source: {
            gcsImageUri: `gs://groove-dev/tracks/artwork/org/${TrackId}.jpg`,
          },
        },
        features: [
          {
            maxResults: 3,
            type: 'IMAGE_PROPERTIES',
          },
        ],
      },
    ],
  };

  const options = {
    url: url,
    method: 'post',
    headers: {
      authorization:
        'Bearer ya29.c.Ko8B1gfjbKY3ZGEVgn2QXhG2q5hqS-NbrRx5XlkGclx1z_WcDknODP2baE9dpKW_-6FsxJypzIJa4dY6FYGD4cGD6pgVmlcqlIkFuUt9bweBQGm9Qps9Xo_wo85nfJalXl3WPITVojLmMcxoIpEKOCkv6aGSlXZCe1dWiY5u4Cc8-nU9CgZfNEqiUAd3w31TcrI',
      'content-type': 'application/json; charset=utf-8',
    },
    data: body,
  };

  const { data } = await axios(options);
  const colors = await data.responses[0].imagePropertiesAnnotation
    .dominantColors.colors;
  const res = colors.map((item) => {
    const { color } = item;
    return `rgba(${color.red}, ${color.green}, ${color.blue}, 0.5)`;
  });
  trackPlayerRef.current.style.background = `linear-gradient(45deg, ${res[0]}, ${res[1]} , ${res[2]})`;
};

export default getTrackBackground;
