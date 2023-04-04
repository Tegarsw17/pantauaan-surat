const suratDecorator = (payload) => {
    return {
        surat_id: payload.id
    }
}

module.exports = {
    suratDecorator
}