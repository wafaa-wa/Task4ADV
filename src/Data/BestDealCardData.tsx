type BestDealCardItem = {
    id: number;
    filterOptions: Record<string, { CardImg: string }>;
    Label1: string;
    Label2: string;
};
export const BestDealCardData: BestDealCardItem[] = [
    {
        id: 1,
        filterOptions: {
            "Residential Property": { CardImg: "/assests/images/Best Deals/img1.png" },
            "Commercial Property": { CardImg: "/assests/images/Best Deals/img2.png" },
            "Agriculture Property": { CardImg: "/assests/images/Best Deals/img3.png" },
            "Industrial Property": { CardImg: "/assests/images/Best Deals/img1.png" },

        },

        Label1: "Featured",
        Label2: "3D",

    },
    {
        id: 2,
        filterOptions: {
            "Residential Property": { CardImg: "/assests/images/Best Deals/img2.png" },
            "Commercial Property": { CardImg: "/assests/images/Best Deals/img1.png" },
            "Agriculture Property": { CardImg: "/assests/images/Best Deals/img3.png" },
            "Industrial Property": { CardImg: "/assests/images/Best Deals/img2.png" },

        },
        Label1: "Featured",
        Label2: "3D",

    },
    {
        id: 3,
        filterOptions: {
            "Residential Property": { CardImg: "/assests/images/Best Deals/img3.png" },
            "Commercial Property": { CardImg: "/assests/images/Best Deals/img1.png" },
            "Agriculture Property": { CardImg: "/assests/images/Best Deals/img2.png" },
            "Industrial Property": { CardImg: "/assests/images/Best Deals/img1.png" },

        },
        Label1: "Featured",
        Label2: "3D",

    },
]