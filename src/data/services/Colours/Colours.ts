export const ColoursService = {
    getColourByZone(zone: string): string {
        const colours: any = {
            "sudeste": "#ffebcd",
            "norte": "#f08080",
            "nordeste": "#c8a2c8",
            "centro-oeste": "#c8f4d5",
            "sul": "#bdf7ff"
        };
        return colours[zone.toLowerCase()] ?? "";
    }
}