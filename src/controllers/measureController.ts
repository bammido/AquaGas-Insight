import customerRepository from "../repository/customer.repository"

class MeasureControler {
    async teste() {
        await customerRepository.seed()
    }
}

export default new MeasureControler()