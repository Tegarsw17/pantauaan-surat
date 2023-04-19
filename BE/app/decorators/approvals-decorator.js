const approvalDecorator = async (payload) => {
    return {
        approval_id: payload.id,
        surat_id: payload.surat_id,
        pemberi_approval: payload.user.fullname,
        pengaju_approval: payload.surat.user.fullname,
        catatan: payload.catatan
    }
}


const approvalArrayDecorator = async (payload) => {
    const mapping = payload.map((item) => {
        return {
            approval_id: item.id,
            surat_id: item.surat_id,
            pemberi_approval: item.user.fullname,
            pengaju_approval: item.surat.user.fullname,
            catatan: item.catatan
        }
    })
    return await Promise.all(mapping)
}

const ApprovalSuratArrayDecorator = async (payload) => {
    const mappedSurat = payload.map((approval) => {
        return {
            id: approval.surat.id,
            admin: approval.surat.user.fullname,
            jenis_surat: approval.surat.jenis_surat,
            nomor_agenda: approval.surat.nomor_agenda,
            nomor_surat: approval.surat.nomor_surat,
            pengirim: approval.surat.pengirim,
            perihal: approval.surat.perihal,
            tanggal_surat: approval.surat.tanggal_surat,
            tanggal_diterima: approval.surat.tanggal_diterima,
            status: approval.surat.status,
            control: approval.surat.control,
            unit_proses: approval.surat.unit_proses,
            tindak_lanjut: approval.surat.tindak_lanjut,
            keterangan: approval.surat.keterangan,
            file: approval.surat.upload_letters.map((document) => {
                return {
                    filename: document.filename,
                    url: document.url
                }
            })
        }
    }) 
    return await Promise.all(mappedSurat)
}   
module.exports = {
    approvalDecorator,
    approvalArrayDecorator,
    ApprovalSuratArrayDecorator
}