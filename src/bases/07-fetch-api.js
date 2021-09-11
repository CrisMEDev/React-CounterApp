

const apiKey = 'qzf3ZJnMp0UZ8XWinWruIjcItFVeMi7D';


const peticionHttp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticionHttp.then( resp => {
//     resp.json().then( data => {
//         console.log(data);
//     });
// });


peticionHttp.then( resp => resp.json() )
            .then( ({data}) => {
                const {url} = data.images.original;

                const img = document.createElement('img');
                img.src = url;

                document.body.append( img );
            });
