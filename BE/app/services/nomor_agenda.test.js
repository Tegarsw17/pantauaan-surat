
const nomorAgenda = require ('./nomor_agenda')

describe('test nomor agenda', () => {
    it('return 101', async () => {
        expect(await nomorAgenda(100)).toBe(101)
    })
})