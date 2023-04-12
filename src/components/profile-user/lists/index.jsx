import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Grid from "@mui/material/Grid";
import PaginationBase from "../../common/pagination-base";

export const UserLists = (props) => {

    const { username } = useParams();
    const handleChangePage = (newPage) => {
        console.log("newPage: ", newPage);
    };

    let data = {
        total: 10,
        pageIndex: 1,
        pageSize: 10,
        totalPage: 2,
        list: [
            {
                id: 1,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/200/300' },
                ]
            },
            {
                id: 2,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/200/300' },
                ]
            },
            {
                id: 3,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/201/300' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/200/301' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/202/300' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/200/302' },
                ]
            },
            {
                id: 4,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/203/300' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/200/303' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/204/300' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/200/304' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/205/300' },
                ]
            },
            {
                id: 5,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/200/305' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/206/300' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/200/307' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/207/300' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/200/306' },
                ]
            }, {
                id: 6,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/207/300' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/200/307' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/208/300' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/200/308' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/209/300' },
                ]
            },
            {
                id: 7,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/200/309' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/210/301' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/201/300' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/201/301' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/201/302' },
                ]
            },
            {
                id: 8,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/200/300' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/200/300' },
                ]
            },
            {
                id: 9,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/200/309' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/210/301' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/201/300' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/201/301' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/201/302' },
                ]
            },
            {
                id: 10,
                title: 'Every Best Animated Feature Winner Ranked',
                description: 'In case you missed my video on the subject: www.youtube.com/watch?v=suVoydO-ssM&t=325s',
                totalFilm: 23,
                totalLike: 162,
                totalComment: 67,
                listPreview: [
                    { filmId: 1, thumbnail: 'https://picsum.photos/207/300' },
                    { filmId: 2, thumbnail: 'https://picsum.photos/200/307' },
                    { filmId: 3, thumbnail: 'https://picsum.photos/208/300' },
                    { filmId: 4, thumbnail: 'https://picsum.photos/200/308' },
                    { filmId: 5, thumbnail: 'https://picsum.photos/209/300' },
                ]
            }
        ]
    }

    return (
        <Box sx={{ margin: '48px 0', color: '#9ab' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ textTransform: 'uppercase' }}>Lists</Box>
            </Box>
            <Divider></Divider>
            <Box>
                <Grid container columns={12}>
                    <Grid item xs={12} lg={8}>
                        {(data.list.length > 0) ? (
                            <Box>
                                <Box sx={{marginBottom: '20px'}}>{data.list.map(listFilm => (<ListFilmCard key={listFilm.id} item={listFilm}></ListFilmCard>))}</Box>
                                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                    <PaginationBase totalPage={data.totalPage} pageIndex={data.pageIndex} onChange={handleChangePage}></PaginationBase>
                                </Box>
                            </Box>) : (<Box>Khong co du lieu</Box>)}
                    </Grid>
                    <Grid item xs={12} lg={4}></Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export const ListFilmCard = (props) => {
    const { username } = useParams();
    const { item } = props
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0' }}>
                <Box
                    component='a'
                    href={'/u/' + username + '/lists/' + item.id}
                    sx={{
                        minWidth: '240px', height: '110px', display: 'flex',
                        position: 'relative',
                        ':hover': {
                            border: '3px solid #9ab',
                            borderRadius: '6px'
                        }
                    }}>
                    {item.listPreview.map((film, index) => (
                        <Box key={film.id} sx={{
                            height: '100%',
                            aspectRatio: '2/3',
                            overflow: 'hidden',
                            position: 'absolute',
                            left: `${index * 41}px`,
                            zIndex: `${5 - index}`,
                            border: '1px solid #a5a691',
                            borderRadius: '4px',
                            boxShadow: '10px 0px 46px 0px #000'
                        }}>
                            <Box component='img'
                                src={film.thumbnail}
                                alt='film-thumbnail'
                                sx={{ width: '100%', height: 'auto', minHeight: '100%' }}
                            ></Box>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ width: 1, padding: '0 20px' }}>
                    <Box component='a'
                        href={'/u/' + username + '/lists/' + item.id}
                        sx={{ marginBottom: '8px', fontWeight: '700', fontSize: '20px', color: '#fff' }}
                    >
                        {item.title}
                    </Box>
                    <Box sx={{ marginBottom: '8px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                        <Box sx={{ marginRight: '16px' }}>{item.totalFilm} films</Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}><FavoriteIcon sx={{ marginRight: '4px', fontSize: '16px' }}></FavoriteIcon> {item.totalLike}</Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}><ChatBubbleIcon sx={{ marginRight: '4px', fontSize: '16px' }}></ChatBubbleIcon> {item.totalComment}</Box>
                    </Box>
                    <Box sx={{ fontSize: '16px', lineHeight: '24px', maxHeight: '48px', overflow: 'hidden' }}>{item.description}</Box>
                </Box>
            </Box>
            <Divider></Divider>
        </>
    )
}