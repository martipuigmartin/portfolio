export const TimeLineData = [
    {year: 2020, text: 'Mi aventura comenzó, empece a estudiar DAW.',},
    {year: 2021, text: 'Empece a trabajar en FarmaOffice.',},
    {year: 2021, text: 'Acabé el primer año del grado.',},
    {year: 2022, text: 'Mi estancia en la empresa acabó.',},
    {year: 'AHORA', text: 'El grado finalizó, se abre una nueva y fascinante etapa.',},
];

export const presentYear = new Date().getFullYear();

export const reformatString = (string) => (
    string.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
);
