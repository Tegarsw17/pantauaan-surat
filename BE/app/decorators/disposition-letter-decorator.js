const dispositionLetterDecorator = (data, username) => {

    return {
        id: data.id,
        nomor_surat: data.nomor_surat,
        pengirim: data.pengirim,
        penanggung_jawab: username,
        perihal: data.perihal,
        tanggal_surat: data.tanggal_surat,
        tanggal_diterima: data.tanggal_diterima,
        catatan: data.catatan
    }
}

const dispositionLetterArrayDecorator = async (data, userMap) => {
    const mappedData = data.map((data) => {
        const user = userMap[data.recipient_id].fullname ? userMap[data.recipient_id].fullname : '';
        return {
            id: data.id,
            nomor_surat: data.nomor_surat,
            pengirim: data.pengirim,
            penanggung_jawab: user,
            perihal: data.perihal,
            tanggal_surat: data.tanggal_surat,
            tanggal_diterima: data.tanggal_diterima,
            catatan: data.catatan
        }
    })
    return await Promise.all(mappedData)
} 

module.exports = {
    dispositionLetterDecorator,
    dispositionLetterArrayDecorator
}