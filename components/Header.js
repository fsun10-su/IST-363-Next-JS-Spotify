import { useState } from "react";

import Container from "./Container"
import Row from "./Row"
import Col from "./Col"
import Logo from "./Logo"
import Nav from "./Nav"
import ButtonUI from "./ButtonUI"
import NavOverlay from "./NavOverlay"

import styles from './header.module.scss'

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return <header className={styles.header}>
        {isMenuVisible &&
            <NavOverlay clickHandler={setMenuVisible}/>
        }
        <Container>
            <Row 
                justifyContent="space-between"
                alignItems="center"
            >
                <Col xs="3" sm="3">
                    <Logo color="white" size={2} />
                </Col>
                <Col xs="9" sm="9" textAlign="right">
                    <Nav />
                    <ButtonUI 
                    icon="menu" 
                    color="white"
                    clickHandler = {() => {
                        setMenuVisible(true)
                    }}
                    />
                </Col>
            </Row>

        </Container>
    </header>
}

export default Header;