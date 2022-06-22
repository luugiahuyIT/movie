const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3329fd4012727d54885b14ad895dbd41',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;