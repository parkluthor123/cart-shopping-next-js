import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
    }

    .container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        height: 100vh;
        padding: 20px;
    }

    .form-field
    {
        max-width: 764px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin: 0 auto;
        margin-top: 50px;
    }

    @media (max-width: 768px) {
        .container{
            flex-direction: column;
            height: auto;
        }
    }
`;

export const CartArea = styled.div`
    width: 100%;
    padding: 10px;
        .cart-items
        {
            width: 100%;
            display: flex;
            align-items: center;
            max-width: 420px;
            margin: 15px 0;
            gap: 20px;
                span{
                    display: flex;
                    font-weight: bold;
                }
                figure{
                    width: 100%;
                    max-width: 50px;
                    height: 50px;
                    position: relative;
                    background-color: #fafafa;
                        img{
                            position: absolute;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            object-fit: cover;
                        }
                }

                .btn-cart-wrapper
                {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    width: 100%;
                    gap: 10px;
                        button{
                            width: 50px;
                            height: 50px;
                            color: #fff;
                            border-style: none;
                            border-radius: 5px;
                            font-weight: bold;
                            font-size: 20px;
                            cursor: pointer;
                        }

                        [data-cart="add"]{
                            background-color: rgb(41, 182, 246);
                        }

                        [data-cart="remove"]
                        {
                            background-color: red;
                        }
                }
        }
    .btn-area
    {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #ccc;
            button{
                width: 100%;
                display: flex;
                justify-content: center;
                min-height: 40px;
                align-items: center;
                cursor: pointer;
                border-style: none;
                background-color: rgb(41, 182, 246);
                border-radius: 5px;
                color: #fff;
                font-weight: bold;
                font-size: 18px;
            }
    }

    .clear-button
    {
        width: 100%;
        display: flex;
        justify-content: center;
        min-height: 40px;
        align-items: center;
        cursor: pointer;
        border-style: none;
        background-color: red;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
        font-size: 15px;
        margin: 20px 0;
    }

    .total-area
    {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
            span{
                display: flex;
            }
    }
`;