const approvalDecorator = async (payload) => {
    return {
        approval_id: payload.id,
        surat_id: payload.surat_id,
        pemberi_approval: payload.user.fullname,
        pengaju_approval: payload.surat.user.fullname,
        catatan: payload.catatan
    //     detail_surat
    //     id: payload.id,
    //     admin: payload.user.fullname,
    //     jenis_surat: payload.jenis_surat,
    //     nomor_agenda: payload.nomor_agenda,
    //     nomor_surat: payload.nomor_surat,
    //     pengirim: payload.pengirim,
    //     perihal: payload.perihal,
    //     tanggal_surat: payload.tanggal_surat,
    //     tanggal_diterima: payload.tanggal_diterima,
    //     status: payload.status,
    //     control: payload.control,
    //     unit_proses: payload.unit_proses,
    //     tindak_lanjut: payload.tindak_lanjut,
    //     keterangan: payload.keterangan,
    //     file: payload.upload_letters.map((document) => {
    //         return {
    //             filename: document.filename,
    //             url: document.url
    //         }
    //     })
    }
}

module.exports = {
    approvalDecorator
}