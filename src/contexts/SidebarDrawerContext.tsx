import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerData = UseDisclosureReturn;

const SideDrawerContext = createContext({} as SidebarDrawerData);

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(()=> {
    disclosure.onClose();
  }, [router.asPath])

  return(
    <SideDrawerContext.Provider value={disclosure}>
      {children}
    </SideDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SideDrawerContext);