/* logic:
menentukan jenis surat apakah surat masuk atau keluar
jika surat masuk/keluar makan akan mencari surat masuk terakhir
nomor agenda + 1
*/

const nomorAgendaService = async (noAgenda) => {

    let lastNumber = noAgenda;
    let currentDate = new Date();

    const getNewNumber = () => {
        const today = new Date();
        if (today.getFullYear() !== currentDate.getFullYear()) {
            lastNumber = 0;
            currentDate = today;
        }
        lastNumber += 1
    }

    lastNumber += 1
    return lastNumber
}

module.exports = nomorAgendaService