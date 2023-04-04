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
module.exports = {
    suratDecorator
}