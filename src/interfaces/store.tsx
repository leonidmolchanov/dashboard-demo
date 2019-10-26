import avtorType from "./avtors";
import cardsType from "./cards";

interface storeType {
    cardsStore?:cardsType,
    avtorsStore?:avtorType,
    searchString?:string

}

export  default storeType