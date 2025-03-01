import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Drawer, Menu, Badge, Input } from 'antd';
import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { Search } = Input

function Header() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate()

    const cartItemCount = useSelector((state) => state.cart.items.length);

    const onSearch = (value) => {
        navigate(`/products?search=${encodeURIComponent(value)}`)
    }

    return (
        <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">
                    <Button
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setVisible(true)}
                        className="md:hidden"
                    />

                    <div className="flex items-center gap-8">
                        <Link to="/">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBUs8mKlyD2XF701SqYrXCCab96Afb.png"
                                alt="Dike Organics Logo"
                                className="h-12 w-auto"
                            />
                        </Link>

                        <nav className="hidden md:block">
                            <Menu mode="horizontal" className="border-none bg-transparent">
                                <Menu.Item key="products">
                                    <Link to="/products">Products</Link>
                                </Menu.Item>
                                <Menu.Item key="about">
                                    <Link to="/about">About Us</Link>
                                </Menu.Item>
                                <Menu.Item key="why">
                                    <Link to="/why-cold-pressed">Why Cold-Pressed?</Link>
                                </Menu.Item>
                                <Menu.Item key="contact">
                                    <Link to="/contact">Contact</Link>
                                </Menu.Item>
                            </Menu>
                        </nav>
                    </div>

                    <div className="flex items-center gap-5">
                        <Search
                            placeholder="Search products"
                            onSearch={onSearch}
                            style={{ width: 200 }}
                            className="hidden md:block"
                        />
                        <Link to="/cart">
                            <Badge count={cartItemCount} overflowCount={99}>
                                <Button
                                    type="text"
                                    icon={<ShoppingCartOutlined />}
                                    size="large"
                                />
                            </Badge>
                        </Link>
                        <Link to="/auth">
                            <Button
                                type="primary"
                                icon={<UserOutlined />}
                                size="large"
                            >
                                Sign In
                            </Button>
                        </Link>
                    </div>

                    <Drawer
                        title="Menu"
                        placement="left"
                        onClose={() => setVisible(false)}
                        open={visible}
                    >
                        <nav className="flex flex-col gap-4">
                            <Link to="/" onClick={() => setVisible(false)}>
                                Home
                            </Link>
                            <Link to="/products" onClick={() => setVisible(false)}>
                                Products
                            </Link>
                            <Link to="/about" onClick={() => setVisible(false)}>
                                About Us
                            </Link>
                            <Link to="/why-cold-pressed" onClick={() => setVisible(false)}>
                                Why Cold-Pressed?
                            </Link>
                            <Link to="/contact" onClick={() => setVisible(false)}>
                                Contact
                            </Link>
                            <Search
                                placeholder="Search products"
                                onSearch={(value) => {
                                    onSearch(value)
                                    setVisible(false)
                                }}
                                style={{ width: "100%" }}
                            />
                        </nav>
                    </Drawer>
                </div>
            </div>
        </header>
    );
}

export default Header;
