
const roleDecorator = async (payload) => {
    const roleMapping = payload.map((role) => {
        return {
            id_role: role.id,
            jabatan: role.jabatan,
            role: role.role
         }
    })

    return await Promise.all(roleMapping)
     
}

module.exports = {
    roleDecorator
}