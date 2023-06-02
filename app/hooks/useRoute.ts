import { useMemo } from 'react';
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { usePathname } from "next/navigation"
import useConversation from "./useConversation";
import { signOut } from "next-auth/react";

const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();
    
    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            acitive: pathname === '/users'
        },
        {
            label: 'Logout',
            href: '#',
            onClick: () => signOut(),
            icon: HiArrowLeftOnRectangle
        }
    ], [pathname, conversationId]);

    return routes;
}

export default useRoutes;