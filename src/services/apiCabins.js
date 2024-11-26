import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(){
const { data, error } = await supabase.from("cabins").select("*")
 if(error){
    console.error(error)
    throw new Error("Cabins could not be loaded")
 }
  
  return data

}
 
export async function createEditCabin(newCabin, id){
   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/","")
   const imagePath = hasImagePath ? newCabin : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}` 

  //https://gdicgoemdcgecuymzvfx.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg


   
  //1 Create/edit Cabin  

  let query = supabase.from("cabins")

  // A) Create
  if(!id) query =  query.insert([{...newCabin, image: imagePath}])


  // B) Edit
  if(id) query =  query.update({...newCabin, image: imagePath})
  .eq("id", id)
  .select()

const { data, error } = await query.select().single()

if(error){
   console.error(error)
   throw new Error("Cabins could not be created")
}
 
//2 telecharger 

if(hasImagePath) return data;

const { error: storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image)

 //3 supprimer le cabin s'il ya une erreur lors du telechargement de l'image correspondant

  if(storageError){
   await supabase
   .from('cabins')
   .delete()
   .eq('id', data.id)

   console.error(storageError)
   throw new Error("Cabin image could not uploaded and the cabin was not created")
  }

 return data

}

export async function deleteCabin(id){
   
const {data, error } = await supabase
.from('cabins')
.delete()
.eq('id', id)
if(error){
   console.error(error)
   throw new Error("Cabin could not be deleted")
}
 
 return data

}