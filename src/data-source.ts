import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer } from "./entity/Customer"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5431,
    username: "postgres",
    password: "12345",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Customer],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
       console.log("database initialized!")
    })
    .catch((error) => console.log("database connection error", error))