import { useEffect, useState } from "react"
import { fetchCountries } from '../service/api.js';
import { Typography, NativeSelect } from "@mui/material";

const Countries = ({ handleCountryChange }) => {

    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const fetchApi = async() => {
            setCountries(await fetchCountries());
        }
        fetchApi();
    }, [])

    return (
        <>
            <Typography style={{marginBottom: 20}} variant="h5" color="textSecondary">Reported Cases or Deaths By Country</Typography>
            <NativeSelect onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value = "">India</option>
                { countries.map((country, i) => {
                    return (
                        <option key={i} value={country}>{country}</option>
                    )
                })}
            </NativeSelect>
        </>
    )
}

export default Countries;