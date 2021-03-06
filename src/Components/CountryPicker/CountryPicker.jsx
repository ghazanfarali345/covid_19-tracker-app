import React, { useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'


const styles ={
    margin:'30px 0'
}

const CountryPicker = ({ countries, onchange }) => {
    useEffect(() => {

    }, [countries])

    // console.log(countries)
    return (
             
            <FormControl style={styles} >
                <NativeSelect  onChange={(e) => { onchange(e.target.value) }}>
                    <option value="">Global</option>
                    {countries.map((name, i) => {
                        return <option value={name} key={i}>{name}</option>
                    })}
                </NativeSelect>
            </FormControl>
    )
}
export default CountryPicker