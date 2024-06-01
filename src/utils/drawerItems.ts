import { USER_ROLE } from "@/constant";



export const drawerItems = (role: string) => {

    const roleMenu = [];


    const commonMenuItems = [
        {
            title: 'Change Password',
            path: `${role}/change-password`
        },
        {
            title: 'My Profile',
            path: `${role}/my-profile`
        },
    ];

    switch (role) {
        case USER_ROLE.ADMIN:
            roleMenu.push(
                {
                    title: 'All User',
                    path: `${role}/user`
                },
                {
                    title: 'Add Pet',
                    path: `${role}/pet`
                },
                {
                    title: 'All Pet',
                    path: `${role}/pets`
                },
            )
            break;

        case USER_ROLE.USER:
            roleMenu.push(
                {
                    title: 'My Adoption',
                    path: `${role}`
                },
            )
            break;

        default:
            break;
    }

    return [...roleMenu, ...commonMenuItems];
}