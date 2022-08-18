import { MD5CryptData } from "./md5EncryptInfo";
import { tkgen, tkgenum } from "./tokengen";

export const madedCodeFromFront = tkgenum(250)
export var FrontToken = madedCodeFromFront +tkgen(300)+MD5CryptData(madedCodeFromFront)