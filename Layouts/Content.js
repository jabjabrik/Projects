import { Box, Container, Grid } from "@material-ui/core"
import { Fragment } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Content = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            <Grid container>
                <Grid item sm={2} xs={1} />
                <Grid item sm={8} xs={10}>
                    {children}
                </Grid>
                <Grid item sm={2} xs={1} />
            </Grid>
            <Footer />
        </Fragment>
    )
}

export default Content
