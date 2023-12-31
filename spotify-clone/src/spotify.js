
//endpoint is where we will send the user for authentication
export const authEndpoint = 
"https://accounts.spotify.com/authorize"

//after authorization youll be redirected to this URi
const redirectUri = "http://localhost:3000/"

const clientId = "0425d32438134c07affdb05c7840dbd6"

//the scope of what we are allowed to do through the app.
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

//retrieve the token from URL to prove authorization
export const getTokenFromUrl = () =>{
    return(
        window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial, item)=>{
                let parts = item.split('=')
                initial[parts[0]] = decodeURI(parts[1])

                return initial
            },{})
    )
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
