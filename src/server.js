import { Server } from "miragejs"
import books from './json/books.json'

export function makeServer() {
  let server = new Server({


    routes() {

      // fetch API start here
      this.namespace = "api"  //  /{yourdomainName/api/books}
      this.get("/books", (schema) => {
        return books
      })

      // fetch API end here

      // post API start here
      this.namespace = "api"  //  /{yourdomainName/api/books}
      this.post("/add", (schema,req) => {
        console.log("req,",req)
        const newBook=JSON.parse(req.requestBody)
        books.push(newBook)

      })
      // fetch API end here


    },
  })

  return server
}