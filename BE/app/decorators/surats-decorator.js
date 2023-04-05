const suratDecorator = (payload) => {
    return {
        surat_id: payload.id
    }
}
// const suratArrayDecorator = async (surat) => {
//     const mappedSurat = surat.map((data)=>{
//         return {
//             id: data.id,
//             admin:
//             "id": 1,
//             "user_id": 1,
//             "jenis_surat": "penting",
//             "nomor_agenda": 2,
//             "nomor_surat": "21",
//             "pengirim": "Pelabuhan Perikanan",
//             "perihal": "permintaan Ijin",
//             "tanggal_surat": "2022-03-21T00:00:00.000Z",
//             "tanggal_diterima": "2022-03-21T00:00:00.000Z",
//             "status": "diterima",
//             "control": "",
//             "unit_proses": "APB",
//             "tindak_lanjut": "segera",
//             "keterangan": "aman",
//           images: data.images.map((image) => {
//             return {
//               image_id: image.id,
//               url: image.url
//             }
//           }),
//         }
//       })
//       return await Promise.all(mappedSurat)
// }

const suratObjekDecorator = async (payload) => {
    return {
        id: payload.id,
        admin: payload.user.fullname,
        jenis_surat: payload.jenis_surat,
        nomor_agenda: payload.nomor_agenda,
        nomor_surat: payload.nomor_surat,
        pengirim: payload.pengirim,
        perihal: payload.perihal,
        tanggal_surat: payload.tanggal_surat,
        tanggal_diterima: payload.tanggal_diterima,
        status: payload.status,
        control: payload.control,
        unit_proses: payload.unit_proses,
        tindak_lanjut: payload.tindak_lanjut,
        keterangan: payload.keterangan,
        file: payload.upload_letters.map((document) => {
            return {
                filename: document.filename,
                url: document.url
            }
        })
    }
}

module.exports = {
    suratDecorator,
    suratObjekDecorator
}