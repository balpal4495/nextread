import * as convert from 'xml-to-json-promise';


// // convert an xml file to json
// convert.xmlFileToJSON('xmlfile.xml').then(json => {
//     console.log(json);
// });
//
// // convert raw xml data to json
// convert.xmlDataToJSON('<example>data</example>').then(json => {
//     console.log(json);
// });

class Api {
  getBooksFromName(name) {
    this.books = 0;
  }
}

export default Api;
