import MyComponent from '../../../../slices/TextImageRight';

export default {
  title: 'slices/TextImageRight'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[],"primary":{"title":[{"type":"paragraph","text":"Irure labore fugiat mollit nisi est aliquip minim eu ad esse enim. Nulla eu quis nostrud ad quis.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TextImageLeft = () => <MyComponent slice={{"variation":"textImageLeft","name":"TextImageLeft","slice_type":"text_image_right","items":[],"primary":{"title":[{"type":"heading1","text":"Productize dot-com markets","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"}},"id":"_TextImageLeft"}} />
_TextImageLeft.storyName = 'TextImageLeft'
