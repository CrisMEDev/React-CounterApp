
export const getImagen = async() => {
    
    
    try {
        const apiKey = 'qzf3ZJnMp0UZ8XWinWruIjcItFVeMi7D';
        const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const { data } = await resp.json();
    
        const url = data.images.original.url;
    
        return url;
        
    } catch (error) {
        console.log(error);
        return 'No existe';
    }

}

getImagen();
