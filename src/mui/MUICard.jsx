import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardCover from '@mui/joy/CardCover';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

function MUICard() {

    const viewCard2 = () => {
        return (
            <Card
                data-resizable
                sx={{
                    textAlign: 'center',
                    alignItems: 'center',
                    width: 343,
                    // to make the demo resizable
                    overflow: 'auto',
                    resize: 'horizontal',
                    '--icon-size': '100px',
                }}
            >
                <CardOverflow variant="solid" color="warning">
                    <AspectRatio
                        variant="outlined"
                        color="warning"
                        ratio="1"
                        sx={{
                            m: 'auto',
                            transform: 'translateY(50%)',
                            borderRadius: '50%',
                            width: 'var(--icon-size)',
                            boxShadow: 'sm',
                            bgcolor: 'background.surface',
                            position: 'relative',
                        }}
                    >
                        <div>
                            <BakeryDiningIcon color="warning" sx={{ fontSize: '4rem' }} />
                        </div>
                    </AspectRatio>
                </CardOverflow>
                <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                    🎊 Congrats Julia 🎊
                </Typography>
                <CardContent sx={{ maxWidth: '40ch' }}>
                    You just gain one Cookhat for Salad cooking. Share your achievement with your
                    friends.
                </CardContent>
                <CardActions
                    orientation="vertical"
                    buttonFlex={1}
                    sx={{
                        '--Button-radius': '40px',
                        width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                    }}
                >
                    <Button variant="solid" color="warning">
                        Share
                    </Button>
                    <Button variant="plain" color="neutral">
                        Skip
                    </Button>
                </CardActions>
            </Card>
        )
    }

    const viewCard = () => {
        return (
            <Box
                sx={{
                    perspective: '1000px',
                    transition: 'transform 0.4s',
                    '& > div, & > div > div': {
                        transition: 'inherit',
                    },
                    '&:hover': {
                        '& > div': {
                            transform: 'rotateY(30deg)',
                            '& > div:nth-child(2)': {
                                transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                            },
                            '& > div:nth-child(3)': {
                                transform: 'translate3d(45px, 50px, 40px)',
                            },
                        },
                    },
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        minHeight: '280px',
                        width: 320,
                        backgroundColor: '#fff',
                        borderColor: '#000',
                    }}
                >
                    <Typography level="h2" fontSize="lg" textColor="#000">
                        Card
                    </Typography>
                    <CardCover
                        sx={{
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            border: '1px solid',
                            borderColor: '#777',
                            backdropFilter: 'blur(1px)',
                        }}
                    >
                        <Typography level="h2" fontSize="lg" textColor="#fff">
                            Card Cover
                        </Typography>
                    </CardCover>
                    <CardContent
                        sx={{
                            alignItems: 'self-end',
                            justifyContent: 'flex-end',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
                            border: '1px solid',
                            borderColor: '#000',
                            backdropFilter: 'blur(1px)',
                        }}
                    >
                        <Typography level="h2" fontSize="lg" textColor="#fff" m={2}>
                            Card Content
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        )
    }

    return (
        <div class="grid grid-cols-3 gap-6 py-5">
            <div class="pl-10">{viewCard()}</div>
            <div class="pl-10">{viewCard2()}</div>
        </div>
    );
}

export default MUICard;