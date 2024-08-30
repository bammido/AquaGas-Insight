import { Customer } from "../entity/Customer"
import { AppDataSource } from "../data-source"

class CustomerRepository {
    async seed() {
        const newCustomer =  new Customer()
        newCustomer.code = 'zara'

        const photoRepository = AppDataSource.getRepository(Customer)

        const customer = await photoRepository.save(newCustomer)

        console.log("Photo has been saved")

        return customer
    }
}

export default new CustomerRepository()