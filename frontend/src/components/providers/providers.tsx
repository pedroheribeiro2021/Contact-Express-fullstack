import { ReactNode } from "react";
import { UserProvider } from "../../context/userContext";

interface iProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: iProvidersProps) => {

    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}