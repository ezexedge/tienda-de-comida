import React, {useState,useEffect} from 'react';
const auth = window.firebase.auth()
const provider = new window.firebase.auth.GoogleAuthProvider()



export function useAuthentication(){
    const [authenticated , setAuthenticated] = useState('loading')


    function login(){

        auth.signInWithPopup(provider)


    }   

    function logout(){
        auth.signOut().then(function(user){
            if(user){
                setAuthenticated(user)
            }else{
                setAuthenticated()
            }
        })
        .catch(function(error){

        })
    }


    useEffect(()=>{
        auth.onAuthStateChanged(function(user){
            if(user){
                setAuthenticated(user)
            }else{
                setAuthenticated()
            }
        },function(error){

            console.log(error)
            
        })
    },[])

    

    return {
        login,
        loggedIn: authenticated,
        logout
    }
}




