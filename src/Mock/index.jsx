const texts = [
    { text: 'Assalomu aleykum, bizning web sahifamizga hush kelibsiz' },
    { text: `"Ipoteka" so'zi fransuz tilidan kelib chiqqan bo'lib, "o'lim garovi" deya tarjima qilinadi. ` },
    { text: `"Kivi" nomli meva mavjud emas,u birinchi marotaba ushbu mevabisotishni boshlagan kompaniya nomidir.Mevaning o'zi esa "xitoy aktidiniyasi" deb nomlanadi.` },
    { text: `Burj Xalifa shunaqangi balandki, siz bir kunda quyosh botishi va quyoshchiqishini 2 marta ko'rishingiz mumkin.` },
    { text: `Tarvuz tarkibidagi likopen moddasi to'qimalarniziyonlanishdan ehtiyot qiladi, odamni yurak xastaliklariga duchor bo'lish xavfidan xalos etadi.` },
]

let defaoultText = Math.floor(Math.random() * texts.length);

export { defaoultText }
export default texts