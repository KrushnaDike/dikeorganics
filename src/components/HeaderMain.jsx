"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Drawer, Menu } from "antd"
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons"

function Header() {
    const [visible, setVisible] = useState(false)

    return (
        <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">
                    <Button type="text" icon={<MenuOutlined />} onClick={() => setVisible(true)} className="md:hidden" />

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

                    <Button type="text" icon={<ShoppingCartOutlined />} size="large" />

                    <Drawer title="Menu" placement="left" onClose={() => setVisible(false)} open={visible}>
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
                        </nav>
                    </Drawer>
                </div>
            </div>
        </header>
    )
}

export default Header

