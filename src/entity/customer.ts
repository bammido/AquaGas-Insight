import { Entity, PrimaryColumn } from "typeorm"

@Entity({ name: "Customers" })
export class Customer {

    @PrimaryColumn({ name: 'code', primary: true, type: "varchar" })
    code: string
}
