type HeroCardItem = {
    id: number;
    IconHeroCard: string;
    TitleCard: string;
    DescriptionCard: string;
};
export const HeroCardData: HeroCardItem[] = [
    {
        id: 1,
        IconHeroCard: "/assests/images/Hero/location.svg",
        TitleCard: "Location",
        DescriptionCard: "Ahmedabad, India",

    },
    {
        id: 2,
        IconHeroCard: "/assests/images/Hero/dollar-circle.svg",
        TitleCard: "Price",
        DescriptionCard: "$1000 - $10,000",

    },
    {
        id: 3,
        IconHeroCard: "/assests/images/Hero/house.svg",
        TitleCard: "Type of Property",
        DescriptionCard: "Apartment",

    }

]