import {Request, RequestHandler, Response} from 'express';
import prisma from '../prisma.js';


const allFavorites = async () =>{
    return await prisma.favorites.findMany({})}

const addFavorites = (urlName: string, url:string) =>{
    return prisma.favorites.create({
        data: {
            name: urlName,
            url: url
        }
    })
}

const deleteFavorite = (nameId: number) =>{
    return prisma.favorites.delete({
        where: {
            id: nameId
        }
    })
}

export default {allFavorites, addFavorites, deleteFavorite};