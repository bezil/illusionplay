import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from '../boot/spotify'
const sfy = new SpotifyWebApi();

const state = {
    accesstoken:null,
    userdetails:{},
    playlists:{},
    playing:false,
    item:null,
    list:{
        images:['../assets/albumcover.png']
    }
}


const mutations = {
    addtoken(state, payload){
        state.accesstoken = payload
    },
    addUserDetails(state, payload){
            state.userdetails = payload
            console.log('userdetails'+ state.userdetails.display_name)
    },
    addPlaylists(state, payload){
        state.playlists = payload
    },
    addList(state, payload){
        state.list = payload
    },
    addSong(state, payload){
        state.item = payload
        state.playing = true
    }
}

const actions = {
    getAccessToken({ commit }) {
        let _token = getTokenFromResponse().access_token;
        console.log('ACCESSTOKEN:'+ _token)
        if(_token != undefined){
            commit('addtoken',_token)
            this.$router.push('player')
        }

    },

    getUserDetails({ state, commit }) {
        if(!state.accesstoken){
            this.$router.push('')
        }
        sfy.setAccessToken(state.accesstoken)
        sfy.getMe().then((user) => {
            commit('addUserDetails',user)
         });
    },

    getPlaylists({ state, commit }){
        sfy.setAccessToken(state.accesstoken)
        sfy.getUserPlaylists().then((playlists) => {
            commit('addPlaylists',playlists)
         });
    },

    getTopPlaylist({ state, commit }){
        let pl = '37i9dQZEVXbLZ52XmnySJg'
        sfy.setAccessToken(state.accesstoken)
        sfy.getPlaylist(pl).then((response) => {
            commit('addList',response)
         });
    },

    getTrackUri({state, commit }, trackuri){
        console.log(trackuri)
        sfy.setAccessToken(state.accesstoken)
        sfy.play({uris:[trackuri]}).then((response) => {
            console.log(response)

            sfy.getMyCurrentPlayingTrack().then((r) => {
                console.log(r)

            commit('addSong',r)
         });
        });
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
