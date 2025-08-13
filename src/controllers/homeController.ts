import { RequestHandler } from 'express';
import homeModel from '../model/homeModel.js';
import path from 'path';
import { spawn } from 'child_process';

const home: RequestHandler = async (req, res) =>{
    const allFavorites = await homeModel.allFavorites()
    res.setHeader('Cache-Control', 'no-store');
    res.render('index', {allFavorites})
};

const addFav: RequestHandler = async (req, res) =>{
    const urlName: string = req.body.name;
    const url: string = req.body.url;
    const favAdded = await homeModel.addFavorites(urlName, url)
    res.redirect('/')
}

const deleteFav: RequestHandler = async (req, res) =>{
    const nameId: number = parseInt(req.params.id);
    const favDelete = await homeModel.deleteFavorite(nameId);
    res.redirect('/')
}

const runOpenAll: RequestHandler = async (_req, res) => {
  // If you run `node` from the project root, this resolves to brokerageGui/openAll.bat
  const batPath = path.resolve(process.cwd(), 'openAll.bat');

  // Launch as a detached process so the HTTP request returns immediately
  const child = spawn('cmd.exe', ['/c', 'start', '""', batPath], {
    cwd: path.dirname(batPath),
    windowsHide: false,
    detached: true,
    stdio: 'ignore',
  });

  child.unref();
  res.redirect('/?started=1');
};


export default {home, addFav, deleteFav};