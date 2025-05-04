import { Bebas_Neue ,Playfair_Display} from "next/font/google";
import localFont from 'next/font/local'


const BebasNeue = Bebas_Neue({
    weight:"400",
})
const PlayFair = Playfair_Display({
    weight:"500"
})
const Futura = localFont({src:'../public/futura-1.ttf'})

export {BebasNeue, PlayFair, Futura}
