// import { Pool } from 'pg';

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'epic-mail',
//   password: 'C00ljoe.',
//   port: 5432
// });

// export default {
//   /**
//    * @param {object}
//    * @param {object}
//    * @returns { object }
//    */
//   query(text, params){
//     return new Promise((resolve, reject) => {
//       pool
//       .query(text, params)
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       })
//     })
//   };
// }