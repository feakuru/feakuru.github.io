// Snippet:
// {
//     translate(
//         {
//             'ru': '',
//             'en': ''
//         },
//         this.props.lang
//     )
// }

export default function translate(obj, lang) {
    return obj[lang];
}