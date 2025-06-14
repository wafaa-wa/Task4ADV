type FooterLinkColumnItem = {
    id: number;
    ColumnTitle: string;
    ColumnLink: string,
    links: (string | { type: "buttons"; buttons: { icon: string }[] })[];


}

export const FooterLinkColumnData: FooterLinkColumnItem[] = [
    {
        id: 1,
        ColumnLink: "#services",
        ColumnTitle: "Service",
        links: ["Payment & Tax", "Features", "View Booking", "Support"],

    },
    {
        id: 2,
        ColumnLink: "#about",
        ColumnTitle: "About",
        links: ["About us", "News", "Pricing", "New Property"],

    },
    {
        id: 3,
        ColumnLink: "#location",
        ColumnTitle: "Our Location",
        links: [
            "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            {
                type: "buttons",
                buttons: [
                    { icon: "/assests/images/Footer/facebook-fill.svg" },
                    { icon: "/assests/images/Footer/twitter-fill.png" },
                    { icon: "/assests/images/Footer/linkedin-fill.png" }
                ]
            }
        ]
    }
]