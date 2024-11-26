import { useSearchParams } from "react-router-dom"
import Select from "./Select"

function SortBy({options}) {
 const [searchParams, SetSearchParams] = useSearchParams()   

 const sortBy = searchParams.get("sortBy") || ""

 function handleChange(e){
  searchParams.set("sortBy", e.target.value)
  SetSearchParams(searchParams)

 }

    return (
     <Select 
      options={options} 
      type="white"
      onChange={handleChange}
      value={sortBy}
      />
    )
}

export default SortBy
