// import { GoogleSpreadsheet } from "google-spreadsheet";

// const VALUES = {
//   type: "service_account",
//   project_id: "unix-interiors-88daa",
//   private_key_id: "561622cbc6b48d53d4c98723ecd8e2e014d906b2",
//   private_key:
//     "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDSCLnfSWuBB1AX\nElxgJDwFyY6FimoMNGtXZ67HAVveBoB3BYt+qPg34tRtCwTqbN9Tk3HnvWwI48e2\nR07fI/9zfiiReDrbg820LUrU4c/X5SeeamhAGVBxnRD8D3xH9VnX+enz/bYKS8eH\ntCfcVFN4Prf0CavFtIfqU3xRuq5X9OXP1pTpSscIM3FQhkhO1jzeBcM2vuvlwof1\nlQw8cXfwSBUgBpNzNQ5Zq2IqMmLcHpH92ocy3BUUnSh2ABH86QpbpqP/8+PzOJzC\nxjbvN5UN/TaN6wpqmhFxV7Iqkpx/yVl8J3BS1G1IV2/n7mNxu55ScsdDYXVAty36\nCd2H0DVtAgMBAAECggEAHo4CbEdECmtD7XdQVPQwfy8JOsgeEVR24SpGNNEvyibr\n/WSjHHP8WDT5bjuSJYBdJM1oXqwh0VFBtnS9Np0IBoct46u39ENCY5nLLxkCoYfG\nsbcNH3YPS9frpp+iFt3MiizjKgmYt/q6NjWxLs5drjqBjFDz2jkfJKmshj9AKa9F\nNJfqKy1aW/0i5rwrhBfWfh8a9/cYmQWNNIYKGnpWbY4PyGt4quka1PU6ZuG6cPLS\niwY5jt8RA53SA8ScESHcto0KZI2g2PP217imuDcI/uecL/rctsBTGnjx7FOs5Lql\n52s525ljMl2290t+MTg+6F07sg6paEOwFu/9WHaSCQKBgQD45g6SMrEXy6RY6ieb\nHdKsWv3wV3nyZib2nkfIcA1NkKVDMqmxWYubia+ODx4f2XoQEBhHC8PDFTPRNMN7\n4wbCjTIMAuZDra6qM0ZV28fRSzGamOBEvU+LuiWRLVYm3gENNg1B8tdwPeRYRKjM\nJC38JXqoYKSst4If+eDu3FHrxwKBgQDYBs3lvQD3ibB5cZ5canB1H+gOZkafz+OT\npfFPK2EUhP/1QCNyLISCD/Ea77zaKi/8luay8HZ2w/57kZzTYfRh5RIhsVUDSJP+\n0CvE6ZvgK9I9Lue9T0ilijEZD488bYrKolU4O+ufA6iZFmXTib32XWe2gct1YStg\n9Eoc5UeNKwKBgA0JuA+uehpd/4Ds2yBEAqomphC19FxfP4FBr07vl7LNdeq8N6lj\noG2IW9rcLd7LPJqkzTDDjACnFqzJz8eoj80XKlz4tekrqu+defy7Y48yGioYAf93\nzzfpi1g8gLvOe02e3DjtKJ3nkBOTnSf8aTBBIli5n0aw4i8cnszEW8I3AoGBAIe5\nJq1bZPsg984lM0CO4x7DMBGz8lU/0JSYIpcCAxlYQlP8uwhlrc7lYy7wRm+vJ70D\ntefgqh0OIJnUL3qjRV4oBI9EkcvhUpI6ifVKbFOYVJt6F8DZyiOvQg+jtfNaQ2Py\nP6Z4Bx49tzSPXORd2wqpPprsyz5xEUb11IZ5Cs5HAoGAchEwHx1tLCLGjDQ8eXjO\nUHei8tgx13LVC/k2qqdbh/VKkyr46FOig8fkvbcTcfJZVqf/+jxwAHPKZKPTEwDW\nk9syxhfWOO4O89EkoneXM+cawZMAhD/B67G+KYdD3JNT63A3tySH5uKvswPBMiNj\noGRkf2KOoVQHFd6JkuB1Rn4=\n-----END PRIVATE KEY-----\n",
//   client_email:
//     "unix-google-sheet@unix-interiors-88daa.iam.gserviceaccount.com",
//   client_id: "109467266498852231913",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url:
//     "https://www.googleapis.com/robot/v1/metadata/x509/unix-google-sheet%40unix-interiors-88daa.iam.gserviceaccount.com",
//   universe_domain: "googleapis.com",
// };

// // Config variables
// const SPREADSHEET_ID = "1eSwGfEQmfE_rcboX_bFY0MA9Q7uWFFoYjdJVTBm4Fks";
// const SHEET_ID = "714372108";

// const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

// export const appendSpreadsheet = async (row: any) => {
//   try {
//     await doc.useServiceAccountAuth({
//       client_email: VALUES.client_email ?? "",
//       private_key: VALUES.private_key ?? "",
//     });
//     // loads document properties and worksheets
//     await doc.loadInfo();

//     const sheet = doc.sheetsById[SHEET_ID ?? ""];
//     const result = await sheet.getRows();
//     console.log(result);
//   } catch (e) {
//     console.error("Error: ", e);
//   }
// };
