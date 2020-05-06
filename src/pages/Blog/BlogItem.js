import React from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography"
import { deepOrange } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 5,
        width: "80%",
        [theme.breakpoints.down("xs")]: {
          width: "100% !important", // Overrides inline-style
        },
      },
      title:{
        fontSize:30,
        marginBottom:10,
      },
      avatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        // color: theme.palette.getContrastText(deepOrange[500]),
        // backgroundColor: deepOrange[500],
        marginRight: 10,
      },
}));
export default function BlogItem() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
      <Container maxWidth="xl" className={classes.root}>
       <Box display="flex" flexDirection="column">
        <Typography component="h2" variant="h5" className={classes.title}>
        Title of a longer featured blog post
        </Typography>
        <Box display="flex" flexDirection="row">
        <Avatar className={classes.avatar} src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAA8FBMVEVIWmn/////6L7V4e3svmo9vJP53KTexJI5Tl9DVmVGWGhAU2PvwGr/6sGNl5+vtbvv8PG5vsNOX20pQlXe4eOdpax2go1YaHWBjJXo6uswSFlwfIc8U2fy9fhebXqkrLTvxHfn7fP3xWr84rLGy9DHpmrxyoP00ZDVvo+vl2mIf2nPrGpbZGiVhmlRX2fqumDgtmquo4nt0Zu4xdF2dGikkGkwTmi7nmlqbWmjnoyQjH21pYTKuJG/sI98fHTo2LWyrJrMwaZud3qBiIb69Onp3cb/9N/+7c7J6uCb1sPg8uyx3s+02NYhuImEybtkw6ZqCvOYAAAJXElEQVR4nLWbeX/auBaGhSHCC2YxZnEAQzDLZKWXpHTa27lpZzqZ6b1t+v2/zZXlBdmWdCT3N+9fhNjSw3uOFksyatRS398MRt1xOPE85HmTcNwdDTZ+v15hqEb1vWno2abpOJZto1i2bTmO6VheOO3VANFkCHpTj9SeVF2WjWzHNL1pL/jnGPxlODQtfv0MiWUOw6X/TzAEg5C4DdSfyXLMcKDshiJD0PVMVYAUw/S6ihRKDH5XlALSoDjmVCkkCgz+eOhoAyRyhmMFCpAh6Dp1CSiFA0cEYhignyGgFGjwUwz+7PInCWJdzuQBkTIsNduCSJa5rMkQzEx50facyLEcy7LIB2nDMWeSrBAzbKSZQOo/PTzdX2+3t0Tb67c3d1IOB230GUZDyQ+zTw8371rr9bqTa71ube/vTkIMezjSZFhMJXGYz5+2LVJtqyTyze0NmotuM6cLHYa+JBXs+dNttf4c4/ZJaIU544/rXIa+J06F+cN2LSKgFOvtncgKx+NC8Bh8T9gk7fm90IOzF/cngRWWx+spOAz+RIxgv4MIYq2vbR2IKkNf4sLpdq2AQCDeiZLC4oSjwiBDQLcqLlCI7UlQCAeizLCYSdJxq4oQh0OYmLNyEy0zSPqF07U6AoG4EUGYUznDSIwwf1LLhVx3wn5iJGPYDIUItt3SsYE0UWFKoOFGzBAg8Rgxv9a0odV5EkXDRoGQQZKP9p0mAWF4IzTCmYkYlpJx6qTUORW1FhqBCpMahsGXINSwIc4IIQMyfS7DTDJxm7/Vt4FACJsGsmY8hoFs+np6U4dh/VZsxOWgyhBICJD9q26jSHy4lU0HgwpDV3Z5vVAQ/SqZYXbLDL70UcZSHqxKRtxIJqWOX2IYSyfRD/VcaHWEI1fMMC4y+OJOGtVOhzghhN0U0dAvMEyloZjf12RotWQMWUYkDIH8iUowah8kBuA9vaXzIHv8MgOGQdoo+JOXw2GH90KGleuuKMOTjCE1gjIEnhSh2iw6rdU+inZiIyLXxTCD7QU5w0AeChslvWQGstrjyHCjFe/3Jx5FrmEY8eeOcDZFZQ5yhlD+iG8/vKElYyOK5VLtyyZ0Disc0Q8riuBickXnXspghRmDbMA8M3Swa5C6DYOWX0zIziEOjpsg7I3kIiP+QzJiUCP8lGEJLPckDLu0ZKpon6QcfehaJcFJEBITqFYwg7NMGYBQpAyRwYoYEkU4VhQl9hAE0lYiN0dw92AskmAQhkDaR6I0J1euURFNjOwzPqzyKGTfQDlJ+sqAMvSAdCB60zlgDgMrvI+M4iVudJAPWrHMHmWYggtfpI86RACDwfn/AegfiKxpzND3wGXgE+knAQIulXQ2l8gmj58IbJmxD9edVR0G0jCAdKCtE6mkAxk3d3UYdh3puJkw9AiDfNim8tqHHZQOfIbVe8gIZ0oYQjAd5r/hVi2G/WGPoWyzwwbqA2Mm0emIV/V8IAwfICO8PvLhDSqE8a5ePrQw/hfEYPtoA6ekh/G+ng+E4d9gQmwQMHeIQR0yKtRqm7udgg/mAI3gZkHyAdeLxR7D+eCMEDCVpAwfSTDqMKyIgVBHSSaVaAxvk8w/4HhEquEDxkewo7TGCO4ekH1HglGHYa+QDqSDQBOFjUvSSWFw3OSIhAIu3p4guIsidt2R0vQRyDzrN3C8IE1fiQHN39cJBskG6WNWzqAk+/RLLYb/gNmgRfERmsxxGNQQFGMRO+E960G4n05qW8SeUrugmn/SZPhdbYOWtAuF/iG99nctBvdZsvBcKDdU6SdTnbSC4YIDRSrSTyqMF6nmH7SMUD21QcYLhXEzk/esYcMnRRvicROeP+TSyUoXHC8zkfnDRuOMhaeO8Fmhk05E5lHwfPIsdSNUGyai80mFeTUDocjgflbNBjqvVni+YBjeq0Ho2BCqPWcxEEp9hAs+XZ1Fn7MUnjcZhj8UGNxn+cGUgujzpsJzNwvxGYZw/9Cwlj53K6w/MLItkIEMmBrl0fUHhXUYVvOPAIT7rDwUo2wdRi8hCAM0u/1FZQKXKV2PAtflSgxtKYTb1mJI1+XA9ckSw1EKcdRiyNYnwXXaEgNuSyCObS2GfJ1Wq3UShqMQwm239Rjy9WqtYJjkAbjNh3CNtibDed0e2r9gCczpM6YQx+qiaNROGEaeqUjB7F8Eit2Ug7rEO/IId4zrKqwNk4/tVF8a/eVE6Qgyu48D7WdRWZfWkt7yBacQMQXFcF03OmYIf8bXLDbhJVwmu58F7evR68P8AMkLTsIR6xjv7OT1Ez1nV/lw/1vY1wONcCz2PCqFYCs+yzhf1Z8AaVHc3wT2eR1n/Nhsnktv/IUZKxgdI+aiq+ZSnpylfV7JfrdtWt0mVQUCH1kzjkdcRCBaTi6FESnvdwv3/S0zXDZTXTE1vOBMx0TxRyYQjUZ6Uy8UHQyu7PvzM4KkwWPzLPaQ2Rdc0V8cBKLHkNtQq+cfeOdAHHPKEhSNaHyJSggv7H+v2Pt6IS8i1XMg5fMwtul1m2UVILKkSFSIQ2NRuvGxEhHeeZjiuSDLmSwrBMW0jK0wMoLopfif6p2Ps0JE+OeCmOHTsmY9HkHZCJKaUTUTypHg5oXgfFR+TswaP/LK4EI0Xgz8Uv6OY0PmRYYgOCeWnZdzutyfwY0G0d9fK18J779KuyHxebnk3KDtiF3gGPH3xff/lb4qJyTrBO03ZecG6flJayxDKHYSjcZ/Ly4qELK7aeLLzk/Sc6Sm1IZmMRoxAlEBQhbJ5qMJnSONz9N6AAIbjRShACGJRGIEdJ62sQhHEMM5GjkCGw7g5uUleK640d+ADHk0vn3PGV6zgqWRiDUBz1fDP6SZRYOY/i1HyNwBItHkNG4eA1xMUl/8IYV4LXwJ3woyqEDktb3GCD/y4sFI8F4D4b8DAjJcZZewDM0FSM+tjc+g4ASPART/ZRjR+ziqpf6g+aB4Mb8u8XtJYGRZhm8ql16JqhK/n6UGcaHMIESQvaemFA/aS31XYBC8FwUwqFiR9JTfv9Y3AWKArUh769f6JoAMoBVfk3yQN06pCQoMjYWU4jUdMGQEchNUGOQB+QEygASK7zWLvQAYYA+UGcReZAz8xqlEoPOuPdeLCzHDlXLJOu/7V0PyTcSgFoQaDBSjwJFP5thO6koLQJ8hxmDs+JoxvJ4N0ASoxZCTEEuy7uHilfy1qFE91f8BndP+AUyXPe0AAAAASUVORK5CYII="></Avatar>
        <Typography component = "h3" variant="h6">
        Abdyrasul Oraznyyazov
        </Typography>
        
        </Box>
        <Typography component = "p" variant="body2">
        According to an article from the New York Times, a portrait produced by Artificial Intelligence was hanging at Christie’s New York opposite an Andy Warhol print and beside a bronze work by Roy Lichtenstein. It was sold for well over double the price realized by both those pieces combined. “Edmond de Belamy, from La Famille de Belamy” sold for $432,500 including fees, over 40 times Christie’s initial estimate of $7,000-$10,000. The buyer was an anonymous phone bidder.
Artificial Intelligence (AI) is getting more importance in different fields and it’s drastically changing the nature of creative processes. Did you imagine using AI to create art? This is happening right now! TCheck this music video using AI:
        </Typography>
      </Box> 
      {/* <ReactMarkdown source ={`# This is a header\n\nAnd this is a paragraph`}/> */}
      </Container>
        </React.Fragment>
    )
}
