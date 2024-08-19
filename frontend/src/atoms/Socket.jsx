import { useContext , useEffect, useState, createContext  } from "react";
import io from 'socket.io-client';


const SocketContext = createContext(null)


export const useSocket=()=>{
    return useContext(SocketContext)
}


export const SocketProvider =({children})=>{
    const [socket  , setSocket] = useState(null)

    useEffect(()=>{
        const newSocket = io.connect("http://localhost:4000")
        setSocket(newSocket)

        return ()=>newSocket.disconnect()

    },[])
    return (
        <SocketContext.Provider value={socket}>
        {children}
        </SocketContext.Provider>
    )

}