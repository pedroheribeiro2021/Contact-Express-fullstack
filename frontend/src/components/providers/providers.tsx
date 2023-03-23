import { ReactNode } from "react";
import { ContactContext, ContactProvider } from "../../context/contactContext";
import { UserProvider } from "../../context/userContext";

interface iProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: iProvidersProps) => {

    return (
        <UserProvider>
            <ContactProvider>
                {children}
            </ContactProvider>
        </UserProvider>
    )
}