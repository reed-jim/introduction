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
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Link from '@mui/material/Link';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeIcon from '@mui/icons-material/Home';

import theme from './Theme/Theme';

import { useState } from 'react';

import officeImage from "./images/office2.png"
import coderImage from "./images/coder.png"


import mergeSpecial0 from "./images/merge special 0.png";
import mergeSpecial1 from "./images/merge special 1.png";
import mergeSpecial2 from "./images/merge special 2.png";

import blastbattle0 from "./images/blastbattle 0.png";
import blastbattle1 from "./images/blastbattle 1.png";
import blastbattle2 from "./images/blastbattle 2.png";
import blastbattle3 from "./images/blastbattle 3.png";
import blastbattle4 from "./images/blastbattle 4.png";

import factorizer0 from "./images/factorizer 0.png";
import factorizer1 from "./images/factorizer 1.png";
import factorizer2 from "./images/factorizer 2.png";
import factorizer3 from "./images/factorizer 3.png";
import factorizer4 from "./images/factorizer 4.png";
import factorizer5 from "./images/factorizer 5.png";
import factorizer6 from "./images/factorizer 6.png";
import factorizer7 from "./images/factorizer 7.png";
import factorizer8 from "./images/factorizer 8.png";
import factorizer9 from "./images/factorizer 9.png";

import foodPlease0 from "./images/food please 0.png";
import foodPlease1 from "./images/food please 1.png";
import foodPlease2 from "./images/food please 2.png";
import foodPlease3 from "./images/food please 3.png";
import foodPlease4 from "./images/food please 4.png";
import foodPlease5 from "./images/food please 5.png";
import foodPlease6 from "./images/food please 6.png";

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

const summaryContent = [
    "Solo game developer with roughly 3 years in experience. Producing 4 mobile games in total throughout my career",
    "Always dreaming of making a trending game with millions of download that create huge profit for the company",
    "Prioritizing hard-working, enthusiasm and discipline on work",
    "Capable of working more than 12 hours a day"
]

const skills = [
    "Farmiliar with Unity Editor Software",
    "C# Programming to write Scripts",
    "Strong understanding of OOP",
    "Knowledge of game physics, particle systems, animation, UI",
    "Scripting Optimization",
    "Version Control using Github",
    "Coming up with ideals for new game"
]

const games = [
    {
        time: "3/2020 - 11/2020",
        name: "Blastbattle: Bubble Shooter Game",
        description: "100+ levels bubble shooter game",
        link: "https://play.google.com/store/apps/details?id=com.WillingGames.BubbleShooter",
        images: [blastbattle0, blastbattle1, blastbattle2, blastbattle3, blastbattle4]
    },
    {
        time: "1/2021 - 7/2021",
        name: "Merge Special - Block Puzzle Game",
        description: "New interesting way to play 2048 game",
        link: "https://play.google.com/store/apps/details?id=com.WillingsGame.Shooting",
        images: [mergeSpecial0, mergeSpecial1, mergeSpecial2]
    },
    {
        time: "10/2021 - 4/2022",
        name: "Factorizer - Management & Idle",
        description: "Factory Management and Simulation",
        link: "https://play.google.com/store/apps/details?id=com.KreativePlay.TycoonGame&pli=1",
        images: [factorizer0, factorizer1, factorizer2,
            factorizer3, factorizer4, factorizer5, factorizer6,
            factorizer7, factorizer8, factorizer9
        ]
    },
    {
        time: "6/2023 - 8/2023",
        name: "Food Please!",
        description: "Hyper casual restaurant Management and Simulation",
        link: "https://play.google.com/store/apps/details?id=com.KreativePlay.TycoonGame&pli=1",
        images: [foodPlease0, foodPlease1, foodPlease2,
            foodPlease3, foodPlease4, foodPlease5, foodPlease6
        ]
    }
]

const GameList = (isDesktop, zoomImage) => {
    const list = []

    for (let i = 0; i < games.length; i++) {
        list.push(
            <Stack
                key={games[i].name}
                bgcolor={theme.palette.primary.light}
                padding={6}
                borderRadius={"16px"}
                flexGrow={1}
            >
                <Typography variant='h5' color={theme.palette.primary.onBackgroundText}>
                    {games[i].time}
                </Typography>

                <Stack direction={"row"} display={"flex"} alignItems={"center"} marginTop={"56px"}>
                    <Stack direction={"row"} spacing={1} sx={{ flexGrow: 1 }}>

                        {
                            i == 3 ?
                                <Chip label="New" color="success" /> : ""
                        }
                        <Typography variant='h5' color={theme.palette.primary.onBackgroundText}
                            fontWeight={"bold"}
                        >
                            {games[i].name}
                        </Typography>


                    </Stack >

                    {
                        isDesktop && i == 3 ?
                            <Button variant="contained" color="success"
                                href={games[i].link} target="_blank"
                            >
                                <Stack direction="row" display={"flex"} alignItems={"center"}>
                                    {/* <PlayArrowIcon></PlayArrowIcon> */}
                                    <Typography color={"white"}>
                                        Play Now
                                    </Typography>
                                </Stack>
                            </Button>
                            :
                            <></>
                    }
                </Stack>

                {
                    !isDesktop && i == 3 ?
                        <Stack direction={"row"} display={"flex"}>
                            <Stack flexGrow={1} />

                            <Button variant="contained" color="success"
                                href={games[i].link} target="_blank"
                            >
                                <Stack direction="row" display={"flex"} alignItems={"center"}>
                                    {/* <PlayArrowIcon></PlayArrowIcon> */}
                                    <Typography color={"white"}>
                                        Play Now
                                    </Typography>
                                </Stack>
                            </Button>
                        </Stack>
                        :
                        <></>
                }

                <Typography color={theme.palette.primary.onBackgroundText} align='justify'>
                    {games[i].description}
                </Typography>

                {/* <Stack direction={"row"} spacing={1}
                            display={"flex"} alignItems={"center"}
                        >
                            <DownloadIcon></DownloadIcon>
                            <Link variant='caption' href={games[i].link}
                                sx={{ textAlign: "justify" }}
                            >
                                {games[i].link}
                            </Link>
                        </Stack> */}

                <ImageList variant="masonry" cols={3} gap={36} sx={{ marginTop: "32px" }}>
                    {games[i].images.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                loading="lazy"
                                onClick={() => zoomImage(item)}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Stack>


            // <TimelineItem>
            //     <TimelineSeparator>
            //         <TimelineDot color={'warning'} />
            //         <TimelineConnector sx={{ backgroundColor: '#ffb67a' }} />
            //     </TimelineSeparator>

            //     <TimelineContent>



            //     </TimelineContent>
            // </TimelineItem>

        );
    }

    return list;
};

const Summary = (showInDesktop = true, isDesktop) => {
    var condition = false

    if (showInDesktop && isDesktop) {
        condition = true
    }
    if (!showInDesktop && !isDesktop) {
        condition = true
    }

    if (showInDesktop) {
        return condition ?
            <Grid sm={12} md={9} paddingLeft={isDesktop ? "36px" : 0} marginTop={isDesktop ? "120px" : 0}
                display={"flex"} alignItems={"center"}
            >
                <Typography variant='h6' color={theme.palette.primary.onBackgroundText} textAlign={"justify"}>
                    Solo game developer with roughly 3 years in experience.
                    Producing 4 mobile games in total throughout my career.
                    Most of them reached thousands of downloads on Google Play.
                    Always dreaming of making a trending game with millions of download that create huge profit for the company.
                    Prioritizing hard-working, enthusiasm and discipline on work.
                    Capable of working more than 12 hours a day.
                </Typography>
            </Grid>
            :
            <></>
    }
    else {
        return condition ?
            summaryContent.map(
                item =>
                    <List
                        key={item}
                        disablePadding sx={{ listStyleType: "disc", pl: 2 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography>
                                {item}
                            </Typography>
                        </ListItem>
                    </List>
            )
            :
            <></>
    }
}

export default function BoxComponent() {
    const Desktop = useMediaQuery('(min-width:1200px)');
    const Ipad = useMediaQuery('(min-width:1000px)');
    const Mobile = useMediaQuery('(min-width:800px)');

    const [isShowImage, setIsShowImage] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    const zoomImage = (src) => {
        // setImgSrc(src)
        // setIsShowImage(true)
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container padding="0 24px 24px 24px"
            // style={{ background: "linear-gradient(0deg, rgb(255 233 201), rgb(255 238 187))" }}
            >
                <Grid container height={window.innerHeight} padding={"24px 0 24px 0"}>
                    {/* Zoomed Image */}
                    {
                        isShowImage ?
                            <Stack position={"fixed"} zIndex={1} top={0} left={0}
                             bgcolor={"#00000080"} padding={"16px"}
                                width={"100%"} height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}
                            >
                                <Button position="absolute"
                                    sx={{
                                        top:"20px",
                                        right: "-20px"}}
                                >
                                    Close
                                </Button>

                                <img
                                    src={`${imgSrc}?w=164&h=164&fit=crop&auto=format`}
                                    loading="lazy"
                                    style={{
                                        width: "30%",
                                        // maxHeight: "1000px"
                                    }}
                                />
                            </Stack>
                            :
                            <></>
                    }

                    {/* Name */}
                    <Grid xs={0} sm={0} md={6}>

                    </Grid>

                    <Grid xs={12} sm={12} md={6} bgcolor={theme.palette.primary.light} color={theme.palette.primary.contrastText}
                        padding={4}
                        maxHeight={"300px"}
                        borderRadius={"16px 0 0 16px"}
                        display={"flex"} alignItems={"center"}
                    >
                        <Stack spacing={1} sx={{ flexGrow: 1 }}>
                            <Typography variant='h4'>
                                NGUYEN KHANG NINH
                            </Typography>

                            <Typography>
                                Game Developer
                            </Typography>
                        </Stack>


                    </Grid>

                    {/* Summary */}
                    <Grid xs={12} sm={12} md={3} bgcolor={Desktop ? theme.palette.primary.light : ""}
                        borderRadius={"0 16px 16px 0"}
                        marginTop={Desktop ? "120px" : ""}
                        display="flex" justifyContent="center" alignItems="center"
                    >
                        <Box
                            component="img"
                            sx={{
                                maxHeight: { xs: 400, md: 400 },
                                maxWidth: { xs: 300, md: 300 },
                                filter: "grayscale(0.7)",
                            }}
                            marginTop={Desktop ? "-300px" : "-400px"}
                            src={officeImage}
                        />
                    </Grid>

                    {Summary(true, Desktop)}
                </Grid>

                {Summary(false, Desktop)}

                {/* Skills */}
                <Grid container marginTop={"160px"}>
                    <Grid xs={12} sm={12} md={6} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <Box
                            component="img"
                            sx={{
                                maxHeight: { xs: 300, md: 300 },
                                maxWidth: { xs: 300, md: 300 },
                                filter: "grayscale(0.7)"
                            }}
                            src={coderImage}
                        />
                    </Grid>

                    <Grid xs={12} sm={12} md={6} bgcolor={theme.palette.secondary.light} color={theme.palette.secondary.contrastText}
                        padding={4}
                        marginTop={!Desktop ? "160px" : 0}
                        borderRadius={"16px 0 0 16px"}
                        display={"flex"} alignItems={"center"}
                    >
                        <Stack spacing={1}>
                            <Typography variant='h4'>
                                SKILLS
                            </Typography>

                            {
                                skills.map(
                                    item =>
                                        <List
                                            key={item}
                                            disablePadding sx={{ listStyleType: "disc", pl: 2 }}>
                                            <ListItem sx={{ display: 'list-item' }}>
                                                <Typography>
                                                    {item}
                                                </Typography>
                                            </ListItem>
                                        </List>
                                )
                            }
                        </Stack>
                    </Grid>
                </Grid>

                {/* Projects */}
                <Stack width={"100%"} marginTop={"160px"} display={"flex"} spacing={3}>
                    <Typography variant='h4' color={theme.palette.primary.onBackgroundText} textAlign={"center"}
                        marginBottom={"36px"}
                    >
                        PROJECTS
                    </Typography>

                    {GameList(Desktop, zoomImage)}
                </Stack>


                {/* <Timeline position="alternate-reverse">
                    {GameList()}
                </Timeline> */}

                {/* CONTACT */}
                <Stack direction={"row"} bgcolor={theme.palette.primary.light} marginTop={"160px"} width={"100%"}

                >
                    <Box bgcolor={theme.palette.primary.onBackgroundText} width={"20px"} height={"100%"} />

                    <Stack bgcolor={theme.palette.primary.light} spacing={2} padding={2} width={"100%"}>

                        <Typography variant='h4' textAlign={"left"}>
                            Contact
                        </Typography>

                        <Divider color="#aaa" />

                        <Stack direction={"row"} display={"flex"} justifyContent={"end"} width={"100%"}>
                            <Stack spacing={1}>
                                <Stack direction="row" spacing={1}>
                                    <EmailIcon></EmailIcon>
                                    <Typography>
                                        nocoop527@gmail.com
                                    </Typography>
                                </Stack>

                                <Stack direction="row" spacing={1}>
                                    <PhoneIcon></PhoneIcon>
                                    <Typography>
                                        0343509190
                                    </Typography>
                                </Stack>

                                <Stack direction="row" spacing={1}>
                                    <HomeIcon></HomeIcon>
                                    <Typography>
                                        Ward 12, Go Vap, Ho Chi Minh City
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
        </ThemeProvider>
    )
}