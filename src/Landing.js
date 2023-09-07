import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';

import { ThemeProvider, createTheme } from '@mui/material/styles';


import theme from './Theme/Theme';

import officeImage from "./office2.png"


const imageData = [
    {
        img: "https://cdn.pixabay.com/photo/2023/09/02/03/14/fuji-apple-8228073_640.jpg",
        title: ""
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/08/29/07/13/dahlia-8220659_640.jpg",
        title: ""
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/08/29/07/13/dahlia-8220659_640.jpg",
        title: ""
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_640.jpg",
        title: ""
    },
]


export default function BoxComponent() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container
                style={{ background: "linear-gradient(0deg, rgb(255 196 172), rgb(255 233 173))" }}
                padding={"16px 0 16px 0"} spacing={0}
            >
                <Grid xs={6}>

                </Grid>

                <Grid xs={6} bgcolor={theme.palette.primary.light} color={theme.palette.primary.contrastText}
                    padding={4}
                    borderRadius={"8px 0 0 8px"}
                >
                    <Stack spacing={2}>
                        <Typography variant='h4'>
                            Nguyen Khang Ninh
                        </Typography>

                        <Typography>
                            Game Developer
                        </Typography>
                    </Stack>
                </Grid>

                <Grid xs={3} bgcolor={theme.palette.primary.light}
                    borderRadius={"0 8px 8px 0"}
                    marginTop={"120px"}
                    display="flex" justifyContent="center" alignItems="center"
                >
                    <Box
                        component="img"
                        sx={{
                            maxHeight: { xs: 400, md: 400 },
                            maxWidth: { xs: 350, md: 350 },
                            marginTop: "-280px",
                            filter: "sepia(1)"
                        }}
                        src={officeImage}
                    />
                </Grid>

                <Grid xs={9} padding={"48px"} marginTop={"120px"}>
                    <Typography variant='h5' color={theme.palette.primary.onBackgroundText}>
                        Solo game developer with roughly 3 years in experience.
                        Producing 5 mobile games in total throughout my career.
                        Most of them reached thousands of downloads on Google Play.
                        Always dreaming of making a trending game with millions of download that create huge profit for the company.
                        Prioritizing hard-working, enthusiasm and discipline on work.
                        Capable of working more than 12 hours a day since developing games is passion.
                    </Typography>
                </Grid>

                <Grid xs={12} marginTop={"120px"}>
                    <Typography variant='h3' color={theme.palette.primary.onBackgroundText} textAlign={"center"}>
                        Projects
                    </Typography>
                </Grid>

                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={'warning'} />
                            <TimelineConnector sx={{ backgroundColor: '#ffb67a' }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Stack bgcolor={theme.palette.primary.light}
                                padding={4}
                                borderRadius={"8px"}
                            >
                                <Typography variant='h5' color={theme.palette.primary.onBackgroundText}>
                                    Food Please! (6/2023 - 8/2023)
                                </Typography>

                                <Typography color={theme.palette.primary.onBackgroundText}>
                                    Hyper casual restaurant management game
                                </Typography>

                                <ImageList variant="masonry" cols={3} gap={8} sx={{marginTop: "32px"}}>
                                    {imageData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                                style={{ borderRadius: "4px" }}
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Stack>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={'warning'} />
                        </TimelineSeparator>
                        <TimelineContent>

                            <Stack bgcolor={theme.palette.primary.light}
                                padding={4}
                                borderRadius={"8px"}
                                spacing={2}
                            >
                                <Typography variant='h5' color={theme.palette.primary.onBackgroundText}>
                                    Food Please!
                                </Typography>

                                <Typography color={theme.palette.primary.onBackgroundText}>
                                    Hyper casual restaurant management game
                                </Typography>

                                <Link href="#">https://play.google.com/store/apps/details?id=com.instagram.android&hl=en-VN</Link>

                                <ImageList variant="masonry" cols={3} gap={8}>
                                    {imageData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                                style={{ borderRadius: "4px" }}
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Stack>

                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

                <Grid xs={12} marginTop={"500px"}>
                    <Typography variant='h5' textAlign={"center"}>
                        Contact
                    </Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}