import { useContext } from "react";
import { SessionContext } from "./session-context";

export function useSessionsContext() {
    const context = useContext(SessionContext);
    if(!context){
        throw new Error(
            "useSessionsContext must be used within a SessionProvider"
        );
    }
    return context;
}