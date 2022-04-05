import { Button, ButtonGroup, FilledInput, FormControl, Input, InputLabel } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { api } from "../services/api";

const RegisterProduct: React.FC = () => {
    const [data, setData] = useState<any | null>(null);
    const [image, setImage] = useState<any>(null);
    const form = useRef<HTMLFormElement>(null);

    const getData = (e: any) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    
    const getImage = (e: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    const sendData = async (e: any)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("price", data?.price);
        formData.append("description", data?.description);
        formData.append("image", image);

        await api.post("/store-products", formData)
            .then((response)=>{
                if(response.data.status == 200)
                {
                    form.current?.reset();
                    alert("Product added successfully!");
                }
            })
    }

    return (
        <>
            <form className="form-field" onSubmit={sendData} ref={form}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="product-name">Product Name</InputLabel>
                    <FilledInput id="product-name" onChange={getData} name="name"/>
                </FormControl>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="price">Price</InputLabel>
                    <FilledInput id="price" onChange={getData} name="price"/>
                </FormControl>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <FilledInput id="description" onChange={getData} name="description"/>
                </FormControl>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="image">Image</InputLabel>
                    <FilledInput id="image" onChange={getImage} type="file" name="image" />
                </FormControl>
                <FormControl variant="standard" fullWidth>
                    <ButtonGroup>
                        <Button type="submit">Save</Button>
                    </ButtonGroup>
                </FormControl>
            </form>
        </>
    );
}

export default RegisterProduct;