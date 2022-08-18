function detecthost(){
    var str0 =window.location.hostname
    const str = "Mergulharte"
    return str
}
function ortography(str){
    const capitalized = str[0].toUpperCase() + str.substr(1);
    return capitalized
}
function hostDetect() {
    var portal = detecthost()
    console.log(portal)
    return ortography(portal);
}
function ProjektDetect (){
    var A =hostDetect()
    return A.replace(".", " ");
}
export var ProjectHost =ProjektDetect()

