import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from "next/router";
import React from "react";
import { CartArea } from "../styles/global";
import { useCart } from "react-use-cart";
import Link from "next/link";
import DeleteIcon from '@mui/icons-material/Delete';

const pages = ['Home', 'Register Product'];

const Navbar: React.FC = () => {

    const router = useRouter();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { 
            items,
            isEmpty,
            totalUniqueItems,
            totalItems,
            cartTotal,
            updateItemQuantity,
            removeItem,
            emptyCart,
        } = useCart();

    return (
        <>
           <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Products
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => router.push('/')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>

                        <Button
                            onClick={() => router.push('/register-product')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Register Product
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            onClick={handleOpenUserMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <ShoppingCartIcon />
                        </Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            <CartArea>
                                {!isEmpty ? (
                                    <>
                                        {Object.values(items).map((item: any, index: number) => {
                                            if(index <= 5)
                                            {
                                                return(
                                                    <React.Fragment key={item.id}>
                                                        <div className="cart-items">
                                                            <figure>
                                                                <img src={item.image} alt={item.name} />
                                                            </figure>
                                                            <span className="name-product">
                                                                {item.name}
                                                            </span>
                                                            <span className="price">
                                                                ${item.price}
                                                            </span>
                                                            <div className="btn-cart-wrapper">
                                                                {/* @ts-ignore */}
                                                                <button type="button" data-cart="remove" onClick={()=>updateItemQuantity(item.id, item?.quantity - 1)}>-</button>
                                                                <span>{item.quantity}</span>
                                                                {/* @ts-ignore */}
                                                                <button type="button" data-cart="add" onClick={()=>updateItemQuantity(item.id, item?.quantity + 1)}>+</button>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            }
                                        })}
                                        <button type="button" className="clear-button" onClick={()=>emptyCart()}>
                                            <DeleteIcon />
                                        </button>
                                        <Link href="/checkout">
                                            <a title="See all itens" style={{ display: 'flex', justifyContent: "center" }}>See all items</a>
                                        </Link>
                                        <div className="total-area">
                                            <strong>Total: </strong>
                                            <span className="total-text">${cartTotal}</span>
                                        </div>
                                        <div className="btn-area">
                                            <button type="button">Finalize order</button>
                                        </div>
                                    </>
                                    ):(
                                        <>
                                            <span>The cart is empty</span>
                                        </>
                                    )}
                            </CartArea>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    );
}

export default Navbar;