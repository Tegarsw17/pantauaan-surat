const suratDecorator = (payload) => {
    return {
        surat_id: payload.id
    }
}
const suratArrayDecorator = async (surat) => {
    const mappedSurat = surat.map((data)=>{
        return {
          id_Surat : data.id,
          name_item: data.name_item,
          category_id: data.category_id,
          category_name: data.category.category_name,
          description: data.item_description,
          price: data.price,
          quantity: data.quantity,
          images: data.images.map((image) => {
            return {
              image_id: image.id,
              url: image.url
            }
          }),
        }
      })
      return await Promise.all(mappedSurat)
}
module.exports = {
    suratDecorator
}