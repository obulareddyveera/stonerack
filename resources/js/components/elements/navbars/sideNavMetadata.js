import { Dashboard, CalendarToday, ContactPage } from "@styled-icons/material";
import {
    CalendarAlt,
    CalendarCheck,
    UserAstronaut
} from "@styled-icons/fa-solid";
import { Docker } from "@styled-icons/simple-icons";
import { Admin } from "@styled-icons/remix-fill";

export default [
    {
        id: "adminLink",
        displayName: "Admin",
        translation: "sidemenu.admin",
        iconComponent: Admin,
        showSubmenu: true,
        type: "link",
        subMenu: [
            {
                id: "dashboardLink",
                displayName: "Dashboard",
                translation: "sidemenu.dashboard",
                iconComponent: Dashboard,
                className: "active",
                type: "link",
                url: "/"
            },
            {
                id: "godownsLink",
                displayName: "Godowns",
                translation: "sidemenu.godowns",
                iconComponent: Docker,
                type: "link",
                url: "/features/godowns/list"
            },
            {
                id: "staffLink",
                displayName: "Manage Staff",
                translation: "sidemenu.godowns",
                iconComponent: UserAstronaut,
                type: "link",
                url: "/features/staff/list"
            }
        ]
    },
    {
        id: "calendarLink",
        displayName: "Calendar",
        translation: "sidemenu.calendar",
        iconComponent: CalendarAlt,
        showSubmenu: false,
        type: "link",
        subMenu: [
            {
                id: "calendarToday",
                displayName: "Stock Calendar",
                translation: "sidemenu.myDay",
                iconComponent: CalendarToday,
                type: "link"
            },
            {
                id: "calendarCrop",
                displayName: "Delivary Calendar",
                translation: "sidemenu.cropCalendar",
                iconComponent: CalendarCheck,
                type: "link"
            }
        ]
    },
    {
        id: "contactsLink",
        displayName: "Phone Book",
        translation: "sidemenu.phoneBook",
        iconComponent: ContactPage,
        type: "link"
    }
];
